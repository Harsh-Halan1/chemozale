import React, { useState } from 'react';
import { SCHEDULE_DAYS } from '../data/chemozaleData';
import { Calendar, Clock, MapPin, Sparkles, ChevronRight } from 'lucide-react';

export default function ScheduleSection() {
  const [activeDayIdx, setActiveDayIdx] = useState(0);
  const currentDay = SCHEDULE_DAYS[activeDayIdx];

  const typeColorMap = {
    Ceremony: 'text-amber-400 bg-amber-950/60 border-amber-500/40',
    Competition: 'text-emerald-400 bg-emerald-950/60 border-emerald-500/40',
    Flagship: 'text-cyan-400 bg-cyan-950/60 border-cyan-500/40',
    Academic: 'text-blue-400 bg-blue-950/60 border-blue-500/40',
    'Wet Lab': 'text-fuchsia-400 bg-fuchsia-950/60 border-fuchsia-500/40',
    Simulation: 'text-orange-400 bg-orange-950/60 border-orange-500/40',
    Social: 'text-rose-400 bg-rose-950/60 border-rose-500/40',
    Break: 'text-gray-400 bg-gray-900 border-gray-700',
    Keynote: 'text-yellow-400 bg-yellow-950/60 border-yellow-500/40',
    Cultural: 'text-purple-400 bg-purple-950/60 border-purple-500/40',
  };

  return (
    <section id="schedule" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bb-card border border-bb-border text-xs font-mono text-bb-neon uppercase tracking-widest mb-3">
          <Clock className="w-3.5 h-3.5" />
          <span>CHRONOLOGY OF SYNTHESIS</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-display tracking-wider text-white uppercase">
          PROTOCOL <span className="text-bb-neon">SCHEDULE</span>
        </h2>
        
        <p className="mt-2 text-sm text-gray-400 font-sans">
          Three days of non-overlapping operations carefully synthesized for maximum attendee participation.
        </p>
      </div>

      {/* Day Selector Tabs */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
        {SCHEDULE_DAYS.map((day, idx) => (
          <button
            key={day.dayNumber}
            onClick={() => setActiveDayIdx(idx)}
            className={`px-5 py-3 rounded-xl font-mono text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 border ${
              activeDayIdx === idx
                ? 'bg-gradient-to-r from-emerald-900/80 to-bb-dark border-emerald-400 text-bb-neon shadow-[0_0_20px_rgba(0,255,136,0.3)]'
                : 'bg-bb-card border-bb-border text-gray-400 hover:text-white hover:border-gray-600'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span className="font-bold">DAY {day.dayNumber}</span>
            <span className="text-gray-500 hidden sm:inline">•</span>
            <span className="text-xs text-gray-300 hidden sm:inline">{day.date.split('(')[0]}</span>
          </button>
        ))}
      </div>

      {/* Active Day Header */}
      <div className="p-4 rounded-xl bg-[#0c1410] border border-bb-border mb-6 text-center max-w-2xl mx-auto">
        <span className="text-xs font-mono text-bb-neon tracking-widest uppercase block mb-1">
          {currentDay.date}
        </span>
        <h3 className="text-lg sm:text-xl font-display text-white tracking-wide">
          "{currentDay.themeTitle}"
        </h3>
      </div>

      {/* Timeline List */}
      <div className="max-w-3xl mx-auto space-y-4">
        {currentDay.events.map((item, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-xl bg-bb-card border border-bb-border hover:border-emerald-500/40 transition-all hover:translate-x-1 shadow-md group"
          >
            <div className="flex items-start sm:items-center gap-4">
              {/* Time Pill */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 border border-bb-border text-xs font-mono text-emerald-400 shrink-0">
                <Clock className="w-3.5 h-3.5 text-bb-neon" />
                <span>{item.time}</span>
              </div>

              <div>
                <h4 className="font-display text-lg sm:text-xl text-white tracking-wider group-hover:text-bb-neon transition">
                  {item.title}
                </h4>
                <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{item.venue}</span>
                </div>
              </div>
            </div>

            {/* Event Type Pill */}
            <div className="mt-3 sm:mt-0 self-start sm:self-center">
              <span
                className={`text-[10px] font-mono px-2.5 py-1 rounded border uppercase tracking-wider ${
                  typeColorMap[item.type] || 'text-gray-300 bg-gray-900 border-gray-700'
                }`}
              >
                {item.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
