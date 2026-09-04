import type {
  Destination,
  Establishment,
  ExperienceItem,
  MiceVenue,
  NewsItem,
  TourismEvent,
} from "@/types/tourism";

/**
 * ============================================================
 * ESTABLISHMENTS
 * ============================================================
 *
 * These values continue to serve the existing homepage,
 * business directory, business detail route, and search route.
 *
 * DEVELOPMENT DATA:
 * Accreditation, amenities, descriptions, contact details,
 * ratings, and other business attributes must be verified
 * against an authorized source before production use.
 */

export const establishments: Establishment[] = [
  {
    id: "paraiso-verde",

    category: {
      en: "Hotels & Resorts",
      fil: "Mga Hotel at Resort",
    },

    name: {
      en: "The Paraiso Verde Resort",
      fil: "The Paraiso Verde Resort",
    },

    location: {
      en: "Brgy. Morales, Koronadal City",
      fil: "Brgy. Morales, Lungsod ng Koronadal",
    },

    phone: "+63 (83) 228-4012",

    description: {
      en: "A premier destination eco-resort offering world-class pool facilities, lush premium accommodations, and complete leisure amenities.",
      fil: "Isang pangunahing eco-resort na nag-aalok ng world-class na mga pasilidad sa swimming pool, komportableng premium na tirahan, at kumpletong mga pasilidad para sa paglilibang.",
    },

    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85",

    imageAlt: {
      en: "The Paraiso Verde Resort",
      fil: "The Paraiso Verde Resort",
    },

    rating: 4.8,

    accreditationStatus: {
      en: "DOT Accredited",
      fil: "Akreditado ng DOT",
    },

    accredited: true,

    ecoFriendly: true,

    amenities: [
      {
        en: "Pool facilities",
        fil: "Mga pasilidad sa swimming pool",
      },
      {
        en: "Guest accommodations",
        fil: "Mga pasilidad para sa panunuluyan",
      },
      {
        en: "Leisure amenities",
        fil: "Mga pasilidad para sa paglilibang",
      },
    ],
  },

  {
    id: "habi-hotel",

    category: {
      en: "Hotels & Resorts",
      fil: "Mga Hotel at Resort",
    },

    name: {
      en: "Habi Hotel",
      fil: "Habi Hotel",
    },

    location: {
      en: "Albert Morrow Street, Koronadal City",
      fil: "Albert Morrow Street, Lungsod ng Koronadal",
    },

    phone: "+63 (83) 228-5011",

    description: {
      en: "Located in the heart of the city, offering exquisite suites, high-end local dining, and high-capacity corporate event halls.",
      fil: "Matatagpuan sa puso ng lungsod at nag-aalok ng mga de-kalidad na suite, premium na lokal na kainan, at malalaking bulwagan para sa mga corporate event.",
    },

    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=85",

    imageAlt: {
      en: "Habi Hotel",
      fil: "Habi Hotel",
    },

    rating: 4.6,

    accreditationStatus: {
      en: "DOT Accredited",
      fil: "Akreditado ng DOT",
    },

    accredited: true,

    ecoFriendly: true,

    amenities: [
      {
        en: "Guest suites",
        fil: "Mga guest suite",
      },
      {
        en: "Local dining",
        fil: "Lokal na kainan",
      },
      {
        en: "Event halls",
        fil: "Mga event hall",
      },
    ],
  },

  {
    id: "fb-hotel",

    category: {
      en: "Hotels & Resorts",
      fil: "Mga Hotel at Resort",
    },

    name: {
      en: "FB Hotel & Convention Center",
      fil: "FB Hotel & Convention Center",
    },

    location: {
      en: "Alunan Avenue, Koronadal City",
      fil: "Alunan Avenue, Lungsod ng Koronadal",
    },

    phone: "+63 (83) 228-3800",

    description: {
      en: "Accredited premier business hotel and event host. Excellent gastronomy experience featuring top local chefs.",
      fil: "Akreditadong pangunahing business hotel at venue para sa mga event. Nag-aalok ng mahusay na karanasang gastronomiya mula sa mga nangungunang lokal na chef.",
    },

    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=85",

    imageAlt: {
      en: "FB Hotel and Convention Center",
      fil: "FB Hotel and Convention Center",
    },

    rating: 4.5,

    accreditationStatus: {
      en: "DOT Accredited",
      fil: "Akreditado ng DOT",
    },

    accredited: true,

    ecoFriendly: true,

    amenities: [
      {
        en: "Business accommodation",
        fil: "Tirahan para sa mga business traveler",
      },
      {
        en: "Convention facilities",
        fil: "Mga pasilidad para sa convention",
      },
      {
        en: "Restaurant service",
        fil: "Serbisyo ng restaurant",
      },
    ],
  },
];

