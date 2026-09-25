import React from 'react';
import { X, Sparkles } from 'lucide-react';

export default function RVLoader({ onClose, isIntro = false }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md px-4 transition-all">
      {/* Optional Dismiss button if manually previewed */}
      {!isIntro && (
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-bb-card border border-bb-border text-gray-400 hover:text-bb-neon hover:border-bb-neon transition"
          title="Close Preview"
        >
          <X className="w-6 h-6" />
        </button>
      )}

      {/* Desert Atmosphere Backdrop */}
      <div className="relative w-full max-w-2xl bg-gradient-to-b from-[#111a14] via-[#1a1c12] to-[#2b1808] border border-bb-border/80 rounded-2xl p-6 sm:p-10 shadow-2xl overflow-hidden">
        {/* Distant Desert Mesas / Mountains */}
        <div className="absolute top-10 left-0 right-0 h-28 pointer-events-none opacity-25">
          <svg viewBox="0 0 800 200" className="w-full h-full object-cover" preserveAspectRatio="none">
            <polygon points="0,200 40,140 120,130 180,180 260,110 360,105 440,160 520,95 620,100 700,170 800,130 800,200" fill="#a16207" />
            <polygon points="0,200 80,165 170,160 280,140 400,130 510,145 640,120 740,150 800,160 800,200" fill="#78350f" />
          </svg>
        </div>

        {/* Ambient Desert Moon/Sun */}
        <div className="absolute top-6 right-12 w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500/30 to-yellow-300/10 blur-xl pointer-events-none"></div>

        {/* 2D Animated RV Canvas Area */}
        <div className="relative h-44 w-full flex items-center justify-center overflow-hidden my-4">
          
          {/* Chemical Vapor / Smoke Puffs from RV Roof */}
          <div className="absolute top-2 left-[48%] -translate-x-1/2 z-20 pointer-events-none">
            <div className="relative w-12 h-14">
              <span className="absolute bottom-0 left-2 w-5 h-5 rounded-full bg-bb-neon/70 blur-xs animate-puff-1"></span>
              <span className="absolute bottom-1 left-4 w-6 h-6 rounded-full bg-bb-cyan/60 blur-xs animate-puff-2"></span>
              <span className="absolute bottom-0 left-1 w-7 h-7 rounded-full bg-emerald-400/50 blur-xs animate-puff-3"></span>
            </div>
          </div>

          {/* SVG Fleetwood Bounder RV Graphic */}
          <div className="relative z-10 animate-float">
            <svg width="280" height="130" viewBox="0 0 280 130" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* RV Roof Vent / AC Unit */}
              <rect x="110" y="24" width="34" height="8" rx="2" fill="#71717a" stroke="#3f3f46" strokeWidth="1.5" />
              <rect x="155" y="26" width="18" height="6" rx="1" fill="#52525b" />
              {/* Exhaust Pipe emitting lab vapor */}
              <rect x="135" y="16" width="6" height="12" fill="#00ff88" opacity="0.8" />
              <circle cx="138" cy="14" r="3" fill="#67e8f9" />

              {/* Main RV Body (Iconic Cream / Beige) */}
              <path d="M25 32H230L260 70V105H25V32Z" fill="#e5dfcb" stroke="#27272a" strokeWidth="2.5" />
              
              {/* Front windshield & Side windows */}
              <path d="M225 38H200V64H250L225 38Z" fill="#18272f" stroke="#0f172a" strokeWidth="1.5" />
              <rect x="145" y="40" width="45" height="24" rx="2" fill="#18272f" stroke="#334155" strokeWidth="1.5" />
              <rect x="85" y="40" width="45" height="24" rx="2" fill="#18272f" stroke="#334155" strokeWidth="1.5" />
              <rect x="35" y="40" width="38" height="24" rx="2" fill="#18272f" stroke="#334155" strokeWidth="1.5" />
              
              {/* Window reflections */}
              <line x1="205" y1="42" x2="235" y2="60" stroke="#67e8f9" strokeWidth="1.5" strokeOpacity="0.4" />
              <line x1="150" y1="44" x2="180" y2="60" stroke="#67e8f9" strokeWidth="1.5" strokeOpacity="0.4" />
              
              {/* Iconic Amber / Brown Stripes */}
              <rect x="25" y="70" width="235" height="10" fill="#b45309" />
              <rect x="25" y="82" width="235" height="4" fill="#d97706" />
              
              {/* Bullet Hole Decals (Breaking Bad Easter Egg) */}
              <circle cx="105" cy="50" r="2.5" fill="#facc15" stroke="#451a03" strokeWidth="1" />
              <line x1="102" y1="46" x2="108" y2="54" stroke="#451a03" strokeWidth="0.8" />
              <circle cx="112" cy="55" r="2" fill="#facc15" stroke="#451a03" strokeWidth="1" />
              
              {/* Headlights & Grille */}
              <rect x="255" y="82" width="5" height="12" rx="2" fill="#fef08a" />
              <rect x="255" y="96" width="4" height="6" rx="1" fill="#f97316" />
              
              {/* RV Door */}
              <rect x="70" y="40" width="1" height="64" stroke="#78716c" strokeWidth="1" />
              <rect x="72" y="72" width="4" height="2" fill="#44403c" />

              {/* Wheel Well Cutouts */}
              <path d="M50 105C50 92 74 92 74 105H50Z" fill="#18181b" />
              <path d="M195 105C195 92 219 92 219 105H195Z" fill="#18181b" />

              {/* Rear Wheel */}
              <g className="origin-[62px_105px] animate-wheel">
                <circle cx="62" cy="105" r="14" fill="#27272a" stroke="#18181b" strokeWidth="2" />
                <circle cx="62" cy="105" r="7" fill="#a1a1aa" />
                <circle cx="62" cy="105" r="3" fill="#18181b" />
                <line x1="62" y1="98" x2="62" y2="112" stroke="#52525b" strokeWidth="1.5" />
                <line x1="55" y1="105" x2="69" y2="105" stroke="#52525b" strokeWidth="1.5" />
              </g>

              {/* Front Wheel */}
              <g className="origin-[207px_105px] animate-wheel">
                <circle cx="207" cy="105" r="14" fill="#27272a" stroke="#18181b" strokeWidth="2" />
                <circle cx="207" cy="105" r="7" fill="#a1a1aa" />
                <circle cx="207" cy="105" r="3" fill="#18181b" />
                <line x1="207" y1="98" x2="207" y2="112" stroke="#52525b" strokeWidth="1.5" />
                <line x1="200" y1="105" x2="214" y2="105" stroke="#52525b" strokeWidth="1.5" />
              </g>
            </svg>
          </div>

          {/* Road with Scrolling Dashes */}
          <div className="absolute bottom-2 left-0 right-0 h-4 bg-[#1e1e1e] border-t-2 border-amber-600/40">
            <div className="w-[200%] h-full flex items-center animate-road">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="w-8 h-1 bg-amber-400 mx-4 shrink-0 rounded-full opacity-80" />
              ))}
            </div>
          </div>
        </div>

        {/* Loading / Status Readout */}
        <div className="text-center mt-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bb-dark/80 border border-bb-neon/40 text-xs font-mono text-bb-neon tracking-widest uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 animate-spin" />
            SYNTHESIZING EXPERIMENT
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-display tracking-widest text-white uppercase">
            COOKING <span className="text-bb-neon">CHEMOZALE '26</span>
          </h3>
          
          <p className="text-xs sm:text-sm text-gray-400 font-mono mt-1">
            Reactions warming up on Route 66... 99.1% pure engineering
          </p>

          {/* Periodic Elements Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-8 h-8 rounded border border-emerald-500 bg-emerald-950/60 flex flex-col items-center justify-center text-[10px] font-mono text-emerald-400 font-bold">
              <span>6</span>
              <span className="text-xs text-white">C</span>
            </div>
            <div className="w-8 h-8 rounded border border-emerald-500 bg-emerald-950/60 flex flex-col items-center justify-center text-[10px] font-mono text-emerald-400 font-bold">
              <span>42</span>
              <span className="text-xs text-white">Mo</span>
            </div>
            <div className="w-8 h-8 rounded border border-emerald-500 bg-emerald-950/60 flex flex-col items-center justify-center text-[10px] font-mono text-emerald-400 font-bold">
              <span>13</span>
              <span className="text-xs text-white">Al</span>
            </div>
          </div>

          {/* Dismiss button when shown as intro */}
          {isIntro && (
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2 rounded-lg bg-bb-neon/20 hover:bg-bb-neon text-bb-neon hover:text-black border border-bb-neon/60 text-xs font-mono tracking-wider transition-all"
            >
              ENTER LABORATORY →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
