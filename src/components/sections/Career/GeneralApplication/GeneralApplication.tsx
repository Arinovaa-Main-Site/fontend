"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";

export default function GeneralApplication() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedInUrl: "",
    portfolioUrl: "",
    primaryStack: "",
    yearsOfExperience: "",
    skills: [] as string[],
    bio: "",
  });

  const router = useRouter();

  const [resume, setResume] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!form.fullName.trim()) {
      toast.error("Please enter your full name");
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

    if (!form.primaryStack) {
      toast.error("Please select your technology stack");
      return;
    }

    if (!resume) {
      toast.error("Please upload your resume");
      return;
    }

    if (!form.bio.trim()) {
      toast.error("Please provide a short bio");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:8080/api/v1/applications/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...form,
            resume: {
              fileName: resume.name,
              fileSize: resume.size,
            },
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      toast.success("Application submitted successfully!");

      setForm({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        linkedInUrl: "",
        portfolioUrl: "",
        primaryStack: "",
        yearsOfExperience: "",
        skills: [],
        bio: "",
      });

      setResume(null);

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
    <section className="max-w-7xl bg-[#030d2b] mx-auto py-16 px-6">


      <button
        onClick={() => router.push("/career")}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
      >
        <ChevronLeft size={18} />
        <span className="font-medium">Back to Careers</span>
      </button>

      {/* Header */}
      <div className="text-center mb-10">

        <h1 className="text-5xl font-bold text-white">
          General Application
        </h1>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Don&apos;t see a role that fits? Tell us about your expertise and we&apos;ll
          reach out when the right opportunity arises. Join our talent collective.
        </p>
      </div>

      <div className="grid lg:grid-cols-[300px_1fr] gap-8">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          {/* Why Arinovaa */}
          <div className="bg-[#111827] border border-white/10 rounded-2xl p-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Arinovaa?
            </h2>

            <p className="text-gray-400 leading-8 mb-8">
              We are building the next generation of digital infrastructure.
              Our team prioritizes technical excellence, architectural integrity,
              and collaborative problem-solving.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-3 text-gray-300">
                ✓ Engineering-first culture
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                ✓ Complex technical challenges
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                ✓ Modern tech stack (Rust, Go, React)
              </div>
            </div>
          </div>

          {/* Image Card */}
          <div className="overflow-hidden rounded-2xl border border-white/10 relative">

            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPJqrd8gQvK9rtzMJ7B7IGNWB3n_xPa2skb1FmLIDxK7JeU55IMAfq1DEgAFwX-fZRJsPDGzXAkwCprdITTW_Cdl1kF3mS0RccTeCBohlR-wQnjqapOXoZdLlBd4qdsX1wRePdRNjv-CFWB77kHt5adVjE2E4j9czMDZhLgeiz_VsZHMXV95eDPeHWcXjIlX-C5-rRyKk1_cp9jxmxc2uARssu3XUDCKEo1dyYGd08KjoQTlHF2QhN4RDXYKOdS5QE4HyqdZNUlaRd"
              alt="Office"
              width={800}
              height={350}
              className=" w-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-[#030d2b] via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5">
              <p className="text-xs tracking-[3px] text-blue-300 uppercase">
                Office Culture
              </p>

              <h3 className="text-xl font-bold text-white">
                Built by engineers, for engineers.
              </h3>
            </div>

          </div>
        </div>

        <div className="space-y-8">
          {/* Personal Information */}
          <div className="bg-[#111827] border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8">
              Personal Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="bg-[#0B1220] border border-white/10 rounded-xl px-4 py-3 text-white outline-none"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="bg-[#0B1220] border border-white/10 rounded-xl px-4 py-3 text-white outline-none"
              />

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="bg-[#0B1220] border border-white/10 rounded-xl px-4 py-3 text-white outline-none"
              />

              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Location (City, Country)"
                className="bg-[#0B1220] border border-white/10 rounded-xl px-4 py-3 text-white outline-none"
              />

              <input
                type="text"
                name="linkedInUrl"
                value={form.linkedInUrl}
                onChange={handleChange}
                placeholder="LinkedIn URL"
                className="bg-[#0B1220] border border-white/10 rounded-xl px-4 py-3 text-white outline-none"
              />

              <input
                type="text"
                name="portfolioUrl"
                value={form.portfolioUrl}
                onChange={handleChange}
                placeholder="GitHub / Portfolio URL"
                className="bg-[#0B1220] border border-white/10 rounded-xl px-4 py-3 text-white outline-none"
              />
            </div>
          </div>

          {/* Professional Expertise */}
          <div className="bg-[#111827] border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8">
              Professional Expertise
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <select
                name="primaryStack"
                value={form.primaryStack}
                onChange={handleChange}
                className="bg-[#0B1220] border border-white/10 rounded-xl px-4 py-3 text-white">

                <option>Select Primary Technology Stack</option>
                <option>Frontend</option>
                <option>Backend</option>
                <option>Full Stack</option>
                <option>DevOps</option>
                <option>AI / ML</option>
              </select>

              <input
                type="number"
                name="yearsOfExperience"
                value={form.yearsOfExperience}
                onChange={handleChange}
                placeholder="Years of Experience"
                className="bg-[#0B1220] border border-white/10 rounded-xl px-4 py-3 text-white outline-none"
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {["React", "Node.js", "TypeScript", "Next.js", "Python"].map(
                (skill) => (
                  <button
                    type="button"
                    key={skill}
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        skills: prev.skills.includes(skill)
                          ? prev.skills.filter((s) => s !== skill)
                          : [...prev.skills, skill],
                      }))
                    }
                    className={`px-4 py-2 rounded-full border ${form.skills.includes(skill)
                      ? "bg-blue-600 border-blue-600"
                      : "bg-[#0B1220] border-white/10"
                      } text-gray-300`}
                  >
                    {skill}
                  </button>
                )
              )}
            </div>
          </div>


          <div className="bg-[#111827] border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8">
              Resume / CV
            </h2>

            <div className="relative h-56 border-2 border-dashed border-white/20 rounded-2xl hover:border-blue-500 transition-colors cursor-pointer flex flex-col items-center justify-center text-center px-6">

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    setResume(e.target.files[0]);
                  }
                }}
              />

              {resume ? (
                <>
                  <svg
                    className="w-12 h-12 text-green-500 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <p className="text-white font-medium">
                    {resume.name}
                  </p>

                  <p className="mt-2 text-sm text-gray-400">
                    {(resume.size / 1024).toFixed(2)} KB
                  </p>
                </>
              ) : (
                <>
                  <svg
                    className="w-12 h-12 text-gray-400 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>

                  <p className="text-white font-medium">
                    Drag and drop your resume or browse files
                  </p>

                  <p className="mt-2 text-sm text-gray-400">
                    PDF, DOC, DOCX up to 30MB
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Brief Bio */}
          <div className="bg-[#111827] border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8">
              Brief Bio & Interests
            </h2>

            <textarea
              rows={6}
              name="bio"
              value={form.bio}
              onChange={handleChange}
              placeholder="Describe your technical journey, interests, and the type of roles you're looking for..."
              className="w-full bg-[#0B1220] border border-white/10 rounded-xl px-4 py-4 text-white resize-none outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            {/* <button className="px-10 py-3 cursor-pointer rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition">
              Submit Application →
            </button> */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="px-10 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium transition cursor-pointer"
            >
              {loading ? "Submitting..." : "Submit Application →"}
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}