/**
 * ============================================================
 * DESTINATIONS
 * ============================================================
 */

export const destinations: Destination[] = [
  {
    id: "mambucal",

    category: {
      en: "CULTURE & ECO-SPOTS",
      fil: "KULTURA AT ECO-SPOTS",
    },

    name: {
      en: "Mambucal Hot Spring",
      fil: "Mambucal Hot Spring",
    },

    location: {
      en: "Koronadal City",
      fil: "Lungsod ng Koronadal",
    },

    description: {
      en: "Natural hot mineral springs nestled among rolling hills, offering relaxing pools and scenic surroundings.",
      fil: "Mga likas na hot mineral spring na matatagpuan sa pagitan ng mga luntiang burol, na nag-aalok ng mga pool para sa pagpapahinga at magandang tanawin.",
    },

    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85",

    imageAlt: {
      en: "Mambucal Hot Spring",
      fil: "Mambucal Hot Spring",
    },

    rating: 4.5,

    distance: {
      en: "20 mins from Center",
      fil: "20 minuto mula sa Sentro",
    },

    travelGuidance: {
      en: "Plan local transport from the city center and confirm operating hours with the destination before travel.",
      fil: "Planuhin ang lokal na transportasyon mula sa sentro ng lungsod at kumpirmahin ang oras ng operasyon bago bumiyahe.",
    },

    visitorGuidelines: [
      {
        en: "Respect posted site guidance and staff instructions.",
        fil: "Sundin ang mga nakapaskil na alituntunin at mga tagubilin ng staff.",
      },
      {
        en: "Keep shared natural areas clean.",
        fil: "Panatilihing malinis ang mga pampublikong likas na lugar.",
      },
      {
        en: "Confirm access conditions before departing.",
        fil: "Kumpirmahin ang kasalukuyang kondisyon ng pag-access bago bumiyahe.",
      },
    ],
  },

  {
    id: "cabillon",

    category: {
      en: "NATURE & ADVENTURE",
      fil: "KALIKASAN AT PAKIKIPAGSAPALARAN",
    },

    name: {
      en: "Cabillon Orchidarium",
      fil: "Cabillon Orchidarium",
    },

    location: {
      en: "Koronadal City",
      fil: "Lungsod ng Koronadal",
    },

    description: {
      en: "A peaceful collection of native orchids and lush tropical plants designed for nature lovers.",
      fil: "Isang tahimik na koleksiyon ng mga katutubong orkidyas at luntiang halamang tropikal para sa mga mahilig sa kalikasan.",
    },

    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=85",

    imageAlt: {
      en: "Cabillon Orchidarium",
      fil: "Cabillon Orchidarium",
    },

    rating: 4.7,

    distance: {
      en: "10 mins from Center",
      fil: "10 minuto mula sa Sentro",
    },

    travelGuidance: {
      en: "Use local transport from Koronadal City and arrange the return journey before visiting.",
      fil: "Gumamit ng lokal na transportasyon mula sa Lungsod ng Koronadal at ayusin na ang biyahe pabalik bago bumisita.",
    },

    visitorGuidelines: [
      {
        en: "Stay on designated visitor paths.",
        fil: "Manatili sa mga itinalagang daanan ng bisita.",
      },
      {
        en: "Observe site-specific entry guidance.",
        fil: "Sundin ang mga partikular na alituntunin sa pagpasok ng lugar.",
      },
      {
        en: "Help protect plants and natural features.",
        fil: "Tumulong na pangalagaan ang mga halaman at likas na katangian ng lugar.",
      },
    ],
  },

  {
    id: "caddating",

    category: {
      en: "SPELEOLOGIC ADVENTURE",
      fil: "PAKIKIPAGSAPALARAN SA KUWEBA",
    },

    name: {
      en: "Caddating Cave Network",
      fil: "Caddating Cave Network",
    },

    location: {
      en: "South Cotabato",
      fil: "South Cotabato",
    },

    description: {
      en: "For the daring explorers: complex limestone tunnels, pristine underground chambers, and raw nature.",
      fil: "Para sa matatapang na manlalakbay: mga komplikadong lagusan ng limestone, malilinis na silid sa ilalim ng lupa, at likas na kalikasan.",
    },

    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=85",

    imageAlt: {
      en: "Caddating Cave Network",
      fil: "Caddating Cave Network",
    },

    rating: 4.6,

    distance: {
      en: "35 mins from Center",
      fil: "35 minuto mula sa Sentro",
    },

    travelGuidance: {
      en: "Coordinate travel locally and verify current access conditions before heading to the cave area.",
      fil: "Makipag-ugnayan para sa lokal na transportasyon at tiyakin ang kasalukuyang kondisyon ng pag-access bago pumunta sa lugar ng kuweba.",
    },

    visitorGuidelines: [
      {
        en: "Do not enter restricted areas.",
        fil: "Huwag pumasok sa mga pinaghihigpitang lugar.",
      },
      {
        en: "Use appropriate footwear and safety equipment.",
        fil: "Gumamit ng angkop na sapatos at kagamitang pangkaligtasan.",
      },
      {
        en: "Follow local guidance for cave access.",
        fil: "Sundin ang lokal na gabay para sa pagpasok sa kuweba.",
      },
    ],
  },

  {
    id: "tinago",

    category: {
      en: "SCENIC LANDSCAPE",
      fil: "MAGANDANG TANAWIN",
    },

    name: {
      en: "Tinago Peak",
      fil: "Tinago Peak",
    },

    location: {
      en: "South Cotabato",
      fil: "South Cotabato",
    },

    description: {
      en: "Experience breathtaking panoramic highland views featuring agricultural stairways in the mountains.",
      fil: "Damhin ang nakamamanghang malawak na tanawin ng kabundukan na tampok ang mga hagdang taniman sa mga bundok.",
    },

    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85",

    imageAlt: {
      en: "Tinago Peak",
      fil: "Tinago Peak",
    },

    rating: 4.8,

    distance: {
      en: "25 mins from Center",
      fil: "25 minuto mula sa Sentro",
    },

    travelGuidance: {
      en: "Allow additional travel time for upland roads and check weather conditions before departure.",
      fil: "Maglaan ng karagdagang oras sa biyahe para sa mga kalsadang paakyat at tingnan ang kondisyon ng panahon bago umalis.",
    },

    visitorGuidelines: [
      {
        en: "Respect agricultural and private property boundaries.",
        fil: "Igalang ang mga hangganan ng lupang agrikultural at pribadong ari-arian.",
      },
      {
        en: "Bring drinking water and sun protection.",
        fil: "Magdala ng inuming tubig at proteksiyon laban sa araw.",
      },
      {
        en: "Leave no trace during your visit.",
        fil: "Huwag mag-iwan ng anumang basura o bakas sa iyong pagbisita.",
      },
    ],
  },
];

