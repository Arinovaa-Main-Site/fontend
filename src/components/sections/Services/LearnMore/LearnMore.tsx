"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const tabs = ["All Projects"];

const featuredCase = {
  tag: "Fintech",
  label: "Featured Story",
  title: "Scalable Payment Infrastructure for NeoBank Alpha",
  desc: "Migrating a legacy monolith to a high-concurrency microservices architecture capable of handling global transaction spikes without a single millisecond of downtime.",
  stats: [
    { value: "400%", label: "THROUGHPUT INCREASE" },
    { value: "-60%", label: "LATENCY REDUCTION" },
  ],
  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPJqrd8gQvK9rtzMJ7B7IGNWB3n_xPa2skb1FmLIDxK7JeU55IMAfq1DEgAFwX-fZRJsPDGzXAkwCprdITTW_Cdl1kF3mS0RccTeCBohlR-wQnjqapOXoZdLlBd4qdsX1wRePdRNjv-CFWB77kHt5adVjE2E4j9czMDZhLgeiz_VsZHMXV95eDPeHWcXjIlX-C5-rRyKk1_cp9jxmxc2uARssu3XUDCKEo1dyYGd08KjoQTlHF2QhN4RDXYKOdS5QE4HyqdZNUlaRd",
};

const caseStudies = [
  {
    tag: "Blockchain",
    tagColor: "text-orange-400 bg-orange-400/10",
    title: "E-Voting Full Stack",
    desc: "A secure, blockchain-backed voting platform ensuring transparency and cryptographic integrity for modern democratic processes.",
    stats: [
      { value: "Zero-Knowledge", label: "PROOFS ENABLED" },
      { value: "Immutable", label: "AUDIT LOGS" },
    ],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80",
    href: "#",
  },
  {
    tag: "Full Stack",
    tagColor: "text-blue-300 bg-blue-400/10",
    title: "Panchal Family Full Stack",
    desc: "A comprehensive family management and genealogical platform designed for high data integrity and seamless collaboration.",
    stats: [
      { value: "Real-time", label: "SYNC ENGINE" },
      { value: "High", label: "DATA INTEGRITY" },
    ],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80",
    href: "#",
  },
  {
    tag: "Mobile",
    tagColor: "text-blue-300 bg-blue-400/10",
    title: "React Native Mobile App",
    desc: "A high-performance cross-platform application delivering native-level experiences with a unified codebase for iOS and Android.",
    stats: [
      { value: "90%", label: "CODE REUSE" },
      { value: "Native", label: "PERFORMANCE" },
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    href: "#",
  },
];

export default function CaseStudiesPage() {
  const [activeTab, setActiveTab] = useState("All Projects");

  return (
    <div className="min-h-screen bg-[#0d1221] text-white font-sans">

      {/* ── Hero ── */}
      <section className="px-6 md:px-16 pt-16 pb-10 max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-4">
          Case Studies
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5 max-w-xl">
          Engineering Excellence In Action.
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-8">
          We specialize in solving high-stakes technical challenges for industry leaders.
          Explore how our engineering-first approach transforms complex problems into
          scalable digital advantages.
        </p>

        {/* Filter tabs */}
        <div className="flex items-center gap-2 flex-wrap mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors cursor-pointer ${
                activeTab === tab
                  ? "bg-[#1e2f5e] border-blue-500/40 text-white"
                  : "bg-transparent border-white/15 text-gray-400 hover:text-white hover:border-white/30"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Featured case study */}
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden border border-white/10 bg-[#111827]">
          {/* Image */}
          <div className="relative min-h-75 md:min-h-95">
            <Image
              src={featuredCase.image}
              alt={featuredCase.title}
              fill
              className="object-cover brightness-75"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Content */}
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xs text-blue-400 font-medium">{featuredCase.tag}</span>
              <span className="text-gray-600 text-xs">◆</span>
              <span className="text-xs text-gray-400">Featured Story</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
              {featuredCase.title}
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {featuredCase.desc}
            </p>
            <div className="flex items-start gap-8 mb-6">
              {featuredCase.stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-xl font-bold text-orange-400">{value}</p>
                  <p className="text-xs tracking-[0.15em] uppercase text-gray-500 mt-0.5">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="#"
              className="flex items-center gap-1.5 text-sm text-white font-medium hover:text-blue-300 transition-colors w-fit"
            >
              Read Case Study <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── More Case Studies ── */}
      <section className="px-6 md:px-16 pb-20 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          {caseStudies.map(({ tag, tagColor, title, desc, stats, image, href }, i) => (
            <div
              key={title}
              className="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden border border-white/10 bg-[#111827] hover:border-white/20 transition-colors"
            >
              {/* Image — alternate left/right */}
              <div className={`relative min-h-[240px] ${i % 2 !== 0 ? "md:order-2" : ""}`}>
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover brightness-75"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Content */}
              <div className={`p-8 flex flex-col justify-center ${i % 2 !== 0 ? "md:order-1" : ""}`}>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full w-fit mb-4 ${tagColor}`}>
                  {tag}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
                  {title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{desc}</p>
                <div className="flex items-start gap-8">
                  {stats.map(({ value, label }) => (
                    <div key={label} className="flex-1">
                      <p className="text-sm font-bold text-white">{value}</p>
                      <p className="text-xs tracking-[0.12em] uppercase text-gray-500 mt-0.5">
                        {label}
                      </p>
                    </div>
                  ))}
                  <Link
                    href={href}
                    className="flex items-center gap-1 text-sm text-white hover:text-blue-300 transition-colors shrink-0 self-center"
                  >
                    Read Story <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 md:px-16 pb-24 max-w-7xl mx-auto">
        <div className="border border-white/10 rounded-2xl px-8 py-20 flex flex-col items-center text-center bg-gradient-to-br from-[#141929] via-[#0f1628] to-[#0d1221]">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-lg leading-tight">
            Ready to Engineer Your Success Story?
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-10">
            Partner with a team that speaks code and understands business. Let&apos;s build
            the next generation of your digital ecosystem.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/services"
              className="px-8 py-3.5 rounded-lg border border-white/20 hover:border-white/40 text-white text-sm font-medium transition-colors bg-transparent"
            >
              Browse Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}