"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Typewriter from "@/components/ui/Typewriter";

export default function HeroSection() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-6 w-full"
      >
        <Typewriter />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40, filter: "blur(14px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="text-[42px] sm:text-[58px] md:text-[76px] font-bold text-silver-900 dark:text-white tracking-[-0.04em] text-center leading-[1.05] max-w-5xl"
      >
        Pro. Beyond.
        <br />
        <motion.span
          initial={{ opacity: 0, backgroundPosition: "0% 50%" }}
          animate={{ opacity: 1, backgroundPosition: "100% 50%" }}
          transition={{ duration: 1.4, delay: 0.5 }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-silver-400 via-silver-700 to-silver-400 dark:from-silver-400 dark:via-white dark:to-silver-400"
        >
          Available right now.
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.55 }}
        className="mt-6 text-[17px] md:text-[21px] text-silver-600 dark:text-silver-400 font-medium text-center max-w-2xl"
      >
        Genuine Apple hardware. Five Kano branches. Expert support.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10"
      >
        <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="/products"
            className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-deep-orange-500 text-white rounded-full text-[15px] font-bold hover:bg-deep-orange-600 transition-colors shadow-[0_0_30px_rgba(255,90,0,0.35)]"
          >
            Buy Now
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
