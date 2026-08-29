export interface HeroSlide {
  id: string;

  eyebrow: string;

  title: string;

  description: string;

  backgroundImage: string;

  backgroundAlt: string;

  backgroundPosition?: string;

  cta: {
    label: string;
    href: string;
  };
}

export interface Establishment {
  id: string;

  category: string;

  name: string;

  location: string;

  phone?: string;

  description: string;

  image: string;

  imageAlt: string;

  rating: number;

  /*
   * Existing business-directory pages depend on this field.
   * Do not remove or rename it without updating those routes.
   */
  accreditationStatus: string;

  accredited: boolean;

  ecoFriendly?: boolean;

  amenities?: string[];
}

export interface Destination {
  id: string;

  category: string;

  name: string;

  location: string;

  description: string;

  image: string;

  imageAlt: string;

  rating: number;

  distance: string;

  travelGuidance?: string;

  visitorGuidelines?: string[];
}

export interface NewsItem {
  id: string;

  category: string;

  date: string;

  title: string;

  description: string;

  image: string;

  imageAlt: string;
}

export interface TourismEvent {
  id: string;

  /*
   * Existing search page contract.
   */
  name: string;

  category: string;

  location: string;

  dateLabel: string;

  description: string;

  image: string;

  imageAlt: string;
}

export interface MiceVenue {
  id: string;

  name: string;

  location: string;

  capacity: string;

  capacityValue: number;

  venueType: string;

  accredited?: boolean;

  image: string;

  imageAlt: string;

  tags: string[];
}

export type CommuterType =
  | "regular"
  | "discounted";

export interface TransportRoute {
  id: string;

  origin: string;

  destination: string;

  routeLabel: string;

  guidance: string;
}

export interface FareRule {
  routeId: string;

  commuterType: CommuterType;

  amount: number;

  statusLabel: string;
}

export interface ExperienceItem {
  id: string;

  duration: string;

  title: string;

  description: string;

  image: string;

  imageAlt: string;
}
