import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Quote, Sparkles, Star } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import founder from "@/assets/images/founder.png";
import cto from "@/assets/images/cto.jpeg";
import ganesh from "@/assets/images/ganesh-dev.avif";
import { QuoteType, Stat, TeamMember } from "@/types/coreTeamTypes";
import { FaCalendarAlt } from "react-icons/fa";

// STATES DATA.
const stats: Stat[] = [
  {
    value: "10+",
    label: "Projects Delivered",
  },
  {
    value: "3+",
    label: "Global Clients",
  },
  {
    value: "4+",
    label: "Technology Experts",
  },
  {
    value: "98%",
    label: "Client Retention",
  },
];

// FOUNDERS AND CO-FOUNDERS.
const teamMembers: TeamMember[] = [
  {
    name: "Dravinanshu Mishra",
    role: "Founder & Chairman",
    bio: "Visionary entrepreneur focused on building scalable digital products and empowering businesses through innovative technology.",
    experience: "3+ Years",
    image: founder,
    linkedin: "https://www.linkedin.com/in/dravinanshu-mishra-0909b430b",
    github: "https://github.com/dravinanshuMishra",
    email: "mailto:info@arinovaa.com",
    expertise: [
      "Product Strategy",
      "Full Stack Development",
      "AI Solutions",
      "Cloud Architecture",
    ],
  },
  {
    name: "Biplab Biswas",
    role: "Co-Founder & CEO",
    bio: "Driving business growth through strategic partnerships, enterprise transformation, and customer-centric innovation.",
    experience: "3+ Years",
    image: ganesh,
    linkedin: "#",
    email: "mailto:info@arinovaa.com",
    expertise: [
      "Business Strategy",
      "Leadership",
      "Operations",
      "Enterprise Sales",
    ],
  },
  {
    name: "Prashant Sharma",
    role: "Co-Founder & CTO",
    bio: "Technology architect passionate about designing secure, scalable, and future-ready enterprise platforms.",
    experience: "20+ Years",
    image: cto,
    linkedin: "http://www.linkedin.com/in/prashant-sharma-ab9b9a30",
    github: "#",
    email: "mailto:info@arinovaa.com",
    expertise: [
      "Software Architecture",
      ".NET",
      "Cloud Infrastructure",
      "Engineering Leadership",
      "DBMS"
    ],
  },
];

// OUR CORE DEVELOPERS TEAMS.
const developers: TeamMember[] = [
  {
    name: "Ganesh Menaria",
    role: "Senior Full Stack Developer",
    bio: "Expert in building enterprise-grade web applications using React, Next.js, Node.js, and Laravel.",
    experience: "15+ Years",
    image: ganesh,
    expertise: ["Next.js", "React", "Laravel", "TypeScript", "WordPress"],
  },
];

// TOP LEADERSHIP VOICES.
const leadershipQuotes: QuoteType[] = [
  {
    quote:
      "Arinovaa is a name inspired by the ideas of Innovation, the Future, and Growth. It represents our commitment to creating forward-thinking digital solutions that help businesses evolve, scale, and stay ahead in a rapidly changing world.",
    name: "Dravinanshu Mishra",
    designation: "Founder & Chairman",
    image: founder,
  },
  {
    quote:
      "Success comes from combining innovation, execution, and trust. That's the culture we build every day.",
    name: "Biplab Biswas",
    designation: "Co-Founder & CEO",
    image: ganesh,
  },
  {
    quote:
      "Our greatest measure of success is our clients' satisfaction. We are committed to going above and beyond to ensure customer satisfaction at every opportunity, because their success is our success.",
    name: "Prashant Sharma",
    designation: "Co-Founder & CTO",
    image: cto,
  },
];

