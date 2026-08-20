import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Kamadhenu on WhatsApp"
      className="fixed bottom-6 right-5 z-[80] flex h-14 w-14 items-center justify-center rounded-full border border-gold/60 bg-gold text-ink shadow-[0_0_30px_rgba(200,162,74,0.35)] transition-transform duration-500 hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
