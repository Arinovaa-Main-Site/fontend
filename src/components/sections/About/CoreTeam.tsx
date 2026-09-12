"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles, Star } from "lucide-react";
import { FaCalendarAlt } from "react-icons/fa";
import { motion, MotionConfig } from "motion/react";
import {
  developers,
  leadership,
  LeadershipCard,
  QuoteCard,
  quotes,
  Reveal,
  SectionHeading,
  stagger,
  stats,
  DeveloperRow,
} from "./CoreTeamParts";
import SystemVisual from "@/components/shared/SystemVisual";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";



export default function CoreTeam() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="relative min-h-screen overflow-hidden arino-hero text-white">
        {/* Background */}
        <div className="pointer-events-none absolute -left-40 -top-40 size-125 rounded-full bg-blue-600/8 blur-[140px]" />

        <div className="pointer-events-none absolute -right-40 top-[40%] size-112.5 rounded-full bg-cyan-500/6 blur-[140px]" />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.8) 1px,transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          {/* Hero */}
          <section className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
            <Reveal>
              <div>
                <div className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                  <span className="h-px w-9 bg-blue-500" />
                  <Sparkles size={13} />
                  The People Behind Arinovaa
                </div>

                <h1 className="text-5xl font-bold leading-[0.96] tracking-[-0.045em] sm:text-6xl lg:text-[78px]">
                  Built by
                  <span className="block text-blue-500">people.</span>
                  Driven by
                  <span className="block text-slate-500">purpose.</span>
                </h1>

                <p className="mt-8 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                  Meet the minds combining engineering excellence, strategic
                  thinking, and innovation to build technology that moves
                  businesses forward.
                </p>

                <Link
                  href="#leadership"
                  className="group mt-10 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold transition-all hover:bg-blue-500"
                >
                  Meet Our Leadership
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </Reveal>

            <Reveal>
              <SystemVisual />
            </Reveal>
          </section>

          {/* Stats */}
          <Reveal className="mt-24 lg:mt-32">
            <section className="border-y border-white/10 arino-surface py-7">
              <div className="grid grid-cols-2 lg:grid-cols-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="border-white/10 px-5 py-5 even:border-l sm:px-8 lg:border-l first:lg:border-l-0"
                  >
                    <p className="text-3xl font-bold sm:text-4xl">
                      {/* {item.value} */}
                       <AnimatedCounter value={item.value} />
                    </p>

                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600 sm:text-xs">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          {/* Leadership */}
          <section id="leadership" className="mt-28 lg:mt-40">
            <SectionHeading
              number="01"
              label="Leadership"
              heading="The minds"
              muted="behind the mission."
              description="Strategic leadership and deep technical expertise working together to create meaningful digital products."
            />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-5"
            >
              {leadership.map((member, index) => (
                <LeadershipCard
                  key={member.name}
                  member={member}
                  index={index}
                />
              ))}
            </motion.div>
          </section>

          {/* Engineering */}
          <section className="mt-28 lg:mt-40">
            <SectionHeading
              number="02"
              label="Engineering"
              heading="The people who"
              muted="build it."
            />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="divide-y divide-white/10 border-y border-white/10"
            >
              {developers.map((member, index) => (
                <DeveloperRow key={member.name} member={member} index={index} />
              ))}
            </motion.div>
          </section>

          {/* Quotes */}
          <section className="mt-28 lg:mt-40">
            <SectionHeading
              number="03"
              label="Perspective"
              heading="Voices of"
              muted="leadership."
            />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid gap-5 lg:grid-cols-3"
            >
              {quotes.map((item) => (
                <QuoteCard key={item.name} item={item} />
              ))}
            </motion.div>
          </section>

          {/* CTA */}
          <Reveal className="mt-28 lg:mt-40">
            <section className="relative overflow-hidden border border-blue-500/20 bg-blue-600 px-6 py-16 sm:px-10 lg:py-24">
              <div className="absolute -right-24 -top-32 size-96 rounded-full border-70 border-white/10" />

              <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
                <div>
                  <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-100">
                    <Star size={14} className="fill-current" />
                    {"Let's"} Build Together
                  </div>

                  <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                    Have an ambitious idea?
                    <span className="block text-blue-100">
                      {"Let's"} make it real.
                    </span>
                  </h2>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <a
                    href="https://cal.id/arinovaa-labs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-[#020817] transition-transform hover:-translate-y-0.5"
                  >
                    <FaCalendarAlt />
                    Schedule a Call
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 border border-white/30 px-6 py-3.5 text-sm font-semibold hover:bg-white/10"
                  >
                    Start Your Project
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </div>
            </section>
          </Reveal>
        </div>
      </main>
    </MotionConfig>
  );
}
