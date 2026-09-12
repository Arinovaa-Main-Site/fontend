import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CircleDollarSign,
  Clock3,
  MoreHorizontal,
  Plus,
  Users,
} from "lucide-react";

const stats = [
  {
    title: "Total Projects",
    value: "24",
    change: "+12.5%",
    trend: "up",
    icon: BriefcaseBusiness,
  },
  {
    title: "Active Clients",
    value: "18",
    change: "+8.2%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Total Revenue",
    value: "₹8.42L",
    change: "+18.7%",
    trend: "up",
    icon: CircleDollarSign,
  },
  {
    title: "Pending Tasks",
    value: "07",
    change: "-4.3%",
    trend: "down",
    icon: Clock3,
  },
];

const projects = [
  {
    name: "Enterprise ERP",
    client: "TechNova Pvt. Ltd.",
    status: "In Progress",
    progress: 74,
    value: "₹3,20,000",
  },
  {
    name: "AI Analytics Platform",
    client: "Global Systems",
    status: "In Progress",
    progress: 56,
    value: "₹2,45,000",
  },
  {
    name: "E-Commerce Platform",
    client: "Nexora",
    status: "Completed",
    progress: 100,
    value: "₹1,85,000",
  },
  {
    name: "Cloud Migration",
    client: "Vertex Solutions",
    status: "Review",
    progress: 88,
    value: "₹92,000",
  },
];

const activities = [
  {
    title: "New project created",
    description: "Enterprise ERP was added",
    time: "12 min ago",
  },
  {
    title: "Payment received",
    description: "₹85,000 received from Nexora",
    time: "48 min ago",
  },
  {
    title: "Team member added",
    description: "New developer joined the team",
    time: "2 hrs ago",
  },
  {
    title: "Project completed",
    description: "E-Commerce Platform completed",
    time: "5 hrs ago",
  },
];

const revenue = [42, 55, 48, 68, 58, 76, 64, 82, 72, 91, 84, 96];

