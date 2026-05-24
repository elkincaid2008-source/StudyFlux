// ─── TYPES ────────────────────────────────────────────────────────────────
export type Unit = {
  num: number;
  title: string;
  topics: string[];
  tag?: string;
};

export type Track = {
  id: string;
  label: string;
  sub: string;
  color: string;
  units: Unit[];
};

export type Subject = {
  id: string;
  label: string;
  emoji: string;
  color: string;
  desc: string;
  units?: Unit[];
  tracks?: Track[];
};

export type PlanFeature = { text: string; included: boolean };
export type Plan = {
  id: string;
  label: string;
  price: string;
  period: string;
  color: string;
  highlight: boolean;
  features: PlanFeature[];
  cta: string;
};

// ─── SUBJECTS ─────────────────────────────────────────────────────────────
export const SUBJECTS: Subject[] = [
  {
    id: "biology", label: "AP Biology", emoji: "🧬", color: "#16a34a",
    desc: "From molecules to ecosystems — the full AP Bio curriculum",
    units: [
      { num: 1, title: "Chemistry of Life", topics: ["Water & pH", "Carbon compounds", "Macromolecules", "Nucleic acids"] },
      { num: 2, title: "Cell Structure & Function", topics: ["Prokaryotic vs eukaryotic", "Membrane structure", "Cell organelles", "Transport"] },
      { num: 3, title: "Cellular Energetics", topics: ["Enzymes", "Cellular respiration", "Photosynthesis", "ATP"] },
      { num: 4, title: "Cell Communication & Cell Cycle", topics: ["Signal transduction", "Cell cycle", "Mitosis", "Apoptosis"] },
      { num: 5, title: "Heredity", topics: ["Meiosis", "Mendelian genetics", "Non-Mendelian genetics", "Chi-square analysis"] },
      { num: 6, title: "Gene Expression & Regulation", topics: ["DNA replication", "Transcription & translation", "Gene regulation", "Mutations"] },
      { num: 7, title: "Natural Selection", topics: ["Hardy-Weinberg", "Types of selection", "Evidence for evolution", "Phylogenetics"] },
      { num: 8, title: "Ecology", topics: ["Population ecology", "Community ecology", "Ecosystem dynamics", "Biodiversity"] },
    ],
  },
  {
    id: "chemistry", label: "AP Chemistry", emoji: "⚗️", color: "#9333ea",
    desc: "Atomic theory through thermodynamics — the full AP Chem curriculum",
    units: [
      { num: 1, title: "Atomic Structure & Properties", topics: ["Moles & mass", "Atomic structure", "Electron configuration", "Periodic trends"] },
      { num: 2, title: "Compound Structure & Properties", topics: ["Ionic & covalent bonding", "VSEPR", "Molecular geometry", "Intermolecular forces"] },
      { num: 3, title: "Properties of Substances & Mixtures", topics: ["Solids & liquids", "Gases", "Solutions", "Spectroscopy"] },
      { num: 4, title: "Chemical Reactions", topics: ["Types of reactions", "Net ionic equations", "Stoichiometry", "Limiting reagents"] },
      { num: 5, title: "Kinetics", topics: ["Reaction rates", "Rate laws", "Reaction mechanisms", "Activation energy"] },
      { num: 6, title: "Thermochemistry", topics: ["Enthalpy", "Calorimetry", "Hess's Law", "Bond enthalpies"] },
      { num: 7, title: "Equilibrium", topics: ["Keq expressions", "Le Chatelier's principle", "Ksp", "Reaction quotient Q"] },
      { num: 8, title: "Acids & Bases", topics: ["pH & pOH", "Buffers", "Titrations", "Ka & Kb"] },
      { num: 9, title: "Thermodynamics & Electrochemistry", topics: ["Entropy & Gibbs free energy", "Electrochemical cells", "Electrolysis", "Nernst equation"] },
    ],
  },
  {
    id: "anatomy", label: "Anatomy & Physiology", emoji: "🫀", color: "#e11d48",
    desc: "College-level A&P — from cell biology foundations to body systems",
    units: [
      { num: 0, title: "Biology Review for A&P", topics: ["Cell structure", "Macromolecules", "DNA & protein synthesis", "Cell division", "Enzyme function"], tag: "Intro" },
      { num: 1, title: "Organization of the Body", topics: ["Anatomical terminology", "Body cavities", "Tissue types", "Homeostasis"] },
      { num: 2, title: "Integumentary System", topics: ["Skin layers", "Hair & nails", "Glands", "Skin disorders"] },
      { num: 3, title: "Skeletal System", topics: ["Bone tissue", "Axial skeleton", "Appendicular skeleton", "Joints"] },
      { num: 4, title: "Muscular System", topics: ["Muscle tissue types", "Sliding filament theory", "Muscle fiber types", "Major muscles"] },
      { num: 5, title: "Nervous System", topics: ["Neuron anatomy", "Action potentials", "CNS & PNS", "Reflexes & senses"] },
      { num: 6, title: "Endocrine System", topics: ["Hormone types", "Major glands", "Feedback loops", "Endocrine disorders"] },
      { num: 7, title: "Cardiovascular System", topics: ["Heart anatomy", "Cardiac cycle", "Blood vessels", "Blood pressure"] },
      { num: 8, title: "Lymphatic & Immune System", topics: ["Lymph nodes", "Innate immunity", "Adaptive immunity", "Antibodies"] },
      { num: 9, title: "Respiratory System", topics: ["Airway anatomy", "Lung mechanics", "Gas exchange", "Respiratory regulation"] },
      { num: 10, title: "Digestive System", topics: ["GI tract", "Accessory organs", "Digestion & absorption", "Nutrient metabolism"] },
      { num: 11, title: "Urinary System", topics: ["Kidney anatomy", "Nephron & filtration", "Urine formation", "Fluid balance"] },
      { num: 12, title: "Reproductive System", topics: ["Male & female anatomy", "Gametogenesis", "Hormonal cycles", "Development"] },
    ],
  },
  {
    id: "calculus", label: "AP Calculus", emoji: "∫", color: "#0284c7",
    desc: "Limits to series — covers both AP Calc AB and BC",
    units: [
      { num: 1, title: "Limits & Continuity", topics: ["Limit definition", "Limit laws", "Continuity", "Squeeze theorem"] },
      { num: 2, title: "Differentiation: Definition & Basic Rules", topics: ["Derivative definition", "Power rule", "Product & quotient rules", "Trig derivatives"] },
      { num: 3, title: "Differentiation: Composite, Implicit & Inverse", topics: ["Chain rule", "Implicit differentiation", "Inverse trig derivatives", "Higher-order derivatives"] },
      { num: 4, title: "Contextual Applications of Differentiation", topics: ["Related rates", "Linear approximation", "L'Hôpital's rule", "Motion problems"] },
      { num: 5, title: "Applying Derivatives to Analyze Functions", topics: ["Mean value theorem", "Increasing & decreasing", "Concavity & inflection", "Optimization"] },
      { num: 6, title: "Integration & Accumulation of Change", topics: ["Riemann sums", "Definite integrals", "Fundamental theorem", "U-substitution"] },
      { num: 7, title: "Differential Equations", topics: ["Slope fields", "Euler's method", "Separable equations", "Exponential models"] },
      { num: 8, title: "Applications of Integration", topics: ["Area between curves", "Volume of solids", "Arc length", "Accumulation functions"] },
      { num: 9, title: "Parametric, Polar & Vector Functions", topics: ["Parametric derivatives", "Polar area", "Vector-valued functions", "Motion in a plane"], tag: "BC Only" },
      { num: 10, title: "Infinite Sequences & Series", topics: ["Convergence tests", "Taylor series", "Maclaurin series", "Error bounds"], tag: "BC Only" },
    ],
  },
  {
    id: "physics", label: "AP Physics", emoji: "⚡", color: "#d97706",
    desc: "Physics 1 & 2 (algebra-based) or Physics C (calculus-based)",
    tracks: [
      {
        id: "p1", label: "Physics 1", sub: "Algebra-based", color: "#d97706",
        units: [
          { num: 1, title: "Kinematics", topics: ["Displacement & velocity", "Acceleration", "Projectile motion", "Reference frames"] },
          { num: 2, title: "Forces & Newton's Laws", topics: ["Newton's 3 laws", "Free body diagrams", "Friction", "Tension & normal force"] },
          { num: 3, title: "Circular Motion & Gravitation", topics: ["Centripetal acceleration", "Universal gravitation", "Orbits", "Kepler's laws"] },
          { num: 4, title: "Energy", topics: ["Work", "Kinetic & potential energy", "Conservation of energy", "Power"] },
          { num: 5, title: "Momentum", topics: ["Impulse", "Conservation of momentum", "Collisions", "Center of mass"] },
          { num: 6, title: "Simple Harmonic Motion", topics: ["Springs & Hooke's Law", "Pendulums", "Period & frequency", "Energy in SHM"] },
          { num: 7, title: "Torque & Rotational Motion", topics: ["Torque", "Rotational kinematics", "Moment of inertia", "Angular momentum"] },
          { num: 8, title: "Electric Charge & Force", topics: ["Coulomb's Law", "Electric field", "Charge distribution", "Conductors"] },
          { num: 9, title: "DC Circuits", topics: ["Ohm's Law", "Series & parallel", "Kirchhoff's rules", "Power in circuits"] },
          { num: 10, title: "Mechanical Waves & Sound", topics: ["Wave properties", "Superposition", "Standing waves", "Doppler effect"] },
        ],
      },
      {
        id: "p2", label: "Physics 2", sub: "Algebra-based", color: "#ea580c",
        units: [
          { num: 1, title: "Fluids", topics: ["Pressure", "Buoyancy", "Continuity equation", "Bernoulli's principle"] },
          { num: 2, title: "Thermodynamics", topics: ["Temperature & heat", "Ideal gas law", "Laws of thermodynamics", "Heat engines"] },
          { num: 3, title: "Electric Force, Field & Potential", topics: ["Electric potential", "Capacitance", "Energy storage", "Dielectrics"] },
          { num: 4, title: "Electric Circuits", topics: ["RC circuits", "Capacitors in circuits", "Power dissipation", "Real batteries"] },
          { num: 5, title: "Magnetism & EM Induction", topics: ["Magnetic force", "Magnetic flux", "Faraday's law", "Lenz's law"] },
          { num: 6, title: "Geometric & Physical Optics", topics: ["Reflection & refraction", "Lenses & mirrors", "Diffraction", "Interference"] },
          { num: 7, title: "Quantum, Atomic & Nuclear Physics", topics: ["Photoelectric effect", "Wave-particle duality", "Atomic models", "Radioactive decay"] },
        ],
      },
      {
        id: "pc", label: "Physics C", sub: "Calculus-based", color: "#7c3aed",
        units: [
          { num: 1, title: "Kinematics (Mech)", topics: ["Calculus-based motion", "Velocity & position functions", "2D motion", "Relative motion"] },
          { num: 2, title: "Newton's Laws (Mech)", topics: ["Variable forces", "Friction models", "Drag forces", "Systems of particles"] },
          { num: 3, title: "Work, Energy & Power (Mech)", topics: ["Work by variable force", "Conservative forces", "Potential energy functions", "Energy conservation"] },
          { num: 4, title: "Systems & Linear Momentum (Mech)", topics: ["Center of mass", "Momentum with calculus", "Collisions", "Rocket propulsion"] },
          { num: 5, title: "Rotation (Mech)", topics: ["Rotational kinematics", "Torque & angular momentum", "Moment of inertia integrals", "Rolling motion"] },
          { num: 6, title: "Oscillations & Gravitation (Mech)", topics: ["SHM with calculus", "Gravitational potential", "Orbits", "Escape velocity"] },
          { num: 7, title: "Electrostatics (E&M)", topics: ["Coulomb's law", "Gauss's Law", "Electric potential", "Capacitance"] },
          { num: 8, title: "Conductors, Capacitors & Dielectrics (E&M)", topics: ["Conductors in equilibrium", "Capacitor networks", "Energy in electric field", "Dielectrics"] },
          { num: 9, title: "Electric Circuits (E&M)", topics: ["Current & resistance", "Kirchhoff's laws", "RC circuits", "Power"] },
          { num: 10, title: "Magnetic Fields (E&M)", topics: ["Biot-Savart law", "Ampere's law", "Magnetic flux", "Force on conductors"] },
          { num: 11, title: "Electromagnetic Induction (E&M)", topics: ["Faraday's law", "Inductance", "RL circuits", "Maxwell's equations intro"] },
        ],
      },
    ],
  },
];

