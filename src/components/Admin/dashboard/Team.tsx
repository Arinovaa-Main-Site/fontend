import {
  BriefcaseBusiness,
  ChevronDown,
  Mail,
  MoreHorizontal,
  Plus,
  Search,
  ShieldCheck,
  Users,
  UserCheck,
  UserX,
} from "lucide-react";

type TeamMember = {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  status: "Active" | "Inactive";
  projects: number;
  joined: string;
  initials: string;
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dravinanshu Mishra",
    email: "dravinanshu@arinovaa.com",
    role: "Founder & Chairman",
    department: "Leadership",
    status: "Active",
    projects: 12,
    joined: "Jan 2023",
    initials: "DM",
  },
  {
    id: 2,
    name: "Prashant Sharma",
    email: "prashant@arinovaa.com",
    role: "Co-Founder & CEO",
    department: "Leadership",
    status: "Active",
    projects: 18,
    joined: "Jan 2023",
    initials: "PS",
  },
  {
    id: 3,
    name: "Biplab Biswas",
    email: "biplab@arinovaa.com",
    role: "Chief Technology Officer",
    department: "Engineering",
    status: "Active",
    projects: 14,
    joined: "Mar 2024",
    initials: "BB",
  },
  {
    id: 4,
    name: "Aarav Singh",
    email: "aarav@arinovaa.com",
    role: "Senior Software Engineer",
    department: "Engineering",
    status: "Active",
    projects: 9,
    joined: "Jun 2024",
    initials: "AS",
  },
  {
    id: 5,
    name: "Ananya Verma",
    email: "ananya@arinovaa.com",
    role: "UI/UX Designer",
    department: "Design",
    status: "Active",
    projects: 7,
    joined: "Aug 2024",
    initials: "AV",
  },
  {
    id: 6,
    name: "Rohan Gupta",
    email: "rohan@arinovaa.com",
    role: "Full Stack Developer",
    department: "Engineering",
    status: "Inactive",
    projects: 5,
    joined: "Sep 2024",
    initials: "RG",
  },
];

const stats = [
  {
    label: "Total Members",
    value: "06",
    icon: Users,
    description: "Across all departments",
  },
  {
    label: "Active Members",
    value: "05",
    icon: UserCheck,
    description: "Currently working",
  },
  {
    label: "Departments",
    value: "03",
    icon: BriefcaseBusiness,
    description: "Leadership, Engineering & Design",
  },
  {
    label: "Admins",
    value: "03",
    icon: ShieldCheck,
    description: "Management access",
  },
];

const statIcons = [
  "bg-blue-500/10 text-blue-400",
  "bg-emerald-500/10 text-emerald-400",
  "bg-violet-500/10 text-violet-400",
  "bg-amber-500/10 text-amber-400",
];

function StatusBadge({ status }: { status: TeamMember["status"] }) {
  const active = status === "Active";

  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1",
        "text-[11px] font-medium",
        active
          ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
          : "border-white/10 bg-white/5 text-slate-500",
      ].join(" ")}
    >
      <span
        className={[
          "h-1.5 w-1.5 rounded-full",
          active ? "bg-emerald-400" : "bg-slate-500",
        ].join(" ")}
      />
      {status}
    </span>
  );
}

function MemberAvatar({ initials }: { initials: string }) {
  return (
    <div
      className="
        flex h-10 w-10 shrink-0 items-center justify-center
        rounded-xl border border-blue-500/20
        bg-blue-500/10 text-xs font-bold text-blue-400
      "
    >
      {initials}
    </div>
  );
}

