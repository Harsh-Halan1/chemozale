import React, { useState, useEffect } from 'react';
import { Menu, X, Flame, Truck, ShieldAlert } from 'lucide-react';
import PeriodicTile from './PeriodicTile';

export default function Navbar({ onOpenRVLoader }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Manifesto', href: '#about' },
    { name: 'The 7 Operations', href: '#operations' },
    { name: 'Protocol Schedule', href: '#schedule' },
    { name: 'Heisenberg Leads', href: '#contact' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070a08]/90 backdrop-blur-md py-3 border-b border-bb-border shadow-xl'
          : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Mark with Periodic Tiles */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="flex items-center gap-1">
            <PeriodicTile number={6} symbol="C" name="" size="sm" variant="green" interactive={false} />
            <PeriodicTile number={42} symbol="Mo" name="" size="sm" variant="green" interactive={false} />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display text-xl sm:text-2xl tracking-widest text-white group-hover:text-bb-neon transition">
                CHEMOZALE
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                '26
              </span>
            </div>
            <span className="text-[10px] font-mono tracking-wider text-gray-400 uppercase hidden sm:block">
              IIChE • NIRMA UNIVERSITY
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-bb-neon transition-colors duration-200 uppercase tracking-wider text-xs font-mono py-1 border-b-2 border-transparent hover:border-bb-neon"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions (RV Loader Preview + Register CTA) */}
        <div className="hidden sm:flex items-center gap-3">
          {/* 2D RV Animated Loader Trigger */}
          <button
            onClick={onOpenRVLoader}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bb-card border border-bb-border hover:border-amber-500/60 text-xs font-mono text-amber-300 hover:text-amber-200 transition shadow-sm group"
            title="Preview the 2D Animated RV Loader"
          >
            <Truck className="w-3.5 h-3.5 text-amber-400 group-hover:animate-bounce" />
            <span>RV Loader</span>
          </button>

          {/* Registration Button */}
          <a
            href="#operations"
            className="relative inline-flex items-center justify-center px-4 py-2 rounded-lg font-mono text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-bb-neon via-emerald-400 to-bb-cyan hover:shadow-[0_0_20px_rgba(0,255,136,0.6)] transition-all duration-300 active:scale-95"
          >
            Cook Registration
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenRVLoader}
            className="p-1.5 rounded-md bg-bb-card border border-bb-border text-amber-400"
            title="RV Loader"
          >
            <Truck className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-bb-card border border-bb-border text-gray-300 hover:text-bb-neon"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0e0b] border-b border-bb-border px-4 py-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-200 hover:text-bb-neon font-mono text-sm tracking-wider uppercase py-2 border-b border-bb-border/40"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#operations"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center py-2.5 rounded-lg bg-bb-neon text-black font-mono font-bold text-xs uppercase tracking-wider shadow-lg"
            >
              Cook Registration
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
