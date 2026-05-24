"use client";
import { useState } from "react";

const subjects = [
  {
    id: "biology",
    label: "AP Biology",
    emoji: "🧬",
    color: "#16a34a",
    bg: "#f0fdf4",
    border: "#bbf7d0",
    desc: "From molecules to ecosystems — the full AP Bio curriculum",
    units: [
      { num: 1, title: "Chemistry of Life", topics: ["Water & pH", "Carbon compounds", "Macromolecules", "Nucleic acids"] },
      { num: 2, title: "Cell Structure & Function", topics: ["Prokaryotic vs eukaryotic", "Membrane structure", "Cell organelles", "Transport"] },
      { num: 3, title: "Cellular Energetics", topics: ["Enzymes", "Cellular respiration", "Photosynthesis", "ATP"] },
      { num: 4, title: "Cell Communication & Cell Cycle", topics: ["Signal transduction", "Cell cycle", "Mitosis", "Apoptosis"] },
      { num: 5, title: "Heredity", topics: ["Meiosis", "Mendelian genetics", "Non-Mendelian genetics", "Chi-square analysis"] },
      { num: 6, title: "Gene Expression & Regulation", topics: ["DNA replication", "Transcription & translation", "Gene regulation", "Mutations & biotechnology"] },
      { num: 7, title: "Natural Selection", topics: ["Hardy-Weinberg", "Types of selection", "Evidence for evolution", "Phylogenetics"] },
      { num: 8, title: "Ecology", topics: ["Population ecology", "Community ecology", "Ecosystem dynamics", "Biodiversity"] },
    ],
  },
  {
    id: "chemistry",
    label: "AP Chemistry",
    emoji: "⚗️",
    color: "#9333ea",
    bg: "#faf5ff",
    border: "#e9d5ff",
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
    id: "anatomy",
    label: "Anatomy & Physiology",
    emoji: "🫀",
    color: "#e11d48",
    bg: "#fff1f2",
    border: "#fecdd3",
    desc: "College-level A&P — from cell biology foundations to body systems",
    units: [
      { num: 0, title: "Biology Review for A&P", topics: ["Cell structure", "Macromolecules", "DNA & protein synthesis", "Cell division", "Enzyme function"], tag: "Intro" },
      { num: 1, title: "Organization of the Body", topics: ["Anatomical terminology", "Body cavities", "Tissue types", "Homeostasis"] },
      { num: 2, title: "Integumentary System", topics: ["Skin layers", "Hair & nails", "Glands", "Skin functions & disorders"] },
      { num: 3, title: "Skeletal System", topics: ["Bone tissue", "Axial skeleton", "Appendicular skeleton", "Joints & articulations"] },
      { num: 4, title: "Muscular System", topics: ["Muscle tissue types", "Sliding filament theory", "Muscle fiber types", "Major muscles"] },
      { num: 5, title: "Nervous System", topics: ["Neuron anatomy", "Action potentials", "CNS & PNS", "Reflexes & senses"] },
      { num: 6, title: "Endocrine System", topics: ["Hormone types", "Major glands", "Feedback loops", "Endocrine disorders"] },
      { num: 7, title: "Cardiovascular System", topics: ["Heart anatomy", "Cardiac cycle", "Blood vessels", "Blood pressure regulation"] },
      { num: 8, title: "Lymphatic & Immune System", topics: ["Lymph nodes & vessels", "Innate immunity", "Adaptive immunity", "Antibodies"] },
      { num: 9, title: "Respiratory System", topics: ["Airway anatomy", "Lung mechanics", "Gas exchange", "Respiratory regulation"] },
      { num: 10, title: "Digestive System", topics: ["GI tract", "Accessory organs", "Digestion & absorption", "Nutrient metabolism"] },
      { num: 11, title: "Urinary System", topics: ["Kidney anatomy", "Nephron & filtration", "Urine formation", "Fluid & electrolyte balance"] },
      { num: 12, title: "Reproductive System", topics: ["Male & female anatomy", "Gametogenesis", "Hormonal cycles", "Fertilization & development"] },
    ],
  },
  {
    id: "calculus",
    label: "AP Calculus",
    emoji: "∫",
    color: "#0284c7",
    bg: "#f0f9ff",
    border: "#bae6fd",
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
    id: "physics",
    label: "AP Physics",
    emoji: "⚡",
    color: "#d97706",
    bg: "#fffbeb",
    border: "#fde68a",
    desc: "Choose your track: Physics 1 & 2 (algebra-based) or Physics C (calculus-based)",
    tracks: [
      {
        id: "p1",
        label: "Physics 1",
        sub: "Algebra-based",
        color: "#d97706",
        units: [
          { num: 1, title: "Kinematics", topics: ["Displacement & velocity", "Acceleration", "Projectile motion", "Reference frames"] },
          { num: 2, title: "Forces & Newton's Laws", topics: ["Newton's 3 laws", "Free body diagrams", "Friction", "Tension & normal force"] },
          { num: 3, title: "Circular Motion & Gravitation", topics: ["Centripetal acceleration", "Universal gravitation", "Orbits", "Kepler's laws"] },
          { num: 4, title: "Energy", topics: ["Work", "Kinetic & potential energy", "Conservation of energy", "Power"] },
          { num: 5, title: "Momentum", topics: ["Impulse", "Conservation of momentum", "Collisions", "Center of mass"] },
          { num: 6, title: "Simple Harmonic Motion", topics: ["Springs & Hooke's Law", "Pendulums", "Period & frequency", "Energy in SHM"] },
          { num: 7, title: "Torque & Rotational Motion", topics: ["Torque", "Rotational kinematics", "Moment of inertia", "Angular momentum"] },
          { num: 8, title: "Electric Charge & Force", topics: ["Coulomb's Law", "Electric field", "Charge distribution", "Conductors & insulators"] },
          { num: 9, title: "DC Circuits", topics: ["Ohm's Law", "Series & parallel", "Kirchhoff's rules", "Power in circuits"] },
          { num: 10, title: "Mechanical Waves & Sound", topics: ["Wave properties", "Superposition", "Standing waves", "Doppler effect"] },
        ],
      },
      {
        id: "p2",
        label: "Physics 2",
        sub: "Algebra-based",
        color: "#ea580c",
        units: [
          { num: 1, title: "Fluids", topics: ["Pressure", "Buoyancy", "Continuity equation", "Bernoulli's principle"] },
          { num: 2, title: "Thermodynamics", topics: ["Temperature & heat", "Ideal gas law", "Laws of thermodynamics", "Heat engines"] },
          { num: 3, title: "Electric Force, Field & Potential", topics: ["Electric potential", "Capacitance", "Energy storage", "Dielectrics"] },
          { num: 4, title: "Electric Circuits", topics: ["RC circuits", "Capacitors in circuits", "Power dissipation", "Real batteries"] },
          { num: 5, title: "Magnetism & Electromagnetic Induction", topics: ["Magnetic force", "Magnetic flux", "Faraday's law", "Lenz's law"] },
          { num: 6, title: "Geometric & Physical Optics", topics: ["Reflection & refraction", "Lenses & mirrors", "Diffraction", "Interference"] },
          { num: 7, title: "Quantum, Atomic & Nuclear Physics", topics: ["Photoelectric effect", "Wave-particle duality", "Atomic models", "Radioactive decay"] },
        ],
      },
      {
        id: "pc",
        label: "Physics C",
        sub: "Calculus-based",
        color: "#7c3aed",
        units: [
          { num: 1, title: "Kinematics (C: Mech)", topics: ["Calculus-based motion", "Velocity & position functions", "2D motion", "Relative motion"] },
          { num: 2, title: "Newton's Laws (C: Mech)", topics: ["Variable forces", "Friction models", "Drag forces", "Systems of particles"] },
          { num: 3, title: "Work, Energy & Power (C: Mech)", topics: ["Work by variable force", "Conservative forces", "Potential energy functions", "Energy conservation"] },
          { num: 4, title: "Systems of Particles & Linear Momentum (C: Mech)", topics: ["Center of mass", "Momentum with calculus", "Elastic & inelastic collisions", "Rocket propulsion"] },
          { num: 5, title: "Rotation (C: Mech)", topics: ["Rotational kinematics", "Torque & angular momentum", "Moment of inertia integrals", "Rolling motion"] },
          { num: 6, title: "Oscillations & Gravitation (C: Mech)", topics: ["SHM with calculus", "Gravitational potential", "Orbits", "Escape velocity"] },
          { num: 7, title: "Electrostatics (C: E&M)", topics: ["Coulomb's law", "Electric field & Gauss's Law", "Electric potential", "Capacitance"] },
          { num: 8, title: "Conductors, Capacitors & Dielectrics (C: E&M)", topics: ["Conductors in equilibrium", "Capacitor networks", "Energy in electric field", "Dielectric materials"] },
          { num: 9, title: "Electric Circuits (C: E&M)", topics: ["Current & resistance", "Kirchhoff's laws", "RC circuits", "Power"] },
          { num: 10, title: "Magnetic Fields (C: E&M)", topics: ["Biot-Savart law", "Ampere's law", "Magnetic flux", "Force on conductors"] },
          { num: 11, title: "Electromagnetic Induction (C: E&M)", topics: ["Faraday's law", "Inductance", "RL circuits", "Maxwell's equations intro"] },
        ],
      },
    ],
  },
];

