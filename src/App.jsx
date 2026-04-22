import { useState, useEffect } from "react";
import "./index.css";
import { Particles }      from "./components/ui/Particles";
import { TopNav }         from "./components/BottomNav";
import { Hero }           from "./components/Hero";
import { About }          from "./components/About";
import { Skills }         from "./components/Skills";
import { Projects }       from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Contact }        from "./components/Contact";

const SECTIONS = ["hero", "about", "skills", "projects", "certifications", "contact"];

export default function App() {
  const [active, setActive] = useState("hero");
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("light", !dark);
    document.body.style.background = dark ? "#000000" : "#858598";
  }, [dark]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.35 }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Particles count={450} minSize={0.3} maxSize={1.2} minOpacity={0.03} maxOpacity={0.6} />
      <TopNav active={active} dark={dark} setDark={setDark} />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero dark={dark} />
        <About dark={dark} />
        <Skills dark={dark} />
        <Projects dark={dark} />
        <Certifications dark={dark} />
        <Contact dark={dark} />
      </main>
    </>
  );
}


// https://prod.spline.design/iQsnxnlUYueAAwUZ/scene.splinecode