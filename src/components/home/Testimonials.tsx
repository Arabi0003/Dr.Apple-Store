"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";

interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
}

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-app">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            title="What Kano Customers Say"
            subtitle="Verified feedback from Apple users across Kano State."
            gradient
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t: TestimonialItem, idx: number) => {
            const variant = idx % 2 === 0 ? "slideLeft" : "slideRight";

            return (
              <AnimatedSection key={t.id} variant={variant} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-7 bg-silver-50 border border-silver-200 rounded-none h-full flex flex-col justify-between"
                >
                  <div>
                    <Quote size={28} className="text-blue-300 mb-3" />
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={15} className={i < t.rating ? "text-accent-gold fill-accent-gold" : "text-silver-300"} />
                      ))}
                    </div>
                    <p className="text-silver-700 italic text-sm md:text-base leading-relaxed mb-6">
                      &ldquo;{t.content}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-silver-200">
                    <div className="w-10 h-10 bg-blue-600 text-white font-bold flex items-center justify-center rounded-none text-sm">
                      {t.name.split(" ").map((n: string) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="font-bold text-blue-900 text-sm">{t.name}</p>
                      <p className="text-silver-500 text-xs">{t.role} • {t.location}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
