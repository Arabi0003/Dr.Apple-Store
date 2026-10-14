"use client";

import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import AppleGallery from "@/components/home/AppleGallery";
import Footer from "@/components/layout/Footer";
import SmartPopup from "@/components/ui/SmartPopup";
import ScrollReveal, { childFadeUp, childScale } from "@/components/ui/ScrollReveal";
import { BRANCHES } from "@/lib/constants";
import { MapPin, ShieldCheck, Truck, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const highlights = [
  { icon: ShieldCheck, title: "100% Genuine", text: "Factory-sealed devices with verifiable serials." },
  { icon: Truck, title: "Same-day Kano", text: "Pickup from any of our five branches today." },
  { icon: Sparkles, title: "Free Setup", text: "Data transfer and configuration at no charge." },
];

export default function HomePage() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Smoother background transition values
  const bgOpacity = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [1, 0.9, 0.6, 0.4]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <main ref={containerRef} className="relative w-full min-h-screen transition-colors duration-300 overflow-hidden">

      {/* FIXED VIDEO BACKGROUND (Always stays behind content, ultra-stable) */}
      <motion.div style={{ opacity: bgOpacity }} className="fixed inset-0 w-full h-full z-[-1] pointer-events-none">
        <motion.div style={{ scale: bgScale }} className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-silver-200 to-white dark:from-black dark:to-zinc-900" />
          <video autoPlay loop muted playsInline preload="auto" poster="/dr.png" className="absolute inset-0 w-full h-full object-cover opacity-50 dark:opacity-80">
            <source src="/dr.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/70 dark:bg-black/55 transition-colors duration-500" />
        </motion.div>
      </motion.div>

      <SmartPopup />

      {/* 1. HERO */}
      <section className="relative z-10 min-h-[90vh] flex flex-col justify-center pt-28 pb-16">
        <HeroSection />
      </section>

      {/* 2. HIGHLIGHTS */}
      <section className="relative z-10 py-12 md:py-20">
        <ScrollReveal variant="stagger" className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {highlights.map((h, i) => (
              <motion.div key={h.title} variants={childFadeUp} whileHover={{ y: -5 }} className="rounded-2xl border border-silver-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-lg p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-deep-orange-500/10 text-deep-orange-500 flex items-center justify-center mb-4">
                  <h.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-silver-900 dark:text-white mb-1">{h.title}</h3>
                <p className="text-sm text-silver-600 dark:text-silver-400">{h.text}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* 3. PRODUCTS */}
      <section className="relative z-10 py-12 md:py-20">
        <FeaturedProducts />
      </section>

      {/* 4. FULL-BLEED BANNER */}
      <section className="relative z-10 py-10 md:py-16">
        <ScrollReveal variant="blurIn" className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden border border-silver-200 dark:border-white/10 shadow-lg">
            <Image src="https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=1800&q=80" alt="Apple ecosystem" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-6 md:px-14 max-w-xl">
                <ScrollReveal variant="slideLeft" delay={0.2}>
                  <p className="text-deep-orange-400 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] mb-2 md:mb-3">The ecosystem</p>
                  <h2 className="text-2xl md:text-5xl font-bold text-white tracking-tight mb-3 md:mb-4">One Apple. Every device.</h2>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">Continuity across iPhone, Mac, iPad and Watch — available across all Dr. Apple branches in Kano.</p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. GALLERY */}
      <section className="relative z-10 py-12 md:py-20">
        <ScrollReveal variant="fadeDown" className="text-center mb-10 px-4">
          <p className="text-[12px] font-bold uppercase text-deep-orange-500 mb-2 tracking-[0.2em]">Showcase</p>
          <h2 className="text-3xl md:text-5xl font-bold text-silver-900 dark:text-white tracking-tight">Designed to be loved.</h2>
        </ScrollReveal>
        <AppleGallery />
      </section>

      {/* 6. BRANCHES */}
      <section className="relative z-10 py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <ScrollReveal variant="scaleIn" className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-deep-orange-500 mb-3">
              <MapPin size={18} />
              <span className="text-[12px] font-bold uppercase tracking-widest">5 Locations</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-silver-900 dark:text-white mb-3">Serving all of Kano</h2>
            <p className="text-silver-600 dark:text-silver-400 max-w-md mx-auto">Visit any branch for genuine Apple products, expert support, and same-day pickup.</p>
          </ScrollReveal>

          <ScrollReveal variant="stagger" amount={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {BRANCHES.map((b) => (
                <motion.div key={b.id} variants={childScale} whileHover={{ y: -5 }} className="bg-white/80 dark:bg-white/5 backdrop-blur-lg border border-silver-200 dark:border-white/10 rounded-2xl p-5 shadow-sm">
                  {b.isFlagship && <span className="inline-block text-[9px] uppercase tracking-wider font-bold text-deep-orange-500 bg-deep-orange-500/10 px-2 py-0.5 rounded mb-2">Flagship</span>}
                  <h3 className="text-[14px] font-bold text-silver-900 dark:text-white leading-snug mb-1">{b.name.replace("Dr. Apple — ", "").replace("Dr. Apple Flagship — ", "")}</h3>
                  <p className="text-[12px] text-silver-600 dark:text-silver-400 leading-relaxed mb-2">{b.address}</p>
                  <p className="text-[12px] font-semibold text-silver-900 dark:text-white">{b.phone}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. CLOSING CTA */}
      <section className="relative z-10 py-16 md:py-24">
        <ScrollReveal variant="scaleIn">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-silver-900 dark:text-white tracking-tight mb-4">Ready when you are.</h2>
            <p className="text-silver-600 dark:text-silver-400 mb-8 text-base md:text-lg">Walk into any Dr. Apple branch today — or browse live inventory online.</p>
            <a href="/products" className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-deep-orange-500 text-white font-bold text-[15px] shadow-[0_0_30px_rgba(255,90,0,0.25)] hover:bg-deep-orange-600 transition-colors">
              Browse Products
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* FOOTER */}
      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}
