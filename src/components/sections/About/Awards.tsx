import {
  Trophy,
  Star,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const awards = [
  {
    id: 1,
    title: "Top Software Development Company",
    organization: "Tech Excellence Awards",
    year: "2025",
    description:
      "Recognized for delivering scalable software solutions with exceptional client satisfaction.",
    icon: Trophy,
    color: "text-yellow-400",
  },
  {
    id: 2,
    title: "Innovation Excellence",
    organization: "Digital Innovation Summit",
    year: "2024",
    description:
      "Awarded for delivering innovative AI and enterprise software solutions.",
    icon: Sparkles,
    color: "text-sky-400",
  },
  {
    id: 3,
    title: "Trusted Technology Partner",
    organization: "Business Leaders Forum",
    year: "2024",
    description:
      "Recognized for engineering excellence and long-term partnerships.",
    icon: ShieldCheck,
    color: "text-emerald-400",
  },
  {
    id: 4,
    title: "Customer Choice Award",
    organization: "Client Success Awards",
    year: "2023",
    description:
      "Awarded for outstanding customer experience and product quality.",
    icon: Star,
    color: "text-orange-400",
  },
];

const stats = [
  {
    id: 1,
    value: "10+",
    label: "Industry Awards",
  },
  {
    id: 2,
    value: "50+",
    label: "Projects Delivered",
  },
  {
    id: 3,
    value: "98%",
    label: "Client Satisfaction",
  },
];

const Awards = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-[#07153F] py-24">
        {/* Background */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb25,transparent_35%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#06b6d425,transparent_40%)]" />

        <div className="absolute -left-48 top-0 h-137.5 w-137.5 rounded-full bg-blue-600/20 blur-[180px]" />

        <div className="absolute -right-52 bottom-0 h-137.5 w-137.5 rounded-full bg-cyan-500/20 blur-[180px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            {/* Left */}

            <div>
              <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium uppercase tracking-[0.2em] text-blue-300">
                OUR ACHIEVEMENTS
              </span>

              <h2 className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl">
                Awards &
                <br />
                <span className="bg-linear-to-r from-blue-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                  Recognition
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-9 text-slate-300">
                At{" "}
                <span className="font-semibold text-white">Arinovaa Labs</span>,
                we are committed to building innovative digital products that
                create measurable business value. Our passion for quality,
                engineering excellence, and customer success has earned
                recognition from industry leaders and trusted organizations.
              </p>

              <div className="mt-10 flex flex-wrap gap-5">
                <button className="rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-500">
                  Explore Our Work
                </button>

                <button className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition hover:border-blue-400">
                  View All Awards
                </button>
              </div>
            </div>

            {/* Featured Trophy Panel */}

            <div className="relative">
              <div className="absolute inset-0 rounded-[36px] bg-linear-to-br from-blue-500/20 to-cyan-500/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
                <div className="flex justify-center">
                  <div className="flex h-36 w-36 items-center justify-center rounded-full bg-linear-to-br from-yellow-400/20 via-yellow-500/10 to-orange-500/20 ring-1 ring-yellow-400/30">
                    <Trophy className="h-20 w-20 text-yellow-400" />
                  </div>
                </div>

                <h3 className="mt-8 text-center text-3xl font-bold text-white">
                  Award Winning Company
                </h3>

                <p className="mx-auto mt-5 max-w-md text-center leading-8 text-slate-300">
                  Consistently recognized for innovation, digital
                  transformation, software engineering excellence and long-term
                  client success.
                </p>

                <div className="mt-10 grid grid-cols-3 gap-4">
                  {stats.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl border border-white/10 bg-[#0d214f] p-5 text-center"
                    >
                      <h4 className="text-3xl font-bold text-blue-400">
                        {item.value}
                      </h4>

                      <p className="mt-2 text-sm text-slate-300">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex items-center justify-between rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">
                  <div>
                    <p className="text-sm uppercase tracking-widest text-blue-300">
                      Latest Recognition
                    </p>

                    <h4 className="mt-2 text-lg font-semibold text-white">
                      Tech Excellence Awards 2025
                    </h4>
                  </div>

                  <ArrowUpRight className="h-8 w-8 text-blue-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Part 2 starts below */}
          {/* Awards Grid */}

          <div className="mt-24">
            <div className="mb-12 text-center">
              <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                INDUSTRY RECOGNITION
              </span>

              <h3 className="mt-5 text-4xl font-bold text-white">
                Our Recognitions
              </h3>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Every achievement reflects our commitment to quality, innovation
                and delivering impactful digital experiences.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {awards.map((award) => {
                const Icon = award.icon;

                return (
                  <div
                    key={award.id}
                    className="
          group
          relative
          overflow-hidden
          rounded-[30px]
          border
          border-white/10
          bg-white/5
          p-8
          backdrop-blur-xl
          transition-all
          duration-500
          hover:-translate-y-3
          hover:border-blue-500/40
          hover:shadow-[0_0_45px_rgba(37,99,235,.25)]
          "
                  >
                    {/* Glow */}

                    <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                      <div className="absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
                    </div>

                    {/* Icon */}

                    <div className="relative z-10 flex justify-center">
                      <div
                        className="
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-2xl
              bg-linear-to-br
              from-blue-500/20
              to-cyan-500/10
              ring-1
              ring-blue-500/20
              transition
              duration-500
              group-hover:scale-110
              group-hover:rotate-6
              "
                      >
                        <Icon className={`h-10 w-10 ${award.color}`} />
                      </div>
                    </div>

                    {/* Year */}

                    <div className="relative z-10 mt-6 text-center">
                      <span className="rounded-full bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-blue-300 ring-1 ring-blue-500/20">
                        {award.year}
                      </span>
                    </div>

                    {/* Title */}

                    <h4 className="relative z-10 mt-8 text-center text-2xl font-bold text-white">
                      {award.title}
                    </h4>

                    {/* Organization */}

                    <p className="relative z-10 mt-3 text-center font-medium text-blue-300">
                      {award.organization}
                    </p>

                    <div className="relative z-10 mx-auto my-6 h-px w-20 bg-linear-to-r from-transparent via-blue-500 to-transparent" />

                    {/* Description */}

                    <p className="relative z-10 min-h-30 text-center leading-7 text-slate-300">
                      {award.description}
                    </p>

                    {/* Bottom */}

                    <div className="relative z-10 mt-8 flex items-center justify-center">
                      <button
                        className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-blue-500/20
              bg-blue-500/10
              px-5
              py-3
              text-sm
              font-semibold
              text-blue-300
              transition
              hover:bg-blue-500
              hover:text-white
              "
                      >
                        Learn More
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Awards;
