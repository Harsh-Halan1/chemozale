// Asset imports for official event artwork
import alchemyImg from '../assets/Alchemy of Imperfection.webp';
import betterCallImg from '../assets/Better Call Engineer.webp';
import crackTheCaseImg from '../assets/Crack The Case.webp';
import flowCartelImg from '../assets/Flow Cartel.webp';
import nationClashImg from '../assets/Nation Clash.webp';
import heisenbergImg from '../assets/Project Heisenberg.webp';
import researchBlueprintImg from '../assets/Research Blueprint.webp';

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
      role: "Secretary"
    },
    {
      name: "Tirth Shanghvi",
      phone: "+91 94265 04779",
      cleanPhone: "919426504779",
      role: "Joint Secretary"
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
    encodedTitle: "[C]rack The Case",
    image: crackTheCaseImg,
    // Updated: only C (Carbon) as requested
    elements: [
      { symbol: "C", number: 6, name: "Carbon", mass: "12.011" }
    ],
    category: "Industrial Case Challenge & Alumni Mentorship",
    tagline: "Think. Analyse. Solve. Crack the Case!",
    badge: "Case Study",
    themeColor: "from-emerald-500 to-teal-700",
    glowColor: "rgba(16, 185, 129, 0.4)",
    borderColor: "border-emerald-500/40",
    textColor: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    icon: "Search",
    day: "Day 2 (10th Oct)",
    time: "12:00 PM - 03:00 PM",
    venue: "A-101",
    format: "Offline",
    teamSize: "2 - 4 Members",
    purityYield: "98.5%",
    registrationLink: "https://forms.gle/wPNotvwKfLB877v19",
    description: "Put your chemical engineering skills to the test! Tackle real-world industry challenges, think critically, and work with your team to uncover innovative solutions. Get insights, guidance, and valuable interactions with our alumni as you Think. Analyse. Solve. Crack the Case!",
    objectives: [
      "Tackle real-world industry problem statements under critical evaluation",
      "Interact with and receive valuable guidance from distinguished alumni mentors",
      "Synthesize innovative team solutions and crack the forensic case"
    ],
    rounds: [
      { name: "Phase 1: Telemetry & Case Isolation", desc: "Deconstruct real-world problem statements and operational anomalies." },
      { name: "Phase 2: Alumni Interaction & Mentorship", desc: "Gain critical industry guidance and refine technical strategy." },
      { name: "Phase 3: The Board Defense", desc: "Pitch the final resolution to the panel of judges and alumni." }
    ]
  },
  {
    id: "better-call-engineer",
    title: "Better Call Engineer",
    encodedTitle: "[Be]tter [C]all Engineer",
    image: betterCallImg,
    // Updated: Be (Beryllium) and C (Carbon) as requested
    elements: [
      { symbol: "Be", number: 4, name: "Beryllium", mass: "9.012" },
      { symbol: "C", number: 6, name: "Carbon", mass: "12.011" }
    ],
    category: "Industrial Plant Visit & Solution Pitch",
    tagline: "Analyse. Optimize. Innovate.",
    badge: "Consultancy",
    themeColor: "from-yellow-400 to-amber-600",
    glowColor: "rgba(250, 204, 21, 0.4)",
    borderColor: "border-yellow-400/40",
    textColor: "text-yellow-300",
    accentBg: "bg-yellow-500/10",
    icon: "Briefcase",
    day: "Day 2 (10th Oct)",
    time: "02:00 PM - 05:00 PM",
    venue: "A-108",
    format: "Offline / Plant Visit",
    teamSize: "3 - 4 Members",
    purityYield: "99.1%",
    registrationLink: "https://forms.gle/Djr6z6fNMcAYbdvg9",
    description: "Step into the role of an industrial engineer and solve real-world plant challenges. Visit an industry, analyze the case, develop your solution, and pitch it to expert judges. Analyse. Optimize. Innovate.",
    objectives: [
      "Visit an operational chemical plant to observe live unit operations and constraints",
      "Analyze the industrial case study, identify bottlenecks, and formulate optimizations",
      "Pitch comprehensive technical solutions directly to expert industry judges"
    ],
    rounds: [
      { name: "Stage 1: Industrial Site Visit", desc: "On-site reconnaissance and briefing on plant-level challenges." },
      { name: "Stage 2: Solution Development Sprint", desc: "Formulate technical optimizations and financial feasibility models." },
      { name: "Stage 3: Executive Pitch", desc: "Defend your engineering solution before the expert jury." }
    ]
  },
  {
    id: "research-blueprint",
    title: "Research Blueprint",
    encodedTitle: "[Re]search [B]lueprint",
    image: researchBlueprintImg,
    // Kept same: Re (Rhenium) and B (Boron)
    elements: [
      { symbol: "Re", number: 75, name: "Rhenium", mass: "186.21" },
      { symbol: "B", number: 5, name: "Boron", mass: "10.81" }
    ],
    category: "Paper & Poster Presentation",
    tagline: "RESEARCH BLUEPRINT — Where Ideas Take Shape. 🔬",
    badge: "Research",
    themeColor: "from-blue-400 to-indigo-600",
    glowColor: "rgba(59, 130, 246, 0.4)",
    borderColor: "border-blue-500/40",
    textColor: "text-blue-300",
    accentBg: "bg-blue-500/10",
    icon: "FileSpreadsheet",
    day: "Day 2 (10th Oct)",
    time: "09:00 AM - 01:00 PM",
    venue: "A-108",
    format: "Offline / Paper & Poster",
    teamSize: "1 - 3 Members",
    purityYield: "98.0%",
    registrationLink: "https://forms.gle/YESYKfctyFJNo2fQ6",
    description: "A platform for curious minds to present, question, and transform ideas into impact. Showcase your research through a compelling paper and poster presentation, engage with emerging perspectives, and connect with ideas shaping the future of chemical engineering and beyond. Bring your research. Defend your ideas. Inspire what comes next.",
    objectives: [
      "Showcase cutting-edge chemical engineering research through paper & poster formats",
      "Engage with emerging perspectives and novel academic methodologies",
      "Defend your scientific discoveries before esteemed faculty mentors and peer scholars"
    ],
    rounds: [
      { name: "Track 1: Paper Presentation", desc: "Oral presentation of rigorous research findings with slide deck." },
      { name: "Track 2: Poster Gallery Exhibition", desc: "Interactive display and walkthrough of visual research blueprints." },
      { name: "Track 3: Peer Defense & Cross-Q&A", desc: "Defense of theoretical methodologies against the research jury." }
    ]
  },
  {
    id: "alchemy-of-imperfection",
    title: "Alchemy of Imperfection",
    encodedTitle: "[Al]chemy of [I]mperfection",
    image: alchemyImg,
    // Kept same: Al (Aluminum) and I (Iodine)
    elements: [
      { symbol: "Al", number: 13, name: "Aluminum", mass: "26.98" },
      { symbol: "I", number: 53, name: "Iodine", mass: "126.90" }
    ],
    category: "Kintsugi Ceramic Art & Chemistry",
    tagline: "Where imperfections become art. Embrace the imperfect. Create the extraordinary. ✨",
    badge: "Creative Lab",
    themeColor: "from-fuchsia-500 to-amber-600",
    glowColor: "rgba(217, 70, 239, 0.4)",
    borderColor: "border-fuchsia-500/40",
    textColor: "text-fuchsia-300",
    accentBg: "bg-fuchsia-500/10",
    icon: "FlaskRound",
    day: "Day 3 (11th Oct)",
    time: "09:00 AM - 01:00 PM",
    venue: "A-108",
    format: "Hands-on Workshop / Artistry",
    teamSize: "Individual / Pair",
    purityYield: "99.1%",
    registrationLink: "https://forms.gle/2WBL5APpyq76SXwK7",
    description: "Discover Kintsugi, the Japanese art of celebrating imperfection through beautiful golden seams. Create your own unique ceramic masterpiece in an experience that blends creativity, craftsmanship, and chemistry. Embrace the imperfect. Create the extraordinary. ✨",
    objectives: [
      "Discover Kintsugi: the timeless Japanese art of mending broken ceramics with gold",
      "Apply resin chemistry, metallic gold powder, and structural binders to create seamless bonds",
      "Take home your very own handcrafted ceramic masterpiece"
    ],
    rounds: [
      { name: "Phase 1: Fracture Philosophy", desc: "Introduction to Kintsugi heritage and resin polymer preparation." },
      { name: "Phase 2: Golden Joinery Assembly", desc: "Precise bonding of ceramic fragments using metallic golden seams." },
      { name: "Phase 3: Curing & Masterpiece Exhibition", desc: "Final polishing and presentation of finished ceramic creations." }
    ]
  },
  {
    id: "flow-cartel",
    title: "Flow Cartel",
    encodedTitle: "[F]low [Ca]rtel",
    image: flowCartelImg,
    // Updated: F (Fluorine) and Ca (Calcium) as requested
    elements: [
      { symbol: "F", number: 9, name: "Fluorine", mass: "18.998" },
      { symbol: "Ca", number: 20, name: "Calcium", mass: "40.08" }
    ],
    category: "Hands-on ANSYS CFD Technical Workshop",
    tagline: "Hands-on Computational Fluid Dynamics (CFD) Workshop with ANSYS.",
    badge: "CFD Workshop",
    themeColor: "from-orange-500 to-rose-700",
    glowColor: "rgba(249, 115, 22, 0.4)",
    borderColor: "border-orange-500/40",
    textColor: "text-orange-400",
    accentBg: "bg-orange-500/10",
    icon: "Gauge",
    day: "Day 1 (9th Oct)",
    time: "04:00 PM - 06:00 PM",
    venue: "A-101",
    format: "Hands-on Workshop",
    teamSize: "Individual / Pair",
    purityYield: "99.0%",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdvFMSlneOy3ezp6wgXh34APDHgJz3_WXizfjiSf3s66FlgrA/viewform",
    description: "This hands-on technical workshop will introduce participants to the fundamentals of Computational Fluid Dynamics (CFD) using ANSYS. Participants will learn geometry creation, meshing, material selection, boundary conditions, simulation setup, and result analysis through practical simulations. The workshop will conclude with an engineering application, providing participants with valuable hands-on experience in CFD modelling and analysis.",
    objectives: [
      "Master CAD geometry creation and advanced grid meshing fundamentals in ANSYS",
      "Configure boundary conditions, material thermophysical properties, and Navier-Stokes solvers",
      "Analyze velocity vectors, pressure contours, and solve a practical engineering application"
    ],
    rounds: [
      { name: "Module 1: Geometry & Meshing Setup", desc: "CAD import, domain discretization, and grid independence fundamentals." },
      { name: "Module 2: Solver Execution & Physics", desc: "Applying turbulence models, viscosity parameters, and boundary conditions." },
      { name: "Module 3: Post-Processing & Engineering Case", desc: "Simulating a real-world chemical engineering fluid transport scenario." }
    ]
  },
  {
    id: "project-heisenberg",
    title: "Project Heisenberg",
    encodedTitle: "[Pr]oject [He]isenberg",
    image: heisenbergImg,
    // Updated: Pr (Praseodymium) and He (Helium) as requested
    elements: [
      { symbol: "Pr", number: 59, name: "Praseod.", mass: "140.91" },
      { symbol: "He", number: 2, name: "Helium", mass: "4.0026" }
    ],
    category: "Flagship Technical Innovation & Working Model",
    tagline: "99.1% pure engineering ingenuity. Present your working process or invention.",
    badge: "Flagship",
    themeColor: "from-cyan-400 to-blue-600",
    glowColor: "rgba(0, 229, 255, 0.45)",
    borderColor: "border-cyan-400/50",
    textColor: "text-cyan-300",
    accentBg: "bg-cyan-500/10",
    icon: "Atom",
    day: "Day 3 (11th Oct)",
    time: "11:00 AM - 03:00 PM",
    venue: "A-101",
    format: "Offline Prototype / Simulation",
    teamSize: "2 - 4 Members",
    purityYield: "99.1%",
    registrationLink: "https://forms.gle/Djr6z6fNMcAYbdvg9",
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
    id: "nation-clash",
    title: "Nation Clash",
    encodedTitle: "[Na]tion [Cl]ash",
    image: nationClashImg,
    // Kept same: Na (Sodium) and Cl (Chlorine)
    elements: [
      { symbol: "Na", number: 11, name: "Sodium", mass: "22.99" },
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
    day: "Day 3 (11th Oct)",
    time: "02:30 PM - 05:30 PM",
    venue: "C-Auditorium",
    format: "Offline",
    teamSize: "1 - 2 Members",
    purityYield: "97.8%",
    registrationLink: "https://forms.gle/wPNotvwKfLB877v19",
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
  }
];

