"use client";

import Link from "next/link";
import { Home, ArrowLeft, Settings, Briefcase, Mail, Info } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#171F33] text-white font-sans flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between  px-8 py-4 border-b border-white/5">
        <span className="text-white font-semibold text-xl tracking-tight">
          Arinovaa Labs
        </span>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors cursor-pointer">
          Contact Us
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 relative overflow-hidden">

        {/* Floating terminal card illustration */}
        <div className="relative mt-10 mb-6 w-48 h-36 flex items-center justify-center">
          {/* Main card */}
          <div className="absolute inset-0 rounded-xl bg-linear-to-br from-[#1e2433] to-[#161b27] border border-white/10 shadow-2xl flex items-center justify-center rotate-3">
            <div className="w-12 h-12 rounded-lg bg-[#1a2035] border border-white/10 flex items-center justify-center">
              <span className="text-gray-400 font-mono text-lg">&gt;_</span>
            </div>
          </div>
          {/* Scissors badge top right */}
          <div className="absolute -top-2 right-6 w-8 h-8 rounded-full bg-[#1e2433] border border-white/10 flex items-center justify-center z-10">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
              <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
              <line x1="20" y1="4" x2="8.12" y2="15.88" /><line x1="14.47" y1="14.48" x2="20" y2="20" />
              <line x1="8.12" y1="8.12" x2="12" y2="12" />
            </svg>
          </div>
          {/* Bell badge left */}
          <div className="absolute bottom-2 -left-3 w-8 h-8 rounded-full bg-[#1e2433] border border-orange-500/30 flex items-center justify-center z-10">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              <line x1="2" y1="2" x2="22" y2="22" />
            </svg>
          </div>
        </div>

        {/* Glow blob behind 404 */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "500px",
            height: "300px",
            background: "#3b5bdb",
            opacity: 0.2,
            filter: "blur(120px)",
          }}
        />

        {/* 404 */}
        <h1 className="relative text-[7rem] md:text-[9rem] font-bold leading-none tracking-tight text-white mb-2">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-white mt-0 mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-center max-w-md text-sm leading-relaxed mt-0 mb-8">
          It seems the engineering path you followed has reached a dead end. Our systems
          indicate this endpoint is currently unreachable or does not exist.
        </p>

        {/* Action buttons */}
        <div className="flex items-center gap-3 mt-0 mb-16">
          <Link
            href="/"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors"
          >
            <Home size={15} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-transparent border border-white/20 hover:border-white/40 text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors cursor-pointer"
          >
            <ArrowLeft size={15} />
            Previous Page
          </button>
        </div>

        {/* Helpful navigation paths */}
        <div className="w-full max-w-lg mt-0 mb-36">
          <p className="text-center text-xs tracking-[0.2em] text-gray-500 uppercase mt-0 mb-4">
            Helpful Navigation Paths
          </p>
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: "Services", icon: Settings, href: "/services" },
              { label: "Careers", icon: Briefcase, href: "/careers" },
              { label: "Contact", icon: Mail, href: "/contact" },
              { label: "About", icon: Info, href: "/about" },
            ].map(({ label, icon: Icon, href }) => (
              <Link
                key={label}
                href={href}
                className="flex flex-col items-center gap-2 bg-[#161b27] hover:bg-[#1e2535] border border-white/10 rounded-lg py-4 px-2 transition-colors group"
              >
                <Icon size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Stack trace - bottom left */}
        <div className="absolute bottom-8 left-8 font-mono text-xs text-gray-700 leading-relaxed select-none">
          <p>&gt; STACK_TRACE: 0x404_PAGE_MISSING</p>
          <p>&gt; STATUS: UNREACHABLE</p>
          <p>&gt; LOC: /usr/local/bin/void</p>
        </div>
      </main>
    </div>
  );
}