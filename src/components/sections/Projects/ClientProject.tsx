"use client";

import { memo, useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  type Variants,
} from "motion/react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Globe2,
  Layers3,
  Monitor,
  Search,
  Settings2,
  Smartphone,
} from "lucide-react";

import Pagination from "@/components/common/Pagination";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export type ProjectCategory =
  | "Web Application"
  | "Mobile Application"
  | "SaaS Platform"
  | "ERP"
  | "Desktop Application"
  | "Custom Software";

type ProjectStatus =
  | "Live"
  | "In Development"
  | "Completed"
  | "Maintenance";

type Project = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  category: ProjectCategory;
  client: string;
  year: string;
  status: ProjectStatus;
  technologies: string[];
  features: string[];
  image?: string;
  liveUrl?: string;
};

/* -------------------------------------------------------------------------- */
/* Constants                                                                  */
/* -------------------------------------------------------------------------- */

const ITEMS_PER_PAGE = 3;

const CATEGORIES = [
  "All",
  "Web Application",
  "Mobile Application",
  "SaaS Platform",
  "ERP",
  "Desktop Application",
  "Custom Software",
] as const;

type CategoryFilter = (typeof CATEGORIES)[number];

const CATEGORY_ICONS: Record<
  ProjectCategory,
  typeof Code2
> = {
  "Web Application": Globe2,
  "Mobile Application": Smartphone,
  "SaaS Platform": Layers3,
  ERP: Database,
  "Desktop Application": Monitor,
  "Custom Software": Settings2,
};

const CAPABILITIES = [
  "Web Applications",
  "Mobile Applications",
  "SaaS Platforms",
  "Enterprise Systems",
  "Desktop Applications",
  "Custom Software",
] as const;

/* -------------------------------------------------------------------------- */
/* Motion                                                                     */
/* -------------------------------------------------------------------------- */

const PROJECT_GRID_VARIANTS: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const PROJECT_CARD_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: 12,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

/* -------------------------------------------------------------------------- */
/* Project Data                                                               */
/* -------------------------------------------------------------------------- */

