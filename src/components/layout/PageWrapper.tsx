import React from "react";
import { clsx } from "clsx";

interface PageWrapperProps {
  children: React.ReactNode;
  hasNavbar?: boolean;
  className?: string;
}

export default function PageWrapper({
  children,
  hasNavbar = true,
  className,
}: PageWrapperProps) {
  return (
    <main className={clsx("min-h-screen", hasNavbar && "pt-[72px]", className)}>
      {children}
    </main>
  );
}
