"use client";

import {
  Bell,
  ChevronDown,
  Menu,
} from "lucide-react";

type DashboardHeaderProps = {
  onMenuClick: () => void;
};

export function AdminHeader({
  onMenuClick,
}: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-white/10 bg-[#050B1D]/90 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open navigation"
          className="rounded-xl border border-white/10 p-2.5 text-slate-400 hover:bg-white/5 hover:text-white lg:hidden"
        >
          <Menu size={20} />
        </button>

        <div>
          <p className="text-xs text-slate-500">
            Welcome back,
          </p>

          <h2 className="text-sm font-semibold text-white sm:text-base">
            Dravinanshu Mishra
          </h2>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Search */}
        <button
          type="button"
          className="hidden items-center rounded-xl border border-white/10 bg-white/2.5 px-3 py-2 md:flex"
        >
          <span className="text-xs text-slate-600">
            Search anything...
          </span>

          <span className="ml-8 rounded border border-white/10 px-1.5 py-0.5 text-[9px] text-slate-600">
            ⌘ K
          </span>
        </button>

        {/* Notifications */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative rounded-xl border border-white/10 p-2.5 text-slate-500 transition-colors hover:bg-white/5 hover:text-white"
        >
          <Bell size={18} />

          <span className="absolute right-2 top-2 size-1.5 rounded-full bg-blue-400" />
        </button>

        {/* User */}
        <button
          type="button"
          className="flex items-center gap-2 rounded-xl border border-white/10 px-2 py-1.5 hover:bg-white/5"
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-indigo-600 text-xs font-bold">
            DM
          </span>

          <ChevronDown
            size={14}
            className="hidden text-slate-600 sm:block"
          />
        </button>
      </div>
    </header>
  );
}