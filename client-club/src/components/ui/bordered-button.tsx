"use client";
import { cn } from "@/lib/utils";
import React from "react";

interface BorderedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const BorderedButton = ({ children, className, ...props }: BorderedButtonProps) => {
  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center px-8 py-3",
        "overflow-hidden rounded-lg border-2 border-foreground/20",
        "bg-background/50 backdrop-blur-sm",
        "transition-all duration-300",
        "hover:border-foreground/40 hover:bg-background/80",
        "font-medium text-foreground",
        className
      )}
      {...props}
    >
      {/* Animated border gradient effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-primary/50 via-transparent to-primary/50 opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
      
      {/* Content with hover lift effect */}
      <span className="relative flex items-center gap-2 transition-transform duration-200 group-hover:scale-[0.98]">
        {children}
      </span>
    </button>
  );
};
