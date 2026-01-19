import { BentoCard } from "@/components/BentoCard";
import { CyberButton } from "@/components/CyberButton";
import { Mail, Github, Linkedin, Twitter, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            <span className="text-[#b88a3d]">/</span>Contact
          </h1>
          <p className="text-[#5b4630] text-lg">Let&apos;s build something together</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <BentoCard hover={false}>
            <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>
            
            <div className="space-y-4 mb-8">
              <a href="mailto:hello@example.com" className="flex items-center gap-4 p-4 rounded-lg bg-[#f1e7d6] border border-[#e2d4bc] hover:border-[#b88a3d] transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-[#fff9ee] flex items-center justify-center border border-[#cdb892] group-hover:border-[#b88a3d] group-hover:shadow-[0_0_18px_rgba(184,138,61,0.3)] transition-all">
                  <Mail className="w-5 h-5 text-[#b88a3d]" />
                </div>
                <div>
                  <p className="text-sm text-[#8a6f4b]">Email</p>
                  <p className="text-[#2f2417]">hello@example.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-[#f1e7d6] border border-[#e2d4bc]">
                <div className="w-10 h-10 rounded-lg bg-[#fff9ee] flex items-center justify-center border border-[#cdb892]">
                  <MapPin className="w-5 h-5 text-[#5b4630]" />
                </div>
                <div>
                  <p className="text-sm text-[#8a6f4b]">Location</p>
                  <p className="text-[#2f2417]">Remote / Worldwide</p>
                </div>
              </div>
            </div>

            <h3 className="text-sm font-mono text-[#8a6f4b] uppercase tracking-wide mb-4">Social</h3>
            <div className="flex gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-[#f1e7d6] border border-[#cdb892] flex items-center justify-center hover:border-[#b88a3d] hover:shadow-[0_0_18px_rgba(184,138,61,0.3)] transition-all">
                <Github className="w-5 h-5 text-[#5b4630] hover:text-[#b88a3d]" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-[#f1e7d6] border border-[#cdb892] flex items-center justify-center hover:border-[#b88a3d] hover:shadow-[0_0_18px_rgba(184,138,61,0.3)] transition-all">
                <Linkedin className="w-5 h-5 text-[#5b4630] hover:text-[#b88a3d]" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-[#f1e7d6] border border-[#cdb892] flex items-center justify-center hover:border-[#b88a3d] hover:shadow-[0_0_18px_rgba(184,138,61,0.3)] transition-all">
                <Twitter className="w-5 h-5 text-[#5b4630] hover:text-[#b88a3d]" />
              </a>
            </div>
          </BentoCard>

          {/* Contact Form */}
          <BentoCard hover={false}>
            <h2 className="text-xl font-semibold mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-[#8a6f4b] uppercase tracking-wide mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-[#fff9ee] border border-[#cdb892] rounded-lg text-[#2f2417] placeholder-[#8a6f4b] focus:outline-none focus:border-[#b88a3d] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-mono text-[#8a6f4b] uppercase tracking-wide mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-[#fff9ee] border border-[#cdb892] rounded-lg text-[#2f2417] placeholder-[#8a6f4b] focus:outline-none focus:border-[#b88a3d] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-mono text-[#8a6f4b] uppercase tracking-wide mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-[#fff9ee] border border-[#cdb892] rounded-lg text-[#2f2417] placeholder-[#8a6f4b] focus:outline-none focus:border-[#b88a3d] transition-colors resize-none"
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
