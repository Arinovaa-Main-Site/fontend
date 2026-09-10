"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
type PageItem = number | "ellipsis";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
  siblingCount?: number;
  className?: string;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  disabled = false,
  siblingCount = 1,
  className = "",
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  const page = Math.max(1, Math.min(currentPage, totalPages));

  const getPages = (): PageItem[] => {
    const visiblePages = siblingCount * 2 + 5;

    // Show all pages
    if (totalPages <= visiblePages) {
      return Array.from(
        { length: totalPages },
        (_, index) => index + 1,
      );
    }

    const left = Math.max(page - siblingCount, 2);
    const right = Math.min(
      page + siblingCount,
      totalPages - 1,
    );

    const showLeftDots = left > 2;
    const showRightDots = right < totalPages - 1;

    // Middle
    if (showLeftDots && showRightDots) {
      return [
        1,
        "ellipsis",
        ...Array.from(
          { length: right - left + 1 },
          (_, index) => left + index,
        ),
        "ellipsis",
        totalPages,
      ];
    }

    // Beginning
    if (!showLeftDots) {
      return [
        ...Array.from(
          { length: right + 1 },
          (_, index) => index + 1,
        ),
        "ellipsis",
        totalPages,
      ];
    }

    // End
    return [
      1,
      "ellipsis",
      ...Array.from(
        { length: totalPages - left },
        (_, index) => left + index,
      ),
      totalPages,
    ];
  };

  const pages = getPages();

  const handlePageChange = (nextPage: number) => {
    if (
      disabled ||
      nextPage < 1 ||
      nextPage > totalPages ||
      nextPage === page
    ) {
      return;
    }

    onPageChange(nextPage);
  };

  return (
    <nav
      aria-label="Pagination"
      className={`mt-12 flex items-center justify-center gap-2 ${className}`}
    >
      {/* Previous */}
      <button
        type="button"
        onClick={() => handlePageChange(page - 1)}
        disabled={disabled || page === 1}
        aria-label="Previous page"
        className="
          flex h-10 w-10 items-center justify-center
          rounded-lg border border-white/8
          bg-[#101a3b] text-slate-400
          transition
          hover:border-blue-500/30 hover:text-white
          disabled:cursor-not-allowed disabled:opacity-30
        "
      >
        <ChevronLeft size={17} />
      </button>

      {/* Pages */}
      {pages.map((item, index) => {
        if (item === "ellipsis") {
          return (
            <span
              key={`ellipsis-${index}`}
              className="
                flex h-10 w-8 items-center justify-center
                text-sm text-slate-500
              "
              aria-hidden="true"
            >
              …
            </span>
          );
        }

        const active = item === page;

        return (
          <button
            key={item}
            type="button"
            onClick={() => handlePageChange(item)}
            disabled={disabled}
            aria-label={`Page ${item}`}
            aria-current={active ? "page" : undefined}
            className={`
              flex h-10 min-w-10 items-center justify-center
              rounded-lg border px-3
              text-sm font-medium transition
              ${
                active
                  ? "border-blue-500 bg-blue-600 text-white"
                  : "border-white/8 bg-[#101a3b] text-slate-400 hover:border-blue-500/30 hover:text-white"
              }
              disabled:cursor-not-allowed disabled:opacity-50
            `}
          >
            {item}
          </button>
        );
      })}

      {/* Next */}
      <button
        type="button"
        onClick={() => handlePageChange(page + 1)}
        disabled={disabled || page === totalPages}
        aria-label="Next page"
        className="
          flex h-10 w-10 items-center justify-center
          rounded-lg border border-white/8
          bg-[#101a3b] text-slate-400
          transition
          hover:border-blue-500/30 hover:text-white
          disabled:cursor-not-allowed disabled:opacity-30
        "
      >
        <ChevronRight size={17} />
      </button>
    </nav>
  );
};

export default Pagination;