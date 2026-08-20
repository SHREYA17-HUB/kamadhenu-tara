import { useState } from "react";
import { X } from "lucide-react";
import { GALLERY, GALLERY_CATEGORIES } from "@/data/site";

export default function Gallery() {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<number | null>(null);
  const items = GALLERY.filter((g) => cat === "All" || g.cat === cat);

  return (
    <section id="gallery" className="relative bg-forest py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="text-center">
          <p className="eyebrow reveal">Our Work</p>
          <h2 className="reveal ornament mx-auto mt-4 inline-block font-display text-[clamp(2.2rem,5.5vw,4.2rem)] leading-none silver-text">
            Gallery
          </h2>
        </div>

        <div className="no-scrollbar mt-10 flex gap-2 overflow-x-auto pb-2 sm:justify-center">
          {GALLERY_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`shrink-0 border px-5 py-2.5 text-[0.6rem] tracking-[0.24em] uppercase transition-all duration-500 ${
                cat === c
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-silver/15 text-warm hover:border-silver/40 hover:text-ivory"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-2 gap-4 lg:columns-3 [&>*]:mb-4">
          {items.map((g, i) => (
            <button
              key={`${cat}-${g.alt}`}
              onClick={() => setOpen(i)}
              data-cursor="media"
              className={`reveal group relative block w-full overflow-hidden border border-silver/12 ${
                i % 5 === 0 ? "aspect-[3/4]" : i % 3 === 0 ? "aspect-square" : "aspect-[4/3]"
              }`}
              style={{ transitionDelay: `${(i % 4) * 70}ms` }}
            >
              <img
                src={g.image}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-ink/35 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 translate-y-3 text-left text-[0.6rem] tracking-[0.26em] text-gold uppercase opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {g.cat}
              </span>
            </button>
          ))}
        </div>
      </div>

      {open !== null && items[open] && (
        <div
          className="fixed inset-0 z-[95] flex items-center justify-center bg-ink/95 p-5 backdrop-blur-sm"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setOpen(null)}
            aria-label="Close image"
            className="absolute right-5 top-5 border border-silver/25 p-2.5 text-ivory"
          >
            <X className="h-5 w-5" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-w-4xl">
            <img
              src={items[open].image}
              alt={items[open].alt}
              className="max-h-[76vh] w-full object-contain"
            />
            <figcaption className="mt-4 text-center text-[0.65rem] tracking-[0.26em] text-warm uppercase">
              {items[open].alt}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
