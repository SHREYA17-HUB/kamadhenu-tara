import { Instagram, Facebook, Youtube, Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/kamadhenu-logo.png.asset.json";
import { PHONE_DISPLAY, SOCIALS, WHATSAPP_NUMBER, whatsappLink } from "@/data/site";
import { useQuote } from "./quote-context";

const QUICK = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "products", label: "Products" },
  { id: "applications", label: "Applications" },
  { id: "gallery", label: "Gallery" },
];

const RANGE = [
  "Tarpaulins & Pond Liners",
  "Flooring Solutions",
  "Agriculture Products",
  "Floor Protection Sheets",
  "Nets, Ropes & Car Covers",
];

export default function Footer() {
  const { openQuote } = useQuote();
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <footer id="contact" className="relative overflow-hidden bg-ink pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px gold-rule" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,162,74,0.10),transparent_55%)]" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="reveal text-center">
          <p className="eyebrow">Get in Touch</p>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,6vw,4.6rem)] leading-[1.02] silver-text">
            Let's protect what
            <span className="block gold-text">matters to you.</span>
          </h2>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gold bg-gold/95 px-8 py-4 text-[0.68rem] tracking-[0.28em] text-ink uppercase transition-colors hover:bg-gold-hi"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="flex items-center gap-2 border border-silver/35 px-8 py-4 text-[0.68rem] tracking-[0.28em] text-ivory uppercase transition-colors hover:border-gold hover:text-gold"
            >
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-12 border-t border-silver/12 pt-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo.url}
                alt="Kamadhenu Tarpaulin Industry logo"
                width={56}
                height={56}
                loading="lazy"
                className="h-14 w-14"
              />
              <span>
                <span className="block font-display text-lg tracking-[0.2em] silver-text">
                  KAMADHENU
                </span>
                <span className="text-[0.5rem] tracking-[0.3em] text-warm">
                  TARPAULIN INDUSTRY
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-warm">
              Manufacturing premium tarpaulins and protection solutions since 1985. Strength.
              Protection. Excellence.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { href: SOCIALS.instagram, Icon: Instagram, label: "Instagram" },
                { href: SOCIALS.facebook, Icon: Facebook, label: "Facebook" },
                { href: SOCIALS.youtube, Icon: Youtube, label: "YouTube" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="border border-silver/20 p-2.5 text-warm transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav>
            <h3 className="text-[0.6rem] tracking-[0.3em] text-gold uppercase">Explore</h3>
            <ul className="mt-5 space-y-3">
              {QUICK.map((q) => (
                <li key={q.id}>
                  <button
                    onClick={() => go(q.id)}
                    className="text-sm text-warm transition-colors hover:text-ivory"
                  >
                    {q.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => openQuote()}
                  className="text-sm text-warm transition-colors hover:text-ivory"
                >
                  Request a Quote
                </button>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="text-[0.6rem] tracking-[0.3em] text-gold uppercase">Our Range</h3>
            <ul className="mt-5 space-y-3 text-sm text-warm">
              {RANGE.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.6rem] tracking-[0.3em] text-gold uppercase">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-warm">
              <li>
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:text-ivory">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ivory"
                >
                  WhatsApp enquiry
                </a>
              </li>
              <li>Bengaluru, Karnataka, India</li>
              <li>Mon – Sat · 9:30 AM – 7:30 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-silver/12 py-8 text-[0.6rem] tracking-[0.22em] text-warm/70 uppercase sm:flex-row">
          <p>© {new Date().getFullYear()} Kamadhenu Tarpaulin Industry</p>
          <p>Since 1985 · Made in India</p>
        </div>
      </div>
    </footer>
  );
}
