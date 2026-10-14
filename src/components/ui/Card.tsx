"use client";

import React from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";

interface CardProps {
  children: React.ReactNode;
  hoverable?: boolean;
  padded?: boolean;
  variant?: "default" | "outlined" | "elevated" | "glass";
  onClick?: () => void;
  className?: string;
}

export default function Card({
  children,
  hoverable = true,
  padded = true,
  variant = "default",
  onClick,
  className,
}: CardProps) {
  const variantClasses = {
    default: "bg-white border border-silver-200",
    outlined: "bg-transparent border-2 border-silver-300",
    elevated: "bg-white shadow-md border border-silver-100",
    glass: "glass-effect border border-white/30",
  };

  return (
    <motion.div
      whileHover={hoverable ? { y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      onClick={onClick}
      className={clsx(
        "rounded-none overflow-hidden transition-shadow duration-300",
        padded && "p-6",
        variantClasses[variant],
        onClick && "cursor-pointer",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
