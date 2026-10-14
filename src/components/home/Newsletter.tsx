"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Users, Package, Calendar, Star, type LucideIcon } from "lucide-react";
import AnimatedSection, { staggerChild } from "@/components/ui/AnimatedSection";
import { STORE_STATS } from "@/lib/constants";

const statsIconMap: Record<string, LucideIcon> = {
  Users,
  Package,
  Calendar,
  Star,
};

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section className="section-padding gradient-bg-blue text-white relative overflow-hidden">
      <div className="container-app relative z-10">
        <AnimatedSection variant="stagger" className="mb-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STORE_STATS.map((stat: { label: string; value: string; icon: string }) => {
              const Icon = statsIconMap[stat.icon] || Users;
              return (
                <motion.div key={stat.label} variants={staggerChild} className="p-4">
                  <div className="w-10 h-10 mx-auto mb-2 bg-blue-700/50 text-blue-300 flex items-center justify-center rounded-none">
                    <Icon size={20} />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-silver-300">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection variant="scaleIn" delay={0.2}>
          <div className="max-w-2xl mx-auto text-center bg-white/5 border border-white/10 p-8 md:p-12 rounded-none backdrop-blur-sm">
            <Mail size={32} className="text-blue-300 mx-auto mb-3" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Stay Connected With Dr. Apple</h3>
            <p className="text-silver-300 text-sm mb-6 max-w-md mx-auto">
              Get notified when new iPhone and Mac models arrive in Kano with exclusive subscriber offers.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-silver-400 text-sm rounded-none focus:outline-none focus:border-blue-400"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-blue-950 font-bold text-sm rounded-none hover:bg-silver-100 transition-colors flex items-center justify-center gap-2"
              >
                {submitted ? "Subscribed! ✓" : <><span>Subscribe</span><ArrowRight size={16} /></>}
              </button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
