"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { UserPlus, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Hero = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Community", "Connection", "Growth", "Impact", "Excellence"],
    []
  );
  const letters = "CLUSTRIX".split("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="flex flex-col items-center justify-start pt-10 min-h-[85vh]">
      {/* Animated Clustrix Title */}
      <div className="flex space-x-1 md:space-x-2 mb-20">
        {letters.map((letter, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
            className={cn(
              "text-6xl md:text-8xl font-bold cursor-pointer",
              "bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500",
              "hover:from-purple-500 hover:to-blue-500",
              "transition-colors duration-200"
            )}
          >
            {letter}
          </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          Where Campus{" "}
          <div className="inline-flex h-[80px] overflow-hidden">
            <motion.div
              key={titleNumber}
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              exit={{ y: -80 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text"
            >
              {titles[titleNumber]}
            </motion.div>
          </div>
          <br /> Comes Together
        </h1>

        <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-2xl mx-auto">
          Connect with campus clubs or manage your organization - all in one platform designed for student life
        </p>

        <div className="flex gap-4 justify-center">
          <Button size="lg" className="gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90">
            <UserPlus className="w-4 h-4" /> Join as Student
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <Building2 className="w-4 h-4" /> Register Your Club
          </Button>
        </div>
      </div>
    </div>
  );
};
