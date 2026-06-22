import Image from "next/image";
import founder from "@/assets/images/founder.png";
import cto from "@/assets/images/cto.jpeg";

// Data.
const teamMembers = [
  {
    name: "Dravinanshu Mishra",
    role: "Founder & Chairman",
    expertise: [
      "Product Vision & Strategy",
      "Full-Stack Engineering",
      "Technology Leadership",
    ],
    image: founder,
  },
  {
    name: "Biplab Biswas",
    role: "Co-Founder & CEO",
    expertise: [
      "Business Strategy & Growth",
      "Enterprise Partnerships",
      "Operations Leadership",
    ],
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
  },
  {
    name: "Prashant Sharma",
    role: "Co-Founder & CTO",
    expertise: [
      "Software Architecture",
      "Engineering Excellence",
      "Innovation & Technology Strategy",
    ],
    image: cto,
  },
];

const stats = [
  {
    value: "50+",
    label: "Engineering Experts",
  },
  {
    value: "100+",
    label: "Projects Delivered",
  },
  {
    value: "15+",
    label: "Years Experience",
  },
  {
    value: "98%",
    label: "Client Retention",
  },
];

const leadershipQuotes = [
  {
    quote:
      "We don't build software for today. We engineer systems that remain scalable, secure, and adaptable for the next decade.",
    name: "Dravinanshu Mishra",
    designation: "Founder & Chairman",
    image: founder,
  },
  {
    quote:
      "True business growth comes from creating value, building trust, and delivering solutions that empower our clients to lead their industries.",
    name: "Biplab Biswas",
    designation: "Co-Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    quote:
      "Technology is most powerful when it is built on strong architecture, clean engineering principles, and a vision for long-term innovation.",
    name: "Prashant Sharma",
    designation: "Co-Founder & CTO",
    image: cto,
  },
];

const CoreTeam = () => {
  return (
    <section className="relative overflow-hidden bg-[#030B2A] py-24 text-white">
      {/* Background Effects */}
      <div className="absolute left-0 top-0 h-112.5 w-112.5 rounded-full bg-[#0E6AFA]/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-100 w-100 rounded-full bg-[#256CE8]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            Leadership Team
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Meet Our Core Team
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            A collective of engineers, architects, and innovators committed to
            building impactful digital products and future-ready technology
            solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-[#08112F]/80 p-8 text-center backdrop-blur-sm"
            >
              <h3 className="text-4xl font-bold text-[#0E6AFA]">
                {item.value}
              </h3>

              <p className="mt-3 text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#08112F]/80 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#0E6AFA]/40"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  width={500}
                  height={600}
                  className="h-95 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#08112F] via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">{member.name}</h3>

                <p className="mt-1 text-[#0E6AFA]">{member.role}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-[#0E6AFA]/10 px-3 py-1 text-xs font-medium text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Philosophy */}
        <div className="mt-24 rounded-3xl border border-white/10 bg-[#08112F]/80 p-10 backdrop-blur-sm">
          <span className="text-sm uppercase tracking-[0.25em] text-[#0E6AFA]">
            Our Philosophy
          </span>

          <h3 className="mt-4 text-3xl font-bold">
            Great software is built by great engineers, not just great
            technology.
          </h3>

          <p className="mt-6 max-w-4xl leading-8 text-slate-400">
            At Arinovaa Labs, every architect, engineer, and researcher shares
            responsibility for innovation, quality, and long-term scalability.
            We believe technology should be resilient, transparent, and
            human-centered.
          </p>
        </div>

        {/* Leadership Quotes */}
        <div className="mt-24">
          <h3 className="mb-10 text-center text-3xl font-bold">
            Voices of Leadership
          </h3>

          <div className="grid gap-6 lg:grid-cols-3">
            {leadershipQuotes.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-white/10 bg-linear-to-br from-[#08112F] to-[#10204F] p-8"
              >
                <span className="text-6xl font-bold leading-none text-[#0E6AFA]"></span>

                <p className="mt-4 min-h-45 italic leading-8 text-slate-300">
                  {item.quote}
                </p>

                <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-5">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={56}
                    height={56}
                    className="w-16 h-16 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-semibold">{item.name}</h4>

                    <p className="text-sm text-slate-400">{item.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 rounded-3xl border border-white/10 bg-linear-to-r from-[#08112F] to-[#10204F] p-10 text-center">
          <h3 className="text-3xl font-bold">Building the Future Together</h3>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-400">
            Our multidisciplinary team combines deep technical expertise,
            strategic thinking, and innovative problem-solving to help
            organizations thrive in a rapidly evolving digital landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;
