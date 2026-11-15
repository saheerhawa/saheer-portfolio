export interface Education {
  degree: string;
  institution: string;
  academicLevel: string;
  graduationDate?: string;
  scores?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  shortTagline?: string;
  description: string;
  context: string;
  contribution?: string;
  status?: string;
  technologies: string[];
  developmentTools?: string[];
  plannedIntegration?: {
    label: string;
    technologies: string[];
  };
  repositoryUrl?: string;
  liveUrl?: string;
  notes?: string;
}

export interface Internship {
  role: string;
  organization: string;
  period: string; // e.g. "September – November"
  year?: string; // Optional field: year is currently unconfirmed
  description: string;
  knownContribution: string;
}

export interface HackathonAchievement {
  achievement: string; // e.g. "4th Place"
  event: string; // "ModelWars Hackathon"
  location: string; // "Manipal University Jaipur"
  framing: string; // "Our team placed 4th at the ModelWars Hackathon at Manipal University Jaipur."
}

export interface SocialLink {
  name: string;
  url: string;
  label: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    roleTagline: string;
    subTagline: string;
    bio: string[];
    email?: string; // Optional: left undefined until user provides a real address
  };
  hero: {
    introLabel: string;
    headingLines: string[];
    supportingText: string;
    primaryCta: {
      text: string;
      href: string;
    };
    secondaryCta: {
      text: string;
      href: string;
    };
  };
  about: {
    heading: string;
    paragraphs: string[];
  };
  education: Education;
  skillCategories: {
    webDevelopment: SkillCategory;
    programmingAndDatabases: SkillCategory;
    developmentTools: SkillCategory;
    interestsAndLearning: SkillCategory;
  };
  projects: {
    heading: string;
    supportingText: string;
    items: Project[];
  };
  experience: {
    heading: string;
    internship: Internship;
    hackathon: HackathonAchievement;
  };
  contact: {
    heading: string;
    description: string;
    socialLinks: SocialLink[];
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Saheer Hawa",
    roleTagline: "Frontend Developer",
    subTagline: "Final-year BSc Computer Science Student",
    bio: [
      "I am passionate about technology, software development, problem-solving, data science, and software testing.",
      "I have experience with Python, web development, SQL, and AI/ML fundamentals.",
      "I enjoy exploring innovative project ideas and want to build practical, impactful software, strengthen my technical skills, and gain real-world industry experience.",
    ],
    // Optional: Add your verified email here when ready to display on the portfolio.
    // email: "your.name@example.com",
  },

  hero: {
    introLabel: "FRONTEND DEVELOPER · FINAL-YEAR CS STUDENT",
    headingLines: ["Exploring technology.", "Building practical solutions."],
    supportingText:
      "I'm Saheer Hawa, a final-year BSc Computer Science student at ICS College, Khed. I build web interfaces and explore data science and software testing, with a focus on learning through practical projects.",
    primaryCta: {
      text: "Explore my work",
      href: "#projects",
    },
    secondaryCta: {
      text: "Get in touch",
      href: "#contact",
    },
  },

  about: {
    heading: "About Me",
    paragraphs: [
      "I'm a final-year BSc Computer Science student who enjoys turning ideas into useful software. My experience includes frontend development, Python, SQL, and academic projects, alongside an understanding of AI and machine learning fundamentals.",
      "I'm gaining practical experience through a Frontend & Research internship at ZenCro Digital. I'm interested in strengthening my development skills, exploring data science and software testing, and contributing to practical, impactful projects.",
    ],
  },

  education: {
    degree: "BSc Computer Science",
    institution: "ICS College, Khed",
    academicLevel: "Final Year",
    // graduationDate and scores are omitted as they have not been provided
  },

  skillCategories: {
    webDevelopment: {
      title: "Web Development",
      skills: ["HTML", "CSS", "Basic JavaScript", "Next.js"],
    },
    programmingAndDatabases: {
      title: "Programming and Databases",
      skills: ["Python", "SQL"],
    },
    developmentTools: {
      title: "Development Tools",
      skills: ["VS Code", "Antigravity", "Git"],
    },
    interestsAndLearning: {
      title: "Interests and Learning",
      skills: ["Data Science", "Software Testing", "AI/ML Fundamentals"],
    },
  },

  projects: {
    heading: "Selected Projects",
    supportingText: "A selection of academic and practical development work.",
    items: [
      {
        id: "studyflow",
        number: "01",
        title: "StudyFlow — Student–Teacher Academic Task Manager",
        shortTagline: "Academic Task Management System",
        description:
          "A web-based academic task management system that helps teachers manage assignments, students, and announcements, while allowing students to track assignments and monitor their academic progress.",
        context: "Academic project",
        // Editable contribution field: Neutral description preserved until individual/team allocation details are verified
        contribution:
          "Project architecture and core task management features (Individual / team scope unconfirmed).",
        status: "Completed",
        technologies: [
          "HTML",
          "CSS",
          "JavaScript",
          "Python",
          "Django",
          "SQLite",
        ],
        developmentTools: ["VS Code", "Git", "GitHub"],
        repositoryUrl: "https://github.com/saheerhawa/StudyFlow",
      },
      {
        id: "gymcore",
        number: "02",
        title: "GYMCORE — Gym Management System",
        shortTagline: "Gym Management Platform Interface",
        context: "Internship Project at ZenCro Digital",
        contribution: "Frontend Development",
        status: "Backend Integration Planned",
        description:
          "A frontend interface for a gym management platform, developed during my internship, covering member management, memberships, payments, attendance, staff management, and reporting workflows.",
        technologies: [
          "Next.js 16",
          "React 19",
          "TypeScript",
          "Tailwind CSS",
          "shadcn/ui",
          "Recharts",
          "Lucide React",
          "Zustand",
          "LocalStorage",
        ],
        plannedIntegration: {
          label: "Planned Backend & Database Integration",
          technologies: ["Python", "FastAPI", "PostgreSQL / Supabase"],
        },
        notes:
          "Frontend development completed during internship. Backend integration, persistent cloud storage, and production payment services are planned.",
        // No public repository or live demo URL exists or has permission to be shared
      },
    ],
  },

  experience: {
    heading: "Experience & Recognition",
    internship: {
      role: "Frontend & Research Intern",
      organization: "ZenCro Digital",
      period: "September – November",
      // year: "2024", // Optional field: year is currently unconfirmed
      description:
        "Contributed to frontend development for GYMCORE, a comprehensive gym management system interface covering member administration, attendance records, and reporting workflows.",
      knownContribution: "Frontend development for GYMCORE",
    },
    hackathon: {
      achievement: "4th Place",
      event: "ModelWars Hackathon",
      location: "Manipal University Jaipur",
      framing:
        "Our team placed 4th at the ModelWars Hackathon at Manipal University Jaipur.",
    },
  },

  contact: {
    heading: "Let's build something practical.",
    description:
      "I'm looking for opportunities to learn, contribute, and gain hands-on experience in software development.",
    socialLinks: [
      {
        name: "GitHub",
        url: "https://github.com/saheerhawa",
        label: "saheerhawa on GitHub",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saheer-hawa-b077173bb/",
        label: "Saheer Hawa on LinkedIn",
      },
    ],
  },
};
