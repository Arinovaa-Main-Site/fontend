"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  Building2,
  FileUser,
  FolderKanban,
  LayoutDashboard,
  MessagesSquare,
  Settings,
  UsersRound,
  X,
} from "lucide-react";

type DashboardSidebarProps = {
  open?: boolean;
  onClose?: () => void;
};

const navigation = [
  {
    label: "Overview",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Projects",
    href: "/admin/projects",
    icon: FolderKanban,
    badge: "24",
  },
  {
    label: "Clients",
    href: "/admin/clients",
    icon: Building2,
  },
  {
    label: "Team",
    href: "/admin/team",
    icon: UsersRound,
  },
  {
    label: "Activity",
    href: "/admin/activity",
    icon: Activity,
  },
  {
    label: "Messages",
    href: "/admin/message",
    icon: MessagesSquare,
    badge: "12",
  },
  {
    label: "Applications",
    href: "/admin/application",
    icon: FileUser,
    badge: "08",
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export function AdminSidebar({
  open = false,
  onClose,
}: DashboardSidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={[
        "fixed inset-y-0 left-0 z-50 flex w-64 flex-col",
        "border-r border-white/10 bg-[#07102A]",
        "transition-transform duration-300",
        open
          ? "translate-x-0"
          : "-translate-x-full lg:translate-x-0",
      ].join(" ")}
    >
      {/* Brand */}
      <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
        <Link
          href="/admin/dashboard"
          onClick={onClose}
          className="group"
        >
          <h1 className="text-lg font-bold tracking-tight text-white">
            ARINOVAA
            <span className="text-blue-400"> LABS</span>
          </h1>

          <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-500">
            Admin Console
          </p>
        </Link>

        {/* Mobile Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation"
          className="
            rounded-lg p-2 text-slate-500
            transition-colors
            hover:bg-white/5 hover:text-white
            lg:hidden
          "
        >
          <X size={18} />
        </button>
      </div>

      {/* Navigation */}
      <nav
        aria-label="Admin navigation"
        className="flex-1 overflow-y-auto px-3 py-6"
      >
        <p className="px-3 pb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
          Workspace
        </p>

        <div className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;

            const isActive =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "group relative flex w-full items-center gap-3 rounded-xl px-3 py-3",
                  "text-sm font-medium transition-colors duration-200",
                  isActive
                    ? "bg-blue-500/10 text-blue-400"
                    : "text-slate-500 hover:bg-white/5 hover:text-slate-200",
                ].join(" ")}
              >
                {/* Active indicator */}
                {isActive && (
                  <span className="absolute bottom-2 left-0 top-2 w-0.5 rounded-r-full bg-blue-400" />
                )}

                <Icon
                  size={18}
                  strokeWidth={isActive ? 2.2 : 1.8}
                  aria-hidden="true"
                  className={
                    isActive
                      ? "text-blue-400"
                      : "text-slate-600 transition-colors group-hover:text-slate-300"
                  }
                />

                <span>{item.label}</span>

                {item.badge && (
                  <span
                    className={[
                      "ml-auto min-w-6 rounded-full px-2 py-0.5 text-center text-[10px]",
                      isActive
                        ? "bg-blue-500/15 text-blue-300"
                        : "bg-white/5 text-slate-600",
                    ].join(" ")}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* System Status */}
      <div className="border-t border-white/10 p-4">
        <div className="rounded-2xl border border-blue-500/10 bg-blue-500/5 p-4">
          <div className="flex items-center gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
              <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
            </span>

            <div className="min-w-0">
              <p className="text-xs font-semibold text-white">
                System Secure
              </p>

              <p className="mt-0.5 truncate text-[10px] text-slate-600">
                All systems operational
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}