import Link from "next/link";
import { Star } from "lucide-react";
import Image from "next/image";
import { TestimonialItem } from "@/types/testimonalType";

// DATA HERE.
const testimonialsData: TestimonialItem[] = [];

const Testimonial = () => {
  return (
    <section className="bg-[#020B2D] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[#DCE4FF] md:text-5xl">
            Engineering Partner of Choice
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.length > 0 ? testimonialsData.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-white/10 bg-linear-to-br from-[#111D46] to-[#0C1638] p-6 transition-all duration-300 hover:border-blue-500/20"
            >
              {/* Stars */}
              <div className="mb-5 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-[#B7C5FF] text-[#B7C5FF]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="min-h-30 text-sm leading-7 text-[#B8C1E4] italic">
                {item.quote}
              </p>

              {/* User */}
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src={item.profile}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {item.name}
                  </h4>

                  <p className="text-xs text-[#8B96BF]">{item.role}</p>
                </div>
              </div>
            </div>
          )) : ""}
        </div>

        {/* CTA Section */}
        <div className="relative mt-24 overflow-hidden rounded-4xl border border-white/10 bg-linear-to-br from-[#121E48] to-[#0A1434] px-8 py-20 text-center">
          {/* Glow Effects */}
          <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <h3 className="text-4xl font-bold text-[#DCE4FF] md:text-5xl">
              Lets Build Something Amazing Together
            </h3>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#A8B4D8]">
              Ready to transform your technical vision into a scalable digital
              product? Our team is standing by.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700"
              >
                Contact Us
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-white/10 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
