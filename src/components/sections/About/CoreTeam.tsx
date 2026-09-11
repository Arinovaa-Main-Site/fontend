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

function SystemVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      <div className="absolute inset-0 rounded-[40px] border border-blue-500/10" />
      <div className="absolute inset-4 rounded-[34px] border border-white/[0.05]" />

      <div className="absolute left-1/2 top-1/2 size-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[100px]" />

      <div className="absolute inset-8 overflow-hidden rounded-[30px] border border-white/10 bg-[#050D25]">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.7) 1px,transparent 1px)",
            backgroundSize: "46px 46px",
          }}
        />

        <div className="absolute left-6 top-6">
          <p className="text-[10px] font-semibold tracking-[0.25em] text-blue-400">
            ARINOVAA / SYSTEM
          </p>
          <p className="mt-1 text-[10px] text-slate-600">
            People · Technology · Impact
          </p>
        </div>

        <span className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-400">
          01 / 03
        </span>

        <div className="absolute left-1/2 top-1/2 size-[310px] -translate-x-1/2 -translate-y-1/2 sm:size-[350px]">
          <div className="absolute inset-0 rounded-full border border-blue-400/20 [transform:rotateX(68deg)_rotateZ(-20deg)]" />

          <div className="absolute inset-[35px] rounded-full border border-blue-400/30 [transform:rotateX(68deg)_rotateZ(35deg)]" />

          <div className="absolute inset-[55px] rounded-full border border-cyan-400/20 [transform:rotateY(68deg)_rotateZ(-20deg)]" />

          <motion.div
            animate={{
              scale: [1, 1.04, 1],
              opacity: [0.92, 1, 0.92],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 size-[155px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/30 bg-[radial-gradient(circle_at_35%_30%,#2563EB,#0B2B73_38%,#020817_75%)] shadow-[0_0_70px_rgba(37,99,235,.35)] sm:size-[180px]"
          >
            <div className="absolute inset-[12%] rounded-full border border-blue-300/15" />
            <div className="absolute inset-[25%] rounded-full border border-blue-300/10" />

            <div className="absolute left-1/2 top-0 h-full w-px bg-blue-300/10" />
            <div className="absolute left-0 top-1/2 h-px w-full bg-blue-300/10" />

            <div className="absolute inset-0 grid place-items-center">
              <span className="size-3 rounded-full bg-blue-300 shadow-[0_0_25px_8px_rgba(96,165,250,.35)]" />
            </div>
          </motion.div>

          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[7%] top-[45%] size-3 rounded-full bg-blue-400 shadow-[0_0_18px_5px_rgba(59,130,246,.35)]"
          />

          <motion.span
            animate={{ rotate: [45, 135, 45] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[8%] top-[27%] size-4 rounded-[4px] border border-blue-300 bg-blue-500/30"
          />

          <motion.span
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[12%] right-[22%] size-2.5 rounded-full bg-cyan-300"
          />
        </div>

        <div className="absolute bottom-7 left-7 max-w-[190px]">
          <p className="text-[9px] uppercase tracking-[0.25em] text-slate-600">
            Our Philosophy
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-300">
            Engineering ideas into meaningful digital experiences.
          </p>
        </div>

        <div className="absolute bottom-7 right-7 text-right">
          <p className="text-xs font-semibold tracking-[0.2em] text-blue-400">
            ARINOVAA LABS
          </p>

          <p className="mt-1 text-[8px] uppercase tracking-widest text-slate-600">
            Technology for a better tomorrow
          </p>
        </div>
      </div>

      <div className="absolute bottom-7 left-0 rounded-2xl border border-white/10 bg-[#08112F]/90 px-4 py-3 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <span className="size-2 rounded-full bg-emerald-400" />

          <div>
            <p className="text-[9px] uppercase tracking-widest text-slate-600">
              Status
            </p>

            <p className="text-xs font-semibold text-slate-300">
              Building The Future
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CoreTeam() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="relative min-h-screen overflow-hidden arino-section text-white">
        {/* Background */}
        <div className="pointer-events-none absolute -left-40 -top-40 size-[500px] rounded-full bg-blue-600/[0.08] blur-[140px]" />

        <div className="pointer-events-none absolute -right-40 top-[40%] size-[450px] rounded-full bg-cyan-500/[0.06] blur-[140px]" />

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
            <section className="border-y border-white/10 py-7">
              <div className="grid grid-cols-2 lg:grid-cols-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="border-white/10 px-5 py-5 even:border-l sm:px-8 lg:border-l first:lg:border-l-0"
                  >
                    <p className="text-3xl font-bold sm:text-4xl">
                      {item.value}
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
              <div className="absolute -right-24 -top-32 size-96 rounded-full border-[70px] border-white/10" />

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
