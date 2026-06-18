"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type NavChild = {
  label: string;
  href: string;
};

type NavItem =
  | {
      label: string;
      href: string;
    }
  | {
      label: string;
      children: NavChild[];
    };

function hasChildren(
  item: NavItem,
): item is Extract<NavItem, { children: NavChild[] }> {
  return "children" in item;
}

const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "About Arinovaa Labs", href: "/about" },
      { label: "Meet Core Team", href: "/about/core-team" },
      { label: "Client Testimonial", href: "/about/client-testimonial" },
      { label: "Awards", href: "/about/awards" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/career" },
];

export default function Header() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [aboutDesktopOpen, setAboutDesktopOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setAboutDesktopOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          {navLinks.map((item) => {
            if (hasChildren(item)) {
              const isActive =
                pathname === "/about" || pathname.startsWith("/about/");

              return (
                <div ref={dropdownRef} key={item.label} className="relative">
                  <button
                    type="button"
                    onClick={() => setAboutDesktopOpen((prev) => !prev)}
                    className={`flex items-center gap-1 text-sm font-medium transition-all duration-300 ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item.label}

                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        aboutDesktopOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-blue-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />

                  {/* Desktop Dropdown */}
                  <div
                    className={`absolute left-0 top-full mt-4 w-72 rounded-2xl border border-white/10 bg-[#111827]/95 p-3 shadow-2xl backdrop-blur-xl transition-all duration-300 ${
                      aboutDesktopOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="flex flex-col gap-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => {
                            setAboutDesktopOpen(false);
                            setAboutOpen(false);
                            setIsOpen(false);
                          }}
                          className={`group flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                            pathname === child.href
                              ? "border border-blue-500/20 bg-linear-to-r from-blue-500/20 to-blue-600/10 text-white"
                              : "text-gray-300 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            {child.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}

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
          type="button"
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          {isOpen ? (
            <X
              size={28}
              className="rotate-90 transition-transform duration-300"
            />
          ) : (
            <Menu size={28} className="transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-150 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-white/10 bg-[#0d1221]/95 px-4 py-4 backdrop-blur-md">
          <nav className="flex flex-col gap-2">
            {navLinks.map((item) => {
              if (hasChildren(item)) {
                const isActive =
                  pathname === "/about" || pathname.startsWith("/about/");

                return (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() => setAboutOpen((prev) => !prev)}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-gray-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <span>{item.label}</span>

                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          aboutOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        aboutOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="ml-4 mt-2 flex flex-col gap-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => {
                              setAboutOpen(false);
                              setIsOpen(false);
                            }}
                            className={`block rounded-lg px-4 py-2 text-sm transition-all duration-300 ${
                              pathname === child.href
                                ? "bg-white/10 text-white"
                                : "text-gray-300 hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-white/10 text-white shadow-lg"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
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
