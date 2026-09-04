import type { ReactNode } from "react";

import { getLocale } from "@/lib/i18n/locale";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface PageShellProps {
  children: ReactNode;
}

export async function PageShell({
  children,
}: PageShellProps) {
  const locale = await getLocale();

  return (
    <>
      <div className="relative h-[70px] bg-tourism-navy">
        <Navbar locale={locale} />
      </div>

      {children}

      <Footer />
    </>
  );
}