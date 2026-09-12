"use client";

import {
  BriefcaseBusiness,
  CalendarDays,
  ChevronRight,
  Download,
  FileText,
  Mail,
  MoreHorizontal,
  Search,
  UserCheck,
  Users,
  XCircle,
} from "lucide-react";
import { useMemo, useState } from "react";

type ApplicationStatus =
  | "New"
  | "Reviewing"
  | "Shortlisted"
  | "Interview"
  | "Hired"
  | "Rejected";

type Application = {
  id: number;
  name: string;
  email: string;
  position: string;
  experience: string;
  applied: string;
  status: ApplicationStatus;
  initials: string;
  resume: string;
};

const applications: Application[] = [
  {
    id: 1,
    name: "Aman Verma",
    email: "aman.verma@gmail.com",
    position: "Senior Full Stack Developer",
    experience: "4 Years",
    applied: "Today",
    status: "New",
    initials: "AV",
    resume: "aman-verma-resume.pdf",
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "priya.singh@gmail.com",
    position: "UI/UX Designer",
    experience: "3 Years",
    applied: "Today",
    status: "Shortlisted",
    initials: "PS",
    resume: "priya-singh-resume.pdf",
  },
  {
    id: 3,
    name: "Rohit Kumar",
    email: "rohit.kumar@gmail.com",
    position: "Backend Developer",
    experience: "5 Years",
    applied: "Yesterday",
    status: "Interview",
    initials: "RK",
    resume: "rohit-kumar-resume.pdf",
  },
  {
    id: 4,
    name: "Ankit Sharma",
    email: "ankit.sharma@gmail.com",
    position: "React Developer",
    experience: "2 Years",
    applied: "Yesterday",
    status: "Reviewing",
    initials: "AS",
    resume: "ankit-sharma-resume.pdf",
  },
  {
    id: 5,
    name: "Neha Gupta",
    email: "neha.gupta@gmail.com",
    position: "Product Designer",
    experience: "4 Years",
    applied: "2 days ago",
    status: "New",
    initials: "NG",
    resume: "neha-gupta-resume.pdf",
  },
  {
    id: 6,
    name: "Vivek Patel",
    email: "vivek.patel@gmail.com",
    position: "Node.js Developer",
    experience: "3 Years",
    applied: "3 days ago",
    status: "Rejected",
    initials: "VP",
    resume: "vivek-patel-resume.pdf",
  },
];

const statusStyles: Record<ApplicationStatus, string> = {
  New: "border-blue-500/20 bg-blue-500/10 text-blue-400",
  Reviewing: "border-amber-500/20 bg-amber-500/10 text-amber-400",
  Shortlisted: "border-violet-500/20 bg-violet-500/10 text-violet-400",
  Interview: "border-cyan-500/20 bg-cyan-500/10 text-cyan-400",
  Hired: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  Rejected: "border-red-500/20 bg-red-500/10 text-red-400",
};

const filters: Array<"All" | ApplicationStatus> = [
  "All",
  "New",
  "Reviewing",
  "Shortlisted",
  "Interview",
  "Hired",
  "Rejected",
];

function StatusBadge({ status }: { status: ApplicationStatus }) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-2.5 py-1",
        "text-[10px] font-semibold",
        statusStyles[status],
      ].join(" ")}
    >
      {status}
    </span>
  );
}

function CandidateAvatar({ initials }: { initials: string }) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-xs font-bold text-blue-400">
      {initials}
    </div>
  );
}

