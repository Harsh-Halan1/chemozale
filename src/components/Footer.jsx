import React from 'react';
import { FEST_DATA } from '../data/chemozaleData';
import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube, ExternalLink } from 'lucide-react';
import iicheLogo from '../assets/iiche_logo.webp';

export default function Footer() {
  return (
    <footer className="relative bg-[#050806] border-t border-bb-border pt-16 pb-12 text-gray-400">
      
      {/* Top Hazard Accent */}
      <div className="w-full h-1 hazard-strip mb-12 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Tri-Section Layout (matching legacy blueprint) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-bb-border">
          
          {/* Section 1: Brand & Contact Info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-black/60 p-1 border border-emerald-500/40 flex items-center justify-center shadow-lg">
                <img
                  src={iicheLogo}
                  alt="IIChE Logo"
                  className="w-full h-full object-contain filter drop-shadow"
                />
              </div>
              <span className="font-display text-2xl tracking-widest text-white">
                CHEMOZALE '26
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans max-w-md">
              Flagship annual chemical engineering festival presented by the{' '}
              <span className="text-emerald-400">Indian Institute of Chemical Engineers (IIChE)</span> student chapter at the Institute of Technology, Nirma University.
            </p>

            <div className="space-y-2 text-xs font-mono text-gray-300">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-bb-neon" />
                <a href="mailto:iiche@nirmauni.ac.in" className="hover:text-bb-neon transition">
                  iiche@nirmauni.ac.in
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Mayur Tanna: +91 98797 20125</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Tirth Sanghvi: +91 94265 04779</span>
              </div>
            </div>

            {/* Social Links Dock */}
            <div className="pt-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500 block mb-3">
                FREQUENCY CHANNELS
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-bb-card border border-bb-border text-gray-400 hover:text-pink-400 hover:border-pink-500/50 transition"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-bb-card border border-bb-border text-gray-400 hover:text-blue-400 hover:border-blue-500/50 transition"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-bb-card border border-bb-border text-gray-400 hover:text-red-400 hover:border-red-500/50 transition"
                  title="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500 block mb-2">
              OPERATIONS NAVIGATION
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-bb-neon transition">
                  • About Chemozale
                </a>
              </li>
              <li>
                <a href="#operations" className="hover:text-bb-neon transition">
                  • 7 Flagship Operations
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-bb-neon transition">
                  • 3-Day Protocol Schedule
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-bb-neon transition">
                  • Contact Directors
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-bb-neon transition">
                  • FAQs & Guidelines
                </a>
              </li>
            </ul>

            <div className="pt-4 text-[11px] text-gray-500">
              <span className="text-amber-400 block mb-1">DATES: 9th - 11th Oct 2026</span>
              <span>All rights reserved under IIChE student chapter protocol.</span>
            </div>
          </div>

          {/* Section 3: Interactive Responsive Campus Map (matching legacy blueprint) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-gray-300 font-semibold flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-400" />
                NIRMA UNIVERSITY (A-BLOCK)
              </span>
              <a
                href="https://maps.google.com/?q=Nirma+University+Ahmedabad"
                target="_blank"
                rel="noreferrer"
                className="text-bb-neon hover:underline text-[10px] flex items-center gap-1"
              >
                OPEN MAP <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="w-full h-44 rounded-xl overflow-hidden border border-bb-border shadow-md grayscale contrast-125 hover:grayscale-0 transition duration-500">
              <iframe
                title="Nirma University Campus Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.754792612711!2d72.54359487531742!3d23.10609317911364!2m3!1f0!2f0!3f0!3m2!1i1024!2f768!4f13.1!3m3!1m2!1s0x395e832f45125167%3A0x876cb1cb234008ab!2sNirma%20University!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <span className="text-[11px] font-mono text-gray-500 block">
              Sarkhej-Gandhinagar Highway, Gota, Ahmedabad, Gujarat 382481
            </span>
          </div>

        </div>

        {/* Bottom Credits & Heisenberg Tribute */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            © {FEST_DATA.edition} Chemozale. Engineered with precision by the IIChE Student Chapter.
          </div>

          <div className="text-gray-400">
            <span className="text-amber-400 font-semibold font-display tracking-widest text-sm">
              "SAY MY NAME."
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
