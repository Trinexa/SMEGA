export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image_url: string;
  tags: string[];
  featured: boolean;
  created_at: string;
}

export interface Proposal {
  id: string;
  company_name: string;
  contact_name: string;
  email: string;
  phone: string;
  services: string[];
  budget_range: string;
  project_description: string;
  timeline: string;
  status: 'pending' | 'reviewed' | 'approved' | 'declined';
  created_at: string;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user';
  created_at: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
  price_starting: number;
}

export interface Testimonial {
  id: string;
  client_name: string;
  company: string;
  rating: number;
  comment: string;
  image_url?: string;
  featured: boolean;
  created_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  admin_notes: string;
  created_at: string;
  updated_at: string;
}