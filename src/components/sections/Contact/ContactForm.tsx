"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  type ContactFormData,
} from "@/validations/contactSchema";
import { createContact } from "@/lib/api/contactApi";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

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

  // submit form.
  const onSubmit = async (formData: ContactFormData) => {
    try {
      setLoading(true);

      const data = await createContact(formData);

      toast.success(data?.message || "Message sent successfully!");

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

  return (
    <div className="bg-[#1e2640] border border-white/10 rounded-xl p-6">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Name / Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Name */}
          <div className="flex flex-col gap-1">
            {/* Name */}
            <label htmlFor="name" className="text-xs text-gray-400">
              Name <span className="text-red-400">*</span>
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
              <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-xs text-gray-400">
              Email <span className="text-red-400">*</span>
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
            <label htmlFor="phone" className="text-xs text-gray-400">
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
            <label htmlFor="subject" className="text-xs text-gray-400">
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

        {/* Message */}
        <div className="flex flex-col gap-1 mb-6">
          <label htmlFor="message" className="text-xs text-gray-400">
            Message <span className="text-red-400">*</span>
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

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}

          {!loading && <ArrowRight size={15} />}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
