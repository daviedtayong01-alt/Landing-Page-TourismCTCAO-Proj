"use client";

import { Calculator } from "lucide-react";
import { useMemo, useState } from "react";

import type {
  CommuterType,
  FareRule,
  TransportRoute,
} from "@/types/tourism";

interface FareCalculatorProps {
  routes: TransportRoute[];
  fareRules: FareRule[];
}

function formatPeso(amount: number): string {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
  }).format(amount);
}

export function FareCalculator({
  routes,
  fareRules,
}: FareCalculatorProps) {
  const [routeId, setRouteId] = useState(routes[0]?.id ?? "");
  const [commuterType, setCommuterType] = useState<CommuterType>("regular");

  const selectedRoute = routes.find((route) => route.id === routeId);
  const selectedFare = useMemo(
    () => fareRules.find((rule) => rule.routeId === routeId && rule.commuterType === commuterType),
    [commuterType, fareRules, routeId],
  );

  return (
    <section id="fare-calculator" className="rounded-2xl border border-tourism-border bg-white p-5 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-tourism-pink/10 text-tourism-pink">
          <Calculator className="size-5" />
        </span>
        <div>
          <h2 className="text-xl font-extrabold text-tourism-navy">Fare calculator</h2>
          <p className="mt-1 text-sm leading-5 text-tourism-muted">Choose a configured route and commuter type to calculate the current development fare.</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-bold text-tourism-navy">
          Route
          <select
            value={routeId}
            onChange={(event) => setRouteId(event.target.value)}
            className="mt-2 min-h-11 w-full rounded-lg border border-tourism-border bg-white px-3 text-sm font-medium text-tourism-navy"
          >
            {routes.map((route) => <option key={route.id} value={route.id}>{route.routeLabel}</option>)}
          </select>
        </label>

        <label className="text-xs font-bold text-tourism-navy">
          Commuter type
          <select
            value={commuterType}
            onChange={(event) => setCommuterType(event.target.value as CommuterType)}
            className="mt-2 min-h-11 w-full rounded-lg border border-tourism-border bg-white px-3 text-sm font-medium text-tourism-navy"
          >
            <option value="regular">Regular commuter</option>
            <option value="discounted">Student / Senior / PWD</option>
          </select>
        </label>
      </div>

      {selectedRoute && selectedFare ? (
        <div aria-live="polite" className="mt-6 rounded-xl bg-tourism-surface p-5">
          <p className="text-[10px] font-extrabold uppercase tracking-wide text-tourism-muted">Estimated configured fare</p>
          <p className="mt-2 text-3xl font-black tracking-tight text-tourism-navy">{formatPeso(selectedFare.amount)}</p>
          <p className="mt-3 text-sm text-tourism-muted">{selectedRoute.origin} to {selectedRoute.destination}</p>
          <p className="mt-1 text-xs text-tourism-pink">{selectedFare.statusLabel} — verify current fares with the relevant city office or operator before travel.</p>
        </div>
      ) : (
        <p aria-live="polite" className="mt-6 rounded-xl bg-tourism-surface p-5 text-sm text-tourism-muted">No configured fare is available for this selection.</p>
      )}
    </section>
  );
}
