import { BusFront, FileText, Route } from "lucide-react";

import { FareCalculator } from "@/components/transport/FareCalculator";
import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/tourism/PageHeader";
import {
  fareRules,
  transportRoutes,
} from "@/data/transport";

function formatPeso(amount: number): string {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
  }).format(amount);
}

export default function TransportPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Transport and Travel"
        title="Getting around Koronadal"
        description="Use the available route guidance and configured fare reference to plan travel within the visitor directory area."
      />
      <main className="bg-tourism-surface py-10 sm:py-14">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-tourism-border bg-white p-5 shadow-sm"><BusFront className="size-5 text-tourism-pink" /><h2 className="mt-4 text-base font-extrabold text-tourism-navy">Tricycle routes</h2><p className="mt-2 text-sm leading-6 text-tourism-muted">Browse the configured city routes included in this development data set.</p></article>
            <article className="rounded-2xl border border-tourism-border bg-white p-5 shadow-sm"><Route className="size-5 text-tourism-pink" /><h2 className="mt-4 text-base font-extrabold text-tourism-navy">MTOP information</h2><p className="mt-2 text-sm leading-6 text-tourism-muted">Permit requirements and official transport policy should be confirmed with the relevant City Government office.</p></article>
            <article className="rounded-2xl border border-tourism-border bg-white p-5 shadow-sm"><FileText className="size-5 text-tourism-pink" /><h2 className="mt-4 text-base font-extrabold text-tourism-navy">Fare reference</h2><p className="mt-2 text-sm leading-6 text-tourism-muted">The current values below are visible development configuration, not an official fare publication.</p></article>
          </div>

          <section className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_420px]">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-tourism-pink">Route guide</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-tourism-navy">Configured transport routes</h2>
              <div className="mt-5 grid gap-4">
                {transportRoutes.map((route) => (
                  <article id={route.id} key={route.id} className="rounded-2xl border border-tourism-border bg-white p-5 shadow-sm">
                    <h3 className="text-base font-extrabold text-tourism-navy">{route.routeLabel}</h3>
                    <p className="mt-2 text-sm font-bold text-tourism-pink">{route.origin} → {route.destination}</p>
                    <p className="mt-3 text-sm leading-6 text-tourism-muted">{route.guidance}</p>
                  </article>
                ))}
              </div>
            </div>

            <FareCalculator routes={transportRoutes} fareRules={fareRules} />
          </section>

          <section className="mt-10 overflow-x-auto rounded-2xl border border-tourism-border bg-white shadow-sm">
            <div className="border-b border-tourism-border p-5"><h2 className="text-xl font-extrabold text-tourism-navy">Configured fare matrix</h2><p className="mt-1 text-xs leading-5 text-tourism-muted">Verify all fares with the responsible authority or operator before travel.</p></div>
            <table className="w-full min-w-[650px] text-left text-sm">
              <thead className="bg-tourism-navy text-white"><tr><th className="px-5 py-3 font-bold">Origin</th><th className="px-5 py-3 font-bold">Destination</th><th className="px-5 py-3 font-bold">Commuter type</th><th className="px-5 py-3 text-right font-bold">Configured fare</th></tr></thead>
              <tbody className="divide-y divide-tourism-border">
                {fareRules.map((rule) => {
                  const route = transportRoutes.find((item) => item.id === rule.routeId);
                  return route ? <tr key={`${rule.routeId}-${rule.commuterType}`}><td className="px-5 py-4 text-tourism-navy">{route.origin}</td><td className="px-5 py-4 text-tourism-muted">{route.destination}</td><td className="px-5 py-4 text-tourism-muted">{rule.commuterType === "regular" ? "Regular commuter" : "Student / Senior / PWD"}</td><td className="px-5 py-4 text-right font-bold text-tourism-navy">{formatPeso(rule.amount)}</td></tr> : null;
                })}
              </tbody>
            </table>
          </section>
        </Container>
      </main>
    </PageShell>
  );
}
