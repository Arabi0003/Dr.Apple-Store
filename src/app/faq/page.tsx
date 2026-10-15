"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Are your Apple products 100% genuine?",
    a: "Absolutely. We are a recognized retailer in Kano. Every single device we sell is factory-sealed and comes with a verifiable Apple Serial Number. We do not sell clones, refurbished, or modified devices."
  },
  {
    q: "Do you offer warranty on purchases?",
    a: "Yes. All new iPhones, MacBooks, iPads, and Watches come with the standard 1-year Apple limited warranty. If you face factory defects, our Kano technicians will guide you through the official claim process."
  },
  {
    q: "How does the Trade-In program work?",
    a: "Bring your used Apple device (iPhone, iPad, or Mac) to any of our 5 branches in Kano. Our technicians will inspect it physically and give you an instant valuation. You can use that exact value to discount your new purchase on the spot."
  },
  {
    q: "Do you offer delivery outside Kano?",
    a: "Currently, we focus on providing the best in-person experience across our 5 branches in Kano state for secure pickup and data-migration. However, contact our sales line for special nationwide logistics arrangements."
  },
  {
    q: "Will you help me transfer data from my old phone?",
    a: "Yes! Data migration (contacts, photos, WhatsApp chats) from your old Android or iPhone to your new Apple device is a complimentary free service we provide at all our branches upon purchase."
  }
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-silver-100 dark:bg-black transition-colors duration-300 pt-[60px] pb-32">
      <section className="pt-20 pb-16 text-center">
        <div className="container-app">
          <p className="text-deep-orange-500 font-bold uppercase tracking-[0.2em] text-[12px] mb-4">Help Center</p>
          <h1 className="text-[48px] md:text-[64px] font-bold text-silver-900 dark:text-white tracking-tight mb-4">Frequently Asked Questions.</h1>
          <p className="text-lg text-silver-500 max-w-xl mx-auto">Everything you need to know about buying, trading, and servicing Apple products in Kano.</p>
        </div>
      </section>

      <section className="container-app max-w-[800px]">
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white dark:bg-white/5 border border-silver-200 dark:border-white/10 rounded-2xl overflow-hidden transition-colors">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-bold text-[16px] text-silver-900 dark:text-white pr-4">{faq.q}</span>
                <div className="flex-shrink-0 text-deep-orange-500">
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="px-6 pb-6 text-[14px] text-silver-600 dark:text-silver-400 leading-relaxed border-t border-silver-100 dark:border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
