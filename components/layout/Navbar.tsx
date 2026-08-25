"use client";

import Link from "next/link";
import {
  Menu,
  Search,
} from "lucide-react";
import { Button } from "@heroui/react";
import { useState } from "react";

import { Container } from "./Container";
import { MobileMenu } from "./MobileMenu";

const navigationLinks = [
  { label: "Destinations", href: "/destinations" },
  { label: "Stay & Eat", href: "/stay-and-eat" },
  { label: "Events", href: "/events" },
  { label: "Transport", href: "/transport" },
  { label: "Business Directory", href: "/business-directory" },
  { label: "Reports", href: "/reports" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[var(--tourism-primary-dark)] text-white">
      <Container>
        <nav
          className="flex min-h-18 items-center justify-between gap-6"
          aria-label="Main navigation"
        >
          {/* Brand */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex size-10 items-center justify-center rounded-full bg-white/10 text-sm font-bold">
              VK
            </div>

            <div className="hidden leading-tight sm:block">
              <div className="font-bold">
                Visit Koronadal
              </div>

              <div className="text-[10px] font-medium uppercase tracking-wider text-white/70">
                South Cotabato
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 lg:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              className="text-sm font-semibold text-white/90 hover:text-white"
              aria-label="Change language"
            >
              EN
            </button>

            <button
              type="button"
              className="inline-flex size-9 items-center justify-center rounded-md transition-colors hover:bg-white/10"
              aria-label="Search"
            >
              <Search className="size-4" />
            </button>

            <Button
              size="sm"
              className="bg-[#8f0050] font-semibold text-white"
            >
              Report an Update
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            className="inline-flex size-10 items-center justify-center rounded-md transition-colors hover:bg-white/10 lg:hidden"
          >
            <Menu className="size-5" />
          </button>
        </nav>
      </Container>

      <div id="mobile-navigation">
        <MobileMenu
          open={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      </div>
    </header>
  );
}