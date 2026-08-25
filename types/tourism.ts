export type EstablishmentCategory =
  | "hotel"
  | "restaurant"
  | "travel-agency"
  | "farm-tourist-camp";

export type AccreditationStatus =
  | "accredited"
  | "pending"
  | "not-accredited";

export interface Establishment {
  id: string;
  name: string;
  category: EstablishmentCategory;
  location: string;
  rating: number;
  accreditationStatus: AccreditationStatus;
  imageUrl: string | null;
  description?: string;
}

export interface Destination {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string | null;
}

export interface TourismEvent {
  id: string;
  name: string;
  category: string;
  dateLabel: string;
  location: string;
  imageUrl: string | null;
}

export interface TourismReport {
  id: string;
  title: string;
  fileType: "PDF" | "XLSX";
  fileSize: string;
  downloadUrl: string;
}