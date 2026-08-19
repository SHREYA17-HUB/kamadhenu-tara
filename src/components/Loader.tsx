import { useEffect, useState } from "react";
import logo from "@/assets/kamadhenu-logo.png.asset.json";

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const a = window.setTimeout(() => setFading(true), 1700);
    const b = window.setTimeout(() => setHidden(true), 2500);
    return () => {
      window.clearTimeout(a);
      window.clearTimeout(b);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink transition-opacity duration-700 ${
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <img
        src={logo.url}
        alt=""
        width={220}
        height={220}
        className="anim-fade-up w-[150px] sm:w-[200px]"
      />
      <div className="mt-7 overflow-hidden">
        <p
          className="font-display text-[clamp(1.9rem,7vw,3.2rem)] leading-none tracking-[0.2em] silver-text"
          style={{ animation: "k-fade-up 0.9s 0.25s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          KAMADHENU
        </p>
      </div>
      <p
        className="mt-3 text-[0.6rem] tracking-[0.5em] text-warm sm:text-xs"
        style={{ animation: "k-fade-up 0.9s 0.45s cubic-bezier(0.16,1,0.3,1) both" }}
      >
        TARPAULIN INDUSTRY
      </p>
      <div className="mt-7 h-px w-[min(300px,60vw)] overflow-hidden bg-white/10">
        <div
          className="h-full w-full origin-left gold-rule"
          style={{ animation: "k-line-grow 1.5s 0.3s cubic-bezier(0.6,0,0.2,1) both" }}
        />
      </div>
      <p
        className="mt-5 text-[0.6rem] tracking-[0.45em] text-gold"
        style={{ animation: "k-fade-up 0.9s 0.7s cubic-bezier(0.16,1,0.3,1) both" }}
      >
        SINCE 1985
      </p>
    </div>
  );
}
