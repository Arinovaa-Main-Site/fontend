import {
  Bell,
  Building2,
  Check,
  ChevronRight,
  Globe2,
  LockKeyhole,
  Mail,
  Save,
  ShieldCheck,
  User,
} from "lucide-react";

type SettingSection = {
  title: string;
  description: string;
  icon: typeof User;
};

const settingSections: SettingSection[] = [
  {
    title: "Profile",
    description: "Manage your personal admin profile.",
    icon: User,
  },
  {
    title: "Company",
    description: "Update Arinovaa Labs company information.",
    icon: Building2,
  },
  {
    title: "Notifications",
    description: "Control email and system notifications.",
    icon: Bell,
  },
  {
    title: "Security",
    description: "Manage password and account security.",
    icon: ShieldCheck,
  },
];

function SectionIcon({ icon: Icon }: { icon: typeof User }) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
      <Icon size={18} />
    </div>
  );
}

function Toggle({
  enabled,
  label,
}: {
  enabled: boolean;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-slate-500">{label}</span>

      <div
        role="switch"
        aria-checked={enabled}
        className={[
          "relative h-5 w-9 rounded-full border transition-colors",
          enabled
            ? "border-blue-500/40 bg-blue-500"
            : "border-white/10 bg-white/5",
        ].join(" ")}
      >
        <span
          className={[
            "absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform",
            enabled ? "translate-x-4" : "translate-x-0.5",
          ].join(" ")}
        />
      </div>
    </div>
  );
}

