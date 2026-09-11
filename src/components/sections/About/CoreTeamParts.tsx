"use client";

import Image from "next/image";
import { ArrowUpRight, Mail, Quote } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { motion, type Variants } from "motion/react";

import founder from "@/assets/images/founder.jpeg";
import cto from "@/assets/images/cto.jpeg";
import ganesh from "@/assets/images/ganesh-dev.avif";

import type { QuoteType, Stat, TeamMember } from "@/types/coreTeamTypes";

export const stats: Stat[] = [
  { value: "10+", label: "Projects Delivered" },
  { value: "3+", label: "Global Clients" },
  { value: "4+", label: "Technology Experts" },
  { value: "98%", label: "Client Retention" },
];

export const leadership: TeamMember[] = [
  {
    name: "Dravinanshu Mishra",
    role: "Founder & Chairman, CVO",
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
    name: "Prashant Sharma",
    role: "Co-Founder & CEO",
    bio: "Technology architect passionate about designing secure, scalable, and future-ready enterprise platforms.",
    experience: "20+ Years",
    image: cto,
    linkedin: "https://www.linkedin.com/in/prashant-sharma-ab9b9a30",
    github: "",
    email: "mailto:info@arinovaa.com",
    expertise: [
      "Software Architecture",
      ".NET",
      "Cloud Infrastructure",
      "Engineering Leadership",
      "DBMS",
    ],
  },
  {
    name: "Biplab Biswas",
    role: "Chief Technology Officer (CTO)",
    bio: "Technology leader focused on building scalable, secure, and high-performance digital platforms through modern engineering practices and innovation.",
    experience: "3+ Years",
    image: ganesh,
    linkedin: "",
    github: "",
    email: "mailto:info@arinovaa.com",
    expertise: [
      "Technical Strategy",
      "Software Architecture",
      "Cloud Solutions",
      "System Design",
      "Engineering Leadership",
    ],
  },
];

export const developers: TeamMember[] = [
  {
    name: "Ganesh Menaria",
    role: "Senior Full Stack Developer",
    bio: "Expert in building enterprise-grade web applications using React, Next.js, Node.js, and Laravel.",
    experience: "15+ Years",
    image: ganesh,
    expertise: ["Next.js", "React", "Laravel", "TypeScript", "WordPress"],
  },
  {
    name: "Akash Shukla",
    role: "Full Stack Developer",
    bio: "Focused on building scalable, high-performance web applications with modern frontend and backend technologies.",
    experience: "4+ Years",
    image: ganesh,
    expertise: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "SEO"],
  },
];

export const quotes: QuoteType[] = [
  {
    quote:
      "Arinovaa is a name inspired by the ideas of Innovation, the Future, and Growth. It represents our commitment to creating forward-thinking digital solutions that help businesses evolve, scale, and stay ahead in a rapidly changing world.",
    name: "Dravinanshu Mishra",
    designation: "Founder & Chairman, CVO",
    image: founder,
  },
  {
    quote:
      "Our greatest measure of success is our clients' satisfaction. We are committed to going above and beyond to ensure customer satisfaction at every opportunity, because their success is our success.",
    name: "Prashant Sharma",
    designation: "Co-Founder & CEO",
    image: cto,
  },
  {
    quote:
      "Success comes from combining innovation, execution, and trust. That's the culture we build every day.",
    name: "Biplab Biswas",
    designation: "Chief Technology Officer (CTO)",
    image: ganesh,
  },
];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  number,
  label,
  heading,
  muted,
  description,
}: {
  number: string;
  label: string;
  heading: string;
  muted: string;
  description?: string;
}) {
  return (
    <Reveal>
      <header className="mb-12 border-b border-white/10 pb-8 md:flex md:items-end md:justify-between md:gap-8">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            {number} — {label}
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {heading}
            <span className="text-slate-500"> {muted}</span>
          </h2>
        </div>

        {description && (
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-500 md:mt-0">
            {description}
          </p>
        )}
      </header>
    </Reveal>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href?: string;
  label: string;
  children: React.ReactNode;
}) {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid size-9 place-items-center rounded-full border border-white/10 text-slate-500 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500 hover:text-white"
    >
      {children}
    </a>
  );
}

export function LeadershipCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  return (
    <motion.article
      variants={fadeUp}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.04]"
    >
      <div className="grid lg:grid-cols-[280px_1fr]">
        <div className="relative h-72 overflow-hidden lg:h-full">
          <Image
            src={member.image}
            alt={`${member.name} — ${member.role}`}
            width={600}
            height={700}
            sizes="(max-width: 1024px) 100vw, 280px"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#07102D] to-transparent lg:bg-gradient-to-r" />

          <span className="absolute left-5 top-5 text-xs font-bold tracking-widest text-white/50">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="flex flex-col justify-between p-7 sm:p-9">
          <div>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-blue-400">
                  {member.role}
                </p>

                <h3 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                  {member.name}
                </h3>
              </div>

              <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-500">
                {member.experience}
              </span>
            </div>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400">
              {member.bio}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {member.expertise.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-slate-500 transition-colors group-hover:border-blue-500/20 group-hover:text-blue-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
            <div className="flex gap-2">
              <Social href={member.linkedin} label={`${member.name} LinkedIn`}>
                <FaLinkedinIn size={14} />
              </Social>

              <Social href={member.github} label={`${member.name} GitHub`}>
                <FaGithub size={14} />
              </Social>

              <Social href={member.email} label={`Email ${member.name}`}>
                <Mail size={14} />
              </Social>
            </div>

            <a
              href="/contact"
              className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400"
            >
              Connect
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function DeveloperRow({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  return (
    <motion.article
      variants={fadeUp}
      className="group grid gap-5 py-7 sm:grid-cols-[55px_1fr_auto] sm:items-center"
    >
      <span className="text-xs font-semibold tracking-widest text-slate-700">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <h3 className="text-xl font-bold">{member.name}</h3>

          <span className="text-sm text-blue-400">{member.role}</span>
        </div>

        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
          {member.expertise.map((skill) => (
            <span
              key={skill}
              className="text-xs text-slate-600 transition-colors group-hover:text-slate-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-6 sm:justify-end">
        <span className="text-xs uppercase tracking-widest text-slate-700">
          {member.experience}
        </span>

        <ArrowUpRight
          size={18}
          className="text-slate-700 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
        />
      </div>
    </motion.article>
  );
}

export function QuoteCard({ item }: { item: QuoteType }) {
  return (
    <motion.article
      variants={fadeUp}
      className="flex min-h-[350px] flex-col justify-between border border-white/10 bg-white/[0.025] p-7 transition-colors hover:border-blue-500/20 sm:p-8"
    >
      <div>
        <Quote size={32} className="text-blue-500" />

        <p className="mt-7 text-base leading-8 text-slate-300 sm:text-lg">
          {item.quote}
        </p>
      </div>

      <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-5">
        <Image
          src={item.image}
          alt={item.name}
          width={52}
          height={52}
          sizes="52px"
          className="size-13 rounded-full object-cover"
        />

        <div>
          <h3 className="text-sm font-semibold">{item.name}</h3>

          <p className="mt-1 text-xs text-slate-500">{item.designation}</p>
        </div>
      </div>
    </motion.article>
  );
}
