import type {
  Destination,
  Establishment,
  ExperienceItem,
  MiceVenue,
  NewsItem,
  TourismEvent,
} from "@/types/tourism";

/*
 * ============================================================
 * ESTABLISHMENTS
 * ============================================================
 *
 * These values continue to serve the existing homepage,
 * business directory, business detail route, and search route.
 */

export const establishments: Establishment[] = [
  {
    id: "paraiso-verde",

    category:
      "Hotels & Resorts",

    name:
      "The Paraiso Verde Resort",

    location:
      "Brgy. Morales, Koronadal City",

    phone:
      "+63 (83) 228-4012",

    description:
      "A premier destination eco-resort offering world-class pool facilities, lush premium accommodations, and complete leisure amenities.",

    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85",

    imageAlt:
      "The Paraiso Verde Resort",

    rating: 4.8,

    accreditationStatus:
      "DOT Accredited",

    accredited: true,

    ecoFriendly: true,

    amenities: [
      "Pool facilities",
      "Guest accommodations",
      "Leisure amenities",
    ],
  },

  {
    id: "habi-hotel",

    category:
      "Hotels & Resorts",

    name:
      "Habi Hotel",

    location:
      "Albert Morrow Street, Koronadal City",

    phone:
      "+63 (83) 228-5011",

    description:
      "Located in the heart of the city, offering exquisite suites, high-end local dining, and high-capacity corporate event halls.",

    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=85",

    imageAlt:
      "Habi Hotel",

    rating: 4.6,

    accreditationStatus:
      "DOT Accredited",

    accredited: true,

    ecoFriendly: true,

    amenities: [
      "Guest suites",
      "Local dining",
      "Event halls",
    ],
  },

  {
    id: "fb-hotel",

    category:
      "Hotels & Resorts",

    name:
      "FB Hotel & Convention Center",

    location:
      "Alunan Avenue, Koronadal City",

    phone:
      "+63 (83) 228-3800",

    description:
      "Accredited premier business hotel and event host. Excellent gastronomy experience featuring top local chefs.",

    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=85",

    imageAlt:
      "FB Hotel and Convention Center",

    rating: 4.5,

    accreditationStatus:
      "DOT Accredited",

    accredited: true,

    ecoFriendly: true,

    amenities: [
      "Business accommodation",
      "Convention facilities",
      "Restaurant service",
    ],
  },
];

/*
 * ============================================================
 * DESTINATIONS
 * ============================================================
 */

export const destinations: Destination[] = [
  {
    id: "mambucal",

    category:
      "CULTURE & ECO-SPOTS",

    name:
      "Mambucal Hot Spring",

    location:
      "Koronadal City",

    description:
      "Natural hot mineral springs nestled among rolling hills, offering relaxing pools and scenic surroundings.",

    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85",

    imageAlt:
      "Mambucal Hot Spring",

    rating: 4.5,

    distance:
      "20 mins from Center",

    travelGuidance:
      "Plan local transport from the city center and confirm operating hours with the destination before travel.",

    visitorGuidelines: [
      "Respect posted site guidance and staff instructions.",
      "Keep shared natural areas clean.",
      "Confirm access conditions before departing.",
    ],
  },

  {
    id: "cabillon",

    category:
      "NATURE & ADVENTURE",

    name:
      "Cabillon Orchidarium",

    location:
      "Koronadal City",

    description:
      "A peaceful collection of native orchids and lush tropical plants designed for nature lovers.",

    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=85",

    imageAlt:
      "Cabillon Orchidarium",

    rating: 4.7,

    distance:
      "10 mins from Center",

    travelGuidance:
      "Use local transport from Koronadal City and arrange the return journey before visiting.",

    visitorGuidelines: [
      "Stay on designated visitor paths.",
      "Observe site-specific entry guidance.",
      "Help protect plants and natural features.",
    ],
  },

  {
    id: "caddating",

    category:
      "SPELEOLOGIC ADVENTURE",

    name:
      "Caddating Cave Network",

    location:
      "South Cotabato",

    description:
      "For the daring explorers: complex limestone tunnels, pristine underground chambers, and raw nature.",

    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=85",

    imageAlt:
      "Caddating Cave Network",

    rating: 4.6,

    distance:
      "35 mins from Center",

    travelGuidance:
      "Coordinate travel locally and verify current access conditions before heading to the cave area.",

    visitorGuidelines: [
      "Do not enter restricted areas.",
      "Use appropriate footwear and safety equipment.",
      "Follow local guidance for cave access.",
    ],
  },

  {
    id: "tinago",

    category:
      "SCENIC LANDSCAPE",

    name:
      "Tinago Peak",

    location:
      "South Cotabato",

    description:
      "Experience breathtaking panoramic highland views featuring agricultural stairways in the mountains.",

    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85",

    imageAlt:
      "Tinago Peak",

    rating: 4.8,

    distance:
      "25 mins from Center",

    travelGuidance:
      "Allow additional travel time for upland roads and check weather conditions before departure.",

    visitorGuidelines: [
      "Respect agricultural and private property boundaries.",
      "Bring drinking water and sun protection.",
      "Leave no trace during your visit.",
    ],
  },
];

