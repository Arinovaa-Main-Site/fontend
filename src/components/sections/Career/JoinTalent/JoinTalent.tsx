"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function JoinTalent() {

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    interests: [] as string[],
  });

  const router = useRouter();


  const interests = ["Frontend", "Backend", "DevOps", "AI/ML", "Cloud"];


  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  const handleInterestChange = (interest: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
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

    if (form.interests.length === 0) {
      toast.error("Please select at least one area of interest");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:8080/api/v1/join-talent/create",
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
        throw new Error(data.message);
      }

      toast.success("Successfully joined the talent network!");

      setForm({
        fullName: "",
        email: "",
        interests: [],
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
    <section className="relative min-h-screen overflow-hidden bg-[#030d2b] flex items-center justify-center px-6 py-20">

      {/* Back Button */}
      <div className="absolute top-10 left-10 z-10">
        <button
          onClick={() => router.push("/career")}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          <ChevronLeft size={18} />
          <span className="font-medium">Back to Careers</span>
        </button>

      </div>

      {/* Left Glow */}
      <div className="absolute -right-62.5 top-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-blue-400/20 blur-[140px]" />

      {/* Right Glow */}
      <div className="absolute -right-62.5 top-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-white/15 blur-[150px]" />

      {/* Bottom Glow */}
      <div className="absolute -bottom-50 left-1/2 -translate-x-1/2 w-150h-75 bg-blue-500/20 blur-[180px]" />

      {/* Card */}
      <div className="relative w-full max-w-3xl rounded-3xl border border-white/10 bg-linear-to-br from-[#0d1837]/95 to-[#111b3f]/90 p-12 shadow-2xl">

        {/* Badge */}
        <div className="flex justify-center">
          <div className="rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2 text-[11px] uppercase tracking-[3px] text-blue-200">
            Engineering Network
          </div>
        </div>

        {/* Heading */}
        <div className="mt-8 text-center">
          <h1 className="text-5xl font-bold text-white leading-tight">
            Stay Connected with
            <br />
            Arinovaa Labs
          </h1>

          <p className="mt-5 text-gray-400 text-lg max-w-2xl mx-auto">
            Join our talent network to be the first to know about new
            engineering opportunities and company updates.
          </p>
        </div>

        {/* Form */}
        <div className="mt-12">

          {/* Inputs */}
          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="w-full rounded-xl border border-white/10 bg-[#172447]/60 px-4 py-3 text-white outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                className="w-full rounded-xl border border-white/10 bg-[#172447]/60 px-4 py-3 text-white outline-none transition focus:border-blue-500"
              />
            </div>

          </div>

          {/* Interest Section */}
          <div className="mt-10">
            <h3 className="mb-5 text-sm font-medium text-gray-300">
              Areas of Interest
            </h3>

            <div className="grid sm:grid-cols-3 gap-4">
              {interests.map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#172447]/60 px-4 py-4 cursor-pointer hover:border-blue-500 transition"
                >
                  <input
                    type="checkbox"
                    checked={form.interests.includes(item)}
                    onChange={() => handleInterestChange(item)}
                    className="h-4 w-4 accent-blue-500"
                  />
                  <span className="text-gray-300">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Button */}
          {/* <button className="mt-10 w-full rounded-xl bg-blue-600 py-4 font-medium text-white transition hover:bg-blue-700">
            Keep me updated →
          </button> */}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-10 w-full rounded-xl bg-blue-600 py-4 font-medium text-white transition hover:bg-blue-700 disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Submitting..." : "Keep me updated →"}
          </button>

          {/* Footer Text */}
          <p className="mt-5 text-center text-sm text-gray-500">
            By joining, you agree to our{" "}
            <span className="underline cursor-pointer">
              Privacy Policy
            </span>
            . We value your inbox.
          </p>

        </div>
      </div>
    </section>
  );
}