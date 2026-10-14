"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { BRANCHES } from "@/lib/constants";

export default function BranchLocations() {
  return (
    <section className="py-16 md:py-24 relative z-10">
      <div className="container-app">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-silver-900 dark:text-white tracking-tight mb-4">Visit our stores</h2>
          <p className="text-silver-600 dark:text-silver-400 max-w-2xl mx-auto">Walk into any of our five Kano locations for hands-on demos, instant technical support, and device pickups.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRANCHES.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-silver-200 dark:border-white/10 rounded-3xl p-8 hover:border-deep-orange-500/50 dark:hover:border-deep-orange-500/50 transition-colors shadow-sm"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-silver-100 dark:bg-white/10 rounded-full flex items-center justify-center text-silver-900 dark:text-white">
                  <MapPin size={20} />
                </div>
                {b.isFlagship && (
                  <span className="px-3 py-1 bg-deep-orange-500/10 text-deep-orange-500 text-[10px] font-bold uppercase tracking-widest rounded-full">
                    Flagship
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-silver-900 dark:text-white mb-4">{b.name}</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-silver-400 mt-1 flex-shrink-0" />
                  <p className="text-[14px] text-silver-600 dark:text-silver-400 leading-relaxed">{b.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-silver-400 flex-shrink-0" />
                  <p className="text-[14px] font-semibold text-silver-900 dark:text-white">{b.phone}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-silver-400 mt-0.5 flex-shrink-0" />
                  <p className="text-[13px] text-silver-500 dark:text-silver-400">{b.hours}</p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-silver-200 dark:border-white/10">
                <a href={`https://maps.google.com/?q=${encodeURIComponent(b.address)}`} target="_blank" rel="noopener noreferrer" className="text-[13px] font-bold text-deep-orange-500 hover:text-deep-orange-600 transition-colors flex items-center gap-1.5">
                  Get Directions &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
