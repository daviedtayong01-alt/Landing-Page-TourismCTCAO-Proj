import { Container } from "@/components/layout/Container";
import { experiences } from "@/data/tourism";
import type { Locale } from "@/lib/i18n/config";

import { TourismImage } from "./TourismImage";

interface ExperienceSectionProps {
  locale: Locale;
}

export function ExperienceSection({
  locale,
}: ExperienceSectionProps) {
  const filipino = locale === "fil";

  return (
    <section
      aria-labelledby="experience-heading"
      className="bg-tourism-surface py-16 sm:py-20"
    >
      <Container>
        <p className="flex items-center gap-3 text-[9px] font-extrabold uppercase tracking-[0.16em] text-tourism-pink">
          <span
            aria-hidden="true"
            className="block h-px w-5 shrink-0 bg-tourism-pink"
          />
          {filipino
            ? "Biswal na Paglalakbay"
            : "Visual Journey"}
        </p>

        <h2
          id="experience-heading"
          className="mt-4 text-3xl font-black tracking-tight text-tourism-navy sm:text-4xl"
        >
          {filipino
            ? "Damhin ang Koronadal"
            : "Experience Koronadal"}
        </h2>

        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {experiences.map((experience) => {
            const imageAlt =
              experience.imageAlt[locale];

            const duration =
              experience.duration[locale];

            const title =
              experience.title[locale];

            const description =
              experience.description[locale];

            return (
              <article
                key={experience.id}
                className="group flex h-full min-w-0 flex-col"
              >
                <div className="relative aspect-[1.65] overflow-hidden rounded-2xl">
                  <TourismImage
                    src={experience.image}
                    alt={imageAlt}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    fallbackLabel={
                      filipino
                        ? "Hindi available ang aprubadong experience media"
                        : "Approved experience media pending"
                    }
                    className="transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent"
                  />

                  <span className="absolute right-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[9px] font-bold text-white backdrop-blur">
                    {duration}
                  </span>
                </div>

                <div className="mt-3">
                  <h3 className="text-sm font-extrabold text-tourism-navy">
                    {title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-tourism-muted">
                    {description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}