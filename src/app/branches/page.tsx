"use client";

import React from 'react';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { MapPin, Phone, Clock, Shield, Navigation, MessageCircle, Store, Wrench } from 'lucide-react';

interface BranchInfo {
  id: string;
  name: string;
  badge: string;
  address: string;
  area: string;
  phone: string;
  whatsapp: string;
  hours: string;
  services: string[];
  googleMapsUrl: string;
}

const KANO_BRANCHES: BranchInfo[] = [
  {
    id: 'murtala-flagship',
    name: 'Dr. Apple Flagship — Murtala',
    badge: 'Main Flagship Store',
    address: 'No. 15, Murtala Mohammed Way',
    area: 'Murtala Mohammed Way Commercial Hub, Kano',
    phone: '+234 813 784 3328',
    whatsapp: '2348137843328',
    hours: 'Mon - Sat: 8:30 AM - 8:00 PM',
    services: ['Complete Apple Sales', 'Official Express Repair Lab', 'Trade-In Center', 'Original Accessories'],
    googleMapsUrl: 'https://maps.google.com/?q=Murtala+Mohammed+Way+Kano'
  },
  {
    id: 'zoo-road',
    name: 'Dr. Apple — Zoo Road',
    badge: 'Retail & Mall Hub',
    address: 'Opposite Ado Bayero Mall, Zoo Road',
    area: 'Zoo Road Commercial District, Kano',
    phone: '+234 813 784 3329',
    whatsapp: '2348137843329',
    hours: 'Mon - Sat: 9:00 AM - 8:30 PM',
    services: ['iPhone & MacBook Sales', 'Screen & Battery Replacement', 'Accessories'],
    googleMapsUrl: 'https://maps.google.com/?q=Zoo+Road+Kano'
  },
  {
    id: 'sabon-gari',
    name: 'Dr. Apple — Sabon Gari',
    badge: 'Commercial Hub',
    address: 'No. 42, France Road, Sabon Gari',
    area: 'Sabon Gari, Kano',
    phone: '+234 813 784 3330',
    whatsapp: '2348137843330',
    hours: 'Mon - Sat: 8:30 AM - 7:30 PM',
    services: ['Apple Devices', 'Wholesale & Retail Accessories', 'Same-Day Repairs'],
    googleMapsUrl: 'https://maps.google.com/?q=France+Road+Sabon+Gari+Kano'
  },
  {
    id: 'bello-road',
    name: 'Dr. Apple — Bello Road',
    badge: 'City Center Complex',
    address: 'Shop 7, Bello Road Commercial Complex',
    area: 'Bello Road, Kano Center',
    phone: '+234 813 784 3331',
    whatsapp: '2348137843331',
    hours: 'Mon - Sat: 9:00 AM - 7:30 PM',
    services: ['MacBook & iPad Specialist', 'Pre-Owned Certified Apple', 'Software Support'],
    googleMapsUrl: 'https://maps.google.com/?q=Bello+Road+Kano'
  },
  {
    id: 'buk-road',
    name: 'Dr. Apple — BUK Road',
    badge: 'Campus & Tech Hub',
    address: 'Near Bayero University Gate, BUK Road',
    area: 'BUK Road, Kano',
    phone: '+234 813 784 3332',
    whatsapp: '2348137843332',
    hours: 'Mon - Sat: 8:30 AM - 8:00 PM',
    services: ['Student Discounts', 'iPhone Sales & Swaps', 'Instant Accessories'],
    googleMapsUrl: 'https://maps.google.com/?q=BUK+Road+Kano'
  }
];

export default function BranchesPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pt-8 pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO BANNER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FF5A00]/10 text-[#FF5A00] border border-[#FF5A00]/20 mb-4">
            <Store className="w-4 h-4" /> 5 Authorized Outlets in Kano
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white font-calibri tracking-tight mb-4">
            Visit Dr. Apple <span className="text-[#FF5A00]">Branches in Kano</span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg font-calibri">
            Experience authentic Apple products in person. Visit any of our 5 flagship outlets across Kano State for device purchasing, official warranty claims, trade-ins, and express repairs.
          </p>
        </div>

        {/* BRANCH CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {KANO_BRANCHES.map((branch) => (
            <div
              key={branch.id}
              className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FF5A00]/10 text-[#FF5A00]">
                    {branch.badge}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Open Today
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 font-calibri">
                  {branch.name}
                </h3>

                <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300 mb-6">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-5 h-5 text-[#FF5A00] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-zinc-900 dark:text-zinc-100">{branch.address}</p>
                      <p className="text-xs text-zinc-500">{branch.area}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#FF5A00] shrink-0" />
                    <a href={`tel:${branch.phone.replace(/\s+/g, '')}`} className="hover:underline font-medium">
                      {branch.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#FF5A00] shrink-0" />
                    <span className="text-xs">{branch.hours}</span>
                  </div>
                </div>

                {/* SERVICES BADGES */}
                <div className="border-t border-zinc-100 dark:border-zinc-800/80 pt-4 mb-6">
                  <span className="text-xs font-bold text-zinc-400 block mb-2">Available Services:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {branch.services.map((srv) => (
                      <span key={srv} className="px-2.5 py-1 text-xs rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`https://wa.me/${branch.whatsapp}?text=Assalamu%20Alaikum%20Dr%20Apple%20${encodeURIComponent(branch.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-[#FF5A00] hover:bg-[#e04f00] text-white text-xs font-semibold py-2.5 rounded-xl flex items-center justify-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                  </Button>
                </a>
                <a href={branch.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-zinc-300 dark:border-zinc-700 text-xs font-semibold py-2.5 rounded-xl flex items-center justify-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-[#FF5A00]" /> Map Directions
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER CALLOUT */}
        <div className="mt-16 p-8 rounded-3xl bg-zinc-900 text-white text-center border border-zinc-800">
          <h3 className="text-2xl font-bold mb-2">Need Direct Customer Helpline?</h3>
          <p className="text-zinc-400 text-sm mb-6">Call our central Kano hotline anytime for device verification or stock availability.</p>
          <a href="tel:+2348137843328">
            <Button className="bg-[#FF5A00] hover:bg-[#e04f00] text-white px-8 py-3 rounded-full font-bold">
              Call Central Kano Helpline (+234 813 784 3328)
            </Button>
          </a>
        </div>

      </div>
    </div>
  );
}