export default function Settings() {
  return (
    <section className="min-h-screen bg-[#050B1D] px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-blue-400">
            <Globe2 size={14} />
            <span>ADMIN CONFIGURATION</span>
          </div>

          <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Settings
          </h1>

          <p className="mt-1 max-w-2xl text-sm text-slate-500">
            Manage your Arinovaa Labs admin account, company preferences and
            security settings.
          </p>
        </div>

        {/* Settings navigation */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {settingSections.map((section) => {
            const Icon = section.icon;

            return (
              <button
                key={section.title}
                type="button"
                className="
                  group flex items-center gap-3 rounded-2xl
                  border border-white/10 bg-white/[0.025]
                  p-4 text-left
                  transition-colors duration-200
                  hover:border-blue-500/20 hover:bg-white/[0.04]
                "
              >
                <SectionIcon icon={Icon} />

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-white">
                    {section.title}
                  </p>

                  <p className="mt-0.5 truncate text-xs text-slate-600">
                    {section.description}
                  </p>
                </div>

                <ChevronRight
                  size={15}
                  className="shrink-0 text-slate-700 transition-transform group-hover:translate-x-0.5 group-hover:text-slate-400"
                />
              </button>
            );
          })}
        </div>

        {/* Main settings */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          {/* Left */}
          <div className="space-y-6">
            {/* Profile */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.025]">
              <div className="border-b border-white/10 p-5 sm:p-6">
                <h2 className="text-base font-semibold">Profile Settings</h2>
                <p className="mt-1 text-xs text-slate-600">
                  Update the information associated with your admin account.
                </p>
              </div>

              <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6">
                <label className="block">
                  <span className="text-xs font-medium text-slate-400">
                    Full Name
                  </span>

                  <input
                    type="text"
                    defaultValue="Dravinanshu Mishra"
                    className="
                      mt-2 h-11 w-full rounded-xl
                      border border-white/10 bg-black/10
                      px-3 text-sm text-white
                      outline-none placeholder:text-slate-700
                      focus:border-blue-500/40
                    "
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-medium text-slate-400">
                    Email Address
                  </span>

                  <div className="relative">
                    <Mail
                      size={15}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600"
                    />

                    <input
                      type="email"
                      defaultValue="info@arinovaa.com"
                      className="
                        mt-2 h-11 w-full rounded-xl
                        border border-white/10 bg-black/10
                        pl-9 pr-3 text-sm text-white
                        outline-none
                        focus:border-blue-500/40
                      "
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="text-xs font-medium text-slate-400">
                    Role
                  </span>

                  <input
                    type="text"
                    defaultValue="Founder & Chairman"
                    disabled
                    className="
                      mt-2 h-11 w-full rounded-xl
                      border border-white/10 bg-white/[0.02]
                      px-3 text-sm text-slate-500
                      outline-none
                    "
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-medium text-slate-400">
                    Department
                  </span>

                  <input
                    type="text"
                    defaultValue="Leadership"
                    disabled
                    className="
                      mt-2 h-11 w-full rounded-xl
                      border border-white/10 bg-white/[0.02]
                      px-3 text-sm text-slate-500
                      outline-none
                    "
                  />
                </label>
              </div>

              <div className="flex justify-end border-t border-white/10 p-4 sm:p-5">
                <button
                  type="button"
                  className="
                    inline-flex items-center gap-2 rounded-xl
                    bg-blue-500 px-4 py-2.5
                    text-xs font-semibold text-white
                    transition-colors hover:bg-blue-400
                  "
                >
                  <Save size={14} />
                  Save Changes
                </button>
              </div>
            </div>

            {/* Company */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.025]">
              <div className="border-b border-white/10 p-5 sm:p-6">
                <h2 className="text-base font-semibold">Company Settings</h2>
                <p className="mt-1 text-xs text-slate-600">
                  Basic information displayed across your admin workspace.
                </p>
              </div>

              <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6">
                <label className="block sm:col-span-2">
                  <span className="text-xs font-medium text-slate-400">
                    Company Name
                  </span>

                  <input
                    type="text"
                    defaultValue="Arinovaa Labs"
                    className="
                      mt-2 h-11 w-full rounded-xl
                      border border-white/10 bg-black/10
                      px-3 text-sm text-white
                      outline-none
                      focus:border-blue-500/40
                    "
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-medium text-slate-400">
                    Website
                  </span>

                  <input
                    type="text"
                    defaultValue="arinovaa.com"
                    className="
                      mt-2 h-11 w-full rounded-xl
                      border border-white/10 bg-black/10
                      px-3 text-sm text-white
                      outline-none
                      focus:border-blue-500/40
                    "
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-medium text-slate-400">
                    Location
                  </span>

                  <input
                    type="text"
                    defaultValue="India"
                    className="
                      mt-2 h-11 w-full rounded-xl
                      border border-white/10 bg-black/10
                      px-3 text-sm text-white
                      outline-none
                      focus:border-blue-500/40
                    "
                  />
                </label>
              </div>
            </div>

            {/* Notifications */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.025]">
              <div className="border-b border-white/10 p-5 sm:p-6">
                <h2 className="text-base font-semibold">
                  Notification Preferences
                </h2>

                <p className="mt-1 text-xs text-slate-600">
                  Choose which updates you want to receive.
                </p>
              </div>

              <div className="divide-y divide-white/5">
                <div className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <p className="text-sm font-medium">Project Updates</p>
                    <p className="mt-1 text-xs text-slate-600">
                      Receive notifications when project status changes.
                    </p>
                  </div>

                  <Toggle enabled label="" />
                </div>

                <div className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <p className="text-sm font-medium">Client Activity</p>
                    <p className="mt-1 text-xs text-slate-600">
                      Get notified about important client activity.
                    </p>
                  </div>

                  <Toggle enabled label="" />
                </div>

                <div className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <p className="text-sm font-medium">Payment Alerts</p>
                    <p className="mt-1 text-xs text-slate-600">
                      Receive alerts for invoices and payments.
                    </p>
                  </div>

                  <Toggle enabled label="" />
                </div>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <aside className="space-y-6">
            {/* Security */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                  <LockKeyhole size={18} />
                </div>

                <div>
                  <h2 className="text-sm font-semibold">Security</h2>
                  <p className="text-xs text-slate-600">
                    Account protection
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-medium">Two-factor auth</p>
                    <p className="mt-1 text-[11px] text-slate-600">
                      Extra account protection
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-[10px] font-medium text-emerald-400">
                    <Check size={11} />
                    Enabled
                  </span>
                </div>

                <div className="h-px bg-white/5" />

                <button
                  type="button"
                  className="
                    w-full rounded-xl border border-white/10
                    px-3 py-2.5 text-left text-xs
                    text-slate-400 transition-colors
                    hover:border-blue-500/20
                    hover:bg-white/[0.02]
                    hover:text-white
                  "
                >
                  Change Password
                </button>
              </div>
            </div>

            {/* Admin account */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-sm font-bold text-blue-400">
                  DM
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">
                    Dravinanshu Mishra
                  </p>
                  <p className="truncate text-xs text-slate-600">
                    Administrator
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3 border-t border-white/10 pt-4">
                <div className="flex justify-between gap-4 text-xs">
                  <span className="text-slate-600">Account</span>
                  <span className="text-emerald-400">Active</span>
                </div>

                <div className="flex justify-between gap-4 text-xs">
                  <span className="text-slate-600">Access</span>
                  <span className="text-slate-400">Full Admin</span>
                </div>

                <div className="flex justify-between gap-4 text-xs">
                  <span className="text-slate-600">Version</span>
                  <span className="font-mono text-slate-500">v1.0.0</span>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Footer */}
        <div className="border-t border-white/5 pt-5">
          <div className="flex flex-col gap-2 text-xs text-slate-700 sm:flex-row sm:items-center sm:justify-between">
            <span>Arinovaa Labs Admin Panel</span>
            <span>All settings are securely managed.</span>
          </div>
        </div>
      </div>
    </section>
  );
}