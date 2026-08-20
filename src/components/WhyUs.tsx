import { WHY_US } from "@/data/site";

export default function WhyUs() {
  return (
    <section className="relative bg-forest-2 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="text-center">
          <p className="eyebrow reveal">The Kamadhenu Difference</p>
          <h2 className="reveal ornament mx-auto mt-4 inline-block font-display text-[clamp(2.2rem,5.5vw,4.2rem)] leading-none silver-text">
            Why Choose Us
          </h2>
        </div>

        <div className="mt-14 grid gap-px border border-silver/12 bg-silver/12 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((w, i) => (
            <div
              key={w.title}
              className="reveal group relative overflow-hidden bg-forest p-8 transition-colors duration-700 hover:bg-card"
              style={{ transitionDelay: `${(i % 4) * 80}ms` }}
            >
              <span className="font-display text-5xl leading-none text-gold/20 transition-colors duration-700 group-hover:text-gold/45">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-xl leading-tight text-ivory">{w.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-warm">{w.text}</p>
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 gold-rule transition-transform duration-700 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
