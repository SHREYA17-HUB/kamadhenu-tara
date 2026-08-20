import { APPLICATIONS } from "@/data/site";

export default function Applications() {
  return (
    <section id="applications" className="relative bg-forest py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow reveal">Where We Work</p>
          <h2 className="reveal mt-4 font-display text-[clamp(2.2rem,5.5vw,4.2rem)] leading-[1.02] silver-text">
            Built for every
            <span className="block gold-text">industry we serve.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {APPLICATIONS.map((a, i) => (
            <article
              key={a.id}
              className="reveal group relative h-[380px] overflow-hidden border border-silver/12"
              style={{ transitionDelay: `${(i % 3) * 100}ms` }}
              data-cursor="media"
            >
              <img
                src={a.image}
                alt={a.title}
                width={900}
                height={1100}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-transparent transition-opacity duration-700 group-hover:from-ink group-hover:via-ink/70" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-3xl leading-tight text-ivory">{a.title}</h3>
                <div className="mt-3 h-px w-12 origin-left gold-rule transition-transform duration-700 group-hover:scale-x-[2.6]" />
                <div className="grid overflow-hidden transition-[grid-template-rows,opacity] duration-700 [grid-template-rows:0fr] opacity-0 group-hover:[grid-template-rows:1fr] group-hover:opacity-100">
                  <p className="min-h-0 pt-4 text-sm leading-relaxed text-warm">{a.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
