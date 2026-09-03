import type { HeroSlide } from "@/types/tourism";

/**
 * HERO CAROUSEL DATA
 *
 * These are temporary development images only.
 * Replace them with approved project-owned/licensed assets
 * before production deployment.
 */

export const heroSlides: HeroSlide[] = [
  {
    id: "siok-falls",

    eyebrow: "DISCOVER KORONADAL",

    title: "Siok Falls & Adventure",

    description:
      "Immerse yourself in the majestic beauty of cascading pristine waters, verdant highlands, and the rich cultural soul of South Cotabato’s golden crown.",

    backgroundImage:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=2400&q=85",

    backgroundAlt:
      "Cascading waterfall surrounded by lush tropical vegetation",

    backgroundPosition:
      "center center",

    cta: {
      label: "Explore Destination",
      href: "/destinations",
    },
  },

  {
    id: "koronadal-culture",

    eyebrow: "VIBRANT CULTURE",

    title: "Experience Koronadal",

    description:
      "Discover festivals, traditions, indigenous heritage, and community stories that make Koronadal a destination worth experiencing.",

    backgroundImage:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=2400&q=85",

    backgroundAlt:
      "Colorful cultural celebration",

    backgroundPosition:
      "center center",

    cta: {
      label: "Explore Culture",
      href: "/destinations",
    },
  },

  {
    id: "nature-adventure",

    eyebrow: "LIMITLESS ADVENTURE",

    title: "Into the Wild",

    description:
      "From waterfalls and mountain trails to caves and eco-parks, explore the natural landscapes surrounding Koronadal and South Cotabato.",

    backgroundImage:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2400&q=85",

    backgroundAlt:
      "Mountain and forest landscape",

    backgroundPosition:
      "center center",

    cta: {
      label: "Find an Adventure",
      href: "/destinations",
    },
  },
];