export default function Home() {
  const [activeSubject, setActiveSubject] = useState<string | null>(null);
  const [activeTrack, setActiveTrack] = useState<string>("p1");
  const [expandedUnit, setExpandedUnit] = useState<string | null>(null);

  const subject = subjects.find((s) => s.id === activeSubject);

  const getUnits = () => {
    if (!subject) return [];
    if (subject.id === "physics") {
      const track = subject.tracks!.find((t) => t.id === activeTrack);
      return track?.units ?? [];
    }
    return subject.units ?? [];
  };

  const getTrackColor = () => {
    if (subject?.id === "physics") {
      return subject.tracks!.find((t) => t.id === activeTrack)?.color ?? subject.color;
    }
    return subject?.color ?? "#6366f1";
  };

  return (
    <main style={{ minHeight: "100vh", background: "#0a0a0f", color: "#f1f0ed", fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;600;700&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .nav-link { color: #888; text-decoration: none; font-size: 14px; transition: color 0.2s; }
        .nav-link:hover { color: #f1f0ed; }
        .subject-card { background: #111118; border: 1px solid #1e1e2e; border-radius: 16px; padding: 1.25rem 1.5rem; cursor: pointer; transition: all 0.2s ease; }
        .subject-card:hover { border-color: #333; transform: translateY(-2px); }
        .cta-btn { display: inline-flex; align-items: center; gap: 8px; padding: 10px 22px; border-radius: 100px; font-size: 14px; font-weight: 600; cursor: pointer; border: none; transition: all 0.2s; font-family: inherit; }
        .cta-primary { background: #f1f0ed; color: #0a0a0f; }
        .cta-primary:hover { background: #fff; }
        .cta-secondary { background: transparent; color: #888; border: 1px solid #2a2a3e; }
        .cta-secondary:hover { color: #f1f0ed; border-color: #444; }
        .track-btn { padding: 8px 18px; border-radius: 100px; font-size: 13px; font-weight: 600; cursor: pointer; border: 1px solid #2a2a3e; background: transparent; color: #666; transition: all 0.2s; font-family: inherit; }
        .track-btn.active { color: #f1f0ed; }
        .unit-row { border: 1px solid #1e1e2e; border-radius: 12px; overflow: hidden; margin-bottom: 8px; transition: border-color 0.2s; }
        .unit-header { display: flex; align-items: center; gap: 12px; padding: 14px 16px; cursor: pointer; background: #111118; transition: background 0.15s; }
        .unit-header:hover { background: #16161f; }
        .unit-topics { display: flex; flex-wrap: wrap; gap: 6px; padding: 0 16px 14px; background: #111118; }
        .topic-pill { padding: 4px 12px; border-radius: 100px; font-size: 12px; font-weight: 500; background: #1a1a28; color: #666; border: 1px solid #2a2a3e; }
        .glow-dot { width: 6px; height: 6px; border-radius: 50%; background: #22c55e; display: inline-block; margin-right: 6px; box-shadow: 0 0 8px #22c55e88; animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.4; } }
        .back-btn { background: transparent; border: 1px solid #2a2a3e; color: #888; border-radius: 100px; padding: 8px 16px; font-size: 13px; cursor: pointer; font-family: inherit; transition: all 0.2s; display: flex; align-items: center; gap: 6px; }
        .back-btn:hover { color: #f1f0ed; border-color: #444; }
        @media(max-width:640px) { .subjects-grid { grid-template-columns: 1fr !important; } .hero-title { font-size: 2.4rem !important; } .stats-row { grid-template-columns: 1fr 1fr !important; } }
      `}</style>

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem 2rem", borderBottom: "1px solid #1e1e2e", position: "sticky", top: 0, background: "#0a0a0fcc", backdropFilter: "blur(12px)", zIndex: 100 }}>
        <button onClick={() => { setActiveSubject(null); setExpandedUnit(null); }} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'DM Mono', monospace", fontWeight: 500, fontSize: "18px", letterSpacing: "-0.5px", color: "#f1f0ed" }}>
          Study<span style={{ color: "#6366f1" }}>Flux</span>
        </button>
        <div style={{ display: "flex", gap: "2rem" }}>
          <a href="#" className="nav-link">Subjects</a>
          <a href="#" className="nav-link">Practice</a>
          <a href="#" className="nav-link">About</a>
        </div>
        <button className="cta-btn cta-primary" style={{ padding: "8px 18px" }}>Get started</button>
      </nav>

      {/* SUBJECT DETAIL VIEW */}
      {activeSubject && subject ? (
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "2.5rem 2rem 6rem" }}>
          <button className="back-btn" onClick={() => { setActiveSubject(null); setExpandedUnit(null); }} style={{ marginBottom: "2rem" }}>
            ← All subjects
          </button>

          {/* Subject header */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "0.5rem" }}>
            <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: subject.bg + "22", border: `1px solid ${subject.border}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px" }}>
              {subject.emoji}
            </div>
            <div>
              <h1 style={{ fontSize: "28px", fontWeight: 700, letterSpacing: "-0.5px" }}>{subject.label}</h1>
              <p style={{ color: "#666", fontSize: "14px", marginTop: "2px" }}>{subject.desc}</p>
            </div>
          </div>

          {/* Physics track switcher */}
          {subject.id === "physics" && (
            <div style={{ display: "flex", gap: "8px", margin: "1.5rem 0", flexWrap: "wrap" }}>
              {subject.tracks!.map((t) => (
                <button
                  key={t.id}
                  className={`track-btn${activeTrack === t.id ? " active" : ""}`}
                  style={activeTrack === t.id ? { background: t.color + "22", borderColor: t.color + "66", color: t.color } : {}}
                  onClick={() => { setActiveTrack(t.id); setExpandedUnit(null); }}
                >
                  {t.label} <span style={{ fontWeight: 400, opacity: 0.7, fontSize: "11px" }}>({t.sub})</span>
                </button>
              ))}
            </div>
          )}

          {/* Divider */}
          <div style={{ height: "1px", background: "#1e1e2e", margin: "1.5rem 0" }} />

          {/* Units list */}
          <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#444", marginBottom: "1rem" }}>
            {getUnits().length} Units
          </div>

          {getUnits().map((unit) => {
            const unitKey = `${subject.id}-${activeTrack}-${unit.num}`;
            const isOpen = expandedUnit === unitKey;
            const color = getTrackColor();
            const isIntro = (unit as any).tag === "Intro";
            const isBCOnly = (unit as any).tag === "BC Only";

            return (
              <div key={unitKey} className="unit-row" style={isOpen ? { borderColor: color + "55" } : {}}>
                <div className="unit-header" onClick={() => setExpandedUnit(isOpen ? null : unitKey)}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: isOpen ? color + "22" : "#1e1e2e", border: `1px solid ${isOpen ? color + "55" : "#2a2a3e"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700, color: isOpen ? color : "#555", flexShrink: 0, fontFamily: "'DM Mono', monospace" }}>
                    {isIntro ? "★" : unit.num}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ fontSize: "15px", fontWeight: 600 }}>{unit.title}</span>
                      {(isBCOnly || isIntro) && (
                        <span style={{ fontSize: "10px", fontWeight: 600, padding: "2px 8px", borderRadius: "100px", background: color + "22", color: color, border: `1px solid ${color}44` }}>
                          {(unit as any).tag}
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: "12px", color: "#555", marginTop: "2px" }}>{unit.topics.length} topics</div>
                  </div>
                  <div style={{ color: isOpen ? color : "#444", fontSize: "16px", transition: "transform 0.2s", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>▾</div>
                </div>

                {isOpen && (
                  <div className="unit-topics">
                    {unit.topics.map((t) => (
                      <span key={t} className="topic-pill" style={{ borderColor: color + "33", color: color + "cc" }}>{t}</span>
                    ))}
                    <div style={{ width: "100%", marginTop: "10px" }}>
                      <button className="cta-btn" style={{ background: color + "18", color: color, border: `1px solid ${color}44`, borderRadius: "10px", padding: "9px 16px", fontSize: "13px" }}>
                        Study Unit {unit.num} →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        /* HOME VIEW */
        <>
          {/* Hero */}
          <section style={{ textAlign: "center", padding: "6rem 2rem 4rem", maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#111118", border: "1px solid #1e1e2e", borderRadius: "100px", padding: "6px 14px", fontSize: "13px", color: "#888", marginBottom: "2rem" }}>
              <span className="glow-dot" />Free for AP & college students
            </div>
            <h1 className="hero-title" style={{ fontSize: "clamp(2.4rem, 7vw, 4.5rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-2px", marginBottom: "1.5rem" }}>
              Master STEM.<br />
              <span style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>One unit at a time.</span>
            </h1>
            <p style={{ fontSize: "18px", color: "#888", lineHeight: 1.6, marginBottom: "2.5rem", maxWidth: "540px", margin: "0 auto 2.5rem" }}>
              Structured by AP curriculum units. Biology, Chemistry, Anatomy, Calculus, and Physics — from AP to college level.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <button className="cta-btn cta-primary">Start studying →</button>
              <button className="cta-btn cta-secondary">Browse subjects</button>
            </div>
          </section>

          {/* Stats */}
          <section style={{ maxWidth: "860px", margin: "2rem auto", padding: "0 2rem" }}>
            <div className="stats-row" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "12px" }}>
              {[{ num: "5", label: "Core subjects" }, { num: "40+", label: "Course units" }, { num: "AP → College", label: "All levels" }, { num: "Free", label: "Always" }].map((s) => (
                <div key={s.label} style={{ background: "#111118", border: "1px solid #1e1e2e", borderRadius: "12px", padding: "1.25rem", textAlign: "center" }}>
                  <div style={{ fontSize: "20px", fontWeight: 700, marginBottom: "4px" }}>{s.num}</div>
                  <div style={{ fontSize: "13px", color: "#666" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Subject cards */}
          <section style={{ maxWidth: "860px", margin: "3rem auto 6rem", padding: "0 2rem" }}>
            <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#444", marginBottom: "1.25rem" }}>Choose a subject</div>
            <div className="subjects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "12px" }}>
              {subjects.map((s) => (
                <div key={s.id} className="subject-card" onClick={() => { setActiveSubject(s.id); setExpandedUnit(null); if (s.id === "physics") setActiveTrack("p1"); }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: s.bg + "22", border: `1px solid ${s.border}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>
                      {s.emoji}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: "15px" }}>{s.label}</div>
                      <div style={{ fontSize: "12px", color: "#555" }}>
                        {s.id === "physics" ? "3 tracks · 28 units" : `${(s.units ?? []).length} units`}
                      </div>
                    </div>
                  </div>
                  <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.5, marginBottom: "14px" }}>{s.desc}</p>
                  <button className="cta-btn" style={{ background: s.color + "18", color: s.color, border: `1px solid ${s.color}44`, borderRadius: "10px", padding: "9px 14px", fontSize: "13px", width: "100%", justifyContent: "center" }}>
                    View units →
                  </button>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      <footer style={{ borderTop: "1px solid #1e1e2e", padding: "2rem", textAlign: "center", color: "#333", fontSize: "13px" }}>
        StudyFlux — built for students
      </footer>
    </main>
  );
}