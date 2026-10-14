"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { STORE_STATS } from "@/lib/constants";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setDone(true); setEmail(""); setTimeout(() => setDone(false), 3000); }
  };

  return (
    <section className="py-20 md:py-28 bg-[#0a0f1a] text-white">
      <div className="container-app">

        {/* Stats */}
        <AnimatedSection variant="stagger">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 pb-16 border-b border-white/10">
            {STORE_STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold tracking-tight">{s.value}</p>
                <p className="text-[12px] text-white/40 mt-1 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection variant="fadeUp">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-[28px] md:text-[30px] font-bold tracking-tight mb-3">
              New stock alerts
            </h2>
            <p className="text-sm text-white/40 mb-8">
              Be the first to know when the latest iPhone or MacBook arrives in Kano.
            </p>
            <form onSubmit={submit} className="flex gap-2">
              <input
                type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button type="submit" className="px-5 py-3 bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition-colors flex items-center gap-1.5">
                {done ? "Done" : <><span className="hidden sm:inline">Subscribe</span><ArrowRight size={14} /></>}
              </button>
            </form>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
