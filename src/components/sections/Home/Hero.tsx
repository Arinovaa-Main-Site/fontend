import Link from "next/link";

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
            <div className="w-full max-w-130 rounded-2xl border border-white/10 bg-white/3 p-6 shadow-2xl backdrop-blur-sm">
              <div className="rounded-xl bg-[#08142f] p-5">
                {/* Top Lines */}
                <div className="mb-4 space-y-2">
                  <div className="h-2 w-20 rounded-full bg-[#9fb2ff]" />
                  <div className="h-2 w-12 rounded-full bg-white/20" />
                </div>

                {/* Toolbar */}
                <div className="mb-4 flex items-center gap-2 rounded-lg bg-white/5 p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10">
                    ☁
                  </div>

                  <div className="flex-1">
                    <div className="h-2 rounded-full bg-[#9fb2ff]" />
                    <div className="mt-2 h-1 rounded-full bg-white/10" />
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10">
                    ⧉
                  </div>
                </div>

                {/* Main Screen */}
                <div className="flex h-52 items-center justify-center rounded-lg border border-white/5 bg-white/2 text-sm tracking-widest text-slate-400">
                  System Architecture Optimized
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Bar */}
      <div className="border-t border-white/5 bg-[#010a25] py-6">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-slate-400">
          Trusted by Global Industry Leaders
        </p>
      </div>
    </section>
  );
}