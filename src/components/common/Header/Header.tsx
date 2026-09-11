"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../assets/logo/arinovaa-logo-header-transparent.png";

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
  { label: "Products", href: "/products" },
  { label: "Portfolio", href: "/projects" },
  { label: "Careers", href: "/career" },
];

export default function Header() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
   <>
      <header className="sticky top-0 z-50 w-full border-b border-[#E2E8F0] bg-white/95 shadow-sm backdrop-blur-xl">
  <div className="mx-auto flex h-20.5 max-w-7xl items-center justify-between px-4 md:px-8">

    {/* Logo */}
    <Link
      href="/"
      className="shrink-0 transition-opacity duration-300 hover:opacity-90"
    >
      <Image
        src={logo}
        alt="Arinovaa Labs"
        width={200}
        height={80}
        className="h-auto w-42.5 md:w-46.25"
        priority
      />
    </Link>

    {/* Desktop Navigation */}
    <nav className="hidden items-center gap-8 md:flex">
      {navLinks.map((item) => {
        if (hasChildren(item)) {
          const isActive =
            pathname === "/about" || pathname.startsWith("/about/");

          return (
            <div key={item.label} className="group relative">

              {/* Parent Link */}
              <button
                type="button"
                className={`relative flex items-center gap-1.5 py-3 text-[15px] font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-[#06194D]"
                    : "text-[#64748B] hover:text-[#06194D]"
                }`}
              >
                {item.label}

                <ChevronDown
                  size={15}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />

                {/* Active Indicator */}
                <span
                  className={`absolute -bottom-px left-0 h-0.5 rounded-full bg-[#2563EB] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>

              {/* Desktop Dropdown */}
              <div
                className="
                  invisible absolute left-1/2 top-full z-50 mt-3 w-72
                  -translate-x-1/2 translate-y-2
                  rounded-2xl border border-[#E2E8F0]
                  bg-white/98 p-2.5
                  opacity-0 shadow-[0_20px_50px_rgba(6,25,77,0.12)]
                  backdrop-blur-xl
                  transition-all duration-200
                  group-hover:visible
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >
                <div className="flex flex-col gap-1">

                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`group/item flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                        pathname === child.href
                          ? "border border-blue-100 bg-blue-50 text-[#06194D]"
                          : "text-[#475569] hover:bg-[#F1F5F9] hover:text-[#06194D]"
                      }`}
                    >
                      <span className="transition-transform duration-300 group-hover/item:translate-x-1">
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
            className={`relative py-3 text-[15px] font-medium transition-colors duration-300 ${
              isActive
                ? "text-[#06194D]"
                : "text-[#64748B] hover:text-[#06194D]"
            }`}
          >
            {item.label}

            {/* Active Indicator */}
            <span
              className={`absolute -bottom-px left-0 h-0.5 rounded-full bg-[#2563EB] transition-all duration-300 ${
                isActive ? "w-full" : "w-0 hover:w-full"
              }`}
            />
          </Link>
        );
      })}
    </nav>

    {/* Desktop CTA */}
    <Link
      href="/contact"
      className="
        hidden rounded-xl
        bg-[#2563EB]
        px-6 py-3
        text-sm font-semibold text-white
        shadow-[0_6px_20px_rgba(37,99,235,0.20)]
        transition-all duration-300
        hover:-translate-y-0.5
        hover:bg-[#1D4ED8]
        hover:shadow-[0_10px_25px_rgba(37,99,235,0.28)]
        md:block
      "
    >
      Contact Us
    </Link>

    {/* Mobile Menu Button */}
    <button
      type="button"
      aria-label="Toggle Menu"
      aria-expanded={isOpen}
      onClick={() => setIsOpen((prev) => !prev)}
      className="
        flex h-11 w-11
        items-center justify-center
        rounded-xl
        border border-[#E2E8F0]
        text-[#06194D]
        transition-all duration-300
        hover:border-blue-200
        hover:bg-blue-50
        md:hidden
      "
    >
      {isOpen ? (
        <X
          size={24}
          strokeWidth={2}
          className="rotate-90 transition-transform duration-300"
        />
      ) : (
        <Menu
          size={24}
          strokeWidth={2}
          className="transition-transform duration-300"
        />
      )}
    </button>
  </div>

  {/* Mobile Menu */}
  <div
    className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
      isOpen
        ? "max-h-175 border-t border-[#E2E8F0] opacity-100"
        : "max-h-0 opacity-0"
    }`}
  >
    <div className="bg-white px-4 py-4">

      <nav className="flex flex-col gap-1.5">

        {navLinks.map((item) => {
          if (hasChildren(item)) {
            const isActive =
              pathname === "/about" || pathname.startsWith("/about/");

            return (
              <div key={item.label}>

                <button
                  type="button"
                  onClick={() => setAboutOpen((prev) => !prev)}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-blue-50 text-[#06194D]"
                      : "text-[#475569] hover:bg-[#F8FAFC] hover:text-[#06194D]"
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

                {/* Mobile Submenu */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    aboutOpen
                      ? "max-h-80 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="ml-3 mt-1.5 flex flex-col gap-1 border-l-2 border-blue-100 pl-3">

                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => {
                          setAboutOpen(false);
                          setIsOpen(false);
                        }}
                        className={`rounded-lg px-4 py-2.5 text-sm transition-all duration-300 ${
                          pathname === child.href
                            ? "bg-blue-50 font-medium text-[#06194D]"
                            : "text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#06194D]"
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
              className={`rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "bg-blue-50 text-[#06194D]"
                  : "text-[#475569] hover:bg-[#F8FAFC] hover:text-[#06194D]"
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
          className="
            mt-3 rounded-xl
            bg-[#2563EB]
            py-3.5
            text-center text-sm font-semibold text-white
            shadow-[0_6px_20px_rgba(37,99,235,0.18)]
            transition-all duration-300
            hover:bg-[#1D4ED8]
          "
        >
          Contact Us
        </Link>

      </nav>
    </div>
  </div>
</header>
   </>
  );
}
