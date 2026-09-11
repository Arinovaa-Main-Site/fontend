"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent?: "blue" | "orange";
};

type ServiceCardProps = Service;

const accentStyles = {
  blue: {
    icon: "text-[#4D7CFF]",
    hover:
      "group-hover:border-blue-400/30 group-hover:bg-blue-500/10",
    glow: "bg-blue-500/10",
    line:
      "bg-blue-400 shadow-[0_0_12px_rgba(77,124,255,0.8)]",
  },

  orange: {
    icon: "text-orange-300",
    hover:
      "group-hover:border-orange-400/30 group-hover:bg-orange-500/10",
    glow: "bg-orange-400/10",
    line:
      "bg-orange-300 shadow-[0_0_12px_rgba(251,146,60,0.8)]",
  },
} as const;

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  accent = "blue",
}: ServiceCardProps) {
  const styles = accentStyles[accent];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
      }}
      className="
        group relative min-h-55 overflow-hidden rounded-2xl
        border border-white/10
        bg-linear-to-br from-white/5 to-white/1.5
        p-6
        transition-colors duration-500
        hover:border-blue-500/30
        hover:bg-white/6
      "
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        className={`
          pointer-events-none absolute -right-20 -top-20
          h-48 w-48 rounded-full blur-3xl
          opacity-0 transition-opacity duration-500
          group-hover:opacity-100
          ${styles.glow}
        `}
      />

      {/* Icon */}
      <motion.div
        className={`
          relative flex h-11 w-11 items-center justify-center
          rounded-xl border border-white/10
          bg-white/4
          ${styles.hover}
        `}
        whileHover={{
          scale: 1.08,
          rotate: 2,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20,
        }}
      >
        <Icon
          aria-hidden="true"
          className={`
            h-5 w-5
            transition-all duration-300
            ${styles.icon}
            group-hover:drop-shadow-[0_0_8px_currentColor]
          `}
        />
      </motion.div>

      {/* Content */}
      <div className="relative mt-6">
        <h3 className="text-xl font-bold tracking-tight text-[#DCE4FF]">
          {title}
        </h3>

        <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
          {description}
        </p>
      </div>

      {/* Background Icon */}
      <Icon
        aria-hidden="true"
        className="
          pointer-events-none
          absolute bottom-4 right-5
          h-24 w-24
          text-blue-400/[0.035]
          transition-all duration-500
          group-hover:scale-110
          group-hover:text-blue-400/[0.07]
        "
      />

      {/* Bottom Indicator */}
      <span
        className={`
          absolute bottom-0 left-1/2
          h-px w-0 -translate-x-1/2
          transition-all duration-500
          group-hover:w-1/2
          ${styles.line}
        `}
      />
    </motion.article>
  );
}