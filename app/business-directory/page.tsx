import { BusinessDirectory } from "@/components/directory/BusinessDirectory";
import { PageHeader } from "@/components/tourism/PageHeader";
import { PageShell } from "@/components/layout/PageShell";
import { getLocale } from "@/lib/i18n/locale";
import { establishments } from "@/data/tourism";

export default async function BusinessDirectoryPage() {
  const locale = await getLocale();

  const filipino = locale === "fil";

  return (
    <PageShell>
      <main className="bg-tourism-surface">
        <PageHeader
          eyebrow={filipino ? "MGA DOT-LISTED" : "DOT-LISTED"}
          title={
            filipino
              ? "Direktoryo ng mga Establisimyento"
              : "Business Directory"
          }
          description={
            filipino
              ? "Tuklasin ang mga akreditado at inirerekomendang establisimyento para sa iyong paglalakbay sa Koronadal."
              : "Discover accredited and recommended establishments for your visit to Koronadal."
          }
        />

        <BusinessDirectory
          establishments={establishments}
          locale={locale}
        />
      </main>
    </PageShell>
  );
}