"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ThemeToggle } from "@/components/theme-toggle";
import { Hero } from "@/components/ui/animated-hero";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { MoveRight, Search, Calendar, Users, BarChart, BookOpen, Share2 } from "lucide-react";

export default function LandingPage() {
  const projects = [
    {
      title: "Club Discovery",
      description: "Connect with clubs that match your interests and passions through our smart matching system.",
      link: "/discovery",
      icon: <Search className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Event Hub",
      description: "Create, manage, and promote club events all in one place. Reach more students effortlessly.",
      link: "/events",
      icon: <Calendar className="w-6 h-6 text-green-500" />
    },
    {
      title: "Community Tools",
      description: "Build lasting connections with members through dedicated communication and engagement tools.",
      link: "/community",
      icon: <Users className="w-6 h-6 text-purple-500" />
    },
    {
      title: "Analytics Dashboard",
      description: "Track your club's growth, member engagement, and event success with detailed insights.",
      link: "/analytics",
      icon: <BarChart className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Resource Center",
      description: "Access templates, guides, and best practices to run your club more effectively.",
      link: "/resources",
      icon: <BookOpen className="w-6 h-6 text-red-500" />
    },
    {
      title: "Collaboration Space",
      description: "Work together seamlessly with other clubs and create inter-club events and initiatives.",
      link: "/collaborate",
      icon: <Share2 className="w-6 h-6 text-indigo-500" />
    },
  ];

  const testimonials = [
    {
      quote: "Clustrix transformed how we manage our club events. It's been a game-changer for our organization.",
      title: "Photography Club President",
      name: "Sarah Chen"
    },
    {
      quote: "Since using Clustrix, our membership has grown 3x. The platform makes everything so much easier.",
      title: "Debate Society Lead",
      name: "Michael Park"
    },
    {
      quote: "The perfect platform for university clubs. We couldn't imagine running events without it now.",
      title: "Student Council",
      name: "Alex Thompson"
    },
    {
      quote: "Clustrix helped us reach more students than ever before. Our events are always full now!",
      title: "Chess Club Organizer",
      name: "David Kumar"
    }
  ];

  return (
    <main className="relative min-h-screen bg-background dark:bg-black/[0.96] antialiased overflow-hidden transition-colors">
      <BackgroundBeams className="fixed inset-0 dark:opacity-100 opacity-40" />
      <ThemeToggle />
      
      <div className="relative z-10">
        <Hero />

        {/* Features Section - removed LampContainer */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-foreground mb-16">
              Everything You Need to Grow Your Club
            </h2>
            <div className="mt-8">
              <HoverEffect items={projects} />
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Loved by Club Leaders
            </h2>
            <div className="h-[40vh]">
              <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <Spotlight>
            <div className="max-w-4xl mx-auto text-center px-4">
              <h3 className="text-4xl font-bold mb-4 text-white">Ready to Get Started?</h3>
              <p className="text-gray-400 mb-8 text-lg">
                Join the growing community of university clubs
              </p>
              <Button size="lg" className="gap-2">
                Launch Your Club <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </Spotlight>
        </section>
      </div>
    </main>
  );
}
