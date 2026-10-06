import React, { useState } from 'react';
import { FEST_DATA } from '../data/chemozaleData';
import { Phone, MessageSquare, Send, ShieldCheck, Mail, MapPin, CheckCircle } from 'lucide-react';
import PeriodicTile from './PeriodicTile';

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    operation: 'Crack The Case',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      // simulated success reset
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bb-card border border-bb-border text-xs font-mono text-bb-neon uppercase tracking-widest mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>CARTEL COMMAND & HOTLINES</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-display tracking-wider text-white uppercase">
          CONTACT <span className="text-bb-neon">LEADERSHIP</span>
        </h2>
        
        <p className="mt-2 text-sm text-gray-400 font-sans">
          Have queries about rules, accommodations, or operation logistics? Get in direct touch with our festival directors.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Coordinators Hotlines Cards (Extracted from poster) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-[#0e1611] border border-emerald-500/40 shadow-xl relative overflow-hidden">
            {/* Breaking Bad Notepad / Lab Style Header */}
            <div className="flex items-center justify-between pb-3 border-b border-bb-border mb-5">
              <span className="font-display text-lg tracking-wider text-amber-400 uppercase">
                OFFICIAL FESTIVAL DIRECTORS
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700">
                IIChE BOARD
              </span>
            </div>

            <div className="space-y-4">
              {FEST_DATA.coordinators.map((lead) => (
                <div
                  key={lead.name}
                  className="p-4 rounded-xl bg-black/50 border border-bb-border hover:border-emerald-500/60 transition group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-xl font-display text-white tracking-wide group-hover:text-bb-neon transition">
                          {lead.name}
                        </h4>
                      </div>
                      <p className="text-xs text-gray-400 font-sans mt-0.5">
                        {lead.role}
                      </p>
                      <p className="text-sm font-mono text-emerald-300 font-semibold mt-2">
                        {lead.phone}
                      </p>
                    </div>

                    {/* Quick Call & WhatsApp Action Buttons */}
                    <div className="flex items-center gap-2">
                      <a
                        href={`tel:${lead.phone}`}
                        className="p-2.5 rounded-lg bg-emerald-950/80 hover:bg-emerald-600 border border-emerald-500/40 text-emerald-300 hover:text-black transition"
                        title={`Call ${lead.name}`}
                      >
                        <Phone className="w-4 h-4" />
                      </a>
                      <a
                        href={`https://wa.me/${lead.cleanPhone}?text=Hi%20${lead.name},%20I%20have%20a%20query%20regarding%20Chemozale%202026`}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-lg bg-amber-950/80 hover:bg-amber-500 border border-amber-500/40 text-amber-300 hover:text-black transition"
                        title={`WhatsApp ${lead.name}`}
                      >
                        <MessageSquare className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Department Office Note */}
            <div className="mt-6 pt-4 border-t border-bb-border text-xs font-mono text-gray-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-bb-neon" />
                <span>iiche@nirmauni.ac.in</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Chemical Engineering Dept, A-Block, Nirma University</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Inquiry / Dispatch Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-bb-card border border-bb-border shadow-xl">
            <h3 className="text-2xl font-display tracking-wider text-white mb-1">
              DISPATCH AN <span className="text-bb-neon">INQUIRY</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-sans mb-6">
              Need registration assistance, bulk group entries, or transport details? Send our command dispatch a memo.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-center animate-fadeIn">
                <CheckCircle className="w-10 h-10 text-bb-neon mx-auto mb-3" />
                <h4 className="text-xl font-display text-white tracking-wide">
                  TRANSMISSION RECEIVED
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 font-mono mt-1">
                  Our lab coordinators have logged your dispatch and will reply shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-lg bg-bb-card border border-bb-border text-xs font-mono text-gray-300 hover:text-white"
                >
                  Send another dispatch
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Walter White"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-bb-border focus:border-bb-neon focus:ring-1 focus:ring-bb-neon text-sm text-gray-200 placeholder-gray-600 font-sans outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="heisenberg@nirmauni.ac.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-bb-border focus:border-bb-neon focus:ring-1 focus:ring-bb-neon text-sm text-gray-200 placeholder-gray-600 font-sans outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-bb-border focus:border-bb-neon focus:ring-1 focus:ring-bb-neon text-sm text-gray-200 placeholder-gray-600 font-sans outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-1.5">
                      Institute / University *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Institute of Technology, NU"
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-bb-border focus:border-bb-neon focus:ring-1 focus:ring-bb-neon text-sm text-gray-200 placeholder-gray-600 font-sans outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-1.5">
                    Operation of Interest
                  </label>
                  <select
                    value={formData.operation}
                    onChange={(e) => setFormData({ ...formData, operation: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-bb-border focus:border-bb-neon focus:ring-1 focus:ring-bb-neon text-sm text-gray-200 font-sans outline-none transition"
                  >
                    <option value="Crack The Case">Crack The Case ([Cr] + [Ca])</option>
                    <option value="Nation Clash">Nation Clash ([Na] + [Cl])</option>
                    <option value="Project Heisenberg">Project Heisenberg ([Be] + [He])</option>
                    <option value="Better Call Engineer">Better Call Engineer ([B] + [Ca])</option>
                    <option value="Research Blueprint">Research Blueprint ([Re] + [B])</option>
                    <option value="Alchemy of Imperfection">Alchemy of Imperfection ([Al] + [I])</option>
                    <option value="Flow Cartel">Flow Cartel ([O] + [Ca])</option>
                    <option value="General Query">General Registration / Accommodation Query</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-1.5">
                    Your Transmission / Message *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Enter your message, query, or team configuration details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-bb-border focus:border-bb-neon focus:ring-1 focus:ring-bb-neon text-sm text-gray-200 placeholder-gray-600 font-sans outline-none transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-bb-neon to-emerald-400 text-black font-mono font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT DISPATCH</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
