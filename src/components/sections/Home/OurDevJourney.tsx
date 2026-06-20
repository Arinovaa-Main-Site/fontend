import {
  Search,
  Compass,
  Code2,
  ShieldCheck,
  Rocket,
  Gauge,
} from "lucide-react";

const journeySteps = [
  {
    icon: Search,
    title: "01. Discovery",
    description: "Deep dive into requirements and business objectives.",
  },
  {
    icon: Compass,
    title: "02. Planning",
    description: "Blueprint architecture and technology stack selection.",
  },
  {
    icon: Code2,
    title: "03. Development",
    description: "Clean, efficient, and well-documented engineering.",
  },
  {
    icon: ShieldCheck,
    title: "04. Testing",
    description: "Rigorous QA, security audits, and load testing.",
  },
  {
    icon: Rocket,
    title: "05. Deployment",
    description: "Automated CI/CD pipelines to live environments.",
  },
  {
    icon: Gauge,
    title: "06. Maintenance",
    description: "24/7 monitoring and iterative improvements.",
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
];

export default function OurDevJourney() {
  return (
    <section className="bg-[#020f34]">
      {/* Development Journey */}
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[#dce4ff] md:text-5xl">
            Our Development Journey
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            A streamlined, rigorous approach to transforming vision into
            reality.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Dashed Line */}
          <div className="absolute top-8 left-0 hidden w-full lg:block" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
            {journeySteps.map(({ icon: Icon, title, description }) => (
              <div key={title} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/3 shadow-lg">
                  <Icon className="h-6 w-6 text-[#B7C5FF]" />
                </div>

                <h3 className="mt-5 text-sm font-semibold text-[#dce4ff]">
                  {title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-slate-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="border-t border-white/5 bg-white/3">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h3 className="text-center text-3xl font-bold text-[#dce4ff]">
            Powered by the Modern Stack
          </h3>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="flex h-16 min-w-27.5 items-center justify-center rounded-xl border border-white/10 bg-[#08142f] px-5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-blue-500/30 hover:text-white"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
