"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { ShieldCheck, PhoneCall, MessageCircle, Truck, Cpu, Battery, Camera, Sparkles } from 'lucide-react';

interface IPhoneItem {
  id: string;
  name: string;
  tagline: string;
  price: string;
  originalPrice?: string;
  image: string;
  badge?: string;
  colors: string[];
  storage: string[];
  specs: { chip: string; camera: string; display: string; battery: string };
  condition: 'Brand New' | 'Certified Pre-Owned';
}

const IPHONE_LINEUP: IPhoneItem[] = [
  {
    id: 'iphone-16-pro-max',
    name: 'iPhone 16 Pro Max',
    tagline: 'Titanium. So strong. So light. So Pro.',
    price: '₦2,450,000',
    originalPrice: '₦2,600,000',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop',
    badge: 'Flagship 2025',
    colors: ['#3A393B', '#D0C8C0', '#F2F1ED', '#1A1A1B'],
    storage: ['256GB', '512GB', '1TB'],
    specs: {
      chip: 'A18 Pro Chip with 6-core GPU',
      camera: '48MP Fusion + 48MP Ultra Wide',
      display: '6.9" Super Retina XDR ProMotion',
      battery: 'Up to 33 hours video playback'
    },
    condition: 'Brand New'
  },
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    tagline: 'Camera Control. 4K 120 fps Dolby Vision.',
    price: '₦2,100,000',
    image: 'https://images.unsplash.com/photo-1695048133021-98781440798e?q=80&w=1000&auto=format&fit=crop',
    badge: 'Hot Seller',
    colors: ['#3A393B', '#D0C8C0', '#F2F1ED'],
    storage: ['128GB', '256GB', '512GB', '1TB'],
    specs: {
      chip: 'A18 Pro Chip',
      camera: '48MP Fusion Camera',
      display: '6.3" Super Retina XDR',
      battery: 'Up to 27 hours video playback'
    },
    condition: 'Brand New'
  },
  {
    id: 'iphone-16',
    name: 'iPhone 16',
    tagline: 'Apple Intelligence. Action Button.',
    price: '₦1,650,000',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop',
    badge: 'New Arrival',
    colors: ['#000000', '#F5F5F7', '#3B82F6', '#EC4899'],
    storage: ['128GB', '256GB', '512GB'],
    specs: {
      chip: 'A18 Chip with 5-core GPU',
      camera: '48MP 2-in-1 Fusion Camera',
      display: '6.1" Super Retina XDR',
      battery: 'Up to 22 hours video playback'
    },
    condition: 'Brand New'
  },
  {
    id: 'iphone-15-pro-max',
    name: 'iPhone 15 Pro Max',
    tagline: 'A17 Pro chip. 5x Telephoto zoom.',
    price: '₦1,850,000',
    originalPrice: '₦1,950,000',
    image: 'https://images.unsplash.com/photo-1695048065036-0881f1b26859?q=80&w=1000&auto=format&fit=crop',
    badge: 'Best Value Pro',
    colors: ['#3A393B', '#1A1A1B', '#D0C8C0'],
    storage: ['256GB', '512GB', '1TB'],
    specs: {
      chip: 'A17 Pro Chip',
      camera: '48MP Main + 5x Telephoto',
      display: '6.7" Super Retina XDR ProMotion',
      battery: 'Up to 29 hours video playback'
    },
    condition: 'Brand New'
  },
  {
    id: 'iphone-15',
    name: 'iPhone 15',
    tagline: 'Dynamic Island. 48MP Main camera.',
    price: '₦1,250,000',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=1000&auto=format&fit=crop',
    colors: ['#000000', '#E2E8F0', '#FCE7F3', '#FEF08A'],
    storage: ['128GB', '256GB', '512GB'],
    specs: {
      chip: 'A16 Bionic Chip',
      camera: '48MP Main Camera',
      display: '6.1" Super Retina XDR',
      battery: 'Up to 20 hours video playback'
    },
    condition: 'Brand New'
  },
  {
    id: 'iphone-14-pro-max-preowned',
    name: 'iPhone 14 Pro Max (Apple Certified)',
    tagline: 'Deep Purple. Dynamic Island. 100% Battery Health.',
    price: '₦1,150,000',
    image: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?q=80&w=1000&auto=format&fit=crop',
    badge: 'Kano Certified',
    colors: ['#4B306A', '#000000', '#F5F5F7'],
    storage: ['128GB', '256GB', '512GB'],
    specs: {
      chip: 'A16 Bionic Chip',
      camera: '48MP Pro Camera System',
      display: '6.7" Always-On ProMotion',
      battery: '100% Battery Health Guaranteed'
    },
    condition: 'Certified Pre-Owned'
  }
];

