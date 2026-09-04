import Link from "next/link";
import {
  BusFront,
  Calculator,
  Route,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import {
  fareRules,
  transportRoutes,
} from "@/data/transport";
import { getLocale } from "@/lib/i18n/locale";
import type { CommuterType } from "@/types/tourism";

const services = [
  {
    id: "mtop",
    title: {
      en: "MTOP Information",
      fil: "Impormasyon sa MTOP",
    },
    description: {
      en: "Guidelines and requirements for Motorized Tricycle Operator's Permit registration.",
      fil: "Mga gabay at kinakailangan para sa pagpaparehistro ng Motorized Tricycle Operator's Permit.",
    },
    icon: Route,
    action: {
      en: "Read Guidelines",
      fil: "Basahin ang mga Gabay",
    },
    href: "/transport",
  },
  {
    id: "fare-matrix",
    title: {
      en: "Fare Matrix",
      fil: "Fare Matrix",
    },
    description: {
      en: "Review configured transport fares and verify current regulated fares before travel.",
      fil: "Suriin ang naka-configure na pamasahe at tiyakin ang kasalukuyang opisyal na pamasahe bago bumiyahe.",
    },
    icon: Calculator,
    action: {
      en: "Search Matrix",
      fil: "Suriin ang Matrix",
    },
    href: "#fare-matrix",
  },
  {
    id: "terminals",
    title: {
      en: "Terminals & Hubs",
      fil: "Mga Terminal at Hub",
    },
    description: {
      en: "Find major transport terminals and routes serving the city.",
      fil: "Hanapin ang mga pangunahing terminal at rutang nagsisilbi sa lungsod.",
    },
    icon: BusFront,
    action: {
      en: "Find Terminals",
      fil: "Hanapin ang mga Terminal",
    },
    href: "/transport",
  },
  {
    id: "tricycle-routes",
    title: {
      en: "Tricycle Routes",
      fil: "Mga Ruta ng Tricycle",
    },
    description: {
      en: "Learn about configured city routes and commuter guidance.",
      fil: "Alamin ang tungkol sa mga naka-configure na ruta ng lungsod at gabay para sa mga commuter.",
    },
    icon: Route,
    action: {
      en: "View Routes",
      fil: "Tingnan ang mga Ruta",
    },
    href: "/transport",
  },
] as const;

const commuterLabels: Record<
  CommuterType,
  {
    en: string;
    fil: string;
  }
> = {
  regular: {
    en: "Regular Commuter",
    fil: "Regular na Commuter",
  },
  discounted: {
    en: "Student / Senior / PWD",
    fil: "Estudyante / Senior / PWD",
  },
};

const pesoFormatter = new Intl.NumberFormat(
  "en-PH",
  {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
  },
);

interface FareTableRow {
  key: string;
  origin: string;
  destination: string;
  commuterType: string;
  amount: string;
}

export async function TransportSection() {
  const locale = await getLocale();
  const filipino = locale === "fil";

  const fareRows: FareTableRow[] =
    fareRules.flatMap((rule) => {
      const route =
        transportRoutes.find(
          (item) =>
            item.id === rule.routeId,
        );

      if (!route) {
        return [];
      }

      return [
        {
          key: `${rule.routeId}-${rule.commuterType}`,
          origin:
            route.origin[locale],
          destination:
            route.destination[locale],
          commuterType:
            commuterLabels[
              rule.commuterType
            ][locale],
          amount:
            pesoFormatter.format(
              rule.amount,
            ),
        },
      ];
    });

  return (
    <section
      aria-labelledby="transport-heading"
      className="bg-tourism-surface py-16 sm:py-20"
    >
      <Container>
        {/* =========================================================
            SECTION EYEBROW
            ========================================================= */}
        <p className="flex items-center gap-3 text-[9px] font-extrabold uppercase tracking-[0.16em] text-tourism-pink">
          <span
            aria-hidden="true"
            className="block h-px w-5 shrink-0 bg-tourism-pink"
          />

          <span>
            {filipino
              ? "Transportasyon at Paglalakbay"
              : "Transport & Travel"}
          </span>
        </p>

        <h2
          id="transport-heading"
          className="mt-4 text-3xl font-black tracking-tight text-tourism-navy sm:text-4xl"
        >
          {filipino
            ? "Paglibot sa Koronadal"
            : "Getting Around Koronadal"}
        </h2>

        {/* =========================================================
            SERVICE CARDS
            ========================================================= */}
        <div className="mt-7 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className="flex h-full flex-col rounded-2xl border border-tourism-border bg-white p-5 shadow-sm"
              >
                <Icon
                  aria-hidden="true"
                  className="size-5 text-tourism-pink"
                />

                <h3 className="mt-4 text-sm font-extrabold text-tourism-navy">
                  {service.title[locale]}
                </h3>

                <p className="mt-2 min-h-[48px] text-xs leading-5 text-tourism-muted">
                  {
                    service.description[
                      locale
                    ]
                  }
                </p>

                <Link
                  href={service.href}
                  className="mt-auto inline-flex w-fit min-h-10 items-center rounded-md bg-tourism-pink px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-tourism-pink-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 motion-reduce:transition-none"
                >
                  {
                    service.action[
                      locale
                    ]
                  }
                </Link>
              </article>
            );
          })}
        </div>

        {/* =========================================================
            FARE MATRIX
            ========================================================= */}
        <section
          id="fare-matrix"
          aria-labelledby="fare-matrix-heading"
          className="mt-10 scroll-mt-6"
        >
          <div className="max-w-3xl">
            <h3
              id="fare-matrix-heading"
              className="text-xl font-extrabold text-tourism-navy"
            >
              {filipino ? (
                <>
                  Naka-configure na Matrix
                  <br />
                  ng Pamasahe sa Tricycle
                </>
              ) : (
                <>
                  Configured Tricycle Fare
                  <br />
                  Matrix
                </>
              )}
            </h3>

            <p className="mt-2 text-[11px] leading-5 text-tourism-muted">
              {filipino
                ? "Development data lamang. Ang mga halagang ito ay hindi ipinapakitang beripikadong opisyal na pamasahe. Ang pinal na reguladong pamasahe ay dapat manggaling sa project backend o isang awtorisadong source ng City Government."
                : "Development data only. These values are not presented as verified official fares. Final regulated fares must come from the project backend or an authorized City Government source."}
            </p>
          </div>

          {fareRows.length > 0 ? (
            <div className="mt-5 overflow-x-auto rounded-2xl border border-tourism-border bg-white">
              <table className="w-full min-w-[680px] border-collapse text-left text-xs">
                <caption className="sr-only">
                  {filipino
                    ? "Development tricycle fare matrix para sa naka-configure na mga ruta sa Koronadal."
                    : "Development tricycle fare matrix for configured Koronadal routes."}
                </caption>

                <thead>
                  <tr className="bg-tourism-navy text-white">
                    <th
                      scope="col"
                      className="px-4 py-3.5 font-bold"
                    >
                      {filipino
                        ? "Pinagmulan"
                        : "Origin"}
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 font-bold"
                    >
                      {filipino
                        ? "Destinasyon"
                        : "Destination"}
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 font-bold"
                    >
                      {filipino
                        ? "Uri ng Commuter"
                        : "Commuter Type"}
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-right font-bold"
                    >
                      {filipino
                        ? "Naka-configure na Pamasahe"
                        : "Configured Fare"}
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-tourism-border">
                  {fareRows.map((row) => (
                    <tr
                      key={row.key}
                      className="transition-colors hover:bg-tourism-surface motion-reduce:transition-none"
                    >
                      <td className="px-4 py-3.5 font-medium text-tourism-navy">
                        {row.origin}
                      </td>

                      <td className="px-4 py-3.5 text-tourism-muted">
                        {row.destination}
                      </td>

                      <td className="px-4 py-3.5 text-tourism-muted">
                        {row.commuterType}
                      </td>

                      <td className="px-4 py-3.5 text-right font-extrabold text-tourism-navy">
                        {row.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="mt-5 rounded-2xl border border-dashed border-tourism-border bg-white p-8 text-center">
              <p className="text-sm font-semibold text-tourism-navy">
                {filipino
                  ? "Walang kasalukuyang naka-configure na pamasahe."
                  : "No fare configurations are currently available."}
              </p>
            </div>
          )}

          {/* =======================================================
              FARE CTA
              ======================================================= */}
          <div className="mt-5 flex justify-end">
            <Link
              href="/transport"
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-tourism-pink px-5 py-2.5 text-xs font-extrabold text-white shadow-sm transition-colors hover:bg-tourism-pink-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              {filipino
                ? "Kalkulahin ang Pamasahe"
                : "Calculate Your Fare"}
            </Link>
          </div>
        </section>
      </Container>
    </section>
  );
}