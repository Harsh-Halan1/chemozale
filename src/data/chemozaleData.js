export const FEST_DATA = {
  name: "CHEMOZALE",
  edition: "2026",
  tagline: "IDEA . REACTIONS . SOLUTIONS . IMPACT",
  theme: "Breaking Bad — The Chemical Engineering Synthesis",
  dates: {
    start: "2026-10-09T09:00:00",
    end: "2026-10-11T20:00:00",
    display: "9th - 11th OCTOBER 2026",
  },
  department: "Indian Institute of Chemical Engineers (IIChE)",
  institution: "Institute of Technology, Nirma University",
  accreditation: "NAAC Accredited 'A+' Grade",
  coordinators: [
    {
      name: "Mayur Tanna",
      phone: "+91 98797 20125",
      cleanPhone: "919879720125",
      role: "Lead Operations & Logistics Coordinator",
      codeName: "The Distributor"
    },
    {
      name: "Tirth Sanghvi",
      phone: "+91 94265 04779",
      cleanPhone: "919426504779",
      role: "Lead Technical & Operations Coordinator",
      codeName: "The Alchemist"
    }
  ],
  quote: {
    text: "Chemistry is the study of matter. But I prefer to see it as the study of change: growth, decay, then transformation.",
    author: "Walter White / Heisenberg"
  },
  stats: [
    { label: "High-Octane Operations", value: "7 Events" },
    { label: "Synthesis Duration", value: "3 Days" },
    { label: "Purity Rating", value: "99.1%" },
    { label: "Prize Pool & Grants", value: "₹50,000+" }
  ]
};

