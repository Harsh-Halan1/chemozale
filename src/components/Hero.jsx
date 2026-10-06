import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ChevronDown, Flame, Beaker } from 'lucide-react';
import PeriodicTile from './PeriodicTile';
import { FEST_DATA } from '../data/chemozaleData';

export default function Hero() {
  // Live Countdown to October 9, 2026
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-10-09T09:00:00+05:30').getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Ambient Desert Horizon Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-emerald-600/15 via-bb-neon/10 to-amber-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Top Department Eyebrow Tag */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bb-card border border-bb-border mb-6 shadow-lg animate-pulse-slow">
        <span className="w-2 h-2 rounded-full bg-bb-neon animate-ping"></span>
        <span className="text-xs sm:text-sm font-mono tracking-wider text-emerald-400 font-semibold">
          INDIAN INSTITUTE OF CHEMICAL ENGINEERS (<span className="normal-case">IIChE</span>), NIRMA UNIVERSITY
        </span>
        <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-700/50">
          NAAC A+
        </span>
      </div>

      {/* Flagship Title in Breaking Bad Periodic Table Tiles */}
      <div className="my-2">
        <h1 className="sr-only">CHEMOZALE 2026 — Chemical Engineering Fest</h1>
        
        {/* Periodic Wordmark: [C] H E [Mo] Z [Al] E 
            Proportionally calibrated: non-element characters use font-sans font-black 
            matching the tile characters with the exact same height and cap-height */}
        <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 max-w-5xl mx-auto py-2">
          {/* [6] C */}
          <PeriodicTile
            number={6}
            symbol="C"
            name="Carbon"
            mass="12"
            size="xl"
            variant="green"
          />
          
          {/* HE - perfectly matched in height and font-weight with element symbols */}
          <div className="h-24 sm:h-28 flex items-center justify-center px-1 sm:px-1.5">
            <span className="font-sans font-black text-4xl sm:text-5xl text-white select-none leading-none tracking-tight drop-shadow-md">
              HE
            </span>
          </div>

          {/* [42] Mo */}
          <PeriodicTile
            number={42}
            symbol="Mo"
            name="Molybd."
            mass="96"
            size="xl"
            variant="green"
          />

          {/* Z */}
          <div className="h-24 sm:h-28 flex items-center justify-center px-0.5 sm:px-1">
            <span className="font-sans font-black text-4xl sm:text-5xl text-white select-none leading-none tracking-tight drop-shadow-md">
              Z
            </span>
          </div>

          {/* [13] Al */}
          <PeriodicTile
            number={13}
            symbol="Al"
            name="Alum."
            mass="27"
            size="xl"
            variant="green"
          />

          {/* E */}
          <div className="h-24 sm:h-28 flex items-center justify-center px-0.5 sm:px-1">
            <span className="font-sans font-black text-4xl sm:text-5xl text-white select-none leading-none tracking-tight drop-shadow-md">
              E
            </span>
          </div>
        </div>

        {/* Poster Style Tagline */}
        <p className="mt-4 text-sm sm:text-base md:text-xl font-display tracking-[0.25em] sm:tracking-[0.35em] text-amber-400 uppercase drop-shadow">
          {FEST_DATA.tagline}
        </p>
      </div>

      {/* Date & Venue Badges */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#111813] border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-mono shadow-md">
          <Calendar className="w-4 h-4 text-bb-neon" />
          <span className="font-bold tracking-wider">{FEST_DATA.dates.display}</span>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#111813] border border-bb-border text-gray-300 text-xs sm:text-sm font-mono shadow-md">
          <MapPin className="w-4 h-4 text-amber-400" />
          <span>A-Block, Nirma University Campus</span>
        </div>
      </div>

      {/* Countdown Clock */}
      <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-black/60 border border-bb-border max-w-lg w-full backdrop-blur-md shadow-2xl">
        <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-bb-neon mb-3">
          <Beaker className="w-3.5 h-3.5" />
          <span>REACTION COUNTDOWN TO SYNTHESIS</span>
        </div>
        
        <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
          <div className="p-2 sm:p-3 rounded-xl bg-bb-card border border-bb-border">
            <span className="block font-mono text-2xl sm:text-3xl font-bold text-white">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-mono text-gray-400 uppercase">Days</span>
          </div>
          <div className="p-2 sm:p-3 rounded-xl bg-bb-card border border-bb-border">
            <span className="block font-mono text-2xl sm:text-3xl font-bold text-white">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-mono text-gray-400 uppercase">Hours</span>
          </div>
          <div className="p-2 sm:p-3 rounded-xl bg-bb-card border border-bb-border">
            <span className="block font-mono text-2xl sm:text-3xl font-bold text-white">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-mono text-gray-400 uppercase">Mins</span>
          </div>
          <div className="p-2 sm:p-3 rounded-xl bg-bb-card border border-bb-border">
            <span className="block font-mono text-2xl sm:text-3xl font-bold text-bb-neon">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-mono text-gray-400 uppercase">Secs</span>
          </div>
        </div>
      </div>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
        <a
          href="#operations"
          className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-mono text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-bb-neon to-emerald-400 hover:shadow-[0_0_30px_rgba(0,255,136,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
        >
          <Flame className="w-4 h-4 text-black" />
          <span>EXPLORE 7 OPERATIONS</span>
        </a>

        <a
          href="#schedule"
          className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-mono text-sm font-semibold uppercase tracking-wider text-gray-300 bg-bb-card/80 border border-bb-border hover:border-amber-400 hover:text-amber-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all flex items-center justify-center gap-2"
        >
          <span>PROTOCOL SCHEDULE</span>
        </a>
      </div>

      {/* Heisenberg Quote Banner */}
      <div className="mt-12 max-w-2xl px-6 py-4 rounded-xl bg-[#0b120d]/80 border-l-4 border-l-bb-neon border-y border-r border-bb-border text-left shadow-lg">
        <p className="text-xs sm:text-sm font-sans italic text-gray-300">
          "{FEST_DATA.quote.text}"
        </p>
        <span className="block text-[11px] font-mono text-bb-neon mt-1 font-semibold tracking-wider">
          — {FEST_DATA.quote.author}
        </span>
      </div>

      {/* Down Chevron Indicator */}
      <a
        href="#about"
        className="mt-10 p-2 rounded-full border border-bb-border text-gray-400 hover:text-bb-neon hover:border-bb-neon transition animate-bounce"
        aria-label="Scroll down to About"
      >
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}
