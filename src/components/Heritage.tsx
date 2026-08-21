import heritage from "@/assets/heritage.jpg";
import factory from "@/assets/about-factory.jpg";
import { TIMELINE } from "@/data/site";

export default function Heritage() {
  return (
    <section id="about" className="relative overflow-hidden bg-forest py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(200,162,74,0.10),transparent_55%)]" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="text-center lg:hidden">
          <p className="eyebrow reveal">Our Heritage</p>
          <h2 className="reveal mt-4 font-display text-[clamp(2.1rem,8vw,3rem)] leading-[1.05] silver-text">
            Four decades of <span className="block gold-text">protective excellence.</span>
          </h2>
        </div>

        <div className="mt-12 grid items-center gap-12 lg:mt-0 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* Media column */}
          <div className="relative">
            <div className="reveal-clip overflow-hidden border border-gold/20">
              <img
                src={heritage}
                alt="Vintage tarpaulin workshop from the early years of Kamadhenu"
                width={1200}
                height={1500}
                loading="lazy"
                className="h-[clamp(300px,52vw,600px)] w-full object-cover"
                data-cursor="media"
              />
            </div>

            <div className="mt-4 grid grid-cols-[auto_1fr] items-stretch gap-4">
              <div className="reveal flex flex-col justify-center border border-gold/40 bg-ink/70 px-6 py-4 backdrop-blur-sm">
                <p className="font-display text-4xl leading-none gold-text">1985</p>
                <p className="mt-1 text-[0.55rem] tracking-[0.3em] text-warm">EST. BENGALURU</p>
              </div>
              <div className="reveal overflow-hidden border border-silver/15">
                <img
                  src={factory}
                  alt="Modern Kamadhenu manufacturing floor"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full min-h-[104px] w-full object-cover"
                  data-cursor="media"
                />
              </div>
            </div>
          </div>

          {/* Text column */}
          <div>
            <div className="hidden lg:block">
              <p className="eyebrow reveal">Our Heritage</p>
              <h2 className="reveal mt-4 font-display text-[clamp(2.4rem,4vw,4rem)] leading-[1.02] silver-text">
                Four decades of
                <span className="block gold-text">protective excellence.</span>
              </h2>
            </div>

            <p className="reveal mt-6 max-w-xl text-sm leading-relaxed text-warm sm:text-base">
              Kamadhenu Tarpaulin Industry began in 1985 as a single manufacturing unit with one
              conviction — that protection should never be compromised. Nearly forty years later,
              that same conviction runs through one of South India's broadest ranges of tarpaulins,
              flooring, agriculture and industrial protection solutions.
            </p>

            <div className="reveal mt-8 h-px w-40 gold-rule" />

            <ol className="mt-10 space-y-0 border-l border-gold/25 pl-7">
              {TIMELINE.map((t, i) => (
                <li
                  key={t.title}
                  className="reveal group relative pb-8 last:pb-0"
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <span className="absolute -left-[35px] top-2 h-2 w-2 rotate-45 bg-gold transition-transform duration-500 group-hover:scale-150" />
                  <p className="text-[0.6rem] tracking-[0.34em] text-gold uppercase">{t.year}</p>
                  <h3 className="mt-2 font-display text-2xl leading-tight text-ivory">{t.title}</h3>
                  <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-warm">{t.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
