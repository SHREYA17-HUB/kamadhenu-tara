import { createFileRoute } from "@tanstack/react-router";

import Loader from "@/components/Loader";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Heritage from "@/components/Heritage";
import Products from "@/components/Products";
import Applications from "@/components/Applications";
import WhyUs from "@/components/WhyUs";
import Strength from "@/components/Strength";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { QuoteProvider } from "@/components/quote-context";
import { useScrollReveal } from "@/lib/reveal";

const TITLE = "Kamadhenu Tarpaulin Industry — Premium Tarpaulins Since 1985";
const DESC =
  "Manufacturer and supplier of premium tarpaulins, pond liners, flooring, agriculture covers, industrial nets and ropes. Strength. Protection. Excellence.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kamadhenu-tara.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://kamadhenu-tara.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Kamadhenu Tarpaulin Industry",
          foundingDate: "1985",
          slogan: "Strength. Protection. Excellence.",
          url: "https://kamadhenu-tara.lovable.app/",
        }),
      },
    ],
  }),
});

function Index() {
  useScrollReveal();

  return (
    <QuoteProvider>
      <Loader />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Heritage />
        <Products />
        <Applications />
        <WhyUs />
        <Strength />
        <Gallery />
      </main>
      <Footer />
      <QuoteModal />
      <FloatingWhatsApp />
    </QuoteProvider>
  );
}
