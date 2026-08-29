import type { ReactNode } from "react";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface PageShellProps {
  children: ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <>
      <div className="relative h-[70px] bg-tourism-navy">
        <Navbar />
      </div>

      {children}

      <Footer />
    </>
  );
}