/**
 * ============================================================
 * NEWS
 * ============================================================
 *
 * DEVELOPMENT DATA:
 * Event dates, advisories, access conditions, and other
 * time-sensitive information must be verified before publication.
 */

export const newsItems: NewsItem[] = [
  {
    id: "hinugyaw-festival",

    category: {
      en: "EVENT",
      fil: "KAGANAPAN",
    },

    date: {
      en: "OCTOBER 18–20, 2026",
      fil: "OKTUBRE 18–20, 2026",
    },

    title: {
      en: "Koronadal Hinugyaw Festival 2026",
      fil: "Koronadal Hinugyaw Festival 2026",
    },

    description: {
      en: "Preparations begin for another celebration of local culture, music, and community.",
      fil: "Nagsisimula na ang paghahanda para sa panibagong pagdiriwang ng lokal na kultura, musika, at komunidad.",
    },

    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1000&q=85",

    imageAlt: {
      en: "Koronadal Hinugyaw Festival",
      fil: "Koronadal Hinugyaw Festival",
    },
  },

  {
    id: "eco-trail",

    category: {
      en: "NEWLY PUBLISHED TODAY",
      fil: "BAGONG NAILATHALA NGAYON",
    },

    date: {
      en: "GUIDE",
      fil: "GABAY",
    },

    title: {
      en: "Eco-Trail Siok Peak Access Guidelines",
      fil: "Mga Gabay sa Pag-access sa Eco-Trail Siok Peak",
    },

    description: {
      en: "City tourism partners release updated recommendations for visitors exploring natural attractions.",
      fil: "Naglabas ang mga katuwang ng city tourism ng mga na-update na rekomendasyon para sa mga bisitang tumutuklas sa mga likas na atraksyon.",
    },

    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=85",

    imageAlt: {
      en: "Eco-trail and waterfall",
      fil: "Eco-trail at talon",
    },
  },

  {
    id: "bridge-maintenance",

    category: {
      en: "ADVISORY",
      fil: "PAABISO",
    },

    date: {
      en: "FACILITY MAINTENANCE",
      fil: "PAGMEMENTINA NG PASILIDAD",
    },

    title: {
      en: "Bridge Maintenance Near Siok Waterfalls",
      fil: "Pagmementina ng Tulay Malapit sa Siok Waterfalls",
    },

    description: {
      en: "Alternative routes may be required while scheduled maintenance work is underway.",
      fil: "Maaaring kailanganing gumamit ng mga alternatibong ruta habang isinasagawa ang nakatakdang maintenance.",
    },

    image:
      "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=1000&q=85",

    imageAlt: {
      en: "Road and tourism infrastructure maintenance",
      fil: "Pagmementina ng kalsada at imprastraktura ng turismo",
    },
  },
];

