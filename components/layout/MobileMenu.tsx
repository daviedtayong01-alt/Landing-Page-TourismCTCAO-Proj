"use client";

import Link from "next/link";

import {
  Heart,
  Menu,
  Search,
  X,
} from "lucide-react";

import {
  useEffect,
  useRef,
  useState,
} from "react";

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Destinations",
    href: "/destinations",
  },
  {
    label: "DOT Listed",
    href: "/business-directory",
  },
  {
    label: "Stay & Eat",
    href: "/business-directory",
  },
  {
    label: "Transport",
    href: "/transport",
  },
  {
    label: "MICE",
    href: "/mice",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Reports",
    href: "/reports",
  },
];

interface MobileMenuProps {
  favoriteCount: number;
}

export function MobileMenu({
  favoriteCount,
}: MobileMenuProps) {
  const [open, setOpen] =
    useState(false);

  const menuButtonRef =
    useRef<HTMLButtonElement>(null);

  const firstMenuLinkRef =
    useRef<HTMLAnchorElement>(null);

  const wasOpenRef =
    useRef(false);

  useEffect(() => {
    if (open) {
      firstMenuLinkRef.current?.focus();
    } else if (wasOpenRef.current) {
      menuButtonRef.current?.focus();
    }

    wasOpenRef.current = open;
  }, [open]);

  return (
    <div className="relative lg:hidden">
      <button
        ref={menuButtonRef}
        type="button"
        aria-label={
          open
            ? "Close navigation menu"
            : "Open navigation menu"
        }
        aria-expanded={open}
        onClick={() =>
          setOpen(
            (current) =>
              !current,
          )
        }
        className="flex size-10 items-center justify-center rounded-full border border-white/25 bg-black/15 text-white backdrop-blur-sm transition hover:bg-white/10"
      >
        {open ? (
          <X className="size-5" />
        ) : (
          <Menu className="size-5" />
        )}
      </button>

      {open && (
        <div
          id="mobile-navigation-panel"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              event.preventDefault();
              setOpen(false);
            }
          }}
          className="absolute right-0 top-[calc(100%+10px)] w-[min(88vw,340px)] overflow-hidden rounded-2xl border border-white/10 bg-tourism-navy/95 p-4 shadow-2xl backdrop-blur-xl"
        >
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col"
          >
            {/* DEBUG: RESPONSIVE_NAV - retain desktop utility actions on mobile. */}
            <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-3">
              <Link
                ref={firstMenuLinkRef}
                href="/search"
                aria-label="Search tourism listings"
                onClick={() => setOpen(false)}
                className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <Search className="size-4" />
              </Link>

              <Link
                href="/search?favorites=true"
                aria-label={`Favorites: ${favoriteCount}`}
                onClick={() => setOpen(false)}
                className="flex h-10 items-center gap-1.5 rounded-full bg-white/10 px-3 text-xs font-bold text-white transition hover:bg-white/20"
              >
                <Heart className="size-4" />
                {favoriteCount}
              </Link>

              <span className="ml-auto text-[10px] font-bold text-white">EN</span>
              <span className="text-[10px] text-white/40">/</span>
              <span className="text-[10px] font-semibold text-white/65">FIL</span>
            </div>

            {navigation.map(
              (item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() =>
                    setOpen(false)
                  }
                  className="border-b border-white/10 px-2 py-3.5 text-sm font-semibold text-white/90 transition hover:text-tourism-pink"
                >
                  {item.label}
                </Link>
              ),
            )}

            <Link
              href="/reports"
              onClick={() =>
                setOpen(false)
              }
              className="mt-4 rounded-full bg-tourism-pink px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-tourism-pink-dark"
            >
              Report an Update
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
