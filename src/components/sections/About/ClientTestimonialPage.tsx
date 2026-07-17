import Image from "next/image";
import { Quote, Star } from "lucide-react";
import ganesh from "@/assets/images/ganesh-dev.avif";
export const testimonials = [
  {
    id: 1,
    name: "John Anderson",
    designation: "CEO",
    company: "TechNova Inc.",
    country: "United States",
    image: ganesh,
    rating: 5,
    review:
      "Arinovaa Labs exceeded our expectations. Their team delivered a scalable platform with exceptional performance and excellent communication throughout the project.",
  },
  {
    id: 2,
    name: "Sophia Williams",
    designation: "Founder",
    company: "Growth Labs",
    country: "United Kingdom",
    image: ganesh,
    rating: 5,
    review:
      "Professional, reliable and highly skilled. We have worked together on multiple projects and the quality has always been outstanding.",
  },
  {
    id: 3,
    name: "Michael Brown",
    designation: "CTO",
    company: "Digital Edge",
    country: "Canada",
    image: ganesh,
    rating: 5,
    review:
      "Their engineering expertise and attention to detail helped us launch our SaaS platform ahead of schedule.",
  },
];

const ClientTestimonialPage = () => {
  return (
    <section className="relative overflow-hidden bg-[#07153F] py-24">
      <div className="absolute -left-40 top-0 h-112.5 w-112.5 rounded-full bg-blue-600/20 blur-[180px]" />

      <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm tracking-[0.2em] text-blue-300">
            CLIENT TESTIMONIALS
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Trusted by Clients
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            We build long-term partnerships by delivering high-quality software
            solutions that drive measurable business growth.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(37,99,235,.25)]"
            >
              <Quote className="h-10 w-10 text-blue-400" />

              <p className="mt-6 leading-8 text-slate-300">
                &ldquo;{item.review}&rdquo;
              </p>

              <div className="mt-8 flex">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="mr-1 h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-full border border-white/10 object-cover"
                />

                <div>
                  <h4 className="font-semibold text-white">{item.name}</h4>

                  <p className="text-sm text-slate-400">{item.designation}</p>

                  <p className="text-sm text-blue-300">
                    {item.company} • {item.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialPage;
