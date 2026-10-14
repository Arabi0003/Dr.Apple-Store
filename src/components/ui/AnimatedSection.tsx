"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { clsx } from "clsx";

const animationVariants: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  },
  slideRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  },
  stagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  variant?: keyof typeof animationVariants;
  delay?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  as?: "div" | "section" | "article";
}

export default function AnimatedSection({
  children,
  variant = "fadeIn",
  delay = 0,
  threshold = 0.15,
  once = true,
  className,
  as = "div",
}: AnimatedSectionProps) {
  const selectedVariant = animationVariants[variant];
  const MotionComponent = motion[as];

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={{
        hidden: selectedVariant.hidden,
        visible: {
          ...((selectedVariant.visible as Record<string, unknown>) || {}),
          transition: {
            ...(((selectedVariant.visible as Record<string, unknown>)?.transition as Record<string, unknown>) || {}),
            delay,
          },
        },
      }}
      className={clsx(className)}
    >
      {children}
    </MotionComponent>
  );
}
