import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/layout/PageShell";
import { SearchForm } from "@/components/search/SearchForm";
import { SearchResults } from "@/components/search/SearchResults";
import {
  normalizeSearchKind,
  searchTourismContent,
} from "@/lib/tourism-search";

interface SearchPageProps {
  searchParams: Promise<{
    q?: string | string[];
    category?: string | string[];
    favorites?: string | string[];
  }>;
}

function getSingleValue(value: string | string[] | undefined): string {
  return typeof value === "string" ? value : "";
}

export default async function SearchPage({
  searchParams,
}: SearchPageProps) {
  const params =
    await searchParams;

  const query = getSingleValue(params.q).trim();
  const kind = normalizeSearchKind(getSingleValue(params.category));
  const favoritesOnly = getSingleValue(params.favorites) === "true";
  const results = searchTourismContent({ query, kind });

  return (
    <PageShell>
      <main className="min-h-[calc(100vh-70px)] bg-tourism-surface py-10 sm:py-14">
        <Container>
          <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-tourism-pink">Global search</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-tourism-navy sm:text-4xl">Find tourism information</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-tourism-muted">Search across listed destinations, DOT-accredited establishments, events, MICE venues, and configured transport routes.</p>

          <div className="mt-7"><SearchForm initialQuery={query} initialKind={kind} favoritesOnly={favoritesOnly} /></div>
          <section className="mt-8" aria-labelledby="search-results-heading">
            <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
              <h2 id="search-results-heading" className="text-xl font-extrabold text-tourism-navy">{favoritesOnly ? "Saved listings" : "Search results"}</h2>
              <p className="text-sm text-tourism-muted">{results.length} result{results.length === 1 ? "" : "s"}{query ? ` for “${query}”` : ""}</p>
            </div>
            <SearchResults results={results} favoritesOnly={favoritesOnly} />
          </section>
        </Container>
      </main>
    </PageShell>
  );
}
