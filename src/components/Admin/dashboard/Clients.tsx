import {
  ArrowUpRight,
  Building2,
  CircleDollarSign,
  Mail,
  MoreHorizontal,
  Plus,
  Search,
  Users,
} from "lucide-react";

const clientStats = [
  {
    label: "Total Clients",
    value: "18",
    icon: Users,
  },
  {
    label: "Active Clients",
    value: "14",
    icon: Building2,
  },
  {
    label: "Total Billing",
    value: "₹18.6L",
    icon: CircleDollarSign,
  },
  {
    label: "New This Month",
    value: "03",
    icon: ArrowUpRight,
  },
];

const clients = [
  {
    id: "CLI-001",
    name: "TechNova Pvt. Ltd.",
    contact: "Rahul Verma",
    email: "rahul@technova.example",
    projects: 4,
    billing: "₹5,40,000",
    status: "Active",
    lastActivity: "Today",
  },
  {
    id: "CLI-002",
    name: "Global Systems",
    contact: "Amit Sharma",
    email: "amit@globalsystems.example",
    projects: 3,
    billing: "₹4,25,000",
    status: "Active",
    lastActivity: "Yesterday",
  },
  {
    id: "CLI-003",
    name: "Nexora",
    contact: "Priya Singh",
    email: "priya@nexora.example",
    projects: 2,
    billing: "₹2,85,000",
    status: "Active",
    lastActivity: "2 days ago",
  },
  {
    id: "CLI-004",
    name: "Vertex Solutions",
    contact: "Rohit Gupta",
    email: "rohit@vertex.example",
    projects: 2,
    billing: "₹1,92,000",
    status: "Review",
    lastActivity: "3 days ago",
  },
  {
    id: "CLI-005",
    name: "MediCore",
    contact: "Anjali Mehta",
    email: "anjali@medicore.example",
    projects: 1,
    billing: "₹1,75,000",
    status: "Inactive",
    lastActivity: "1 week ago",
  },
];

const statusStyles: Record<string, string> = {
  Active:
    "border-emerald-500/20 bg-emerald-500/5 text-emerald-400",

  Review:
    "border-amber-500/20 bg-amber-500/5 text-amber-400",

  Inactive:
    "border-slate-500/20 bg-slate-500/5 text-slate-500",
};

