"use client";

import { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  span?: "1" | "2" | "full";
  hover?: boolean;
}

export function BentoCard({ children, className = "", span = "1", hover = true }: BentoCardProps) {
  const spanClasses = {
    "1": "col-span-1",
    "2": "col-span-1 md:col-span-2",
    "full": "col-span-1 md:col-span-2 lg:col-span-4",
  };

  return (
    <div
      className={`
        ${spanClasses[span]}
        p-6 bg-[#0A0A0A] border border-[#333] rounded-xl
        transition-all duration-200
        ${hover ? "hover:border-[#EDEDED] hover:scale-[1.01] hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
