import {
  Globe,
  Smartphone,
  Cloud,
  MonitorSmartphone,
  Building2,
  RefreshCw,
  Database,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "High-performance, responsive web applications built with modern frameworks.",
    icon: Globe,
  },
  {
    title: "Mobile App Dev",
    description:
      "Native and cross-platform mobile experiences for iOS and Android.",
    icon: Smartphone,
  },
  {
    title: "SaaS Products",
    description:
      "Scalable, multi-tenant cloud platforms designed for growth and reliability.",
    icon: Cloud,
    large: true,
  },
  {
    title: "Custom Software",
    description:
      "Bespoke digital systems crafted for your specific business logic and workflows.",
    icon: MonitorSmartphone,
  },
  {
    title: "ERP Systems",
    description:
      "Integrated management solutions to streamline your entire business operation.",
    icon: Building2,
  },
  {
    title: "Modernization",
    description:
      "Refactoring legacy codebases into modern, cloud-native architectures.",
    icon: RefreshCw,
  },
];

export default function Experties() {
  return (
    <section className="bg-[#020f34] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[#dce4ff] md:text-5xl">
            Expertise Across the Digital Horizon
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400">
            We deliver precision-engineered solutions tailored to the unique
            demands of your industry and business scale.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Web */}
          <Card {...services[0]} />

          {/* Mobile */}
          <Card {...services[1]} />

          {/* SaaS Large */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-white/4 to-white/2 p-6 lg:col-span-2">
            <Cloud className="mb-6 h-5 w-5 text-orange-300" />

            <h3 className="text-2xl font-bold text-[#dce4ff]">
              SaaS Products
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              Scalable, multi-tenant cloud platforms designed for growth and
              reliability from day one.
            </p>

            <button className="mt-6 inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white">
              Learn More <ArrowRight size={14} />
            </button>

            <div className="absolute right-6 bottom-6 opacity-10">
              <Cloud size={140} />
            </div>
          </div>

          {/* Bottom Row */}
          <Card {...services[3]} />
          <Card {...services[4]} />
          <Card {...services[5]} />

          {/* Right Small Cards */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/3 p-5">
              <Database className="mb-4 h-4 w-4 text-orange-300" />

              <h4 className="text-sm font-semibold text-[#dce4ff]">
                Data Migration
              </h4>

              <p className="mt-2 text-xs leading-6 text-slate-400">
                Secure, seamless transition of complex datasets.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/3 p-5">
              <GraduationCap className="mb-4 h-4 w-4 text-blue-300" />

              <h4 className="text-sm font-semibold text-[#dce4ff]">
                Internships
              </h4>

              <p className="mt-2 text-xs leading-6 text-slate-400">
                Nurturing the next generation of engineers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-linear-to-br from-white/4 to-white/2 p-6 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/5">
      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
        <Icon className="h-5 w-5 text-[#dce4ff]" />
      </div>

      <h3 className="text-2xl font-bold text-[#dce4ff]">{title}</h3>

      <p className="mt-4 text-sm leading-7 text-slate-400">
        {description}
      </p>

      <ArrowRight className="mt-6 h-4 w-4 text-slate-500 transition group-hover:translate-x-1 group-hover:text-white" />
    </div>
  );
}