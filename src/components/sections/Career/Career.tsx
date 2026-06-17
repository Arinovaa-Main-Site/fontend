"use client";

import Image from "next/image";
import {
  ArrowDown,
  Gauge,
  GraduationCap,
  House,
  TrendingUp,
  SearchX,
} from "lucide-react";

const perks = [
  {
    icon: Gauge,
    title: "High Velocity",
    desc: "Ship production code daily in a high-trust environment.",
  },
  {
    icon: GraduationCap,
    title: "Mastery Focus",
    desc: "Dedicated learning budget and mentorship from lead architects.",
  },
  {
    icon: House,
    title: "Remote-First",
    desc: "Work from anywhere with a generous home-office setup stipend.",
  },
  {
    icon: TrendingUp,
    title: "Equity & Growth",
    desc: "Competitive salary with performance-based equity options.",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#0d1221] text-white font-sans">
      {/* ── Hero Section ── */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="border border-white/20 rounded-full px-4 py-1.5 mb-8">
          <span className="text-xs tracking-[0.18em] uppercase text-gray-300">
            We Are Hiring
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-3xl">
          Engineer the <span className="text-blue-300">Future</span> With Us.
        </h1>

        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mb-10">
          Join a team of elite software engineers and digital transformation
          experts building high-performance systems for global leaders.
        </p>

        <button
          onClick={() =>
            document
              .getElementById("culture")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-8 py-3.5 rounded-md transition-colors cursor-pointer"
        >
          View Openings
          <ArrowDown size={16} />
        </button>
      </section>

      {/* ── Culture Section ── */}
      <section  className="px-6 md:px-16 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Built by engineers,{" "}
              <span className="text-blue-400">for engineers.</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-lg">
              At Arinovaa Labs, we bypass the corporate fluff. Our culture is
              rooted in technical excellence, deep focus, and rapid iteration.
              We believe in providing the best tools and total autonomy.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {perks.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1e2640] border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={18} className="text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">
                      {title}
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — images using next/image */}
          <div className="grid grid-cols-2 gap-3 h-130">
            {/* Left tall image */}
            <div className="relative rounded-xl overflow-hidden h-full">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80"
                alt="Engineers collaborating"
                fill
                className="object-cover grayscale brightness-75"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            {/* Right — two stacked images */}
            <div className="flex flex-col gap-3 h-full">
              <div className="relative rounded-xl overflow-hidden flex-1">
                <Image
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80"
                  alt="Code on monitor"
                  fill
                  className="object-cover grayscale brightness-75"
                  sizes="(max-width: 768px) 100vw, 20vw"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden flex-1">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                  alt="Team laughing"
                  fill
                  className="object-cover grayscale brightness-75"
                  sizes="(max-width: 768px) 100vw, 20vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {/* ── Open Positions ── */}
      {/* <section id="openings" className="px-6 md:px-16 py-16">
                <div className="max-w-7xl mx-auto">

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-1">Open Positions</h2>
                            <p className="text-gray-400 text-sm">
                                Find your next technical challenge across our core domains.
                            </p>
                        </div>

                        <div className="flex items-center gap-2 bg-[#141929] border border-white/10 rounded-full px-2 py-1.5">
                            {["All Roles", "Engineering", "AI & Data", "Product"].map((tab) => (
                                <button
                                    key={tab}
                                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${tab === "All Roles"
                                            ? "bg-[#1e2f5e] text-blue-200"
                                            : "text-gray-400 hover:text-white"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </section> */}

      {/* ── Don't see the right role ── */}

      {/* <section className="px-6 md:px-16 pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="border border-white/10 rounded-2xl px-8 py-16 flex flex-col items-center text-center bg-gradient-to-b from-[#141929] to-[#0d1221]">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Don&apos;t see the right role?
                        </h2>
                        <p className="text-gray-400 text-base leading-relaxed max-w-lg mb-10">
                            We&apos;re always looking for exceptional talent. If you believe you&apos;d be a
                            great fit for Arinovaa Labs, send us your portfolio and a brief pitch.
                        </p>
                        <div className="flex items-center gap-4 flex-wrap justify-center">
                            <button className="px-7 py-3 rounded-lg bg-[#B4C5FF] hover:bg-[#253158] text-[#002A78] text-sm font-medium transition-colors cursor-pointer border border-white/10">
                                General Application
                            </button>
                            <button className="px-7 py-3 rounded-lg border border-white/20 hover:border-white/40 text-white text-sm font-medium transition-colors cursor-pointer bg-transparent">
                                Join Talent Network
                            </button>
                        </div>
                    </div>
                </div>
            </section>  */}

      {/* Empty state — shown when no positions available */}
      <div id="culture" className="flex flex-col items-center justify-center text-center py-20">
        {/* Icon circle */}
        <div className="w-20 h-20 rounded-full bg-[#1e2640] flex items-center justify-center mb-8">
          <SearchX size={32} className="text-blue-300" />
        </div>

        <h3 className="text-3xl font-bold text-white mb-4">
          Quiet on the hiring front.
        </h3>
        <p className="text-gray-400 text-base leading-relaxed max-w-lg mb-10">
          We don&apos;t have any active openings right now, but our team is
          constantly growing. Check back soon or join our talent network to be
          the first to know about new opportunities.
        </p>

        <div className="flex items-center gap-4 flex-wrap justify-center">
          <button className="px-7 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors cursor-pointer">
            Join Talent Network
          </button>
          <button className="px-7 py-3 rounded-lg border border-white/20 hover:border-white/40 text-white text-sm font-medium transition-colors cursor-pointer bg-transparent">
            General Application
          </button>
        </div>
      </div>
    </div>
  );
}
