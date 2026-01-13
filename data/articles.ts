export interface Article {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  slug: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Building Scalable Systems with Microservices",
    date: "2025-01-10",
    readTime: "8 min",
    excerpt: "Exploring patterns and practices for building resilient distributed systems.",
    slug: "scalable-microservices",
  },
  {
    id: "2",
    title: "The Future of Web Development",
    date: "2025-01-05",
    readTime: "5 min",
    excerpt: "Analyzing emerging trends and technologies shaping the web.",
    slug: "future-web-dev",
  },
  {
    id: "3",
    title: "Performance Optimization Deep Dive",
    date: "2024-12-28",
    readTime: "12 min",
    excerpt: "Practical techniques for achieving sub-100ms page loads.",
    slug: "performance-optimization",
  },
  {
    id: "4",
    title: "TypeScript Best Practices",
    date: "2024-12-20",
    readTime: "6 min",
    excerpt: "Advanced typing patterns for production applications.",
    slug: "typescript-best-practices",
  },
];
