"use client";

import { useState } from "react";
import {
  ArrowRight,
  Diamond,
  Mail,
  MapPin,
  Phone,
  Share2,
} from "lucide-react";
import { FaCalendarAlt } from "react-icons/fa";
import { toast } from "sonner";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

/* =========================================================
   Validation Schema
========================================================= */

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters"),

  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .trim()
    .min(7, "Phone number must be at least 7 characters")
    .max(20, "Phone number must not exceed 20 characters"),

  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters")
    .max(150, "Subject must not exceed 150 characters"),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must not exceed 2000 characters"),
});

/* =========================================================
   Form Type
========================================================= */

type ContactFormData = z.infer<typeof contactSchema>;

/* =========================================================
   Component
========================================================= */

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  /* =======================================================
     React Hook Form
  ======================================================= */

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),

    mode: "onBlur",

    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  /* =======================================================
     Submit Handler
  ======================================================= */

  const onSubmit = async (formData: ContactFormData) => {
    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:8080/api/v1/contact-us/create",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message ||
            data?.error ||
            "Unable to send your message. Please try again.",
        );
      }

      toast.success(
        data?.message || "Message sent successfully!",
      );

      /* Reset form after successful submission */
      reset();
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  /* =======================================================
     UI
  ======================================================= */

  return (
    <div className="min-h-screen bg-[#171F33] text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
        {/* =================================================
            Header
        ================================================= */}

        <p className="text-xs tracking-[0.18em] uppercase text-gray-400 mb-5">
          Contact Engineering
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 max-w-lg">
          Let&apos;s build the{" "}
          <span className="text-blue-400">future</span>
          <br />
          together.
        </h1>

        <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-10">
          Have a complex technical challenge? Our team of engineers and
          digital transformation experts is ready to help you scale.
        </p>

        {/* =================================================
            Main Grid
        ================================================= */}

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6">
          {/* =================================================
              Contact Form
          ================================================= */}

          <div className="bg-[#1e2640] border border-white/10 rounded-xl p-6">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              {/* =================================================
                  Name / Email
              ================================================= */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Name */}

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="name"
                    className="text-xs text-gray-400"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    autoComplete="name"
                    {...register("name")}
                    className={`bg-[#141929] border rounded-md px-3 py-2 text-sm text-white placeholder-gray-600 outline-none transition-colors ${
                      errors.name
                        ? "border-red-500 focus:border-red-500"
                        : "border-white/10 focus:border-blue-500"
                    }`}
                  />

                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className="text-xs text-gray-400"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    autoComplete="email"
                    {...register("email")}
                    className={`bg-[#141929] border rounded-md px-3 py-2 text-sm text-white placeholder-gray-600 outline-none transition-colors ${
                      errors.email
                        ? "border-red-500 focus:border-red-500"
                        : "border-white/10 focus:border-blue-500"
                    }`}
                  />

                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="phone"
                    className="text-xs text-gray-400"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                    {...register("phone")}
                    className={`bg-[#141929] border rounded-md px-3 py-2 text-sm text-white placeholder-gray-600 outline-none transition-colors ${
                      errors.phone
                        ? "border-red-500 focus:border-red-500"
                        : "border-white/10 focus:border-blue-500"
                    }`}
                  />

                  {errors.phone && (
                    <p className="text-xs text-red-400 mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Subject */}

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="subject"
                    className="text-xs text-gray-400"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    placeholder="Project Inquiry"
                    {...register("subject")}
                    className={`bg-[#141929] border rounded-md px-3 py-2 text-sm text-white placeholder-gray-600 outline-none transition-colors ${
                      errors.subject
                        ? "border-red-500 focus:border-red-500"
                        : "border-white/10 focus:border-blue-500"
                    }`}
                  />

                  {errors.subject && (
                    <p className="text-xs text-red-400 mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
              </div>

              {/* =================================================
                  Message
              ================================================= */}

              <div className="flex flex-col gap-1 mb-6">
                <label
                  htmlFor="message"
                  className="text-xs text-gray-400"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  placeholder="Tell us about your project goals..."
                  rows={5}
                  {...register("message")}
                  className={`bg-[#141929] border rounded-md px-3 py-2 text-sm text-white placeholder-gray-600 outline-none transition-colors resize-none ${
                    errors.message
                      ? "border-red-500 focus:border-red-500"
                      : "border-white/10 focus:border-blue-500"
                  }`}
                />

                {errors.message && (
                  <p className="text-xs text-red-400 mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* =================================================
                  Submit Button
              ================================================= */}

              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors cursor-pointer"
              >
                {loading ? "Sending..." : "Send Message"}

                {!loading && <ArrowRight size={15} />}
              </button>
            </form>
          </div>

          {/* =================================================
              Right Column
          ================================================= */}

          <div className="flex flex-col gap-4">
            {/* =================================================
                Reach Out Directly
            ================================================= */}

            <div className="bg-[#1e2640] border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-5">
                Reach out directly
              </h2>

              <div className="flex flex-col gap-5">
                {/* Email */}

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#141929] border border-white/10 flex items-center justify-center shrink-0">
                    <Mail
                      size={16}
                      className="text-gray-400"
                    />
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs text-gray-500">
                      Email us
                    </span>

                    <span className="text-sm text-white font-medium">
                      info@arinovaa.com
                    </span>
                  </div>
                </div>

                {/* Phone */}

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#141929] border border-white/10 flex items-center justify-center shrink-0">
                    <Phone
                      size={16}
                      className="text-gray-400"
                    />
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs text-gray-500">
                      Call us
                    </span>

                    <span className="text-sm text-white font-medium">
                      +91 63772 45313
                    </span>
                  </div>
                </div>

                {/* Address */}

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#141929] border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin
                      size={16}
                      className="text-gray-400"
                    />
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs text-gray-500">
                      Registered Office
                    </span>

                    <span className="text-sm text-white font-medium leading-snug">
                      Udaipur Rajasthan, India 313002
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                Technical Support
            ================================================= */}

            <div className="bg-blue-600 rounded-xl p-6 relative overflow-hidden">
              {/* Decorative circles */}

              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-blue-500/40 pointer-events-none" />

              <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-blue-500/20 pointer-events-none" />

              <h3 className="text-xl font-bold text-white mb-2">
                Technical Support
              </h3>

              <p className="text-blue-100 text-sm leading-relaxed mb-4 max-w-xs">
                Existing clients can access the engineering portal for
                24/7 technical assistance.
              </p>
            </div>
          </div>
        </div>

        {/* =================================================
            CTA Section
        ================================================= */}

        <section className="max-w-7xl mx-auto mt-10">
          <div className="border border-white/10 rounded-2xl px-8 py-20 flex flex-col items-center text-center bg-linear-to-br from-[#141929] via-[#0f1628] to-[#0d1221]">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 max-w-7xl leading-tight">
              Let&apos;s Talk About Your Project and How We Can
              Help You Achieve Your Goals
            </h2>

            <div className="flex items-center gap-4 flex-wrap justify-center">
              {/* Schedule Call */}

              <Link
                href="https://cal.id/arinovaa-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 transition hover:bg-white/10 flex items-center gap-2"
              >
                <FaCalendarAlt />

                Schedule a Call at Your Convenience
              </Link>

              {/* Career */}

              <Link
                href="/career"
                className="px-8 py-3.5 rounded-lg border border-white/20 hover:border-white/40 text-white text-sm font-medium transition-colors bg-transparent"
              >
                Explore Career Openings
              </Link>
            </div>
          </div>
        </section>

        {/* =================================================
            Registered Office / Map
        ================================================= */}

        <div className="mt-16 max-w-8xl">
          {/* Header */}

          <div className="flex items-start justify-between mb-5">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">
                Registered Office
              </h2>

              <p className="text-gray-400 text-sm">
                Udaipur, Rajasthan.
              </p>
            </div>

            {/* Actions */}

            <div className="flex items-center gap-2 mt-1">
              <button
                type="button"
                className="w-10 h-10 rounded-full bg-[#1e2640] border border-white/10 flex items-center justify-center hover:border-white/30 transition-colors cursor-pointer"
              >
                <Diamond
                  size={16}
                  className="text-gray-400"
                />
              </button>

              <button
                type="button"
                className="w-10 h-10 rounded-full bg-[#1e2640] border border-white/10 flex items-center justify-center hover:border-white/30 transition-colors cursor-pointer"
              >
                <Share2
                  size={16}
                  className="text-gray-400"
                />
              </button>
            </div>
          </div>

          {/* Map */}

          <div className="relative rounded-xl overflow-hidden h-80 md:h-105 bg-[#0d1220]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58039.146365786844!2d73.7048721!3d24.6082862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56550a14411%3A0xdbd8c28455b868b0!2sUdaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1782803685741!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter:
                  "invert(90%) hue-rotate(180deg) brightness(0.75) contrast(1.1) saturate(0.3)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Coordinates */}

            <div className="absolute bottom-5 left-5 bg-[#1a2035]/90 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3">
              <p className="text-xs tracking-[0.15em] uppercase text-gray-500 mb-1">
                Coordinates
              </p>

              <p className="text-white font-semibold text-base">
                24.5854° N, 73.7125° E
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}