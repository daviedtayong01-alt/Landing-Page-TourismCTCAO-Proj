import {
  destinations,
  establishments,
  miceVenues,
  tourismEvents,
} from "@/data/tourism";
import { transportRoutes } from "@/data/transport";

export const searchKinds = [
  "destinations",
  "establishments",
  "events",
  "mice",
  "transport",
] as const;

export type SearchKind = (typeof searchKinds)[number];

export interface SearchResult {
  id: string;
  favoriteId: string;
  kind: SearchKind;
  label: string;
  title: string;
  location: string;
  description: string;
  href: string;
}

export const searchableTourismContent: SearchResult[] = [
  ...destinations.map((destination) => ({
    id: destination.id,
    favoriteId: `destination:${destination.id}`,
    kind: "destinations" as const,
    label: destination.category,
    title: destination.name,
    location: destination.location,
    description: destination.description,
    href: `/destinations/${destination.id}`,
  })),
  ...establishments.map((establishment) => ({
    id: establishment.id,
    favoriteId: `establishment:${establishment.id}`,
    kind: "establishments" as const,
    label: establishment.category,
    title: establishment.name,
    location: establishment.location,
    description: establishment.description,
    href: `/business-directory/${establishment.id}`,
  })),
  ...tourismEvents.map((event) => ({
    id: event.id,
    favoriteId: `event:${event.id}`,
    kind: "events" as const,
    label: event.category,
    title: event.name,
    location: event.location,
    description: event.description,
    href: `/events/${event.id}`,
  })),
  ...miceVenues.map((venue) => ({
    id: venue.id,
    favoriteId: `mice:${venue.id}`,
    kind: "mice" as const,
    label: venue.venueType,
    title: venue.name,
    location: venue.location,
    description: `Capacity: ${venue.capacity}. ${venue.tags.join(", ")}.`,
    href: `/mice/${venue.id}`,
  })),
  ...transportRoutes.map((route) => ({
    id: route.id,
    favoriteId: `transport:${route.id}`,
    kind: "transport" as const,
    label: "Transport route",
    title: route.routeLabel,
    location: `${route.origin} to ${route.destination}`,
    description: route.guidance,
    href: `/transport#${route.id}`,
  })),
];

export function normalizeSearchKind(
  value: string | undefined,
): SearchKind | undefined {
  return searchKinds.find(
    (kind) => kind === value,
  );
}

export function searchTourismContent({
  query,
  kind,
}: {
  query: string;
  kind?: SearchKind;
}): SearchResult[] {
  const normalizedQuery = query.trim().toLowerCase();

  return searchableTourismContent.filter((item) => {
    const matchesKind = !kind || item.kind === kind;
    const matchesQuery =
      !normalizedQuery ||
      `${item.title} ${item.label} ${item.location} ${item.description}`
        .toLowerCase()
        .includes(normalizedQuery);

    return matchesKind && matchesQuery;
  });
}
