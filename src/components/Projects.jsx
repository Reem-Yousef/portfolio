import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { useTranslation } from "react-i18next";
import { PROJECTS } from "../data/data";

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const IcoGithub  = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>;
const IcoExtLink = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>;
const IcoBehance = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.69.752-.64.15-1.31.226-2.01.226H0V4.51h6.938v-.007zM16.94 16.665c.44.428 1.073.643 1.894.643.59 0 1.1-.148 1.53-.447.428-.29.7-.604.814-.94h2.96c-.474 1.467-1.2 2.52-2.183 3.15-.977.625-2.16.937-3.55.937-1.37 0-2.58-.266-3.556-.8-.975-.534-1.737-1.285-2.26-2.26-.52-.97-.78-2.085-.78-3.343 0-1.22.27-2.315.8-3.275.534-.96 1.28-1.71 2.24-2.246.95-.534 2.05-.8 3.28-.8 1.34 0 2.52.285 3.47.854.94.57 1.64 1.35 2.07 2.34.44.987.63 2.107.56 3.36H15.43c0 .84.225 1.48.665 1.906l.845.871zM14.75 10.09c-.35.38-.57.924-.64 1.63h5.47c-.07-.724-.29-1.27-.64-1.64-.35-.365-.835-.55-1.45-.55-.62 0-1.1.19-1.45.56h-.29zM9.12 12.854c.32-.23.495-.6.495-1.1 0-.5-.175-.87-.51-1.1-.34-.224-.78-.34-1.31-.34H3.04v2.92h4.8c.55 0 .97-.114 1.28-.38zm.24 4.514c.36-.27.54-.685.54-1.24 0-.57-.195-1.005-.57-1.29-.38-.278-.88-.42-1.48-.42H3.04v3.4h4.78c.64 0 1.13-.15 1.49-.45h.05z"/></svg>;

