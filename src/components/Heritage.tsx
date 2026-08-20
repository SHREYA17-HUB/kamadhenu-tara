import heritage from "@/assets/heritage.jpg";
import factory from "@/assets/about-factory.jpg";
import { TIMELINE } from "@/data/site";

export default function Heritage() {
  return (
    <section id="about" className="relative overflow-hidden bg-forest py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(200,162,74,0.10),transparent_55%)]" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="reveal-clip overflow-hidden">
              <img
                src={heritage}
                alt="Vintage tarpaulin workshop from the early years of Kamadhenu"
                width={1200}
                height={1500}
                loading="lazy"
                className="h-[clamp(320px,55vw,620px)] w-full object-cover"
                data-cursor="media"
              />
            </div>
            <div className="reveal absolute -bottom-8 -right-2 hidden w-[46%] overflow-hidden border border-gold/30 sm:block lg:-right-10">
              <img
                src={factory}
                alt="Modern Kamadhenu manufacturing floor"
                width={800}
                height={600}
                loading="lazy"
                className="h-full w-full object-cover"
                data-cursor="media"
              />
            </div>
            <div className="reveal absolute -left-3 -top-6 border border-gold/50 bg-ink/85 px-6 py-4 backdrop-blur-sm">
              <p className="font-display text-4xl leading-none gold-text">1985</p>
              <p className="mt-1 text-[0.55rem] tracking-[0.34em] text-warm">EST. BENGALURU</p>
            </div>
          </div>

          <div>
            <p className="eyebrow reveal">Our Heritage</p>
            <h2 className="reveal mt-4 font-display text-[clamp(2.2rem,5.5vw,4.2rem)] leading-[1.02] silver-text">
              Four decades of
              <span className="block gold-text">protective excellence.</span>
            </h2>
            <p className="reveal mt-6 max-w-xl text-sm leading-relaxed text-warm sm:text-base">
              Kamadhenu Tarpaulin Industry began in 1985 as a single manufacturing unit with one
              conviction — that protection should never be compromised. Nearly forty years later,
              that same conviction runs through one of South India's broadest ranges of tarpaulins,
              flooring, agriculture and industrial protection solutions.
            </p>

            <ol className="mt-10 border-l border-gold/25 pl-7">
              {TIMELINE.map((t, i) => (
                <li
                  key={t.title}
                  className="reveal relative pb-8 last:pb-0"
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <span className="absolute -left-[35px] top-1.5 h-2 w-2 rotate-45 bg-gold" />
                  <p className="text-[0.6rem] tracking-[0.34em] text-gold uppercase">{t.year}</p>
                  <h3 className="mt-2 font-display text-2xl text-ivory">{t.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-warm">{t.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
