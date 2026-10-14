"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Typewriter from "@/components/ui/Typewriter";

export default function HeroSection() {
  return (
    <div className="container-app flex flex-col items-center text-center">
      
      {/* Typewriter Container */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full mb-4"
      >
        <Typewriter />
      </motion.div>

      {/* Main Hero Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="text-[38px] sm:text-[56px] md:text-[72px] font-bold text-silver-900 dark:text-white tracking-[-0.03em] leading-[1.08] max-w-4xl"
      >
        Pro. Beyond.
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver-400 via-silver-700 to-silver-400 dark:from-silver-400 dark:via-white dark:to-silver-400">
          Available right now.
        </span>
      </motion.h1>

      {/* Hero Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-6 text-[16px] sm:text-[19px] md:text-[22px] text-silver-600 dark:text-silver-400 font-medium max-w-2xl leading-relaxed"
      >
        Genuine Apple hardware. Five Kano branches. Expert support.
      </motion.p>

      {/* Hero CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-8 md:mt-10"
      >
        <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="/products"
            className="group inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 bg-deep-orange-500 text-white rounded-full text-[15px] sm:text-[16px] font-bold hover:bg-deep-orange-600 transition-colors shadow-[0_0_25px_rgba(255,90,0,0.35)]"
          >
            Buy Now
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
