import React, { useState } from 'react';
import { SUB_EVENTS } from '../data/chemozaleData';
import PeriodicTile from './PeriodicTile';
import EventModal from './EventModal';
import { ArrowRight, Calendar, MapPin, Users, Sparkles, Filter, Beaker } from 'lucide-react';

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = ['ALL', 'CASE STUDY', 'FLAGSHIP', 'WET LAB', 'SIMULATION'];

  const filteredEvents = SUB_EVENTS.filter((evt) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'CASE STUDY') return evt.badge.includes('Case') || evt.badge.includes('Consultancy');
    if (activeFilter === 'FLAGSHIP') return evt.badge.includes('Flagship') || evt.badge.includes('Policy');
    if (activeFilter === 'WET LAB') return evt.badge.includes('Wet Lab') || evt.badge.includes('Research');
    if (activeFilter === 'SIMULATION') return evt.badge.includes('Simulation');
    return true;
  });

  return (
    <section id="operations" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bb-card border border-bb-border text-xs font-mono text-bb-neon uppercase tracking-widest mb-3">
            <Beaker className="w-3.5 h-3.5" />
            <span>CONFIDENTIAL LABORATORY ROSTER</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-display tracking-wider text-white uppercase">
            THE 7 <span className="text-bb-neon">OPERATIONS</span>
          </h2>
          
          <p className="mt-2 text-sm text-gray-400 font-sans max-w-xl">
            Seven tactical trials designed to push your thermodynamic limits, reaction kinetics, and engineering composure under fire.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                activeFilter === cat
                  ? 'bg-bb-neon text-black font-bold shadow-[0_0_15px_rgba(0,255,136,0.4)]'
                  : 'bg-bb-card border border-bb-border text-gray-400 hover:text-white hover:border-gray-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredEvents.map((evt) => (
          <div
            key={evt.id}
            onClick={() => setSelectedEvent(evt)}
            className="group relative rounded-2xl bg-gradient-to-b from-[#0f1712] to-[#070b09] border border-bb-border hover:border-emerald-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,255,136,0.15)] cursor-pointer overflow-hidden"
          >
            {/* Top Accent Line */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${evt.themeColor} opacity-70 group-hover:opacity-100 transition`} />

            <div>
              {/* Elemental Badges & Category Pill */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-1.5">
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

                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 text-gray-300 border border-bb-border uppercase tracking-wider">
                  {evt.badge}
                </span>
              </div>

              {/* Title & Category */}
              <h3 className="text-2xl font-display tracking-wider text-white group-hover:text-bb-neon transition">
                {evt.title}
              </h3>
              
              <div className="text-xs font-mono text-emerald-400/90 mb-3">
                {evt.category}
              </div>

              {/* Tagline / Teaser */}
              <p className="text-xs sm:text-sm text-gray-400 line-clamp-2 leading-relaxed mb-6 font-sans">
                {evt.tagline}
              </p>
            </div>

            {/* Bottom Card Meta & Action */}
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

              <div className="flex items-center justify-between pt-1 text-xs font-mono">
                <span className="text-gray-500 uppercase tracking-wider">Operation Dossier</span>
                <span className="flex items-center gap-1 text-bb-neon group-hover:translate-x-1 transition-transform font-bold">
                  INSPECT <ArrowRight className="w-3.5 h-3.5" />
                </span>
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
