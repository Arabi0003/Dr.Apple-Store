"use client";

import React from "react";
import { Star } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-silver-50">
      <div className="container-app">
        <AnimatedSection variant="fadeUp">
          <SectionHeading title="From our customers" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <AnimatedSection key={t.id} variant={i % 2 === 0 ? "slideLeft" : "slideRight"} delay={i * 0.08}>
              <blockquote className="bg-white border border-silver-200/60 p-6 md:p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={13} className="text-accent-gold fill-accent-gold" />
                    ))}
                  </div>
                  <p className="text-[15px] text-silver-700 leading-relaxed">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>
                <footer className="mt-6 pt-4 border-t border-silver-100 flex items-center gap-3">
                  <div className="w-9 h-9 bg-blue-900 text-white text-xs font-bold flex items-center justify-center">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <cite className="not-italic text-[13px] font-semibold text-silver-900">{t.name}</cite>
                    <p className="text-[11px] text-silver-400">{t.role}, {t.location}</p>
                  </div>
                </footer>
              </blockquote>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
