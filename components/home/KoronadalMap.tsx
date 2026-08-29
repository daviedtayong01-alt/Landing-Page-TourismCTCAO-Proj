import Link from "next/link";
import {
  MapPinned,
} from "lucide-react";

import { Container } from "@/components/layout/Container";

export function KoronadalMap() {
  return (
    <section
      id="tourism-map"
      className="bg-tourism-background py-16 sm:py-20"
    >
      <Container>
        <p className="flex items-center gap-3 text-[8px] font-extrabold uppercase tracking-[0.16em] text-tourism-accent">
          <span className="h-px w-5 bg-tourism-accent" />
          Interactive Guide
        </p>

        <div className="mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <h2 className="text-3xl font-black tracking-tight text-tourism-primary">
            Explore the Tourism Map
          </h2>

          <div className="flex w-fit rounded-lg bg-tourism-surface p-1">
            <button
              type="button"
              className="rounded-md bg-white px-3 py-2 text-[8px] font-bold text-tourism-primary shadow-sm"
            >
              Map View
            </button>

            <button
              type="button"
              className="rounded-md px-3 py-2 text-[8px] font-bold text-tourism-text-muted"
            >
              Grid View
            </button>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-tourism-border bg-[#dbe9b2]">
          <div
            role="img"
            aria-label="Tourism map preview"
            className="relative min-h-[300px] overflow-hidden sm:min-h-[340px]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(28,112,74,.32)_0_7%,transparent_8%),radial-gradient(circle_at_65%_68%,rgba(28,112,74,.25)_0_11%,transparent_12%),linear-gradient(135deg,#dbeab8,#a8cc85)]" />

            <div className="absolute left-[19%] top-[38%] rounded-full bg-tourism-accent px-3 py-1 text-[8px] font-extrabold text-white shadow-lg">
              Siok Falls
            </div>

            <div className="absolute left-[54%] top-[48%] rounded-full bg-tourism-accent px-3 py-1 text-[8px] font-extrabold text-white shadow-lg">
              Paraiso Verde
            </div>

            <div className="absolute right-[17%] top-[27%] rounded-full bg-tourism-primary px-3 py-1 text-[8px] font-extrabold text-white shadow-lg">
              Caddating Cave
            </div>

            <div className="absolute inset-x-0 top-8 text-center">
              <p className="text-lg font-black tracking-tight text-tourism-primary/80">
                KORONADAL CITY
              </p>

              <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.2em] text-tourism-primary/50">
                SOUTH COTABATO
              </p>
            </div>

            <div className="absolute bottom-5 left-5 rounded-xl bg-white/90 p-3 shadow-lg backdrop-blur">
              <p className="text-[8px] font-extrabold text-tourism-primary">
                MAP LAYERS
              </p>

              <p className="mt-2 text-[7px] text-tourism-text-muted">
                ● Tourist Spots
              </p>

              <p className="mt-1 text-[7px] text-tourism-accent">
                ● DOT Accredited
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <Link
            href="/search?category=destinations"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-tourism-primary px-6 py-3 text-[9px] font-extrabold text-white transition hover:bg-tourism-primary-dark"
          >
            <MapPinned className="size-3" />
            Open Full Interactive Map
          </Link>
        </div>
      </Container>
    </section>
  );
}