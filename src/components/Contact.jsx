import { useState } from "react";
import { useInView } from "../hooks/useInView";
import Spline from '@splinetool/react-spline';

export function Contact() {
  const [ref, visible] = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

const handleSubmit = async () => {
  if (!form.name || !form.email || !form.message) {
    setStatus({ type: "error", msg: "Please fill in all fields." });
    return;
  }
  setLoading(true);
  try {
    const res = await fetch("https://formspree.io/f/mlgaekvz", { // ← حطي الـ link بتاعك
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    });
    if (res.ok) {
      setStatus({ type: "success", msg: "Message sent successfully! ✓" });
      setForm({ name: "", email: "", message: "" });
    } else {
      throw new Error();
    }
  } catch {
    setStatus({ type: "error", msg: "Error sending message. Please try again." });
  } finally {
    setLoading(false);
  }
};

  const inputStyle = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgb(255, 255, 255)",
    borderRadius: 12,
    padding: "14px 18px",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 15,
    color: "#fff",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    transition: "border-color 0.3s",
  };

  return (
    <section id="contact" style={{
      padding: "100px 6vw 160px",
      position: "relative",
      zIndex: 1,
      overflow: "hidden",
    }}>
       {/* Spline background */}
     <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 0,
      opacity: 0.45,
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    }}>
      <div>
        <Spline
          scene="https://prod.spline.design/hxQoVgVovnaEGttk/scene.splinecode"
          style={{ width: "100%", height: "100%",transform: "scale(0.45)",
                  transformOrigin: "center center", }}
        />
      </div>
    </div>

      <div ref={ref} style={{
        maxWidth: 580, margin: "0 auto",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(40px)",
        transition: "all 0.7s ease",
      }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 700,
            fontSize: "clamp(32px, 5vw, 52px)", color: "#fff",
            letterSpacing: -1.5, margin: "0 0 16px",
          }}>
            Get in <span style={{ color: "rgba(255, 255, 255, 0.33)" }}>Touch</span>
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 16,
            color: "rgba(255, 255, 255, 0.53)",
          }}>
            Have a project in mind? I respond within 24 hours.
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 14, marginBottom: 14,
        }} className="grid-responsive">
          {[["name", "text", "Your Name"], ["email", "email", "Your Email"]].map(([f, t, ph]) => (
            <input
              key={f} type={t} placeholder={ph}
              value={form[f]}
              onChange={e => setForm({ ...form, [f]: e.target.value })}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = "rgba(34,211,238,0.4)"}
              onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
            />
          ))}
        </div>

        <textarea
          placeholder="Describe your project..."
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          rows={5}
          style={{ ...inputStyle, resize: "vertical", marginBottom: 14 }}
          onFocus={e => e.target.style.borderColor = "rgba(34,211,238,0.4)"}
          onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
        />

        {status && (
          <div style={{
            padding: "12px 18px", borderRadius: 10, marginBottom: 14,
            background: status.type === "success" ? "rgba(74,222,128,0.08)" : "rgba(248,113,113,0.08)",
            border: `1px solid ${status.type === "success" ? "rgba(74,222,128,0.25)" : "rgba(248,113,113,0.25)"}`,
            fontFamily: "'DM Sans', sans-serif", fontSize: 14,
            color: status.type === "success" ? "#4ade80" : "#f87171",
          }}>
            {status.msg}
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            width: "100%", background: "#fff", color: "#000",
            border: "none", borderRadius: 12, padding: "16px",
            fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
            fontSize: 15, cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.6 : 1, transition: "opacity 0.25s ease",
            position: "relative", zIndex:2,
          }}
          onMouseEnter={e => { if (!loading) e.currentTarget.style.opacity = "0.88"; }}
          onMouseLeave={e => e.currentTarget.style.opacity = loading ? "0.6" : "1"}
        >
          {loading ? "Sending..." : "Send Message →"}
        </button>
      </div>
    </section>
  );
}