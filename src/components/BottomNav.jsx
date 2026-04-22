import { useState, useEffect, useRef } from "react";
import { SOCIALS } from "../data/data";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const IcoHome     = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const IcoUser     = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const IcoWrench   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>;
const IcoFolder   = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>;
const IcoAward    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>;
const IcoMail     = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const IcoGithub   = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>;
const IcoLinkedin = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
const IcoBehance  = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.69.752-.64.15-1.31.226-2.01.226H0V4.51h6.938v-.007zM16.94 16.665c.44.428 1.073.643 1.894.643.59 0 1.1-.148 1.53-.447.428-.29.7-.604.814-.94h2.96c-.474 1.467-1.2 2.52-2.183 3.15-.977.625-2.16.937-3.55.937-1.37 0-2.58-.266-3.556-.8-.975-.534-1.737-1.285-2.26-2.26-.52-.97-.78-2.085-.78-3.343 0-1.22.27-2.315.8-3.275.534-.96 1.28-1.71 2.24-2.246.95-.534 2.05-.8 3.28-.8 1.34 0 2.52.285 3.47.854.94.57 1.64 1.35 2.07 2.34.44.987.63 2.107.56 3.36H15.43c0 .84.225 1.48.665 1.906l.845.871zM14.75 10.09c-.35.38-.57.924-.64 1.63h5.47c-.07-.724-.29-1.27-.64-1.64-.35-.365-.835-.55-1.45-.55-.62 0-1.1.19-1.45.56h-.29zM9.12 12.854c.32-.23.495-.6.495-1.1 0-.5-.175-.87-.51-1.1-.34-.224-.78-.34-1.31-.34H3.04v2.92h4.8c.55 0 .97-.114 1.28-.38zm.24 4.514c.36-.27.54-.685.54-1.24 0-.57-.195-1.005-.57-1.29-.38-.278-.88-.42-1.48-.42H3.04v3.4h4.78c.64 0 1.13-.15 1.49-.45h.05z"/></svg>;
const IcoSun     = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>;
const IcoMoon    = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>;

// ─── Config ───────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { id: "hero",           Icon: IcoHome,   label: "Home" },
  { id: "about",          Icon: IcoUser,   label: "About" },
  { id: "skills",         Icon: IcoWrench, label: "Skills" },
  { id: "projects",       Icon: IcoFolder, label: "Projects" },
  { id: "certifications", Icon: IcoAward,  label: "Certifications" },
  { id: "contact",        Icon: IcoMail,   label: "Contact" },
];

const SOCIAL_ITEMS = [
  { href: SOCIALS.github,   Icon: IcoGithub,   label: "GitHub" },
  { href: SOCIALS.linkedin, Icon: IcoLinkedin, label: "LinkedIn" },
  { href: SOCIALS.behance,  Icon: IcoBehance,  label: "Behance" },
];

// ─── Single dock button ───────────────────────────────────────────────────────
function DockBtn({ Icon, label, onClick, active, dark, mouseX }) {
  const [hov, setHov] = useState(false);
  const ref = useRef(null);

  const fg      = dark ? "#ffffff" : "#111111";
  const fgMuted = dark ? "rgba(255,255,255,0.40)" : "rgba(0,0,0,0.36)";
  const activeBg = dark ? "rgba(255,255,255,0.13)" : "rgba(0,0,0,0.10)";
  const hovBg    = dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.06)";
  const tipBg    = dark ? "rgba(12,12,18,0.97)"    : "rgba(248,248,253,0.98)";
  const tipBdr   = dark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.09)";

  // Framer motion dock logic
  const defaultMouseX = useMotionValue(Infinity);
  const currentMouseX = mouseX ?? defaultMouseX;

  const distanceCalc = useTransform(currentMouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const baseSize = 36;
  const targetSize = 52;
  const distance = 135;

  const sizeTransform = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [baseSize, targetSize, baseSize]
  );

  const scaleSize = useSpring(sizeTransform, {
    mass: 0.05,
    stiffness: 450,
    damping: 15,
  });

  const iconScale = useTransform(scaleSize, [baseSize, targetSize], [1, 1.5]);

  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>

      {/* Tooltip — always above the icon */}
      {hov && (
        <div style={{
          position:    "absolute",
          bottom:      "calc(100% + 12px)",
          left:        "50%",
          transform:   "translateX(-50%)",
          background:  tipBg,
          border:      `1px solid ${tipBdr}`,
          borderRadius: 8,
          padding:     "4px 10px",
          fontSize:    11,
          fontWeight:  600,
          fontFamily:  "'DM Sans', sans-serif",
          letterSpacing: "0.02em",
          color:       fg,
          whiteSpace:  "nowrap",
          pointerEvents: "none",
          zIndex:      30,
          boxShadow:   dark ? "0 6px 18px rgba(0,0,0,0.5)" : "0 4px 12px rgba(0,0,0,0.12)",
          animation:   "tipIn 0.12s cubic-bezier(.34,1.56,.64,1) both",
        }}>
          {label}
          <span style={{
            position:  "absolute", top: "100%", left: "50%",
            transform: "translateX(-50%)",
            width: 0, height: 0,
            borderLeft:  "4px solid transparent",
            borderRight: "4px solid transparent",
            borderTop:   `4px solid ${tipBg}`,
          }} />
        </div>
      )}

      {/* Button — sizes via framer-motion */}
      <motion.button
        ref={ref}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        onClick={onClick}
        style={{
          width:   scaleSize,
          height:  scaleSize,
          flexShrink: 0,
          borderRadius: "50%",
          border:  "none",
          outline: "none",
          cursor:  "pointer",
          display: "flex",
          alignItems:     "center",
          justifyContent: "center",
          background: active ? activeBg : hov ? hovBg : "transparent",
          color:      active || hov ? fg : fgMuted,
          transition: "background 0.18s ease, color 0.18s ease",
          zIndex:     hov ? 2 : 1,
          position:   "relative",
        }}
      >
        <motion.span style={{ 
          width: 17, 
          height: 17, 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          scale: iconScale
        }}>
          <Icon />
        </motion.span>
      </motion.button>
    </div>
  );
}

