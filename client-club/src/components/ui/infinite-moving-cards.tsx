"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      // Duplicate items for seamless loop
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });
    }
  }, []);

  const getAnimationDuration = () => {
    switch (speed) {
      case "fast":
        return "20s";
      case "normal":
        return "40s";
      case "slow":
        return "60s";
      default:
        return "40s";
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 overflow-hidden w-full",
        className
      )}
    >
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <ul
          ref={scrollerRef}
          className={cn(
            "flex gap-4 min-w-full shrink-0 py-4",
            pauseOnHover && "hover:[animation-play-state:paused]",
            direction === "right" ? "animate-scroll-reverse" : "animate-scroll"
          )}
          style={{
            "--animation-duration": getAnimationDuration(),
          } as React.CSSProperties}
        >
          {items.map((item, idx) => (
            <li
              key={idx}
              className="w-[350px] max-w-full relative rounded-2xl border border-slate-700 flex-shrink-0 px-8 py-6 md:w-[450px]"
              style={{
                background: "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
              }}
            >
              <blockquote>
                <div className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                  {item.quote}
                </div>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                      {item.name}
                    </span>
                    <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                      {item.title}
                    </span>
                  </div>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
