"use client";
import { useState } from "react";
 
const subjects = [
  {
    id: "biology",
    label: "Biology",
    emoji: "🧬",
    color: "#16a34a",
    bg: "#f0fdf4",
    border: "#bbf7d0",
    desc: "Cells, genetics, evolution & ecosystems",
    topics: ["Cell Biology", "Genetics", "Evolution", "Ecology", "Photosynthesis"],
  },
  {
    id: "chemistry",
    label: "Chemistry",
    emoji: "⚗️",
    color: "#9333ea",
    bg: "#faf5ff",
    border: "#e9d5ff",
    desc: "Atoms, reactions, bonding & thermodynamics",
    topics: ["Atomic Structure", "Reactions", "Stoichiometry", "Thermodynamics", "Acids & Bases"],
  },
  {
    id: "anatomy",
    label: "Anatomy",
    emoji: "🫀",
    color: "#e11d48",
    bg: "#fff1f2",
    border: "#fecdd3",
    desc: "Body systems, organs & physiology",
    topics: ["Skeletal System", "Muscular System", "Nervous System", "Cardiovascular", "Respiratory"],
  },
  {
    id: "calculus",
    label: "Calculus",
    emoji: "∫",
    color: "#0284c7",
    bg: "#f0f9ff",
    border: "#bae6fd",
    desc: "Limits, derivatives, integrals & series",
    topics: ["Limits", "Derivatives", "Integration", "Series", "Multivariable"],
  },
  {
    id: "physics",
    label: "Physics",
    emoji: "⚡",
    color: "#d97706",
    bg: "#fffbeb",
    border: "#fde68a",
    desc: "Motion, forces, energy & electromagnetism",
    topics: ["Kinematics", "Forces", "Energy", "Waves", "Electromagnetism"],
  },
];
 
