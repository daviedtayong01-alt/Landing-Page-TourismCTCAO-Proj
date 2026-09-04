import type { Locale } from "./config";

const englishTranslations = {
  nav: {
    home: "Home",
    destinations: "Destinations",
    dotListed: "DOT Listed",
    stayEat: "Stay & Eat",
    transport: "Transport",
    mice: "MICE",
    events: "Events",
    reports: "Reports",
    search: "Search",
    favorites: "Favorites",
    reportUpdate: "Report an Update",
  },

  language: {
    label: "Language",
    english: "English",
    filipino: "Filipino",
    switchToEnglish: "Switch to English",
    switchToFilipino: "Switch to Filipino",
  },

  common: {
    search: "Search",
    clear: "Clear",
    clearFilters: "Clear filters",
    resetFilters: "Reset filters",
    viewDetails: "View details",
    readMore: "Read more",
    explore: "Explore",
    viewMap: "View map",
    browseAll: "Browse all",
    back: "Back",
    close: "Close",
    open: "Open",
    loading: "Loading",
    noResults: "No results found",
    all: "All",
    found: "found",
    destination: "destination",
    destinations: "destinations",
    establishment: "establishment",
    establishments: "establishments",
    event: "event",
    events: "events",
    venue: "venue",
    venues: "venues",
  },

  home: {
    hero: {
      eyebrow: "Explore Koronadal",
      title: "Discover the Heart of South Cotabato",
      description:
        "Explore destinations, establishments, events, transport information, and MICE venues across Koronadal City.",
      searchPlaceholder: "What are you looking for?",
      searchButton: "Search",
    },

    search: {
      title: "Find your next experience",
      description:
        "Search destinations, establishments, MICE venues, events, and transport information.",
      destinations: "Destinations",
      establishments: "Establishments",
      mice: "MICE",
      transport: "Transport",
    },

    destinations: {
      eyebrow: "Explore",
      title: "Popular Destinations",
      description:
        "Discover places worth visiting around Koronadal City.",
      browseAll: "Browse all destinations",
    },

    experience: {
      eyebrow: "Experience",
      title: "Things to do",
      description:
        "Explore experiences that make a visit to Koronadal memorable.",
    },

    map: {
      eyebrow: "Discover the city",
      title: "Explore Koronadal",
      description:
        "Get oriented with key areas and tourism destinations around the city.",
      browseMap: "View destinations",
    },

    mice: {
      eyebrow: "Business events",
      title: "MICE Venues",
      description:
        "Explore venues suitable for meetings, incentives, conferences, and events.",
      browseAll: "Browse all MICE venues",
    },

    transport: {
      eyebrow: "Getting around",
      title: "Transport Guide",
      description:
        "Review configured routes and visitor-oriented transport information.",
      viewTransportGuide: "View transport guide",
    },

    fare: {
      eyebrow: "Visitor transport",
      title: "Configured Tricycle Fare Matrix",
      description:
        "Review configured fare values for selected city routes.",
      regular: "Regular",
      discounted: "Discounted",
      route: "Route",
      status: "Status",
      amount: "Fare",
    },

    establishments: {
      eyebrow: "Stay & eat",
      title: "Featured Establishments",
      description:
        "Find accommodation, dining, and other listed establishments.",
      browseAll: "Browse all establishments",
    },
  },

  directory: {
    destinations: {
      title: "Destinations",
      description:
        "Explore tourism destinations and places to visit in Koronadal.",
      category: "Category",
      searchPlaceholder: "Search destinations...",
    },

    events: {
      title: "Events",
      description:
        "Discover tourism-related events and activities.",
      category: "Category",
      searchPlaceholder: "Search events...",
    },

    mice: {
      title: "MICE Venues",
      description:
        "Find venues for meetings, incentives, conferences, and events.",
      venueType: "Venue type",
      capacity: "Capacity",
      searchPlaceholder: "Search MICE venues...",
    },
  },

  search: {
    title: "Global Search",
    description:
      "Search across listed destinations, establishments, events, MICE venues, and configured transport routes.",
    placeholder: "Search tourism information...",
    button: "Search",
    results: "Search results",
    savedListings: "Saved listings",
    resultCount: "results",
    noResults: "No matching tourism information was found.",
    noSavedListings: "You have no saved listings yet.",
    clearSearch: "Clear search",
    contentType: "Content type",
    allTypes: "All types",
    destinations: "Destinations",
    establishments: "Establishments",
    events: "Events",
    mice: "MICE venues",
    transport: "Transport",
    favorites: "Favorites",
  },

  footer: {
    city: "Koronadal City",
    location: "South Cotabato, Philippines",
    description:
      "A tourism information portal for discovering Koronadal City.",
    explore: "Explore",
    information: "Information",
    contact: "Contact",
    citizenSupport: "Citizen support",
    destinations: "Destinations",
    events: "Events",
    businessDirectory: "Business directory",
    miceVenues: "MICE venues",
    transportGuide: "Transport guide",
    reports: "Reports",
    address: "Address",
    phone: "Phone",
    email: "Email",
    developedBy: "Developed by",
    copyright: "All rights reserved.",
  },

  errors: {
    notFound: {
      eyebrow: "404",
      title: "Page not found",
      description:
        "The page you are looking for does not exist or may have been moved.",
      backHome: "Back to home",
      browseDestinations: "Browse destinations",
      browseEvents: "Browse events",
    },
  },

  accessibility: {
    primaryNavigation: "Primary navigation",
    mobileNavigation: "Mobile navigation",
    search: "Search",
    favoriteCount: "Favorite count",
    previousSlide: "Previous slide",
    nextSlide: "Next slide",
    pauseSlide: "Pause carousel autoplay",
    resumeSlide: "Resume carousel autoplay",
    rating: "Rating",
    mapPreview: "Map preview",
  },
};

