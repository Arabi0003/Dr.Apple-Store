import React from "react";
import { clsx } from "clsx";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  gradient?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  gradient = false,
  light = false,
  className,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div className={clsx("flex flex-col gap-3 mb-10 md:mb-14", alignmentClasses[align], className)}>
      <div className={clsx("h-1 w-12", light ? "bg-blue-400" : "bg-blue-600")} />
      <h2
        className={clsx(
          "font-bold tracking-tight text-[28px] md:text-[30px] lg:text-[32px] leading-tight",
          gradient && "gradient-text-blue",
          light && !gradient && "text-white",
          !light && !gradient && "text-blue-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={clsx("text-base md:text-lg max-w-2xl leading-relaxed font-normal", light ? "text-silver-300" : "text-silver-600")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
