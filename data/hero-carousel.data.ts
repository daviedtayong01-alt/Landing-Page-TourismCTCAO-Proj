import type { HeroSlide } from "@/types/tourism";

/**
 * ============================================================
 * HERO CAROUSEL DATA
 * ============================================================
 *
 * These are temporary development images only.
 * Replace them with approved project-owned/licensed assets
 * before production deployment.
 */

export const heroSlides: HeroSlide[] = [
  {
    id: "siok-falls",

    eyebrow: {
      en: "DISCOVER KORONADAL",
      fil: "TUKLASIN ANG KORONADAL",
    },

    title: {
      en: "Siok Falls & Adventure",
      fil: "Siok Falls at Pakikipagsapalaran",
    },

    description: {
      en: "Immerse yourself in the majestic beauty of cascading pristine waters, verdant highlands, and the rich cultural soul of South Cotabato’s golden crown.",
      fil: "Damhin ang marilag na kagandahan ng umaagos na malilinis na tubig, luntiang kabundukan, at mayamang kulturang kaluluwa ng South Cotabato.",
    },

    backgroundImage:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=2400&q=85",

    backgroundAlt: {
      en: "Cascading waterfall surrounded by lush tropical vegetation",
      fil: "Umaagos na talon na napaliligiran ng luntiang tropikal na halaman",
    },

    backgroundPosition: "center center",

    cta: {
      label: {
        en: "Explore Destination",
        fil: "Tuklasin ang Destinasyon",
      },
      href: "/destinations",
    },
  },

  {
    id: "koronadal-culture",

    eyebrow: {
      en: "VIBRANT CULTURE",
      fil: "MASIGLANG KULTURA",
    },

    title: {
      en: "Experience Koronadal",
      fil: "Damhin ang Koronadal",
    },

    description: {
      en: "Discover festivals, traditions, indigenous heritage, and community stories that make Koronadal a destination worth experiencing.",
      fil: "Tuklasin ang mga pista, tradisyon, katutubong pamana, at mga kuwento ng komunidad na nagpapatingkad sa Koronadal bilang isang destinasyong dapat maranasan.",
    },

    backgroundImage:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=2400&q=85",

    backgroundAlt: {
      en: "Colorful cultural celebration",
      fil: "Makukulay na pagdiriwang pangkultura",
    },

    backgroundPosition: "center center",

    cta: {
      label: {
        en: "Explore Culture",
        fil: "Tuklasin ang Kultura",
      },
      href: "/destinations",
    },
  },

  {
    id: "nature-adventure",

    eyebrow: {
      en: "LIMITLESS ADVENTURE",
      fil: "WALANG HANGGANG PAKIKIPAGSAPALARAN",
    },

    title: {
      en: "Into the Wild",
      fil: "Sa Puso ng Kalikasan",
    },

    description: {
      en: "From waterfalls and mountain trails to caves and eco-parks, explore the natural landscapes surrounding Koronadal and South Cotabato.",
      fil: "Mula sa mga talon at daanan sa kabundukan hanggang sa mga kuweba at eco-park, tuklasin ang mga likas na tanawin sa paligid ng Koronadal at South Cotabato.",
    },

    backgroundImage:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2400&q=85",

    backgroundAlt: {
      en: "Mountain and forest landscape",
      fil: "Tanawin ng kabundukan at kagubatan",
    },

    backgroundPosition: "center center",

    cta: {
      label: {
        en: "Find an Adventure",
        fil: "Maghanap ng Pakikipagsapalaran",
      },
      href: "/destinations",
    },
  },
];