const projects: Project[] = [
  {
    id: "project-001",
    title: "Business Management Web App",
    shortDescription:
      "A scalable web application designed to simplify daily business operations.",
    description:
      "A modern business management platform that helps organizations manage their daily operations, users, data, and workflows from a centralized system.",
    category: "Web Application",
    client: "Confidential Client",
    year: "2026",
    status: "Completed",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "MongoDB",
    ],
    features: [
      "Admin Dashboard",
      "User Management",
      "Role Based Access",
      "Business Reports",
    ],
  },

  {
    id: "project-002",
    title: "Business Mobile Application",
    shortDescription:
      "A mobile-first business application built for seamless access on the go.",
    description:
      "A mobile application focused on providing business users with quick access to important workflows, information, and operational features.",
    category: "Mobile Application",
    client: "Confidential Client",
    year: "2026",
    status: "Live",
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "REST API",
      "MongoDB",
    ],
    features: [
      "Authentication",
      "Push Notifications",
      "API Integration",
      "Mobile Dashboard",
    ],
  },

  {
    id: "project-003",
    title: "Cloud SaaS Platform",
    shortDescription:
      "A subscription-based SaaS platform designed for scalable business operations.",
    description:
      "A cloud-based SaaS platform with subscription capabilities, user management, dashboards, and scalable backend infrastructure.",
    category: "SaaS Platform",
    client: "Arinovaa Labs",
    year: "2026",
    status: "In Development",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "REST API",
    ],
    features: [
      "Subscription System",
      "User Management",
      "Dashboard",
      "Scalable Architecture",
    ],
  },

  {
    id: "project-004",
    title: "Enterprise Management System",
    shortDescription:
      "A centralized enterprise system for managing complex organizational workflows.",
    description:
      "An enterprise-focused management system designed to centralize operational workflows, employee processes, reporting, and administrative functions.",
    category: "ERP",
    client: "Confidential Client",
    year: "2025",
    status: "Completed",
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "REST API",
    ],
    features: [
      "Department Management",
      "Employee Management",
      "Reports",
      "Role Permissions",
    ],
  },

  {
    id: "project-005",
    title: "GST Billing Application",
    shortDescription:
      "A desktop billing application for generating professional GST invoices.",
    description:
      "A desktop application built to simplify billing operations and generate GST-compliant bills and invoices for businesses.",
    category: "Desktop Application",
    client: "Arinovaa Labs",
    year: "2026",
    status: "Live",
    technologies: [
      "Electron",
      "React",
      "TypeScript",
      "Node.js",
      "SQLite",
    ],
    features: [
      "GST Invoice Generation",
      "Customer Management",
      "Product Management",
      "Billing Reports",
    ],
  },

  {
    id: "project-006",
    title: "Custom Business Software",
    shortDescription:
      "A purpose-built software solution developed around specific business requirements.",
    description:
      "Custom software designed around a client's unique workflow, requirements, integrations, and operational processes.",
    category: "Custom Software",
    client: "Confidential Client",
    year: "2025",
    status: "Maintenance",
    technologies: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Docker",
    ],
    features: [
      "Custom Workflow",
      "API Integration",
      "Admin Panel",
      "Automated Processes",
    ],
  },

  {
    id: "project-007",
    title: "Learning Management System",
    shortDescription:
      "A complete LMS platform for managing online learning and educational workflows.",
    description:
      "A SaaS-based learning management platform designed for students, mentors, administrators, courses, learning content, and educational workflows.",
    category: "SaaS Platform",
    client: "Arinovaa Labs",
    year: "2026",
    status: "In Development",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "MongoDB",
    ],
    features: [
      "Student Management",
      "Mentor Management",
      "Course Management",
      "Learning Dashboard",
    ],
  },

  {
    id: "project-008",
    title: "Inventory Management System",
    shortDescription:
      "A business inventory solution for tracking products, stock, and operations.",
    description:
      "An inventory management system that helps businesses monitor products, stock levels, transactions, and operational data.",
    category: "Web Application",
    client: "Confidential Client",
    year: "2025",
    status: "Completed",
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "REST API",
    ],
    features: [
      "Product Management",
      "Stock Management",
      "Transaction Tracking",
      "Reports",
    ],
  },

  {
    id: "project-009",
    title: "CRM Platform",
    shortDescription:
      "A customer relationship management platform for managing leads and customers.",
    description:
      "A CRM solution focused on organizing customer information, leads, sales workflows, and communication activities.",
    category: "Web Application",
    client: "Confidential Client",
    year: "2025",
    status: "Live",
    technologies: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
    ],
    features: [
      "Lead Management",
      "Customer Management",
      "Sales Pipeline",
      "Activity Tracking",
    ],
  },

  {
    id: "project-010",
    title: "Field Operations App",
    shortDescription:
      "A mobile application for managing field teams and operational activities.",
    description:
      "A mobile solution that helps organizations coordinate field employees, track activities, and manage operational workflows.",
    category: "Mobile Application",
    client: "Confidential Client",
    year: "2025",
    status: "Completed",
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "REST API",
    ],
    features: [
      "Field Staff Management",
      "Task Assignment",
      "Activity Tracking",
      "Notifications",
    ],
  },

  {
    id: "project-011",
    title: "HR Management System",
    shortDescription:
      "A centralized HR platform for employee and organizational management.",
    description:
      "A human resource management system designed to centralize employee information, departments, attendance, and administrative workflows.",
    category: "ERP",
    client: "Confidential Client",
    year: "2025",
    status: "Completed",
    technologies: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "REST API",
    ],
    features: [
      "Employee Management",
      "Department Management",
      "Attendance",
      "Reports",
    ],
  },

  {
    id: "project-012",
    title: "Operations Desktop Suite",
    shortDescription:
      "A desktop software suite built for internal business operations.",
    description:
      "A desktop software solution created to manage business operations, local data, reporting, and internal workflows.",
    category: "Desktop Application",
    client: "Confidential Client",
    year: "2025",
    status: "Live",
    technologies: [
      "Electron",
      "React",
      "TypeScript",
      "Node.js",
      "SQLite",
    ],
    features: [
      "Local Data Management",
      "Reports",
      "User Access",
      "Business Operations",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Project Card                                                               */
/* -------------------------------------------------------------------------- */

const ProjectCard = memo(
  ({ project }: { project: Project }) => {
    const Icon = CATEGORY_ICONS[project.category];

    return (
      <motion.article
        variants={PROJECT_CARD_VARIANTS}
        initial="hidden"
        animate="show"
        exit="exit"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] arino-surface hover:border-blue-500/20 hover:bg-[#111d43]"
      >
        {/* Image / Icon */}
        <div className="relative flex h-52 items-center justify-center overflow-hidden border-b border-white/[0.06] bg-[#0d1734]">
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.08] blur-3xl"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.5 }}
          />

          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="relative h-full w-full object-cover"
            />
          ) : (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.25 }}
              className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/[0.08] text-blue-300"
            >
              <Icon
                size={34}
                strokeWidth={1.4}
                aria-hidden="true"
              />
            </motion.div>
          )}

          <span className="absolute right-4 top-4 rounded-full border border-white/[0.08] bg-[#0a132d]/80 px-3 py-1.5 text-[10px] font-semibold text-slate-300 backdrop-blur">
            {project.status}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-400">
            {project.category}
          </span>

          <h3 className="mt-3 text-xl font-bold text-white transition-colors group-hover:text-blue-300">
            {project.title}
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">
            {project.shortDescription}
          </p>

          {/* Features */}
          <ul className="mt-5 space-y-2">
            {project.features.slice(0, 3).map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-xs text-slate-500"
              >
                <CheckCircle2
                  size={14}
                  className="shrink-0 text-blue-400"
                  aria-hidden="true"
                />

                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies
              .slice(0, 4)
              .map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-[10px] font-medium text-slate-500"
                >
                  {technology}
                </span>
              ))}
          </div>

          {/* Footer */}
          <div className="mt-auto flex items-center justify-between border-t border-white/[0.06] pt-5">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-600">
                Client
              </p>

              <p className="mt-1 text-xs font-medium text-slate-400">
                {project.client}
              </p>
            </div>

            <div className="text-right">
              <p className="text-[10px] uppercase tracking-wider text-slate-600">
                Year
              </p>

              <p className="mt-1 text-xs font-medium text-slate-400">
                {project.year}
              </p>
            </div>
          </div>
        </div>
      </motion.article>
    );
  },
);