export default function Applications() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"All" | ApplicationStatus>("All");

  const filteredApplications = useMemo(() => {
    const query = search.trim().toLowerCase();

    return applications.filter((application) => {
      const matchesSearch =
        !query ||
        application.name.toLowerCase().includes(query) ||
        application.email.toLowerCase().includes(query) ||
        application.position.toLowerCase().includes(query);

      const matchesFilter =
        filter === "All" || application.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  const stats = [
    {
      label: "Total Applications",
      value: applications.length.toString().padStart(2, "0"),
      description: "All candidates",
      icon: Users,
    },
    {
      label: "New Applications",
      value: applications
        .filter((item) => item.status === "New")
        .length.toString()
        .padStart(2, "0"),
      description: "Need review",
      icon: FileText,
    },
    {
      label: "Shortlisted",
      value: applications
        .filter((item) => item.status === "Shortlisted")
        .length.toString()
        .padStart(2, "0"),
      description: "Selected candidates",
      icon: UserCheck,
    },
    {
      label: "Interviews",
      value: applications
        .filter((item) => item.status === "Interview")
        .length.toString()
        .padStart(2, "0"),
      description: "Interview pipeline",
      icon: CalendarDays,
    },
  ];

  return (
    <section className="min-h-screen bg-[#050B1D] px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-blue-400">
              <BriefcaseBusiness size={14} />
              <span>CAREER MANAGEMENT</span>
            </div>

            <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Applications
            </h1>

            <p className="mt-1 max-w-2xl text-sm text-slate-500">
              Review and manage candidates who applied for opportunities at
              Arinovaa Labs.
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-xl border border-blue-500/10 bg-blue-500/5 px-3 py-2 text-xs text-blue-400">
            <FileText size={14} />
            {applications.length} applications
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="
                  rounded-2xl border border-white/10
                  bg-white/[0.025] p-5
                  transition-colors duration-200
                  hover:border-blue-500/20
                "
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs text-slate-600">{stat.label}</p>
                    <p className="mt-2 text-2xl font-bold">{stat.value}</p>
                    <p className="mt-1 text-xs text-slate-600">
                      {stat.description}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/10 bg-blue-500/5 text-blue-400">
                    <Icon size={18} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Applications */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">
          {/* Toolbar */}
          <div className="flex flex-col gap-4 border-b border-white/10 p-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600"
              />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search candidates or positions..."
                className="
                  h-10 w-full rounded-xl
                  border border-white/10
                  bg-black/10 pl-9 pr-9
                  text-sm text-white
                  outline-none
                  placeholder:text-slate-600
                  focus:border-blue-500/40
                "
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-white"
                >
                  <XCircle size={15} />
                </button>
              )}
            </div>

            <div className="flex gap-1 overflow-x-auto pb-1 lg:pb-0">
              {filters.map((item) => {
                const active = filter === item;

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setFilter(item)}
                    className={[
                      "shrink-0 rounded-lg px-3 py-2 text-xs font-medium",
                      "transition-colors",
                      active
                        ? "bg-blue-500/10 text-blue-400"
                        : "text-slate-600 hover:bg-white/5 hover:text-slate-300",
                    ].join(" ")}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[950px]">
              <thead>
                <tr className="border-b border-white/10 text-left">
                  <th className="px-5 py-4 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                    Candidate
                  </th>

                  <th className="px-5 py-4 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                    Position
                  </th>

                  <th className="px-5 py-4 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                    Experience
                  </th>

                  <th className="px-5 py-4 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                    Applied
                  </th>

                  <th className="px-5 py-4 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                    Status
                  </th>

                  <th className="px-5 py-4 text-right text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredApplications.map((application) => (
                  <tr
                    key={application.id}
                    className="
                      border-b border-white/5
                      last:border-0
                      transition-colors
                      hover:bg-white/[0.02]
                    "
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <CandidateAvatar initials={application.initials} />

                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-white">
                            {application.name}
                          </p>

                          <p className="mt-1 flex items-center gap-1 text-xs text-slate-600">
                            <Mail size={11} />
                            {application.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <p className="max-w-60 text-sm text-slate-300">
                        {application.position}
                      </p>
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-500">
                      {application.experience}
                    </td>

                    <td className="px-5 py-4 text-xs text-slate-600">
                      {application.applied}
                    </td>

                    <td className="px-5 py-4">
                      <StatusBadge status={application.status} />
                    </td>

                    <td className="px-5 py-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          type="button"
                          aria-label={`Download ${application.name}'s resume`}
                          className="
                            flex h-8 w-8 items-center justify-center
                            rounded-lg text-slate-600
                            transition-colors
                            hover:bg-white/5 hover:text-blue-400
                          "
                        >
                          <Download size={15} />
                        </button>

                        <button
                          type="button"
                          aria-label={`More actions for ${application.name}`}
                          className="
                            flex h-8 w-8 items-center justify-center
                            rounded-lg text-slate-600
                            transition-colors
                            hover:bg-white/5 hover:text-white
                          "
                        >
                          <MoreHorizontal size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="divide-y divide-white/5 md:hidden">
            {filteredApplications.map((application) => (
              <button
                key={application.id}
                type="button"
                className="
                  flex w-full gap-3 p-4 text-left
                  transition-colors hover:bg-white/[0.02]
                "
              >
                <CandidateAvatar initials={application.initials} />

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold">
                        {application.name}
                      </p>

                      <p className="mt-0.5 truncate text-[10px] text-slate-600">
                        {application.email}
                      </p>
                    </div>

                    <ChevronRight
                      size={15}
                      className="shrink-0 text-slate-700"
                    />
                  </div>

                  <p className="mt-3 truncate text-xs font-medium text-slate-400">
                    {application.position}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <StatusBadge status={application.status} />

                    <span className="text-[10px] text-slate-700">
                      {application.experience}
                    </span>

                    <span className="text-[10px] text-slate-700">
                      {application.applied}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Empty state */}
          {filteredApplications.length === 0 && (
            <div className="px-5 py-16 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] text-slate-600">
                <Search size={19} />
              </div>

              <h3 className="mt-4 text-sm font-semibold text-slate-300">
                No applications found
              </h3>

              <p className="mt-1 text-xs text-slate-600">
                Try a different candidate name, position or status.
              </p>
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-white/10 px-5 py-4">
            <p className="text-xs text-slate-600">
              Showing{" "}
              <span className="font-medium text-slate-400">
                {filteredApplications.length}
              </span>{" "}
              of {applications.length} applications
            </p>

            <div className="hidden items-center gap-4 sm:flex">
              <span className="text-xs text-slate-700">
                New applications require review
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}