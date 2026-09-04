"use client";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationControlsProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      aria-label="Pagination"
      className="mt-8 flex flex-wrap items-center justify-center gap-2"
    >
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="min-h-10 rounded-lg border border-tourism-border bg-white px-4 text-xs font-bold text-tourism-navy transition enabled:hover:border-tourism-pink enabled:hover:text-tourism-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-45 motion-reduce:transition-none"
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => {
          const isCurrentPage = page === currentPage;

          return (
            <button
              key={page}
              type="button"
              aria-label={`Go to page ${page}`}
              aria-current={isCurrentPage ? "page" : undefined}
              onClick={() => onPageChange(page)}
              className={[
                "flex size-10 items-center justify-center rounded-lg text-xs font-bold transition",
                "focus-visible:outline-none",
                "focus-visible:ring-2",
                "focus-visible:ring-tourism-pink",
                "focus-visible:ring-offset-2",
                "motion-reduce:transition-none",
                isCurrentPage
                  ? "bg-tourism-pink text-white"
                  : "border border-tourism-border bg-white text-tourism-navy hover:border-tourism-pink hover:text-tourism-pink",
              ].join(" ")}
            >
              {page}
            </button>
          );
        },
      )}

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="min-h-10 rounded-lg border border-tourism-border bg-white px-4 text-xs font-bold text-tourism-navy transition enabled:hover:border-tourism-pink enabled:hover:text-tourism-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tourism-pink focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-45 motion-reduce:transition-none"
      >
        Next
      </button>
    </nav>
  );
}
