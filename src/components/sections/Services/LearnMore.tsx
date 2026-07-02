"use client";
import { notFound } from "next/navigation";

import { servicesData } from "@/constants/servicesData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { ChevronDown, ChevronUp, ChevronLeft } from "lucide-react";

export default function LearnMore({ slug }: { slug: string }) {
  const service = useMemo(
    () => servicesData.find((item) => item.slug === slug),
    [slug],
  );
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const router = useRouter();

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="bg-[#020F34] py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Back */}
          <button
            onClick={() => router.push("/services")}
            className="mb-8 flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-blue-600"
          >
            <ChevronLeft size={18} />
            Back to Services
          </button>

          {/* Main Content */}
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Left */}
            <div>
              {/* Badge */}
              <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium uppercase tracking-widest text-blue-300">
                {service.title}
              </span>

              {/* Heading */}
              <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
                {service.title}
              </h1>

              {/* Short Description */}
              <p className="mt-6 text-xl leading-8 text-slate-300">
                {service.shortDescription}
              </p>

              {/* Description */}
              <p className="mt-6 leading-8 text-slate-400">
                {service.description}
              </p>

              {/* Technologies */}
              <div className="mt-10">
                <h3 className="mb-4 text-xl font-semibold text-white">
                  Technologies We Use
                </h3>

                <div className="flex flex-wrap gap-3">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-10">
                <h3 className="mb-4 text-xl font-semibold text-white">
                  Key Benefits
                </h3>

                <div className="grid gap-3 sm:grid-cols-2">
                  {service.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />

                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Development Process */}
              <div className="mt-10">
                <h3 className="mb-4 text-xl font-semibold text-white">
                  Development Process
                </h3>

                <div className="space-y-3">
                  {service.process.map((step, index) => (
                    <div
                      key={step}
                      className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-blue-500/30"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                        {index + 1}
                      </div>

                      <span className="text-slate-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industries */}
              <div className="mt-10">
                <h3 className="mb-4 text-xl font-semibold text-white">
                  Industries We Serve
                </h3>

                <div className="flex flex-wrap gap-3">
                  {service.industries.map((industry) => (
                    <span
                      key={industry}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-slate-300"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 flex flex-wrap gap-4">
                <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                  Get Started
                </button>

                <button className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right */}
            <div className="sticky top-28">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  width={1400}
                  height={900}
                  className="h-150 w-full rounded-2xl object-cover"
                />
              </div>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                  <h4 className="text-3xl font-bold text-white">
                    {service.technologies.length}
                  </h4>
                  <p className="mt-1 text-sm text-slate-400">Technologies</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                  <h4 className="text-3xl font-bold text-white">
                    {service.process.length}
                  </h4>
                  <p className="mt-1 text-sm text-slate-400">Process</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                  <h4 className="text-3xl font-bold text-white">
                    {service.industries.length}
                  </h4>
                  <p className="mt-1 text-sm text-slate-400">Industries</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-white">
              Frequently Asked Questions
            </h2>

            <div className="mt-8 space-y-4">
              {service.faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl border border-white/10 bg-white/5"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-white/5"
                    >
                      <h3 className="text-lg font-semibold text-white">
                        {faq.question}
                      </h3>

                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-blue-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-blue-400" />
                      )}
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 text-gray-300 leading-7">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
