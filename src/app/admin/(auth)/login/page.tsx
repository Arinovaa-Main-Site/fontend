"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  ShieldCheck,
} from "lucide-react";

type LoginFormData = {
  email: string;
  password: string;
};

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert("Login Successful");
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020B3D] px-5 py-10">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[60px_60px]" />

      {/* Glow Effects */}
      <div className="absolute left-0 top-0 h-87.5 w-87.5 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-87.5 w-87.5 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 w-full max-w-lg">
        {/* Back Button */}
        <Link
          href="/admin"
          className="mb-6 inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Admin Portal
        </Link>

        {/* Card */}
        <div className="rounded-4xl border border-white/10 bg-white/4 p-8  sm:p-10">
          {/* Logo */}

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white sm:text-4xl">
              Welcome Back
            </h1>

            <p className="mt-3 text-slate-400">
              Sign in to access the Admin Dashboard
            </p>

            <div className="mt-5 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs font-medium text-green-400">
                <ShieldCheck size={14} />
                Secure Authentication
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="email"
                  placeholder="admin@arinovaa.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Enter a valid email address",
                    },
                  })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/50 py-3 pl-11 pr-4 text-white outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
                />
              </div>

              {errors.email && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/50 py-3 pl-11 pr-12 text-white outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {errors.password && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-slate-300">
                <input type="checkbox" className="rounded border-slate-600" />
                Remember me
              </label>

              <Link
                href="/admin/forget-password"
                className="text-sm text-blue-400 transition hover:text-blue-300"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full overflow-hidden rounded-xl bg-blue-600 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <span className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span className="relative flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
