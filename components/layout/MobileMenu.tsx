import Link from "next/link";
import { Search, X } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const navigationLinks = [
  { label: "Destinations", href: "/destinations" },
  { label: "Stay & Eat", href: "/stay-and-eat" },
  { label: "Events", href: "/events" },
  { label: "Transport", href: "/transport" },
  { label: "Business Directory", href: "/business-directory" },
  { label: "Reports", href: "/reports" },
];

export function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="border-t border-border bg-white md:hidden">
      <div className="px-4 py-5">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-sm font-semibold text-[var(--tourism-primary)]">
            Menu
          </span>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="inline-flex size-10 items-center justify-center rounded-md transition-colors hover:bg-muted"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav aria-label="Mobile navigation">
          <ul className="space-y-1">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block rounded-md px-3 py-3 text-sm font-medium transition-colors hover:bg-[var(--tourism-mint)] hover:text-[var(--tourism-primary)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-5 border-t border-border pt-5">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-md px-3 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Search className="size-4" />
            Search
          </button>

          <button
            type="button"
            className="mt-2 w-full rounded-md bg-[var(--tourism-primary)] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--tourism-primary-dark)]"
          >
            Report an Update
          </button>
        </div>
      </div>
    </div>
  );
}