export default function Clients() {
  return (
    <div className="min-h-full">
      <div className="mx-auto max-w-[1600px] p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <section className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-blue-400" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-400">
                Relationships
              </span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Clients
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Manage client relationships, projects, billing and
              communication from one place.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-colors hover:bg-blue-400"
          >
            <Plus size={17} />
            Add Client
          </button>
        </section>

        {/* Stats */}
        <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {clientStats.map((stat) => {
            const Icon = stat.icon;

            return (
              <article
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/2.5 p-5 transition-colors duration-300 hover:border-blue-500/20 hover:bg-white/4"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-blue-500/5 blur-3xl" />

                <div className="relative flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium text-slate-500">
                      {stat.label}
                    </p>

                    <p className="mt-2 text-2xl font-bold text-white">
                      {stat.value}
                    </p>
                  </div>

                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/10 bg-blue-500/5 text-blue-400">
                    <Icon size={18} />
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        {/* Client List */}
        <section className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/2.5">
          {/* Toolbar */}
          <div className="flex flex-col gap-4 border-b border-white/10 p-5 lg:flex-row lg:items-center lg:justify-between lg:p-6">
            <div>
              <h2 className="text-lg font-bold text-white">
                All Clients
              </h2>

              <p className="mt-1 text-xs text-slate-600">
                View and manage your client relationships.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              {/* Search */}
              <label className="flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-black/10 px-3 sm:w-64">
                <Search
                  size={16}
                  className="shrink-0 text-slate-600"
                />

                <input
                  type="search"
                  placeholder="Search clients..."
                  aria-label="Search clients"
                  className="w-full bg-transparent text-xs text-white outline-none placeholder:text-slate-700"
                />
              </label>

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
                    Client
                  </th>

                  <th className="px-6 py-4 font-semibold">
                    Status
                  </th>

                  <th className="px-6 py-4 font-semibold">
                    Projects
                  </th>

                  <th className="px-6 py-4 font-semibold">
                    Total Billing
                  </th>

                  <th className="px-6 py-4 font-semibold">
                    Last Activity
                  </th>

                  <th className="w-12 px-4" />
                </tr>
              </thead>

              <tbody>
                {clients.map((client) => (
                  <tr
                    key={client.id}
                    className="border-b border-white/5 last:border-0 transition-colors hover:bg-white/2.5"
                  >
                    {/* Client */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/10 bg-blue-500/5 text-sm font-bold text-blue-400">
                          {client.name
                            .split(" ")
                            .slice(0, 2)
                            .map((word) => word[0])
                            .join("")}
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-slate-200">
                            {client.name}
                          </p>

                          <p className="mt-1 text-[10px] text-slate-600">
                            {client.id} · {client.contact}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-semibold ${statusStyles[client.status]}`}
                      >
                        {client.status}
                      </span>
                    </td>

                    {/* Projects */}
                    <td className="px-6 py-5">
                      <span className="text-xs font-medium text-slate-400">
                        {client.projects}
                      </span>
                    </td>

                    {/* Billing */}
                    <td className="px-6 py-5 text-xs font-semibold text-slate-300">
                      {client.billing}
                    </td>

                    {/* Activity */}
                    <td className="px-6 py-5">
                      <p className="text-xs text-slate-500">
                        {client.lastActivity}
                      </p>
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-5">
                      <button
                        type="button"
                        aria-label={`Actions for ${client.name}`}
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

          {/* Mobile */}
          <div className="divide-y divide-white/5 md:hidden">
            {clients.map((client) => (
              <article
                key={client.id}
                className="p-5"
              >
                <div className="flex items-start gap-3">
                  {/* Avatar */}
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/10 bg-blue-500/5 text-sm font-bold text-blue-400">
                    {client.name
                      .split(" ")
                      .slice(0, 2)
                      .map((word) => word[0])
                      .join("")}
                  </div>

                  <div className="min-w-0 flex-1">
                    {/* Name */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-semibold text-slate-200">
                          {client.name}
                        </h3>

                        <p className="mt-1 text-[10px] text-slate-600">
                          {client.id}
                        </p>
                      </div>

                      <button
                        type="button"
                        aria-label={`Actions for ${client.name}`}
                        className="shrink-0 rounded-lg p-1.5 text-slate-600 hover:bg-white/5 hover:text-white"
                      >
                        <MoreHorizontal size={17} />
                      </button>
                    </div>

                    {/* Contact */}
                    <div className="mt-3 space-y-1.5">
                      <p className="text-[11px] text-slate-500">
                        {client.contact}
                      </p>

                      <div className="flex items-center gap-1.5 text-[10px] text-slate-600">
                        <Mail size={12} />
                        <span className="truncate">
                          {client.email}
                        </span>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <span
                        className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold ${statusStyles[client.status]}`}
                      >
                        {client.status}
                      </span>

                      <span className="text-[10px] text-slate-600">
                        {client.projects} projects
                      </span>

                      <span className="ml-auto text-xs font-semibold text-slate-300">
                        {client.billing}
                      </span>
                    </div>

                    {/* Footer */}
                    <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-3 text-[10px] text-slate-700">
                      <span>
                        Last activity: {client.lastActivity}
                      </span>

                      <button
                        type="button"
                        className="inline-flex items-center gap-1 font-semibold text-blue-400 hover:text-blue-300"
                      >
                        View
                        <ArrowUpRight size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Bottom Summary */}
        <section className="mt-6 grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-blue-500/10 bg-blue-500/5 p-5">
            <p className="text-xs font-medium text-slate-500">
              Client retention
            </p>

            <div className="mt-2 flex items-end justify-between gap-4">
              <p className="text-2xl font-bold text-white">
                98%
              </p>

              <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                <ArrowUpRight size={13} />
                +4.2%
              </span>
            </div>

            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5">
              <div
                className="h-full w-[98%] rounded-full bg-blue-500"
                aria-label="98 percent client retention"
              />
            </div>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/2.5 p-5">
            <p className="text-xs font-medium text-slate-500">
              Average client value
            </p>

            <p className="mt-2 text-2xl font-bold text-white">
              ₹1.03L
            </p>

            <p className="mt-2 text-[11px] text-slate-600">
              Based on current project billing
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}