import { projects } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            <span className="text-[#00FF94]">/</span>Projects
          </h1>
          <p className="text-[#A1A1AA] text-lg">Selected works and experiments</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="p-6 bg-[#0A0A0A] border border-[#333] rounded-xl hover:border-[#EDEDED] transition-all duration-200 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-semibold group-hover:text-[#00FF94] transition-colors">
                  {project.title}
                </h2>
                <div className="flex gap-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[#111] rounded-lg transition-colors">
                      <Github className="w-5 h-5 text-[#52525B] hover:text-[#EDEDED]" />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[#111] rounded-lg transition-colors">
                      <ExternalLink className="w-5 h-5 text-[#52525B] hover:text-[#EDEDED]" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-[#A1A1AA] mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-mono bg-[#111] border border-[#333] rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
