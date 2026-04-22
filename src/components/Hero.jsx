import { useState, useEffect, useRef } from "react";
import Spline from '@splinetool/react-spline';

export function Hero() {
  const [typed, setTyped] = useState("");
  const words = ["Full-Stack Developer", "UI/UX Designer", "Freelance Engineer"];
  const wRef = useRef(0), cRef = useRef(0), dRef = useRef(1);

  useEffect(() => {
    const tick = () => {
      const word = words[wRef.current];
      if (dRef.current === 1) {
        cRef.current++;
        setTyped(word.slice(0, cRef.current));
        if (cRef.current === word.length) {
          dRef.current = -1;
          setTimeout(tick, 2000);
          return;
        }
      } else {
        cRef.current--;
        setTyped(word.slice(0, cRef.current));
        if (cRef.current === 0) {
          dRef.current = 1;
          wRef.current = (wRef.current + 1) % words.length;
        }
      }
      setTimeout(tick, dRef.current === 1 ? 80 : 45);
    };
    const t = setTimeout(tick, 600);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      padding: "0 6vw",
      position: "relative",
      zIndex: 1,
      marginLeft: 150,
      marginTop: 40,
      overflow: "visible",
    }}>
      {/* Left */}
      <div style={{ flex: 1, maxWidth: 640, animation: "fadeUp 0.7s ease both", overflow: "visible" }}>
        <p style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 13, color: "rgba(255,255,255,0.4)",
          letterSpacing: 4, textTransform: "uppercase", marginBottom: 16,
        }}>HEY, I'M ·</p>

        <h1
          data-text="Reem"
          className="stripe-text"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(52px, 6vw, 96px)",
            lineHeight: 1,
            letterSpacing: -1,
            fontStyle: "italic",
            margin: "0 0 24px",
            animation: "titleReveal 0.8s ease both",
          }}
        >Reem</h1>

        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "clamp(15px, 1.8vw, 18px)",
          color: "rgba(255,255,255,0.5)", lineHeight: 1.7,
          marginBottom: 12, maxWidth: 480,
        }}>
          Full-stack developer & UI/UX designer who turns ideas into fast,
          polished products — one clean commit at a time.
        </p>

        <p style={{
          fontFamily: "'DM Mono', monospace", fontSize: 15,
          color: "rgba(255,255,255,0.6)", marginBottom: 40, minHeight: 24,
        }}>
          {typed}<span style={{ animation: "blink 1s infinite" }}>|</span>
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button onClick={() => scrollTo("projects")} style={{
            background: "#fff", color: "#000", border: "none",
            borderRadius: 100, padding: "12px 28px", cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14,
            transition: "opacity 0.25s",
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >View Work</button>

          <button onClick={() => scrollTo("contact")} style={{
            background: "rgba(255,255,255,0.06)", color: "#fff",
            border: "1px solid rgba(255,255,255,0.15)", borderRadius: 100,
            padding: "12px 28px", cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 14,
            transition: "background 0.25s",
          }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}
          >Get in Touch</button>
        </div>
      </div>

      {/* Right — Spline Robot */}
      <div className="hero-right" style={{
        flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", animation: "fadeUp 0.8s ease 0.2s both",
        height: 700,
        overflow: "visible",
        marginRight: -50,
        marginTop: -150,

      }}>
        <Spline
          // scene="https://prod.spline.design/b6CdfOq9ZnVDjlVx/scene.splinecode"
          scene="https://prod.spline.design/iQsnxnlUYueAAwUZ/scene.splinecode"
          // scene="https://prod.spline.design/iQsnxnlUYueAAwUZ/scene.splinecode"
          style={{ width: "100%", height: "100%" ,  transform: "scale(1.4) translateY(10%)",
      transformOrigin: "center center"}}
        />
      </div>
    </section>
  );
}