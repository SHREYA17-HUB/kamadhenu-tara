import { useEffect, useRef, useState } from "react";

/** Desktop-only premium dot cursor with a soft gold ring over interactive media. */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let raf = 0;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${x - 3}px, ${y - 3}px, 0)`;

      const target = e.target as HTMLElement | null;
      const hot = target?.closest("a, button, [data-cursor]");
      if (ring.current) {
        const media = target?.closest("[data-cursor='media']");
        ring.current.dataset["state"] = media ? "media" : hot ? "hot" : "idle";
      }
    };

    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      if (ring.current) ring.current.style.transform = `translate3d(${rx - 20}px, ${ry - 20}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[90] hidden lg:block">
      <div ref={dot} className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-gold-hi" />
      <div
        ref={ring}
        data-state="idle"
        className="absolute left-0 top-0 h-10 w-10 rounded-full border border-silver/30 transition-[opacity,scale,border-color,box-shadow] duration-300 data-[state=hot]:scale-125 data-[state=hot]:border-gold/70 data-[state=media]:scale-150 data-[state=media]:border-gold data-[state=media]:shadow-[0_0_28px_rgba(200,162,74,0.35)]"
      />
    </div>
  );
}