export type TranslationDictionary = typeof englishTranslations;

export const translations: Record<Locale, TranslationDictionary> = {
  en: englishTranslations,

  fil: {
    nav: {
      home: "Home",
      destinations: "Mga Destinasyon",
      dotListed: "DOT Listed",
      stayEat: "Tirahan at Pagkainan",
      transport: "Transportasyon",
      mice: "MICE",
      events: "Mga Kaganapan",
      reports: "Mga Ulat",
      search: "Maghanap",
      favorites: "Mga Paborito",
      reportUpdate: "Mag-ulat ng Update",
    },

    language: {
      label: "Wika",
      english: "Ingles",
      filipino: "Filipino",
      switchToEnglish: "Lumipat sa Ingles",
      switchToFilipino: "Lumipat sa Filipino",
    },

    common: {
      search: "Maghanap",
      clear: "I-clear",
      clearFilters: "I-clear ang mga filter",
      resetFilters: "I-reset ang mga filter",
      viewDetails: "Tingnan ang detalye",
      readMore: "Magbasa pa",
      explore: "Tuklasin",
      viewMap: "Tingnan ang mapa",
      browseAll: "Tingnan lahat",
      back: "Bumalik",
      close: "Isara",
      open: "Buksan",
      loading: "Naglo-load",
      noResults: "Walang nakitang resulta",
      all: "Lahat",
      found: "nahanap",
      destination: "destinasyon",
      destinations: "mga destinasyon",
      establishment: "establisimyento",
      establishments: "mga establisimyento",
      event: "kaganapan",
      events: "mga kaganapan",
      venue: "lugar",
      venues: "mga lugar",
    },

    home: {
      hero: {
        eyebrow: "Tuklasin ang Koronadal",
        title: "Tuklasin ang Puso ng South Cotabato",
        description:
          "Tuklasin ang mga destinasyon, establisimyento, kaganapan, impormasyon sa transportasyon, at MICE venue sa Koronadal City.",
        searchPlaceholder: "Ano ang hinahanap mo?",
        searchButton: "Maghanap",
      },

      search: {
        title: "Hanapin ang iyong susunod na karanasan",
        description:
          "Maghanap ng mga destinasyon, establisimyento, MICE venue, kaganapan, at impormasyon sa transportasyon.",
        destinations: "Mga Destinasyon",
        establishments: "Mga Establisimyento",
        mice: "MICE",
        transport: "Transportasyon",
      },

      destinations: {
        eyebrow: "Tuklasin",
        title: "Mga Patok na Destinasyon",
        description:
          "Tuklasin ang mga lugar na maaaring puntahan sa Koronadal City.",
        browseAll: "Tingnan lahat ng destinasyon",
      },

      experience: {
        eyebrow: "Karanasan",
        title: "Mga Maaaring Gawin",
        description:
          "Tuklasin ang mga karanasang maaaring gawing espesyal ang iyong pagbisita sa Koronadal.",
      },

      map: {
        eyebrow: "Tuklasin ang lungsod",
        title: "Galugarin ang Koronadal",
        description:
          "Kilalanin ang mahahalagang lugar at destinasyon ng turismo sa lungsod.",
        browseMap: "Tingnan ang mga destinasyon",
      },

      mice: {
        eyebrow: "Mga business event",
        title: "Mga MICE Venue",
        description:
          "Tuklasin ang mga venue para sa meetings, incentives, conferences, at events.",
        browseAll: "Tingnan lahat ng MICE venue",
      },

      transport: {
        eyebrow: "Paglilibot",
        title: "Gabay sa Transportasyon",
        description:
          "Tingnan ang mga naka-configure na ruta at impormasyon sa transportasyon para sa mga bisita.",
        viewTransportGuide: "Tingnan ang gabay sa transportasyon",
      },

      fare: {
        eyebrow: "Transportasyon para sa bisita",
        title: "Naka-configure na Tricycle Fare Matrix",
        description:
          "Tingnan ang mga naka-configure na halaga ng pamasahe para sa piling ruta sa lungsod.",
        regular: "Regular",
        discounted: "May diskwento",
        route: "Ruta",
        status: "Status",
        amount: "Pamasahe",
      },

      establishments: {
        eyebrow: "Tirahan at pagkain",
        title: "Mga Tampok na Establisimyento",
        description:
          "Maghanap ng mga tirahan, kainan, at iba pang nakalistang establisimyento.",
        browseAll: "Tingnan lahat ng establisimyento",
      },
    },

    directory: {
      destinations: {
        title: "Mga Destinasyon",
        description:
          "Tuklasin ang mga destinasyon at lugar na maaaring puntahan sa Koronadal.",
        category: "Kategorya",
        searchPlaceholder: "Maghanap ng mga destinasyon...",
      },

      events: {
        title: "Mga Kaganapan",
        description:
          "Tuklasin ang mga kaganapan at aktibidad na may kaugnayan sa turismo.",
        category: "Kategorya",
        searchPlaceholder: "Maghanap ng mga kaganapan...",
      },

      mice: {
        title: "Mga MICE Venue",
        description:
          "Maghanap ng mga venue para sa meetings, incentives, conferences, at events.",
        venueType: "Uri ng venue",
        capacity: "Kapasidad",
        searchPlaceholder: "Maghanap ng mga MICE venue...",
      },
    },

    search: {
      title: "Pangkalahatang Paghahanap",
      description:
        "Maghanap sa mga nakalistang destinasyon, establisimyento, kaganapan, MICE venue, at naka-configure na ruta ng transportasyon.",
      placeholder: "Maghanap ng impormasyon sa turismo...",
      button: "Maghanap",
      results: "Mga resulta ng paghahanap",
      savedListings: "Mga naka-save na listahan",
      resultCount: "mga resulta",
      noResults: "Walang nakitang tumutugmang impormasyon sa turismo.",
      noSavedListings: "Wala ka pang naka-save na listahan.",
      clearSearch: "I-clear ang paghahanap",
      contentType: "Uri ng nilalaman",
      allTypes: "Lahat ng uri",
      destinations: "Mga Destinasyon",
      establishments: "Mga Establisimyento",
      events: "Mga Kaganapan",
      mice: "Mga MICE venue",
      transport: "Transportasyon",
      favorites: "Mga Paborito",
    },

    footer: {
      city: "Lungsod ng Koronadal",
      location: "South Cotabato, Pilipinas",
      description:
        "Isang tourism information portal para sa pagtuklas sa Koronadal City.",
      explore: "Tuklasin",
      information: "Impormasyon",
      contact: "Makipag-ugnayan",
      citizenSupport: "Suporta sa mamamayan",
      destinations: "Mga Destinasyon",
      events: "Mga Kaganapan",
      businessDirectory: "Direktoryo ng Negosyo",
      miceVenues: "Mga MICE Venue",
      transportGuide: "Gabay sa Transportasyon",
      reports: "Mga Ulat",
      address: "Address",
      phone: "Telepono",
      email: "Email",
      developedBy: "Binuo ng",
      copyright: "Lahat ng karapatan ay nakalaan.",
    },

    errors: {
      notFound: {
        eyebrow: "404",
        title: "Hindi nahanap ang pahina",
        description:
          "Ang pahinang hinahanap mo ay hindi umiiral o maaaring nailipat.",
        backHome: "Bumalik sa home",
        browseDestinations: "Tingnan ang mga destinasyon",
        browseEvents: "Tingnan ang mga kaganapan",
      },
    },

    accessibility: {
      primaryNavigation: "Pangunahing nabigasyon",
      mobileNavigation: "Mobile navigation",
      search: "Paghahanap",
      favoriteCount: "Bilang ng mga paborito",
      previousSlide: "Nakaraang slide",
      nextSlide: "Susunod na slide",
      pauseSlide: "I-pause ang carousel",
      resumeSlide: "Ipagpatuloy ang carousel",
      rating: "Rating",
      mapPreview: "Preview ng mapa",
    },
  },
};

export function getTranslations(
  locale: Locale,
): TranslationDictionary {
  return translations[locale];
}