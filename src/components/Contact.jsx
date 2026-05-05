import { useState, useEffect } from "react";
import { useInView } from "../hooks/useInView";
import { useTranslation } from "react-i18next";
import Spline from '@splinetool/react-spline';

export function Contact({ dark }) {
  const [ref, visible] = useInView();
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const font = isAr ? "'Cairo', sans-serif" : "'DM Sans', sans-serif";

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", msg: t("contact.errorFields") });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/mlgaekvz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (res.ok) {
        setStatus({ type: "success", msg: t("contact.successMsg") });
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error();
      }
    } catch {
      setStatus({ type: "error", msg: t("contact.errorMsg") });
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    background: dark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.4)",
    border: dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(255,255,255,0.6)",
    borderRadius: 12,
    padding: "14px 18px",
    fontFamily: font,
    fontSize: 15,
    color: dark ? "#fff" : "#000000",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    transition: "border-color 0.3s",
    direction: isAr ? "rtl" : "ltr",
    textAlign: isAr ? "right" : "left",
  };

  return (
    <section id="contact" style={{
      padding: "100px 6vw 160px",
      position: "relative",
      zIndex: 1,
      overflow: "hidden",
    }}>
      {/* Spline background */}
      {(!isMobile && dark) && (
        <div style={{
          position: "absolute", top: 0, left: 0,
          width: "100%", height: "100%",
          zIndex: 0, opacity: 0.6, pointerEvents: "none",
          display: "flex", alignItems: "center", justifyContent: "center",
          overflow: "hidden",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)",
        }}>
          <div style={{ width: "100%", height: "100%" }}>
            <Spline
              scene="https://prod.spline.design/hxQoVgVovnaEGttk/scene.splinecode"
              style={{ width: "100%", height: "100%", transform: "scale(0.45)", transformOrigin: "center center" }}
            />
          </div>
        </div>
      )}

      <div ref={ref} style={{
        maxWidth: 580, margin: "0 auto",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(40px)",
        transition: "all 0.7s ease",
        direction: isAr ? "rtl" : "ltr",
      }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{
            fontFamily: isAr ? "'Cairo', sans-serif" : "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(32px, 5vw, 52px)",
            color: dark ? "#fff" : "#000000",
            letterSpacing: isAr ? 0 : -1.5,
            margin: "0 0 16px",
          }}>
            {t("contact.title")}{" "}
            <span style={{ color: dark ? "rgba(255,255,255,0.33)" : "rgba(0,0,0,0.5)" }}>
              {t("contact.titleAccent")}
            </span>
          </h2>
          <p style={{
            fontFamily: font, fontSize: 16,
            color: dark ? "rgba(255,255,255,0.53)" : "rgba(0,0,0,0.7)",
          }}>
            {t("contact.subtitle")}
          </p>
        </div>

        {/* Name + Email */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 14, marginBottom: 14,
        }} className="grid-responsive">
          {[
            ["name",  "text",  t("contact.namePlaceholder")],
            ["email", "email", t("contact.emailPlaceholder")],
          ].map(([f, type, ph]) => (
            <input
              key={f} type={type} placeholder={ph}
              value={form[f]}
              onChange={e => setForm({ ...form, [f]: e.target.value })}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = "rgba(232,121,249,0.8)"}
              onBlur={e => e.target.style.borderColor = dark ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.6)"}
            />
          ))}
        </div>

        {/* Message */}
        <textarea
          placeholder={t("contact.messagePlaceholder")}
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          rows={5}
          style={{ ...inputStyle, resize: "vertical", marginBottom: 14 }}
          onFocus={e => e.target.style.borderColor = "rgba(232,121,249,0.8)"}
          onBlur={e => e.target.style.borderColor = dark ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.6)"}
        />

        {/* Status */}
        {status && (
          <div style={{
            padding: "12px 18px", borderRadius: 10, marginBottom: 14,
            background: status.type === "success" ? "rgba(74,222,128,0.08)" : "rgba(248,113,113,0.08)",
            border: `1px solid ${status.type === "success" ? "rgba(74,222,128,0.25)" : "rgba(248,113,113,0.25)"}`,
            fontFamily: font, fontSize: 14,
            color: status.type === "success" ? "#4ade80" : "#f87171",
            textAlign: isAr ? "right" : "left",
          }}>
            {status.msg}
          </div>
        )}

        {/* Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            width: "100%", background: dark ? "#fff" : "#000000", color: dark ? "#000" : "#fff",
            border: "none", borderRadius: 12, padding: "16px",
            fontFamily: font, fontWeight: 700,
            fontSize: 15, cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.6 : 1, transition: "opacity 0.25s ease",
            position: "relative", zIndex: 2,
          }}
          onMouseEnter={e => { if (!loading) e.currentTarget.style.opacity = "0.88"; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = loading ? "0.6" : "1"; }}
        >
          {loading ? t("contact.sending") : t("contact.send")}
        </button>
      </div>
    </section>
  );
}