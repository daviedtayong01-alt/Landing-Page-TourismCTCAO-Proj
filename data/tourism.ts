import type {
  Destination,
  Establishment,
  TourismEvent,
  TourismReport,
} from "@/types/tourism";

/**
 * Frontend seed content.
 *
 * This is intentionally typed to match the future API contract.
 */
export const establishments: Establishment[] = [
  {
    id: "paraiso-verde-resort",
    name: "Paraiso Verde Resort & Water Park",
    category: "hotel",
    location: "Brgy. Morales, Koronadal City",
    rating: 4.8,
    accreditationStatus: "accredited",
    imageUrl: null,
    description:
      "A Koronadal leisure destination combining resort amenities and family recreation.",
  },

  {
    id: "amani-brews-bistro",
    name: "Amani Brews & Bistro",
    category: "restaurant",
    location: "Alunan Avenue, Koronadal City",
    rating: 4.6,
    accreditationStatus: "accredited",
    imageUrl: null,
    description:
      "A local dining destination offering coffee, beverages, and casual meals.",
  },

  {
    id: "triplink-south-travel-centre",
    name: "Triplink South Travel Centre",
    category: "travel-agency",
    location: "Gensan Drive, Koronadal City",
    rating: 4.9,
    accreditationStatus: "accredited",
    imageUrl: null,
    description:
      "A travel service helping visitors plan and arrange journeys around South Cotabato.",
  },

  {
    id: "organikian-urban-farm",
    name: "OrganiKian Urban Farm",
    category: "farm-tourist-camp",
    location: "Koronadal Public Terminal",
    rating: 4.2,
    accreditationStatus: "pending",
    imageUrl: null,
    description:
      "An urban farm tourism experience focused on local agriculture and community experiences.",
  },
];

export const destinations: Destination[] = [
  {
    id: "siok-waterfalls",
    name: "Siok Waterfalls & Eco-Park",
    category: "Nature & Adventure",
    description:
      "A preserved eco-sanctuary featuring waterfalls, natural pools, and outdoor experiences.",
    imageUrl: null,
  },

  {
    id: "mambucal-hot-spring",
    name: "Mambucal Hot Spring",
    category: "Cultural",
    description:
      "Natural hot mineral springs nestled at the foot of rolling hills.",
    imageUrl: null,
  },

  {
    id: "millennium-falls",
    name: "The Millennium Falls",
    category: "Nature",
    description:
      "An adventure destination surrounded by lush foliage and rock formations.",
    imageUrl: null,
  },
];

export const tourismEvents: TourismEvent[] = [
  {
    id: "tnalak-festival-2026",
    name: "T'nalak Festival 2026",
    category: "Festival",
    dateLabel: "July 12–18, 2026",
    location: "South Cotabato Sports Complex",
    imageUrl: null,
  },

  {
    id: "mindanao-agro-industrial-expo",
    name: "Mindanao Agro-Industrial Expo",
    category: "Trade",
    dateLabel: "July 14–16, 2026",
    location: "City Cultural Center",
    imageUrl: null,
  },

  {
    id: "mt-melibengoy-trail-run",
    name: "Mt. Melibengoy Trail Run",
    category: "Sports",
    dateLabel: "August 3, 2026",
    location: "Brgy. San Jose Eco-Trails",
    imageUrl: null,
  },
];

export const tourismReports: TourismReport[] = [
  {
    id: "annual-tourism-performance",
    title: "Annual Tourism Performance Report",
    fileType: "PDF",
    fileSize: "4.8 MB",
    downloadUrl:
      "/reports/annual-tourism-performance.pdf",
  },

  {
    id: "dot-compliance-summary",
    title: "DOT Compliance & Standards Summary",
    fileType: "PDF",
    fileSize: "2.1 MB",
    downloadUrl:
      "/reports/dot-compliance-summary.pdf",
  },

  {
    id: "visitor-arrivals-q1-2026",
    title: "Visitor Arrivals Statistics Q1 2026",
    fileType: "XLSX",
    fileSize: "1.4 MB",
    downloadUrl:
      "/reports/visitor-arrivals-q1-2026.xlsx",
  },
];