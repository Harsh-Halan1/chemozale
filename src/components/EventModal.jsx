import React, { useEffect } from 'react';
import { X, Calendar, Clock, MapPin, Users, Award, ExternalLink, CheckCircle2, AlertTriangle } from 'lucide-react';
import PeriodicTile from './PeriodicTile';

export default function EventModal({ event, onClose }) {
  // Prevent background scroll when modal is active
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Modal Dialog Card */}
      <div
        className="relative w-full max-w-3xl bg-[#0c1410] border border-emerald-500/40 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Gradient Bar */}
        <div className={`h-2.5 w-full bg-gradient-to-r ${event.themeColor}`} />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-bb-card border border-bb-border text-gray-400 hover:text-white hover:border-emerald-400 transition"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {/* Header Area with Element Tiles */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="flex items-center gap-1.5">
              {event.elements.map((el) => (
                <PeriodicTile
                  key={el.symbol}
                  number={el.number}
                  symbol={el.symbol}
                  name={el.name}
                  mass={el.mass}
                  size="md"
                  variant="green"
                  interactive={false}
                />
              ))}
            </div>

            <div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 uppercase tracking-wider">
                {event.category}
              </span>
              <h3 className="text-2xl sm:text-4xl font-display tracking-wider text-white mt-1">
                {event.title}
              </h3>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-sm sm:text-base font-mono text-amber-300 italic mb-6">
            "{event.tagline}"
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-black/40 border border-bb-border mb-6 text-xs font-mono">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-bb-neon shrink-0" />
              <div>
                <span className="text-gray-500 block text-[10px]">SCHEDULE</span>
                <span className="text-gray-200">{event.day}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-bb-cyan shrink-0" />
              <div>
                <span className="text-gray-500 block text-[10px]">TIMING</span>
                <span className="text-gray-200">{event.time}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="text-gray-500 block text-[10px]">LAB VENUE</span>
                <span className="text-gray-200">{event.venue}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-purple-400 shrink-0" />
              <div>
                <span className="text-gray-500 block text-[10px]">CREW SIZE</span>
                <span className="text-gray-200">{event.teamSize}</span>
              </div>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-widest text-bb-neon mb-2">
              OPERATION BRIEFING
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed font-sans">
              {event.description}
            </p>
          </div>

          {/* Objectives */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-widest text-bb-neon mb-2">
              CRITICAL LAB OBJECTIVES
            </h4>
            <ul className="space-y-2">
              {event.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Rounds Protocol */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-widest text-bb-neon mb-2">
              STAGES & ROUNDS STRUCTURE
            </h4>
            <div className="space-y-2.5">
              {event.rounds.map((rnd, i) => (
                <div key={i} className="p-3 rounded-lg bg-[#0e1712] border border-bb-border">
                  <span className="text-xs font-mono font-bold text-amber-300 block">
                    {rnd.name}
                  </span>
                  <span className="text-xs text-gray-400 font-sans mt-0.5 block">
                    {rnd.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-bb-border">
            <div className="text-xs font-mono text-gray-400 flex items-center gap-2">
              <span className="text-emerald-400">Purity Standard:</span>
              <span className="text-white font-bold">{event.purityYield}</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-1/2 sm:w-auto px-5 py-2.5 rounded-lg border border-bb-border text-gray-300 hover:text-white text-xs font-mono uppercase"
              >
                Close Dossier
              </button>
              
              <a
                href="#contact"
                onClick={onClose}
                className="w-1/2 sm:w-auto px-6 py-2.5 rounded-lg bg-gradient-to-r from-bb-neon to-emerald-400 text-black text-xs font-mono font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] transition flex items-center justify-center gap-1.5"
              >
                <span>Register Now</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
