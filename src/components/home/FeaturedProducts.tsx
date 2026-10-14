"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal, { childScale } from "@/components/ui/ScrollReveal";
import { FEATURED_PRODUCTS } from "@/lib/constants";

export default function FeaturedProducts() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-6">
      <ScrollReveal variant="fadeUp">
        <div className="flex justify-between items-end mb-10 border-b border-silver-300 dark:border-white/15 pb-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-deep-orange-500 mb-2">
              Inventory
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-silver-900 dark:text-white tracking-tight">
              Latest Arrivals
            </h2>
          </div>
          <Link
            href="/products"
            className="group hidden sm:flex items-center gap-1.5 text-sm font-semibold text-deep-orange-500 hover:text-deep-orange-400"
          >
            View all
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </ScrollReveal>

      <ScrollReveal variant="stagger" amount={0.1}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {FEATURED_PRODUCTS.map((p) => (
            <motion.div key={p.id} variants={childScale}>
              <Link href="/products" className="block group h-full">
                <div className="h-full overflow-hidden rounded-2xl border border-silver-200 dark:border-white/10 bg-white/75 dark:bg-white/5 backdrop-blur-md transition-all duration-500 hover:shadow-2xl hover:border-deep-orange-500/30">
                  <div className="relative aspect-[4/3] overflow-hidden bg-silver-100 dark:bg-black/40">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                    {p.badge && (
                      <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full bg-white/90 text-silver-900 backdrop-blur-sm">
                        {p.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-silver-400 mb-1">
                      {p.category}
                    </p>
                    <h3 className="text-lg font-bold text-silver-900 dark:text-white group-hover:text-deep-orange-500 transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-sm text-silver-500 dark:text-silver-400 mt-1 line-clamp-2">
                      {p.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-silver-200 dark:border-white/10 flex items-end justify-between">
                      <div>
                        <p className="text-xl font-bold text-silver-900 dark:text-white">{p.price}</p>
                        {p.originalPrice && (
                          <p className="text-xs text-silver-400 line-through">{p.originalPrice}</p>
                        )}
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                        In Stock
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
