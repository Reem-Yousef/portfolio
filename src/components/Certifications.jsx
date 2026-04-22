// import { useState } from "react";
// import { useInView } from "../hooks/useInView";
// import { CERTS } from "../data/data";

// // Duration pill color
// const durationColor = (d) => {
//   if (d.includes("1")) return "#facc15";   // gold for short
//   return "#4ade80";                         // green for longer
// };

// function CertCard({ cert, index, visible, dark }) {
//   const [hov, setHov] = useState(false);

//   const cardBg  = dark
//     ? hov ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.025)"
//     : hov ? "rgba(0,0,0,0.06)"       : "rgba(0,0,0,0.03)";
//   const cardBdr = dark
//     ? hov ? `1px solid ${cert.color}55` : "1px solid rgba(255,255,255,0.07)"
//     : hov ? `1px solid ${cert.color}66` : "1px solid rgba(0,0,0,0.08)";
//   const titleColor = dark ? "#fff" : "#111";
//   const subColor   = dark ? "rgba(255,255,255,0.42)" : "rgba(0,0,0,0.44)";
//   const linkColor  = cert.color;

//   return (
//     <div
//       onMouseEnter={() => setHov(true)}
//       onMouseLeave={() => setHov(false)}
//       style={{
//         borderRadius: 18,
//         padding: "28px 28px 24px",
//         background: cardBg,
//         border: cardBdr,
//         display: "flex",
//         flexDirection: "column",
//         gap: 20,
//         opacity: visible ? 1 : 0,
//         transform: visible ? "translateY(0)" : "translateY(28px)",
//         transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s, background 0.25s ease, border 0.25s ease`,
//         cursor: "default",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Subtle glow on hover */}
//       <div style={{
//         position: "absolute", inset: 0, borderRadius: 18, pointerEvents: "none",
//         background: hov ? `radial-gradient(ellipse at top left, ${cert.color}0d 0%, transparent 60%)` : "none",
//         transition: "background 0.35s ease",
//       }} />

//       {/* Top row: icon + title + duration badge */}
//       <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
//         {/* Icon circle */}
//         <div style={{
//           width: 46, height: 46, borderRadius: 13, flexShrink: 0,
//           background: `${cert.color}18`,
//           border: `1px solid ${cert.color}33`,
//           display: "flex", alignItems: "center", justifyContent: "center",
//           transition: "transform 0.25s cubic-bezier(.34,1.5,.64,1)",
//           transform: hov ? "scale(1.12) rotate(-4deg)" : "scale(1)",
//           color: cert.color,
//         }}>
//           <span
//             style={{ width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center" }}
//             dangerouslySetInnerHTML={{ __html: cert.icon }}
//           />
//         </div>

//         {/* Title + issuer */}
//         <div style={{ flex: 1 }}>
//           <h3 style={{
//             fontFamily: "'Syne', sans-serif",
//             fontWeight: 700, fontSize: 17,
//             color: titleColor, margin: "0 0 4px",
//             lineHeight: 1.2,
//           }}>
//             {cert.title}
//           </h3>
//           <span style={{
//             fontFamily: "'DM Sans', sans-serif",
//             fontSize: 13, color: subColor, fontWeight: 500,
//           }}>
//             {cert.issuer}
//           </span>
//         </div>

//         {/* Duration badge */}
//         <div style={{
//           flexShrink: 0,
//           background: `${durationColor(cert.duration)}18`,
//           border: `1px solid ${durationColor(cert.duration)}44`,
//           borderRadius: 100,
//           padding: "4px 12px",
//           fontFamily: "'DM Sans', sans-serif",
//           fontSize: 12, fontWeight: 700,
//           color: durationColor(cert.duration),
//           whiteSpace: "nowrap",
//         }}>
//           {cert.duration}
//         </div>
//       </div>

//       {/* Divider */}
//       <div style={{
//         height: 1,
//         background: dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)",
//       }} />

