import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Spline from '@splinetool/react-spline';

export function Hero({ dark }) {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const h = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  const [typed, setTyped] = useState("");
  const wRef = useRef(0), cRef = useRef(0), dRef = useRef(1);

  useEffect(() => {
    wRef.current = 0; cRef.current = 0; dRef.current = 1;
    setTyped("");
    const tick = () => {
      const roles = i18n.t("hero.roles", { returnObjects: true });
      const word  = roles[wRef.current];
      if (!word) return;
      if (dRef.current === 1) {
        cRef.current++;
        setTyped(word.slice(0, cRef.current));
        if (cRef.current === word.length) { dRef.current = -1; setTimeout(tick, 2000); return; }
      } else {
        cRef.current--;
        setTyped(word.slice(0, cRef.current));
        if (cRef.current === 0) {
          dRef.current = 1;
          wRef.current = (wRef.current + 1) % roles.length;
        }
      }
      setTimeout(tick, dRef.current === 1 ? 80 : 45);
    };
    const timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, [i18n.language]);

  const scrollTo = (id) =>
    document.body.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });

  const fg            = dark ? "#fff"                    : "#000000";
  const fgSub         = dark ? "rgba(255,255,255,0.5)"  : "rgba(0,0,0,0.8)";
  const fgMono        = dark ? "rgba(255,255,255,0.4)"  : "rgba(0,0,0,0.6)";
  const btnBg         = dark ? "#fff"                    : "#000000";
  const btnFg         = dark ? "#000"                    : "#fff";
  const outlineBtnBg  = dark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.25)";
  const outlineBtnFg  = dark ? "#fff"                    : "#000000";
  const outlineBtnBdr = dark ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.5)";
  const outlineBtnHov = dark ? "rgba(255,255,255,0.1)"  : "rgba(255,255,255,0.4)";

  const displayName = isAr ? "ريم" : "Reem";

  return (
    <section id="hero" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      padding: isMobile ? "80px 6vw 60px" : "0 6vw",
      position: "relative",
      zIndex: 1,
      // نفس الـ layout الأصلي — مفيش RTL
      marginLeft: isMobile ? 0 : 150,
      marginTop: isMobile ? 0 : 40,
      overflow: "hidden",
      flexDirection: isMobile ? "column" : "row",
    }}>

      {/* النص — على اليسار دايماً زي الأصل */}
      <div style={{
        flex: 1,
        maxWidth: isMobile ? "100%" : 640,
        animation: "fadeUp 0.7s ease both",
        overflow: "visible",
        display: "flex",
        flexDirection: "column",
        alignItems: isMobile ? "center" : (isAr ? "flex-end" : "flex-start"),
        textAlign: isMobile ? "center" : (isAr ? "right" : "left"),
        direction: isAr ? "rtl" : "ltr",
      }}>
        <p style={{
          fontFamily: isAr ? "'Cairo', sans-serif" : "'DM Mono', monospace",
          fontSize: 13, color: fgMono,
          letterSpacing: isAr ? 1 : 4,
          textTransform: "uppercase", marginBottom: 16,
        }}>{t("hero.greeting")}</p>

        <h1
          data-text={displayName}
          className={isAr ? "stripe-text-ar" : "stripe-text"}
          style={{
            fontFamily: isAr ? "'Cairo', sans-serif" : "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: isMobile ? "clamp(64px, 18vw, 96px)" : "clamp(52px, 6vw, 96px)",
            lineHeight: 1,
            letterSpacing: isAr ? 2 : -1,
            fontStyle: isAr ? "normal" : "italic",
            margin: "0 0 24px",
          }}
        >{displayName}</h1>

        <p style={{
          fontFamily: isAr ? "'Cairo', sans-serif" : "'DM Sans', sans-serif",
          fontSize: isMobile ? 15 : "clamp(15px, 1.8vw, 18px)",
          color: fgSub, lineHeight: 1.9,
          marginBottom: 12,
          maxWidth: isMobile ? "100%" : 480,
          // النص العربي يبقى left-to-right في مكانه
          textAlign: isMobile ? "center" : "left",
          direction: "ltr",
        }}>{t("hero.desc")}</p>

        <p style={{
          fontFamily: isAr ? "'Cairo', sans-serif" : "'DM Mono', monospace",
          fontSize: 15,
          color: dark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.7)",
          marginBottom: 40, minHeight: 24,
          direction: "ltr",
          textAlign: isMobile ? "center" : "left",
        }}>
          {typed}<span style={{ animation: "blink 1s infinite" }}>|</span>
        </p>

        <div style={{
          display: "flex", gap: 12, flexWrap: "wrap",
          justifyContent: isMobile ? "center" : "flex-start",
        }}>
          <button onClick={() => scrollTo("projects")} style={{
            background: btnBg, color: btnFg, border: "none",
            borderRadius: 100, padding: "12px 28px", cursor: "pointer",
            fontFamily: isAr ? "'Cairo', sans-serif" : "'DM Sans', sans-serif",
            fontWeight: 700, fontSize: 14, transition: "opacity 0.25s",
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >{t("hero.viewWork")}</button>

          <button onClick={() => scrollTo("contact")} style={{
            background: outlineBtnBg, color: outlineBtnFg,
            border: `1px solid ${outlineBtnBdr}`, borderRadius: 100,
            padding: "12px 28px", cursor: "pointer",
            fontFamily: isAr ? "'Cairo', sans-serif" : "'DM Sans', sans-serif",
            fontWeight: 500, fontSize: 14, transition: "background 0.25s",
          }}
            onMouseEnter={e => e.currentTarget.style.background = outlineBtnHov}
            onMouseLeave={e => e.currentTarget.style.background = outlineBtnBg}
          >{t("hero.getInTouch")}</button>
        </div>
      </div>

      {/* الروبوت — على اليمين دايماً زي الأصل */}
      {!isMobile && (
        <div className="hero-right" style={{
          flex: 1,
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative",
          animation: "fadeUp 0.8s ease 0.2s both",
          height: 700,
          clipPath: "inset(0)",
          marginRight: -50,
          marginTop: -150,
        }}>
          <Spline
            scene="https://prod.spline.design/iQsnxnlUYueAAwUZ/scene.splinecode"
            style={{ width: "100%", height: "100%", transform: "scale(1.4) translateY(10%)", transformOrigin: "center center" }}
          />
        </div>
      )}
    </section>
  );
}