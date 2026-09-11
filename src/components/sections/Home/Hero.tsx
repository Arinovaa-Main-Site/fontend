"use client";

import Link from "next/link";
import {
  Brain,
  Cloud,
  Code2,
  GraduationCap,
  Monitor,
  PenTool,
  Settings,
  Smartphone,
} from "lucide-react";
import { motion, type Variants } from "motion/react";

const services = [
  ["Web Development", Code2],
  ["Mobile Development", Smartphone],
  ["Desktop Applications", Monitor],
  ["AI Solutions", Brain],
  ["Cloud Solutions", Cloud],
  ["SaaS Development", Settings],
  ["UI/UX Design", PenTool],
  ["Internship & Training", GraduationCap],
] as const;

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const gridVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#020F34]">
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 arino-hero"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              ease: "easeOut",
            }}
          >
            <span className="inline-flex items-center rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-blue-300">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-400" />
              Next-Gen Engineering
            </span>

            <h1 className="mt-8 max-w-xl text-5xl font-bold leading-[1.05] tracking-tight text-[#D9E2FF] md:text-6xl">
              Building Future-Ready Software Solutions for Businesses
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Arinovaa Labs helps startups and enterprises build scalable web
              applications, SaaS products, ERP systems, and digital solutions.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
              >
                Get Started
              </Link>

              <Link
                href="/services"
                className="rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* RIGHT SERVICES */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.08,
              ease: "easeOut",
            }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-162.5 rounded-4xl border border-white/10 bg-[#07142F]/80 p-3 shadow-[0_25px_70px_rgba(0,0,0,0.35)] backdrop-blur-lg">

              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-400">
                    Our Services
                  </p>

                  <h2 className="mt-1 text-lg font-semibold text-white">
                    Digital Solutions
                  </h2>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

                  <span className="text-[9px] font-medium uppercase tracking-widest text-white/50">
                    Expertise
                  </span>
                </div>
              </div>

              {/* Service Grid */}
              <motion.div
                variants={gridVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 overflow-hidden rounded-3xl border border-white/10 lg:grid-cols-4"
              >
                {services.map(([title, Icon], index) => (
                  <motion.div
                    key={title}
                    variants={cardVariants}
                    className={`
                      group relative flex aspect-square
                      flex-col items-center justify-center
                      overflow-hidden bg-[#081630]/80 p-5
                      transition-colors duration-300
                      hover:bg-blue-500/6

                      ${index % 4 !== 3 ? "lg:border-r border-white/10" : ""}
                      ${index % 2 !== 1 ? "max-lg:border-r border-white/10" : ""}
                      ${index < 4 ? "lg:border-b border-white/10" : ""}
                      ${index < 2 ? "max-lg:border-b border-white/10" : ""}
                    `}
                  >
                    {/* Number */}
                    <span className="absolute right-4 top-3 text-[9px] tracking-widest text-white/15 transition-colors duration-300 group-hover:text-blue-400/40">
                      0{index + 1}
                    </span>

                    {/* Icon */}
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-400/30 group-hover:bg-blue-500/10">
                      <Icon
                        aria-hidden="true"
                        className="h-7 w-7 text-[#4D7CFF] transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-center text-[10px] font-semibold uppercase leading-5 tracking-[0.14em] text-white/70 transition-colors duration-300 group-hover:text-white">
                      {title}
                    </h3>

                    {/* Bottom Line */}
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-blue-400 transition-all duration-300 group-hover:w-10"
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Footer */}
              <div className="flex items-center justify-between px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                    Built for the future
                  </span>
                </div>

                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">
                  Arinovaa Labs
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trusted Bar */}
      <div className="border-t border-white/5 bg-[#010A25] py-6">
        <p className="px-6 text-center text-xs uppercase tracking-[0.3em] text-slate-400">
          Reliable Software Solutions. Long-Term Partnerships, Proven Results.
        </p>
      </div>
    </section>
  );
}