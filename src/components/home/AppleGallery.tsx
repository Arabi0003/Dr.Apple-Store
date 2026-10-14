"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { GALLERY_IMAGES } from "@/lib/constants";

export default function AppleGallery() {
  return (
    <div className="w-full space-y-16 md:space-y-24 py-6">
      {GALLERY_IMAGES.map((item, index) => {
        const fromLeft = item.side === "left";

        return (
          <div
            key={item.id}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-[1200px] mx-auto px-4 md:px-6"
          >
            {/* Image */}
            <ScrollReveal
              variant={fromLeft ? "slideLeft" : "slideRight"}
              delay={0.05}
              className={fromLeft ? "lg:order-1" : "lg:order-2"}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[16/11] overflow-hidden rounded-3xl border border-silver-200 dark:border-white/10 shadow-xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </motion.div>
            </ScrollReveal>

            {/* Text */}
            <ScrollReveal
              variant={fromLeft ? "slideRight" : "slideLeft"}
              delay={0.15}
              className={fromLeft ? "lg:order-2" : "lg:order-1"}
            >
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-deep-orange-500 mb-3">
                Apple Collection
              </p>
              <h3 className="text-3xl md:text-5xl font-bold text-silver-900 dark:text-white tracking-tight mb-4">
                {item.title}
              </h3>
              <p className="text-base md:text-lg text-silver-500 dark:text-silver-400 max-w-md leading-relaxed">
                {item.subtitle}
              </p>
            </ScrollReveal>
          </div>
        );
      })}
    </div>
  );
}
