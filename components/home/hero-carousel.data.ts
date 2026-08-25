import type { HeroSlide } from "./hero-carousel.types";

export const heroSlides: HeroSlide[] = [
  {
    id: "koronadal-discover",
    label: "DISCOVER KORONADAL",
    title: "Discover Koronadal",
    description:
      "The official tourism and digital directory portal for the City of Koronadal, South Cotabato.",

    backgroundImage: null,

    backgroundAlt:
      "Scenic landscape representing Koronadal City and South Cotabato.",

    backgroundPosition: "center center",

    cta: {
      label: "Explore Destinations",
      href: "/search?category=destinations",
    },
  },

  {
    id: "south-cotabato-adventure",
    label: "NATURE & ADVENTURE",
    title: "South Cotabato: Gateway to Adventure",
    description:
      "Discover waterfalls, eco-parks, mountain destinations, and outdoor experiences across South Cotabato.",

    backgroundImage: null,

    backgroundAlt:
      "Natural landscape representing the adventure destinations of South Cotabato.",

    backgroundPosition: "center center",

    cta: {
      label: "Explore Destinations",
      href: "/search?category=destinations",
    },
  },

  {
    id: "tnalak-festival",
    label: "VIBRANT CULTURE",
    title: "Experience the Culture of South Cotabato",
    description:
      "Explore festivals, traditions, local stories, and community celebrations that bring South Cotabato to life.",

    backgroundImage: null,

    backgroundAlt:
      "Cultural festival scene representing the traditions of South Cotabato.",

    backgroundPosition: "center center",

    cta: {
      label: "Explore Events",
      href: "/search?category=events",
    },
  },
];