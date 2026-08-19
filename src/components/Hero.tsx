import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-tarpaulin.jpg";
import { useQuote } from "./quote-context";

export default function Hero() {
  const bg = useRef<HTMLDivElement>(null);
  const fg = useRef<HTMLDivElement>(null);
  const { openQuote } = useQuote();

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const move = (e: MouseEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2;
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    const loop = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      if (bg.current) bg.current.style.transform = `translate3d(${cx * 18}px, ${cy * 14}px, 0)`;
      if (fg.current) fg.current.style.transform = `translate3d(${cx * -10}px, ${cy * -7}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <div ref={bg} className="absolute -inset-8">
        <img
          src={heroImg}
          alt="Rolls of premium industrial tarpaulin stacked in a warehouse"
          width={1920}
          height={1088}
          className="slow-zoom h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-forest/70 to-forest" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(230,200,117,0.16),transparent_55%)]" />

      <div
        ref={fg}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-center px-5 pt-28 pb-24 sm:px-8"
      >
        <p className="eyebrow anim-fade-up ml-1">Since 1985</p>

        <h1 className="mt-5 font-display leading-[0.86]">
          <span
            className="block text-[clamp(3rem,13vw,10.5rem)] tracking-[0.04em] silver-text"
            style={{ animation: "k-fade-up 1.1s 0.1s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            KAMADHENU
          </span>
          <span
            className="mt-3 block text-[clamp(0.85rem,2.6vw,2rem)] tracking-[0.42em] text-warm"
            style={{ animation: "k-fade-up 1.1s 0.25s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            TARPAULIN INDUSTRY
          </span>
        </h1>

        <div
          className="mt-8 h-px w-[min(420px,70vw)] origin-left gold-rule"
          style={{ animation: "k-line-grow 1.4s 0.5s cubic-bezier(0.6,0,0.2,1) both" }}
        />

        <p
          className="mt-7 font-display text-[clamp(1.3rem,3.4vw,2.4rem)] tracking-wide gold-text"
          style={{ animation: "k-fade-up 1s 0.6s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          Strength. Protection. Excellence.
        </p>

        <p
          className="mt-5 max-w-2xl text-sm leading-relaxed text-warm sm:text-base"
          style={{ animation: "k-fade-up 1s 0.72s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          One of India's trusted manufacturers and suppliers of premium-quality tarpaulins, pond
          liners, flooring solutions, agriculture products, floor protection sheets, industrial
          nets, car covers and ropes.
        </p>

        <div
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          style={{ animation: "k-fade-up 1s 0.85s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          <button
            onClick={() =>
              document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative overflow-hidden border border-gold bg-gold/95 px-9 py-4 text-[0.7rem] tracking-[0.28em] text-ink uppercase"
          >
            <span className="relative z-10">Explore Products</span>
            <span className="absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-white/40 transition-none group-hover:animate-[k-sheen_0.9s_ease-out]" />
          </button>
          <button
            onClick={() => openQuote()}
            className="border border-silver/35 px-9 py-4 text-[0.7rem] tracking-[0.28em] text-ivory uppercase transition-colors duration-500 hover:border-gold hover:text-gold"
          >
            Get a Quote
          </button>
        </div>
      </div>

      <button
        onClick={() => document.getElementById("reveal")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.58rem] tracking-[0.38em] text-warm uppercase"
      >
        Scroll to Explore
        <ArrowDown className="anim-float h-4 w-4 text-gold" />
      </button>
    </section>
  );
}
