"use client";

import {
  Search,
  Compass,
  Code2,
  ShieldCheck,
  Rocket,
  Gauge,
  type LucideIcon,
} from "lucide-react";
import { motion, MotionConfig } from "motion/react";

type JourneyStep = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const journeySteps: JourneyStep[] = [
  {
    icon: Search,
    title: "01. Discovery",
    description:
      "Deep dive into requirements and business objectives.",
  },
  {
    icon: Compass,
    title: "02. Planning",
    description:
      "Blueprint architecture and technology stack selection.",
  },
  {
    icon: Code2,
    title: "03. Development",
    description:
      "Clean, efficient, and well-documented engineering.",
  },
  {
    icon: ShieldCheck,
    title: "04. Testing",
    description:
      "Rigorous QA, security audits, and load testing.",
  },
  {
    icon: Rocket,
    title: "05. Deployment",
    description:
      "Automated CI/CD pipelines to live environments.",
  },
  {
    icon: Gauge,
    title: "06. Maintenance",
    description:
      "24/7 monitoring and iterative improvements.",
  },
];

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Python",
  "AWS",
  "Docker",
  "AI/ML",
  ".NET",
  "ASP.NET Core",
  "C#",
  "Blazor",
  "SQL Server",
  "Entity Framework Core",
  "Azure",
  "REST APIs",
  "JavaScript",
];

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function OurDevJourney() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="overflow-hidden arino-surface">
        {/* ================= DEVELOPMENT JOURNEY ================= */}
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          {/* Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={sectionVariants}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                Our Process
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="mt-5 text-4xl font-bold tracking-tight text-[#DCE4FF] md:text-5xl lg:text-6xl"
            >
              Our Development Journey
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base"
            >
              A streamlined, rigorous approach to transforming your
              vision into a reliable digital product.
            </motion.p>
          </motion.div>

          {/* Timeline */}
          <div className="relative mt-20">
            {/* Desktop Connecting Line */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                left-[8.33%] right-[8.33%] top-8
                hidden h-px
                bg-linear-to-r
                from-transparent
                via-blue-400/30
                to-transparent
                lg:block
              "
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              variants={sectionVariants}
              className="grid gap-10 md:grid-cols-2 lg:grid-cols-6 lg:gap-6"
            >
              {journeySteps.map(
                ({ icon: Icon, title, description }) => (
                  <motion.div
                    key={title}
                    variants={itemVariants}
                    className="group relative text-center"
                  >
                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        y: -4,
                        scale: 1.06,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 20,
                      }}
                      className="
                        relative z-10 mx-auto
                        flex h-16 w-16
                        items-center justify-center
                        rounded-2xl
                        border border-white/10
                        bg-[#07183D]
                        shadow-[0_10px_35px_rgba(0,0,0,0.2)]
                        transition-colors duration-300
                        group-hover:border-blue-400/30
                        group-hover:bg-blue-500/10
                      "
                    >
                      <Icon
                        aria-hidden="true"
                        className="
                          h-6 w-6
                          text-[#B7C5FF]
                          transition-all duration-300
                          group-hover:text-[#4D7CFF]
                          group-hover:drop-shadow-[0_0_8px_currentColor]
                        "
                      />
                    </motion.div>

                    {/* Content */}
                    <h3 className="mt-5 text-sm font-semibold text-[#DCE4FF]">
                      {title}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-slate-400">
                      {description}
                    </p>
                  </motion.div>
                )
              )}
            </motion.div>
          </div>
        </div>

        {/* ================= TECH STACK ================= */}
        <div className="border-t border-white/5 bg-white/2.5">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={sectionVariants}
              className="text-center"
            >
              <motion.span
                variants={itemVariants}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300"
              >
                Technology
              </motion.span>

              <motion.h3
                variants={itemVariants}
                className="mt-3 text-3xl font-bold tracking-tight text-[#DCE4FF] md:text-4xl"
              >
                Powered by the Modern Stack
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400"
              >
                Modern, scalable technologies selected to build
                secure and high-performance digital products.
              </motion.p>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.1,
              }}
              variants={sectionVariants}
              className="
                mx-auto mt-12
                flex max-w-6xl
                flex-wrap items-center
                justify-center gap-3
              "
            >
              {technologies.map((tech) => (
                <motion.div
                  key={tech}
                  variants={itemVariants}
                  whileHover={{
                    y: -3,
                    scale: 1.025,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                  className="
                    flex min-h-14
                    items-center justify-center
                    rounded-xl
                    border border-white/10
                    bg-[#07183D]
                    px-5
                    text-sm font-medium
                    text-slate-300
                    shadow-sm
                    transition-colors duration-300
                    hover:border-blue-400/30
                    hover:bg-blue-500/6
                    hover:text-white
                  "
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}