// ─── Separator ────────────────────────────────────────────────────────────────
function Sep({ dark }) {
  return (
    <div style={{
      width:      1,
      height:     24,
      background: dark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.2)",
      flexShrink: 0,
      alignSelf:  "center",
      margin:     "0 4px",
    }} />
  );
}

// ─── TopNav ───────────────────────────────────────────────────────────────────
export function TopNav({ active, dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [anyHov,   setAnyHov]   = useState(false);
  const mouseX = useMotionValue(Infinity);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const glass = {
    background: dark
      ? scrolled ? "rgba(10, 10, 16, 0.35)" : "rgba(10, 10, 16, 0.34)"
      : scrolled ? "rgba(238,238,246,0.90)" : "rgba(238,238,246,0.68)",
    backdropFilter:       "blur(24px) saturate(180%)",
    WebkitBackdropFilter: "blur(24px) saturate(180%)",
    border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.09)"}`,
    borderRadius: 15,
    boxShadow: dark
      ? "0 8px 36px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)"
      : "0 6px 28px rgba(0,0,0,0.09), inset 0 1px 0 rgba(255,255,255,0.65)",
    transition: "background 0.15s ease, box-shadow 0.15s ease, padding 0.1s ease-out, gap 0.1s ease-out",
  };

  return (
    <>
      <style>{`
        @keyframes tipIn {
          from { opacity: 0; transform: translateX(-50%) translateY(5px) scale(0.92); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0)   scale(1); }
        }
      `}</style>

      <motion.nav
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseEnter={() => setAnyHov(true)}
        onMouseLeave={() => {
          setAnyHov(false);
          mouseX.set(Infinity);
        }}
        style={{
          position:  "fixed",
          top:       36,
          left:      "50%",
          transform: "translateX(-50%)",
          zIndex:    1000,
          display:   "flex",
          alignItems: "center",
          height:    58, // Fixed height to prevent vertical stretching
          gap:     anyHov ? 18 : 10,
          padding: anyHov ? "0 20px" : "0 12px",
          ...glass,
        }}
      >
        {NAV_ITEMS.map(({ id, Icon, label }) => (
          <DockBtn key={id} Icon={Icon} label={label} onClick={() => scrollTo(id)} active={active === id} dark={dark} mouseX={mouseX} />
        ))}

        <Sep dark={dark} />

        {SOCIAL_ITEMS.map(({ href, Icon, label }) => (
          <DockBtn key={href} Icon={Icon} label={label} onClick={() => window.open(href, "_blank")} active={false} dark={dark} mouseX={mouseX} />
        ))}

        <Sep dark={dark} />

        <DockBtn
          Icon={dark ? IcoSun : IcoMoon}
          label={dark ? "Light mode" : "Dark mode"}
          onClick={() => setDark(!dark)}
          active={false}
          dark={dark}
          mouseX={mouseX}
        />
      </motion.nav>
    </>
  );
}

export { TopNav as BottomNav };