"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { clsx } from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "premium";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  disabled = false,
  fullWidth = false,
  icon,
  iconPosition = "left",
  className,
  type = "button",
}: ButtonProps) {
  const variantClasses = {
    primary: "bg-blue-600 text-white border-2 border-blue-600 hover:bg-blue-700 hover:border-blue-700 active:bg-blue-800 shadow-md",
    secondary: "bg-transparent text-blue-700 border-2 border-blue-600 hover:bg-blue-600 hover:text-white active:bg-blue-700",
    ghost: "bg-transparent text-blue-700 border-2 border-transparent hover:bg-blue-50 hover:border-blue-100",
    premium: "bg-accent-gold text-blue-950 border-2 border-accent-gold hover:bg-yellow-500 font-bold",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-3.5 text-base md:text-lg",
  };

  const combinedClasses = clsx(
    "inline-flex items-center justify-center gap-2.5 font-semibold transition-all duration-300 ease-out select-none cursor-pointer",
    "rounded-none", // Square corners specified
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    disabled && "opacity-60 cursor-not-allowed",
    className
  );

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.025, transition: { type: "spring", stiffness: 400, damping: 15 } },
    whileTap: disabled ? {} : { scale: 0.975 },
  };

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  if (href && !disabled) {
    return (
      <motion.div {...motionProps} className={fullWidth ? "w-full" : "inline-block"}>
        <Link href={href} className={combinedClasses}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button {...motionProps} type={type} onClick={onClick} disabled={disabled} className={combinedClasses}>
      {content}
    </motion.button>
  );
}
