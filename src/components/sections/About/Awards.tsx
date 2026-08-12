import {
  Trophy,
  ArrowUpRight,
} from "lucide-react";


const stats = [
  {
    id: 1,
    value: "0+",
    label: "Industry Awards",
  },
  {
    id: 2,
    value: "2+",
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
                      Tech Excellence Awards
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

          </div>
        </div>
      </section>
    </>
  );
};

export default Awards;
