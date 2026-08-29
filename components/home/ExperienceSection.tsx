import {
  Play,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { experiences } from "@/data/tourism";

import { TourismImage } from "./TourismImage";

export function ExperienceSection() {
  return (
    <section className="bg-tourism-surface py-16 sm:py-20">
      <Container>
        <p className="flex items-center gap-3 text-[8px] font-extrabold uppercase tracking-[0.16em] text-tourism-accent">
          <span className="h-px w-5 bg-tourism-accent" />
          Visual Journey
        </p>

        <h2 className="mt-4 text-3xl font-black tracking-tight text-tourism-primary sm:text-4xl">
          Experience Koronadal
        </h2>

        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {experiences.map(
            (experience) => (
              <article
                key={
                  experience.id
                }
              >
                <div className="relative aspect-[1.65] overflow-hidden rounded-2xl">
                  <TourismImage
                    src={
                      experience.image
                    }
                    alt={
                      experience.imageAlt
                    }
                    sizes="(max-width: 768px) 100vw, 33vw"
                    fallbackLabel="Approved experience media pending"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                  <span className="absolute right-3 top-3 rounded-full bg-black/45 px-2 py-1 text-[7px] font-bold text-white backdrop-blur">
                    {
                      experience.duration
                    }
                  </span>

                  <button
                    type="button"
                    aria-label={`Preview ${experience.title}`}
                    className="absolute left-1/2 top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-tourism-accent text-white shadow-xl transition hover:scale-105"
                  >
                    <Play className="ml-0.5 size-4 fill-current" />
                  </button>
                </div>

                <h3 className="mt-3 text-sm font-extrabold text-tourism-primary">
                  {
                    experience.title
                  }
                </h3>

                <p className="mt-1 text-[9px] leading-4 text-tourism-text-muted">
                  {
                    experience.description
                  }
                </p>
              </article>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}