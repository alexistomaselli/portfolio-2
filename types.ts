
import { ReactNode } from "react";

export type Language = 'es' | 'en' | 'it';

export interface Project {
  id: string;
  name: string;
  slug: string;
  description: string;
  url: string;
  tags: string[];
  category: 'e-commerce' | 'corporate' | 'non-profit' | 'medical' | 'other';
  imageUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  title: string;
  desc: string;
}

export interface Profile {
  name: string;
  role: string;
  email: string;
  whatsapp: string;
  linkedin: string;
  avatarUrl: string;
  about: string;
  stats: {
    projects: string;
    projectsLabel: string;
    commitment: string;
    commitmentLabel: string;
  };
  buttons: {
    projects: string;
    contact: string;
  }
}

export interface UIContent {
  nav: NavItem[];
  profile: Profile;
  projects: {
    title: string;
    subtitle: string;
    list: Project[];
    viewDetails: string;
    modal: {
      about: string;
      responsive: string;
      links: string;
      visit: string;
    }
  };
  about: {
    title: string;
    intro: string;
    focus: string;
    skills: Skill[];
  };
  contact: {
    title: string;
    text: string;
    whatsappBtn: string;
    rights: string;
  };
}
