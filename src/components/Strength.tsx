import { useEffect, useRef, useState } from "react";
import reveal from "@/assets/reveal-tarp.jpg";
import macro from "@/assets/fabric-macro.jpg";

const STATS = [
  { value: 40, suffix: "+", label: "Years of Manufacturing" },
  { value: 25, suffix: "+", label: "Product Categories" },
  { value: 5000, suffix: "+", label: "Projects Protected" },
  { value: 100, suffix: "%", label: "In-House Quality Checks" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - start) / 1600, 1);
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="font-display text-[clamp(2.6rem,6vw,4.5rem)] leading-none gold-text">
      {n.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function Strength() {
  const img = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = img.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
        el.style.transform = `translate3d(0, ${p * -60}px, 0) scale(1.18)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="relative flex min-h-[80vh] items-center">
        <img
          ref={img}
          src={reveal}
          alt="Heavy-duty tarpaulin sheet stretched against a stormy sky"
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
        />
        <div className="absolute inset-0 bg-ink/78" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,162,74,0.14),transparent_60%)]" />

        <div className="relative mx-auto w-full max-w-[1400px] px-5 py-24 text-center sm:px-8">
          <p className="eyebrow reveal">Strength You Can Measure</p>
          <h2 className="reveal mx-auto mt-5 max-w-4xl font-display text-[clamp(2.2rem,6.5vw,5rem)] leading-[1.02] silver-text">
            Engineered to hold when
            <span className="block gold-text">everything else gives way.</span>
          </h2>
          <p className="reveal mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-warm sm:text-base">
            Consistent GSM, high tear-strength weaves and UV-stabilised coatings — tested against
            monsoon rain, coastal salt air and forty-degree summers.
          </p>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <div key={s.label} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <Counter value={s.value} suffix={s.suffix} />
                <div className="mx-auto mt-4 h-px w-10 gold-rule" />
                <p className="mt-3 text-[0.6rem] tracking-[0.28em] text-warm uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative h-[26vh] overflow-hidden border-y border-silver/12">
        <img
          src={macro}
          alt="Macro detail of woven tarpaulin fabric"
          width={1920}
          height={600}
          loading="lazy"
          className="h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-ink/45">
          <p className="reveal px-5 text-center font-display text-[clamp(1.4rem,4vw,3rem)] tracking-[0.14em] gold-text">
            Strength. Protection. Excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