/**
 * ============================================================
 * EXISTING SEARCH CONTRACT
 * ============================================================
 *
 * DO NOT rename these properties without also changing
 * app/search/page.tsx:
 *
 *   name
 *   category
 *   location
 *   dateLabel
 */

export const tourismEvents: TourismEvent[] = [
  {
    id: "hinugyaw-festival-2026",

    name: {
      en: "Koronadal Hinugyaw Festival 2026",
      fil: "Koronadal Hinugyaw Festival 2026",
    },

    category: {
      en: "Festival",
      fil: "Pista",
    },

    location: {
      en: "Koronadal City",
      fil: "Lungsod ng Koronadal",
    },

    dateLabel: {
      en: "October 18–20, 2026",
      fil: "Oktubre 18–20, 2026",
    },

    description: {
      en: "Experience one of Koronadal's biggest celebrations of culture, community, music, and local traditions.",
      fil: "Damhin ang isa sa pinakamalalaking pagdiriwang ng Koronadal para sa kultura, komunidad, musika, at mga lokal na tradisyon.",
    },

    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1000&q=85",

    imageAlt: {
      en: "Koronadal Hinugyaw Festival",
      fil: "Koronadal Hinugyaw Festival",
    },
  },

  {
    id: "eco-trail-guidelines",

    name: {
      en: "Eco-Trail Safety Guidelines",
      fil: "Mga Gabay sa Kaligtasan sa Eco-Trail",
    },

    category: {
      en: "Advisory",
      fil: "Paabiso",
    },

    location: {
      en: "Koronadal City",
      fil: "Lungsod ng Koronadal",
    },

    dateLabel: {
      en: "Updated 2026",
      fil: "Na-update 2026",
    },

    description: {
      en: "Review updated visitor guidelines before exploring Koronadal's natural attractions and eco-trails.",
      fil: "Basahin ang mga na-update na gabay para sa mga bisita bago tuklasin ang mga likas na atraksyon at eco-trail ng Koronadal.",
    },

    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=85",

    imageAlt: {
      en: "Eco-trail safety information",
      fil: "Impormasyon sa kaligtasan sa eco-trail",
    },
  },

  {
    id: "bridge-maintenance",

    name: {
      en: "Bridge Maintenance Near Siok Waterfalls",
      fil: "Pagmementina ng Tulay Malapit sa Siok Waterfalls",
    },

    category: {
      en: "Advisory",
      fil: "Paabiso",
    },

    location: {
      en: "Siok Waterfalls",
      fil: "Siok Waterfalls",
    },

    dateLabel: {
      en: "Tourism Advisory",
      fil: "Paabiso sa Turismo",
    },

    description: {
      en: "Visitors should review alternative routes while scheduled infrastructure maintenance is underway.",
      fil: "Dapat suriin ng mga bisita ang mga alternatibong ruta habang isinasagawa ang nakatakdang maintenance ng imprastraktura.",
    },

    image:
      "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=1000&q=85",

    imageAlt: {
      en: "Road maintenance near a tourism destination",
      fil: "Pagmementina ng kalsada malapit sa isang destinasyong panturismo",
    },
  },
];

/**
 * ============================================================
 * MICE
 * ============================================================
 *
 * DEVELOPMENT DATA:
 * Accreditation and venue capacity must be verified against
 * an authorized source before production use.
 */

