import type {
  FareRule,
  TransportRoute,
} from "@/types/tourism";

/*
 * DEBUG: FARE_CALCULATOR
 *
 * These are explicitly development configuration values carried over from
 * the existing fare matrix. They must be replaced with a validated city
 * resolution or official publication before they are presented as official.
 */
export const transportRoutes: TransportRoute[] = [
  {
    id: "market-city-hall",
    origin: "City Public Market",
    destination: "Rizal Park / City Hall",
    routeLabel: "Market to City Hall",
    guidance:
      "A central city connection between the public market and City Hall area.",
  },
  {
    id: "center-paraiso-verde",
    origin: "Koronadal Center",
    destination: "The Paraiso Verde Resort",
    routeLabel: "Center to Paraiso Verde",
    guidance:
      "A visitor route from the central area toward the Paraiso Verde listing.",
  },
];

export const fareRules: FareRule[] = [
  {
    routeId: "market-city-hall",
    commuterType: "regular",
    amount: 15,
    statusLabel: "Development configuration",
  },
  {
    routeId: "market-city-hall",
    commuterType: "discounted",
    amount: 12,
    statusLabel: "Development configuration",
  },
  {
    routeId: "center-paraiso-verde",
    commuterType: "regular",
    amount: 25,
    statusLabel: "Development configuration",
  },
  {
    routeId: "center-paraiso-verde",
    commuterType: "discounted",
    amount: 20,
    statusLabel: "Development configuration",
  },
];
