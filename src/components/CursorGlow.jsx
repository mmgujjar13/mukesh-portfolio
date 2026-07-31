import { useEffect, useRef, useState } from "react";

export function CursorGlow() {
  const dot = useRef(null);
  const outline = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
    let raf;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    const animate = () => {
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;

      if (outline.current) {
        outline.current.style.transform = `translate(${outlineX}px, ${outlineY}px)`;
      }

      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dot}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full z-[9999] pointer-events-none"
      />
      <div
        ref={outline}
        className="fixed top-0 left-0 w-40 h-40 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-20 blur-3xl z-[9998] pointer-events-none"
      />
    </>
  );
}
