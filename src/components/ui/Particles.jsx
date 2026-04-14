import { useEffect, useRef } from "react";

export function Particles({
  count = 250,
  color = "#ffffff",
  minOpacity = 0.03,
  maxOpacity = 0.6,
  minSize = 0.3,
  maxSize = 1.2,
}) {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const rafRef = useRef(null);

  useEffect(() => {
    starsRef.current = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * (maxSize - minSize) + minSize,
      opacity: Math.random() * (maxOpacity - minOpacity) + minOpacity,
      speed: 0.0006 + Math.random() * 0.0004, // سرعة السقوط — بطيء جداً زي التلج
      drift: (Math.random() - 0.5) * 0.0004,  // انجراف خفيف يمين/شمال
    }));
  }, [count, minOpacity, maxOpacity, minSize, maxSize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // parse color
    const tmp = document.createElement("canvas");
    tmp.width = tmp.height = 1;
    const tc = tmp.getContext("2d");
    tc.fillStyle = color;
    tc.fillRect(0, 0, 1, 1);
    const [r, g, b] = tc.getImageData(0, 0, 1, 1).data;
    const rgb = `${r},${g},${b}`;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const W = window.innerWidth;
      const H = window.innerHeight;

      ctx.clearRect(0, 0, W, H);

      starsRef.current.forEach((s) => {
        // تحريك النجمة لأسفل
        s.y += s.speed;
        s.x += s.drift;

        // لو وصلت الأسفل تروح الأعلى
        if (s.y > 1) { s.y = 0; s.x = Math.random(); }
        if (s.x > 1) s.x = 0;
        if (s.x < 0) s.x = 1;

        const x = s.x * W;
        const y = s.y * H;

        ctx.beginPath();
        ctx.arc(x, y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},${s.opacity})`;
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}