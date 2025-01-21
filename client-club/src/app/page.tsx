"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Hero } from "@/components/ui/animated-hero";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Button } from "@/components/ui/button";
import { MoveRight, Calendar, Users, BarChart, Share2, MessageSquare, Users2 } from "lucide-react";
import { Highlight } from "@/components/ui/hero-highlight";
import { Cover } from "@/components/ui/cover";  
import Link from "next/link";

export default function LandingPage() {
  const projects = [
    {
      title: "Cross-Campus Reach",
      description: "Connect with students across multiple colleges. Expand your club's visibility and attract passionate members from diverse campuses.",
      link: "/reach",
      icon: <Users size={24} className="text-purple-500" />
    },
    {
      title: "Event Registration",
      description: "Streamline registration processes with automated waitlists, custom forms, and instant confirmations for all your events.",
      link: "/registration",
      icon: <Calendar size={24} className="text-green-500" />
    },
    {
      title: "Event Promotion",
      description: "Promote your events through targeted channels, social media integration, and our smart recommendation engine.",
      link: "/promotion",
      icon: <Share2 size={24} className="text-blue-500" />
    },
    {
      title: "Analytics & Insights",
      description: "Make data-driven decisions with detailed metrics on attendance, engagement, and member participation trends.",
      link: "/analytics",
      icon: <BarChart size={24} className="text-yellow-500" />
    },
    {
      title: "Simplified Communication",
      description: "Keep everyone in the loop with announcement boards, direct messaging, and automated event reminders.",
      link: "/communication",
      icon: <MessageSquare size={24} className="text-red-500" />
    },
    {
      title: "Student Engagement",
      description: "Build active communities with polls, feedback systems, and interactive discussion forums.",
      link: "/engagement",
      icon: <Users2 size={24} className="text-indigo-500" />
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

      
      <div className="relative z-10">
        <Hero />

        {/* Features Section - removed LampContainer */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-foreground mb-16">
              Everything You Need to <Cover> Grow Your Club </Cover>
            </h2>
            <div className="mt-8">
              <HoverEffect items={projects} />
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Loved by <Highlight>  Club Leaders </Highlight>
        </h2>
            <div className="h-[40vh]">
              <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
            </div>
          </div>
        </section>

        <section className="relative py-20">
            <div className="max-w-4xl mx-auto text-center px-4">
              <h3 className="text-4xl font-bold mb-4 ">Ready to Get Started?</h3>
              <p className=" mb-8 text-lg">
                Join the growing community of university clubs
              </p>
              <Link href="/register-club">
                <Button size="lg" className="gap-2">
                  Launch Your Club <MoveRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
        </section>
      </div>
    </main>
  );
}
