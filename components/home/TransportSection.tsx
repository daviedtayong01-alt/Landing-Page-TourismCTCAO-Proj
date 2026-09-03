import Link from "next/link";
import {
  BusFront,
  Calculator,
  Route,
} from "lucide-react";

import { Container } from "@/components/layout/Container";

const services = [
  {
    title: "MTOP Information",
    description:
      "Guidelines and requirements for Motorized Tricycle Operator's Permit registration.",
    icon: Route,
    action: "Read Guidelines",
    href: "/transport",
  },
  {
    title: "Official Fare Matrix",
    description:
      "Verify regulated transport fares approved by the City Government.",
    icon: Calculator,
    action: "Search Matrix",
    href: "#fare-matrix",
  },
  {
    title: "Terminals & Hubs",
    description:
      "Find major transport terminals and routes serving the city.",
    icon: BusFront,
    action: "Find Terminals",
    href: "/transport",
  },
  {
    title: "Tricycle Routes",
    description:
      "Learn about city routes and commuter guidance.",
    icon: Route,
    action: "View Map",
    href: "/transport",
  },
];

const fareRows = [
  [
    "City Public Market",
    "Rizal Park / City Hall",
    "Regular Commuter",
    "₱15.00",
  ],
  [
    "City Public Market",
    "Rizal Park / City Hall",
    "Student / Senior / PWD",
    "₱12.00",
  ],
  [
    "Koronadal Center",
    "The Paraiso Verde Resort",
    "Regular Commuter",
    "₱25.00",
  ],
  [
    "Koronadal Center",
    "The Paraiso Verde Resort",
    "Student / Senior / PWD",
    "₱20.00",
  ],
] as const;

export function TransportSection() {
  return (
    <section
      aria-labelledby="transport-heading"
      className="bg-tourism-surface py-16 sm:py-20"
    >
      <Container>
        <p className="flex items-center gap-3 text-[8px] font-extrabold uppercase tracking-[0.16em] text-tourism-accent">
          <span
            aria-hidden="true"
            className="h-px w-5 bg-tourism-accent"
          />
          Transport & Travel
        </p>

        <h2
          id="transport-heading"
          className="mt-4 text-3xl font-black tracking-tight text-tourism-primary sm:text-4xl"
        >
          Getting Around Koronadal
        </h2>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="flex h-full flex-col rounded-2xl border border-tourism-border bg-white p-5 shadow-sm"
              >
                <Icon
                  aria-hidden="true"
                  className="size-5 text-tourism-accent"
                />

                <h3 className="mt-4 text-sm font-extrabold text-tourism-primary">
                  {service.title}
                </h3>

                <p className="mt-2 min-h-[48px] text-[10px] leading-4 text-tourism-text-muted">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="mt-5 inline-flex w-fit items-center rounded-md bg-tourism-accent px-3 py-2 text-[9px] font-bold text-white transition hover:bg-tourism-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-accent focus-visible:ring-offset-2 motion-reduce:transition-none"
                >
                  {service.action}
                </Link>
              </article>
            );
          })}
        </div>

        <div
          id="fare-matrix"
          className="mt-10 scroll-mt-6"
        >
          <h3 className="text-lg font-extrabold text-tourism-primary">
            Standard Tricycle Fare Matrix
          </h3>

          <p className="mt-1 max-w-2xl text-[9px] leading-4 text-tourism-text-muted">
            Development data only. These values are not presented as
            verified official fares. Final regulated fares must come
            from the project backend or an authorized City Government
            source.
          </p>

          <div className="mt-5 overflow-x-auto rounded-xl border border-tourism-border bg-white">
            <table className="w-full min-w-[620px] border-collapse text-left text-[9px]">
              <caption className="sr-only">
                Development tricycle fare matrix for selected Koronadal
                routes.
              </caption>

              <thead>
                <tr className="bg-tourism-primary text-white">
                  <th
                    scope="col"
                    className="px-4 py-3"
                  >
                    Origin
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3"
                  >
                    Destination
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3"
                  >
                    Commuter Type
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3 text-right"
                  >
                    Base Fare
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-tourism-border">
                {fareRows.map((row) => (
                  <tr
                    key={`${row[0]}-${row[1]}-${row[2]}`}
                    className="hover:bg-tourism-surface"
                  >
                    <td className="px-4 py-3">
                      {row[0]}
                    </td>

                    <td className="px-4 py-3 text-tourism-text-muted">
                      {row[1]}
                    </td>

                    <td className="px-4 py-3 text-tourism-text-muted">
                      {row[2]}
                    </td>

                    <td className="px-4 py-3 text-right font-bold">
                      {row[3]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex justify-end">
            <Link
              href="/transport"
              className="rounded-md bg-tourism-accent px-4 py-2 text-[9px] font-bold text-white transition hover:bg-tourism-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-accent focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              Calculate Your Fare
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}