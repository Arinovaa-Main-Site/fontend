"use client";

import {
  Users,
  Gauge,
  Database,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { motion } from "motion/react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type Metric = {
  label: string;
  value: string;
  progress: number;
  accent?: "orange";
};

const features: Feature[] = [
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Senior engineers with decades of experience building reliable digital products.",
  },
  {
    icon: Gauge,
    title: "Agile Development",
    description:
      "Rapid iterations and transparent communication cycles for predictable results.",
  },
  {
    icon: Database,
    title: "Scalable Solutions",
    description:
      "Architectures designed to handle demanding workloads without compromising performance.",
  },
];

const metrics: Metric[] = [
  {
    label: "Uptime",
    value: "99.998%",
    progress: 96,
  },
  {
    label: "Deployment Velocity",
    value: "4.2x Industry Avg",
    progress: 85,
  },
  {
    label: "Security Rating",
    value: "A+ Verified",
    progress: 93,
    accent: "orange",
  },
];

export default function ArinovaaTeam() {
  return (
    <section className="arino-section relative overflow-hidden py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-10%] top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-400" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-400">
                Why Arinovaa
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-bold leading-[1.1] tracking-tight text-[#DCE4FF] md:text-5xl">
              The Arinovaa Edge:
              <span className="block text-blue-400">
                Why Teams Trust Us
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
              We combine engineering expertise, modern development practices,
              and scalable architecture to build technology that delivers
              lasting business value.
            </p>

            <div className="mt-10 space-y-7">
              {features.map((feature, index) => (
                <FeatureItem
                  key={feature.title}
                  feature={feature}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Metrics */}
          <MetricsCard />
        </div>
      </div>
    </section>
  );
}

function FeatureItem({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) {
  const Icon = feature.icon;

  return (
    <div className="group flex gap-4 transition-transform duration-300 hover:translate-x-1">
      <div className="relative shrink-0">
        <div
          className="
            flex h-12 w-12 items-center justify-center
            rounded-xl border border-white/10
            bg-white/4
            transition-all duration-300
            group-hover:border-blue-400/30
            group-hover:bg-blue-500/10
          "
        >
          <Icon
            aria-hidden
            className="h-5 w-5 text-[#4D82FF]"
          />
        </div>

        {index < features.length - 1 && (
          <span
            aria-hidden
            className="
              absolute left-1/2 top-14
              h-7 w-px -translate-x-1/2
              bg-linear-to-b from-blue-400/20 to-transparent
            "
          />
        )}
      </div>

      <div>
        <div className="flex items-center gap-3">
          <span className="text-[9px] font-medium tracking-[0.2em] text-blue-400/40">
            0{index + 1}
          </span>

          <h3 className="text-lg font-semibold text-[#DCE4FF] transition-colors group-hover:text-white">
            {feature.title}
          </h3>
        </div>

        <p className="mt-2 max-w-lg text-sm leading-7 text-slate-400">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

function MetricsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex justify-center lg:justify-end"
    >
      <div
        className="
          group relative w-full max-w-xl
          overflow-hidden rounded-4xl
          border border-white/10
          bg-[#071735]/70
          p-6
          shadow-[0_30px_80px_rgba(0,0,0,0.3)]
          backdrop-blur-xl
          sm:p-8
        "
      >
        {/* Top highlight */}
        <div
          aria-hidden
          className="
            absolute left-1/2 top-0 h-px w-2/3
            -translate-x-1/2
            bg-linear-to-r
            from-transparent via-blue-400/50 to-transparent
          "
        />

        {/* Browser header */}
        <div className="flex items-center border-b border-white/10 pb-5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
          </div>

          <div className="ml-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
              Performance Metrics
            </span>
          </div>
        </div>

        {/* Header */}
        <div className="mt-7">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-400">
            Engineering Excellence
          </p>

          <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#DCE4FF]">
            Built for Performance
          </h3>

          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
            Reliable systems engineered for speed, security, and scale.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-8 space-y-7">
          {metrics.map((metric) => (
            <MetricItem
              key={metric.label}
              metric={metric}
            />
          ))}
        </div>

        {/* Status */}
        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.7)]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-500">
              Systems Operational
            </span>
          </div>

          <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-600">
            ARINOVAA LABS
          </span>
        </div>

        <ShieldCheck
          aria-hidden
          className="
            pointer-events-none
            absolute bottom-6 right-6
            h-28 w-28
            text-blue-400/2.5
            transition-transform duration-500
            group-hover:scale-105
          "
        />
      </div>
    </motion.div>
  );
}

function MetricItem({ metric }: { metric: Metric }) {
  const orange = metric.accent === "orange";

  return (
    <div>
      <div className="mb-2.5 flex items-center justify-between gap-4">
        <span className="text-xs font-medium text-slate-400">
          {metric.label}
        </span>

        <span
          className={
            orange
              ? "text-xs font-semibold text-orange-300"
              : "text-xs font-semibold text-[#B7C5FF]"
          }
        >
          {metric.value}
        </span>
      </div>

      <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${metric.progress}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className={
            orange
              ? "h-full rounded-full bg-orange-300"
              : "h-full rounded-full bg-linear-to-r from-[#4D82FF] to-[#B7C5FF]"
          }
        />
      </div>
    </div>
  );
}