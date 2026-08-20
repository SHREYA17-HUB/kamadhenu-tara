import { useEffect, useState } from "react";
import { X, Send } from "lucide-react";
import { ALL_PRODUCTS, WHATSAPP_NUMBER } from "@/data/site";
import { useQuote } from "./quote-context";

export default function QuoteModal() {
  const { open, product, closeQuote } = useQuote();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [item, setItem] = useState("");
  const [qty, setQty] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (open) setItem(product || "");
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, product]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeQuote();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeQuote]);

  if (!open) return null;

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "Hello Kamadhenu Tarpaulin Industry, I would like a quotation.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      city && `City: ${city}`,
      `Product: ${item || "Not specified"}`,
      qty && `Quantity: ${qty}`,
      notes && `Notes: ${notes}`,
    ].filter(Boolean);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener",
    );
    closeQuote();
  };

  const field =
    "w-full border border-silver/18 bg-ink/50 px-4 py-3 text-sm text-ivory outline-none transition-colors placeholder:text-warm/50 focus:border-gold";

  return (
    <div
      className="fixed inset-0 z-[96] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
      onClick={closeQuote}
      role="dialog"
      aria-modal="true"
      aria-label="Request a quote"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto border border-gold/30 bg-card p-7 sm:p-9"
        style={{ animation: "k-fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both" }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">Request a Quote</p>
            <h2 className="mt-3 font-display text-3xl leading-tight silver-text">
              Tell us what you need
            </h2>
          </div>
          <button onClick={closeQuote} aria-label="Close" className="p-1 text-warm hover:text-ivory">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-5 h-px gold-rule" />

        <form onSubmit={send} className="mt-6 space-y-4">
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name *"
            className={field}
          />
          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone number *"
            className={field}
          />
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
            className={field}
          />
          <select value={item} onChange={(e) => setItem(e.target.value)} className={field}>
            <option value="">Select a product</option>
            {ALL_PRODUCTS.map((p) => (
              <option key={p.id} value={p.name} className="bg-ink">
                {p.name}
              </option>
            ))}
          </select>
          <input
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            placeholder="Quantity / size required"
            className={field}
          />
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Additional details"
            rows={3}
            className={field}
          />

          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-2 border border-gold bg-gold/95 px-6 py-4 text-[0.68rem] tracking-[0.28em] text-ink uppercase transition-colors hover:bg-gold-hi"
          >
            Send via WhatsApp
            <Send className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
          </button>
          <p className="text-center text-[0.6rem] tracking-[0.2em] text-warm/70 uppercase">
            We usually respond within a few hours
          </p>
        </form>
      </div>
    </div>
  );
}
