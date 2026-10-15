"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CategoryLayoutProps {
  title: string;
  subtitle: string;
  tagline: string;
  items: { name: string; desc: string }[];
}

export default function CategoryLayout({ title, subtitle, tagline, items }: CategoryLayoutProps) {
  return (
    <main className="min-h-screen bg-silver-100 dark:bg-black transition-colors duration-300 pt-[60px] overflow-hidden">
      
      {/* Abstract Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 md:pt-32 md:pb-24 text-center">
        <div className="container-app">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-deep-orange-500 font-bold uppercase tracking-[0.2em] text-[12px] mb-4">
            {tagline}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, filter: "blur(10px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 0.8, delay: 0.1 }} className="text-[48px] md:text-[80px] font-bold text-silver-900 dark:text-white tracking-tight leading-[1.05] mb-6">
            {title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-lg md:text-2xl text-silver-600 dark:text-silver-400 font-medium max-w-2xl mx-auto">
            {subtitle}
          </motion.p>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-12">
            <Link href="/products" className="inline-flex items-center gap-2 px-8 py-3.5 bg-deep-orange-500 text-white rounded-full font-bold text-[15px] hover:bg-deep-orange-600 shadow-lg shadow-deep-orange-500/25 transition-all hover:-translate-y-0.5">
              Check Kano Inventory <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Premium Grid */}
      <section className="relative z-10 pb-32">
        <div className="container-app max-w-[1000px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <motion.div 
                key={item.name}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-silver-200 dark:border-white/10 rounded-3xl p-8 hover:border-deep-orange-500/30 transition-colors"
              >
                <h3 className="text-2xl font-bold text-silver-900 dark:text-white mb-2">{item.name}</h3>
                <p className="text-silver-500 dark:text-silver-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
