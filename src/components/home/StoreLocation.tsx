"use client";

import React from "react";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { STORE_INFO } from "@/lib/constants";

export default function StoreLocation() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-app">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          <AnimatedSection variant="slideLeft">
            <SectionHeading title="Visit our store" subtitle="Walk in for hands-on demos, immediate pickup, and face-to-face support." align="left" />

            <div className="space-y-5 mt-8">
              {[
                { icon: MapPin, label: STORE_INFO.address },
                { icon: Clock, label: `Mon–Fri ${STORE_INFO.hours.weekdays}  ·  Sat ${STORE_INFO.hours.saturday}` },
                { icon: Phone, label: STORE_INFO.phone },
                { icon: Mail, label: STORE_INFO.email },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon size={16} className="text-silver-400 mt-0.5 flex-shrink-0" />
                  <span className="text-[14px] text-silver-600">{label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection variant="slideRight" delay={0.15}>
            <div className="aspect-[4/3] bg-silver-100 border border-silver-200/60 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={32} className="text-silver-300 mx-auto mb-3" />
                <p className="text-sm font-medium text-silver-500">Murtala Mohammed Way, Kano</p>
                <p className="text-xs text-silver-400 mt-1">Interactive map coming soon</p>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
