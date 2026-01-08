
export interface Project {
  title: string;
  description: string;
  tech: string[];
  achievements: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  category: string;
  level: number; // 0 to 100
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  description: string;
}

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  summary: string;
  contactFormId?: string; // Formspree or similar ID
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  education: {
    degree: string;
    institution: string;
    period: string;
    courses: string[];
  };
  certifications: Certification[];
  additional: {
    availability: string;
    languages: string[];
    interests: string[];
  };
}
