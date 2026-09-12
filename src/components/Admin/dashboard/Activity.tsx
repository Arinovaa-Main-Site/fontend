import {
  Activity as ActivityIcon,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  CreditCard,
  FileText,
  UserPlus,
  Users,
} from "lucide-react";

type ActivityItem = {
  id: number;
  title: string;
  description: string;
  time: string;
  type: "project" | "client" | "team" | "payment" | "system";
  user: string;
};

const activities: ActivityItem[] = [
  {
    id: 1,
    title: "New project created",
    description: "Enterprise ERP Development was added to the project pipeline.",
    time: "12 min ago",
    type: "project",
    user: "Prashant Sharma",
  },
  {
    id: 2,
    title: "New client onboarded",
    description: "A new enterprise client profile was successfully created.",
    time: "38 min ago",
    type: "client",
    user: "Dravinanshu Mishra",
  },
  {
    id: 3,
    title: "Team member added",
    description: "Aarav Singh joined the Engineering team.",
    time: "2 hours ago",
    type: "team",
    user: "Admin",
  },
  {
    id: 4,
    title: "Payment received",
    description: "₹1,25,000 payment was received for the ERP project.",
    time: "4 hours ago",
    type: "payment",
    user: "Finance",
  },
  {
    id: 5,
    title: "Project completed",
    description: "AI Analytics Platform successfully moved to completed.",
    time: "6 hours ago",
    type: "project",
    user: "Biplab Biswas",
  },
  {
    id: 6,
    title: "Project report generated",
    description: "Monthly project performance report was generated.",
    time: "Yesterday",
    type: "system",
    user: "System",
  },
  {
    id: 7,
    title: "Client profile updated",
    description: "Client contact and billing information was updated.",
    time: "Yesterday",
    type: "client",
    user: "Admin",
  },
];

const activityStyles = {
  project: {
    icon: BriefcaseBusiness,
    className: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  client: {
    icon: Users,
    className: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  },
  team: {
    icon: UserPlus,
    className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  payment: {
    icon: CreditCard,
    className: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
  system: {
    icon: FileText,
    className: "bg-slate-500/10 text-slate-400 border-slate-500/20",
  },
};

function ActivityIconBox({
  type,
}: {
  type: ActivityItem["type"];
}) {
  const config = activityStyles[type];
  const Icon = config.icon;

  return (
    <div
      className={[
        "flex h-10 w-10 shrink-0 items-center justify-center",
        "rounded-xl border",
        config.className,
      ].join(" ")}
    >
      <Icon size={17} />
    </div>
  );
}

function ActivityItemRow({ activity }: { activity: ActivityItem }) {
  return (
    <article className="group relative flex gap-4">
      <ActivityIconBox type={activity.type} />

      <div className="min-w-0 flex-1 pb-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-white">
              {activity.title}
            </h3>

            <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-500">
              {activity.description}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 text-[11px] text-slate-600">
            <Clock3 size={12} />
            {activity.time}
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <span className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-1 text-[10px] font-medium text-slate-500">
            {activity.user}
          </span>

          <span className="text-[10px] capitalize text-slate-700">
            {activity.type}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Activity() {
  return (
    <section className="min-h-screen bg-[#050B1D] px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-blue-400">
              <ActivityIcon size={14} />
              <span>SYSTEM ACTIVITY</span>
            </div>

            <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Activity
            </h1>

            <p className="mt-1 max-w-2xl text-sm text-slate-500">
              Track important actions, project updates, client activity and
              system events across Arinovaa Labs.
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-3 py-2 text-xs font-medium text-emerald-400">
            <CheckCircle2 size={14} />
            System operational
          </div>
        </div>

        {/* Overview cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <p className="text-xs text-slate-600">Today</p>
            <p className="mt-2 text-2xl font-bold">18</p>
            <p className="mt-1 text-xs text-slate-600">activities recorded</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <p className="text-xs text-slate-600">Projects</p>
            <p className="mt-2 text-2xl font-bold">07</p>
            <p className="mt-1 text-xs text-slate-600">recent updates</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <p className="text-xs text-slate-600">Team</p>
            <p className="mt-2 text-2xl font-bold">04</p>
            <p className="mt-1 text-xs text-slate-600">member actions</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <p className="text-xs text-slate-600">System</p>
            <p className="mt-2 text-2xl font-bold">99.9%</p>
            <p className="mt-1 text-xs text-slate-600">operational status</p>
          </div>
        </div>

        {/* Activity panel */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">
          {/* Panel header */}
          <div className="flex flex-col gap-3 border-b border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-base font-semibold">Recent Activity</h2>
              <p className="mt-1 text-xs text-slate-600">
                Latest actions across your admin workspace.
              </p>
            </div>

            <button
              type="button"
              className="
                inline-flex items-center gap-1.5
                text-xs font-medium text-blue-400
                transition-colors hover:text-blue-300
              "
            >
              View all
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Timeline */}
          <div className="p-5 sm:p-6">
            <div className="relative">
              {/* Timeline line */}
              <div
                aria-hidden="true"
                className="absolute bottom-6 left-5 top-5 w-px bg-white/10"
              />

              <div className="relative space-y-0">
                {activities.map((activity) => (
                  <ActivityItemRow
                    key={activity.id}
                    activity={activity}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-white/10 px-5 py-4">
            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-600">
                Showing latest{" "}
                <span className="font-medium text-slate-400">
                  {activities.length}
                </span>{" "}
                activities
              </p>

              <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Live
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}