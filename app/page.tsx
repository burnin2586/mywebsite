import { BentoCard } from "@/components/BentoCard";
import { CyberButton } from "@/components/CyberButton";
import { projects } from "@/data/projects";
import { articles } from "@/data/articles";
import { skills } from "@/data/skills";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 2);
  const latestArticles = articles.slice(0, 3);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="mb-16 opacity-0 animate-fade-in">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00FF94] animate-pulse" />
            <span className="text-sm font-mono text-[#00FF94] tracking-wide uppercase">Available for work</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
            Full-Stack<br />
            <span className="text-[#00FF94]">Developer</span>
          </h1>
          <p className="text-lg md:text-xl text-[#A1A1AA] max-w-2xl mb-8">
            Crafting digital experiences with precision and purpose. 
            Specializing in modern web technologies and scalable systems.
          </p>
          <div className="flex flex-wrap gap-4">
            <CyberButton href="/projects">
              View Projects <ArrowRight className="w-4 h-4" />
            </CyberButton>
            <CyberButton href="/contact" variant="secondary">
              Get in Touch
            </CyberButton>
          </div>
        </section>

        {/* Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Featured Projects - 2x2 */}
          <BentoCard span="2" className="opacity-0 animate-fade-in animate-fade-in-delay-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Featured Projects</h2>
              <Link href="/projects" className="text-[#00FF94] hover:underline text-sm flex items-center gap-1">
                View All <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="space-y-4">
              {featuredProjects.map((project) => (
                <div key={project.id} className="p-4 bg-[#111] rounded-lg border border-[#222] hover:border-[#00FF94]/50 transition-colors group">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium mb-1 group-hover:text-[#00FF94] transition-colors">{project.title}</h3>
                      <p className="text-sm text-[#A1A1AA] mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-1 text-xs font-mono bg-[#0A0A0A] border border-[#333] rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-[#52525B] group-hover:text-[#00FF94] transition-colors flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Tech Stack */}
          <BentoCard className="opacity-0 animate-fade-in animate-fade-in-delay-2">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-5 h-5 text-[#00FF94]" />
              <h2 className="text-lg font-semibold">Tech Stack</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.slice(0, 8).map((skill) => (
                <span
                  key={skill.name}
                  className="px-3 py-1.5 text-xs font-mono bg-[#111] border border-[#333] rounded-full hover:border-[#00FF94] hover:text-[#00FF94] transition-colors cursor-default"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* Connect */}
          <BentoCard className="opacity-0 animate-fade-in animate-fade-in-delay-3">
            <h2 className="text-lg font-semibold mb-4">Connect</h2>
            <div className="space-y-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#111] transition-colors group">
                <Github className="w-5 h-5 text-[#52525B] group-hover:text-[#EDEDED]" />
                <span className="text-sm text-[#A1A1AA] group-hover:text-[#EDEDED]">GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#111] transition-colors group">
                <Linkedin className="w-5 h-5 text-[#52525B] group-hover:text-[#EDEDED]" />
                <span className="text-sm text-[#A1A1AA] group-hover:text-[#EDEDED]">LinkedIn</span>
              </a>
              <a href="mailto:hello@example.com" className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#111] transition-colors group">
                <Mail className="w-5 h-5 text-[#52525B] group-hover:text-[#EDEDED]" />
                <span className="text-sm text-[#A1A1AA] group-hover:text-[#EDEDED]">Email</span>
              </a>
            </div>
          </BentoCard>

          {/* Latest Articles */}
          <BentoCard span="2" className="opacity-0 animate-fade-in animate-fade-in-delay-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Latest Articles</h2>
              <Link href="/articles" className="text-[#00FF94] hover:underline text-sm flex items-center gap-1">
                View All <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="divide-y divide-[#222]">
              {latestArticles.map((article) => (
                <Link key={article.id} href={`/articles/${article.slug}`} className="flex items-center justify-between py-3 group">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-[#52525B] group-hover:text-[#00FF94] transition-colors w-20">
                      {article.date}
                    </span>
                    <span className="text-sm text-[#A1A1AA] group-hover:text-[#EDEDED] group-hover:translate-x-2 transition-all">
                      {article.title}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#52525B] group-hover:text-[#00FF94] transition-colors" />
                </Link>
              ))}
            </div>
          </BentoCard>

          {/* About Preview */}
          <BentoCard span="2" className="opacity-0 animate-fade-in animate-fade-in-delay-5">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00FF94] to-[#BC13FE] flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-black">M</span>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">About Me</h2>
                <p className="text-sm text-[#A1A1AA] mb-4">
                  A passionate developer with expertise in building modern web applications. 
                  Focused on creating efficient, scalable, and user-centric solutions.
                </p>
                <Link href="/about" className="text-[#00FF94] hover:underline text-sm flex items-center gap-1">
                  Learn More <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </BentoCard>
        </section>
      </div>
    </div>
  );
}
