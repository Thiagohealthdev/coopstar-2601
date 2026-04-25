// Tipos globais do projeto Coopstar Express

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  icon: string; // nome do ícone Lucide
  title: string;
  description: string;
  badge?: string;
  cta?: {
    label: string;
    href: string;
  };
}

export interface Stat {
  value: string;
  label: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactInfo {
  address: string;
  city: string;
  phones: string[];
  email: string;
  hours: string;
}
