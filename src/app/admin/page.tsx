import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Admin() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020B3D]">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-blue-600/20 blur-[120px] sm:h-[500px] sm:w-[500px]" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px] sm:h-[500px] sm:w-[500px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 flex min-h-screen items-center py-16 lg:py-0">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-12 px-5 sm:px-6 lg:flex-row lg:items-center lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs text-blue-300 sm:text-sm">
              <ShieldCheck size={16} />
              Secure Admin Portal
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Welcome to
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Arinovaa Admin
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg lg:mx-0">
              Manage users, projects, blogs, services, inquiries and company
              operations from a secure centralized dashboard.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/admin/login"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 sm:px-8 sm:py-4"
              >
                Admin Login
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/"
                className="flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/50 px-6 py-3 font-semibold text-slate-200 transition hover:border-blue-500 sm:px-8 sm:py-4"
              >
                Back to Website
              </Link>
            </div>
          </div>

          {/* Right Dashboard Preview */}
          <div className="w-full flex-1">
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:rounded-[32px] sm:p-6 lg:p-8">
              {/* Browser Header */}
              <div className="mb-8 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>

                <div className="h-3 w-24 rounded-full bg-slate-700 sm:w-32" />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/5 bg-[#081A57] p-5">
                  <p className="text-sm text-slate-400">Projects</p>
                  <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    37+
                  </h3>
                </div>

                <div className="rounded-2xl border border-white/5 bg-[#081A57] p-5">
                  <p className="text-sm text-slate-400">Messages</p>
                  <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    124+
                  </h3>
                </div>
              </div>

              {/* Dashboard */}
              <div className="mt-6 rounded-2xl border border-white/5 bg-[#081A57] p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm text-slate-300">
                    System Performance
                  </span>
                  <span className="text-sm font-medium text-green-400">
                    99.9%
                  </span>
                </div>

                <div className="h-3 rounded-full bg-slate-700">
                  <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                </div>

                <div className="mt-8 flex items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/5 py-12 sm:py-16 lg:py-20">
                  <span className="text-center text-base font-medium text-slate-200 sm:text-lg">
                    System Access Authorized
                  </span>
                </div>
              </div>

              {/* Bottom Cards */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/5 bg-[#081A57] p-4">
                  <p className="text-xs text-slate-400">Clients</p>
                  <h4 className="mt-2 text-xl font-bold text-white">320+</h4>
                </div>

                <div className="rounded-xl border border-white/5 bg-[#081A57] p-4">
                  <p className="text-xs text-slate-400">Services</p>
                  <h4 className="mt-2 text-xl font-bold text-white">18+</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}