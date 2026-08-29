import type { ReactNode } from "react";

import { Container } from "@/components/layout/Container";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <section className="bg-tourism-navy py-12 text-white sm:py-16">
      <Container>
        <p className="flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/75">
          <span className="h-px w-6 bg-tourism-pink" />
          {eyebrow}
        </p>

        <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
          {title}
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75">
          {description}
        </p>

        {children && <div className="mt-7">{children}</div>}
      </Container>
    </section>
  );
}
