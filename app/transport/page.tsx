import {
  BusFront,
  FileText,
  Route,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/layout/PageShell";
import { FareCalculator } from "@/components/transport/FareCalculator";
import { PageHeader } from "@/components/tourism/PageHeader";

import { getLocale } from "@/lib/i18n/locale";

import {
  fareRules,
  transportRoutes,
} from "@/data/transport";

function formatPeso(
  amount: number,
): string {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
  }).format(amount);
}

export default async function TransportPage() {
  const locale = await getLocale();
  const filipino = locale === "fil";

  return (
    <PageShell>
      <PageHeader
        eyebrow={
          filipino
            ? "Transportasyon at Paglalakbay"
            : "Transport and Travel"
        }
        title={
          filipino
            ? "Paglibot sa Koronadal"
            : "Getting around Koronadal"
        }
        description={
          filipino
            ? "Gamitin ang available na gabay sa mga ruta at naka-configure na fare reference upang magplano ng paglalakbay sa loob ng lugar ng visitor directory."
            : "Use the available route guidance and configured fare reference to plan travel within the visitor directory area."
        }
      />

      <main className="bg-tourism-surface py-10 sm:py-14">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {/* TRICYCLE ROUTES */}
            <article className="rounded-2xl border border-tourism-border bg-white p-5 shadow-sm">
              <BusFront
                aria-hidden="true"
                className="size-5 text-tourism-pink"
              />

              <h2 className="mt-4 text-base font-extrabold text-tourism-navy">
                {filipino
                  ? "Mga Ruta ng Tricycle"
                  : "Tricycle routes"}
              </h2>

              <p className="mt-2 text-sm leading-6 text-tourism-muted">
                {filipino
                  ? "Tingnan ang mga naka-configure na ruta ng lungsod na kasama sa development data set na ito."
                  : "Browse the configured city routes included in this development data set."}
              </p>
            </article>

            {/* MTOP */}
            <article className="rounded-2xl border border-tourism-border bg-white p-5 shadow-sm">
              <Route
                aria-hidden="true"
                className="size-5 text-tourism-pink"
              />

              <h2 className="mt-4 text-base font-extrabold text-tourism-navy">
                {filipino
                  ? "Impormasyon sa MTOP"
                  : "MTOP information"}
              </h2>

              <p className="mt-2 text-sm leading-6 text-tourism-muted">
                {filipino
                  ? "Ang mga kinakailangan sa permit at opisyal na patakaran sa transportasyon ay dapat kumpirmahin sa kaukulang tanggapan ng City Government."
                  : "Permit requirements and official transport policy should be confirmed with the relevant City Government office."}
              </p>
            </article>

            {/* FARE REFERENCE */}
            <article className="rounded-2xl border border-tourism-border bg-white p-5 shadow-sm">
              <FileText
                aria-hidden="true"
                className="size-5 text-tourism-pink"
              />

              <h2 className="mt-4 text-base font-extrabold text-tourism-navy">
                {filipino
                  ? "Sanggunian sa Pamasahe"
                  : "Fare reference"}
              </h2>

              <p className="mt-2 text-sm leading-6 text-tourism-muted">
                {filipino
                  ? "Ang mga halagang nakikita sa ibaba ay development configuration lamang at hindi opisyal na fare publication."
                  : "The current values below are visible development configuration, not an official fare publication."}
              </p>
            </article>
          </div>

          <section className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_420px]">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-tourism-pink">
                {filipino
                  ? "Gabay sa Ruta"
                  : "Route guide"}
              </p>

              <h2 className="mt-3 text-2xl font-black tracking-tight text-tourism-navy">
                {filipino
                  ? "Mga Naka-configure na Ruta ng Transportasyon"
                  : "Configured transport routes"}
              </h2>

              <div className="mt-5 grid gap-4">
                {transportRoutes.map(
                  (route) => (
                    <article
                      id={route.id}
                      key={route.id}
                      className="rounded-2xl border border-tourism-border bg-white p-5 shadow-sm"
                    >
                      <h3 className="text-base font-extrabold text-tourism-navy">
                        {
                          route.routeLabel[
                            locale
                          ]
                        }
                      </h3>

                      <p className="mt-2 text-sm font-bold text-tourism-pink">
                        {
                          route.origin[
                            locale
                          ]
                        }{" "}
                        →{" "}
                        {
                          route.destination[
                            locale
                          ]
                        }
                      </p>

                      <p className="mt-3 text-sm leading-6 text-tourism-muted">
                        {
                          route.guidance[
                            locale
                          ]
                        }
                      </p>
                    </article>
                  ),
                )}
              </div>
            </div>

            <FareCalculator
              routes={transportRoutes}
              fareRules={fareRules}
              locale={locale}
            />
          </section>

          <section className="mt-10 overflow-x-auto rounded-2xl border border-tourism-border bg-white shadow-sm">
            <div className="border-b border-tourism-border p-5">
              <h2 className="text-xl font-extrabold text-tourism-navy">
                {filipino
                  ? "Naka-configure na Fare Matrix"
                  : "Configured fare matrix"}
              </h2>

              <p className="mt-1 text-xs leading-5 text-tourism-muted">
                {filipino
                  ? "Tiyakin ang lahat ng pamasahe sa responsableng awtoridad o operator bago bumiyahe."
                  : "Verify all fares with the responsible authority or operator before travel."}
              </p>
            </div>

            <table className="w-full min-w-[650px] text-left text-sm">
              <thead className="bg-tourism-navy text-white">
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 font-bold"
                  >
                    {filipino
                      ? "Pinagmulan"
                      : "Origin"}
                  </th>

                  <th
                    scope="col"
                    className="px-5 py-3 font-bold"
                  >
                    {filipino
                      ? "Destinasyon"
                      : "Destination"}
                  </th>

                  <th
                    scope="col"
                    className="px-5 py-3 font-bold"
                  >
                    {filipino
                      ? "Uri ng Commuter"
                      : "Commuter type"}
                  </th>

                  <th
                    scope="col"
                    className="px-5 py-3 text-right font-bold"
                  >
                    {filipino
                      ? "Naka-configure na Pamasahe"
                      : "Configured fare"}
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-tourism-border">
                {fareRules.map((rule) => {
                  const route =
                    transportRoutes.find(
                      (item) =>
                        item.id ===
                        rule.routeId,
                    );

                  if (!route) {
                    return null;
                  }

                  return (
                    <tr
                      key={`${rule.routeId}-${rule.commuterType}`}
                    >
                      <td className="px-5 py-4 text-tourism-navy">
                        {
                          route.origin[
                            locale
                          ]
                        }
                      </td>

                      <td className="px-5 py-4 text-tourism-muted">
                        {
                          route.destination[
                            locale
                          ]
                        }
                      </td>

                      <td className="px-5 py-4 text-tourism-muted">
                        {rule.commuterType ===
                        "regular"
                          ? filipino
                            ? "Regular na commuter"
                            : "Regular commuter"
                          : "Student / Senior / PWD"}
                      </td>

                      <td className="px-5 py-4 text-right font-bold text-tourism-navy">
                        {formatPeso(
                          rule.amount,
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        </Container>
      </main>
    </PageShell>
  );
}