export default function Home() {
  const [active, setActive] = useState<string | null>(null);
  const activeSubject = subjects.find((s) => s.id === active);
 
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0f",
        color: "#f1f0ed",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&family=DM+Mono:wght@400;500&display=swap');
 
        * { box-sizing: border-box; margin: 0; padding: 0; }
 
        .nav-link {
          color: #888;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s;
        }
        .nav-link:hover { color: #f1f0ed; }
 
        .subject-card {
          background: #111118;
          border: 1px solid #1e1e2e;
          border-radius: 16px;
          padding: 1.5rem;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
        }
        .subject-card:hover {
          border-color: #333;
          transform: translateY(-2px);
        }
        .subject-card.active {
          border-color: var(--card-color);
          background: var(--card-bg-dark);
        }
 
        .topic-pill {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 500;
          background: #1e1e2e;
          color: #888;
          border: 1px solid #2a2a3e;
          transition: all 0.15s;
          cursor: pointer;
        }
        .topic-pill:hover {
          background: #2a2a3e;
          color: #f1f0ed;
        }
 
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          border-radius: 100px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: all 0.2s;
        }
        .cta-primary {
          background: #f1f0ed;
          color: #0a0a0f;
        }
        .cta-primary:hover { background: #fff; transform: scale(1.02); }
        .cta-secondary {
          background: transparent;
          color: #888;
          border: 1px solid #2a2a3e;
        }
        .cta-secondary:hover { color: #f1f0ed; border-color: #444; }
 
        .stat-card {
          background: #111118;
          border: 1px solid #1e1e2e;
          border-radius: 12px;
          padding: 1.25rem 1.5rem;
          text-align: center;
        }
 
        .glow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22c55e;
          display: inline-block;
          margin-right: 6px;
          box-shadow: 0 0 8px #22c55e88;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
 
        @media (max-width: 640px) {
          .subjects-grid { grid-template-columns: 1fr !important; }
          .stats-row { grid-template-columns: 1fr 1fr !important; }
          .hero-title { font-size: 2.5rem !important; }
        }
      `}</style>
 
      {/* Nav */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.25rem 2rem",
          borderBottom: "1px solid #1e1e2e",
          position: "sticky",
          top: 0,
          background: "#0a0a0fcc",
          backdropFilter: "blur(12px)",
          zIndex: 100,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "20px", fontFamily: "'DM Mono', monospace", fontWeight: 500, letterSpacing: "-0.5px" }}>
            Study<span style={{ color: "#6366f1" }}>Flux</span>
          </span>
        </div>
        <div style={{ display: "flex", gap: "2rem" }}>
          <a href="#subjects" className="nav-link">Subjects</a>
          <a href="#" className="nav-link">Practice</a>
          <a href="#" className="nav-link">About</a>
        </div>
        <button className="cta-btn cta-primary" style={{ padding: "8px 20px", fontSize: "14px" }}>
          Get started
        </button>
      </nav>
 
      {/* Hero */}
      <section
        style={{
          textAlign: "center",
          padding: "6rem 2rem 4rem",
          maxWidth: "760px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "#111118",
            border: "1px solid #1e1e2e",
            borderRadius: "100px",
            padding: "6px 14px",
            fontSize: "13px",
            color: "#888",
            marginBottom: "2rem",
          }}
        >
          <span className="glow-dot" />
          Free for AP & college students
        </div>
 
        <h1
          className="hero-title"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-2px",
            marginBottom: "1.5rem",
          }}
        >
          Master STEM.
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #6366f1, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            One concept at a time.
          </span>
        </h1>
 
        <p
          style={{
            fontSize: "18px",
            color: "#888",
            lineHeight: 1.6,
            marginBottom: "2.5rem",
            maxWidth: "540px",
            margin: "0 auto 2.5rem",
          }}
        >
          Flashcards, practice problems, and guided reviews for AP Biology, Chemistry, Anatomy, Calculus, and Physics.
        </p>
 
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <button className="cta-btn cta-primary">Start studying →</button>
          <button className="cta-btn cta-secondary">Browse subjects</button>
        </div>
      </section>
 
      {/* Stats */}
      <section style={{ maxWidth: "860px", margin: "4rem auto", padding: "0 2rem" }}>
        <div
          className="stats-row"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "12px",
          }}
        >
          {[
            { num: "5", label: "Core subjects" },
            { num: "500+", label: "Practice problems" },
            { num: "AP → College", label: "All levels" },
            { num: "Free", label: "Always" },
          ].map((s) => (
            <div key={s.label} className="stat-card">
              <div style={{ fontSize: "22px", fontWeight: 700, marginBottom: "4px" }}>{s.num}</div>
              <div style={{ fontSize: "13px", color: "#666" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>
 
      {/* Subjects */}
      <section id="subjects" style={{ maxWidth: "860px", margin: "0 auto 6rem", padding: "0 2rem" }}>
        <h2
          style={{
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#555",
            marginBottom: "1.5rem",
          }}
        >
          Choose a subject
        </h2>
 
        <div
          className="subjects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "12px",
          }}
        >
          {subjects.map((s) => (
            <div
              key={s.id}
              className={`subject-card${active === s.id ? " active" : ""}`}
              style={{ "--card-color": s.color, "--card-bg-dark": "#16161f" } as React.CSSProperties}
              onClick={() => setActive(active === s.id ? null : s.id)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: s.bg + "22",
                    border: `1px solid ${s.border}44`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                  }}
                >
                  {s.emoji}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "16px" }}>{s.label}</div>
                  <div style={{ fontSize: "12px", color: "#555" }}>
                    {s.topics.length} topics
                  </div>
                </div>
                <div
                  style={{
                    marginLeft: "auto",
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    border: `1px solid ${active === s.id ? s.color : "#2a2a3e"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    color: active === s.id ? s.color : "#444",
                    transition: "all 0.2s",
                  }}
                >
                  {active === s.id ? "✕" : "↓"}
                </div>
              </div>
 
              <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.5, marginBottom: "12px" }}>
                {s.desc}
              </p>
 
              {active === s.id && (
                <div>
                  <div
                    style={{
                      height: "1px",
                      background: "#1e1e2e",
                      margin: "12px 0",
                    }}
                  />
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {s.topics.map((t) => (
                      <span
                        key={t}
                        className="topic-pill"
                        style={{ borderColor: s.border + "55", color: s.color + "cc" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <button
                    className="cta-btn"
                    style={{
                      marginTop: "16px",
                      width: "100%",
                      justifyContent: "center",
                      background: s.color + "22",
                      color: s.color,
                      border: `1px solid ${s.color}44`,
                      borderRadius: "10px",
                      padding: "10px",
                      fontSize: "14px",
                    }}
                  >
                    Study {s.label} →
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
 
      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #1e1e2e",
          padding: "2rem",
          textAlign: "center",
          color: "#444",
          fontSize: "13px",
        }}
      >
        StudyFlux — built for students 
      </footer>
    </main>
  );
}
 