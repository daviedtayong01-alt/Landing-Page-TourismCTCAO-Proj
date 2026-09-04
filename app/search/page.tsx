import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/layout/PageShell";
import { SearchForm } from "@/components/search/SearchForm";
import { SearchResults } from "@/components/search/SearchResults";

import { getLocale } from "@/lib/i18n/locale";
import {
  normalizeSearchKind,
  searchTourismContent,
} from "@/lib/tourism-search";

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
    category?: string;
    favorites?: string;
  }>;
}

export default async function SearchPage({
  searchParams,
}: SearchPageProps) {
  const locale = await getLocale();
  const params = await searchParams;

  const query =
    typeof params.q === "string"
      ? params.q
      : "";

  const kind = normalizeSearchKind(
    params.category ?? "",
  );

  const favoritesOnly =
    params.favorites === "true";

  const results = searchTourismContent({
    query,
    kind,
    locale,
  });

  return (
    <PageShell>
      <main className="bg-tourism-surface pb-16 sm:pb-20">
        <section className="bg-tourism-navy text-white">
          <Container className="py-12 sm:py-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-5 bg-tourism-pink" />

                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-tourism-pink">
                  {locale === "fil"
                    ? "MAGHANAP"
                    : "SEARCH"}
                </p>
              </div>

              <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                {locale === "fil"
                  ? "Hanapin sa Visit Koronadal"
                  : "Search Visit Koronadal"}
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
                {locale === "fil"
                  ? "Maghanap ng mga destinasyon, establisimyento, kaganapan, MICE venue, impormasyon sa transportasyon, at iba pang tourism content."
                  : "Find destinations, establishments, events, MICE venues, transport information, and other tourism content."}
              </p>
            </div>
          </Container>
        </section>

        <Container className="py-10 sm:py-14">
          <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
            <aside className="rounded-2xl border border-tourism-border bg-white p-5 sm:p-6 lg:self-start">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-tourism-pink">
                {locale === "fil"
                  ? "MGA FILTER"
                  : "SEARCH FILTERS"}
              </p>

              <h2 className="mt-2 text-lg font-extrabold text-tourism-navy">
                {locale === "fil"
                  ? "Pinuhin ang iyong paghahanap"
                  : "Refine your search"}
              </h2>

              <p className="mt-2 text-xs leading-5 text-tourism-muted">
                {locale === "fil"
                  ? "Pumili ng uri ng tourism content o tingnan lamang ang mga naka-save na listahan."
                  : "Choose a tourism content type or show only your saved listings."}
              </p>

              <div className="mt-5 rounded-xl bg-tourism-surface p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-tourism-soft">
                  {locale === "fil"
                    ? "KASALUKUYANG ESTADO"
                    : "CURRENT STATE"}
                </p>

                <p className="mt-2 text-sm font-bold text-tourism-navy">
                  {favoritesOnly
                    ? locale === "fil"
                      ? "Mga naka-save lamang"
                      : "Saved listings only"
                    : query.trim()
                      ? locale === "fil"
                        ? `Mga resulta para sa "${query.trim()}"`
                        : `Results for "${query.trim()}"`
                      : locale === "fil"
                        ? "Lahat ng tourism content"
                        : "All tourism content"}
                </p>
              </div>
            </aside>

            <div className="space-y-6">
              <SearchForm
                initialQuery={query}
                initialKind={kind}
                favoritesOnly={favoritesOnly}
                locale={locale}
              />

              <SearchResults
                results={results}
                favoritesOnly={favoritesOnly}
                locale={locale}
              />
            </div>
          </div>
        </Container>
      </main>
    </PageShell>
  );
}