// ─── PRICING ──────────────────────────────────────────────────────────────
export const PLANS: Plan[] = [
  {
    id: "free", label: "Free", price: "$0", period: "forever",
    color: "#555", highlight: false,
    features: [
      { text: "Browse all subjects & units", included: true },
      { text: "View all topic lists", included: true },
      { text: "Read notes for every topic", included: true },
      { text: "Flashcards (per unit)", included: false },
      { text: "Quizzes (per unit)", included: false },
      { text: "Progress tracking", included: false },
      { text: "AI explanations", included: false },
    ],
    cta: "Start for free",
  },
  {
    id: "pro", label: "Pro", price: "$9", period: "per month",
    color: "#6366f1", highlight: true,
    features: [
      { text: "Browse all subjects & units", included: true },
      { text: "View all topic lists", included: true },
      { text: "Read notes for every topic", included: true },
      { text: "Flashcards (per unit)", included: true },
      { text: "Quizzes (per unit)", included: true },
      { text: "Progress tracking", included: true },
      { text: "AI explanations", included: false },
    ],
    cta: "Start Pro",
  },
  {
    id: "elite", label: "Elite", price: "$15", period: "per month",
    color: "#a855f7", highlight: false,
    features: [
      { text: "Browse all subjects & units", included: true },
      { text: "View all topic lists", included: true },
      { text: "Read notes for every topic", included: true },
      { text: "Flashcards (per unit)", included: true },
      { text: "Quizzes (per unit)", included: true },
      { text: "Progress tracking", included: true },
      { text: "AI explanations", included: true },
    ],
    cta: "Start Elite",
  },
];

// ─── THEME ────────────────────────────────────────────────────────────────
export const C = {
  bg: "#0a0a0f",
  card: "#111118",
  border: "#1e1e2e",
  text: "#f1f0ed",
  muted: "#666",
  accent: "#6366f1",
  accent2: "#a855f7",
};