ProjectCard.displayName = "ProjectCard";

/* -------------------------------------------------------------------------- */
/* Main Component                                                             */
/* -------------------------------------------------------------------------- */

const ClientProject = () => {
  const [category, setCategory] =
    useState<CategoryFilter>("All");

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  /* ------------------------------------------------------------------------ */
  /* Filtering                                                                */
  /* ------------------------------------------------------------------------ */

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        category === "All" ||
        project.category === category;

      if (!matchesCategory) {
        return false;
      }

      if (!query) {
        return true;
      }

      return [
        project.title,
        project.category,
        project.client,
        project.description,
        project.shortDescription,
        ...project.technologies,
        ...project.features,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query);
    });
  }, [category, search]);

  /* ------------------------------------------------------------------------ */
  /* Pagination                                                               */
  /* ------------------------------------------------------------------------ */

  const totalPages = Math.ceil(
    filteredProjects.length / ITEMS_PER_PAGE,
  );

  const startIndex =
    (currentPage - 1) * ITEMS_PER_PAGE;

  const paginatedProjects = filteredProjects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const startResult =
    filteredProjects.length > 0 ? startIndex + 1 : 0;

  const endResult = Math.min(
    startIndex + ITEMS_PER_PAGE,
    filteredProjects.length,
  );

  /* ------------------------------------------------------------------------ */
  /* Handlers                                                                 */
  /* ------------------------------------------------------------------------ */

  const handleCategoryChange = (
    value: CategoryFilter,
  ) => {
    setCategory(value);
    setCurrentPage(1);
  };

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearch(event.target.value);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setCategory("All");
    setSearch("");
    setCurrentPage(1);
  };

  /* ------------------------------------------------------------------------ */
  /* Render                                                                   */
  /* ------------------------------------------------------------------------ */

  return (
    <main className="min-h-screen overflow-hidden bg-[#0c1635] text-white">
      {/* ------------------------------------------------------------------ */}
      {/* Hero                                                               */}
      {/* ------------------------------------------------------------------ */}

      <section className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/[0.07] blur-[130px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-28 lg:px-8 lg:pb-24 lg:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-4 py-2 text-[10px] font-bold tracking-[0.22em] text-blue-300">
              OUR WORK
            </span>

            <h1 className="mt-7 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Projects We{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Build.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              From web and mobile applications to SaaS
              platforms and business systems, we build
              digital solutions designed around real-world
              business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Projects                                                           */}
      {/* ------------------------------------------------------------------ */}

      <section
        id="projects"
        className="border-t border-white/[0.06] bg-[#0a132d]/50 py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-blue-400">
                SELECTED PROJECTS
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Real work. Real solutions.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                A selection of applications and software
                systems engineered by Arinovaa Labs.
              </p>
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-72">
              <Search
                size={17}
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
              />

              <input
                type="search"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search projects..."
                aria-label="Search projects"
                autoComplete="off"
                className="w-full rounded-lg border border-white/[0.08] bg-[#101a3b] py-3 pl-11 pr-4 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-blue-500/40"
              />
            </div>
          </div>

          {/* Categories */}
          <div
            className="mt-10 flex gap-2 overflow-x-auto pb-2"
            role="tablist"
            aria-label="Project categories"
          >
            {CATEGORIES.map((item) => {
              const active = category === item;

              return (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() =>
                    handleCategoryChange(item)
                  }
                  className={`whitespace-nowrap rounded-lg border px-4 py-2.5 text-xs font-semibold transition-colors ${
                    active
                      ? "border-blue-500/30 bg-blue-600 text-white"
                      : "border-white/[0.07] bg-white/[0.02] text-slate-400 hover:border-blue-500/20 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          {/* Results */}
          {filteredProjects.length > 0 ? (
            <>
              <p className="mt-6 text-xs text-slate-600">
                Showing{" "}
                <span className="text-slate-400">
                  {startResult}
                </span>{" "}
                –{" "}
                <span className="text-slate-400">
                  {endResult}
                </span>{" "}
                of{" "}
                <span className="text-slate-400">
                  {filteredProjects.length}
                </span>{" "}
                projects
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${category}-${search}-${currentPage}`}
                  variants={PROJECT_GRID_VARIANTS}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                  {paginatedProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>

              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 rounded-2xl border border-white/[0.07] bg-[#101a3b] py-20 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.02]">
                <BriefcaseBusiness
                  size={24}
                  className="text-slate-500"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-5 text-slate-400">
                No projects found.
              </p>

              <p className="mt-2 text-sm text-slate-600">
                Try changing your search or category filter.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-5 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Capabilities                                                       */}
      {/* ------------------------------------------------------------------ */}

      <section className="border-t border-white/[0.06] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
            >
              <p className="text-xs font-bold tracking-[0.25em] text-blue-400">
                OUR ENGINEERING CAPABILITIES
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                From idea to production.
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-slate-400">
                We work across multiple platforms and
                technologies to transform business
                requirements into reliable, scalable digital
                products.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
              className="grid grid-cols-2 gap-4"
            >
              {CAPABILITIES.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-xl border border-white/[0.07] bg-[#101a3b]/60 p-5 text-sm font-medium text-slate-300 transition-colors hover:border-blue-500/20 hover:text-white"
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CTA                                                                */}
      {/* ------------------------------------------------------------------ */}

      <section className="border-t border-white/[0.06] bg-[#09132d] py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
          className="mx-auto max-w-3xl px-6 text-center"
        >
          <p className="text-xs font-bold tracking-[0.25em] text-blue-400">
            HAVE A PROJECT IN MIND?
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Let&apos;s build your next digital solution.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
            Tell us what you&apos;re building. Our team can
            help turn your idea into a production-ready
            application.
          </p>

          <motion.button
            type="button"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-blue-500"
          >
            Start a Conversation

            <ArrowRight
              size={17}
              aria-hidden="true"
            />
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
};

export default ClientProject;