import React, { useState } from 'react';
import { FAQ_DATA } from '../data/chemozaleData';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faqs" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bb-card border border-bb-border text-xs font-mono text-bb-neon uppercase tracking-widest mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>DECRYPTING COMMON QUERIES</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-display tracking-wider text-white uppercase">
          FREQUENTLY ASKED <span className="text-bb-neon">QUESTIONS</span>
        </h2>
      </div>

      <div className="space-y-4">
        {FAQ_DATA.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-[#0f1712] border-emerald-500/50 shadow-[0_0_15px_rgba(0,255,136,0.1)]'
                  : 'bg-bb-card border-bb-border hover:border-gray-700'
              }`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 select-none"
              >
                <span className="font-display text-lg sm:text-xl text-white tracking-wide">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-bb-neon shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-emerald-400' : 'text-gray-400'
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-300 font-sans leading-relaxed border-t border-bb-border/40">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
