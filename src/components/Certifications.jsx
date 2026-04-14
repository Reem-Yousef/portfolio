import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { CERTS } from "../data/data";

function CertRow({ cert, index, visible }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 24,
        padding: "20px 24px",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
        transition: `all 0.5s ease ${index * 0.1}s`,
        cursor: "default",
      }}
    >
      {/* Certificate image */}
      <div style={{
        width: 200, minWidth: 200, height: 130,
        borderRadius: 12,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)",
        transform: hov ? "scale(1.02) rotate(-1deg)" : "none",
        transition: "transform 0.3s ease",
        flexShrink: 0,
      }}>
        <img
          src={cert.img}
          alt={cert.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Info */}
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: `${cert.color}18`,
            border: `1px solid ${cert.color}33`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16,
          }}>
            🛡️
          </div>
          <h3 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700, fontSize: 18,
            color: "#fff", margin: 0,
          }}>
            {cert.title}
          </h3>
        </div>

        <div style={{
          width: 40, height: 1,
          background: "rgba(255,255,255,0.1)",
          marginBottom: 16,
        }} />

        <a
          href={cert.link}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            border: `1px solid ${cert.color}44`,
            borderRadius: 100,
            padding: "8px 18px",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13, fontWeight: 600,
            color: cert.color,
            textDecoration: "none",
            background: `${cert.color}08`,
            transition: "background 0.25s ease",
          }}
          onMouseEnter={e => e.currentTarget.style.background = `${cert.color}18`}
          onMouseLeave={e => e.currentTarget.style.background = `${cert.color}08`}
        >
          View Credential ↗
        </a>
      </div>

      {/* Arrow */}
      <div style={{ color: "rgba(255,255,255,0.15)", fontSize: 20, flexShrink: 0 }}>↗</div>
    </div>
  );
}

export function Certifications() {
  const [ref, visible] = useInView();

  return (
    <section id="certifications" style={{ padding: "100px 6vw", position: "relative", zIndex: 1 }}>
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
            Certifications
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 16,
            color: "rgba(255,255,255,0.4)",
            maxWidth: 500,
            margin: "0 auto",
          }}>
            Professional certifications and credentials I've earned along the way.
          </p>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {CERTS.map((cert, i) => (
            <CertRow key={cert.title} cert={cert} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