/*
 * ============================================================
 * NEWS
 * ============================================================
 */

export const newsItems: NewsItem[] = [
  {
    id:
      "hinugyaw-festival",

    category:
      "EVENT",

    date:
      "OCTOBER 18–20, 2026",

    title:
      "Koronadal Hinugyaw Festival 2026",

    description:
      "Preparations begin for another celebration of local culture, music, and community.",

    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1000&q=85",

    imageAlt:
      "Koronadal Hinugyaw Festival",
  },

  {
    id:
      "eco-trail",

    category:
      "NEWLY PUBLISHED TODAY",

    date:
      "GUIDE",

    title:
      "Eco-Trail Siok Peak Access Guidelines",

    description:
      "City tourism partners release updated recommendations for visitors exploring natural attractions.",

    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=85",

    imageAlt:
      "Eco-trail and waterfall",
  },

  {
    id:
      "bridge-maintenance",

    category:
      "ADVISORY",

    date:
      "FACILITY MAINTENANCE",

    title:
      "Bridge Maintenance Near Siok Waterfalls",

    description:
      "Alternative routes may be required while scheduled maintenance work is underway.",

    image:
      "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=1000&q=85",

    imageAlt:
      "Road and tourism infrastructure maintenance",
  },
];

/*
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
    id:
      "hinugyaw-festival-2026",

    name:
      "Koronadal Hinugyaw Festival 2026",

    category:
      "Festival",

    location:
      "Koronadal City",

    dateLabel:
      "October 18–20, 2026",

    description:
      "Experience one of Koronadal's biggest celebrations of culture, community, music, and local traditions.",

    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1000&q=85",

    imageAlt:
      "Koronadal Hinugyaw Festival",
  },

  {
    id:
      "eco-trail-guidelines",

    name:
      "Eco-Trail Safety Guidelines",

    category:
      "Advisory",

    location:
      "Koronadal City",

    dateLabel:
      "Updated 2026",

    description:
      "Review updated visitor guidelines before exploring Koronadal's natural attractions and eco-trails.",

    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=85",

    imageAlt:
      "Eco-trail safety information",
  },

  {
    id:
      "bridge-maintenance",

    name:
      "Bridge Maintenance Near Siok Waterfalls",

    category:
      "Advisory",

    location:
      "Siok Waterfalls",

    dateLabel:
      "Tourism Advisory",

    description:
      "Visitors should review alternative routes while scheduled infrastructure maintenance is underway.",

    image:
      "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=1000&q=85",

    imageAlt:
      "Road maintenance near a tourism destination",
  },
];

/*
 * ============================================================
 * MICE
 * ============================================================
 */

export const miceVenues: MiceVenue[] = [
  {
    id:
      "gym",

    name:
      "South Cotabato Gym & Cultural Center",

    location:
      "Alunan Avenue, Koronadal City",

    capacity:
      "5,000 seats",

    capacityValue: 5000,

    venueType: "Cultural center",

    accredited: true,

    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=85",

    imageAlt:
      "South Cotabato Gym and Cultural Center",

    tags: [
      "High Capacity",
      "City Center",
      "Air Conditioned",
    ],
  },

  {
    id:
      "fb-ballroom",

    name:
      "FB Hotel Grand Ballroom",

    location:
      "Alunan Avenue, Koronadal City",

    capacity:
      "800 guests",

    capacityValue: 800,

    venueType: "Ballroom",

    accredited: true,

    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=85",

    imageAlt:
      "FB Hotel Grand Ballroom",

    tags: [
      "Premium",
      "Ballroom",
      "Guest Parking",
    ],
  },

  {
    id:
      "marvella",

    name:
      "Marvella Plaza Convention Hall",

    location:
      "Koronadal City",

    capacity:
      "400 guests",

    capacityValue: 400,

    venueType: "Convention hall",

    accredited: true,

    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",

    imageAlt:
      "Marvella Plaza Convention Hall",

    tags: [
      "Corporate Ready",
      "Modern",
      "AV Equipment",
    ],
  },
];

/*
 * ============================================================
 * EXPERIENCE
 * ============================================================
 */

export const experiences: ExperienceItem[] = [
  {
    id:
      "siok",

    duration:
      "2:45",

    title:
      "Majestic Siok: Trek & Cascade",

    description:
      "Follow local eco-trails toward South Cotabato's ultimate natural paradise.",

    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",

    imageAlt:
      "Mountain landscape near Siok Falls",
  },

  {
    id:
      "hinugyaw",

    duration:
      "4:12",

    title:
      "Rhythms of Hinugyaw",

    description:
      "Experience vibrant local culture through festivals, tribal traditions, and community stories.",

    image:
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=1200&q=85",

    imageAlt:
      "Koronadal cultural celebration",
  },

  {
    id:
      "flavors",

    duration:
      "2:20",

    title:
      "The Flavors of Koronadal",

    description:
      "Explore local cuisine, agricultural products, heritage dishes, and community dining.",

    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85",

    imageAlt:
      "Local food and culinary experience",
  },
];
