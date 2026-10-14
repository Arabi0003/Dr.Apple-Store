import React from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import BranchLocations from "@/components/contact/BranchLocations";

export const metadata = {
  title: "Contact Us | Dr. Apple Kano",
  description: "Get in touch with Dr. Apple Kano. Find our branch locations, email us, or call our support lines.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-silver-100 dark:bg-black transition-colors duration-300 pt-[60px]">
      {/* Abstract Background Gradient to match Apple vibe */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-deep-orange-500/5 dark:bg-deep-orange-500/10 blur-[120px]" />
      </div>

      <ContactHero />
      <ContactForm />
      <BranchLocations />
    </main>
  );
}
