import React from "react";
import { Award, Rocket, Star } from "lucide-react";

const milestones = [
  {
    year: "2023",
    title: "Cloud Infrastructure Innovation Award",
    description:
      "Recognized by Global Tech Summit for our proprietary Kubernetes scaling engine.",
    icon: Award,
  },
  {
    year: "2021",
    title: "Top 50 Engineering Firms",
    description:
      "Awarded by CIO Outlook for excellence in digital transformation and AI integration.",
    icon: Star,
  },
  {
    year: "2019",
    title: "Series A Expansion",
    description:
      "Secured $25M in funding to scale our European and Asian research centers.",
    icon: Rocket,
  },
];

const testimonials = [
  {
    initials: "JB",
    name: "Julia Blackwood",
    role: "CTO, Vector Dynamics",
    quote:
      "Arinovaa didn't just solve us a product; they reconstructed our entire engineering culture. Their approach to dev-ops and automation is unparalleled.",
  },
  {
    initials: "MS",
    name: "Maria Solberg",
    role: "Director of Engineering, VeloMark",
    quote:
      "The technical precision Arinovaa Labs brings to the table is breathtaking. They solved performance bottlenecks our in-house team had struggled with for months in mere weeks.",
  },
  {
    initials: "RT",
    name: "Ray Toussaint",
    role: "Head of Cloud Strategy, DataSphere",
    quote:
      "Collaborating with Arinovaa is like hiring an elite special forces team for your code. They are disciplined, efficient, and exceptionally talented.",
  },
];

const Awards = () => {
  return (
    <section className="bg-[#030B2A] text-white">
      {/* Milestones */}
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold">Milestones of Excellence</h2>
          <p className="mt-2 text-sm text-slate-400">
            Our journey through technical milestones.
          </p>
        </div>

        <div className="space-y-6">
          {milestones.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.year}
                className="grid gap-4 md:grid-cols-[80px_1fr]"
              >
                <div className="pt-5 text-lg font-medium text-slate-500">
                  {item.year}
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-linear-to-r from-[#071332] to-[#0C173D] px-6 py-5">
                  <div>
                    <h3 className="font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      {item.description}
                    </p>
                  </div>

                  <div className="ml-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <Icon className="h-4 w-4 text-slate-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-[#101B45]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold">Validated by Leaders</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-white/10 bg-[#16224E] p-6 backdrop-blur-sm"
              >
                <div className="mb-4 flex gap-1 text-xs tracking-[4px] text-slate-300">
                  ★★★★★
                </div>

                <p className="min-h-30 text-sm italic leading-7 text-slate-300">
                  {item.quote}
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold">
                    {item.initials}
                  </div>

                  <div>
                    <h4 className="text-sm font-medium">{item.name}</h4>
                    <p className="text-xs text-slate-400">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;