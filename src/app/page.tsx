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
  const bgOpacity = useTransform(scrollYProgress, [0, 0.15, 0.5, 1], [1, 0.85, 0.7, 0.55]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <main ref={containerRef} className="relative w-full min-h-screen bg-silver-100 dark:bg-black transition-colors duration-300">

      {/* FAST-LOADING OPTIMIZED VIDEO BACKGROUND */}
      <motion.div style={{ opacity: bgOpacity }} className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <motion.div style={{ scale: bgScale }} className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-silver-200 to-white dark:from-black dark:to-zinc-900" />
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/dr.png"
            className="absolute inset-0 w-full h-full object-cover opacity-50 dark:opacity-80"
          >
            <source src="/dr.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/70 dark:bg-black/55 transition-colors duration-500" />
        </motion.div>
      </motion.div>

      <SmartPopup />

      {/* 1. HERO */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center pt-16 pb-20">
        <HeroSection />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-silver-500 dark:text-silver-400 font-semibold">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-10 bg-gradient-to-b from-deep-orange-500 to-transparent"
          />
        </motion.div>
      </section>

      {/* 2. HIGHLIGHTS */}
      <section className="relative z-10 py-16 md:py-24">
        <ScrollReveal variant="stagger" className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                variants={childFadeUp}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 18 } }}
                className="rounded-2xl border border-silver-200 dark:border-white/10 bg-white/75 dark:bg-white/5 backdrop-blur-md p-6"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1, type: "spring", stiffness: 260, damping: 16 }}
                  className="w-11 h-11 rounded-full bg-deep-orange-500/10 text-deep-orange-500 flex items-center justify-center mb-4"
                >
                  <h.icon size={20} />
                </motion.div>
                <h3 className="text-lg font-bold text-silver-900 dark:text-white mb-1">{h.title}</h3>
                <p className="text-sm text-silver-500 dark:text-silver-400">{h.text}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* 3. PRODUCTS */}
      <section className="relative z-10 py-16 md:py-24">
        <FeaturedProducts />
      </section>

      {/* 4. FULL-BLEED BANNER */}
      <section className="relative z-10 py-10 md:py-16">
        <ScrollReveal variant="blurIn" className="max-w-[1200px] mx-auto px-4 md:px-6">
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.6 }}
            className="relative h-[42vh] md:h-[56vh] rounded-3xl overflow-hidden border border-silver-200 dark:border-white/10"
          >
            <Image
              src="https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=1800&q=80"
              alt="Apple ecosystem"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 md:px-14 max-w-xl">
                <ScrollReveal variant="slideLeft" delay={0.2}>
                  <p className="text-deep-orange-400 text-[12px] font-bold uppercase tracking-[0.2em] mb-3">
                    The ecosystem
                  </p>
                  <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
                    One Apple. Every device.
                  </h2>
                  <p className="text-white/70 text-sm md:text-base">
                    Continuity across iPhone, Mac, iPad and Watch — available across all Dr. Apple branches in Kano.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </section>

      {/* 5. GALLERY */}
      <section className="relative z-10 py-16 md:py-24">
        <ScrollReveal variant="fadeDown" className="text-center mb-14 px-4">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.4em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[12px] font-bold uppercase text-deep-orange-500 mb-2"
          >
            Showcase
          </motion.p>
          <h2 className="text-3xl md:text-5xl font-bold text-silver-900 dark:text-white tracking-tight">
            Designed to be loved.
          </h2>
        </ScrollReveal>
        <AppleGallery />
      </section>

      {/* 6. BRANCHES */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <ScrollReveal variant="scaleIn" className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-deep-orange-500 mb-3">
              <MapPin size={18} />
              <span className="text-[12px] font-bold uppercase tracking-widest">5 Locations</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-silver-900 dark:text-white mb-3">
              Serving all of Kano
            </h2>
            <p className="text-silver-500 dark:text-silver-400 max-w-md mx-auto">
              Visit any branch for genuine Apple products, expert support, and same-day pickup.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="stagger" amount={0.12}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {BRANCHES.map((b) => (
                <motion.div
                  key={b.id}
                  variants={childScale}
                  whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 18 } }}
                  className="bg-white/75 dark:bg-white/5 backdrop-blur-md border border-silver-200 dark:border-white/10 rounded-2xl p-5 hover:border-deep-orange-500/40 transition-colors"
                >
                  {b.isFlagship && (
                    <span className="inline-block text-[9px] uppercase tracking-wider font-bold text-deep-orange-500 bg-deep-orange-500/10 px-2 py-0.5 rounded mb-2">
                      Flagship
                    </span>
                  )}
                  <h3 className="text-[13px] font-bold text-silver-900 dark:text-white leading-snug mb-1">
                    {b.name.replace("Dr. Apple — ", "").replace("Dr. Apple Flagship — ", "")}
                  </h3>
                  <p className="text-[11px] text-silver-500 dark:text-silver-400 leading-relaxed mb-2">
                    {b.address}
                  </p>
                  <p className="text-[12px] font-semibold text-silver-800 dark:text-silver-200">
                    {b.phone}
                  </p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. CLOSING CTA */}
      <section className="relative z-10 py-20 md:py-28">
        <ScrollReveal variant="scaleIn">
          <div className="max-w-3xl mx-auto text-center px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-5xl font-bold text-silver-900 dark:text-white tracking-tight mb-4"
            >
              Ready when you are.
            </motion.h2>
            <p className="text-silver-500 dark:text-silver-400 mb-8 text-base md:text-lg">
              Walk into any Dr. Apple branch today — or browse live inventory online.
            </p>
            <motion.a
              href="/products"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-deep-orange-500 text-white font-bold text-[15px] shadow-[0_0_30px_rgba(255,90,0,0.25)]"
            >
              Browse Products
            </motion.a>
          </div>
        </ScrollReveal>
      </section>

      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}