export const SUB_EVENTS = [
  {
    id: "crack-the-case",
    title: "Crack The Case",
    encodedTitle: "[Cr]ack The [Ca]se",
    elements: [
      { symbol: "Cr", number: 24, name: "Chromium", mass: "51.99" },
      { symbol: "Ca", number: 20, name: "Calcium", mass: "40.07" }
    ],
    category: "Industrial Forensic & Plant Case Study",
    tagline: "Troubleshoot real-world plant disasters before the reactor reaches critical mass.",
    badge: "Case Study",
    themeColor: "from-emerald-500 to-teal-700",
    glowColor: "rgba(16, 185, 129, 0.4)",
    borderColor: "border-emerald-500/40",
    textColor: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    icon: "Search",
    day: "Day 1 (9th Oct)",
    time: "10:30 AM - 1:00 PM",
    venue: "A-101 (Process Control Lab)",
    format: "Offline",
    teamSize: "2 - 4 Members",
    purityYield: "98.5%",
    description: "Step into the shoes of industrial forensic engineers. You are presented with a catastrophic chemical plant malfunction, ambiguous telemetry logs, and suspicious batch anomalies. Analyze reaction kinetics, isolate root causes, and crack the case before catastrophic failure.",
    objectives: [
      "Deconstruct telemetry data from failed catalytic cracking units",
      "Identify hazardous gas leaks and exothermic runaway triggers",
      "Pitch remediation protocols to a simulated regulatory inquiry"
    ],
    rounds: [
      { name: "Phase 1: Telemetry Triage", desc: "Rapid hazard isolation from industrial P&ID sensor dumps." },
      { name: "Phase 2: Root Cause Synthesis", desc: "Formulate the exact chemical failure chain and financial damage estimate." },
      { name: "Phase 3: The Board Defense", desc: "5-minute cross-examination in front of senior plant auditors." }
    ]
  },
  {
    id: "nation-clash",
    title: "Nation Clash",
    encodedTitle: "[Na]tion [Cl]ash",
    elements: [
      { symbol: "Na", number: 11, name: "Sodium", mass: "22.98" },
      { symbol: "Cl", number: 17, name: "Chlorine", mass: "35.45" }
    ],
    category: "Geopolitical Energy & Chemical Policy",
    tagline: "High-stakes debate on energy sanctions, carbon tariffs, and green hydrogen wars.",
    badge: "Policy Clash",
    themeColor: "from-amber-500 to-orange-700",
    glowColor: "rgba(245, 158, 11, 0.4)",
    borderColor: "border-amber-500/40",
    textColor: "text-amber-400",
    accentBg: "bg-amber-500/10",
    icon: "Globe",
    day: "Day 1 (9th Oct)",
    time: "2:00 PM - 5:00 PM",
    venue: "C-Auditorium",
    format: "Offline",
    teamSize: "1 - 2 Members",
    purityYield: "97.8%",
    description: "Global chemical supply chains are geopolitical chessboards. Represent OPEC delegations, EU environmental tribunals, lithium cartel directors, and energy ministries in a fierce debate over fuel embargoes and sustainable transition mandates.",
    objectives: [
      "Defend national energy policies under surprise embargo crises",
      "Draft multilateral treaties on petrochemical emissions",
      "Cross-examine opposing trade cartels under timed parliamentary protocol"
    ],
    rounds: [
      { name: "Round 1: Stance Formulation", desc: "Opening manifesto on national fossil vs. renewable resource rights." },
      { name: "Round 2: The Embargo Shock", desc: "Unannounced trade sanction introduced mid-debate requiring emergency pivot." },
      { name: "Round 3: Bilateral Treaty Draft", desc: "Bargain fuel quotas and carbon tax offsets with competitor syndicates." }
    ]
  },
  {
    id: "project-heisenberg",
    title: "Project Heisenberg",
    encodedTitle: "Pr[Be]ject [He]isenberg",
    elements: [
      { symbol: "Be", number: 4, name: "Beryllium", mass: "9.01" },
      { symbol: "He", number: 2, name: "Helium", mass: "4.00" }
    ],
    category: "Flagship Technical Innovation & Working Model",
    tagline: "99.1% pure engineering ingenuity. Present your novel reactor or process prototype.",
    badge: "Flagship",
    themeColor: "from-cyan-400 to-blue-600",
    glowColor: "rgba(0, 229, 255, 0.45)",
    borderColor: "border-cyan-400/50",
    textColor: "text-cyan-300",
    accentBg: "bg-cyan-500/10",
    icon: "Atom",
    day: "Day 2 (10th Oct)",
    time: "9:30 AM - 1:30 PM",
    venue: "N-Block Innovation Gallery",
    format: "Offline Prototype / Simulation",
    teamSize: "2 - 4 Members",
    purityYield: "99.1%",
    description: "The crown jewel of Chemozale. Showcase working prototypes, novel reactor blueprints, biocatalytic pathways, or continuous separation setups to an elite panel of chemical industrialists and academic scholars.",
    objectives: [
      "Demonstrate live working bench-scale model or verified dynamic simulation",
      "Prove scalability, atom economy, and thermodynamic efficiency",
      "Withstand Heisenberg-grade technical cross-examination"
    ],
    rounds: [
      { name: "Stage 1: Purity Inspection", desc: "Judges review safety, mass balance calculations, and novel patentability." },
      { name: "Stage 2: Live Prototype Run", desc: "Demonstration of prototype flow, heat recovery, or separation yield." },
      { name: "Stage 3: Commercial Pitch", desc: "Convince the investment panel of capital expenditure ROI." }
    ]
  },
  {
    id: "better-call-engineer",
    title: "Better Call Engineer",
    encodedTitle: "[B]etter [Ca]ll Engineer",
    elements: [
      { symbol: "B", number: 5, name: "Boron", mass: "10.81" },
      { symbol: "Ca", number: 20, name: "Calcium", mass: "40.07" }
    ],
    category: "Industrial Crisis Consultation & HAZOP",
    tagline: "When the column overpressurizes and the flare stack cuts out, who do you call?",
    badge: "Consultancy",
    themeColor: "from-yellow-400 to-amber-600",
    glowColor: "rgba(250, 204, 21, 0.4)",
    borderColor: "border-yellow-400/40",
    textColor: "text-yellow-300",
    accentBg: "bg-yellow-500/10",
    icon: "Briefcase",
    day: "Day 2 (10th Oct)",
    time: "2:00 PM - 4:30 PM",
    venue: "A-Block Drawing Hall",
    format: "Offline",
    teamSize: "3 - 4 Members",
    purityYield: "96.4%",
    description: "Industrial clients face catastrophic compliance deadlines, blown distillation trays, and hazardous effluent spikes. Form a rapid-response consulting syndicate, redesign P&IDs in real-time, and preserve both lives and profits.",
    objectives: [
      "Diagnose runaway pressure curves on live refinery process schematics",
      "Perform emergency HAZOP (Hazard and Operability) analysis under time limits",
      "Redesign bypass loops and flare relief systems within budget caps"
    ],
    rounds: [
      { name: "Case 1: The Distillation Hazard", desc: "Emergency re-routing of column reflux during condenser fouling." },
      { name: "Case 2: Effluent Zero-Discharge Crisis", desc: "Solve a toxic wastewater compliance deadline for a pesticide plant." },
      { name: "Case 3: Client Defense", desc: "Present consulting findings to the industrial managing director." }
    ]
  },
  {
    id: "research-blueprint",
    title: "Research Blueprint",
    encodedTitle: "[Re]search [B]lueprint",
    elements: [
      { symbol: "Re", number: 75, name: "Rhenium", mass: "186.20" },
      { symbol: "B", number: 5, name: "Boron", mass: "10.81" }
    ],
    category: "Technical Paper & Scientific Poster",
    tagline: "From laboratory synthesis to peer-reviewed breakthroughs.",
    badge: "Research",
    themeColor: "from-blue-400 to-indigo-600",
    glowColor: "rgba(59, 130, 246, 0.4)",
    borderColor: "border-blue-500/40",
    textColor: "text-blue-300",
    accentBg: "bg-blue-500/10",
    icon: "FileSpreadsheet",
    day: "Day 3 (11th Oct)",
    time: "9:30 AM - 12:30 PM",
    venue: "Seminar Hall 2",
    format: "Offline / Poster & Presentation",
    teamSize: "1 - 3 Members",
    purityYield: "98.0%",
    description: "Submit and present original scientific work spanning carbon capture materials, computational fluid dynamics, membrane bioreactors, and nano-catalytic synthesis.",
    objectives: [
      "Present high-impact chemical engineering literature with rigorous rigor",
      "Defend theoretical formulations against university research mentors",
      "Gain publication recommendation from the UG Research Cell"
    ],
    rounds: [
      { name: "Track A: Computational & Simulation", desc: "CFD, ASPEN Plus, and molecular modeling papers." },
      { name: "Track B: Green Materials & Synthesis", desc: "Polymers, bio-surfactants, and effluent treatment kinetics." },
      { name: "Final Q&A: Peer Defense", desc: "Cross-examination by guest editors and chemical department professors." }
    ]
  },
  {
    id: "alchemy-of-imperfection",
    title: "Alchemy of Imperfection",
    encodedTitle: "[Al]chemy of [I]mperfection",
    elements: [
      { symbol: "Al", number: 13, name: "Aluminum", mass: "26.98" },
      { symbol: "I", number: 53, name: "Iodine", mass: "126.90" }
    ],
    category: "Wet Lab Challenge & Creative Chemistry",
    tagline: "Transform lab impurities and contaminated batches into pure, crystalline yield.",
    badge: "Wet Lab",
    themeColor: "from-fuchsia-500 to-purple-700",
    glowColor: "rgba(217, 70, 239, 0.4)",
    borderColor: "border-fuchsia-500/40",
    textColor: "text-fuchsia-300",
    accentBg: "bg-fuchsia-500/10",
    icon: "FlaskRound",
    day: "Day 3 (11th Oct)",
    time: "1:30 PM - 3:30 PM",
    venue: "Unit Operations Lab (B-Block)",
    format: "Hands-on Laboratory",
    teamSize: "2 Members",
    purityYield: "95.5%",
    description: "In chemistry, flawed batches often hide historic discoveries. Given intentionally contaminated reagents, fluctuating pH, and competing reaction pathways, use laboratory wizardry to separate and crystallize the pure target compound.",
    objectives: [
      "Perform micro-titrations and precipitation under unknown impurities",
      "Determine crystallization kinetics with minimal reagent loss",
      "Score points on final crystal clarity, yield percentage, and safety discipline"
    ],
    rounds: [
      { name: "Lab Round 1: Contaminant Identification", desc: "Qualitative spot tests to deduce the masking ions." },
      { name: "Lab Round 2: Separation Cascade", desc: "Solvent extraction, filtration, and crystallization race." }
    ]
  },
  {
    id: "flow-cartel",
    title: "Flow Cartel",
    encodedTitle: "Fl[O]w [Ca]rtel",
    elements: [
      { symbol: "O", number: 8, name: "Oxygen", mass: "15.99" },
      { symbol: "Ca", number: 20, name: "Calcium", mass: "40.07" }
    ],
    category: "Process Simulation & Pipe Network Control",
    tagline: "Control the pressures. Route the volumes. Rule the flow.",
    badge: "Simulation",
    themeColor: "from-orange-500 to-rose-700",
    glowColor: "rgba(249, 115, 22, 0.4)",
    borderColor: "border-orange-500/40",
    textColor: "text-orange-400",
    accentBg: "bg-orange-500/10",
    icon: "Gauge",
    day: "Day 3 (11th Oct)",
    time: "3:30 PM - 5:30 PM",
    venue: "Computer Center Lab 4",
    format: "Simulation Sprint",
    teamSize: "2 - 3 Members",
    purityYield: "99.0%",
    description: "Master turbulent flow, cavitation spikes, and pump curves in a simulated multi-tier distribution pipeline. Out-balance pressure losses, bypass clogs, and out-deliver rival supply cartels.",
    objectives: [
      "Simulate compressible and slurry flow through complex pipeline loops",
      "Mitigate water hammer shocks during emergency pump trips",
      "Maximize chemical delivery yield while minimizing pumping horsepower"
    ],
    rounds: [
      { name: "Sprint 1: Steady-State Routing", desc: "Design minimal-friction pipe loop connecting 5 reactor nodes." },
      { name: "Sprint 2: The Cavitation Surge", desc: "Real-time mitigation of vapor pocket formation in centrifugal pumps." },
      { name: "Sprint 3: Cartel Showdown", desc: "Live multiplayer simulation competing for refinery feedstock quota." }
    ]
  }
];

