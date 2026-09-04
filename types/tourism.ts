export interface LocalizedText {
  en: string;
  fil: string;
}

export interface HeroSlide {
  id: string;
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  backgroundImage: string;
  backgroundAlt: LocalizedText;
  backgroundPosition?: string;
  cta: {
    label: LocalizedText;
    href: string;
  };
}

export interface Establishment {
  id: string;
  category: LocalizedText;
  name: LocalizedText;
  location: LocalizedText;
  phone?: string;
  description: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  rating: number;

  /**
   * Existing business-directory pages depend on this field.
   * Do not remove or rename it without updating those routes.
   *
   * NOTE:
   * Accreditation values must be verified against an
   * authorized source before being presented as official.
   */
  accreditationStatus: LocalizedText;

  accredited: boolean;

  ecoFriendly?: boolean;

  amenities?: LocalizedText[];
}

export interface Destination {
  id: string;
  category: LocalizedText;
  name: LocalizedText;
  location: LocalizedText;
  description: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  rating: number;
  distance: LocalizedText;
  travelGuidance?: LocalizedText;
  visitorGuidelines?: LocalizedText[];
}

export interface NewsItem {
  id: string;
  category: LocalizedText;
  date: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
}

export interface TourismEvent {
  id: string;

  /**
   * Existing search page contract.
   *
   * These property names are consumed by the current
   * search implementation and should not be renamed
   * without updating that contract.
   */
  name: LocalizedText;
  category: LocalizedText;
  location: LocalizedText;
  dateLabel: LocalizedText;
  description: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
}

export interface MiceVenue {
  id: string;
  name: LocalizedText;
  location: LocalizedText;

  /**
   * Human-readable capacity for display.
   *
   * Example:
   * "5,000 seats"
   */
  capacity: LocalizedText;

  /**
   * Numeric capacity used for sorting and filtering.
   */
  capacityValue: number;

  venueType: LocalizedText;

  /**
   * Accreditation must be verified against an
   * authorized source before being presented as official.
   */
  accredited?: boolean;

  image: string;
  imageAlt: LocalizedText;
  tags: LocalizedText[];
}

export type CommuterType = "regular" | "discounted";

export interface TransportRoute {
  id: string;
  origin: LocalizedText;
  destination: LocalizedText;
  routeLabel: LocalizedText;
  guidance: LocalizedText;
}

/**
 * Development fare configuration.
 *
 * These values are configured lookup data, not proof of
 * an official current regulated fare.
 */
export interface FareRule {
  routeId: string;
  commuterType: CommuterType;
  amount: number;
  statusLabel: LocalizedText;
}

export interface ExperienceItem {
  id: string;

  /**
   * Display duration for the experience item.
   *
   * The current project does not yet define this as a
   * machine-readable media duration.
   */
  duration: LocalizedText;

  title: LocalizedText;
  description: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
}