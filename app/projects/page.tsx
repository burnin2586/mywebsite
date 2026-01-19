import { projects } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            <span className="text-[#b88a3d]">/</span>Projects
          </h1>
          <p className="text-[#5b4630] text-lg">Selected works and experiments</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="p-6 bg-[#fff9ee] border border-[#cdb892] rounded-xl hover:border-[#b88a3d] transition-all duration-200 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-semibold group-hover:text-[#b88a3d] transition-colors">
                  {project.title}
                </h2>
                <div className="flex gap-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[#f1e7d6] rounded-lg transition-colors">
                      <Github className="w-5 h-5 text-[#8a6f4b] hover:text-[#2f2417]" />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[#f1e7d6] rounded-lg transition-colors">
                      <ExternalLink className="w-5 h-5 text-[#8a6f4b] hover:text-[#2f2417]" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-[#5b4630] mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-mono bg-[#f1e7d6] border border-[#cdb892] rounded-full">
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
