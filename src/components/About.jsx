import { useInView } from "../hooks/useInView";
import { OrbitingCircles } from "./ui/OrbitingCircles";
import { ABOUT_ORBIT } from "../data/data";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import myPhoto from "../../public/your-photo.jpeg";

function OrbitIcon({ item, dark }) {
  const darkColors = {
    "#22d3ee": "#0e7490",
    "#4ade80": "#15803d",
    "#e879f9": "#a21caf",
    "#a78bfa": "#6d28d9"
  };
  const iconColor = dark ? item.color : (darkColors[item.color] || item.color);
  const bg     = dark ? `${item.color}18` : `transparent`;
  const border = dark ? `1px solid ${item.color}aa` : `1px solid ${iconColor}`;
  const shadow = dark
    ? `0 0 14px ${item.color}66, inset 0 0 8px ${item.color}33`
    : `0 0 12px ${iconColor}66, inset 0 0 6px ${iconColor}22`;

  return (
    <div style={{
      width: 72, height: 72, borderRadius: 18,
      background: bg, border, boxShadow: shadow,
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: 4,
    }}>
      <svg viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" width="26" height="26">
        {item.label === "Frontend" && <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="m8 21 4-4 4 4"/><path d="M8 9l-2 2 2 2"/><path d="m16 9 2 2-2 2"/></>}
        {item.label === "Backend"  && <><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><circle cx="6" cy="6" r="1" fill={iconColor} stroke="none"/><circle cx="6" cy="18" r="1" fill={iconColor} stroke="none"/></>}
        {item.label === "UI/UX"    && <><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/><path d="m4.93 4.93 2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"/></>}
        {item.label === "Full Stack" && <><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 12l10 5 10-5"/><path d="M2 17l10 5 10-5"/></>}
      </svg>
      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: iconColor, fontWeight: 700, whiteSpace: "nowrap" }}>
        {item.label}
      </span>
    </div>
  );
}

function TagBadge({ label, color, dark }) {
  const [hov, setHov] = useState(false);
  const bg     = dark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.25)";
  const bdr    = dark ? "rgba(255,255,255,0.1)"  : "rgba(255,255,255,0.5)";
  const hovBdr = dark ? `${color}80` : color;
  const fg     = dark ? "rgba(255,255,255,0.6)"  : "rgba(0,0,0,0.8)";

  return (
    <span
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? `${color}12` : bg,
        border: `1px solid ${hov ? hovBdr : bdr}`,
        borderRadius: 100, padding: "6px 16px",
        fontFamily: "'DM Sans', sans-serif", fontSize: 13,
        color: hov ? color : fg,
        boxShadow: hov ? `0 0 12px ${color}90` : "none",
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.25s ease", cursor: "default", display: "inline-block",
      }}
    >{label}</span>
  );
}

export function About({ dark }) {
  const [ref, visible] = useInView();
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const h = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  const titleC = dark ? "#fff" : "#000000";
  const subC   = dark ? "rgba(255,255,255,0.33)" : "rgba(0,0,0,0.5)";
  const textC  = dark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.8)";
  const font   = isAr ? "'Cairo', sans-serif" : "'DM Sans', sans-serif";

  return (
    <section id="about" ref={ref} style={{
      minHeight: "90vh",
      display: "flex",
      alignItems: "center",
      flexDirection: isMobile ? "column" : "row",
      padding: isMobile ? "60px 6vw" : "80px 6vw",
      marginRight: 0,
      marginLeft:  0,
      position: "relative", zIndex: 1,
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : "translateY(50px)",
      transition: "all 0.8s ease",
      
      gap: isMobile ? 40 : 0,
    }}>

      {/* Orbit visual */}
      <div className="about-left" style={{
        flex: 1, display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // نحرك الـ orbit شوية لليسار عشان يتمركز أحسن
        marginLeft: isMobile ? 0 : -40,
        transform: isMobile ? "scale(0.65)" : "none",
        transformOrigin: "center center",
        minHeight: isMobile ? 320 : "auto",
      }}>
        <div style={{
          position: "relative", width: 480, height: 480,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{
            width: 150, height: 180, borderRadius: "50%",
            overflow: "hidden", border: "2px solid rgba(255,255,255,0.15)",
            boxShadow: "0 0 40px rgba(34,211,238,0.12)",
            zIndex: 2, position: "relative",
          }}>
            <img src={myPhoto} alt="Reem" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          <OrbitingCircles radius={150} duration={18} iconSize={72}>
            {ABOUT_ORBIT.slice(0, 3).map((item) => (
              <OrbitIcon key={item.label} item={item} dark={dark} />
            ))}
          </OrbitingCircles>

          <OrbitingCircles radius={240} duration={30} reverse iconSize={72}>
            {ABOUT_ORBIT.slice(3).map((item) => (
              <OrbitIcon key={item.label} item={item} dark={dark} />
            ))}
          </OrbitingCircles>
        </div>
      </div>

      {/* النص */}
      <div style={{
        flex: 1, maxWidth: isMobile ? "100%" : 560,
        textAlign: isAr ? "right" : "left",
        direction: isAr ? "rtl" : "ltr",
      }}>
        <h2 style={{
          fontFamily: isAr ? "'Cairo', sans-serif" : "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: isMobile ? "clamp(28px, 7vw, 40px)" : "clamp(32px, 5vw, 52px)",
          color: titleC, lineHeight: 1.15,
          letterSpacing: isAr ? 0 : -1.5,
          margin: "0 0 24px",
        }}>
          {t("about.title")}<br />
          <span style={{ color: subC }}>{t("about.titleAccent")}</span>
        </h2>

        <p style={{ fontFamily: font, fontSize: isMobile ? 14 : 16, color: textC, lineHeight: 1.85, marginBottom: 20 }}>
          {t("about.p1")}
        </p>

        <p style={{ fontFamily: font, fontSize: isMobile ? 14 : 16, color: textC, lineHeight: 1.85, marginBottom: 36 }}>
          {t("about.p2")}
        </p>

        <div style={{
          display: "flex", gap: 10, flexWrap: "wrap",
          justifyContent: isAr ? "flex-end" : "flex-start",
        }}>
          {[
            { label: "React",   color: "#22d3ee" },
            { label: "Angular", color: "#dd0031" },
            { label: "Next.js", color: dark ? "#ffffff" : "#000000" },
            { label: "Express", color: "#fb923c" },
            { label: "MongoDB", color: "#4ade80" },
            { label: "UI/UX",   color: "#e879f9" },
          ].map(({ label, color }) => (
            <TagBadge key={label} label={label} color={color} dark={dark} />
          ))}
        </div>
      </div>
    </section>
  );
}