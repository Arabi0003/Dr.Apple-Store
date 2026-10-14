"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection, { staggerChild } from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { PRODUCT_CATEGORIES } from "@/lib/constants";

export default function ProductCategories() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-app">
        <AnimatedSection variant="fadeUp">
          <SectionHeading title="Shop by category" />
        </AnimatedSection>

        <AnimatedSection variant="stagger">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {PRODUCT_CATEGORIES.map((cat) => (
              <motion.div key={cat.id} variants={staggerChild}>
                <Link href="/products" className="group block">
                  <div className="relative aspect-square bg-silver-50 border border-silver-200/60 flex flex-col items-center justify-center p-4 text-center hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300">
                    <span className="text-[13px] font-semibold text-silver-800 group-hover:text-blue-700 transition-colors">
                      {cat.name}
                    </span>
                    <ArrowRight size={12} className="mt-2 text-silver-300 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
