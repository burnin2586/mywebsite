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
      bg-transparent border border-[#b88a3d] text-[#b88a3d]
      hover:shadow-[0_0_18px_rgba(184,138,61,0.35)] hover:bg-[#b88a3d]/10
    `,
    secondary: `
      bg-[#f1e7d6] text-[#2f2417] border border-[#cdb892]
      hover:bg-[#fff9ee] hover:text-[#2f2417] hover:border-[#b88a3d]
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
