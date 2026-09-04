import Link from "next/link";

import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="bg-tourism-navy text-white">
      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* =========================================================
              BRAND
              ========================================================= */}
          <div>
            <Link
              href="/"
              aria-label="City of Koronadal tourism home"
              className="flex items-center gap-3"
            >
              <span
                aria-hidden="true"
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-tourism-pink text-sm font-black text-white shadow-sm"
              >
                K
              </span>

              <span className="leading-none">
                <span className="block text-sm font-black tracking-tight text-white">
                  VISIT KORONADAL
                </span>

                <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.16em] text-white/70">
                  CITY GOVERNMENT PORTAL
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/65">
              The official tourism portal managed by the
              Office of the City Tourism and Cultural Affairs.
              Discover the historic highlands, cultural pride,
              and growing hospitality of South Cotabato&apos;s
              capital city.
            </p>
          </div>

          {/* =========================================================
              EXPLORE
              ========================================================= */}
          <div>
            <h2 className="text-[10px] font-black uppercase tracking-[0.14em] text-tourism-pink">
              Explore
            </h2>

            <nav className="mt-4 flex flex-col gap-2.5">
              <Link
                href="/destinations"
                className="text-sm text-white/65 transition hover:text-white"
              >
                Destinations
              </Link>

              <Link
                href="/business-directory"
                className="text-sm text-white/65 transition hover:text-white"
              >
                DOT Listed
              </Link>

              <Link
                href="/business-directory"
                className="text-sm text-white/65 transition hover:text-white"
              >
                Stay &amp; Eat
              </Link>

              <Link
                href="/transport"
                className="text-sm text-white/65 transition hover:text-white"
              >
                Local Transport
              </Link>

              <Link
                href="/mice"
                className="text-sm text-white/65 transition hover:text-white"
              >
                MICE Venues
              </Link>
            </nav>
          </div>

          {/* =========================================================
              GOVERNMENT & INFORMATION
              ========================================================= */}
          <div>
            <h2 className="text-[10px] font-black uppercase tracking-[0.14em] text-tourism-pink">
              Government &amp; Info
            </h2>

            <nav className="mt-4 flex flex-col gap-2.5">
              <Link
                href="/reports"
                className="text-sm text-white/65 transition hover:text-white"
              >
                Tourism Reports
              </Link>

              <Link
                href="/reports"
                className="text-sm text-white/65 transition hover:text-white"
              >
                Report an Update
              </Link>

              <Link
                href="/reports"
                className="text-sm text-white/65 transition hover:text-white"
              >
                Tourism Database
              </Link>

              <Link
                href="/reports"
                className="text-sm text-white/65 transition hover:text-white"
              >
                Travel Advisories
              </Link>

              <Link
                href="/business-directory"
                className="text-sm text-white/65 transition hover:text-white"
              >
                Contact Directory
              </Link>
            </nav>
          </div>

          {/* =========================================================
              CONTACT
              ========================================================= */}
          <div>
            <h2 className="text-[10px] font-black uppercase tracking-[0.14em] text-tourism-pink">
              Connect With Us
            </h2>

            <div className="mt-4 space-y-2.5 text-sm leading-5 text-white/65">
              <p>
                City Tourism and Cultural Affairs Office,
                City Hall, Koronadal, South Cotabato,
                Philippines.
              </p>

              <p>
                Email:{" "}
                <a
                  href="mailto:tourism@koronadal.gov.ph"
                  className="transition hover:text-white"
                >
                  tourism@koronadal.gov.ph
                </a>
              </p>

              <p>
                Hours: Mon–Fri, 8:00 AM–5:00 PM
              </p>
            </div>

            <a
              href="#"
              className="mt-4 inline-flex rounded-full bg-tourism-pink px-4 py-2 text-[10px] font-extrabold text-white transition hover:bg-tourism-pink-dark"
            >
              Facebook Page
            </a>
          </div>
        </div>

        {/* =========================================================
            FOOTER BOTTOM
            ========================================================= */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} City Government of
            Koronadal. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5 text-xs text-white/40">
            <Link
              href="#"
              className="transition hover:text-white/70"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="transition hover:text-white/70"
            >
              Terms of Service
            </Link>

            <Link
              href="#"
              className="transition hover:text-white/70"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}