export const SCHEDULE_DAYS = [
  {
    dayNumber: "1",
    date: "9th October 2026 (Friday)",
    themeTitle: "Reactions Initiated — Diagnostics & Sanctions",
    events: [
      { time: "09:00 AM - 10:15 AM", title: "Grand Inauguration & Keynote Address", venue: "C-Auditorium", type: "Ceremony" },
      { time: "10:30 AM - 01:00 PM", title: "Crack The Case (Phase 1 & 2)", venue: "A-101 (Process Control Lab)", type: "Competition" },
      { time: "01:00 PM - 02:00 PM", title: "Chemical Commissary (Lunch Break)", venue: "Student Mess", type: "Break" },
      { time: "02:00 PM - 05:00 PM", title: "Nation Clash: Geopolitical Energy Debate", venue: "C-Auditorium", type: "Competition" },
      { time: "05:15 PM - 06:30 PM", title: "IIChE Chemistry Mixer & Networking", venue: "A-Lawn", type: "Social" }
    ]
  },
  {
    dayNumber: "2",
    date: "10th October 2026 (Saturday)",
    themeTitle: "The Synthesis — Inventions & High-Yield Crisis",
    events: [
      { time: "09:30 AM - 01:30 PM", title: "Project Heisenberg: Flagship Prototype Expo", venue: "N-Block Innovation Gallery", type: "Flagship" },
      { time: "01:30 PM - 02:00 PM", title: "Lunch Break", venue: "Student Mess", type: "Break" },
      { time: "02:00 PM - 04:30 PM", title: "Better Call Engineer: Industrial HAZOP Crisis", venue: "A-Block Drawing Hall", type: "Competition" },
      { time: "04:45 PM - 06:00 PM", title: "Industrial Guest Lecture: Future of Petrochemicals", venue: "Seminar Hall 1", type: "Keynote" },
      { time: "06:30 PM - 09:00 PM", title: "Blue Sky Cultural & Heisenberg DJ Night", venue: "University Amphitheatre", type: "Cultural" }
    ]
  },
  {
    dayNumber: "3",
    date: "11th October 2026 (Sunday)",
    themeTitle: "The Grand Yield — Papers, Alchemy & Finale",
    events: [
      { time: "09:30 AM - 12:30 PM", title: "Research Blueprint: Technical Papers Presentation", venue: "Seminar Hall 2", type: "Academic" },
      { time: "12:30 PM - 01:30 PM", title: "Lunch Break", venue: "Student Mess", type: "Break" },
      { time: "01:30 PM - 03:30 PM", title: "Alchemy of Imperfection: Wet Lab Separation Challenge", venue: "Unit Operations Lab (B-Block)", type: "Wet Lab" },
      { time: "03:30 PM - 05:30 PM", title: "Flow Cartel: Pipeline Simulation Sprint", venue: "Computer Center Lab 4", type: "Simulation" },
      { time: "05:45 PM - 07:30 PM", title: "Valedictory Ceremony, Awards & Cash Prizes", venue: "C-Auditorium", type: "Ceremony" }
    ]
  }
];

export const FAQ_DATA = [
  {
    q: "Who is eligible to participate in Chemozale 2026?",
    a: "Chemozale is open to all undergraduate and postgraduate students from chemical, mechanical, biochemical, environmental, petroleum, and allied engineering disciplines from any recognized institute across India."
  },
  {
    q: "Can I register for multiple events across the 3 days?",
    a: "Yes! The schedule has been meticulously planned to prevent timing overlaps between core events. You can participate in multiple operations as long as their time slots do not collide."
  },
  {
    q: "Do I need a prior working prototype for Project Heisenberg?",
    a: "Working prototypes are heavily encouraged and awarded bonus points, but high-fidelity simulations (ASPEN, COMSOL, CFD) and rigorous engineering design calculations are also eligible."
  },
  {
    q: "Are laboratory safety coats and goggles required for wet lab events?",
    a: "For 'Alchemy of Imperfection', lab coats and safety goggles are strictly mandatory. All basic chemical reagents, glassware, and indicators will be provided on-site."
  },
  {
    q: "How will certificates and cash prizes be awarded?",
    a: "Official IIChE Nirma University certificates will be awarded to all registered attendees. Winners in each category receive cash prizes, trophies, and research commendations during the Valedictory ceremony."
  }
];
