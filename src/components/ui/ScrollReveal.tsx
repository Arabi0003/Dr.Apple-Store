"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { clsx } from "clsx";

const variants: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 48 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  },
  slideRight: {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.88 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  },
  blurIn: {
    hidden: { opacity: 0, filter: "blur(12px)" },
    visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -4, y: 30 },
    visible: { opacity: 1, rotate: 0, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  },
  stagger: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
  },
};

export const childFadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export const childScale: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

interface Props {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  delay?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export default function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  className,
  once = true,
  amount = 0.2,
}: Props) {
  const v = variants[variant];

  return (
    <motion.div
      className={clsx(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: v.hidden,
        visible: {
          ...(v.visible as object),
          transition: {
            ...(((v.visible as { transition?: object }).transition) || {}),
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
