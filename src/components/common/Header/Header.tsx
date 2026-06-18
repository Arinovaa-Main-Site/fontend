"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/career" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0d1221]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-white md:text-xl"
        >
          Arinovaa Labs
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {label}

                <span
                  className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-blue-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg md:block"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
          className="text-white transition-all duration-300 md:hidden"
        >
          {isOpen ? (
            <X
              size={28}
              className="rotate-90 transition-transform duration-300"
            />
          ) : (
            <Menu
              size={28}
              className="transition-transform duration-300"
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-white/10 bg-[#0d1221]/95 px-4 py-4 backdrop-blur-md">
          <nav className="flex flex-col gap-2">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`group rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-white/10 text-white shadow-lg"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{label}</span>

                    {/* {isActive && (
                      <span className="h-2 w-2 rounded-full bg-white" />
                    )} */}
                  </div>
                </Link>
              );
            })}

            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-xl bg-blue-600 py-3 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}