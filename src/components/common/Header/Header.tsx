"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/career" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-[#0d1221] border-b border-white/5 px-6 md:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-white font-bold text-xl tracking-tight">
          Arinovaa Labs
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm transition-colors relative ${
                  isActive
                    ? "text-white font-semibold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white after:rounded-full"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
        >
          Contact Us
        </Link>

      </div>
    </header>
  );
}