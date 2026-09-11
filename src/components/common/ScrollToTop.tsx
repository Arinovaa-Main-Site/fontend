"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, MessageCircle } from "lucide-react";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="
        fixed right-5 bottom-6 z-50
        flex flex-col items-end gap-3
      "
    >
      {/* Contact Us */}
      <Link
        href="/contact"
        aria-label="Contact Us"
        className="
          group flex items-center gap-3
          rounded-full
          border border-blue-400/20
          bg-[#0A2461]/95
          px-4 py-2.5
          text-sm font-medium text-white
          shadow-xl shadow-blue-950/30
          backdrop-blur-md
          transition-all duration-300
          hover:-translate-y-1
          hover:border-blue-400/40
          hover:bg-[#103783]
          hover:shadow-blue-500/20
        "
      >
        <span>Contact Us</span>

        <span
          className="
            flex h-8 w-8 items-center justify-center
            rounded-full
            bg-blue-500/20
            transition-transform duration-300
            group-hover:scale-110
          "
        >
          <MessageCircle
            aria-hidden="true"
            className="h-4 w-4 text-blue-200"
          />
        </span>
      </Link>

      {/* Scroll To Top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`
          flex h-11 w-11 items-center justify-center
          rounded-full
          border border-white/10
          bg-[#0A2461]/95
          text-white
          shadow-xl shadow-blue-950/30
          backdrop-blur-md
          transition-all duration-300
          hover:-translate-y-1
          hover:border-blue-400/40
          hover:bg-[#103783]
          hover:shadow-blue-500/20
          active:scale-95
          ${
            showTop
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-3 opacity-0"
          }
        `}
      >
        <ArrowUp
          aria-hidden="true"
          className="h-5 w-5 transition-transform duration-300"
        />
      </button>
    </div>
  );
}