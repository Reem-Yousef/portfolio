import { useState, useEffect } from "react";
import { useInView } from "../hooks/useInView";
import { useTranslation } from "react-i18next";
import { CERTS } from "../data/data";

const durationColor = (d) => d.includes("1") ? "#facc15" : "#4ade80";

function ImgPlaceholder({ cert, dark, isAr }) {
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
      <span
        style={{ width: 48, height: 48, color: cert.color, opacity: 0.7, display: "flex" }}
        dangerouslySetInnerHTML={{ __html: cert.icon.replace(/strokeWidth="1\.8"/, 'strokeWidth="1.4"') }}
      />
      <span style={{
        fontFamily: isAr ? "'Cairo', sans-serif" : "'DM Sans', sans-serif",
        fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
        color: cert.color, opacity: 0.55, textTransform: "uppercase",
      }}>
        {isAr ? "شهادة" : "Certificate"}
      </span>
    </div>
  );
}

function CertCard({ cert, index, visible, dark, isMobile }) {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const font = isAr ? "'Cairo', sans-serif" : "'DM Sans', sans-serif";

  const [hov, setHov] = useState(false);
  const hasLink = !cert.link.includes("YOUR_");

  // ترجمة العنوان والـ issuer والـ duration من i18n لو في id
  const certTitle    = cert.id ? t(`certifications.items.${cert.id}.title`,    { defaultValue: cert.title    }) : cert.title;
  const certIssuer   = cert.id ? t(`certifications.items.${cert.id}.issuer`,   { defaultValue: cert.issuer   }) : cert.issuer;
  const certDuration = cert.id ? t(`certifications.items.${cert.id}.duration`, { defaultValue: cert.duration }) : cert.duration;

  const cardBg  = dark
    ? hov ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.025)"
    : hov ? "rgba(0,0,0,0.05)"       : "rgba(0,0,0,0.025)";
  const cardBdr = dark
    ? hov ? `1px solid ${cert.color}55` : "1px solid rgba(255,255,255,0.07)"
    : hov ? `1px solid ${cert.color}66` : "1px solid rgba(0,0,0,0.08)";
  const titleColor = dark ? "#fff"                   : "#111";
  const subColor   = dark ? "rgba(255,255,255,0.42)" : "rgba(0,0,0,0.44)";
  const divColor   = dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        borderRadius: 20,
        overflow: "hidden",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        background: cardBg,
        border: cardBdr,
        position: "relative",
        opacity:   visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s, background 0.25s ease, border 0.25s ease`,
        minHeight: isMobile ? "auto" : 160,
        direction: isAr ? "rtl" : "ltr",
      }}
    >
      {/* Glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: hov
          ? `radial-gradient(ellipse at ${isAr ? "right" : "left"}, ${cert.color}0e 0%, transparent 60%)`
          : "none",
        transition: "background 0.35s ease", zIndex: 0,
      }} />

      {/* Image */}
      <div style={{
        width: isMobile ? "100%" : 200,
        height: isMobile ? 180 : "auto",
        minWidth: isMobile ? "auto" : 200,
        flexShrink: 0,
        position: "relative",
        overflow: "hidden",
        borderRight: (!isMobile && !isAr) ? `1px solid ${divColor}` : undefined,
        borderLeft:  (!isMobile &&  isAr) ? `1px solid ${divColor}` : undefined,
        borderBottom: isMobile ? `1px solid ${divColor}` : undefined,
      }}>
        {/* Accent strip — يمين في عربي، شمال في إنجليزي */}
        <div style={{
          position: "absolute",
          [isAr ? "right" : "left"]: 0,
          top: 0,
          [isMobile ? "right" : "bottom"]: 0,
          [isMobile ? "height" : "width"]: 3,
          background: cert.color, zIndex: 2,
        }} />

        {cert.img ? (
          <>
            <img
              src={cert.img} alt={certTitle}
              style={{
                width: "100%", height: "100%",
                objectFit: "cover", display: "block",
                transition: "transform 0.4s ease",
                transform: hov ? "scale(1.06)" : "scale(1)",
                filter: "brightness(0.55) saturate(0.7)",
              }}
            />
            <div style={{
              position: "absolute", inset: 0, zIndex: 1,
              background: `linear-gradient(160deg, ${cert.color}55 0%, ${cert.color}18 50%, transparent 100%)`,
              pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute", inset: 0, zIndex: 1,
              background: isMobile
                ? "linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.55) 100%)"
                : isAr
                  ? "linear-gradient(to left, transparent 55%, rgba(0,0,0,0.55) 100%)"
                  : "linear-gradient(to right, transparent 55%, rgba(0,0,0,0.55) 100%)",
              pointerEvents: "none",
            }} />
          </>
        ) : (
          <ImgPlaceholder cert={cert} dark={dark} isAr={isAr} />
        )}
      </div>

      {/* Content */}
      <div style={{
        flex: 1,
        padding: isMobile ? "16px 18px" : "22px 24px",
        display: "flex", flexDirection: "column",
        justifyContent: "space-between", gap: 14,
        position: "relative", zIndex: 1,
      }}>
        {/* Top row */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
          {/* Icon badge */}
          <div style={{
            width: 40, height: 40, borderRadius: 11, flexShrink: 0,
            background: dark ? `${cert.color}18` : `${cert.color}35`,
            border: `1px solid ${cert.color}70`,
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
              fontFamily: isAr ? "'Cairo', sans-serif" : "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: isMobile ? 15 : 17, color: titleColor,
              margin: "0 0 4px", lineHeight: 1.2,
            }}>
              {certTitle}
            </h3>
            <span style={{
              fontFamily: font,
              fontSize: 13, color: subColor, fontWeight: 500,
            }}>
              {certIssuer}
            </span>
          </div>

          {/* Duration badge */}
          <div style={{
            flexShrink: 0,
            background: dark ? `${durationColor(cert.duration)}15` : `${durationColor(cert.duration)}35`,
            border: `1px solid ${durationColor(cert.duration)}90`,
            borderRadius: 100, padding: "4px 12px",
            fontFamily: font,
            fontSize: 12, fontWeight: 700,
            color: durationColor(cert.duration), whiteSpace: "nowrap",
          }}>
            {certDuration}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: divColor }} />

        {/* View credential */}
        <div>
          <a
            href={hasLink ? cert.link : undefined}
            target={hasLink ? "_blank" : undefined}
            rel="noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontFamily: font,
              fontSize: 13, fontWeight: 600,
              color: hasLink ? cert.color : subColor,
              textDecoration: "none",
              background: hasLink ? (dark ? `${cert.color}12` : `${cert.color}25`) : "transparent",
              border: `1px solid ${hasLink ? cert.color + (dark ? "44" : "99") : (dark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.09)")}`,
              borderRadius: 100, padding: "7px 16px",
              cursor: hasLink ? "pointer" : "default",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={e => { if (hasLink) e.currentTarget.style.background = `${cert.color}22`; }}
            onMouseLeave={e => { if (hasLink) e.currentTarget.style.background = dark ? `${cert.color}12` : `${cert.color}25`; }}
          >
            {hasLink ? (
              <>
                {t("certifications.viewCredential")}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </>
            ) : t("certifications.comingSoon")}
          </a>
        </div>
      </div>
    </div>
  );
}

