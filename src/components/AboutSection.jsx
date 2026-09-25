import React from 'react';
import { Beaker, Award, Zap, Users, ShieldAlert, Cpu } from 'lucide-react';
import { FEST_DATA } from '../data/chemozaleData';
import PeriodicTile from './PeriodicTile';

export default function AboutSection() {
  const pillars = [
    {
      title: "IDEA",
      subtitle: "The Catalyst",
      desc: "Conceptualizing breakthrough paradigms across carbon capture, green hydrogen, and computational transport phenomena.",
      icon: Cpu,
      color: "text-emerald-400",
      border: "border-emerald-500/30",
      bg: "bg-emerald-500/5",
    },
    {
      title: "REACTIONS",
      subtitle: "The Kinetic Drive",
      desc: "Putting theoretical chemistry into relentless trial through live wet labs, simulation sprints, and rapid-fire geopolitical debates.",
      icon: Zap,
      color: "text-amber-400",
      border: "border-amber-500/30",
      bg: "bg-amber-500/5",
    },
    {
      title: "SOLUTIONS",
      subtitle: "The Pure Yield",
      desc: "Diagnosing real-world industrial plant failures, fixing refinery bottlenecks, and engineering commercial safety HAZOPs.",
      icon: Beaker,
      color: "text-cyan-400",
      border: "border-cyan-500/30",
      bg: "bg-cyan-500/5",
    },
    {
      title: "IMPACT",
      subtitle: "The Legacy",
      desc: "Transforming undergraduate research into publishable blueprints and opening direct pipelines to leading chemical conglomerates.",
      icon: Award,
      color: "text-rose-400",
      border: "border-rose-500/30",
      bg: "bg-rose-500/5",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Hazard Warning Header Strip */}
      <div className="w-full h-1 hazard-strip rounded-full mb-12 opacity-70"></div>

      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bb-card border border-bb-border text-xs font-mono text-bb-neon uppercase tracking-widest mb-3">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>DECRYPTING THE PROTOCOL</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-display tracking-wider text-white uppercase">
          WHAT IS <span className="text-bb-neon">CHEMOZALE</span>?
        </h2>
        
        <p className="mt-4 text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
          Chemozale is the premier annual technical festival hosted by the{' '}
          <strong className="text-emerald-400 font-medium">Indian Institute of Chemical Engineers (IIChE)</strong> student chapter at{' '}
          <strong className="text-white font-medium">Institute of Technology, Nirma University</strong>. Blending rigorous chemical science with industrial crisis management, Chemozale tests the purest limits of student ingenuity.
        </p>
      </div>

      {/* 4 Pillars (Idea, Reactions, Solutions, Impact) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.title}
              className={`p-6 rounded-2xl bg-bb-card border ${pillar.border} hover:border-bb-neon/60 transition-all duration-300 hover:-translate-y-1.5 shadow-xl group`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${pillar.bg} border ${pillar.border}`}>
                  <Icon className={`w-6 h-6 ${pillar.color}`} />
                </div>
                <span className="font-mono text-xs tracking-widest text-gray-500 uppercase">
                  {pillar.subtitle}
                </span>
              </div>
              <h3 className="text-2xl font-display tracking-wider text-white group-hover:text-bb-neon transition">
                {pillar.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                {pillar.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Stats Counter Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        {FEST_DATA.stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-[#09100c] border border-bb-border text-center shadow-lg hover:border-emerald-500/40 transition"
          >
            <div className="font-display text-3xl sm:text-4xl text-white tracking-wider">
              {stat.value}
            </div>
            <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
