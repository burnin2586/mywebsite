import { BentoCard } from "@/components/BentoCard";
import { CyberButton } from "@/components/CyberButton";
import { Mail, Github, Linkedin, Twitter, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            <span className="text-[#00FF94]">/</span>Contact
          </h1>
          <p className="text-[#A1A1AA] text-lg">Let&apos;s build something together</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <BentoCard hover={false}>
            <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>
            
            <div className="space-y-4 mb-8">
              <a href="mailto:hello@example.com" className="flex items-center gap-4 p-4 rounded-lg bg-[#111] border border-[#222] hover:border-[#00FF94] transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-[#0A0A0A] flex items-center justify-center border border-[#333] group-hover:border-[#00FF94] group-hover:shadow-[0_0_15px_rgba(0,255,148,0.3)] transition-all">
                  <Mail className="w-5 h-5 text-[#00FF94]" />
                </div>
                <div>
                  <p className="text-sm text-[#52525B]">Email</p>
                  <p className="text-[#EDEDED]">hello@example.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-[#111] border border-[#222]">
                <div className="w-10 h-10 rounded-lg bg-[#0A0A0A] flex items-center justify-center border border-[#333]">
                  <MapPin className="w-5 h-5 text-[#A1A1AA]" />
                </div>
                <div>
                  <p className="text-sm text-[#52525B]">Location</p>
                  <p className="text-[#EDEDED]">Remote / Worldwide</p>
                </div>
              </div>
            </div>

            <h3 className="text-sm font-mono text-[#52525B] uppercase tracking-wide mb-4">Social</h3>
            <div className="flex gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-[#111] border border-[#333] flex items-center justify-center hover:border-[#00FF94] hover:shadow-[0_0_15px_rgba(0,255,148,0.3)] transition-all">
                <Github className="w-5 h-5 text-[#A1A1AA] hover:text-[#00FF94]" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-[#111] border border-[#333] flex items-center justify-center hover:border-[#00FF94] hover:shadow-[0_0_15px_rgba(0,255,148,0.3)] transition-all">
                <Linkedin className="w-5 h-5 text-[#A1A1AA] hover:text-[#00FF94]" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-[#111] border border-[#333] flex items-center justify-center hover:border-[#00FF94] hover:shadow-[0_0_15px_rgba(0,255,148,0.3)] transition-all">
                <Twitter className="w-5 h-5 text-[#A1A1AA] hover:text-[#00FF94]" />
              </a>
            </div>
          </BentoCard>

          {/* Contact Form */}
          <BentoCard hover={false}>
            <h2 className="text-xl font-semibold mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-[#52525B] uppercase tracking-wide mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-[#111] border border-[#333] rounded-lg text-[#EDEDED] placeholder-[#52525B] focus:outline-none focus:border-[#00FF94] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-mono text-[#52525B] uppercase tracking-wide mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-[#111] border border-[#333] rounded-lg text-[#EDEDED] placeholder-[#52525B] focus:outline-none focus:border-[#00FF94] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-mono text-[#52525B] uppercase tracking-wide mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-[#111] border border-[#333] rounded-lg text-[#EDEDED] placeholder-[#52525B] focus:outline-none focus:border-[#00FF94] transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <CyberButton className="w-full">
                Send Message <Send className="w-4 h-4" />
              </CyberButton>
            </form>
          </BentoCard>
        </div>
      </div>
    </div>
  );
}
