import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const socialLinks = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/arinovaalabs",
    label: "Instagram",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/arinovaa-labs",
    label: "LinkedIn",
  },
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/arinovaalabs",
    label: "Facebook",
  },
];

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/career" },
];

const companyLinks = [
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-[#121d42] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Top Section */}
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-4xl font-bold leading-none text-[#B7C5FF] md:text-5xl">
              Arinovaa
              <br />
              Labs
            </h2>

            <p className="mt-6 max-w-xs text-sm leading-7 text-gray-300">
              Engineering excellence for the modern digital era.
              High-performance software, precision-built.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gray-300 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
              Explore
            </h3>

            <div className="space-y-4">
              {exploreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-gray-300 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
              Company
            </h3>

            <div className="space-y-4">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-gray-300 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
              Newsletter
            </h3>

            <p className="mb-5 text-sm leading-7 text-gray-300">
              Stay updated with our latest engineering insights.
            </p>

            <div className="flex items-center rounded-lg border border-white/10 bg-[#0b1330] p-1">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-gray-500"
              />

              <button
                type="button"
                className="flex h-9 w-10 items-center justify-center rounded-md bg-[#B7C5FF] text-[#121d42] transition hover:bg-white"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 pt-6 text-xs text-gray-400 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Arinovaa Labs. All rights
            reserved.
          </p>

          <div className="flex flex-wrap gap-6 uppercase tracking-[0.15em]">
            <span>LOC: 40.7128° N, 74.0060° W</span>
            <span>VER: 2.4.0-STABLE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
