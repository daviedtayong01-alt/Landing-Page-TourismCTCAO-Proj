import type {
  FareRule,
  TransportRoute,
} from "@/types/tourism";

/**
 * ============================================================
 * DEVELOPMENT FARE CONFIGURATION
 * ============================================================
 *
 * These are explicitly development configuration values
 * carried over from the existing fare matrix.
 *
 * They must be replaced with a validated city resolution
 * or official publication before they are presented as
 * official current fares.
 *
 * Do not treat these values as authoritative.
 */

export const transportRoutes: TransportRoute[] = [
  {
    id: "market-city-hall",

    origin: {
      en: "City Public Market",
      fil: "Pampublikong Palengke ng Lungsod",
    },

    destination: {
      en: "Rizal Park / City Hall",
      fil: "Rizal Park / City Hall",
    },

    routeLabel: {
      en: "Market to City Hall",
      fil: "Palengke papuntang City Hall",
    },

    guidance: {
      en: "A central city connection between the public market and City Hall area.",
      fil: "Isang pangunahing koneksyon sa lungsod sa pagitan ng pampublikong palengke at ng lugar ng City Hall.",
    },
  },

  {
    id: "center-paraiso-verde",

    origin: {
      en: "Koronadal Center",
      fil: "Sentro ng Koronadal",
    },

    destination: {
      en: "The Paraiso Verde Resort",
      fil: "The Paraiso Verde Resort",
    },

    routeLabel: {
      en: "Center to Paraiso Verde",
      fil: "Sentro papuntang Paraiso Verde",
    },

    guidance: {
      en: "A visitor route from the central area toward the Paraiso Verde listing.",
      fil: "Isang ruta para sa mga bisita mula sa sentrong lugar patungo sa The Paraiso Verde Resort.",
    },
  },
];

export const fareRules: FareRule[] = [
  {
    routeId: "market-city-hall",
    commuterType: "regular",
    amount: 15,

    statusLabel: {
      en: "Development configuration",
      fil: "Development configuration",
    },
  },

  {
    routeId: "market-city-hall",
    commuterType: "discounted",
    amount: 12,

    statusLabel: {
      en: "Development configuration",
      fil: "Development configuration",
    },
  },

  {
    routeId: "center-paraiso-verde",
    commuterType: "regular",
    amount: 25,

    statusLabel: {
      en: "Development configuration",
      fil: "Development configuration",
    },
  },

  {
    routeId: "center-paraiso-verde",
    commuterType: "discounted",
    amount: 20,

    statusLabel: {
      en: "Development configuration",
      fil: "Development configuration",
    },
  },
];