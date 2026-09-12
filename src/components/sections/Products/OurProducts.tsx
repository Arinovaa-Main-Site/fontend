"use client";

import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import {
  ArrowRight,
  Check,
  Monitor,
  ShoppingCart,
} from "lucide-react";

import Pagination from "@/components/common/Pagination";

type ProductCategory =
  | "SaaS"
  | "Desktop Application"
  | "ERP"
  | "MLM"
  | "Mobile App";

type Product = {
  id: string;
  name: string;
  slug: string;
  shortName: string;
  category: ProductCategory;
  badge: string;
  description: string;
  features: string[];
  pricingType: "Subscription" | "One Time License";
  platform: string[];
  status: "Available" | "Coming Soon";
  ctaText: string;
};

const ITEMS_PER_PAGE = 3;

const products: Product[] = [
  {
    id: "lms-001",
    name: "Learning Management System",
    shortName: "LMS",
    slug: "learning-management-system",
    category: "SaaS",
    badge: "SAAS PRODUCT",
    description:
      "A complete learning management platform for institutes, educators and organizations to manage courses, students, instructors and digital learning from one place.",
    features: [
      "Course & Content Management",
      "Student & Instructor Management",
      "Online Learning & Assessments",
      "Progress & Performance Tracking",
    ],
    pricingType: "Subscription",
    platform: ["Web", "Cloud"],
    status: "Available",
    ctaText: "Explore LMS",
  },
  {
    id: "gst-billing-001",
    name: "GST Billing Software",
    shortName: "GST Billing",
    slug: "gst-billing-software",
    category: "Desktop Application",
    badge: "DESKTOP PRODUCT",
    description:
      "A powerful desktop billing application designed to generate professional GST invoices and simplify day-to-day billing operations for businesses.",
    features: [
      "GST Invoice Generation",
      "Tax & GST Calculation",
      "Customer & Product Management",
      "Billing & Business Reports",
    ],
    pricingType: "One Time License",
    platform: ["Windows", "Desktop"],
    status: "Available",
    ctaText: "Explore Product",
  },
  {
    id: "erp-001",
    name: "Business ERP System",
    shortName: "ERP",
    slug: "business-erp-system",
    category: "ERP",
    badge: "ERP PRODUCT",
    description:
      "An integrated enterprise resource planning system that helps businesses manage operations, inventory, finance, employees and business workflows from a single platform.",
    features: [
      "Inventory Management",
      "Finance & Accounting",
      "Employee Management",
      "Business Analytics & Reports",
    ],
    pricingType: "Subscription",
    platform: ["Web", "Cloud"],
    status: "Available",
    ctaText: "Explore ERP",
  },
  {
    id: "mlm-001",
    name: "MLM Management System",
    shortName: "MLM",
    slug: "mlm-management-system",
    category: "MLM",
    badge: "MLM PRODUCT",
    description:
      "A scalable MLM management platform designed to manage members, networks, commissions, transactions and business performance efficiently.",
    features: [
      "Member & Network Management",
      "Commission Management",
      "Wallet & Transactions",
      "Performance & Business Reports",
    ],
    pricingType: "Subscription",
    platform: ["Web", "Cloud"],
    status: "Available",
    ctaText: "Explore MLM",
  },
  {
    id: "mobile-app-001",
    name: "Business Mobile Application",
    shortName: "Business App",
    slug: "business-mobile-application",
    category: "Mobile App",
    badge: "MOBILE PRODUCT",
    description:
      "A modern mobile application solution designed to help businesses connect with customers, manage operations and deliver services directly through mobile devices.",
    features: [
      "Customer Management",
      "Push Notifications",
      "Mobile Dashboard",
      "Secure API Integration",
    ],
    pricingType: "One Time License",
    platform: ["Android", "iOS"],
    status: "Available",
    ctaText: "Explore App",
  },
  {
    id: "crm-001",
    name: "Customer Relationship Management",
    shortName: "CRM",
    slug: "customer-relationship-management",
    category: "SaaS",
    badge: "SAAS PRODUCT",
    description:
      "A customer relationship platform built to help businesses manage leads, customers, sales activities and communication while improving overall customer engagement.",
    features: [
      "Lead & Customer Management",
      "Sales Pipeline Tracking",
      "Task & Follow-up Management",
      "Sales Analytics & Reports",
    ],
    pricingType: "Subscription",
    platform: ["Web", "Cloud"],
    status: "Coming Soon",
    ctaText: "View Product",
  },
  {
    id: "inventory-001",
    name: "Inventory Management System",
    shortName: "Inventory",
    slug: "inventory-management-system",
    category: "ERP",
    badge: "ERP PRODUCT",
    description:
      "A centralized inventory management solution that helps businesses track stock, products, suppliers and warehouse operations with real-time visibility.",
    features: [
      "Stock Management",
      "Product & Category Management",
      "Supplier Management",
      "Inventory Reports",
    ],
    pricingType: "Subscription",
    platform: ["Web", "Cloud"],
    status: "Coming Soon",
    ctaText: "View Product",
  },
];

const CATEGORY_LABELS: Record<ProductCategory, string> = {
  SaaS: "SAAS",
  "Desktop Application": "DESKTOP",
  ERP: "ERP",
  MLM: "MLM",
  "Mobile App": "MOBILE",
};

