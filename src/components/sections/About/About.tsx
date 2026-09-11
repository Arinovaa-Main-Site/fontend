"use client";

import { motion, MotionConfig } from "motion/react";

const values = [
  ["01", "Precision"],
  ["02", "Scalability"],
  ["03", "Innovation"],
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const About = () => {
  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-hidden bg-[#020B2B] text-white">
        {/* Hero */}
        <section className="relative isolate">
          <div
            aria-hidden="true"
            className="arino-bg pointer-events-none absolute inset-0 -z-10"
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-0 -z-10 opacity-[0.035]
              arino-section
            "
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="
              mx-auto max-w-7xl
              px-6 pb-24 pt-24
              text-center
              lg:px-8 lg:pb-32 lg:pt-32
            "
          >
            {/* Badge */}
            <motion.div
              variants={reveal}
              className="
                mx-auto inline-flex items-center gap-2
                rounded-full
                border border-blue-400/20
                bg-blue-500/10
                px-4 py-2
                text-[11px] font-semibold uppercase
                tracking-[0.28em] text-blue-300
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Architecting The Future
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={reveal}
              className="
                mx-auto mt-7 max-w-5xl
                text-4xl font-bold
                leading-[1.08]
                tracking-tight
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Engineering excellence
              <br />
              <span
                className="
                  bg-linear-to-r
                  from-[#DCE4FF]
                  via-[#5F8FFF]
                  to-[#2563EB]
                  bg-clip-text
                  text-transparent
                "
              >
                through precision.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={reveal}
              className="
                mx-auto mt-8 max-w-3xl
                text-base leading-8
                text-slate-400
                md:text-lg
              "
            >
              Arinovaa Labs is a premier digital transformation
              consultancy dedicated to solving complex technical
              challenges for world-changing enterprises.
            </motion.p>

            <motion.div
              variants={reveal}
              aria-hidden="true"
              className="mx-auto mt-12 flex items-center justify-center gap-2"
            >
              <span className="h-px w-12 bg-blue-500/40" />
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span className="h-px w-12 bg-blue-500/40" />
            </motion.div>
          </motion.div>
        </section>

        {/* Mission */}
        <section className="relative border-y border-white/5 bg-[#06133A]">
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              -left-40 top-20
              h-80 w-80 rounded-full
              bg-blue-600/10 blur-[120px]
            "
          />

          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
            <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              {/* Intro */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={stagger}
              >
                <motion.div
                  variants={reveal}
                  className="flex items-center gap-3"
                >
                  <span className="h-px w-8 bg-blue-500" />
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                    Who We Are
                  </span>
                </motion.div>

                <motion.h2
                  variants={reveal}
                  className="
                    mt-5 max-w-sm
                    text-3xl font-bold
                    leading-tight tracking-tight
                    text-[#DCE4FF]
                    md:text-4xl
                  "
                >
                  Our Origin
                  <br />
                  <span className="text-blue-500">
                    &amp; Mission
                  </span>
                </motion.h2>

                <motion.p
                  variants={reveal}
                  className="
                    mt-6 max-w-sm
                    text-sm leading-7 text-slate-500
                  "
                >
                  Engineering with clarity, structure,
                  and a long-term perspective.
                </motion.p>

                <motion.span
                  variants={reveal}
                  aria-hidden="true"
                  className="
                    mt-12 hidden
                    text-7xl font-black
                    tracking-tighter
                    text-white/[0.035]
                    lg:block
                  "
                >
                  2026
                </motion.span>
              </motion.div>

              {/* Content */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
                className="max-w-3xl"
              >
                <motion.p
                  variants={reveal}
                  className="text-lg leading-8 text-slate-300"
                >
                  Founded in 2026, Arinovaa Labs was built on a
                  simple observation: the bridge between visionary
                  business goals and technical execution is often
                  brittle.
                </motion.p>

                <motion.p
                  variants={reveal}
                  className="mt-7 leading-8 text-slate-400"
                >
                  We established our practice on the principles of
                  structural integrity and algorithmic transparency.
                  Unlike traditional consultancies, we embed ourselves
                  deep within the engineering lifecycle, treating
                  every line of code as a critical asset for our
                  client&apos;s long-term scalability.
                </motion.p>

                {/* Philosophy */}
                <motion.div
                  variants={reveal}
                  className="
                    relative mt-10 overflow-hidden
                    rounded-2xl
                    border border-blue-400/15
                    bg-[#081532]
                    p-7
                    shadow-[0_20px_60px_rgba(0,0,0,0.18)]
                    md:p-8
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      absolute inset-y-0 left-0 w-1
                      bg-linear-to-b
                      from-blue-400
                      via-blue-600
                      to-transparent
                    "
                  />

                  <div className="flex items-start gap-5">
                    <div
                      aria-hidden="true"
                      className="
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-xl
                        border border-blue-400/20
                        bg-blue-500/10
                        text-blue-400
                      "
                    >
                      ✦
                    </div>

                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                        Our Philosophy
                      </span>

                      <p className="mt-4 leading-8 text-slate-300">
                        We are dedicated to delivering exceptional
                        solutions with a strong commitment to client
                        satisfaction, building reliable, scalable,
                        and innovative software that helps businesses
                        achieve their goals with confidence.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Values */}
                <motion.div
                  variants={stagger}
                  className="mt-10 grid gap-4 sm:grid-cols-3"
                >
                  {values.map(([number, title]) => (
                    <motion.div
                      key={number}
                      variants={reveal}
                      className="
                        rounded-xl
                        border border-white/[0.07]
                        bg-white/2.5
                        px-5 py-4
                        transition-colors duration-200
                        hover:border-blue-400/20
                        hover:bg-blue-500/4
                      "
                    >
                      <span className="text-xs font-semibold text-blue-400">
                        {number}
                      </span>

                      <p className="mt-2 text-sm font-medium text-slate-200">
                        {title}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </MotionConfig>
  );
};

export default About;