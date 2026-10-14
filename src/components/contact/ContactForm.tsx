"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Mail, Phone, MessageSquare } from "lucide-react";
import { STORE_INFO } from "@/lib/constants";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate network request
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section className="py-12 md:py-20 relative z-10">
      <div className="container-app">
        <div className="max-w-[1000px] mx-auto bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-silver-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row">
          
          {/* Left Info Panel */}
          <div className="w-full md:w-2/5 bg-silver-50 dark:bg-black/40 p-8 md:p-12 border-b md:border-b-0 md:border-r border-silver-200 dark:border-white/10">
            <h3 className="text-2xl font-bold text-silver-900 dark:text-white mb-6">Contact Info</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-deep-orange-500/10 text-deep-orange-500 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider font-bold text-silver-500 mb-1">Direct Line</p>
                  <p className="text-[15px] font-semibold text-silver-900 dark:text-white">{STORE_INFO.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-deep-orange-500/10 text-deep-orange-500 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider font-bold text-silver-500 mb-1">Email Support</p>
                  <p className="text-[15px] font-semibold text-silver-900 dark:text-white">{STORE_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-deep-orange-500/10 text-deep-orange-500 flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider font-bold text-silver-500 mb-1">WhatsApp</p>
                  <a href={STORE_INFO.social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[15px] font-semibold text-deep-orange-500 hover:text-deep-orange-600 transition-colors">
                    Chat with us &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="w-full md:w-3/5 p-8 md:p-12 bg-white dark:bg-transparent">
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-10"
              >
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-silver-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-silver-500 dark:text-silver-400">Our Kano support team will reply shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-bold uppercase tracking-wider text-silver-600 dark:text-silver-400">Full Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-silver-50 dark:bg-white/5 border border-silver-200 dark:border-white/10 rounded-xl text-sm text-silver-900 dark:text-white focus:outline-none focus:border-deep-orange-500 dark:focus:border-deep-orange-500 transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-bold uppercase tracking-wider text-silver-600 dark:text-silver-400">Email</label>
                    <input required type="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-silver-50 dark:bg-white/5 border border-silver-200 dark:border-white/10 rounded-xl text-sm text-silver-900 dark:text-white focus:outline-none focus:border-deep-orange-500 dark:focus:border-deep-orange-500 transition-colors" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-bold uppercase tracking-wider text-silver-600 dark:text-silver-400">Subject</label>
                  <select required className="w-full px-4 py-3 bg-silver-50 dark:bg-white/5 border border-silver-200 dark:border-white/10 rounded-xl text-sm text-silver-900 dark:text-white focus:outline-none focus:border-deep-orange-500 dark:focus:border-deep-orange-500 transition-colors appearance-none">
                    <option value="" disabled selected>Select an inquiry type...</option>
                    <option value="sales">Sales & Product Availability</option>
                    <option value="support">Technical Support & Repair</option>
                    <option value="tradein">Trade-In Valuation</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-bold uppercase tracking-wider text-silver-600 dark:text-silver-400">Message</label>
                  <textarea required rows={4} placeholder="How can we assist you today?" className="w-full px-4 py-3 bg-silver-50 dark:bg-white/5 border border-silver-200 dark:border-white/10 rounded-xl text-sm text-silver-900 dark:text-white focus:outline-none focus:border-deep-orange-500 dark:focus:border-deep-orange-500 transition-colors resize-none"></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-2 w-full py-4 bg-deep-orange-500 text-white rounded-xl font-bold text-[15px] flex items-center justify-center gap-2 hover:bg-deep-orange-600 transition-colors shadow-lg shadow-deep-orange-500/25 disabled:opacity-70"
                >
                  {status === "submitting" ? "Sending..." : <>Send Message <Send size={16} /></>}
                </motion.button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
