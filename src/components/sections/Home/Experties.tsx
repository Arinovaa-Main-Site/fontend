"use client";

import {
  Building2,
  Cloud,
  Database,
  Globe,
  GraduationCap,
  MonitorSmartphone,
  RefreshCw,
  Smartphone,
} from "lucide-react";

import ServiceCard, {
  type Service,
} from "./ServiceCard";

const services: Service[] = [
  {
    title: "Web Development",
    description:
      "High-performance, responsive web applications built with modern frameworks.",
    icon: Globe,
  },

  {
    title: "Mobile App Dev",
    description:
      "Native and cross-platform mobile experiences for iOS and Android.",
    icon: Smartphone,
  },

  {
    title: "SaaS Products",
    description:
      "Scalable, multi-tenant cloud platforms designed for growth and reliability from day one.",
    icon: Cloud,
    accent: "orange",
  },

  {
    title: "Custom Software",
    description:
      "Bespoke digital systems crafted around your business logic and workflows.",
    icon: MonitorSmartphone,
  },

  {
    title: "ERP Systems",
    description:
      "Integrated management solutions that streamline your entire business operation.",
    icon: Building2,
  },

  {
    title: "Modernization",
    description:
      "Legacy codebases transformed into modern, scalable, cloud-native architectures.",
    icon: RefreshCw,
  },

  {
    title: "Data Migration",
    description:
      "Secure and seamless migration of complex datasets with minimal disruption.",
    icon: Database,
    accent: "orange",
  },

  {
    title: "Internships",
    description:
      "Practical learning opportunities designed to develop the next generation of engineers.",
    icon: GraduationCap,
  },
];

export default function Experties() {
  return (
    <section className="arino-bg py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[#DCE4FF] md:text-5xl">
            Expertise Across the Digital Horizon
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400">
            We deliver precision-engineered solutions tailored to the unique
            demands of your industry and business scale.
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[220px]">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
