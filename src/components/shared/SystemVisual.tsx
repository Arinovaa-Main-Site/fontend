"use client";

import Image from "next/image";
import {
  BrainCircuit,
  Cloud,
  Box,
  Code2,
  Sparkles,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import arinovaaLogo from "@/assets/logo/arinovaa-logo-footer-transparent.png";

const capabilities = [
  {
    title: "AI",
    subtitle: "Smarter Solutions",
    icon: BrainCircuit,
    position:
      "left-[4%] top-[24%] sm:left-[5%] sm:top-[24%]",
  },
  {
    title: "CLOUD",
    subtitle: "Scalable Infrastructure",
    icon: Cloud,
    position:
      "right-[4%] top-[24%] sm:right-[5%] sm:top-[24%]",
  },
  {
    title: "PRODUCT",
    subtitle: "Ideas to Impact",
    icon: Box,
    position:
      "left-[4%] bottom-[25%] sm:left-[5%] sm:bottom-[25%]",
  },
  {
    title: "ENGINEERING",
    subtitle: "Reliable Technology",
    icon: Code2,
    position:
      "right-[4%] bottom-[25%] sm:right-[5%] sm:bottom-[25%]",
  },
];


function SystemVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="
        relative
        mx-auto
        aspect-square
        w-full
        max-w-155
        overflow-visible
      "
    >
      {/* ================================================================== */}
      {/* Outer borders                                                       */}
      {/* ================================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-3xl
          border
          border-blue-300/15
          sm:rounded-4xl
          lg:rounded-[40px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-2
          rounded-[22px]
          border
          border-blue-300/[0.07]
          sm:inset-3
          sm:rounded-[29px]
          lg:inset-5
          lg:rounded-[34px]
        "
      />

      {/* ================================================================== */}
      {/* Single optimized glow                                               */}
      {/* ================================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          size-45
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-400/15
          blur-[55px]
          sm:size-62.5
          sm:blur-[70px]
          lg:size-80
          lg:blur-[90px]
        "
      />

      {/* ================================================================== */}
      {/* Main panel                                                          */}
      {/* ================================================================== */}

      <div
        className="
          absolute
          inset-5
          overflow-hidden
          rounded-[20px]
          border
          border-blue-200/15
          bg-linear-to-br
          from-[#0A2E83]
          via-[#0B3A9A]
          to-[#06235F]
          shadow-[0_20px_60px_rgba(0,0,0,0.2)]
          sm:inset-7
          sm:rounded-[25px]
          lg:inset-9
          lg:rounded-[30px]
          lg:shadow-[0_25px_80px_rgba(0,0,0,0.24)]
        "
      >
        {/* ================================================================= */}
        {/* Lightweight grid                                                  */}
        {/* ================================================================= */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.045]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.8) 1px,transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />

        {/* ================================================================= */}
        {/* Header                                                             */}
        {/* ================================================================= */}

        <header
          className="
            absolute
            left-4
            top-4
            z-30
            sm:left-5
            sm:top-5
            lg:left-6
            lg:top-6
          "
        >
          <div className="flex items-center gap-2">
            <span
              className="
                size-1.5
                rounded-full
                bg-cyan-300
                shadow-[0_0_8px_rgba(103,232,249,0.8)]
                sm:size-2
              "
            />

            <p
              className="
                text-[7px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-white/75
                sm:text-[8px]
                sm:tracking-[0.25em]
                lg:text-[9px]
                lg:tracking-[0.3em]
              "
            >
              ARINOVAA LABS
            </p>
          </div>

          <p
            className="
              mt-1
              text-[6px]
              uppercase
              tracking-[0.14em]
              text-blue-100/30
              sm:text-[7px]
              sm:tracking-[0.2em]
            "
          >
            Digital Innovation Company
          </p>
        </header>

        {/* ================================================================= */}
        {/* Status                                                             */}
        {/* ================================================================= */}

        <div
          className="
            absolute
            right-3
            top-3
            z-30
            sm:right-4
            sm:top-4
            lg:right-5
            lg:top-5
          "
        >
          <div
            className="
              flex
              items-center
              gap-1.5
              rounded-full
              border
              border-white/15
              bg-white/6
              px-2.5
              py-1.5
              backdrop-blur-md
              sm:px-3
            "
          >
            <span className="size-1.5 rounded-full bg-emerald-300" />

            <span
              className="
                text-[6px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-white/50
                sm:text-[7px]
                lg:text-[8px]
              "
            >
              Innovating
            </span>
          </div>
        </div>

        {/* ================================================================= */}
        {/* Connection lines                                                   */}
        {/* ================================================================= */}

        <svg
          aria-hidden="true"
          viewBox="0 0 500 500"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <defs>
            <linearGradient
              id="arinovaa-connection"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#60A5FA"
                stopOpacity="0"
              />

              <stop
                offset="50%"
                stopColor="#BFDBFE"
                stopOpacity=".5"
              />

              <stop
                offset="100%"
                stopColor="#60A5FA"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          <path
            d="M70 145 C145 165 180 205 250 250"
            fill="none"
            stroke="url(#arinovaa-connection)"
            strokeWidth="1"
          />

          <path
            d="M430 145 C355 165 320 205 250 250"
            fill="none"
            stroke="url(#arinovaa-connection)"
            strokeWidth="1"
          />

          <path
            d="M70 365 C145 345 180 300 250 250"
            fill="none"
            stroke="url(#arinovaa-connection)"
            strokeWidth="1"
          />

          <path
            d="M430 365 C355 345 320 300 250 250"
            fill="none"
            stroke="url(#arinovaa-connection)"
            strokeWidth="1"
          />

          <circle
            cx="70"
            cy="145"
            r="2.5"
            fill="#93C5FD"
          />

          <circle
            cx="430"
            cy="145"
            r="2.5"
            fill="#93C5FD"
          />

          <circle
            cx="70"
            cy="365"
            r="2.5"
            fill="#93C5FD"
          />

          <circle
            cx="430"
            cy="365"
            r="2.5"
            fill="#93C5FD"
          />
        </svg>

        {/* ================================================================= */}
        {/* Capability cards                                                   */}
        {/* ================================================================= */}

        {capabilities.map(
          ({ title, subtitle, icon: Icon, position }) => (
            <div
              key={title}
              className={`absolute ${position} z-20`}
            >
              <div
                className="
                  flex
                  w-24
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-blue-100/15
                  bg-white/6
                  px-2
                  py-2
                  backdrop-blur-md
                  transition-colors
                  duration-200
                  hover:border-blue-100/30
                  hover:bg-white/9
                  sm:w-27.5
                  sm:gap-2.5
                  sm:rounded-2xl
                  sm:px-2.5
                  sm:py-2.5
                  lg:w-30
                  lg:px-3
                "
              >
                <span
                  className="
                    grid
                    size-6
                    shrink-0
                    place-items-center
                    rounded-lg
                    border
                    border-blue-100/15
                    bg-blue-400/10
                    text-blue-100
                    sm:size-7
                    lg:size-8
                  "
                >
                  <Icon className="size-3 sm:size-3.5 lg:size-4" />
                </span>

                <span className="min-w-0">
                  <span
                    className="
                      block
                      text-[8px]
                      font-bold
                      tracking-wide
                      text-white/80
                      sm:text-[9px]
                    "
                  >
                    {title}
                  </span>

                  <span
                    className="
                      mt-0.5
                      block
                      truncate
                      text-[6px]
                      leading-3
                      text-blue-100/40
                      sm:text-[7px]
                    "
                  >
                    {subtitle}
                  </span>
                </span>
              </div>
            </div>
          ),
        )}

        {/* ================================================================= */}
        {/* Central innovation core                                            */}
        {/* ================================================================= */}

        <div
          className="
            absolute
            left-1/2
            top-[49%]
            z-20
            -translate-x-1/2
            -translate-y-1/2
          "
        >
          {/* Outer static orbit */}

          <div
            className="
              absolute
              -inset-9.5
              rounded-full
              border
              border-blue-100/10
              border-dashed
              sm:-inset-12.5
              lg:-inset-17
            "
          />

          {/* Middle orbit */}

          <div
            className="
              absolute
              -inset-6.25
              rounded-full
              border
              border-blue-100/15
              sm:-inset-8.5
              lg:-inset-11.25
            "
          />

          {/* Inner orbit */}

          <div
            className="
              absolute
              -inset-3.5
              rounded-full
              border
              border-cyan-100/10
              sm:-inset-5
              lg:-inset-6.25
            "
          />

          {/* Core */}

          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    scale: [1, 1.015, 1],
                  }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              grid
              size-20.5
              place-items-center
              rounded-full
              border
              border-blue-100/30
              bg-[radial-gradient(circle_at_35%_25%,rgba(96,165,250,.55),rgba(18,62,155,.96)_45%,#071C58_78%)]
              shadow-[0_0_35px_rgba(37,99,235,0.35)]
              sm:size-28
              lg:size-38.75
              lg:shadow-[0_0_55px_rgba(37,99,235,0.4)]
            "
          >
            <span className="absolute inset-1.5 rounded-full border border-white/[0.07] sm:inset-2 lg:inset-2.5" />

            <span className="absolute inset-3 rounded-full border border-blue-200/10 sm:inset-4 lg:inset-5" />

            <Image
              src={arinovaaLogo}
              alt="Arinovaa Labs"
              width={150}
              height={150}
              sizes="(max-width: 639px) 50px, (max-width: 1023px) 68px, 88px"
              priority
              className="
                relative
                z-10
                size-11.5
                object-contain
                drop-shadow-[0_0_12px_rgba(147,197,253,0.35)]
                sm:size-15.5
                lg:size-20.5
              "
            />

            <span className="absolute right-[18%] top-[18%] size-1.5 rounded-full bg-white shadow-[0_0_9px_3px_rgba(255,255,255,.3)] sm:size-2" />
          </motion.div>
        </div>

        {/* ================================================================= */}
        {/* Mission                                                           */}
        {/* ================================================================= */}

        <div
          className="
            absolute
            bottom-4
            left-4
            z-30
            max-w-36.25
            sm:bottom-5
            sm:left-5
            sm:max-w-46.25
            lg:bottom-6
            lg:left-6
            lg:max-w-51.25
          "
        >
          <div className="mb-1.5 flex items-center gap-1.5">
            <Sparkles className="size-2.5 text-cyan-300" />

            <p className="text-[7px] font-bold uppercase tracking-[0.18em] text-blue-100/60 sm:text-[8px] sm:tracking-[0.24em]">
              Our Mission
            </p>
          </div>

          <p className="text-[8px] leading-4 text-white/55 sm:text-[10px] sm:leading-5 lg:text-[11px]">
            Building technology that helps businesses innovate, grow and move
            forward.
          </p>
        </div>

        {/* ================================================================= */}
        {/* Brand statement                                                   */}
        {/* ================================================================= */}

        <div
          className="
            absolute
            bottom-4
            right-4
            z-30
            text-right
            sm:bottom-5
            sm:right-5
            lg:bottom-6
            lg:right-6
          "
        >
          <p className="text-[7px] font-bold tracking-[0.16em] text-blue-100/70 sm:text-[8px] sm:tracking-[0.2em] lg:text-[9px] lg:tracking-[0.24em]">
            INNOVATING TODAY
          </p>

          <p className="mt-1 text-[5px] uppercase tracking-widest text-blue-100/25 sm:text-[6px] sm:tracking-[0.14em] lg:text-[7px] lg:tracking-[0.18em]">
            People · Technology · Purpose
          </p>
        </div>
      </div>

      {/* ================================================================== */}
      {/* Floating card                                                       */}
      {/* ================================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          z-40
          rounded-xl
          border
          border-blue-200/20
          bg-[#06215F]/95
          px-3
          py-2.5
          shadow-[0_12px_30px_rgba(0,0,0,0.2)]
          backdrop-blur-md
          sm:bottom-1
          sm:rounded-2xl
          sm:px-4
          sm:py-3
        "
      >
        <div className="flex items-center gap-2.5 sm:gap-3">
          <span
            className="
              grid
              size-7
              shrink-0
              place-items-center
              rounded-full
              bg-blue-400/15
              sm:size-8
            "
          >
            <span className="size-2 rounded-full bg-cyan-300 shadow-[0_0_12px_4px_rgba(103,232,249,0.25)] sm:size-2.5" />
          </span>

          <div className="min-w-0">
            <p className="text-[6px] uppercase tracking-[0.18em] text-blue-100/35 sm:text-[7px] sm:tracking-[0.24em]">
              ARINOVAA LABS
            </p>

            <p className="mt-0.5 whitespace-nowrap text-[8px] font-semibold text-white/80 sm:mt-1 sm:text-[10px]">
              Building Digital Futures
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SystemVisual;