export default function IPhonePage() {
  const handleOrder = (productName: string, price: string) => {
    const text = encodeURIComponent(`Assalamu Alaikum Dr. Apple, I want to inquire/order ${productName} (${price}) from your Kano Store.`);
    window.open(`https://wa.me/2348137843328?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pt-8 pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO BANNER */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-zinc-900 via-zinc-900 to-black text-white p-8 md:p-14 mb-16 shadow-2xl border border-zinc-800">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#FF5A00]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FF5A00]/20 text-[#FF5A00] border border-[#FF5A00]/30 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Official Kano iPhone Headquarters
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-calibri tracking-tight mb-4 text-white">
              iPhone Lineup. <br />
              <span className="text-[#FF5A00]">Pure Excellence.</span>
            </h1>
            <p className="text-zinc-300 text-base md:text-lg mb-8 font-calibri leading-relaxed">
              Discover 100% authentic Apple iPhones in Kano. Backed by full Apple international warranty, original boxed packaging, and same-day delivery across all Kano metropolis locations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => window.open('https://wa.me/2348137843328?text=Assalamu%20Alaikum%20Dr%20Apple%20Kano', '_blank')}
                className="bg-[#FF5A00] hover:bg-[#e04f00] text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 shadow-lg hover:shadow-[#FF5A00]/20 transition-all"
              >
                <MessageCircle className="w-5 h-5" /> Chat Kano Sales Team
              </Button>
              <a href="tel:+2348137843328">
                <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800 rounded-full px-6 py-3">
                  <PhoneCall className="w-4 h-4 mr-2" /> Call Hotline
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* TRUST BADGES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-zinc-900 dark:text-white">100% Original Apple</h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">IMEI verified & Apple Warranty included</p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-[#FF5A00]/10 text-[#FF5A00]">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-zinc-900 dark:text-white">Instant Kano Delivery</h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Under 60 mins dispatch across Kano</p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-zinc-900 dark:text-white">5 Kano Flagship Stores</h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">In-person pick up or test before pay</p>
            </div>
          </div>
        </div>

        {/* SECTION HEADING */}
        <SectionHeading
          title="Available iPhone Catalog"
          subtitle="Explore the latest brand new sealed iPhones and Apple Certified pre-owned devices available today in Kano."
        />

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {IPHONE_LINEUP.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-72 w-full bg-zinc-100 dark:bg-zinc-800/50 p-6 flex items-center justify-center overflow-hidden">
                  {item.badge && (
                    <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold bg-[#FF5A00] text-white shadow-md">
                      {item.badge}
                    </span>
                  )}
                  <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-medium bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200">
                    {item.condition}
                  </span>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1 font-calibri">
                    {item.name}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">{item.tagline}</p>

                  {/* SPECS LIST */}
                  <div className="space-y-2 mb-6 text-xs text-zinc-600 dark:text-zinc-300">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-[#FF5A00]" />
                      <span>{item.specs.chip}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-[#FF5A00]" />
                      <span>{item.specs.camera}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Battery className="w-4 h-4 text-[#FF5A00]" />
                      <span>{item.specs.battery}</span>
                    </div>
                  </div>

                  {/* STORAGE BADGES */}
                  <div className="mb-4">
                    <span className="text-xs text-zinc-400 block mb-2 font-medium">Storage Options:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.storage.map((st) => (
                        <span key={st} className="px-2.5 py-1 text-xs rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium">
                          {st}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* FOOTER & CTA */}
              <div className="p-6 pt-0 border-t border-zinc-100 dark:border-zinc-800/50 mt-auto">
                <div className="flex items-baseline justify-between mb-4 mt-4">
                  <div>
                    <span className="text-2xl font-extrabold text-[#FF5A00] font-calibri">
                      {item.price}
                    </span>
                    {item.originalPrice && (
                      <span className="text-xs text-zinc-400 line-through ml-2">
                        {item.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                    In Stock (Kano)
                  </span>
                </div>

                <Button
                  onClick={() => handleOrder(item.name, item.price)}
                  className="w-full bg-[#FF5A00] hover:bg-[#e04f00] text-white font-semibold py-3 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" /> Order On WhatsApp
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CALL OUT BANNER */}
        <div className="mt-20 p-8 rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
            Looking for a specific model, trade-in, or custom color?
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 max-w-xl mx-auto">
            Contact Dr. Apple directly. We accept official trade-ins of clean old iPhones and supply custom storage configurations.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/branches">
              <Button className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-6 py-3 rounded-full font-semibold">
                Visit Kano Branches
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}



