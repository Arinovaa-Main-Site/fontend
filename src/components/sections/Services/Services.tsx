"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, ArrowUpFromLine, Database, Wrench, LayoutGrid, GraduationCap, CheckCircle2 } from "lucide-react";

const services = [
    {
        icon: Code2,
        iconBg: "bg-blue-600/20",
        iconColor: "text-blue-400",
        title: "Software Engineering",
        desc: "Full-cycle development including Web, Mobile, and SaaS products. We build resilient, cloud-native applications with a focus on performance.",
        areas: ["Modern SaaS Architecture", "Native & Cross-Platform Mobile", "React/Node.js Ecosystems"],
    },
    {
        icon: ArrowUpFromLine,
        iconBg: "bg-orange-600/20",
        iconColor: "text-orange-400",
        title: "App Modernization",
        desc: "Refactoring legacy systems into modern microservices. We eliminate technical debt while maintaining business continuity.",
        areas: ["Monolith to Microservices", "Legacy Code Refactoring", "CI/CD Pipeline Optimization"],
    },
    {
        icon: Database,
        iconBg: "bg-blue-700/20",
        iconColor: "text-blue-300",
        title: "Data Migration",
        desc: "Secure, lossless data transfer across heterogeneous environments. Automated validation ensures zero data integrity risks.",
        areas: ["Cloud Data Warehousing", "ETL Process Automation", "Real-time Data Syncing"],
    },
    {
        icon: Wrench,
        iconBg: "bg-orange-700/20",
        iconColor: "text-orange-400",
        title: "Dev & Maintenance",
        desc: "Ongoing support and continuous iteration for mission-critical software. We ensure your uptime and feature parity.",
        areas: ["24/7 Monitoring & SRE", "Security Patching", "Performance Tuning"],
    },
    {
        icon: LayoutGrid,
        iconBg: "bg-blue-600/20",
        iconColor: "text-blue-400",
        title: "ERP Solutions",
        desc: "Custom ERP development and implementation of industry leaders. Streamlining operations through intelligent automation.",
        areas: ["Supply Chain Management", "CRM Integration", "Custom Modules"],
    },
    {
        icon: GraduationCap,
        iconBg: "bg-orange-600/20",
        iconColor: "text-orange-400",
        title: "Talent & Training",
        desc: "Upskilling the next generation of engineers through rigorous internship programs and corporate technical training.",
        areas: ["Full-Stack Bootcamps", "Cloud Architecture Training", "Corporate Workshops"],
    },
];

const stats = [
    {
        value: "99.9%",
        label: "UPTIME GUARANTEED",
        valueColor: "text-white",
    },
    {
        value: "150+",
        label: "SUCCESSFUL MIGRATIONS",
        valueColor: "text-orange-400",
    },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-[#0d1221] text-white font-sans">

            {/* ── Hero Section ── */}
            <section className="px-6 md:px-16 pt-20 pb-24 max-w-7xl mx-auto">
                <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-6">
                    Engineered Excellence
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-xl">
                    Architecting the Digital Future
                </h1>
                <p className="text-gray-400 text-base leading-relaxed max-w-lg mb-10">
                    Arinovaa Labs provides end-to-end technical solutions ranging from bespoke
                    software engineering to enterprise-scale modernization. Our methodology
                    prioritizes functional density and technical precision.
                </p>
                <div className="flex items-center gap-4 flex-wrap">
                    <Link
                        href="/contact"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-3.5 rounded-md transition-colors"
                    >
                        Partner with us
                        <ArrowRight size={16} />
                    </Link>
                    <Link
                        href="/case-studies"
                        className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-white text-sm font-medium px-6 py-3.5 rounded-md transition-colors bg-transparent"
                    >
                        View Case Studies
                    </Link>
                </div>
            </section>

            {/* ── Core Competencies ── */}
            <section className="px-6 md:px-16 pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-10">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-2">Core Competencies</h2>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                                Our services are designed for organizations that demand high-availability,
                                scalable architectures, and seamless digital transformation.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                            <span className="px-3 py-1.5 rounded-md bg-[#1e2640] border border-white/10 text-xs text-gray-300 font-medium">
                                8 Domains
                            </span>
                            <span className="px-3 py-1.5 rounded-md bg-[#1e2640] border border-white/10 text-xs text-gray-300 font-medium">
                                Global Standards
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {services.map(({ icon: Icon, iconBg, iconColor, title, desc, areas }) => (
                            <div
                                key={title}
                                className="bg-[#111827] border border-white/8 rounded-xl p-6 flex flex-col gap-5 hover:border-white/20 transition-colors"
                            >
                                <div className={`w-10 h-10 rounded-lg ${iconBg} flex items-center justify-center`}>
                                    <Icon size={20} className={iconColor} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-orange-400 mb-3">Key Focus Areas:</p>
                                    <ul className="flex flex-col gap-2">
                                        {areas.map((area) => (
                                            <li key={area} className="flex items-center gap-2 text-sm text-gray-300">
                                                <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                                                {area}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <button className="mt-auto w-full border border-white/10 hover:border-white/30 text-white text-sm font-medium py-2.5 rounded-md transition-colors cursor-pointer bg-transparent">
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── How We Deliver Value ── */}
            <section className="px-6 md:px-16 pb-24">
                <div className="max-w-7xl mx-auto">

                    {/* Centered heading */}
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            How We Deliver Value
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
                            Our methodology is rooted in the &quot;Engineering First&quot; principle, ensuring
                            robust code and transparent communication.
                        </p>
                    </div>

                    {/* Two-column bento */}
                    <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4 items-stretch">

                        {/* Left — image card */}
                        <div className="relative rounded-xl overflow-hidden min-h-[380px]">
                            <Image
                                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80"
                                alt="Advanced Cloud Integration"
                                fill
                                className="object-cover brightness-60"
                                sizes="(max-width: 768px) 100vw, 60vw"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            {/* Text overlay */}
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Advanced Cloud Integration
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                                    Our cloud native approach utilizes AWS, GCP, and Azure to provide
                                    virtually infinite scalability for your digital assets.
                                </p>
                            </div>
                        </div>

                        {/* Right — two stat cards stacked */}
                        <div className="flex flex-col gap-4">
                            {stats.map(({ value, label, valueColor }) => (
                                <div
                                    key={label}
                                    className="flex-1 bg-[#111827] border border-white/8 rounded-xl p-8 flex flex-col justify-center"
                                >
                                    <p className={`text-5xl font-bold mb-3 ${valueColor}`}>{value}</p>
                                    <p className="text-xs tracking-[0.18em] uppercase text-gray-500">{label}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* ── CTA Section ── */}
            <section className="px-6 md:px-16 pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="border border-white/10 rounded-2xl px-8 py-20 flex flex-col items-center text-center bg-gradient-to-br from-[#141929] via-[#0f1628] to-[#0d1221]">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-lg leading-tight">
                            Ready to scale your technical capability?
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-10">
                            Consult with our engineering leads to discuss your project requirements
                            and receive a detailed architectural roadmap.
                        </p>
                        <div className="flex items-center gap-4 flex-wrap justify-center">
                            <Link
                                href="/contact"
                                className="px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
                            >
                                Schedule a Consultation
                            </Link>
                            <Link
                                href="/career"
                                className="px-8 py-3.5 rounded-lg border border-white/20 hover:border-white/40 text-white text-sm font-medium transition-colors bg-transparent"
                            >
                                Explore Career Openings
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}