export const SCHEDULE_DAYS = [
  {
    dayNumber: "1",
    date: "9th October 2026 (Friday)",
    themeTitle: "Launch & CFD Protocols",
    events: [
      { time: "11:40 AM - 12:00 PM", title: "Launch and Inauguration Ceremony", venue: "A-Lawn", type: "Ceremony" },
      { time: "04:00 PM - 06:00 PM", title: "Flow Cartel: Hands-on ANSYS CFD Workshop", venue: "A-101", type: "Simulation" }
    ]
  },
  {
    dayNumber: "2",
    date: "10th October 2026 (Saturday)",
    themeTitle: "The Diagnostic Trials — Blueprints, Forensics & Solutions",
    events: [
      { time: "09:00 AM - 01:00 PM", title: "Research Blueprint: Paper & Poster Presentation", venue: "A-108", type: "Academic" },
      { time: "12:00 PM - 03:00 PM", title: "Crack The Case: Real-World Industry Challenge", venue: "A-101", type: "Competition" },
      { time: "02:00 PM - 05:00 PM", title: "Better Call Engineer: Industrial Plant Visit & Solution Pitch", venue: "A-108", type: "Competition" }
    ]
  },
  {
    dayNumber: "3",
    date: "11th October 2026 (Sunday)",
    themeTitle: "The Grand Yield — Alchemy, Prototype Expo & Geopolitical Clash",
    events: [
      { time: "09:00 AM - 01:00 PM", title: "Alchemy of Imperfection: Kintsugi Art & Chemistry Workshop", venue: "A-108", type: "Wet Lab" },
      { time: "11:00 AM - 03:00 PM", title: "Project Heisenberg: Flagship Technical Innovation & Working Model", venue: "A-101", type: "Flagship" },
      { time: "02:30 PM - 05:30 PM", title: "Nation Clash: Geopolitical Energy Debate", venue: "C-Auditorium", type: "Competition" }
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
    q: "How do I register for individual events?",
    a: "Each event has its own official Google Form registration link embedded directly within its event card. Click 'See Event' or 'REGISTER' on any event card to open its respective form."
  },
  {
    q: "What materials will be provided for 'Alchemy of Imperfection' (Kintsugi)?",
    a: "All ceramic ware, gold mica pigments, specialty resin adhesives, safety gloves, and finishing tools will be provided to participants during the workshop."
  },
  {
    q: "Do I need prior experience with ANSYS CFD for Flow Cartel?",
    a: "No prior experience is necessary! The Flow Cartel workshop starts with core fundamentals of geometry, meshing, and boundary conditions before guiding you through a practical chemical simulation."
  }
];
