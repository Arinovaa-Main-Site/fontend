import {
  Users,
  Gauge,
  Database,
} from "lucide-react";

export default function ArinovaaTeam() {
  const features = [
    {
      icon: Users,
      title: "Experienced Team",
      description:
        "Senior engineers with decades of combined experience in silicon-valley standards.",
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
        "Architectures designed to handle 10x traffic spikes without a single hiccup.",
    },
  ];

  return (
    <section className="bg-[#020f34] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <h2 className="max-w-lg text-4xl font-bold leading-tight text-[#dce4ff] md:text-5xl">
              The Arinovaa Edge: Why Engineering Teams Trust Us
            </h2>

            <div className="mt-10 space-y-8">
              {features.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/5">
                    <Icon className="h-5 w-5 text-blue-300" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-[#dce4ff]">
                      {title}
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-7 text-slate-400">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Metrics Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-135 rounded-3xl border border-white/10 bg-white/3 p-6 shadow-2xl backdrop-blur-sm">
              {/* Header */}
              <div className="mb-8 flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400" />

                <span className="ml-4 text-xs text-slate-400">
                  Performance_Metrics.log
                </span>
              </div>

              {/* Metric 1 */}
              <div className="mb-6">
                <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
                  <span>Uptime</span>
                  <span>99.998%</span>
                </div>

                <div className="h-1.5 rounded-full bg-white/10">
                  <div className="h-full w-[96%] rounded-full bg-[#B7C5FF]" />
                </div>
              </div>

              {/* Metric 2 */}
              <div className="mb-6">
                <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
                  <span>Deployment Velocity</span>
                  <span>4.2x Industry Avg</span>
                </div>

                <div className="h-1.5 rounded-full bg-white/10">
                  <div className="h-full w-[85%] rounded-full bg-[#B7C5FF]" />
                </div>
              </div>

              {/* Metric 3 */}
              <div>
                <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
                  <span>Security Rating</span>
                  <span className="text-orange-300">A+ Verified</span>
                </div>

                <div className="h-1.5 rounded-full bg-white/10">
                  <div className="h-full w-[93%] rounded-full bg-orange-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}