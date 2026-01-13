"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FolderOpen, FileText, User, Mail } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: FolderOpen },
  { href: "/articles", label: "Articles", icon: FileText },
  { href: "/about", label: "About", icon: User },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 px-2 py-2 bg-[#0A0A0A]/80 backdrop-blur-xl border border-[#333] rounded-full">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                transition-all duration-200
                ${isActive 
                  ? "text-[#00FF94] bg-[#00FF94]/10" 
                  : "text-[#A1A1AA] hover:text-[#EDEDED] hover:bg-[#111]"
                }
              `}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden md:inline">{item.label}</span>
              {isActive && (
                <span className="absolute inset-0 rounded-full border border-[#00FF94]/50 pointer-events-none" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
