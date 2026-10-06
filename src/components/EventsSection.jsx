import React, { useState } from 'react';
import { SUB_EVENTS } from '../data/chemozaleData';
import PeriodicTile from './PeriodicTile';
import EventModal from './EventModal';
import { ArrowRight, Calendar, MapPin, Users, Sparkles, Beaker, ExternalLink } from 'lucide-react';

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeFilter, setActiveFilter] = useState('ALL');

  // Compact, streamlined categories to prevent multi-line wrapping and excessive area usage
  const filterCategories = [
    { id: 'ALL', label: 'All Operations (7)' },
    { id: 'CHALLENGES', label: 'Case Challenges' },
    { id: 'FLAGSHIP', label: 'Flagship' },
    { id: 'WORKSHOPS', label: 'Workshops' },
    { id: 'RESEARCH', label: 'Research' },
  ];

  const filteredEvents = SUB_EVENTS.filter((evt) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'CHALLENGES') return evt.id === 'crack-the-case' || evt.id === 'better-call-engineer';
    if (activeFilter === 'FLAGSHIP') return evt.id === 'project-heisenberg' || evt.id === 'nation-clash';
    if (activeFilter === 'WORKSHOPS') return evt.id === 'flow-cartel' || evt.id === 'alchemy-of-imperfection';
    if (activeFilter === 'RESEARCH') return evt.id === 'research-blueprint';
    return true;
  });

  return (
    <section id="operations" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header with Compact Filter Control */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bb-card border border-bb-border text-xs font-mono text-bb-neon uppercase tracking-widest mb-3">
            <Beaker className="w-3.5 h-3.5" />
            <span>CONFIDENTIAL LABORATORY ROSTER</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-display tracking-wider text-white uppercase">
            THE 7 <span className="text-bb-neon">OPERATIONS</span>
          </h2>
          
          <p className="mt-2 text-sm text-gray-400 font-sans">
            Seven tactical trials designed to push your thermodynamic limits, reaction kinetics, and engineering composure under fire.
          </p>
        </div>

        {/* Sleek, Compact Segmented Filter Pills (Space-Efficient) */}
        <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-black/70 border border-bb-border shadow-inner self-start lg:self-end overflow-x-auto max-w-full">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                activeFilter === cat.id
                  ? 'bg-bb-neon text-black font-bold shadow-[0_0_12px_rgba(0,255,136,0.35)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredEvents.map((evt) => (
          <div
            key={evt.id}
            className="group relative rounded-2xl bg-gradient-to-b from-[#0f1712] to-[#070b09] border border-bb-border hover:border-emerald-500/50 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,255,136,0.15)] overflow-hidden"
          >
            {/* Top Accent Line */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${evt.themeColor} opacity-70 group-hover:opacity-100 transition z-10`} />

            {/* Event Artwork Image Banner */}
            <div
              className="relative h-56 w-full overflow-hidden bg-black/80 cursor-pointer"
              onClick={() => setSelectedEvent(evt)}
            >
              {evt.image ? (
                <img
                  src={evt.image}
                  alt={evt.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-black/60 text-gray-500 font-mono text-xs">
                  LAB GRAPHIC PENDING
                </div>
              )}

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1712] via-transparent to-black/40 pointer-events-none" />

              {/* Floating Periodic Badges */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                {evt.elements.map((el) => (
                  <PeriodicTile
                    key={el.symbol}
                    number={el.number}
                    symbol={el.symbol}
                    name=""
                    size="sm"
                    variant="green"
                    interactive={false}
                  />
                ))}
              </div>

              {/* Category Pill Tag */}
              <div className="absolute top-3 right-3 z-10">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/75 backdrop-blur-sm text-emerald-300 border border-emerald-500/40 uppercase tracking-wider font-semibold shadow-md">
                  {evt.badge}
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 pt-3 flex-1 flex flex-col justify-between">
              <div>
                {/* Title */}
                <h3
                  onClick={() => setSelectedEvent(evt)}
                  className="text-2xl font-display tracking-wider text-white group-hover:text-bb-neon transition cursor-pointer"
                >
                  {evt.title}
                </h3>
                
                {/* Subtitle / Category */}
                <div className="text-xs font-mono text-emerald-400/90 mb-2">
                  {evt.category}
                </div>

                {/* Tagline */}
                <p className="text-xs font-mono text-amber-300/90 italic mb-3 line-clamp-1">
                  "{evt.tagline}"
                </p>

                {/* Description Teaser */}
                <p className="text-xs sm:text-sm text-gray-400 line-clamp-2 leading-relaxed mb-5 font-sans">
                  {evt.description}
                </p>
              </div>

              {/* Bottom Meta & Actions */}
              <div className="border-t border-bb-border/60 pt-4">
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-gray-400 mb-4">
                  <div className="flex items-center gap-1.5 truncate">
                    <Calendar className="w-3.5 h-3.5 text-bb-neon shrink-0" />
                    <span className="truncate">{evt.day}</span>
                  </div>
                  <div className="flex items-center gap-1.5 truncate">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{evt.venue}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{evt.teamSize}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>{evt.purityYield} Purity</span>
                  </div>
                </div>

                {/* Action Buttons Row */}
                <div className="flex items-center gap-2 pt-1 text-xs font-mono">
                  <button
                    onClick={() => setSelectedEvent(evt)}
                    className="flex-1 py-2 px-3 rounded-lg bg-bb-card border border-bb-border hover:border-emerald-500/60 hover:text-white text-gray-300 transition text-center uppercase tracking-wider flex items-center justify-center gap-1"
                  >
                    <span>See Event</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {evt.registrationLink && (
                    <a
                      href={evt.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-lg bg-gradient-to-r from-bb-neon to-emerald-400 text-black font-bold uppercase tracking-wider hover:shadow-[0_0_15px_rgba(0,255,136,0.4)] transition flex items-center gap-1"
                    >
                      <span>Register</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full Modal Viewer */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </section>
  );
}