export default function Team() {
  return (
    <section className="min-h-screen bg-[#050B1D] px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-blue-400">
              <Users size={14} />
              <span>TEAM MANAGEMENT</span>
            </div>

            <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              Team
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage your team members, roles and access.
            </p>
          </div>

          <button
            type="button"
            className="
              inline-flex w-full items-center justify-center gap-2
              rounded-xl bg-blue-500 px-4 py-2.5
              text-sm font-semibold text-white
              shadow-lg shadow-blue-500/10
              transition-colors duration-200
              hover:bg-blue-400
              sm:w-auto
            "
          >
            <Plus size={17} />
            Add Member
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => {
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
                    <p className="text-sm text-slate-500">{stat.label}</p>

                    <p className="mt-2 text-2xl font-bold tracking-tight">
                      {stat.value}
                    </p>
                  </div>

                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${statIcons[index]}`}
                  >
                    <Icon size={19} />
                  </div>
                </div>

                <p className="mt-3 text-xs text-slate-600">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Team container */}
        <div
          className="
            overflow-hidden rounded-2xl
            border border-white/10
            bg-white/[0.025]
          "
        >
          {/* Toolbar */}
          <div
            className="
              flex flex-col gap-3 border-b border-white/10
              p-4 sm:flex-row sm:items-center sm:justify-between
            "
          >
            <div className="relative w-full sm:max-w-xs">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600"
              />

              <input
                type="search"
                placeholder="Search team members..."
                className="
                  h-10 w-full rounded-xl
                  border border-white/10
                  bg-black/10 pl-9 pr-3
                  text-sm text-white
                  outline-none
                  placeholder:text-slate-600
                  transition-colors
                  focus:border-blue-500/40
                "
              />
            </div>

            <button
              type="button"
              className="
                inline-flex h-10 items-center justify-center gap-2
                rounded-xl border border-white/10
                bg-white/[0.02] px-3
                text-sm text-slate-400
                transition-colors
                hover:border-white/15 hover:text-white
              "
            >
              All Departments
              <ChevronDown size={15} />
            </button>
          </div>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="border-b border-white/10 text-left">
                  <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-600">
                    Member
                  </th>
                  <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-600">
                    Role
                  </th>
                  <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-600">
                    Department
                  </th>
                  <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-600">
                    Projects
                  </th>
                  <th className="px-5 py-4 text-xs font-medium uppercase tracking-wider text-slate-600">
                    Status
                  </th>
                  <th className="px-5 py-4 text-right text-xs font-medium uppercase tracking-wider text-slate-600">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {teamMembers.map((member) => (
                  <tr
                    key={member.id}
                    className="
                      border-b border-white/5
                      last:border-0
                      transition-colors
                      hover:bg-white/[0.02]
                    "
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <MemberAvatar initials={member.initials} />

                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-white">
                            {member.name}
                          </p>

                          <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-600">
                            <Mail size={11} />
                            {member.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <p className="text-sm text-slate-300">{member.role}</p>
                    </td>

                    <td className="px-5 py-4">
                      <span className="rounded-lg border border-white/10 bg-white/[0.02] px-2.5 py-1.5 text-xs text-slate-500">
                        {member.department}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <span className="text-sm font-medium text-slate-300">
                        {member.projects}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <StatusBadge status={member.status} />
                    </td>

                    <td className="px-5 py-4 text-right">
                      <button
                        type="button"
                        aria-label={`Actions for ${member.name}`}
                        className="
                          inline-flex h-8 w-8 items-center justify-center
                          rounded-lg border border-transparent
                          text-slate-600
                          transition-colors
                          hover:border-white/10
                          hover:bg-white/5
                          hover:text-white
                        "
                      >
                        <MoreHorizontal size={17} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="divide-y divide-white/5 md:hidden">
            {teamMembers.map((member) => (
              <article key={member.id} className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <MemberAvatar initials={member.initials} />

                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-semibold">
                        {member.name}
                      </h3>

                      <p className="mt-0.5 truncate text-xs text-slate-600">
                        {member.email}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    aria-label={`Actions for ${member.name}`}
                    className="
                      flex h-8 w-8 shrink-0 items-center justify-center
                      rounded-lg text-slate-600
                      hover:bg-white/5 hover:text-white
                    "
                  >
                    <MoreHorizontal size={17} />
                  </button>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-600">
                      Role
                    </p>
                    <p className="mt-1 text-xs text-slate-300">
                      {member.role}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-600">
                      Department
                    </p>
                    <p className="mt-1 text-xs text-slate-300">
                      {member.department}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-600">
                      Projects
                    </p>
                    <p className="mt-1 text-xs font-medium text-slate-300">
                      {member.projects} projects
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-600">
                      Status
                    </p>
                    <div className="mt-1">
                      <StatusBadge status={member.status} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-white/10 px-5 py-4">
            <div className="flex flex-col gap-2 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
              <span>
                Showing{" "}
                <span className="font-medium text-slate-400">
                  {teamMembers.length}
                </span>{" "}
                team members
              </span>

              <div className="flex items-center gap-1">
                <UserCheck size={13} className="text-emerald-500" />
                <span>5 active</span>

                <span className="mx-1 text-slate-800">•</span>

                <UserX size={13} />
                <span>1 inactive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}