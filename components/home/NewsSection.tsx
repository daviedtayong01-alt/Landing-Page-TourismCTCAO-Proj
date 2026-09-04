import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { getLocale } from "@/lib/i18n/locale";
import { newsItems } from "@/data/tourism";

import { TourismImage } from "./TourismImage";

export async function NewsSection() {
  const locale = await getLocale();
  const filipino = locale === "fil";

  return (
    <section
      aria-labelledby="news-heading"
      className="bg-white py-16 sm:py-20"
    >
      <Container>
        <p className="flex items-center gap-3 text-[8px] font-extrabold uppercase tracking-[0.16em] text-tourism-pink">
          <span
            aria-hidden="true"
            className="h-px w-5 bg-tourism-pink"
          />

          {filipino
            ? "Napapanahong mga Update"
            : "Timely Updates"}
        </p>

        <h2
          id="news-heading"
          className="mt-4 text-3xl font-black tracking-tight text-tourism-navy sm:text-4xl"
        >
          {filipino
            ? "Ano ang Nangyayari sa Koronadal"
            : "What&apos;s Happening in Koronadal"}
        </h2>

        <div className="mt-6 border-t border-tourism-border pt-7">
          <div className="grid gap-5 lg:grid-cols-3">
            {newsItems.map((item) => {
              const category =
                item.category[locale];

              const date =
                item.date[locale];

              const title =
                item.title[locale];

              const description =
                item.description[
                  locale
                ];

              const imageAlt =
                item.imageAlt[locale];

              return (
                <article
                  key={item.id}
                  className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl bg-tourism-surface shadow-[0_8px_25px_rgba(18,59,96,.06)]"
                >
                  <div className="relative aspect-[1.72] overflow-hidden">
                    {item.image ? (
                      <TourismImage
                        src={item.image}
                        alt={imageAlt}
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        fallbackLabel={
                          filipino
                            ? "Hindi available ang larawan ng balita"
                            : "News photography unavailable"
                        }
                        className="transition duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      />
                    ) : (
                      <div
                        role="img"
                        aria-label={imageAlt}
                        className="absolute inset-0 bg-gradient-to-br from-tourism-navy to-tourism-navy-dark"
                      />
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex flex-wrap items-center gap-2 text-[8px] font-extrabold uppercase tracking-wide">
                      <span className="rounded-full bg-tourism-pink px-2 py-1 text-[7px] text-white">
                        {category}
                      </span>

                      <span className="text-tourism-soft">
                        {date}
                      </span>
                    </div>

                    <h3 className="mt-3 text-sm font-extrabold leading-5 text-tourism-navy">
                      {title}
                    </h3>

                    <p className="mt-2 min-h-[48px] line-clamp-3 text-[10px] leading-4 text-tourism-muted">
                      {description}
                    </p>

                    <Link
                      href="/events"
                      className="mt-auto inline-flex w-fit rounded-sm pt-4 text-[9px] font-extrabold text-tourism-navy transition hover:text-tourism-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 motion-reduce:transition-none"
                    >
                      {filipino
                        ? "Magbasa Pa"
                        : "Read More"}{" "}
                      →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}