import React from "react";
import { clsx } from "clsx";

export default function PageWrapper({
  children,
  className,
  hasNavbar = true,
}: {
  children: React.ReactNode;
  className?: string;
  hasNavbar?: boolean;
}) {
  return (
    <main className={clsx("min-h-screen", hasNavbar && "pt-[60px]", className)}>
      {children}
    </main>
  );
}
