import Link from "next/link";
import { MapPinned } from "lucide-react";

import { Container } from "@/components/layout/Container";

export function KoronadalMap() {
  return (
    <section
      id="tourism-map"
      aria-labelledby="tourism-map-heading"
      className="bg-tourism-background py-16 sm:py-20"
    >
      <Container>
        <p className="flex items-center gap-3 text-[9px] font-extrabold uppercase tracking-[0.16em] text-tourism-pink">
          <span
            aria-hidden="true"
            className="block h-px w-5 shrink-0 bg-tourism-pink"
          />
          Interactive Guide
        </p>

        <div className="mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <h2
            id="tourism-map-heading"
            className="text-3xl font-black tracking-tight text-tourism-navy sm:text-4xl"
          >
            Explore the Tourism Map
          </h2>

          <div
            aria-label="Map view"
            className="flex w-fit rounded-lg bg-tourism-surface p-1"
          >
            <span
              aria-current="true"
              className="rounded-md bg-white px-3 py-2 text-[10px] font-bold text-tourism-navy shadow-sm"
            >
              Map View
            </span>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-tourism-border bg-[#dbe9b2]">
          <div
            role="img"
            aria-label="Tourism map preview showing selected destinations in Koronadal City, South Cotabato"
            className="relative min-h-[300px] overflow-hidden sm:min-h-[340px]"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(28,112,74,.32)_0_7%,transparent_8%),radial-gradient(circle_at_65%_68%,rgba(28,112,74,.25)_0_11%,transparent_12%),linear-gradient(135deg,#dbeab8,#a8cc85)]"
            />

            <div
              aria-hidden="true"
              className="absolute left-[19%] top-[38%] rounded-full bg-tourism-pink px-3 py-1 text-[9px] font-extrabold text-white shadow-lg"
            >
              Siok Falls
            </div>

            <div
              aria-hidden="true"
              className="absolute left-[54%] top-[48%] rounded-full bg-tourism-pink px-3 py-1 text-[9px] font-extrabold text-white shadow-lg"
            >
              Paraiso Verde
            </div>

            <div
              aria-hidden="true"
              className="absolute right-[17%] top-[27%] rounded-full bg-tourism-navy px-3 py-1 text-[9px] font-extrabold text-white shadow-lg"
            >
              Caddating Cave
            </div>

            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-8 text-center"
            >
              <p className="text-lg font-black tracking-tight text-tourism-navy/80">
                KORONADAL CITY
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-tourism-navy/50">
                SOUTH COTABATO
              </p>
            </div>

            <div className="absolute bottom-5 left-5 rounded-xl bg-white/90 p-3 shadow-lg backdrop-blur">
              <p className="text-[9px] font-extrabold text-tourism-navy">
                MAP LAYERS
              </p>

              <p className="mt-2 text-[9px] text-tourism-muted">
                <span aria-hidden="true">●</span>{" "}
                Tourist Spots
              </p>

              <p className="mt-1 text-[9px] text-tourism-pink">
                <span aria-hidden="true">●</span>{" "}
                DOT Accredited
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <Link
            href="/search?category=destinations"
            className="
              inline-flex min-h-11
              items-center gap-2
              rounded-full
              bg-tourism-navy
              px-6 py-3
              text-xs font-extrabold
              text-white
              transition-colors
              hover:bg-tourism-navy-dark
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-tourism-pink
              focus-visible:ring-offset-2
              motion-reduce:transition-none
            "
          >
            <MapPinned
              aria-hidden="true"
              className="size-4"
            />
            Browse All Destinations
          </Link>
        </div>
      </Container>
    </section>
  );
}