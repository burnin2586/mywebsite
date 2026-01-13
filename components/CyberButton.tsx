"use client";

import { ReactNode } from "react";
import Link from "next/link";

interface CyberButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export function CyberButton({ 
  children, 
  href, 
  variant = "primary", 
  className = "",
  onClick 
}: CyberButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    h-12 px-6 rounded text-sm font-medium
    transition-all duration-200
  `;

  const variantClasses = {
    primary: `
      bg-transparent border border-[#00FF94] text-[#00FF94]
      hover:shadow-[0_0_15px_rgba(0,255,148,0.4)] hover:bg-[#00FF94]/10
    `,
    secondary: `
      bg-[#111] text-[#EDEDED]
      hover:bg-[#EDEDED] hover:text-[#000]
    `,
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
