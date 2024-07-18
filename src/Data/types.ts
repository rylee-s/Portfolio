export interface Company {
  name: string;
  location: string;
  link: string;
  description?: string;
  skills?: SkillCategory[] | null;
  positions: Position[];
  duration?: string;
  technologies?: string[];
}

export interface Position {
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  bullets: string[];
  dates?: {
    start: string;
    end: string;
    duration: string;
  };
  skills?: SkillCategory[] | null;
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

export interface Link {
  link: string;
  alt: string;
}

export interface Project {
  name: string;
  subtitle: string;
  description: string;
  link: string;
  img: string;
  badges?: Link[];
  technology?: Link[];
}

export interface Skill {
  label: string;
  level: number;
  years?: number;
  months?: number;
  duration?: string;
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

export interface ResumeData {
  experience: Company[];
  education: Education[];
  skills: SkillCategory[];
  projects: Project[];
  general: General;
}
