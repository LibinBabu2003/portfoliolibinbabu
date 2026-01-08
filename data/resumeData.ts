
import { ResumeData } from '../types';

export const resumeData: ResumeData = {
  name: "Libin Babu",
  title: "AI / ML / Data Engineer",
  email: "Libinbabukalapurackal@gmail.com",
  phone: "+91 8547242798",
  location: "Kochi, Kerala, India",
  linkedin: "https://linkedin.com/in/libin-babu",
  github: "https://github.com/LibinBabu2003",
  // Updated with your provided Formspree ID
  contactFormId: "mojvgpwa", 
  // Add your resume PDF file path here (usually in the 'public' folder)
  resumeUrl: "https://drive.google.com/file/d/1DG2EX-iUOYfFJrCt6dRIkHz_vdcTFVUA/view?usp=sharing",
  summary: "Computer Science graduate with a strong foundation in Python programming, Machine Learning, and data analysis. Hands-on experience in data preprocessing, exploratory data analysis (EDA), and building predictive models using real-world datasets. Familiar with Deep Learning, Natural Language Processing, Computer Vision fundamentals, and modern AI workflows.",
  skills: [
    { name: "Python", category: "Programming", level: 90 },
    { name: "SQL", category: "Programming", level: 75 },
    { name: "C", category: "Programming", level: 70 },
    { name: "Pandas", category: "Data Analysis", level: 85 },
    { name: "NumPy", category: "Data Analysis", level: 85 },
    { name: "Scikit-learn", category: "Machine Learning", level: 80 },
    { name: "TensorFlow", category: "Deep Learning", level: 65 },
    { name: "Keras", category: "Deep Learning", level: 65 },
    { name: "NLP", category: "AI Domains", level: 70 },
    { name: "Computer Vision", category: "AI Domains", level: 70 },
    { name: "MySQL", category: "Databases", level: 75 },
    { name: "Git", category: "Tools", level: 80 },
    { name: "Flask", category: "Tools", level: 60 }
  ],
  projects: [
    {
      title: "Machine Learning Task Prediction System",
      description: "Built an end-to-end ML pipeline to predict task completion probability.",
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      achievements: [
        "Preprocessed and analyzed task-related data.",
        "Developed a Logistic Regression model.",
        "Evaluated model performance using accuracy, precision, and recall."
      ],
      github: "https://github.com/LibinBabu2003"
    },
    {
      title: "Customer Churn Prediction",
      description: "Predicting customer turnover using classification models.",
      tech: ["Python", "Random Forest", "Feature Engineering"],
      achievements: [
        "Implemented Logistic Regression and Random Forest.",
        "Performed feature engineering and cross-validation.",
        "Achieved 85% accuracy and derived actionable business insights."
      ],
      github: "https://github.com/LibinBabu2003"
    },
    {
      title: "System Log Data Analysis",
      description: "Analyzed large-scale system log data for performance monitoring.",
      tech: ["Python", "Pandas", "Matplotlib"],
      achievements: [
        "Identified performance bottlenecks and anomalies.",
        "Visualized trends and insights using Matplotlib."
      ],
      github: "https://github.com/LibinBabu2003"
    }
  ],
  experience: [
    {
      role: "Data Science Intern",
      company: "Senscript Technologies",
      period: "Jul 2025 – Present",
      description: [
        "Collected, cleaned, and prepared datasets for machine learning workflows.",
        "Performed exploratory data analysis (EDA) to identify trends and patterns.",
        "Built and evaluated machine learning models using Scikit-learn.",
        "Created reports and visualizations to communicate findings."
      ]
    }
  ],
  education: {
    degree: "Bachelor of Technology in Computer Science",
    institution: "APJ Abdul Kalam Technological University (KTU)",
    period: "Aug 2021 – May 2025",
    courses: ["Artificial Intelligence", "Machine Learning", "Data Science", "Probability & Statistics", "DBMS"]
  },
  certifications: [
    {
      name: "AI Agents Fundamentals",
      issuer: "Hugging Face",
      description: "Covered autonomous AI agents, tool usage, and prompt orchestration."
    },
    {
      name: "OCI AI Foundations Associate",
      issuer: "Oracle Cloud Infrastructure",
      description: "Validated knowledge of AI fundamentals and cloud-based AI services."
    }
  ],
  additional: {
    availability: "Immediate Joiner",
    languages: ["English (Fluent)", "Malayalam (Native)"],
    interests: ["Artificial Intelligence", "Generative AI", "AI Agents", "Continuous Learning"]
  }
};
