"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative pt-20 md:pt-32 pb-12 md:pb-20 overflow-hidden">
      <div className="container-app flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-deep-orange-500 font-bold uppercase tracking-[0.2em] text-[11px] md:text-[13px] mb-4"
        >
          Get In Touch
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[40px] sm:text-[56px] md:text-[72px] font-bold text-silver-900 dark:text-white tracking-tight leading-[1.05] max-w-4xl"
        >
          We’re here to help.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver-400 via-silver-600 to-silver-400 dark:from-silver-500 dark:via-white dark:to-silver-500">
            Let’s talk Apple.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-[16px] md:text-[20px] text-silver-600 dark:text-silver-400 font-medium max-w-2xl leading-relaxed"
        >
          Whether you need support for your Mac, want to trade-in your iPhone, or have a business inquiry for our Kano flagship.
        </motion.p>
      </div>
    </section>
  );
}
