"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

import logo from "../../../assets/logo/arinovaa-logo-header-transparent.png";

type Child = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href?: string;
  children?: Child[];
};

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
  { label: "Products", href: "/products" },
  { label: "Portfolio", href: "/projects" },
  { label: "Careers", href: "/career" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const aboutActive =
    pathname === "/about" || pathname.startsWith("/about/");

  const isActive = (href?: string) => href === pathname;

  const closeMenus = () => {
    setMenuOpen(false);
    setAboutOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 shadow-[0_4px_20px_rgba(6,25,77,0.05)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenus}
          aria-label="Arinovaa Labs Home"
          className="shrink-0 transition-opacity duration-200 hover:opacity-90"
        >
          <Image
            src={logo}
            alt="Arinovaa Labs"
            width={200}
            height={80}
            priority
            className="h-auto w-42.5 md:w-46.25"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 md:flex lg:gap-8"
        >
          {navLinks.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={aboutOpen}
                  onClick={() => setAboutOpen((open) => !open)}
                  className={`relative flex items-center gap-1.5 py-3 text-[15px] font-medium transition-colors duration-200 ${
                    aboutActive || aboutOpen
                      ? "text-[#06194D]"
                      : "text-[#64748B] hover:text-[#06194D]"
                  }`}
                >
                  {item.label}

                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${
                      aboutOpen ? "rotate-180" : ""
                    }`}
                  />

                  <span
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-[#2563EB] transition-[width] duration-200 ${
                      aboutActive || aboutOpen ? "w-full" : "w-0"
                    }`}
                  />
                </button>

                {/* Dropdown + hover bridge */}
                <div
                  className={`absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-2 transition-[opacity,visibility,transform] duration-200 ${
                    aboutOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-1 opacity-0"
                  }`}
                >
                  <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_20px_60px_rgba(6,25,77,0.14)]">
                    <div className="mt-1 space-y-1">
                      {item.children.map((child) => {
                        const active = isActive(child.href);

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setAboutOpen(false)}
                            className={`flex items-center rounded-xl px-4 py-3.5 text-sm font-medium transition-colors duration-200 ${
                              active
                                ? "bg-blue-50 text-[#06194D]"
                                : "text-slate-600 hover:bg-slate-50 hover:text-[#06194D]"
                            }`}
                          >
                            <span
                              className={`mr-3 h-1.5 w-1.5 rounded-full ${
                                active ? "bg-[#2563EB]" : "bg-slate-200"
                              }`}
                            />
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                onClick={closeMenus}
                className={`group relative py-3 text-[15px] font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-[#06194D]"
                    : "text-[#64748B] hover:text-[#06194D]"
                }`}
              >
                {item.label}

                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-[#2563EB] transition-[width] duration-200 ${
                    isActive(item.href)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          onClick={closeMenus}
          className="hidden rounded-xl bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(37,99,235,0.2)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-[0_10px_25px_rgba(37,99,235,0.25)] md:block"
        >
          Contact Us
        </Link>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-[#06194D] transition-colors duration-200 hover:border-blue-200 hover:bg-blue-50 md:hidden"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 md:hidden ${
          menuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden border-t border-slate-200">
          <nav
            aria-label="Mobile navigation"
            className="max-h-[calc(100dvh-5rem)] overflow-y-auto bg-white px-4 py-4"
          >
            <div className="space-y-1.5">
              {navLinks.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() => setAboutOpen((open) => !open)}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium ${
                        aboutActive
                          ? "bg-blue-50 text-[#06194D]"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {item.label}

                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          aboutOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-200 ${
                        aboutOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <div className="ml-3 mt-1.5 space-y-1 border-l-2 border-blue-100 pl-3">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={closeMenus}
                              className={`block rounded-lg px-4 py-2.5 text-sm ${
                                isActive(child.href)
                                  ? "bg-blue-50 font-medium text-[#06194D]"
                                  : "text-slate-600 hover:bg-slate-50"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href!}
                    onClick={closeMenus}
                    className={`block rounded-xl px-4 py-3.5 text-sm font-medium ${
                      isActive(item.href)
                        ? "bg-blue-50 text-[#06194D]"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}

              <Link
                href="/contact"
                onClick={closeMenus}
                className="mt-3 block rounded-xl bg-[#2563EB] py-3.5 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1D4ED8]"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}