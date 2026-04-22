import { useInView } from "../hooks/useInView";
import { OrbitingCircles } from "./ui/OrbitingCircles";
import { ABOUT_ORBIT } from "../data/data";
import { useState } from "react";
import myPhoto from "../../public/your-photo.jpeg";

function OrbitIcon({ item }) {
  return (
    <div style={{
      width: 60, height: 60,
      borderRadius: 16,
      background: `${item.color}18`,
      border: `1px solid ${item.color}44`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 4,
      boxShadow: `0 0 12px ${item.color}22`,
    }}>
      <svg viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        {item.label === "Frontend" && <>
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <path d="m8 21 4-4 4 4"/>
          <path d="M8 9l-2 2 2 2"/>
          <path d="m16 9 2 2-2 2"/>
        </>}
        {item.label === "Backend" && <>
          <rect x="2" y="2" width="20" height="8" rx="2"/>
          <rect x="2" y="14" width="20" height="8" rx="2"/>
          <circle cx="6" cy="6" r="1" fill={item.color} stroke="none"/>
          <circle cx="6" cy="18" r="1" fill={item.color} stroke="none"/>
        </>}
        {item.label === "UI/UX" && <>
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
          <path d="m4.93 4.93 2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"/>
        </>}
        {item.label === "Full Stack" && <>
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 12l10 5 10-5"/>
          <path d="M2 17l10 5 10-5"/>
        </>}
      </svg>
      <span style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 9, color: item.color,
        fontWeight: 700, whiteSpace: "nowrap",
      }}>
        {item.label}
      </span>
    </div>
  );
}

function TagBadge({ label, color }) {
  const [hov, setHov] = useState(false);
  return (
    <span
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? `${color}12` : "rgba(255,255,255,0.04)",
        border: `1px solid ${hov ? color + "80" : "rgba(255,255,255,0.1)"}`,
        borderRadius: 100,
        padding: "6px 16px",
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 13,
        color: hov ? color : "rgba(255,255,255,0.6)",
        boxShadow: hov ? `0 0 12px ${color}90` : "none",
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.25s ease",
        cursor: "default",
        display: "inline-block",
      }}
    >
      {label}
    </span>
  );
}

export function About() {
  const [ref, visible] = useInView();

  return (
    <section id="about" ref={ref} style={{
      minHeight: "90vh",
      display: "flex",
      alignItems: "center",
      padding: "80px 6vw",
      marginRight: "80px",
      position: "relative",
      zIndex: 1,
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : "translateY(50px)",
      transition: "all 0.8s ease",
    }}>

      {/* Left — Orbit visual */}
      <div className="about-left" style={{
        flex: 1, display: "flex",
        alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          position: "relative", width: 480, height: 480,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {/* Center photo */}
          <div style={{
            width: 150, height: 150, borderRadius: "50%",
            overflow: "hidden", border: "2px solid rgba(255,255,255,0.15)",
            boxShadow: "0 0 40px rgba(34,211,238,0.12)",
            zIndex: 2, position: "relative",
          }}>
            {/* <img src="/your-photo.jpeg" alt="Reem"
              style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
            <img
              src={myPhoto}
              alt="Reem"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Inner orbit — Frontend, Backend, UI/UX */}
          <OrbitingCircles radius={150} duration={18} iconSize={60}>
            {ABOUT_ORBIT.slice(0, 3).map((item) => (
              <OrbitIcon key={item.label} item={item} />
            ))}
          </OrbitingCircles>

          {/* Outer orbit — Full Stack */}
          <OrbitingCircles radius={240} duration={30} reverse iconSize={60}>
            {ABOUT_ORBIT.slice(3).map((item) => (
              <OrbitIcon key={item.label} item={item} />
            ))}
          </OrbitingCircles>
        </div>
      </div>

      {/* Right — Text */}
      <div style={{ flex: 1, maxWidth: 560 }}>
        <h2 style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 700,
          fontSize: "clamp(32px, 5vw, 52px)", color: "#fff",
          lineHeight: 1.15, letterSpacing: -1.5, margin: "0 0 24px",
        }}>
          Who I am<br />
          <span style={{ color: "rgba(255,255,255,0.33)" }}>& What I offer</span>
        </h2>

        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 16,
          color: "rgba(255,255,255,0.55)", lineHeight: 1.85, marginBottom: 20,
        }}>
          Reem Yousef — a full-stack developer & UI/UX designer with a strong blend of creativity and technical expertise. I bring a unique perspective to building digital products. 
          From designing intuitive user experiences to developing scalable web applications, I focus on creating solutions that are both functional and engaging.
           Passionate about continuous learning, problem-solving, and turning ideas into impactful, user-centered products.
        </p>

        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 16,
          color: "rgba(255,255,255,0.55)", lineHeight: 1.85, marginBottom: 36,
        }}>
          Creative developer at heart, builder by habit — I thrive at the
          intersection of design, performance, and developer experience.
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {[
            { label: "React",     color: "#22d3ee" },
            { label: "Angular",   color: "#dd0031" },
            { label: "Next.js",   color: "#ffffff" },
            { label: "Express",   color: "#fb923c" },
            { label: "MongoDB",   color: "#4ade80" },
            { label: "UI/UX",     color: "#e879f9" },
          ].map(({ label, color }) => (
            <TagBadge key={label} label={label} color={color} />
          ))}
        </div>
      </div>
    </section>
  );
}