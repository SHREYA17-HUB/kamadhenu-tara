import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/kamadhenu-logo.png.asset.json";
import { useQuote } from "./quote-context";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "products", label: "Products" },
  { id: "applications", label: "Applications" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menu, setMenu] = useState(false);
  const { openQuote } = useQuote();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  const go = (id: string) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-dark py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-8">
        <button
          onClick={() => go("home")}
          className="flex min-w-0 items-center gap-3 text-left"
          aria-label="Kamadhenu Tarpaulin Industry — home"
        >
          <img
            src={logo.url}
            alt="Kamadhenu Tarpaulin Industry logo"
            width={64}
            height={64}
            className={`shrink-0 transition-all duration-500 ${scrolled ? "h-10 w-10" : "h-14 w-14"}`}
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-base leading-none tracking-[0.24em] silver-text sm:text-xl">
              KAMADHENU
            </span>
            <span className="mt-1 block truncate text-[0.5rem] tracking-[0.34em] text-warm sm:text-[0.6rem]">
              TARPAULIN INDUSTRY · SINCE 1985
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="group relative py-2 text-[0.72rem] tracking-[0.24em] text-ivory/80 uppercase transition-colors hover:text-ivory"
            >
              {l.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-gold transition-transform duration-500 ${
                  active === l.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
              {active === l.id && (
                <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rotate-45 bg-gold" />
              )}
            </button>
          ))}
          <button
            onClick={() => openQuote()}
            className="relative overflow-hidden border border-gold/60 px-6 py-2.5 text-[0.7rem] tracking-[0.26em] text-gold uppercase transition-colors duration-500 hover:bg-gold hover:text-ink"
          >
            Get a Quote
          </button>
        </nav>

        <button
          onClick={() => setMenu(true)}
          className="shrink-0 border border-silver/25 p-2.5 text-ivory lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 flex flex-col bg-ink/97 backdrop-blur-md transition-all duration-500 lg:hidden ${
          menu ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <span className="font-display text-lg tracking-[0.24em] silver-text">KAMADHENU</span>
          <button onClick={() => setMenu(false)} aria-label="Close menu" className="p-2 text-ivory">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="h-px gold-rule" />
        <nav className="flex flex-1 flex-col justify-center gap-1 px-7">
          {LINKS.map((l, i) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              style={{ transitionDelay: `${i * 45}ms` }}
              className={`border-b border-white/8 py-4 text-left font-display text-3xl tracking-wide text-ivory transition-all duration-500 ${
                menu ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => {
              setMenu(false);
              openQuote();
            }}
            className="mt-8 border border-gold px-6 py-4 text-xs tracking-[0.3em] text-gold uppercase"
          >
            Get a Quote
          </button>
        </nav>
      </div>
    </header>
  );
}
