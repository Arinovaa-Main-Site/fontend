"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, Diamond, Share2 } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {

    if (!form.name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!form.email.trim()) {
      toast.error("Please enter your email address");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!form.phone.trim()) {
      toast.error("Please enter your phone number");
      return;
    }

    if (!form.company.trim()) {
      toast.error("Please enter your company name");
      return;
    }

    if (!form.message.trim()) {
      toast.error("Please enter your message");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:8080/api/v1/contact-us/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      toast.success("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });

    } catch (error) {

      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen bg-[#171F33] text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
        {/* Label */}
        <p className="text-xs tracking-[0.18em] uppercase text-gray-400 mb-5">
          Contact Engineering
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 max-w-lg">
          Let&apos;s build the <span className="text-blue-400">future</span>
          <br />
          together.
        </h1>

        {/* Subheading */}
        <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-10">
          Have a complex technical challenge? Our team of engineers and digital
          transformation experts is ready to help you scale.
        </p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6">
          {/* Left — Contact Form */}
          <div className="bg-[#1e2640] border border-white/10 rounded-xl p-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Name */}
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-400">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  className="bg-[#141929] border border-white/10 rounded-md px-3 py-2 text-sm text-white placeholder-gray-600 outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-400">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={handleChange}
                  className="bg-[#141929] border border-white/10 rounded-md px-3 py-2 text-sm text-white placeholder-gray-600 outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              {/* Phone */}
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-400">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  value={form.phone}
                  onChange={handleChange}
                  className="bg-[#141929] border border-white/10 rounded-md px-3 py-2 text-sm text-white placeholder-gray-600 outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              {/* Company */}
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-400">Company</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Acme Inc."
                  value={form.company}
                  onChange={handleChange}
                  className="bg-[#141929] border border-white/10 rounded-md px-3 py-2 text-sm text-white placeholder-gray-600 outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1 mb-6">
              <label className="text-xs text-gray-400">Message</label>
              <textarea
                name="message"
                placeholder="Tell us about your project goals..."
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="bg-[#141929] border border-white/10 rounded-md px-3 py-2 text-sm text-white placeholder-gray-600 outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            {/* <button
              onClick={handleSubmit}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors cursor-pointer"
            >
              Send Message
              <ArrowRight size={15} />
            </button> */}

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors cursor-pointer"
            >
              {loading ? "Sending..." : "Send Message"}

              {!loading && <ArrowRight size={15} />}
            </button>

          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            {/* Reach out directly card */}
            <div className="bg-[#1e2640] border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-5">
                Reach out directly
              </h2>
              <div className="flex flex-col gap-5">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#141929] border border-white/10 flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-gray-400" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs text-gray-500">Email us</span>
                    <span className="text-sm text-white font-medium">
                      solutions@arinovaa.io
                    </span>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#141929] border border-white/10 flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-gray-400" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs text-gray-500">Call us</span>
                    <span className="text-sm text-white font-medium">
                      +1 (888) LABê-ARIN
                    </span>
                  </div>
                </div>
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#141929] border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-gray-400" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs text-gray-500">Visit our lab</span>
                    <span className="text-sm text-white font-medium leading-snug">
                      452 Tech Innovation Plaza,
                      <br />
                      San Francisco, CA 94103
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Support card */}
            <div className="bg-blue-600 rounded-xl p-6 relative overflow-hidden">
              {/* Decorative circle bottom-right */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-blue-500/40 pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-blue-500/20 pointer-events-none" />

              <h3 className="text-xl font-bold text-white mb-2">
                Technical Support
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-4 max-w-xs">
                Existing clients can access the engineering portal for 24/7
                technical assistance.
              </p>
              {/* <button className="flex items-center gap-1.5 text-white text-sm font-medium underline underline-offset-2 cursor-pointer bg-transparent">
                                Open Client Portal
                                <ArrowRight size={14} />
                            </button> */}
            </div>
          </div>
        </div>

        {/* ───── Global Headquarters ───── */}
        <div className="mt-16 max-w-8xl">
          {/* Header row */}
          <div className="flex items-start justify-between mb-5">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">
                Global Headquarters
              </h2>
              <p className="text-gray-400 text-sm">
                Located in the heart of the world&apos;s leading technology hub.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <button className="w-10 h-10 rounded-full bg-[#1e2640] border border-white/10 flex items-center justify-center hover:border-white/30 transition-colors cursor-pointer">
                <Diamond size={16} className="text-gray-400" />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#1e2640] border border-white/10 flex items-center justify-center hover:border-white/30 transition-colors cursor-pointer">
                <Share2 size={16} className="text-gray-400" />
              </button>
            </div>
          </div>

          {/* Map */}
          <div className="relative rounded-xl overflow-hidden h-80 md:h-105 bg-[#0d1220]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0867166060077!2d-122.41941568496826!3d37.77492797975948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858081b0cc63c7%3A0x9eba13d56a5a3d3d!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
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

            {/* Coordinates badge */}
            <div className="absolute bottom-5 left-5 bg-[#1a2035]/90 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3">
              <p className="text-xs tracking-[0.15em] uppercase text-gray-500 mb-1">
                Coordinates
              </p>
              <p className="text-white font-semibold text-base">
                37.7749° N, 122.4194° W
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
