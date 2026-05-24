import { useState } from "react";

// ─── COLOR + SITE CONFIG ───────────────────────────────────────────────────
const C = {
  bg: "#0a0a0f", card: "#111118", border: "#1e1e2e",
  text: "#f1f0ed", muted: "#666", accent: "#6366f1", accent2: "#a855f7",
};

// ─── SUBJECTS + UNITS + TOPICS ────────────────────────────────────────────
const SUBJECTS = [
  {
    id: "biology", label: "AP Biology", emoji: "🧬", color: "#16a34a",
    desc: "From molecules to ecosystems",
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
    desc: "Atomic theory through thermodynamics",
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
    desc: "College-level A&P — body systems",
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
    desc: "Limits to series — AB and BC",
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
    desc: "Physics 1, 2 (algebra) or C (calculus)",
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

// ─── PRICING PLANS ────────────────────────────────────────────────────────
const PLANS = [
  {
    id: "free", label: "Free", price: "$0", period: "forever",
    color: "#444", highlight: false,
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

// ─── VIEWS: home | subject | pricing ──────────────────────────────────────
export default function App() {
  const [view, setView] = useState("home");           // "home" | "subject" | "pricing"
  const [activeSubjectId, setActiveSubjectId] = useState(null);
  const [activeTrack, setActiveTrack] = useState("p1");
  const [expandedUnit, setExpandedUnit] = useState(null);
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [isPro] = useState(false); // toggle to true to simulate logged-in paid user

  const subject = SUBJECTS.find(s => s.id === activeSubjectId);

  const getUnits = () => {
    if (!subject) return [];
    if (subject.id === "physics") return subject.tracks.find(t => t.id === activeTrack)?.units ?? [];
    return subject.units ?? [];
  };

  const getColor = () => {
    if (subject?.id === "physics") return subject.tracks.find(t => t.id === activeTrack)?.color ?? subject.color;
    return subject?.color ?? C.accent;
  };

  const openSubject = (id) => {
    setActiveSubjectId(id);
    setExpandedUnit(null);
    setExpandedTopic(null);
    setView("subject");
  };

  const goHome = () => { setView("home"); setActiveSubjectId(null); };

  // ── NAV ──────────────────────────────────────────────────────────────────
  const Nav = () => (
    <nav style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"1rem 2rem", borderBottom:`1px solid ${C.border}`, background: C.bg+"ee", backdropFilter:"blur(12px)", position:"sticky", top:0, zIndex:100 }}>
      <button onClick={goHome} style={{ background:"none", border:"none", cursor:"pointer", fontFamily:"monospace", fontWeight:700, fontSize:"18px", color:C.text, letterSpacing:"-0.5px" }}>
        Study<span style={{ color:C.accent }}>Flux</span>
      </button>
      <div style={{ display:"flex", gap:"1.5rem", alignItems:"center" }}>
        <button onClick={goHome} style={navBtn}>Subjects</button>
        <button onClick={() => setView("pricing")} style={navBtn}>Pricing</button>
        <button style={{ ...navBtn, background: C.accent+"22", color:C.accent, border:`1px solid ${C.accent}44`, borderRadius:"100px", padding:"7px 16px" }}>
          Sign in
        </button>
        <button onClick={() => setView("pricing")} style={{ background:C.text, color:C.bg, border:"none", borderRadius:"100px", padding:"7px 16px", fontSize:"13px", fontWeight:700, cursor:"pointer" }}>
          Get Pro →
        </button>
      </div>
    </nav>
  );

  const navBtn = { background:"none", border:"none", cursor:"pointer", color:C.muted, fontSize:"14px", fontFamily:"inherit" };

  // ── HOME VIEW ─────────────────────────────────────────────────────────────
  if (view === "home") return (
    <div style={{ minHeight:"100vh", background:C.bg, color:C.text, fontFamily:"'DM Sans','Helvetica Neue',sans-serif" }}>
      <Nav />

      {/* Hero */}
      <section style={{ textAlign:"center", padding:"5rem 2rem 3rem", maxWidth:"720px", margin:"0 auto" }}>
        <div style={{ display:"inline-flex", alignItems:"center", gap:"6px", background:C.card, border:`1px solid ${C.border}`, borderRadius:"100px", padding:"5px 14px", fontSize:"12px", color:C.muted, marginBottom:"1.5rem" }}>
          <span style={{ width:6, height:6, borderRadius:"50%", background:"#22c55e", display:"inline-block" }} />
          Free for AP & college students
        </div>
        <h1 style={{ fontSize:"clamp(2.2rem,6vw,4rem)", fontWeight:700, lineHeight:1.1, letterSpacing:"-2px", marginBottom:"1.25rem" }}>
          Master STEM.<br />
          <span style={{ background:`linear-gradient(135deg,${C.accent},${C.accent2})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
            One unit at a time.
          </span>
        </h1>
        <p style={{ fontSize:"16px", color:C.muted, lineHeight:1.7, maxWidth:"500px", margin:"0 auto 2rem" }}>
          Notes, flashcards & quizzes — structured by AP and college curriculum. Free to browse, Pro to master.
        </p>
        <div style={{ display:"flex", gap:"10px", justifyContent:"center", flexWrap:"wrap" }}>
          <button style={{ background:C.text, color:C.bg, border:"none", borderRadius:"100px", padding:"11px 26px", fontSize:"14px", fontWeight:700, cursor:"pointer" }}>
            Start studying free →
          </button>
          <button onClick={() => setView("pricing")} style={{ background:"transparent", color:C.muted, border:`1px solid #2a2a3e`, borderRadius:"100px", padding:"11px 26px", fontSize:"14px", fontWeight:600, cursor:"pointer" }}>
            See pricing
          </button>
        </div>
      </section>

      {/* Stats */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"10px", maxWidth:"820px", margin:"0 auto 3rem", padding:"0 2rem" }}>
        {[["5","Subjects"],["40+","Units"],["Free","Notes"],["Pro","Flashcards & quizzes"]].map(([n,l]) => (
          <div key={l} style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:"12px", padding:"1rem", textAlign:"center" }}>
            <div style={{ fontSize:"18px", fontWeight:700 }}>{n}</div>
            <div style={{ fontSize:"12px", color:C.muted, marginTop:"3px" }}>{l}</div>
          </div>
        ))}
      </div>

      {/* Subject cards */}
      <section style={{ maxWidth:"820px", margin:"0 auto 5rem", padding:"0 2rem" }}>
        <div style={{ fontSize:"11px", fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:"#444", marginBottom:"1rem" }}>Choose a subject</div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))", gap:"12px" }}>
          {SUBJECTS.map(s => (
            <div key={s.id} onClick={() => openSubject(s.id)}
              style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:"16px", padding:"1.25rem", cursor:"pointer", transition:"all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor="#333"; e.currentTarget.style.transform="translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor=C.border; e.currentTarget.style.transform="translateY(0)"; }}
            >
              <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"10px" }}>
                <div style={{ width:38, height:38, borderRadius:"10px", background:s.color+"18", border:`1px solid ${s.color}33`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"18px" }}>
                  {s.emoji}
                </div>
                <div>
                  <div style={{ fontWeight:700, fontSize:"14px" }}>{s.label}</div>
                  <div style={{ fontSize:"11px", color:C.muted }}>{s.tracks ? "3 tracks" : s.units.length+" units"}</div>
                </div>
              </div>
              <p style={{ fontSize:"12px", color:"#555", lineHeight:1.5, marginBottom:"12px" }}>{s.desc}</p>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <span style={{ fontSize:"11px", color:"#22c55e" }}>✓ Free notes</span>
                <span style={{ fontSize:"11px", color:C.accent }}>⚡ Pro: quizzes</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mini pricing teaser */}
      <section style={{ maxWidth:"820px", margin:"0 auto 5rem", padding:"0 2rem", textAlign:"center" }}>
        <div style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:"20px", padding:"3rem 2rem" }}>
          <div style={{ fontSize:"11px", fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:C.accent, marginBottom:"1rem" }}>StudyFlux Pro</div>
          <h2 style={{ fontSize:"1.8rem", fontWeight:700, letterSpacing:"-1px", marginBottom:"1rem" }}>Everything you need to ace the exam.</h2>
          <p style={{ color:C.muted, fontSize:"15px", marginBottom:"2rem" }}>Unlock flashcards, quizzes & progress tracking for every unit.</p>
          <div style={{ display:"flex", gap:"8px", justifyContent:"center", flexWrap:"wrap", marginBottom:"1.5rem" }}>
            {["Flashcards","Quizzes","Progress tracking","AI explanations (Elite)"].map(f => (
              <span key={f} style={{ background:C.accent+"18", color:C.accent, border:`1px solid ${C.accent}33`, borderRadius:"100px", padding:"5px 14px", fontSize:"12px", fontWeight:600 }}>{f}</span>
            ))}
          </div>
          <button onClick={() => setView("pricing")} style={{ background:C.accent, color:"#fff", border:"none", borderRadius:"100px", padding:"12px 32px", fontSize:"14px", fontWeight:700, cursor:"pointer" }}>
            See plans →
          </button>
        </div>
      </section>

      <footer style={{ borderTop:`1px solid ${C.border}`, padding:"2rem", textAlign:"center", color:"#333", fontSize:"13px" }}>
        StudyFlux — built for students who want to actually understand, not just memorize.
      </footer>
    </div>
  );

  // ── PRICING VIEW ──────────────────────────────────────────────────────────
  if (view === "pricing") return (
    <div style={{ minHeight:"100vh", background:C.bg, color:C.text, fontFamily:"'DM Sans','Helvetica Neue',sans-serif" }}>
      <Nav />
      <section style={{ maxWidth:"900px", margin:"0 auto", padding:"4rem 2rem 6rem" }}>
        <div style={{ textAlign:"center", marginBottom:"3rem" }}>
          <h1 style={{ fontSize:"2.5rem", fontWeight:700, letterSpacing:"-1.5px", marginBottom:"1rem" }}>Simple pricing.</h1>
          <p style={{ color:C.muted, fontSize:"16px" }}>Free to browse. Pro to master. Cancel anytime.</p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"16px" }}>
          {PLANS.map(plan => (
            <div key={plan.id} style={{ background:C.card, border:`${plan.highlight ? "2px" : "1px"} solid ${plan.highlight ? plan.color : C.border}`, borderRadius:"20px", padding:"2rem", position:"relative", display:"flex", flexDirection:"column" }}>
              {plan.highlight && (
                <div style={{ position:"absolute", top:"-13px", left:"50%", transform:"translateX(-50%)", background:plan.color, color:"#fff", fontSize:"11px", fontWeight:700, padding:"4px 14px", borderRadius:"100px", whiteSpace:"nowrap" }}>
                  Most popular
                </div>
              )}
              <div style={{ fontSize:"13px", fontWeight:700, color:plan.color, marginBottom:"0.5rem", textTransform:"uppercase", letterSpacing:"1px" }}>{plan.label}</div>
              <div style={{ marginBottom:"1.5rem" }}>
                <span style={{ fontSize:"2.5rem", fontWeight:700, letterSpacing:"-1px" }}>{plan.price}</span>
                <span style={{ color:C.muted, fontSize:"13px", marginLeft:"4px" }}>/{plan.period}</span>
              </div>
              <div style={{ flex:1, marginBottom:"1.5rem" }}>
                {plan.features.map(f => (
                  <div key={f.text} style={{ display:"flex", alignItems:"center", gap:"10px", padding:"6px 0", borderBottom:`1px solid ${C.border}`, fontSize:"13px", color: f.included ? C.text : "#444" }}>
                    <span style={{ color: f.included ? "#22c55e" : "#333", fontSize:"14px" }}>{f.included ? "✓" : "✕"}</span>
                    {f.text}
                  </div>
                ))}
              </div>
              <button style={{ background: plan.highlight ? plan.color : "transparent", color: plan.highlight ? "#fff" : plan.color, border:`1px solid ${plan.color}`, borderRadius:"100px", padding:"11px", fontSize:"14px", fontWeight:700, cursor:"pointer", width:"100%" }}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  // ── SUBJECT VIEW ──────────────────────────────────────────────────────────
  const color = getColor();
  const units = getUnits();
  if (!subject) return null;

  return (
    <div style={{ minHeight:"100vh", background:C.bg, color:C.text, fontFamily:"'DM Sans','Helvetica Neue',sans-serif" }}>
      <Nav />
      <div style={{ maxWidth:"800px", margin:"0 auto", padding:"2rem 2rem 6rem" }}>

        {/* Back */}
        <button onClick={goHome} style={{ background:"transparent", border:`1px solid ${C.border}`, color:C.muted, borderRadius:"100px", padding:"7px 16px", fontSize:"13px", cursor:"pointer", marginBottom:"1.5rem", fontFamily:"inherit" }}>
          ← All subjects
        </button>

        {/* Header */}
        <div style={{ display:"flex", alignItems:"center", gap:"14px", marginBottom:"1.5rem" }}>
          <div style={{ width:52, height:52, borderRadius:"14px", background:color+"18", border:`1px solid ${color}33`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"26px" }}>
            {subject.emoji}
          </div>
          <div>
            <h1 style={{ fontSize:"26px", fontWeight:700, letterSpacing:"-0.5px" }}>{subject.label}</h1>
            <p style={{ color:C.muted, fontSize:"13px" }}>{subject.desc}</p>
          </div>
        </div>

        {/* Physics track selector */}
        {subject.id === "physics" && (
          <div style={{ display:"flex", gap:"8px", marginBottom:"1.5rem", flexWrap:"wrap" }}>
            {subject.tracks?.map(t => (
              <button key={t.id} onClick={() => { setActiveTrack(t.id); setExpandedUnit(null); setExpandedTopic(null); }}
                style={{ padding:"7px 16px", borderRadius:"100px", fontSize:"13px", fontWeight:600, cursor:"pointer", border:`1px solid ${activeTrack===t.id ? t.color+"66" : C.border}`, background: activeTrack===t.id ? t.color+"22" : "transparent", color: activeTrack===t.id ? t.color : C.muted, fontFamily:"inherit" }}>
                {t.label} <span style={{ opacity:0.6, fontWeight:400, fontSize:"11px" }}>({t.sub})</span>
              </button>
            ))}
          </div>
        )}

        <div style={{ height:1, background:C.border, marginBottom:"1.5rem" }} />

        {/* Free/Pro legend */}
        <div style={{ display:"flex", gap:"16px", marginBottom:"1.25rem", fontSize:"12px" }}>
          <span style={{ color:"#22c55e" }}>✓ Free — Notes</span>
          <span style={{ color:C.accent }}>⚡ Pro — Flashcards & Quizzes</span>
        </div>

        {/* Units */}
        {units.map(unit => {
          const uk = `${subject.id}-${activeTrack}-${unit.num}`;
          const unitOpen = expandedUnit === uk;

          return (
            <div key={uk} style={{ border:`1px solid ${unitOpen ? color+"55" : C.border}`, borderRadius:"12px", marginBottom:"8px", overflow:"hidden", transition:"border-color 0.2s" }}>

              {/* Unit header — clicking expands topics */}
              <div onClick={() => { setExpandedUnit(unitOpen ? null : uk); setExpandedTopic(null); }}
                style={{ display:"flex", alignItems:"center", gap:"12px", padding:"14px 16px", cursor:"pointer", background: unitOpen ? "#16161f" : C.card }}>
                <div style={{ width:32, height:32, borderRadius:"8px", background: unitOpen ? color+"22" : "#1e1e2e", border:`1px solid ${unitOpen ? color+"55" : "#2a2a3e"}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"12px", fontWeight:700, color: unitOpen ? color : "#555", flexShrink:0, fontFamily:"monospace" }}>
                  {unit.tag === "Intro" ? "★" : unit.num}
                </div>
                <div style={{ flex:1 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
                    <span style={{ fontSize:"15px", fontWeight:600 }}>{unit.title}</span>
                    {unit.tag && (
                      <span style={{ fontSize:"10px", fontWeight:700, padding:"2px 8px", borderRadius:"100px", background:color+"22", color, border:`1px solid ${color}44` }}>{unit.tag}</span>
                    )}
                  </div>
                  <div style={{ fontSize:"12px", color:"#555", marginTop:"2px" }}>{unit.topics.length} topics</div>
                </div>
                {/* Pro tools shown on unit header */}
                <div style={{ display:"flex", gap:"6px" }}>
                  <button onClick={e => { e.stopPropagation(); !isPro && setView("pricing"); }}
                    style={{ fontSize:"11px", fontWeight:700, padding:"4px 10px", borderRadius:"100px", background: isPro ? C.accent+"22" : "#1e1e2e", color: isPro ? C.accent : "#555", border:`1px solid ${isPro ? C.accent+"44" : "#2a2a3e"}`, cursor:"pointer" }}>
                    {isPro ? "Flashcards" : "🔒 Flashcards"}
                  </button>
                  <button onClick={e => { e.stopPropagation(); !isPro && setView("pricing"); }}
                    style={{ fontSize:"11px", fontWeight:700, padding:"4px 10px", borderRadius:"100px", background: isPro ? "#a855f722" : "#1e1e2e", color: isPro ? "#a855f7" : "#555", border:`1px solid ${isPro ? "#a855f744" : "#2a2a3e"}`, cursor:"pointer" }}>
                    {isPro ? "Quiz" : "🔒 Quiz"}
                  </button>
                </div>
                <span style={{ color: unitOpen ? color : "#444", fontSize:"14px", transition:"transform 0.2s", display:"inline-block", transform: unitOpen ? "rotate(180deg)" : "rotate(0)" }}>▾</span>
              </div>

              {/* Expanded: topics list */}
              {unitOpen && (
                <div style={{ background:C.card, borderTop:`1px solid ${C.border}`, padding:"8px 16px 12px" }}>
                  {unit.topics.map((topic, i) => {
                    const tk = `${uk}-${i}`;
                    const topicOpen = expandedTopic === tk;
                    return (
                      <div key={tk} style={{ borderRadius:"8px", marginBottom:"4px", border:`1px solid ${topicOpen ? color+"44" : "transparent"}`, overflow:"hidden" }}>
                        {/* Topic row — free to click */}
                        <div onClick={() => setExpandedTopic(topicOpen ? null : tk)}
                          style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"9px 12px", cursor:"pointer", background: topicOpen ? color+"10" : "transparent", borderRadius: topicOpen ? "0" : "8px" }}>
                          <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
                            <span style={{ width:6, height:6, borderRadius:"50%", background: topicOpen ? color : "#333", display:"inline-block", flexShrink:0 }} />
                            <span style={{ fontSize:"13px", color: topicOpen ? C.text : "#aaa" }}>{topic}</span>
                          </div>
                          <div style={{ display:"flex", alignItems:"center", gap:"6px" }}>
                            <span style={{ fontSize:"10px", color:"#22c55e" }}>✓ Free</span>
                            <span style={{ fontSize:"12px", color: topicOpen ? color : "#444" }}>▾</span>
                          </div>
                        </div>

                        {/* Topic expanded: Notes (free) + locked tools */}
                        {topicOpen && (
                          <div style={{ padding:"0 12px 12px", background:color+"08" }}>
                            {/* Notes section — FREE */}
                            <div style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:"8px", padding:"12px", marginBottom:"10px" }}>
                              <div style={{ fontSize:"11px", fontWeight:700, color:"#22c55e", marginBottom:"8px", letterSpacing:"1px", textTransform:"uppercase" }}>📄 Notes — Free</div>
                              <p style={{ fontSize:"13px", color:"#aaa", lineHeight:1.7 }}>
                                Notes for <strong style={{ color:C.text }}>{topic}</strong> will appear here. You'll build this content out in your CMS or markdown files — one page per topic.
                              </p>
                            </div>

                            {/* Locked tools — Pro */}
                            <div style={{ display:"flex", gap:"8px" }}>
                              <div onClick={() => setView("pricing")} style={{ flex:1, background:"#1e1e2e", border:`1px solid #2a2a3e`, borderRadius:"8px", padding:"10px", textAlign:"center", cursor:"pointer", opacity:0.7 }}>
                                <div style={{ fontSize:"16px", marginBottom:"4px" }}>🔒</div>
                                <div style={{ fontSize:"11px", fontWeight:700, color:"#555" }}>Flashcards</div>
                                <div style={{ fontSize:"10px", color:"#444", marginTop:"2px" }}>Pro only</div>
                              </div>
                              <div onClick={() => setView("pricing")} style={{ flex:1, background:"#1e1e2e", border:`1px solid #2a2a3e`, borderRadius:"8px", padding:"10px", textAlign:"center", cursor:"pointer", opacity:0.7 }}>
                                <div style={{ fontSize:"16px", marginBottom:"4px" }}>🔒</div>
                                <div style={{ fontSize:"11px", fontWeight:700, color:"#555" }}>Quiz</div>
                                <div style={{ fontSize:"10px", color:"#444", marginTop:"2px" }}>Pro only</div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}