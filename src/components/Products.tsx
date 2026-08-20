import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  TARPAULINS,
  FLOORING,
  AGRICULTURE,
  FLOOR_PROTECTION,
  NETS,
  type Product,
} from "@/data/site";
import { useQuote } from "./quote-context";

const GROUPS: { id: string; label: string; items: Product[] }[] = [
  { id: "tarpaulins", label: "Tarpaulins", items: TARPAULINS },
  { id: "flooring", label: "Flooring", items: FLOORING },
  { id: "agriculture", label: "Agriculture", items: AGRICULTURE },
  { id: "protection", label: "Floor Protection & Ropes", items: FLOOR_PROTECTION },
  { id: "nets", label: "Nets & Covers", items: NETS },
];

function Card({ p, i }: { p: Product; i: number }) {
  const { openQuote } = useQuote();
  return (
    <article
      className="reveal group relative overflow-hidden border border-silver/12 bg-card"
      style={{ transitionDelay: `${(i % 3) * 90}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden" data-cursor="media">
        <img
          src={p.image}
          alt={p.name}
          width={900}
          height={675}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent opacity-90" />
        <span className="absolute left-4 top-4 border border-gold/50 bg-ink/70 px-3 py-1 text-[0.55rem] tracking-[0.3em] text-gold uppercase backdrop-blur-sm">
          {p.category}
        </span>
      </div>

      <div className="relative p-6">
        <h3 className="font-display text-2xl leading-tight text-ivory">{p.name}</h3>
        <div className="mt-3 h-px w-14 gold-rule" />
        <p className="mt-4 text-sm leading-relaxed text-warm">{p.description}</p>

        <div className="grid overflow-hidden transition-[grid-template-rows] duration-700 ease-out [grid-template-rows:0fr] group-hover:[grid-template-rows:1fr] focus-within:[grid-template-rows:1fr]">
          <div className="min-h-0">
            <ul className="mt-5 flex flex-wrap gap-2">
              {p.applications.map((a) => (
                <li
                  key={a}
                  className="border border-silver/15 px-2.5 py-1 text-[0.62rem] tracking-[0.12em] text-silver/85 uppercase"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          onClick={() => openQuote(p.name)}
          className="mt-6 inline-flex items-center gap-2 text-[0.65rem] tracking-[0.28em] text-gold uppercase transition-colors hover:text-gold-hi"
        >
          Enquire
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>
    </article>
  );
}

export default function Products() {
  const [active, setActive] = useState(GROUPS[0].id);
  const group = GROUPS.find((g) => g.id === active) ?? GROUPS[0];

  return (
    <section id="products" className="relative bg-forest-2 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="text-center">
          <p className="eyebrow reveal">Our Portfolio</p>
          <h2 className="reveal ornament mx-auto mt-4 inline-block font-display text-[clamp(2.2rem,5.5vw,4.2rem)] leading-none silver-text">
            Products
          </h2>
          <p className="reveal mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-warm sm:text-base">
            Manufactured in-house and engineered for India's most demanding conditions — from
            monsoon-lashed construction sites to premium hotel interiors.
          </p>
        </div>

        <div className="no-scrollbar mt-12 flex gap-2 overflow-x-auto pb-2 sm:justify-center">
          {GROUPS.map((g) => (
            <button
              key={g.id}
              onClick={() => setActive(g.id)}
              className={`shrink-0 border px-5 py-3 text-[0.62rem] tracking-[0.24em] uppercase transition-all duration-500 ${
                active === g.id
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-silver/15 text-warm hover:border-silver/40 hover:text-ivory"
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>

        <div key={group.id} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {group.items.map((p, i) => (
            <Card key={p.id} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
