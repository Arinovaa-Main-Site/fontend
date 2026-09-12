import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  MoreHorizontal,
  Plus,
  Search,
  Users,
} from "lucide-react";

const projects = [
  {
    id: "PRJ-001",
    name: "Enterprise ERP",
    client: "TechNova Pvt. Ltd.",
    category: "Enterprise",
    status: "In Progress",
    progress: 74,
    team: 6,
    budget: "₹3,20,000",
    deadline: "28 Sep 2026",
  },
  {
    id: "PRJ-002",
    name: "AI Analytics Platform",
    client: "Global Systems",
    category: "AI / ML",
    status: "In Progress",
    progress: 56,
    team: 4,
    budget: "₹2,45,000",
    deadline: "15 Oct 2026",
  },
  {
    id: "PRJ-003",
    name: "E-Commerce Platform",
    client: "Nexora",
    category: "Web Development",
    status: "Completed",
    progress: 100,
    team: 5,
    budget: "₹1,85,000",
    deadline: "10 Sep 2026",
  },
  {
    id: "PRJ-004",
    name: "Cloud Migration",
    client: "Vertex Solutions",
    category: "Cloud",
    status: "Review",
    progress: 88,
    team: 3,
    budget: "₹92,000",
    deadline: "22 Sep 2026",
  },
  {
    id: "PRJ-005",
    name: "Healthcare Management",
    client: "MediCore",
    category: "SaaS",
    status: "On Hold",
    progress: 42,
    team: 4,
    budget: "₹1,75,000",
    deadline: "05 Nov 2026",
  },
];

const projectStats = [
  {
    label: "Total Projects",
    value: "24",
    icon: BriefcaseBusiness,
  },
  {
    label: "In Progress",
    value: "12",
    icon: Clock3,
  },
  {
    label: "Completed",
    value: "09",
    icon: CheckCircle2,
  },
  {
    label: "Total Clients",
    value: "18",
    icon: Users,
  },
];

const statusStyles: Record<string, string> = {
  "In Progress":
    "border-blue-500/20 bg-blue-500/5 text-blue-400",

  Completed:
    "border-emerald-500/20 bg-emerald-500/5 text-emerald-400",

  Review:
    "border-amber-500/20 bg-amber-500/5 text-amber-400",

  "On Hold":
    "border-red-500/20 bg-red-500/5 text-red-400",
};

