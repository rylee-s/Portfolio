export interface Company {
  name: string;
  location: string;
  description?: string;
  duration: string;
  positions: Position[];
  technologies: string[];
  link: string;
}

export interface Position {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  dates: {
    start: string;
    end: string;
    duration: string;
  };
}

export interface Education {
  name: string;
  issuer: string;
  issueDate?: string;
  expirationDate?: string;
  graduationDate?: string;
  link?: string;
  linkText?: string;
}

export interface Project {
  name: string;
  subtitle: string;
  description: string;
  link: string;
  img: string;
  badges?: [
    {
      link: string;
      alt: string;
    },
  ];
  technology?: [
    {
      link: string;
      alt: string;
    },
  ];
}

export interface Skill {
  label: string;
  years: number;
  level: number;
}

export interface SkillCategory {
  categoryLabel: string;
  skills: Skill[];
}

export interface General {
  name: string;
  typewriter: {
    startText: string;
    list: string[];
  };
  bio: {
    sectionOne: string;
    sectionTwo: string;
  };
}

export interface Response {
  experience: Company[];
  education: Education[];
  skills: SkillCategory[];
  projects: Project[];
  general: General;
}
