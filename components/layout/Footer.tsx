import Link from "next/link";

import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="bg-[#252525] text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h2 className="text-sm font-black">
              City of Koronadal
            </h2>

            <p className="mt-2 text-xs text-white/55">
              South Cotabato, Philippines
            </p>

            <p className="mt-5 max-w-xs text-xs leading-5 text-white/55">
              Empowering sustainable tourism,
              economic vibrancy, and local
              heritage protection.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-wide">
              Quick Links
            </h2>

            <nav className="mt-4 flex flex-col gap-2">
              <Link
                href="/destinations"
                className="text-xs text-white/55 hover:text-white"
              >
                Destinations
              </Link>

              <Link
                href="/events"
                className="text-xs text-white/55 hover:text-white"
              >
                Events & Festivals
              </Link>

              <Link
                href="/business-directory"
                className="text-xs text-white/55 hover:text-white"
              >
                Business Directory
              </Link>

              <Link
                href="/mice"
                className="text-xs text-white/55 hover:text-white"
              >
                MICE Venues
              </Link>

              <Link
                href="/transport"
                className="text-xs text-white/55 hover:text-white"
              >
                Transport Guide
              </Link>

              <Link
                href="/reports"
                className="text-xs text-white/55 hover:text-white"
              >
                Reports & Open Data
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-wide">
              Contact Us
            </h2>

            <div className="mt-4 space-y-2 text-xs text-white/55">
              <p>
                City Hall Compound,
                Alunan Avenue
              </p>

              <p>
                +63 (083) 228-3457
              </p>

              <p>
                tourism@koronadal.gov.ph
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-wide">
              Citizen Support
            </h2>

            <p className="mt-4 text-xs leading-5 text-white/55">
              Developed by the C4TALYST.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} City Government of Koronadal.
          All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