export default function Project() {
  return (
    <div className="min-h-full">
      <div className="mx-auto max-w-[1600px] p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <section className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-blue-400" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-400">
                Workspace
              </span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Projects
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Manage projects, monitor progress, track budgets
              and keep your team aligned.
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
        <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {projectStats.map((stat) => {
            const Icon = stat.icon;

            return (
              <article
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/2.5 p-5 transition-colors duration-300 hover:border-blue-500/20 hover:bg-white/4"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-blue-500/5 blur-3xl" />

                <div className="relative flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-500">
                      {stat.label}
                    </p>

                    <p className="mt-2 text-2xl font-bold text-white">
                      {stat.value}
                    </p>
                  </div>

                  <div className="flex size-10 items-center justify-center rounded-xl border border-blue-500/10 bg-blue-500/5 text-blue-400">
                    <Icon size={18} />
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        {/* Project List */}
        <section className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/2.5">
          {/* Toolbar */}
          <div className="flex flex-col gap-4 border-b border-white/10 p-5 lg:flex-row lg:items-center lg:justify-between lg:p-6">
            <div>
              <h2 className="text-lg font-bold text-white">
                All Projects
              </h2>

              <p className="mt-1 text-xs text-slate-600">
                Manage and monitor your current projects.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              {/* Search */}
              <div className="flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-black/10 px-3 sm:w-64">
                <Search
                  size={16}
                  className="shrink-0 text-slate-600"
                />

                <input
                  type="search"
                  placeholder="Search projects..."
                  className="w-full bg-transparent text-xs text-white outline-none placeholder:text-slate-700"
                />
              </div>

              {/* Filter */}
              <button
                type="button"
                className="h-10 rounded-xl border border-white/10 px-4 text-xs font-medium text-slate-500 transition-colors hover:bg-white/5 hover:text-white"
              >
                All Status
              </button>
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-225 text-left">
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
                    Team
                  </th>

                  <th className="px-6 py-4 font-semibold">
                    Budget
                  </th>

                  <th className="px-6 py-4 font-semibold">
                    Deadline
                  </th>

                  <th className="w-12 px-4" />
                </tr>
              </thead>

              <tbody>
                {projects.map((project) => (
                  <tr
                    key={project.id}
                    className="border-b border-white/5 last:border-0 transition-colors hover:bg-white/2.5"
                  >
                    {/* Project */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/10 bg-blue-500/5 text-blue-400">
                          <BriefcaseBusiness size={17} />
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-slate-200">
                            {project.name}
                          </p>

                          <p className="mt-1 text-[10px] text-slate-600">
                            {project.id} · {project.client}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-semibold ${statusStyles[project.status]}`}
                      >
                        {project.status}
                      </span>
                    </td>

                    {/* Progress */}
                    <td className="w-56 px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
                          <div
                            className="h-full rounded-full bg-blue-500"
                            style={{
                              width: `${project.progress}%`,
                            }}
                          />
                        </div>

                        <span className="w-8 text-right text-[10px] text-slate-500">
                          {project.progress}%
                        </span>
                      </div>
                    </td>

                    {/* Team */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Users size={14} />
                        {project.team}
                      </div>
                    </td>

                    {/* Budget */}
                    <td className="px-6 py-5 text-xs font-semibold text-slate-300">
                      {project.budget}
                    </td>

                    {/* Deadline */}
                    <td className="px-6 py-5 text-xs text-slate-500">
                      {project.deadline}
                    </td>

                    {/* Action */}
                    <td className="px-4 py-5">
                      <button
                        type="button"
                        aria-label={`Actions for ${project.name}`}
                        className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        <MoreHorizontal size={17} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="divide-y divide-white/5 md:hidden">
            {projects.map((project) => (
              <article
                key={project.id}
                className="p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/10 bg-blue-500/5 text-blue-400">
                    <BriefcaseBusiness size={17} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-200">
                          {project.name}
                        </h3>

                        <p className="mt-1 text-[10px] text-slate-600">
                          {project.id} · {project.client}
                        </p>
                      </div>

                      <button
                        type="button"
                        aria-label={`Actions for ${project.name}`}
                        className="shrink-0 rounded-lg p-1.5 text-slate-600 hover:bg-white/5 hover:text-white"
                      >
                        <MoreHorizontal size={17} />
                      </button>
                    </div>

                    <div className="mt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-slate-600">
                          Progress
                        </span>

                        <span className="text-[10px] font-semibold text-slate-500">
                          {project.progress}%
                        </span>
                      </div>

                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
                        <div
                          className="h-full rounded-full bg-blue-500"
                          style={{
                            width: `${project.progress}%`,
                          }}
                        />
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold ${statusStyles[project.status]}`}
                      >
                        {project.status}
                      </span>

                      <span className="text-[10px] text-slate-600">
                        {project.team} team members
                      </span>

                      <span className="ml-auto text-xs font-semibold text-slate-300">
                        {project.budget}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-[10px] text-slate-700">
                      <span>{project.category}</span>

                      <span>
                        Due {project.deadline}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Bottom Summary */}
        <section className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-blue-500/10 bg-blue-500/5 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500">
                  Project completion rate
                </p>

                <p className="mt-2 text-2xl font-bold text-white">
                  87.5%
                </p>
              </div>

              <ArrowUpRight
                size={20}
                className="text-emerald-400"
              />
            </div>

            <p className="mt-2 text-[11px] text-slate-600">
              +6.4% compared to previous quarter
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/2.5 p-5">
            <p className="text-xs text-slate-500">
              Total project value
            </p>

            <p className="mt-2 text-2xl font-bold text-white">
              ₹12.84L
            </p>

            <p className="mt-2 text-[11px] text-slate-600">
              Across all active and completed projects
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}