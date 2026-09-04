import {
  destinations,
  establishments,
  miceVenues,
  newsItems,
  tourismEvents,
} from "@/data/tourism";
import { transportRoutes } from "@/data/transport";
import type { Locale } from "@/lib/i18n/config";
import type {
  Destination,
  Establishment,
  MiceVenue,
  NewsItem,
  TourismEvent,
  TransportRoute,
} from "@/types/tourism";

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

function getText(
  value: { en: string; fil: string },
  locale: Locale,
): string {
  return value[locale];
}

export function normalizeSearchKind(
  value: string,
): SearchKind | undefined {
  const normalized = value.trim().toLowerCase();

  return searchKinds.includes(
    normalized as SearchKind,
  )
    ? (normalized as SearchKind)
    : undefined;
}

function mapDestination(
  destination: Destination,
  locale: Locale,
): SearchResult {
  return {
    id: destination.id,
    favoriteId: `destination:${destination.id}`,
    kind: "destinations",
    label: getText(destination.category, locale),
    title: getText(destination.name, locale),
    location: getText(destination.location, locale),
    description: getText(
      destination.description,
      locale,
    ),
    href: `/destinations/${destination.id}`,
  };
}

function mapEstablishment(
  establishment: Establishment,
  locale: Locale,
): SearchResult {
  return {
    id: establishment.id,
    favoriteId: `establishment:${establishment.id}`,
    kind: "establishments",
    label: getText(
      establishment.category,
      locale,
    ),
    title: getText(establishment.name, locale),
    location: getText(
      establishment.location,
      locale,
    ),
    description: getText(
      establishment.description,
      locale,
    ),
    href: `/business-directory/${establishment.id}`,
  };
}

function mapEvent(
  event: TourismEvent,
  locale: Locale,
): SearchResult {
  return {
    id: event.id,
    favoriteId: `event:${event.id}`,
    kind: "events",
    label: getText(event.category, locale),
    title: getText(event.name, locale),
    location: getText(event.location, locale),
    description: getText(
      event.description,
      locale,
    ),
    href: `/events/${event.id}`,
  };
}

function mapMiceVenue(
  venue: MiceVenue,
  locale: Locale,
): SearchResult {
  return {
    id: venue.id,
    favoriteId: `mice:${venue.id}`,
    kind: "mice",
    label: getText(venue.venueType, locale),
    title: getText(venue.name, locale),
    location: getText(
      venue.location,
      locale,
    ),
    description: getText(
      venue.capacity,
      locale,
    ),
    href: `/mice/${venue.id}`,
  };
}

function mapTransportRoute(
  route: TransportRoute,
  locale: Locale,
): SearchResult {
  return {
    id: route.id,
    favoriteId: `transport:${route.id}`,
    kind: "transport",
    label: getText(route.routeLabel, locale),
    title: `${getText(route.origin, locale)} → ${getText(
      route.destination,
      locale,
    )}`,
    location: getText(route.destination, locale),
    description: getText(
      route.guidance,
      locale,
    ),
    href: "/transport",
  };
}

function mapNews(
  item: NewsItem,
  locale: Locale,
): SearchResult {
  return {
    id: item.id,
    favoriteId: `news:${item.id}`,
    kind: "events",
    label: getText(item.category, locale),
    title: getText(item.title, locale),
    location: getText(item.date, locale),
    description: getText(
      item.description,
      locale,
    ),
    href: `/events/${item.id}`,
  };
}

export function getSearchableTourismContent(
  locale: Locale,
): SearchResult[] {
  return [
    ...destinations.map((destination) =>
      mapDestination(destination, locale),
    ),

    ...establishments.map((establishment) =>
      mapEstablishment(establishment, locale),
    ),

    ...tourismEvents.map((event) =>
      mapEvent(event, locale),
    ),

    ...miceVenues.map((venue) =>
      mapMiceVenue(venue, locale),
    ),

    ...transportRoutes.map((route) =>
      mapTransportRoute(route, locale),
    ),

    ...newsItems.map((item) =>
      mapNews(item, locale),
    ),
  ];
}

interface SearchOptions {
  query: string;
  kind?: SearchKind;
  locale: Locale;
}

export function searchTourismContent({
  query,
  kind,
  locale,
}: SearchOptions): SearchResult[] {
  const normalizedQuery = query
    .trim()
    .toLocaleLowerCase();

  const searchableContent =
    getSearchableTourismContent(locale);

  return searchableContent.filter((result) => {
    if (kind && result.kind !== kind) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    const searchableText = [
      result.label,
      result.title,
      result.location,
      result.description,
    ]
      .join(" ")
      .toLocaleLowerCase();

    return searchableText.includes(
      normalizedQuery,
    );
  });
}