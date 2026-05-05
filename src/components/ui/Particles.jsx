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
      speed: 2 + Math.random() * 1, // سرعة بالبيكسل لكل فريم (على أساس 60 إطار)
      drift: (Math.random() - 0.5) * 1,  // انجراف بالبيكسل
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

    let lastTime = performance.now();

    const draw = (time) => {
      if (!time) time = performance.now();
      const dt = time - lastTime;
      lastTime = time;
      // Normalizing delta to 60fps (1 frame = ~16.6ms) to keep speed constant
      const delta = Math.min(dt, 50) / 16.666;

      const W = window.innerWidth;
      const H = window.innerHeight;

      ctx.clearRect(0, 0, W, H);

      starsRef.current.forEach((s) => {
        // تحريك النجمة بناءً على البيكسل والوقت
        s.y += (s.speed * delta) / H;
        s.x += (s.drift * delta) / W;

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
    rafRef.current = requestAnimationFrame(draw);

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