export default function Overview() {
  return (
    <div className="min-h-full">
      <div className="mx-auto max-w-[1600px] p-4 sm:p-6 lg:p-8">
        {/* Page Header */}
        <section className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-blue-400" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-400">
                Overview
              </span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Business Overview
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Monitor your projects, clients, revenue and team
              performance from one place.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-colors hover:bg-blue-400"
          >
            <Plus size={17} />
            New Project
          </button>
        </section>

        {/* Stats */}
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            const TrendIcon =
              stat.trend === "up"
                ? ArrowUpRight
                : ArrowDownRight;

            return (
              <article
                key={stat.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/2.5 p-5 transition-colors duration-300 hover:border-blue-500/20 hover:bg-white/4"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-blue-500/5 blur-3xl" />

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium text-slate-500">
                      {stat.title}
                    </p>

                    <p className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {stat.value}
                    </p>

                    <div className="mt-2 flex items-center gap-1.5">
                      <TrendIcon
                        size={13}
                        className="text-emerald-400"
                      />

                      <span className="text-[11px] font-semibold text-emerald-400">
                        {stat.change}
                      </span>

                      <span className="text-[11px] text-slate-600">
                        vs last month
                      </span>
                    </div>
                  </div>

                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/10 bg-blue-500/5 text-blue-400">
                    <Icon size={18} />
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        {/* Analytics */}
        <section className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.6fr)_minmax(320px,0.7fr)]">
          {/* Revenue */}
          <article className="rounded-2xl border border-white/10 bg-white/2.5 p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-slate-500">
                  Revenue Overview
                </p>

                <div className="mt-2 flex flex-wrap items-baseline gap-3">
                  <h2 className="text-2xl font-bold text-white">
                    ₹8,42,000
                  </h2>

                  <span className="text-xs font-semibold text-emerald-400">
                    +18.7%
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="hidden rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-500 transition-colors hover:bg-white/5 hover:text-white sm:block"
              >
                This Year
              </button>
            </div>

            {/* Chart */}
            <div className="mt-10 h-64">
              <div className="relative h-full">
                {/* Grid */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[1, 2, 3, 4, 5].map((line) => (
                    <div
                      key={line}
                      className="border-t border-white/5"
                    />
                  ))}
                </div>

                {/* Bars */}
                <div className="absolute inset-0 flex items-end gap-1.5 px-1 sm:gap-2">
                  {revenue.map((height, index) => (
                    <div
                      key={index}
                      className="group/bar flex h-full flex-1 items-end"
                    >
                      <div
                        className="w-full rounded-t-md bg-linear-to-t from-blue-600/30 to-blue-400/80 opacity-70 transition-opacity duration-300 group-hover/bar:opacity-100 sm:rounded-t-lg"
                        style={{
                          height: `${height}%`,
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Labels */}
                <div className="absolute -bottom-7 left-0 right-0 flex justify-between px-1 text-[9px] text-slate-700 sm:text-[10px]">
                  {[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ].map((month) => (
                    <span key={month}>{month}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* Activity */}
          <article className="rounded-2xl border border-white/10 bg-white/2.5 p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-500">
                  Recent Activity
                </p>

                <h2 className="mt-1 text-lg font-bold text-white">
                  Latest Updates
                </h2>
              </div>

              <button
                type="button"
                aria-label="Activity options"
                className="rounded-lg p-1.5 text-slate-600 transition-colors hover:bg-white/5 hover:text-white"
              >
                <MoreHorizontal size={19} />
              </button>
            </div>

            <div className="mt-6 space-y-5">
              {activities.map((activity, index) => {
                const isLast =
                  index === activities.length - 1;

                return (
                  <div
                    key={activity.title}
                    className="relative flex gap-3"
                  >
                    {!isLast && (
                      <span className="absolute left-2.5 top-7 h-full w-px bg-white/10" />
                    )}

                    <div className="relative mt-1 flex size-5 shrink-0 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10">
                      <span className="size-1.5 rounded-full bg-blue-400" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-slate-200">
                        {activity.title}
                      </p>

                      <p className="mt-1 text-[11px] leading-5 text-slate-600">
                        {activity.description}
                      </p>

                      <p className="mt-1 text-[10px] text-slate-700">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
        </section>

        {/* Projects */}
        <section className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/2.5">
          <div className="flex flex-col gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="text-xs font-medium text-slate-500">
                Workspace
              </p>

              <h2 className="mt-1 text-lg font-bold text-white">
                Active Projects
              </h2>
            </div>

            <button
              type="button"
              className="self-start text-xs font-semibold text-blue-400 transition-colors hover:text-blue-300"
            >
              View all projects →
            </button>
          </div>

          {/* Desktop */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-190 text-left">
              <thead>
                <tr className="border-b border-white/5 text-[10px] uppercase tracking-[0.15em] text-slate-600">
                  <th className="px-6 py-4 font-semibold">
                    Project
                  </th>

                  <th className="px-6 py-4 font-semibold">
                    Status
                  </th>

                  <th className="px-6 py-4 font-semibold">
                    Progress
                  </th>

                  <th className="px-6 py-4 font-semibold">
                    Value
                  </th>
                </tr>
              </thead>

              <tbody>
                {projects.map((project) => (
                  <tr
                    key={project.name}
                    className="border-b border-white/5 last:border-0 transition-colors hover:bg-white/2.5"
                  >
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-slate-200">
                        {project.name}
                      </p>

                      <p className="mt-1 text-[11px] text-slate-600">
                        {project.client}
                      </p>
                    </td>

                    <td className="px-6 py-4">
                      <ProjectStatus
                        status={project.status}
                      />
                    </td>

                    <td className="w-64 px-6 py-4">
                      <ProjectProgress
                        progress={project.progress}
                      />
                    </td>

                    <td className="px-6 py-4 text-sm font-semibold text-slate-300">
                      {project.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="divide-y divide-white/5 md:hidden">
            {projects.map((project) => (
              <article
                key={project.name}
                className="p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-slate-200">
                      {project.name}
                    </h3>

                    <p className="mt-1 text-[11px] text-slate-600">
                      {project.client}
                    </p>
                  </div>

                  <span className="shrink-0 text-sm font-semibold text-slate-300">
                    {project.value}
                  </span>
                </div>

                <div className="mt-4">
                  <ProjectProgress
                    progress={project.progress}
                  />
                </div>

                <div className="mt-4">
                  <ProjectStatus
                    status={project.status}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 flex flex-col justify-between gap-2 border-t border-white/5 pt-5 text-[10px] text-slate-700 sm:flex-row">
          <p>© 2026 Arinovaa Labs. Admin Console.</p>
          <p>System status: Operational</p>
        </footer>
      </div>
    </div>
  );
}

function ProjectProgress({
  progress,
}: {
  progress: number;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full bg-blue-500 transition-[width] duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <span className="w-8 text-right text-[10px] text-slate-500">
        {progress}%
      </span>
    </div>
  );
}

function ProjectStatus({
  status,
}: {
  status: string;
}) {
  const styles =
    status === "Completed"
      ? "border-emerald-500/20 bg-emerald-500/5 text-emerald-400"
      : status === "Review"
        ? "border-amber-500/20 bg-amber-500/5 text-amber-400"
        : "border-blue-500/20 bg-blue-500/5 text-blue-400";

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-semibold ${styles}`}
    >
      {status}
    </span>
  );
}