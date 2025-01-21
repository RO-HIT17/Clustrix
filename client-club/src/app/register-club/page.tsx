"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BorderedButton } from "@/components/ui/bordered-button";

export default function RegisterClub() {
  const [formData, setFormData] = useState({
    clubName: '',
    institution: '',
    adminName: '',
    position: '',
    email: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const inputClassName = "bg-background text-foreground border-input placeholder:text-muted-foreground hover:border-foreground/30 transition-colors focus:border-primary";

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background">
      <BackgroundBeams  />
      
      <Link href="/" className="absolute top-8 left-8 flex items-center text-muted-foreground hover:text-foreground z-10">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>

      <div className="relative z-10 w-full max-w-2xl mx-auto p-6">
        <div className="relative bg-card shadow-lg rounded-lg border border-border">
          <div className="p-8">
            <div className="border-b border-border pb-8 mb-8">
              <h2 className="text-2xl font-semibold text-foreground">
                Club Registration
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                Complete the form below to register your club on Clustrix
              </p>
              <p className="text-muted-foreground text-sm mt-4">
                Already registered? <Link href="/login" className="text-primary hover:underline">Login here</Link>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <LabelInputContainer>
                  <Label className="text-foreground">Club Name</Label>
                  <Input 
                    id="clubName"
                    value={formData.clubName}
                    onChange={handleChange}
                    placeholder="e.g., Photography Society, Debate Club"
                    className={inputClassName}
                  />
                </LabelInputContainer>

                <LabelInputContainer>
                  <Label className="text-foreground">Institution</Label>
                  <Input 
                    id="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    placeholder="e.g., Stanford University, MIT"
                    className={inputClassName}
                  />
                </LabelInputContainer>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <LabelInputContainer>
                  <Label className="text-foreground">Admin Name</Label>
                  <Input 
                    id="adminName"
                    value={formData.adminName}
                    onChange={handleChange}
                    placeholder="e.g., John Smith"
                    className={inputClassName}
                  />
                </LabelInputContainer>

                <LabelInputContainer>
                  <Label className="text-foreground">Position</Label>
                  <Input 
                    id="position"
                    value={formData.position}
                    onChange={handleChange}
                    placeholder="e.g., President, Club Secretary"
                    className={inputClassName}
                  />
                </LabelInputContainer>
              </div>

              <LabelInputContainer>
                <Label className="text-foreground">Official Email</Label>
                <Input 
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="e.g., photo.club@stanford.edu"
                  className={inputClassName}
                />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label className="text-foreground">Club Description</Label>
                <Input 
                  id="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="e.g., A community of photography enthusiasts organizing workshops and exhibitions"
                  className={inputClassName}
                />
              </LabelInputContainer>

              <div className="pt-6 border-t border-border mt-8 flex justify-center">
                <BorderedButton type="submit">
                  Submit Registration
                  <svg
                    className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </BorderedButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