//       {/* View credential link */}
//       <div>
//         <a
//           href={cert.link}
//           target="_blank"
//           rel="noreferrer"
//           onClick={e => { if (cert.link.includes("YOUR_")) { e.preventDefault(); } }}
//           style={{
//             display: "inline-flex", alignItems: "center", gap: 8,
//             fontFamily: "'DM Sans', sans-serif",
//             fontSize: 13, fontWeight: 600,
//             color: cert.link.includes("YOUR_") ? subColor : linkColor,
//             textDecoration: "none",
//             background: cert.link.includes("YOUR_") ? "transparent" : `${cert.color}10`,
//             border: `1px solid ${cert.link.includes("YOUR_") ? (dark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.09)") : cert.color + "44"}`,
//             borderRadius: 100,
//             padding: "7px 16px",
//             transition: "background 0.2s ease, color 0.2s ease",
//             cursor: cert.link.includes("YOUR_") ? "default" : "pointer",
//           }}
//           onMouseEnter={e => {
//             if (!cert.link.includes("YOUR_"))
//               e.currentTarget.style.background = `${cert.color}22`;
//           }}
//           onMouseLeave={e => {
//             if (!cert.link.includes("YOUR_"))
//               e.currentTarget.style.background = `${cert.color}10`;
//           }}
//         >
//           {cert.link.includes("YOUR_") ? "Link coming soon" : "View Certificate ↗"}
//         </a>
//       </div>
//     </div>
//   );
// }

// export function Certifications({ dark }) {
//   const [ref, visible] = useInView();

//   const titleColor = dark ? "#fff" : "#111";
//   const subColor   = dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.42)";

//   return (
//     <section id="certifications" style={{ padding: "100px 6vw", position: "relative", zIndex: 1 }}>
//       <div ref={ref}>
//         {/* Header */}
//         <div style={{
//           textAlign: "center", marginBottom: 60,
//           opacity: visible ? 1 : 0,
//           transform: visible ? "none" : "translateY(30px)",
//           transition: "all 0.6s ease",
//         }}>
//           <h2 style={{
//             fontFamily: "'Syne', sans-serif",
//             fontWeight: 800,
//             fontSize: "clamp(32px, 5vw, 52px)",
//             color: titleColor,
//             letterSpacing: -1.5,
//             margin: "0 0 16px",
//           }}>
//             Certifications
//           </h2>
//           <p style={{
//             fontFamily: "'DM Sans', sans-serif",
//             fontSize: 16,
//             color: subColor,
//             maxWidth: 480,
//             margin: "0 auto",
//           }}>
//             Professional credentials earned through structured programs and hands-on training.
//           </p>
//         </div>

//         {/* Grid — 2 cols on wide, 1 col on narrow */}
//         <div style={{
//           maxWidth: 860,
//           margin: "0 auto",
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
//           gap: 16,
//         }}>
//           {CERTS.map((cert, i) => (
//             <CertCard key={cert.title} cert={cert} index={i} visible={visible} dark={dark} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import { useState } from "react";
// import { useInView } from "../hooks/useInView";
// import { CERTS } from "../data/data";

// const durationColor = (d) => d.includes("1") ? "#facc15" : "#4ade80";

// // ─── Placeholder when no image is provided ───────────────────────────────────
// function ImgPlaceholder({ cert, dark }) {
//   return (
//     <div style={{
//       width: "100%", height: "100%",
//       display: "flex", flexDirection: "column",
//       alignItems: "center", justifyContent: "center",
//       gap: 12,
//       background: dark
//         ? `linear-gradient(135deg, ${cert.color}12, ${cert.color}06)`
//         : `linear-gradient(135deg, ${cert.color}18, ${cert.color}08)`,
//     }}>
//       {/* Big SVG icon */}
//       <span
//         style={{ width: 48, height: 48, color: cert.color, opacity: 0.7, display: "flex" }}
//         dangerouslySetInnerHTML={{ __html: cert.icon.replace(/strokeWidth="1\.8"/, 'strokeWidth="1.4"') }}
//       />
//       <span style={{
//         fontFamily: "'DM Sans', sans-serif",
//         fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
//         color: cert.color, opacity: 0.55, textTransform: "uppercase",
//       }}>
//         Certificate
//       </span>
//     </div>
//   );
// }

// // ─── Single card ─────────────────────────────────────────────────────────────
// function CertCard({ cert, index, visible, dark }) {
//   const [hov, setHov] = useState(false);

//   const hasLink = !cert.link.includes("YOUR_");

//   const cardBg  = dark
//     ? hov ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.025)"
//     : hov ? "rgba(0,0,0,0.05)"       : "rgba(0,0,0,0.025)";
//   const cardBdr = dark
//     ? hov ? `1px solid ${cert.color}55` : "1px solid rgba(255,255,255,0.07)"
//     : hov ? `1px solid ${cert.color}66` : "1px solid rgba(0,0,0,0.08)";
//   const titleColor = dark ? "#fff"                     : "#111";
//   const subColor   = dark ? "rgba(255,255,255,0.42)"   : "rgba(0,0,0,0.44)";
//   const divColor   = dark ? "rgba(255,255,255,0.07)"   : "rgba(0,0,0,0.07)";