export const miceVenues: MiceVenue[] = [
  {
    id: "gym",

    name: {
      en: "South Cotabato Gym & Cultural Center",
      fil: "South Cotabato Gym & Cultural Center",
    },

    location: {
      en: "Alunan Avenue, Koronadal City",
      fil: "Alunan Avenue, Lungsod ng Koronadal",
    },

    capacity: {
      en: "5,000 seats",
      fil: "5,000 upuan",
    },

    capacityValue: 5000,

    venueType: {
      en: "Cultural center",
      fil: "Sentro pangkultura",
    },

    accredited: true,

    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=85",

    imageAlt: {
      en: "South Cotabato Gym and Cultural Center",
      fil: "South Cotabato Gym and Cultural Center",
    },

    tags: [
      {
        en: "High Capacity",
        fil: "Malaking Kapasidad",
      },
      {
        en: "City Center",
        fil: "Sentro ng Lungsod",
      },
      {
        en: "Air Conditioned",
        fil: "May Air Conditioning",
      },
    ],
  },

  {
    id: "fb-ballroom",

    name: {
      en: "FB Hotel Grand Ballroom",
      fil: "FB Hotel Grand Ballroom",
    },

    location: {
      en: "Alunan Avenue, Koronadal City",
      fil: "Alunan Avenue, Lungsod ng Koronadal",
    },

    capacity: {
      en: "800 guests",
      fil: "800 bisita",
    },

    capacityValue: 800,

    venueType: {
      en: "Ballroom",
      fil: "Bulwagan",
    },

    accredited: true,

    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=85",

    imageAlt: {
      en: "FB Hotel Grand Ballroom",
      fil: "FB Hotel Grand Ballroom",
    },

    tags: [
      {
        en: "Premium",
        fil: "Premium",
      },
      {
        en: "Ballroom",
        fil: "Bulwagan",
      },
      {
        en: "Guest Parking",
        fil: "Paradahan ng Bisita",
      },
    ],
  },

  {
    id: "marvella",

    name: {
      en: "Marvella Plaza Convention Hall",
      fil: "Marvella Plaza Convention Hall",
    },

    location: {
      en: "Koronadal City",
      fil: "Lungsod ng Koronadal",
    },

    capacity: {
      en: "400 guests",
      fil: "400 bisita",
    },

    capacityValue: 400,

    venueType: {
      en: "Convention hall",
      fil: "Bulwagan para sa convention",
    },

    accredited: true,

    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",

    imageAlt: {
      en: "Marvella Plaza Convention Hall",
      fil: "Marvella Plaza Convention Hall",
    },

    tags: [
      {
        en: "Corporate Ready",
        fil: "Handa para sa Corporate Events",
      },
      {
        en: "Modern",
        fil: "Moderno",
      },
      {
        en: "AV Equipment",
        fil: "Kagamitang AV",
      },
    ],
  },
];

/**
 * ============================================================
 * EXPERIENCE
 * ============================================================
 *
 * These are presentation/demo records. Experience preview
 * functionality should not be implemented until the data
 * contract provides an actual media source.
 */

export const experiences: ExperienceItem[] = [
  {
    id: "siok",

    duration: {
      en: "2:45",
      fil: "2:45",
    },

    title: {
      en: "Majestic Siok: Trek & Cascade",
      fil: "Maringal na Siok: Trek at Talon",
    },

    description: {
      en: "Follow local eco-trails toward South Cotabato's ultimate natural paradise.",
      fil: "Sundan ang mga lokal na eco-trail patungo sa kahanga-hangang likas na paraiso ng South Cotabato.",
    },

    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",

    imageAlt: {
      en: "Mountain landscape near Siok Falls",
      fil: "Tanawin ng kabundukan malapit sa Siok Falls",
    },
  },

  {
    id: "hinugyaw",

    duration: {
      en: "4:12",
      fil: "4:12",
    },

    title: {
      en: "Rhythms of Hinugyaw",
      fil: "Mga Indak ng Hinugyaw",
    },

    description: {
      en: "Experience vibrant local culture through festivals, tribal traditions, and community stories.",
      fil: "Damhin ang masiglang lokal na kultura sa pamamagitan ng mga pista, tradisyong pantribo, at mga kuwento ng komunidad.",
    },

    image:
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=1200&q=85",

    imageAlt: {
      en: "Koronadal cultural celebration",
      fil: "Pagdiriwang ng kulturang Koronadal",
    },
  },

  {
    id: "flavors",

    duration: {
      en: "2:20",
      fil: "2:20",
    },

    title: {
      en: "The Flavors of Koronadal",
      fil: "Mga Lasa ng Koronadal",
    },

    description: {
      en: "Explore local cuisine, agricultural products, heritage dishes, and community dining.",
      fil: "Tuklasin ang lokal na lutuin, mga produktong agrikultural, mga pagkaing pamana, at kainan ng komunidad.",
    },

    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85",

    imageAlt: {
      en: "Local food and culinary experience",
      fil: "Lokal na pagkain at karanasang pangkusina",
    },
  },
];