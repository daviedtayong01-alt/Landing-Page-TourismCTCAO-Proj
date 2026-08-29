import {
  BusFront,
  Calculator,
  Route,
  TrainFront,
} from "lucide-react";

import { Container } from "@/components/layout/Container";

const services = [
  {
    title: "MTOP Information",
    description:
      "Guidelines and requirements for Motorized Tricycle Operator's Permit registration.",
    icon: Route,
    action: "Read Guidelines",
  },

  {
    title: "Official Fare Matrix",
    description:
      "Verify regulated transport fares approved by the City Government.",
    icon: Calculator,
    action: "Search Matrix",
  },

  {
    title: "Terminals & Hubs",
    description:
      "Find major transport terminals and routes serving the city.",
    icon: BusFront,
    action: "Find Terminals",
  },

  {
    title: "Tricycle Routes",
    description:
      "Learn about city routes and commuter guidance.",
    icon: TrainFront,
    action: "View Map",
  },
];

export function TransportSection() {
  return (
    <section className="bg-tourism-surface py-16 sm:py-20">
      <Container>
        <p className="flex items-center gap-3 text-[8px] font-extrabold uppercase tracking-[0.16em] text-tourism-accent">
          <span className="h-px w-5 bg-tourism-accent" />
          Transport & Travel
        </p>

        <h2 className="mt-4 text-3xl font-black tracking-tight text-tourism-primary sm:text-4xl">
          Getting Around Koronadal
        </h2>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(
            (service) => {
              const Icon =
                service.icon;

              return (
                <article
                  key={
                    service.title
                  }
                  className="rounded-2xl border border-tourism-border bg-white p-5 shadow-sm"
                >
                  <Icon className="size-5 text-tourism-accent" />

                  <h3 className="mt-4 text-sm font-extrabold text-tourism-primary">
                    {
                      service.title
                    }
                  </h3>

                  <p className="mt-2 min-h-[48px] text-[9px] leading-4 text-tourism-text-muted">
                    {
                      service.description
                    }
                  </p>

                  <a
                    href="#fare-matrix"
                    className="mt-5 inline-flex rounded-md bg-tourism-accent px-3 py-2 text-[8px] font-bold text-white transition hover:bg-tourism-accent-dark"
                  >
                    {
                      service.action
                    }
                  </a>
                </article>
              );
            },
          )}
        </div>

        <div
          id="fare-matrix"
          className="mt-10"
        >
          <h3 className="text-lg font-extrabold text-tourism-primary">
            Standard Tricycle Fare Matrix
          </h3>

          <p className="mt-1 text-[8px] text-tourism-text-muted">
            Development data only. Final
            official fares must come from
            the project backend.
          </p>

          <div className="mt-5 overflow-x-auto rounded-xl border border-tourism-border bg-white">
            <table className="w-full min-w-[620px] border-collapse text-left text-[9px]">
              <thead>
                <tr className="bg-tourism-primary text-white">
                  <th className="px-4 py-3">
                    Origin
                  </th>

                  <th className="px-4 py-3">
                    Destination
                  </th>

                  <th className="px-4 py-3">
                    Commuter Type
                  </th>

                  <th className="px-4 py-3 text-right">
                    Base Fare
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-tourism-border">
                {[
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
                ].map(
                  (row) => (
                    <tr
                      key={`${row[0]}-${row[1]}-${row[2]}`}
                      className="hover:bg-tourism-surface"
                    >
                      <td className="px-4 py-3">
                        {
                          row[0]
                        }
                      </td>

                      <td className="px-4 py-3 text-tourism-text-muted">
                        {
                          row[1]
                        }
                      </td>

                      <td className="px-4 py-3 text-tourism-text-muted">
                        {
                          row[2]
                        }
                      </td>

                      <td className="px-4 py-3 text-right font-bold">
                        {
                          row[3]
                        }
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex justify-end">
            <a
              href="/transport"
              className="rounded-md bg-tourism-accent px-4 py-2 text-[8px] font-bold text-white hover:bg-tourism-accent-dark"
            >
              Calculate Your Fare
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}