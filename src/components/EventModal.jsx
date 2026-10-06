import React, { useEffect } from 'react';
import { X, Calendar, Clock, MapPin, Users, ExternalLink, CheckCircle2, ShieldAlert } from 'lucide-react';
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      {/* Modal Dialog Card */}
      <div
        className="relative w-full max-w-4xl bg-[#0c1410] border border-emerald-500/40 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Gradient Bar */}
        <div className={`h-2.5 w-full bg-gradient-to-r ${event.themeColor}`} />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 border border-bb-border text-gray-300 hover:text-white hover:border-emerald-400 transition"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="max-h-[85vh] overflow-y-auto">
          {/* Header Banner with Event Poster & Periodic Badges */}
          <div className="relative bg-black/90 border-b border-bb-border flex flex-col md:flex-row items-center p-6 gap-6">
            {/* Event Artwork */}
            {event.image && (
              <div className="w-44 sm:w-56 shrink-0 aspect-square rounded-xl overflow-hidden bg-black/60 border border-bb-border flex items-center justify-center p-2 shadow-xl">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-contain"
                />
              </div>
            )}

            {/* Title & Metadata */}
            <div className="flex-1 text-left">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <div className="flex items-center gap-1.5">
                  {event.elements.map((el) => (
                    <PeriodicTile
                      key={el.symbol}
                      number={el.number}
                      symbol={el.symbol}
                      name={el.name}
                      mass={el.mass}
                      size="sm"
                      variant="green"
                      interactive={false}
                    />
                  ))}
                </div>

                <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 uppercase tracking-wider font-semibold">
                  {event.badge}
                </span>

                <span className="text-xs font-mono text-gray-400">
                  {event.category}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-display tracking-wider text-white">
                {event.title}
              </h3>

              <p className="text-xs sm:text-sm font-mono text-amber-300 italic mt-2">
                "{event.tagline}"
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-black/50 border border-bb-border text-xs font-mono">
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
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-bb-neon mb-2">
                OPERATION BRIEFING & DESCRIPTION
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed font-sans whitespace-pre-line bg-[#09100c] p-4 rounded-xl border border-bb-border/70">
                {event.description}
              </p>
            </div>

            {/* Objectives */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-bb-neon mb-2">
                KEY OBJECTIVES & DELIVERABLES
              </h4>
              <ul className="space-y-2.5">
                {event.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 bg-[#0e1712] p-3 rounded-lg border border-bb-border/40">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rounds Protocol */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-bb-neon mb-2">
                OPERATION PHASES & MODULES
              </h4>
              <div className="space-y-2.5">
                {event.rounds.map((rnd, i) => (
                  <div key={i} className="p-3.5 rounded-lg bg-[#0e1712] border border-bb-border">
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

            {/* Registration Banner inside Modal */}
            {event.registrationLink && (
              <div className="p-5 rounded-xl bg-gradient-to-r from-emerald-950/70 via-black to-emerald-950/70 border border-emerald-500/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h5 className="font-display text-lg text-white tracking-wide">
                    READY TO ENTER THIS OPERATION?
                  </h5>
                  <p className="text-xs font-mono text-gray-300 mt-0.5">
                    Official registration is open via Google Forms. Secure your slot now.
                  </p>
                </div>

                <a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-bb-neon via-emerald-400 to-bb-cyan text-black text-xs font-mono font-bold uppercase tracking-wider hover:shadow-[0_0_25px_rgba(0,255,136,0.6)] transition-all flex items-center justify-center gap-2 shrink-0 active:scale-95"
                >
                  <span>REGISTER ON GOOGLE FORM</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}

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
                  Close Event
                </button>
                
                {event.registrationLink && (
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 sm:w-auto px-6 py-2.5 rounded-lg bg-bb-neon text-black text-xs font-mono font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] transition flex items-center justify-center gap-1.5"
                  >
                    <span>Register Now</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