//   return (
//     <div
//       onMouseEnter={() => setHov(true)}
//       onMouseLeave={() => setHov(false)}
//       style={{
//         borderRadius: 20,
//         overflow: "hidden",
//         display: "flex",
//         flexDirection: "row",
//         background: cardBg,
//         border: cardBdr,
//         position: "relative",
//         opacity:    visible ? 1 : 0,
//         transform:  visible ? "translateY(0)" : "translateY(28px)",
//         transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s, background 0.25s ease, border 0.25s ease`,
//         minHeight: 160,
//       }}
//     >
//       {/* Glow */}
//       <div style={{
//         position: "absolute", inset: 0, pointerEvents: "none",
//         background: hov ? `radial-gradient(ellipse at left, ${cert.color}0e 0%, transparent 60%)` : "none",
//         transition: "background 0.35s ease",
//         zIndex: 0,
//       }} />

//       {/* ── Left: Certificate image ── */}
//       <div style={{
//         width: 200, minWidth: 200, flexShrink: 0,
//         position: "relative", overflow: "hidden",
//         borderRight: divColor ? `1px solid ${divColor}` : undefined,
//       }}>
//         {/* Colored accent strip */}
//         <div style={{
//           position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
//           background: cert.color, zIndex: 2,
//         }} />

//         {cert.img ? (
//           <img
//             src={cert.img}
//             alt={cert.title}
//             style={{
//               width: "100%", height: "100%",
//               objectFit: "cover",
//               display: "block",
//               transition: "transform 0.4s ease",
//               transform: hov ? "scale(1.04)" : "scale(1)",
//             }}
//           />
//         ) : (
//           <ImgPlaceholder cert={cert} dark={dark} />
//         )}
//       </div>

//       {/* ── Right: Info ── */}
//       <div style={{
//         flex: 1, padding: "22px 24px",
//         display: "flex", flexDirection: "column",
//         justifyContent: "space-between", gap: 14,
//         position: "relative", zIndex: 1,
//       }}>
//         {/* Top: icon + title + duration */}
//         <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
//           {/* Icon badge */}
//           <div style={{
//             width: 40, height: 40, borderRadius: 11, flexShrink: 0,
//             background: `${cert.color}18`,
//             border: `1px solid ${cert.color}33`,
//             display: "flex", alignItems: "center", justifyContent: "center",
//             color: cert.color,
//           }}>
//             <span
//               style={{ width: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center" }}
//               dangerouslySetInnerHTML={{ __html: cert.icon }}
//             />
//           </div>

//           <div style={{ flex: 1 }}>
//             <h3 style={{
//               fontFamily: "'Syne', sans-serif", fontWeight: 700,
//               fontSize: 17, color: titleColor,
//               margin: "0 0 4px", lineHeight: 1.2,
//             }}>
//               {cert.title}
//             </h3>
//             <span style={{
//               fontFamily: "'DM Sans', sans-serif",
//               fontSize: 13, color: subColor, fontWeight: 500,
//             }}>
//               {cert.issuer}
//             </span>
//           </div>

//           {/* Duration badge */}
//           <div style={{
//             flexShrink: 0,
//             background: `${durationColor(cert.duration)}15`,
//             border: `1px solid ${durationColor(cert.duration)}40`,
//             borderRadius: 100, padding: "4px 12px",
//             fontFamily: "'DM Sans', sans-serif",
//             fontSize: 12, fontWeight: 700,
//             color: durationColor(cert.duration), whiteSpace: "nowrap",
//           }}>
//             {cert.duration}
//           </div>
//         </div>

//         {/* Divider */}
//         <div style={{ height: 1, background: divColor }} />

//         {/* View credential button */}
//         <div>
//           <a
//             href={hasLink ? cert.link : undefined}
//             target={hasLink ? "_blank" : undefined}
//             rel="noreferrer"
//             style={{
//               display: "inline-flex", alignItems: "center", gap: 8,
//               fontFamily: "'DM Sans', sans-serif",
//               fontSize: 13, fontWeight: 600,
//               color: hasLink ? cert.color : subColor,
//               textDecoration: "none",
//               background: hasLink ? `${cert.color}12` : "transparent",
//               border: `1px solid ${hasLink ? cert.color + "44" : (dark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.09)")}`,
//               borderRadius: 100, padding: "7px 16px",
//               cursor: hasLink ? "pointer" : "default",
//               transition: "background 0.2s ease",
//             }}
//             onMouseEnter={e => { if (hasLink) e.currentTarget.style.background = `${cert.color}22`; }}
//             onMouseLeave={e => { if (hasLink) e.currentTarget.style.background = `${cert.color}12`; }}
//           >
//             {hasLink ? (
//               <>
//                 View Credential
//                 <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
//                   <polyline points="15 3 21 3 21 9"/>
//                   <line x1="10" y1="14" x2="21" y2="3"/>
//                 </svg>
//               </>
//             ) : "Link coming soon"}
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Section ─────────────────────────────────────────────────────────────────
// export function Certifications({ dark }) {
//   const [ref, visible] = useInView();

