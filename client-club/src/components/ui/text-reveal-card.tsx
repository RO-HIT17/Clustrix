"use client";
import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";

export interface TextRevealCardProps {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}

export const TextRevealCard: React.FC<TextRevealCardProps> = ({
  text,
  revealText,
  children,
  className,
}) => {
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const animationFrameRef = useRef<number>();

  const updateProgress = useCallback(() => {
    if (progressRef.current !== progress) {
      setProgress(progressRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(updateProgress);
  }, [progress]);

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(updateProgress);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [updateProgress]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !isHovered) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    progressRef.current = (x / rect.width) * 100;
  }, [isHovered]);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        progressRef.current = 0;
      }}
      onMouseMove={handleMouseMove}
      className={cn(
        "bg-[#1d1c20] border border-white/[0.08] w-[40rem] rounded-lg p-8 relative overflow-hidden cursor-pointer",
        className
      )}
    >
      {children}
      <div className="h-40 relative flex items-center overflow-hidden">
        <motion.div
          initial={false}
          animate={{
            clipPath: `inset(0 ${100 - progress}% 0 0)`,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ type: "spring", bounce: 0, duration: 0.5 }}
          className="absolute inset-0 bg-[#1d1c20] z-20"
        >
          <p className="text-base sm:text-[3rem] py-10 font-bold text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300">
            {revealText}
          </p>
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            left: `${progress}%`,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ type: "spring", bounce: 0, duration: 0.5 }}
          className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-neutral-800 to-transparent z-30"
        />

        <div className="w-full [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
          <p className="text-base sm:text-[3rem] py-10 font-bold bg-clip-text text-transparent bg-[#323238]">
            {text}
          </p>
          <ClientStars />
        </div>
      </div>
    </div>
  );
};

// Create a client-only Stars component to fix hydration
const ClientStars: React.FC = () => {
  // Pre-calculate random values on mount
  const starsConfig = useRef(
    Array.from({ length: 40 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      scale: Math.random(),
      duration: Math.random() * 3 + 2,
    }))
  );

  return (
    <div className="absolute inset-0">
      {starsConfig.current.map((config, i) => (
        <motion.span
          key={i}
          animate={{
            opacity: [0, config.scale, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: config.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${config.top}%`,
            left: `${config.left}%`,
            width: "2px",
            height: "2px",
            backgroundColor: "white",
            borderRadius: "50%",
            zIndex: 1,
          }}
        />
      ))}
    </div>
  );
};

export const TextRevealCardTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <h2 className={twMerge("text-white text-lg mb-2", className)}>
      {children}
    </h2>
  );
};

export const TextRevealCardDescription: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <p className={twMerge("text-[#a9a9a9] text-sm", className)}>{children}</p>
  );
};

export {
  TextRevealCard,
  TextRevealCardTitle,
  TextRevealCardDescription,
};
