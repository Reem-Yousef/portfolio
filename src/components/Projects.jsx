import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { PROJECTS } from "../data/data";

function ProjectCard({ project: p, index, visible }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "rgba(255,255,255,0.02)",
        border: `1px solid ${hov ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)"}`,
        borderRadius: 20,
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(40px)",
        transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s, border-color 0.3s`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Screenshot */}
      <div style={{ position: "relative" }}>
        {/* Corner marks زي الأصلي */}
        {["topLeft", "topRight"].map(pos => (
          <span key={pos} style={{
            position: "absolute",
            top: 8,
            [pos === "topLeft" ? "left" : "right"]: 8,
            color: "rgba(255,255,255,0.3)",
            fontSize: 16,
            lineHeight: 1,
            zIndex: 2,
          }}>+</span>
        ))}
        <img
          src={p.img}
          alt={p.title}
          style={{
            width: "100%",
            height: 200,
            objectFit: "cover",
            filter: hov ? "brightness(1.1)" : "brightness(0.75)",
            transition: "filter 0.3s ease",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "20px 24px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700, fontSize: 20,
          color: "#fff", margin: "0 0 10px",
          letterSpacing: -0.3,
        }}>
          {p.title}
        </h3>

        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 14,
          color: "rgba(255,255,255,0.45)",
          lineHeight: 1.7,
          marginBottom: 16,
          flex: 1,
        }}>
          {p.desc}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
          {p.tags.map(t => (
            <span key={t} style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 100,
              padding: "3px 12px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              color: "rgba(255,255,255,0.5)",
            }}>
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: 10 }}>
          <a href={p.github} target="_blank" rel="noreferrer" style={{
            display: "flex", alignItems: "center", gap: 6,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 100,
            padding: "8px 16px",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            color: "rgba(255,255,255,0.7)",
            textDecoration: "none",
            transition: "background 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
          >
            🐙 Source Code
          </a>

          {p.demo !== "#" && (
            <a href={p.demo} target="_blank" rel="noreferrer" style={{
              display: "flex", alignItems: "center", gap: 6,
              background: "rgba(34,211,238,0.06)",
              border: "1px solid rgba(34,211,238,0.2)",
              borderRadius: 100,
              padding: "8px 16px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: "#22d3ee",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(34,211,238,0.12)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(34,211,238,0.06)"}
            >
              ↗ Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [ref, visible] = useInView();

  return (
    <section id="projects" style={{ padding: "100px 6vw", position: "relative", zIndex: 1 }}>
      <div ref={ref}>
        <div style={{
          textAlign: "center", marginBottom: 64,
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(30px)",
          transition: "all 0.6s ease",
        }}>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(32px, 5vw, 52px)",
            color: "#fff",
            letterSpacing: -1.5,
            margin: "0 0 16px",
          }}>
            Things I've <span style={{ color: "rgba(255,255,255,0.25)" }}>Built</span>
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 16,
            color: "rgba(255,255,255,0.4)",
            maxWidth: 520,
            margin: "0 auto",
          }}>
            A selection of projects I've shipped — from weekend experiments to full-stack applications.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24,
          maxWidth: 1200,
          margin: "0 auto",
        }}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