//   const titleColor = dark ? "#fff" : "#111";
//   const subColor   = dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.42)";

//   return (
//     <section id="certifications" style={{ padding: "100px 6vw", position: "relative", zIndex: 1 }}>
//       <div ref={ref}>
//         {/* Header */}
//         <div style={{
//           textAlign: "center", marginBottom: 60,
//           opacity: visible ? 1 : 0,
//           transform: visible ? "none" : "translateY(30px)",
//           transition: "all 0.6s ease",
//         }}>
//           <h2 style={{
//             fontFamily: "'Syne', sans-serif", fontWeight: 800,
//             fontSize: "clamp(32px, 5vw, 52px)", color: titleColor,
//             letterSpacing: -1.5, margin: "0 0 16px",
//           }}>
//             Certifications
//           </h2>
//           <p style={{
//             fontFamily: "'DM Sans', sans-serif", fontSize: 16,
//             color: subColor, maxWidth: 480, margin: "0 auto",
//           }}>
//             Professional credentials earned through structured programs and hands-on training.
//           </p>
//         </div>

//         {/* List — single column, each card is horizontal */}
//         <div style={{
//           maxWidth: 820, margin: "0 auto",
//           display: "flex", flexDirection: "column", gap: 16,
//         }}>
//           {CERTS.map((cert, i) => (
//             <CertCard key={cert.title} cert={cert} index={i} visible={visible} dark={dark} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { CERTS } from "../data/data";

const durationColor = (d) => d.includes("1") ? "#facc15" : "#4ade80";

// ─── Placeholder when no image is provided ───────────────────────────────────
function ImgPlaceholder({ cert, dark }) {
  return (
    <div style={{
      width: "100%", height: "100%",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      gap: 12,
      background: dark
        ? `linear-gradient(135deg, ${cert.color}12, ${cert.color}06)`
        : `linear-gradient(135deg, ${cert.color}18, ${cert.color}08)`,
    }}>
      {/* Big SVG icon */}
      <span
        style={{ width: 48, height: 48, color: cert.color, opacity: 0.7, display: "flex" }}
        dangerouslySetInnerHTML={{ __html: cert.icon.replace(/strokeWidth="1\.8"/, 'strokeWidth="1.4"') }}
      />
      <span style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
        color: cert.color, opacity: 0.55, textTransform: "uppercase",
      }}>
        Certificate
      </span>
    </div>
  );
}

