"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { Menu, X, Search, ShoppingBag, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 inset-x-0 z-50 h-[60px] transition-all duration-300",
          scrolled
            ? "bg-white/90 dark:bg-black/85 backdrop-blur-xl border-b border-silver-200 dark:border-white/10 shadow-sm"
            : "bg-white/50 dark:bg-black/40 backdrop-blur-md border-b border-transparent"
        )}
      >
        <div className="container-app h-full flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 z-10 group flex-shrink-0">
            <motion.img
              src="/dr.png"
              alt="Dr. Apple"
              className="h-8 w-auto object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
            <span className="text-[16px] font-bold tracking-tight text-silver-900 dark:text-white group-hover:text-deep-orange-500 transition-colors">
              Dr. Apple
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center justify-center gap-1 flex-1 px-8">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "relative px-3 py-2 text-[13px] font-medium tracking-wide transition-colors duration-200",
                    active
                      ? "text-deep-orange-500 font-semibold"
                      : "text-silver-600 dark:text-silver-400 hover:text-silver-900 dark:hover:text-white"
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-deep-orange-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3 z-10 flex-shrink-0">
            {mounted && (
              <motion.button
                whileTap={{ scale: 0.9, rotate: 180 }}
                onClick={toggleTheme}
                className="p-2 text-silver-600 dark:text-silver-400 hover:text-silver-900 dark:hover:text-white transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
              </motion.button>
            )}

            <button className="hidden sm:flex p-2 text-silver-600 dark:text-silver-400 hover:text-silver-900 dark:hover:text-white transition-colors" aria-label="Search">
              <Search size={17} />
            </button>

            <Link href="/cart" className="hidden sm:flex p-2 text-silver-600 dark:text-silver-400 hover:text-silver-900 dark:hover:text-white transition-colors" aria-label="Cart">
              <ShoppingBag size={17} />
            </Link>

            <button onClick={() => setMobileOpen(true)} className="lg:hidden p-2 text-silver-900 dark:text-white" aria-label="Open menu">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white dark:bg-black flex flex-col"
          >
            <div className="h-[60px] container-app flex items-center justify-between border-b border-silver-200 dark:border-white/10">
              <div className="flex items-center gap-2">
                <img src="/dr.png" alt="Dr. Apple" className="h-7 w-auto object-contain" />
                <span className="text-[16px] font-bold text-silver-900 dark:text-white">Dr. Apple</span>
              </div>
              <button onClick={() => setMobileOpen(false)} className="p-2 text-silver-900 dark:text-white" aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-6 py-8">
              <ul className="space-y-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={clsx(
                        "block py-3 text-[20px] font-semibold border-b border-silver-100 dark:border-white/5 transition-colors",
                        pathname === link.href
                          ? "text-deep-orange-500"
                          : "text-silver-900 dark:text-white hover:text-deep-orange-500"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="px-6 py-5 border-t border-silver-200 dark:border-white/10 flex items-center justify-between">
              <button onClick={toggleTheme} className="flex items-center gap-2 text-sm text-silver-600 dark:text-silver-400">
                {mounted && (theme === "dark" ? <Sun size={16} /> : <Moon size={16} />)}
                {mounted && (theme === "dark" ? "Light mode" : "Dark mode")}
              </button>
              <Link href="/products" onClick={() => setMobileOpen(false)} className="px-5 py-2.5 bg-deep-orange-500 text-white text-sm font-semibold rounded-full">
                Shop Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
