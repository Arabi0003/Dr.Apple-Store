"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Smartphone, Laptop, Tablet, Watch, Headphones, Cable, ArrowRight, type LucideIcon } from "lucide-react";
import AnimatedSection, { staggerChild } from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { PRODUCT_CATEGORIES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Smartphone,
  Laptop,
  Tablet,
  Watch,
  Headphones,
  Cable,
};

export default function ProductCategories() {
  return (
    <section className="section-padding gradient-bg-blue text-white">
      <div className="container-app">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            title="Explore Apple Categories"
            subtitle="Browse authentic Apple devices and accessories available today in Kano."
            light
          />
        </AnimatedSection>

        <AnimatedSection variant="stagger" className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {PRODUCT_CATEGORIES.map((cat: { id: string; name: string; description: string; icon?: string }) => {
              const Icon = iconMap[cat.icon || "Smartphone"] || Smartphone;

              return (
                <motion.div key={cat.id} variants={staggerChild}>
                  <Link href="/products">
                    <motion.div
                      whileHover={{ y: -6, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="p-5 text-center bg-white/5 border border-white/10 rounded-none hover:bg-white/10 transition-all flex flex-col items-center h-full group cursor-pointer"
                    >
                      <div className="w-12 h-12 mb-3 bg-blue-500/20 text-blue-300 flex items-center justify-center rounded-none group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-white font-bold text-sm mb-1">{cat.name}</h3>
                      <ArrowRight size={14} className="text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity mt-2" />
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
