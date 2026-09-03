"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { Container } from "@/components/layout/Container";

import { establishments } from "@/data/tourism";

import { EstablishmentCard } from "./EstablishmentCard";

const tabs = [
  "Hotels & Resorts",
  "Restaurants & Cafes",
  "Tourism Enterprises",
  "Tourist Guides",
] as const;

type EstablishmentTab = (typeof tabs)[number];

export function EstablishmentsSection() {
  const [activeTab, setActiveTab] =
    useState<EstablishmentTab>(tabs[0]);

  const filteredEstablishments = useMemo(() => {
    
    if (activeTab === tabs[0]) {
      return establishments;
    }

    return establishments;
  }, [activeTab]);

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="flex items-center gap-3 text-[8px] font-extrabold uppercase tracking-[0.16em] text-tourism-pink">
              <span
                aria-hidden="true"
                className="h-px w-5 bg-tourism-pink"
              />

              Trusted Hospitality
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-tourism-navy sm:text-4xl">
              DOT Accredited Establishments
            </h2>
          </div>

          <Link
            href="/business-directory"
            className="hidden rounded-sm pb-1 text-[9px] font-bold text-tourism-pink transition hover:text-tourism-pink-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 sm:block motion-reduce:transition-none"
          >
            View Full Directory →
          </Link>
        </div>

        {/* =====================================================
            CATEGORY FILTERS
            ===================================================== */}

        <div
          aria-label="Establishment categories"
          className="mt-7 overflow-x-auto scrollbar-hidden"
        >
          <div className="flex min-w-max border-b border-tourism-border">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;

              return (
                <button
                  key={tab}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveTab(tab)}
                  className={[
                    "mr-6 border-b-2 pb-3 text-[9px] font-bold transition",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2",
                    "motion-reduce:transition-none",
                    isActive
                      ? "border-tourism-pink text-tourism-navy"
                      : "border-transparent text-tourism-muted hover:text-tourism-navy",
                  ].join(" ")}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            CARDS
            ===================================================== */}

        <div className="mt-7 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredEstablishments.map((establishment) => (
            <EstablishmentCard
              key={establishment.id}
              establishment={establishment}
            />
          ))}
        </div>

        <Link
          href="/business-directory"
          className="mt-6 block rounded-sm text-center text-[9px] font-bold text-tourism-pink transition hover:text-tourism-pink-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 sm:hidden motion-reduce:transition-none"
        >
          View Full Directory →
        </Link>
      </Container>
    </section>
  );
}
