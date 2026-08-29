import { FileText, Mail } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/tourism/PageHeader";

const reportRequests = [
  "Annual Tourism Performance Report",
  "DOT Compliance and Standards Summary",
  "Visitor Arrivals Information",
];

export default function ReportsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Public Records"
        title="Reports and information requests"
        description="Request available tourism reports and public information through the City Government tourism contact channel."
      />
      <main className="min-h-[calc(100vh-70px)] bg-tourism-surface py-10 sm:py-14">
        <Container>
          <div className="max-w-3xl rounded-2xl border border-tourism-border bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-black tracking-tight text-tourism-navy">Available report categories</h2>
            <p className="mt-3 text-sm leading-6 text-tourism-muted">Published files are not bundled with this frontend, so requests are directed to the established tourism contact rather than to a non-functional download action.</p>
            <div className="mt-7 grid gap-3">
              {reportRequests.map((title) => {
                const subject = encodeURIComponent(`Report request: ${title}`);
                return <article key={title} className="flex flex-col gap-4 rounded-xl border border-tourism-border p-4 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-start gap-3"><FileText className="mt-0.5 size-5 shrink-0 text-tourism-pink" /><h3 className="text-sm font-extrabold text-tourism-navy">{title}</h3></div><a href={`mailto:tourism@koronadal.gov.ph?subject=${subject}`} className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-tourism-pink px-4 text-xs font-bold text-white transition hover:bg-tourism-pink-dark"><Mail className="size-3.5" />Request report</a></article>;
              })}
            </div>
          </div>
        </Container>
      </main>
    </PageShell>
  );
}
