"use client";

import { useState, useEffect, useCallback } from "react";

export function useScrollDirection(threshold = 10) {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);
    setIsAtTop(currentScrollY < 10);

    if (Math.abs(currentScrollY - scrollY) < threshold) return;

    setScrollDirection(currentScrollY > scrollY ? "down" : "up");
  }, [scrollY, threshold]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { scrollDirection, scrollY, isAtTop };
}