const PRODUCT_GRID_VARIANTS: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const PRODUCT_CARD_VARIANTS: Variants = {
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
};

const ProductCard = ({ product }: { product: Product }) => {
  const isDesktop = product.category === "Desktop Application";

  return (
    <motion.article
      variants={PRODUCT_CARD_VARIANTS}
      whileHover={{ y: -4 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101a3b] transition-shadow duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-950/30"
    >
      <div className="relative border-b border-white/[0.07] p-7 sm:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-600/[0.08] blur-3xl transition-colors duration-500 group-hover:bg-blue-500/[0.15]"
        />

        <div className="relative flex items-start justify-between gap-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-blue-400/10 bg-blue-500/[0.08] text-blue-400">
            {isDesktop ? (
              <Monitor
                size={25}
                strokeWidth={1.6}
                aria-hidden="true"
              />
            ) : (
              <ShoppingCart
                size={25}
                strokeWidth={1.6}
                aria-hidden="true"
              />
            )}
          </div>

          <span className="rounded-full border border-blue-400/10 bg-blue-500/[0.06] px-3 py-1.5 text-[9px] font-bold tracking-[0.18em] text-blue-400">
            {product.badge}
          </span>
        </div>

        <div className="mt-7">
          <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">
            {CATEGORY_LABELS[product.category]}
          </p>

          <h3 className="mt-2 text-2xl font-semibold text-white">
            {product.name}
          </h3>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            {product.description}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <div>
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-slate-500">
            KEY FEATURES
          </p>

          <ul className="space-y-3">
            {product.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-sm text-slate-300"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                  <Check
                    size={12}
                    aria-hidden="true"
                  />
                </span>

                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-4 border-y border-white/[0.07] py-5">
          <div>
            <p className="text-[10px] font-bold tracking-[0.15em] text-slate-600">
              PRICING
            </p>

            <p className="mt-1 text-sm text-slate-300">
              {product.pricingType}
            </p>
          </div>

          <div>
            <p className="text-[10px] font-bold tracking-[0.15em] text-slate-600">
              PLATFORM
            </p>

            <p className="mt-1 text-sm text-slate-300">
              {product.platform.join(" · ")}
            </p>
          </div>
        </div>

        <motion.button
          type="button"
          whileTap={{ scale: 0.98 }}
          className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
        >
          {product.ctaText}

          <ArrowRight
            size={16}
            aria-hidden="true"
          />
        </motion.button>
      </div>
    </motion.article>
  );
};

const OurProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(
    products.length / ITEMS_PER_PAGE,
  );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const paginatedProducts = products.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const startResult = startIndex + 1;

  const endResult = Math.min(
    startIndex + ITEMS_PER_PAGE,
    products.length,
  );

  return (
    <main className="min-h-screen arino-surface text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
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

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-28 text-center lg:px-8 lg:pb-24 lg:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="mx-auto max-w-3xl"
          >
            <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-4 py-2 text-[10px] font-bold tracking-[0.22em] text-blue-300">
              PRODUCTS BY ARINOVAA LABS
            </span>

            <h1 className="mt-7 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Products
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Powerful software products built by Arinovaa
              Labs to solve real-world business and digital
              challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="border-t border-white/[0.06] bg-[#0a132d]/50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold tracking-[0.25em] text-blue-400">
              OUR PRODUCT ECOSYSTEM
            </p>

            <div className="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
                Software built for the way businesses work.
              </h2>

              <p className="max-w-md text-sm leading-7 text-slate-500">
                From cloud-based subscription products to
                desktop business applications, our products
                are built with scalability and usability in
                mind.
              </p>
            </div>
          </div>

          <p className="mb-6 text-xs text-slate-600">
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
              {products.length}
            </span>{" "}
            products
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              variants={PRODUCT_GRID_VARIANTS}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {paginatedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>

      {/* Product Model */}
      <section className="border-t border-white/[0.06] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="rounded-3xl border border-blue-400/10 bg-[#101a3b]/70 p-8 sm:p-12 lg:p-14"
          >
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-bold tracking-[0.25em] text-blue-400">
                  FLEXIBLE PRODUCT MODELS
                </p>

                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                  Choose the model that fits your business.
                </h2>

                <p className="mt-5 max-w-xl leading-8 text-slate-400">
                  Our products can be offered through
                  different commercial models depending on
                  the nature of the solution and your business
                  requirements.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-6">
                  <p className="text-xs font-bold tracking-[0.15em] text-blue-400">
                    SAAS
                  </p>

                  <h3 className="mt-3 font-semibold">
                    Subscription
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Access powerful cloud products through
                    flexible subscription plans.
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-6">
                  <p className="text-xs font-bold tracking-[0.15em] text-blue-400">
                    DESKTOP
                  </p>

                  <h3 className="mt-3 font-semibold">
                    One-Time License
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Purchase and deploy business
                    applications with a one-time license.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
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
            NEED A PRODUCT?
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Find the right solution for your business.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
            Explore our products or get in touch with our
            team to understand which solution is right for
            you.
          </p>

          <motion.button
            type="button"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
          >
            Contact Us

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

export default OurProducts;