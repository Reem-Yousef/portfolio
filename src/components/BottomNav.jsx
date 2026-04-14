import { useState } from "react";
import { Dock, DockIcon } from "./ui/Dock";
import { SOCIALS } from "../data/data";

const IcoHome = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const IcoUser = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const IcoWrench = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>;
const IcoFolder = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>;
const IcoAward = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>;
const IcoMail = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const IcoGithub = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>;
const IcoLinkedin = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
const IcoBehance = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.69.752-.64.15-1.31.226-2.01.226H0V4.51h6.938v-.007zM16.94 16.665c.44.428 1.073.643 1.894.643.59 0 1.1-.148 1.53-.447.428-.29.7-.604.814-.94h2.96c-.474 1.467-1.2 2.52-2.183 3.15-.977.625-2.16.937-3.55.937-1.37 0-2.58-.266-3.556-.8-.975-.534-1.737-1.285-2.26-2.26-.52-.97-.78-2.085-.78-3.343 0-1.22.27-2.315.8-3.275.534-.96 1.28-1.71 2.24-2.246.95-.534 2.05-.8 3.28-.8 1.34 0 2.52.285 3.47.854.94.57 1.64 1.35 2.07 2.34.44.987.63 2.107.56 3.36H15.43c0 .84.225 1.48.665 1.906l.845.871zM14.75 10.09c-.35.38-.57.924-.64 1.63h5.47c-.07-.724-.29-1.27-.64-1.64-.35-.365-.835-.55-1.45-.55-.62 0-1.1.19-1.45.56h-.29zM9.12 12.854c.32-.23.495-.6.495-1.1 0-.5-.175-.87-.51-1.1-.34-.224-.78-.34-1.31-.34H3.04v2.92h4.8c.55 0 .97-.114 1.28-.38zm.24 4.514c.36-.27.54-.685.54-1.24 0-.57-.195-1.005-.57-1.29-.38-.278-.88-.42-1.48-.42H3.04v3.4h4.78c.64 0 1.13-.15 1.49-.45h.05z"/></svg>;

function WithTooltip({ label, children }) {
  const [show, setShow] = useState(false);
  return (
    <div style={{ position: "relative" }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div style={{
          position: "absolute", bottom: "calc(100% + 8px)", left: "50%",
          transform: "translateX(-50%)", background: "rgba(20,20,30,0.95)",
          border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8,
          padding: "4px 10px", fontFamily: "'DM Sans', sans-serif",
          fontSize: 12, color: "#fff", whiteSpace: "nowrap",
          pointerEvents: "none", zIndex: 10,
        }}>{label}</div>
      )}
    </div>
  );
}

function Divider() {
  return <div style={{ width: 1, height: 22, background: "rgba(255,255,255,0.1)", margin: "0 4px", flexShrink: 0 }} />;
}

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

export function BottomNav({ active = "hero" }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const iconColor = (id) =>
    active === id ? "#fff" : "rgba(255,255,255,0.4)";

  return (
    <div style={{ position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)", zIndex: 1000 }}>
      <Dock>
        {NAV_ITEMS.map(({ id, Icon, label }) => (
          <WithTooltip key={id} label={label}>
            <DockIcon onClick={() => scrollTo(id)} style={{ color: iconColor(id), background: active === id ? "rgba(255,255,255,0.1)" : "none" }}>
              <Icon />
            </DockIcon>
          </WithTooltip>
        ))}
        <Divider />
        {SOCIAL_ITEMS.map(({ href, Icon, label }) => (
          <WithTooltip key={href} label={label}>
            <DockIcon onClick={() => window.open(href, "_blank")} style={{ color: "rgba(255,255,255,0.4)" }}>
              <Icon />
            </DockIcon>
          </WithTooltip>
        ))}
      </Dock>
    </div>
  );
}