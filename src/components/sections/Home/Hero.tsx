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

const serviceCards = [
  { title: "Web Development", icon: Code2 },
  { title: "Mobile Development", icon: Smartphone },
  { title: "Desktop Applications", icon: Monitor },
  { title: "AI Solutions", icon: Brain },
  { title: "Cloud Solutions", icon: Cloud },
  { title: "SaaS Development", icon: Settings },
  { title: "UI/UX Design", icon: PenTool },
  { title: "Internship & Training", icon: GraduationCap },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#020f34]">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e40af30,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-blue-300">
              ● Next-Gen Engineering
            </span>

            <h1 className="mt-8 max-w-xl text-5xl font-bold leading-[1.05] tracking-tight text-[#d9e2ff] md:text-6xl">
              Building Future-Ready Software Solutions for Businesses
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              Arinovaa Labs helps startups and enterprises build scalable web
              applications, SaaS products, ERP systems, and digital solutions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Get Started
              </Link>

              <Link
                href="/services"
                className="rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-162.5 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
              <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 lg:grid-cols-4">
                {serviceCards.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className={`group flex aspect-square flex-col items-center justify-center border-white/10 bg-[#08142F] p-6 transition-all duration-300 hover:bg-blue-600/10
              ${index % 4 !== 3 ? "border-r" : ""}
              ${index < 4 ? "border-b" : ""}
            `}
                    >
                      <Icon className="mb-5 h-12 w-12 text-[#4D7CFF] transition-transform duration-300 group-hover:scale-110" />

                      <h3 className="text-center text-sm font-medium uppercase leading-6 tracking-wide text-white">
                        {item.title}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Bar */}
      <div className="border-t border-white/5 bg-[#010a25] py-6">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-slate-400">
          Reliable Software Solutions. Long-Term Partnerships, Proven Results.
        </p>
      </div>
    </section>
  );
}
