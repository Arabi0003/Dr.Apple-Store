"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";

export default function SmartPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 2000);
    const hideTimer = setTimeout(() => setVisible(false), 10000);
    return () => { clearTimeout(showTimer); clearTimeout(hideTimer); };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="fixed top-[64px] right-4 z-50 w-[340px] bg-white dark:bg-silver-900 rounded-2xl shadow-2xl border border-silver-200 dark:border-white/10 p-5"
        >
          <button onClick={() => setVisible(false)} className="absolute top-3 right-3 text-silver-400 hover:text-black dark:hover:text-white transition-colors">
            <X size={16} />
          </button>
          
          <div className="flex items-center gap-3 mb-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Live Update</span>
          </div>
          
          <h4 className="text-base font-bold text-silver-900 dark:text-white mb-1">New Arrivals Today!</h4>
          <p className="text-sm text-silver-500 dark:text-silver-400 mb-4 leading-snug">Tap to see today's available flagship devices and exclusive deals before they run out.</p>
          
          <Link href="/products" className="inline-flex items-center justify-center w-full py-2.5 bg-deep-orange-500 text-white text-sm font-semibold rounded-lg hover:bg-deep-orange-600 transition-colors">
            View Today's Stock <ArrowRight size={14} className="ml-1.5" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
