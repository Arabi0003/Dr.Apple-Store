"use client";

import React from "react";
import { MapPin, Clock, Phone, Mail, Navigation } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { STORE_INFO } from "@/lib/constants";

export default function StoreLocation() {
  return (
    <section className="section-padding gradient-bg-silver">
      <div className="container-app">
        <AnimatedSection variant="fadeUp">
          <SectionHeading
            title="Visit Dr. Apple"
            subtitle="Experience Apple devices live in person at our flagship store on Murtala Mohammed Way."
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <AnimatedSection variant="slideLeft" delay={0.1}>
            <div className="bg-white border border-silver-200 p-8 rounded-none h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-6">{STORE_INFO.name} Flagship Store</h3>
                <div className="space-y-4 text-sm text-silver-700">
                  <div className="flex items-start gap-3.5">
                    <MapPin size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-blue-900 block">Address</span>
                      <span>{STORE_INFO.address}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <Clock size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-blue-900 block">Working Hours</span>
                      <span>Mon–Fri: {STORE_INFO.hours.weekdays} | Sat: {STORE_INFO.hours.saturday}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <Phone size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-blue-900 block">Phone</span>
                      <span>{STORE_INFO.phone} / {STORE_INFO.phoneAlt}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <Mail size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-blue-900 block">Email</span>
                      <span>{STORE_INFO.email}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-silver-100">
                <Button variant="primary" icon={<Navigation size={18} />} href="https://maps.google.com/?q=Murtala+Mohammed+Way+Kano">
                  Get Store Directions
                </Button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="slideRight" delay={0.2}>
            <div className="w-full h-full min-h-[360px] bg-blue-900/10 border border-silver-200 rounded-none flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
              <MapPin size={48} className="text-blue-600 mb-3 animate-bounce" />
              <h4 className="text-xl font-bold text-blue-900 mb-1">Murtala Mohammed Way, Kano</h4>
              <p className="text-xs text-silver-500 uppercase tracking-wider font-semibold">Store Coordinates & Live Map Ready</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