function ProjectCard({ project: p, index, visible, dark }) {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const [hov, setHov] = useState(false);

  const isInProgress = p.status === "in-progress";
  const isDesign     = p.type === "design";
  const githubLinks  = Array.isArray(p.github)
    ? p.github
    : p.github && p.github !== "#" ? [p.github] : [];
  const hasDemo    = p.demo    && p.demo    !== "#";
  const hasBehance = p.behance && p.behance !== "#";

  // ترجمة العنوان والوصف — لو مفيش id يعرض الأصل
  const cardTitle = p.id ? t(`projects.items.${p.id}.title`, { defaultValue: p.title }) : p.title;
  const cardDesc  = p.id ? t(`projects.items.${p.id}.desc`,  { defaultValue: p.desc  }) : p.desc;

  // ترجمة نصوص الأزرار
  const labelFrontend   = t("projects.frontend");
  const labelBackend    = t("projects.backend");
  const labelViewCode   = t("projects.viewCode");
  const labelViewDemo   = t("projects.viewDemo");
  const labelComingSoon = t("projects.comingSoon");

  // theme-aware colors
  const fg       = dark ? "#ffffff"                : "#000000";
  const fgMuted  = dark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.7)";
  const tagBg    = dark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.4)";
  const tagBdr   = dark ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.6)";
  const tagColor = dark ? "rgba(255,255,255,0.5)"  : "rgba(0,0,0,0.8)";
  const cardBg   = dark
    ? hov ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)"
    : hov ? "rgba(255,255,255,0.4)"  : "rgba(255,255,255,0.25)";
  const cardBdr  = dark
    ? hov ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.12)"
    : hov ? "rgba(255,255,255,0.6)"  : "rgba(255,255,255,0.4)";
  const getThemeColor = (c) => {
    if (dark) return c;
    const map = {
      "#22d3ee": "#0891b2", // Cyan
      "#e879f9": "#c026d3", // Fuchsia
      "#4ade80": "#16a34a", // Green
      "#fb923c": "#ea580c", // Orange
      "#f472b6": "#db2777", // Pink
      "#a78bfa": "#7c3aed", // Violet
      "#fbbf24": "#d97706", // Amber/Yellow
    };
    return map[c] || c;
  };

  const btnBg    = dark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.5)";
  const btnBdr   = dark ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.7)";
  const btnColor = dark ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.85)";
  const font     = isAr ? "'Cairo', sans-serif" : "'DM Sans', sans-serif";

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background:    cardBg,
        border:        `1px solid ${cardBdr}`,
        borderRadius:  20,
        overflow:      "hidden",
        opacity:       visible ? 1 : 0,
        transform:     visible ? "none" : "translateY(40px)",
        transition:    `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s, border-color 0.3s, background 0.3s`,
        display:       "flex",
        flexDirection: "column",
        position:      "relative",
        direction:     isAr ? "rtl" : "ltr",
      }}
    >
      {/* ── In-Progress ribbon ── */}
      {isInProgress && (
        <div style={{
          position:      "absolute",
          top:           14,
          // في العربي الريبون يبقى على اليسار
          [isAr ? "left" : "right"]: -22,
          background:    "rgba(251,191,36,0.92)",
          color:         "#000",
          fontSize:      10, fontWeight: 700,
          fontFamily:    font,
          letterSpacing: "0.08em",
          padding:       "3px 36px",
          transform:     isAr ? "rotate(-35deg)" : "rotate(35deg)",
          zIndex:        3,
          textTransform: "uppercase",
        }}>
          {isAr ? "قيد التطوير" : "In Progress"}
        </div>
      )}

      {/* ── Image ── */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {["topLeft", "topRight"].map(pos => (
          <span key={pos} style={{
            position:  "absolute", top: 8,
            [pos === "topLeft" ? "left" : "right"]: 8,
            color:     "rgba(255,255,255,0.35)",
            fontSize:  16, lineHeight: 1, zIndex: 2,
          }}>+</span>
        ))}

        <img
          src={p.img} alt={cardTitle}
          style={{
            width:      "100%", height: 200, objectFit: "cover",
            filter:     isInProgress
              ? "brightness(0.5) saturate(0.5)"
              : hov ? "brightness(1.05)" : "brightness(0.72)",
            transition: "filter 0.35s ease",
            display:    "block",
          }}
        />

        {isDesign && (
          <div style={{
            position:     "absolute", bottom: 10,
            [isAr ? "right" : "left"]: 12,
            zIndex:       2,
            background:   "rgba(232,121,249,0.18)",
            border:       "1px solid rgba(232,121,249,0.35)",
            borderRadius: 100, padding: "3px 10px",
            fontSize:     11, fontWeight: 600,
            fontFamily:   font,
            color:        "#e879f9",
          }}>
            UI/UX Design
          </div>
        )}
      </div>

      {/* ── Content ── */}
      <div style={{ padding: "20px 24px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{
          fontFamily:    isAr ? "'Cairo', sans-serif" : "'Syne', sans-serif",
          fontWeight:    700,
          fontSize:      19, color: fg,
          margin:        "0 0 10px",
          letterSpacing: isAr ? 0 : -0.3,
        }}>
          {cardTitle}
        </h3>

        <p style={{
          fontFamily:   font, fontSize: 14,
          color:        fgMuted, lineHeight: 1.7,
          marginBottom: 16, flex: 1,
        }}>
          {cardDesc}
        </p>

        {/* Tags — أسماء التقنيات بتفضل إنجليزي دايماً */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
          {p.tags.map(tag => (
            <span key={tag} style={{
              background:   tagBg, border: `1px solid ${tagBdr}`,
              borderRadius: 100, padding: "3px 12px",
              fontFamily:   "'DM Sans', sans-serif",
              fontSize:     12, color: tagColor,
            }}>{tag}</span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>

          {/* GitHub — واحد أو اتنين */}
          {githubLinks.map((link, i) => (
            <a key={i} href={link} target="_blank" rel="noreferrer"
              style={{
                display:      "flex", alignItems: "center", gap: 6,
                background:   btnBg, border: `1px solid ${btnBdr}`,
                borderRadius: 100, padding: "7px 15px",
                fontFamily:   font, fontSize: 13,
                color:        btnColor, textDecoration: "none",
                transition:   "background 0.2s, color 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = dark ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.7)";
                e.currentTarget.style.color = fg;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = btnBg;
                e.currentTarget.style.color = btnColor;
              }}
            >
              <IcoGithub />
              {githubLinks.length > 1
                ? (i === 0 ? labelFrontend : labelBackend)
                : labelViewCode}
            </a>
          ))}

          {/* Live Demo */}
          {hasDemo && (
            <a href={p.demo} target="_blank" rel="noreferrer"
              style={{
                display:      "flex", alignItems: "center", gap: 6,
                background:   "rgba(34,211,238,0.06)",
                border:       "1px solid rgba(34,211,238,0.22)",
                borderRadius: 100, padding: "7px 15px",
                fontFamily:   font, fontSize: 13,
                color:        getThemeColor("#22d3ee"), textDecoration: "none",
                transition:   "background 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = dark ? "rgba(34,211,238,0.13)" : "rgba(34,211,238,0.2)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(34,211,238,0.06)"}
            >
              <IcoExtLink /> {labelViewDemo}
            </a>
          )}

          {/* Behance */}
          {hasBehance && (
            <a href={p.behance} target="_blank" rel="noreferrer"
              style={{
                display:      "flex", alignItems: "center", gap: 6,
                background:   "rgba(232,121,249,0.06)",
                border:       "1px solid rgba(232,121,249,0.22)",
                borderRadius: 100, padding: "7px 15px",
                fontFamily:   font, fontSize: 13,
                color:        getThemeColor("#e879f9"), textDecoration: "none",
                transition:   "background 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = dark ? "rgba(232,121,249,0.13)" : "rgba(232,121,249,0.2)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(232,121,249,0.06)"}
            >
              <IcoBehance /> Behance
            </a>
          )}

          {/* Coming Soon */}
          {isInProgress && (
            <span style={{
              display:      "flex", alignItems: "center", gap: 6,
              background:   "rgba(251,191,36,0.06)",
              border:       "1px solid rgba(251,191,36,0.22)",
              borderRadius: 100, padding: "7px 15px",
              fontFamily:   font, fontSize: 13,
              color:        getThemeColor("#fbbf24"),
            }}>
              ⏳ {labelComingSoon}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function Projects({ dark }) {
  const [ref, visible] = useInView();
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const fg    = dark ? "#ffffff"                : "#000000";
  const fgDim = dark ? "rgba(255,255,255,0.33)" : "rgba(0,0,0,0.5)";
  const fgSub = dark ? "rgba(255,255,255,0.4)"  : "rgba(0,0,0,0.7)";

  return (
    <section id="projects" style={{ padding: "100px 6vw", position: "relative", zIndex: 1 }}>
      <div ref={ref}>
        <div style={{
          textAlign:  "center", marginBottom: 64,
          opacity:    visible ? 1 : 0,
          transform:  visible ? "none" : "translateY(30px)",
          transition: "all 0.6s ease",
          direction:  isAr ? "rtl" : "ltr",
        }}>
          <h2 style={{
            fontFamily:    isAr ? "'Cairo', sans-serif" : "'Syne', sans-serif",
            fontWeight:    700,
            fontSize:      "clamp(32px, 5vw, 52px)", color: fg,
            letterSpacing: isAr ? 0 : -1.5,
            margin:        "0 0 16px",
          }}>
            {t("projects.title")}{" "}
            <span style={{ color: fgDim }}>{t("projects.titleAccent")}</span>
          </h2>
          <p style={{
            fontFamily: isAr ? "'Cairo', sans-serif" : "'DM Sans', sans-serif",
            fontSize:   16, color: fgSub,
            maxWidth:   520, margin: "0 auto",
          }}>
            {t("projects.subtitle")}
          </p>
        </div>

        <div style={{
          display:             "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
          gap:                 24, maxWidth: 1200, margin: "0 auto",
        }}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} visible={visible} dark={dark} />
          ))}
        </div>
      </div>
    </section>
  );
}