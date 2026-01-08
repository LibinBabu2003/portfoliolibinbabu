
import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls, Float, Preload } from '@react-three/drei';
import * as THREE from 'three';
import { resumeData } from '../data/resumeData';

// Bypassing strict JSX checks for Three.js elements
const TGroup = 'group' as any;
const TAmbientLight = 'ambientLight' as any;
const TPointLight = 'pointLight' as any;

const SkillWord = ({ word, position, color }: { word: string; position: THREE.Vector3; color: string }) => {
  const ref = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (ref.current) {
      // Smoothly rotate text to face camera
      ref.current.quaternion.copy(state.camera.quaternion);
    }
  });

  return (
    <TGroup position={position} ref={ref}>
      <Text
        fontSize={0.28}
        color={hovered ? "#22d3ee" : color}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
        // Removing the specific 'font' URL to prevent Suspense hang
        // Drei uses a reliable default font (Roboto-like) when none is provided
        anchorX="center"
        anchorY="middle"
        maxWidth={2}
        textAlign="center"
      >
        {word}
      </Text>
    </TGroup>
  );
};

const Cloud = ({ radius = 4 }) => {
  const skills = useMemo(() => {
    const list = resumeData.skills.map(s => s.name);
    const result: { word: string; pos: THREE.Vector3; color: string }[] = [];
    
    for (let i = 0; i < list.length; i++) {
      // Fibonacci Sphere algorithm for even distribution
      const phi = Math.acos(-1 + (2 * i) / list.length);
      const theta = Math.sqrt(list.length * Math.PI) * phi;
      
      const pos = new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
      
      const colors = ["#22d3ee", "#3b82f6", "#818cf8", "#6366f1", "#a855f7"];
      const color = colors[i % colors.length];
      
      result.push({ word: list[i], pos, color });
    }
    return result;
  }, [radius]);

  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <TGroup ref={groupRef}>
      {skills.map((skill, i) => (
        <SkillWord key={i} word={skill.word} position={skill.pos} color={skill.color} />
      ))}
    </TGroup>
  );
};

const SkillSphere: React.FC = () => {
  return (
    <div className="w-full h-[400px] md:h-[600px] cursor-grab active:cursor-grabbing outline-none">
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 40 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]} // Performance optimization for high-res screens
      >
        <TAmbientLight intensity={0.7} />
        <TPointLight position={[10, 10, 10]} intensity={1.5} />
        <TPointLight position={[-10, -10, -10]} color="#3b82f6" intensity={0.5} />
        
        <Float speed={3} rotationIntensity={0.5} floatIntensity={0.5}>
          <Cloud radius={4.2} />
        </Float>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          rotateSpeed={0.5}
          makeDefault
        />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default SkillSphere;