// ─── Single card ─────────────────────────────────────────────────────────────
function CertCard({ cert, index, visible, dark }) {
  const [hov, setHov] = useState(false);

  const hasLink = !cert.link.includes("YOUR_");

  const cardBg  = dark
    ? hov ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.025)"
    : hov ? "rgba(0,0,0,0.05)"       : "rgba(0,0,0,0.025)";
  const cardBdr = dark
    ? hov ? `1px solid ${cert.color}55` : "1px solid rgba(255,255,255,0.07)"
    : hov ? `1px solid ${cert.color}66` : "1px solid rgba(0,0,0,0.08)";
  const titleColor = dark ? "#fff"                     : "#111";
  const subColor   = dark ? "rgba(255,255,255,0.42)"   : "rgba(0,0,0,0.44)";
  const divColor   = dark ? "rgba(255,255,255,0.07)"   : "rgba(0,0,0,0.07)";

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        borderRadius: 20,
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        background: cardBg,
        border: cardBdr,
        position: "relative",
        opacity:    visible ? 1 : 0,
        transform:  visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s, background 0.25s ease, border 0.25s ease`,
        minHeight: 160,
      }}
    >
      {/* Glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: hov ? `radial-gradient(ellipse at left, ${cert.color}0e 0%, transparent 60%)` : "none",
        transition: "background 0.35s ease",
        zIndex: 0,
      }} />

      {/* ── Left: Certificate image ── */}
      <div style={{
        width: 200, minWidth: 200, flexShrink: 0,
        position: "relative", overflow: "hidden",
        borderRight: divColor ? `1px solid ${divColor}` : undefined,
      }}>
        {/* Colored accent strip */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
          background: cert.color, zIndex: 2,
        }} />

        {cert.img ? (
          <>
            <img
              src={cert.img}
              alt={cert.title}
              style={{
                width: "100%", height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.4s ease",
                transform: hov ? "scale(1.06)" : "scale(1)",
                filter: "brightness(0.55) saturate(0.7)",
              }}
            />
            {/* Color tint overlay — ties image to cert's accent color */}
            <div style={{
              position: "absolute", inset: 0, zIndex: 1,
              background: `linear-gradient(160deg, ${cert.color}55 0%, ${cert.color}18 50%, transparent 100%)`,
              mixBlendMode: "normal",
              pointerEvents: "none",
            }} />
            {/* Fade to right so it blends into the card */}
            <div style={{
              position: "absolute", inset: 0, zIndex: 1,
              background: "linear-gradient(to right, transparent 55%, rgba(0,0,0,0.55) 100%)",
              pointerEvents: "none",
            }} />
          </>
        ) : (
          <ImgPlaceholder cert={cert} dark={dark} />
        )}
      </div>

      {/* ── Right: Info ── */}
      <div style={{
        flex: 1, padding: "22px 24px",
        display: "flex", flexDirection: "column",
        justifyContent: "space-between", gap: 14,
        position: "relative", zIndex: 1,
      }}>
        {/* Top: icon + title + duration */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
          {/* Icon badge */}
          <div style={{
            width: 40, height: 40, borderRadius: 11, flexShrink: 0,
            background: `${cert.color}18`,
            border: `1px solid ${cert.color}33`,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: cert.color,
          }}>
            <span
              style={{ width: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center" }}
              dangerouslySetInnerHTML={{ __html: cert.icon }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <h3 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 700,
              fontSize: 17, color: titleColor,
              margin: "0 0 4px", lineHeight: 1.2,
            }}>
              {cert.title}
            </h3>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13, color: subColor, fontWeight: 500,
            }}>
              {cert.issuer}
            </span>
          </div>

          {/* Duration badge */}
          <div style={{
            flexShrink: 0,
            background: `${durationColor(cert.duration)}15`,
            border: `1px solid ${durationColor(cert.duration)}40`,
            borderRadius: 100, padding: "4px 12px",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12, fontWeight: 700,
            color: durationColor(cert.duration), whiteSpace: "nowrap",
          }}>
            {cert.duration}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: divColor }} />

        {/* View credential button */}
        <div>
          <a
            href={hasLink ? cert.link : undefined}
            target={hasLink ? "_blank" : undefined}
            rel="noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13, fontWeight: 600,
              color: hasLink ? cert.color : subColor,
              textDecoration: "none",
              background: hasLink ? `${cert.color}12` : "transparent",
              border: `1px solid ${hasLink ? cert.color + "44" : (dark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.09)")}`,
              borderRadius: 100, padding: "7px 16px",
              cursor: hasLink ? "pointer" : "default",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={e => { if (hasLink) e.currentTarget.style.background = `${cert.color}22`; }}
            onMouseLeave={e => { if (hasLink) e.currentTarget.style.background = `${cert.color}12`; }}
          >
            {hasLink ? (
              <>
                View Credential
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </>
            ) : "Link coming soon"}
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────
export function Certifications({ dark }) {
  const [ref, visible] = useInView();

  const titleColor = dark ? "#fff" : "#111";
  const subColor   = dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.42)";

  return (
    <section id="certifications" style={{ padding: "100px 6vw", position: "relative", zIndex: 1 }}>
      <div ref={ref}>
        {/* Header */}
        <div style={{
          textAlign: "center", marginBottom: 60,
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(30px)",
          transition: "all 0.6s ease",
        }}>
          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 700,
            fontSize: "clamp(32px, 5vw, 52px)", color: titleColor,
            letterSpacing: -1.5, margin: "0 0 16px",
          }}>
            Certifications
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 16,
            color: subColor, maxWidth: 480, margin: "0 auto",
          }}>
            Professional credentials earned through structured programs and hands-on training.
          </p>
        </div>

        {/* List — single column, each card is horizontal */}
        <div style={{
          maxWidth: 750, margin: "0 auto",
          display: "flex", flexDirection: "column", gap: 16,
        }}>
          {CERTS.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} visible={visible} dark={dark} />
          ))}
        </div>
      </div>
    </section>
  );
}