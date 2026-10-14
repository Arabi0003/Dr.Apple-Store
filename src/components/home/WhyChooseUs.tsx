"use client";

import React from "react";
import { ShieldCheck, Award, BadgePercent, Headphones, RefreshCw, Settings } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  { icon: ShieldCheck, title: "Verified Authentic", desc: "Every device is factory-sealed with a verifiable Apple serial number." },
  { icon: Award, title: "Full Warranty", desc: "Manufacturer warranty honoured at our Kano service centre." },
  { icon: BadgePercent, title: "Fair Pricing", desc: "Direct import pricing with no hidden markups or surprise fees." },
  { icon: Headphones, title: "Expert Guidance", desc: "Trained advisors help you choose the right device for your needs." },
  { icon: RefreshCw, title: "Trade-In", desc: "Bring your old Apple device and get instant credit toward a new one." },
  { icon: Settings, title: "Free Setup", desc: "We unbox, configure, and transfer your data at no extra charge." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-silver-50">
      <div className="container-app">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            title="Why Kano trusts us"
            subtitle="Four years of delivering genuine Apple hardware with transparent service."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {features.map((f, i) => {
            const variant = i % 3 === 0 ? "slideLeft" : i % 3 === 1 ? "fadeUp" : "slideRight";
            return (
              <AnimatedSection key={f.title} variant={variant} delay={i * 0.06}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-50 text-blue-600">
                    <f.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-silver-900 mb-1">{f.title}</h3>
                    <p className="text-[13px] text-silver-500 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
