import { Container } from "@/components/layout/Container";
import { EstablishmentCard } from "@/components/home/EstablishmentCard";
import { establishments } from "@/data/tourism";

interface BusinessDirectoryPageProps {
  searchParams: Promise<{
    accredited?: string;
  }>;
}

export default async function BusinessDirectoryPage({
  searchParams,
}: BusinessDirectoryPageProps) {
  const params = await searchParams;

  const accreditedOnly =
    params.accredited === "true";

  const visibleEstablishments =
    accreditedOnly
      ? establishments.filter(
          (item) =>
            item.accreditationStatus ===
            "accredited",
        )
      : establishments;

  return (
    <main className="min-h-screen bg-[var(--tourism-surface)] py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--tourism-accent)]">
            Business Directory
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight text-[var(--tourism-primary)] sm:text-5xl">
            Tourism Establishments
          </h1>

          <p className="mt-4 text-base leading-7 text-neutral-600">
            Browse tourism establishments and accreditation information for Koronadal City.
          </p>
        </div>

        {accreditedOnly && (
          <p className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
            Showing DOT-accredited establishments only.
          </p>
        )}

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visibleEstablishments.map(
            (establishment) => (
              <EstablishmentCard
                key={establishment.id}
                establishment={
                  establishment
                }
              />
            ),
          )}
        </div>
      </Container>
    </main>
  );
}