export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "AI Dashboard",
    description: "Real-time analytics platform powered by machine learning for predictive insights.",
    tags: ["React", "Python", "TensorFlow", "PostgreSQL"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: "2",
    title: "E-Commerce Platform",
    description: "High-performance online store with seamless payment integration.",
    tags: ["Next.js", "Stripe", "Prisma", "Tailwind"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: "3",
    title: "DevOps Toolkit",
    description: "Automated deployment pipeline with monitoring and alerting.",
    tags: ["Docker", "Kubernetes", "Terraform", "Go"],
    github: "#",
  },
  {
    id: "4",
    title: "Mobile App",
    description: "Cross-platform mobile application for productivity tracking.",
    tags: ["React Native", "TypeScript", "Firebase"],
    link: "#",
  },
];
