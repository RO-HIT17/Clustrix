"use client";
import { cn } from "@/lib/utils";
import React from "react";

interface SpecialButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const SpecialButton = ({ children, className, ...props }: SpecialButtonProps) => {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center w-full px-8 py-3 font-medium",
        "text-white transition-all duration-300 ease-in-out",
        "bg-gradient-to-r from-blue-600 to-blue-700",
        "rounded-md shadow-[0_2px_20px_rgba(0,0,0,0.1)]",
        "hover:shadow-[0_2px_24px_rgba(59,130,246,0.25)]",
        "group overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Background layers */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-700" />
      <span className="absolute inset-0 w-full h-full transition-all duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-700 to-blue-800" />
      
      {/* Glow effect */}
      <span className="absolute bottom-0 left-1/2 w-0 h-0 transition-all duration-300 border-t-2 border-blue-300 opacity-0 group-hover:w-full group-hover:h-full group-hover:opacity-10 group-hover:left-0" />
      
      {/* Content */}
      <span className="relative flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};