const CoreTeam = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-[#020B2D] py-28 text-white">
        <div className="absolute left-0 top-0 h-112.5 w-112.5 rounded-full bg-blue-600/10 blur-[160px]" />
        <div className="absolute right-0 bottom-0 h-100 w-100 rounded-full bg-sky-500/10 blur-[160px]" />
        <div className="relative mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm text-blue-300">
              <Sparkles size={16} />
              Leadership Team
            </span>

            <h2 className="mt-8 text-5xl font-bold leading-tight">
              Meet The People Behind
              <span className="block text-[#0E6AFA]">Arinovaa Labs</span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Our team combines engineering excellence, strategic thinking, and
              innovation to deliver scalable digital products for startups,
              enterprises, and global organizations.
            </p>
          </div>

          {/* ================= Statistics ================= */}
          <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#0E6AFA]/40 hover:bg-white/10"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#0E6AFA]/10 blur-3xl transition-all duration-500 group-hover:scale-150" />

                <h3 className="relative text-5xl font-bold text-[#0E6AFA]">
                  {item.value}
                </h3>

                <p className="relative mt-4 text-sm uppercase tracking-wider text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* ================= Leadership ================= */}
          <div className="mt-32">
            <div className="mb-14 text-center">
              <h3 className="text-4xl font-bold">Leadership Team</h3>

              <p className="mx-auto mt-5 max-w-3xl text-slate-400">
                Meet the leaders driving innovation, engineering excellence, and
                long-term product vision at Arinovaa Labs.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {teamMembers.map((member) => (
                <article
                  key={member.name}
                  className="group overflow-hidden rounded-[30px] border border-white/10 bg-linear-to-br from-[#08112F] to-[#10204F] transition-all duration-500 hover:-translate-y-3 hover:border-[#0E6AFA]/40"
                >
                  {/* Image */}

                  <div className="relative overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={600}
                      height={700}
                      className="h-105 w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-[#020B2D] via-transparent to-transparent" />

                    <span className="absolute left-5 top-5 rounded-full bg-[#0E6AFA] px-4 py-2 text-xs font-semibold">
                      {member.experience}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <h3 className="text-2xl font-bold">{member.name}</h3>

                    <p className="mt-2 font-medium text-[#0E6AFA]">
                      {member.role}
                    </p>

                    <p className="mt-5 leading-7 text-slate-400">
                      {member.bio}
                    </p>

                    {/* Expertise */}

                    <div className="mt-6 flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-[#0E6AFA]/20 bg-[#0E6AFA]/10 px-3 py-1 text-xs font-medium text-blue-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Social */}

                    <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                      <div className="flex gap-3">
                        <a
                          href={member.linkedin || "#"}
                          target="_blank"
                          className="rounded-xl border border-white/10 p-2 transition hover:border-[#0E6AFA] hover:bg-[#0E6AFA]/10"
                        >
                          <FaLinkedinIn size={18} />
                        </a>

                        <a
                          target="_blank"
                          href={member.github || "#"}
                          className="rounded-xl border border-white/10 p-2 transition hover:border-[#0E6AFA] hover:bg-[#0E6AFA]/10"
                        >
                          <FaGithub size={18} />
                        </a>

                        <Link
                          href={member.email || "#"}
                          className="rounded-xl border border-white/10 p-2 transition hover:border-[#0E6AFA] hover:bg-[#0E6AFA]/10"
                        >
                          <Mail size={18} />
                        </Link>
                      </div>

                      <Link
                        href="/contact"
                        className="flex items-center gap-2 text-sm font-semibold text-[#0E6AFA]"
                      >
                        Connect
                        <ArrowRight
                          size={16}
                          className="transition group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          
          {/* ================= OUR Developers ================= */}
          <div className="mt-32">
            <div className="mb-14 text-center">
              <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                Engineering Excellence
              </span>

              <h3 className="mt-6 text-4xl font-bold">
                Meet Our Development Team
              </h3>

              <p className="mx-auto mt-5 max-w-3xl text-slate-400">
                Behind every successful product is a passionate team of
                engineers, designers and architects committed to delivering
                exceptional digital experiences.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {developers.map((member) => (
                <article
                  key={member.name}
                  className="group overflow-hidden rounded-[30px] border border-white/10 bg-[#08112F]/80 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#0E6AFA]/40"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={500}
                      height={600}
                      className="h-95 w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#020B2D] to-transparent" />
                  </div>
                  <div className="p-7">
                    <h4 className="text-2xl font-bold">{member.name}</h4>
                    <p className="mt-2 text-[#0E6AFA]">{member.role}</p>
                    <p className="mt-5 leading-7 text-slate-400">
                      {member.bio}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-[#0E6AFA]/10 px-3 py-1 text-xs text-blue-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* ================= Leadership Quotes Founder & Co-Founders ================= */}
          <div className="mt-32">
            <div className="mb-14 text-center">
              <h3 className="text-4xl font-bold">Voices of Leadership</h3>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {leadershipQuotes.map((item) => (
                <div
                  key={item.name}
                  className="rounded-[30px] border border-white/10 bg-linear-to-br from-[#08112F] to-[#10204F] p-8"
                >
                  <Quote className="text-[#0E6AFA]" size={42} />
                  <p className="mt-8 min-h-42.5 italic leading-8 text-slate-300">
                    {item.quote}
                  </p>
                  <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-6">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>

                      <p className="text-sm text-slate-400">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= CTA Last one================= */}
          <div className="relative mt-32 overflow-hidden rounded-[40px] border border-white/10 bg-linear-to-r from-[#08112F] via-[#10204F] to-[#08112F] px-8 py-24 text-center">
            <div className="absolute left-0 top-0 h-60 w-60 rounded-full bg-blue-500/10 blur-[140px]" />
            <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-sky-500/10 blur-[140px]" />
            <div className="relative z-10 mx-auto max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-5 py-2 text-sm text-blue-300">
                <Star size={16} className="fill-current" />
                {"Let's"} Build Together
              </span>

              <h3 className="mt-8 text-5xl font-bold leading-tight">
                Ready To Build
                <span className="block text-[#0E6AFA]">
                  Your Next Big Product?
                </span>
              </h3>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
                Whether {"you're"} launching a startup, scaling an enterprise,
                or building an AI-powered platform, our team is ready to help
                you turn ideas into successful products.
              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-5">
               
                <Link
                  href="https://cal.id/arinovaa-labs"
                  className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold transition hover:bg-white/10 flex items-center gap-2"
                >
                  {/* Schedule a Call */}
                  <FaCalendarAlt />
                  {"Schedule a Call at Your Convenience"}
                </Link>

                 <Link
                  href="/contact"
                  className="rounded-xl bg-[#0E6AFA] px-8 py-4 font-semibold transition hover:bg-blue-700"
                >
                  Start Your Project
                </Link>

                <p className="text-sm mt-10 text-slate-400 font-semibold flex items-center gap-2">
                  <FaCalendarAlt />
                  Choose a date and time that works best for you. Our live scheduling calendar will instantly confirm your meeting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoreTeam;