export function Certifications({ dark }) {
  const [ref, visible] = useInView();
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const titleColor = dark ? "#fff" : "#111";
  const subColor   = dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.42)";

  return (
    <section id="certifications" style={{
      padding: isMobile ? "70px 5vw" : "100px 6vw",
      position: "relative", zIndex: 1,
    }}>
      <div ref={ref}>
        {/* Header */}
        <div style={{
          textAlign: "center", marginBottom: 60,
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(30px)",
          transition: "all 0.6s ease",
          direction: isAr ? "rtl" : "ltr",
        }}>
          <h2 style={{
            fontFamily: isAr ? "'Cairo', sans-serif" : "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(32px, 5vw, 52px)", color: titleColor,
            letterSpacing: isAr ? 0 : -1.5, margin: "0 0 16px",
          }}>
            {t("certifications.title")}
          </h2>
          <p style={{
            fontFamily: isAr ? "'Cairo', sans-serif" : "'DM Sans', sans-serif",
            fontSize: 16, color: subColor,
            maxWidth: 480, margin: "0 auto",
          }}>
            {t("certifications.subtitle")}
          </p>
        </div>

        {/* List */}
        <div style={{
          maxWidth: 750, margin: "0 auto",
          display: "flex", flexDirection: "column", gap: 16,
        }}>
          {CERTS.map((cert, i) => (
            <CertCard
              key={cert.title}
              cert={cert}
              index={i}
              visible={visible}
              dark={dark}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
}