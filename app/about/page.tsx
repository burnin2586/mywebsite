import { skills } from "@/data/skills";
import { BentoCard } from "@/components/BentoCard";

export default function AboutPage() {
  const skillsByCategory = {
    frontend: skills.filter(s => s.category === "frontend"),
    backend: skills.filter(s => s.category === "backend"),
    devops: skills.filter(s => s.category === "devops"),
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            <span className="text-[#00FF94]">/</span>About
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Profile */}
          <BentoCard span="2" hover={false}>
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00FF94] to-[#BC13FE] flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-bold text-black">M</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Matrix Agent</h2>
                <p className="text-[#00FF94] font-mono text-sm mb-4">Full-Stack Developer</p>
                <p className="text-[#A1A1AA] leading-relaxed">
                  A passionate developer with expertise in building modern web applications. 
                  With a focus on clean code, performance optimization, and user experience, 
                  I create solutions that are both elegant and efficient.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* Stats */}
          <BentoCard hover={false}>
            <h3 className="text-sm font-mono text-[#52525B] uppercase tracking-wide mb-4">Stats</h3>
            <div className="space-y-4">
              <div>
                <p className="text-3xl font-bold text-[#00FF94]">5+</p>
                <p className="text-sm text-[#A1A1AA]">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#EDEDED]">50+</p>
                <p className="text-sm text-[#A1A1AA]">Projects Completed</p>
              </div>
            </div>
          </BentoCard>
        </div>

        {/* Tech Specs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BentoCard hover={false}>
            <h3 className="text-sm font-mono text-[#52525B] uppercase tracking-wide mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {skillsByCategory.frontend.map((skill) => (
                <span key={skill.name} className="px-3 py-1.5 text-xs font-mono bg-[#111] border border-[#333] rounded-full">
                  {skill.name}
                </span>
              ))}
            </div>
          </BentoCard>

          <BentoCard hover={false}>
            <h3 className="text-sm font-mono text-[#52525B] uppercase tracking-wide mb-4">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {skillsByCategory.backend.map((skill) => (
                <span key={skill.name} className="px-3 py-1.5 text-xs font-mono bg-[#111] border border-[#333] rounded-full">
                  {skill.name}
                </span>
              ))}
            </div>
          </BentoCard>

          <BentoCard hover={false}>
            <h3 className="text-sm font-mono text-[#52525B] uppercase tracking-wide mb-4">DevOps</h3>
            <div className="flex flex-wrap gap-2">
              {skillsByCategory.devops.map((skill) => (
                <span key={skill.name} className="px-3 py-1.5 text-xs font-mono bg-[#111] border border-[#333] rounded-full">
                  {skill.name}
                </span>
              ))}
            </div>
          </BentoCard>
        </div>
      </div>
    </div>
  );
}
