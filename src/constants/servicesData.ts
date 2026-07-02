import {
  ArrowUpFromLine,
  Code2,
  Database,
  GraduationCap,
  LayoutGrid,
  Wrench,
} from "lucide-react";

export const servicesData = [
  {
    slug: "software-engineering",
    icon: Code2,
    title: "Software Engineering",
    shortDescription:
      "End-to-end software development for startups and enterprises.",
    description:
      "We design and build scalable software solutions tailored to your business goals. From MVP development to enterprise-grade applications, our team focuses on performance, security, maintainability, and long-term scalability.",
    // Software Engineering
    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",

    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Laravel",
      "TypeScript",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "AWS",
    ],

    features: [
      "Custom Web Applications",
      "SaaS Product Development",
      "Enterprise Software",
      "REST & GraphQL APIs",
      "Cloud Deployment",
      "Performance Optimization",
    ],

    process: [
      "Requirement Analysis",
      "UI/UX Planning",
      "Architecture Design",
      "Development",
      "Testing & QA",
      "Deployment",
      "Maintenance",
    ],

    benefits: [
      "Scalable Architecture",
      "Secure Development",
      "High Performance",
      "SEO Friendly",
      "Cloud Ready",
      "Easy Maintenance",
    ],

    industries: [
      "Healthcare",
      "Finance",
      "Education",
      "Real Estate",
      "Retail",
      "Manufacturing",
    ],

    faqs: [
      {
        question: "How long does development take?",
        answer:
          "Depending on the project scope, development typically takes between 4 and 24 weeks.",
      },
      {
        question: "Do you provide post-launch support?",
        answer:
          "Yes. We offer ongoing maintenance, monitoring, and feature enhancements.",
      },
    ],
  },

  {
    slug: "app-modernization",
    icon: ArrowUpFromLine,

    title: "Application Modernization",

    shortDescription: "Upgrade legacy applications using modern technologies.",

    description:
      "Transform outdated software into secure, scalable, cloud-native applications without disrupting business operations.",

    // Application Modernization
    heroImage:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1400&q=80",

    technologies: [
      ".NET",
      "Java",
      "Laravel",
      "Node.js",
      "Docker",
      "Kubernetes",
      "AWS",
    ],

    features: [
      "Legacy Migration",
      "Microservices",
      "Containerization",
      "API Modernization",
      "Cloud Migration",
      "CI/CD Automation",
    ],

    process: [
      "Legacy Audit",
      "Migration Strategy",
      "Architecture Upgrade",
      "Development",
      "Testing",
      "Deployment",
    ],

    benefits: [
      "Reduced Technical Debt",
      "Better Performance",
      "Lower Infrastructure Cost",
      "Improved Security",
      "Easy Scaling",
    ],

    industries: ["Banking", "Healthcare", "Insurance", "Government"],

    faqs: [
      {
        question: "Can legacy databases be migrated?",
        answer: "Yes, while preserving existing business data.",
      },
    ],
  },

  {
    slug: "data-migration",
    icon: Database,

    title: "Data Migration",

    shortDescription:
      "Secure migration of structured and unstructured business data.",

    description:
      "We migrate databases, cloud storage, and enterprise systems with automated validation and minimal downtime.",

    // Data Migration
    heroImage:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1400&q=80",

    technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "AWS", "Azure"],

    features: [
      "Database Migration",
      "Cloud Migration",
      "ETL Pipelines",
      "Real-Time Synchronization",
      "Backup & Recovery",
    ],

    process: [
      "Assessment",
      "Planning",
      "Migration",
      "Validation",
      "Testing",
      "Go Live",
    ],

    benefits: [
      "Zero Data Loss",
      "Minimal Downtime",
      "Automated Validation",
      "Secure Transfer",
    ],

    industries: ["Healthcare", "Finance", "Retail", "Enterprise"],

    faqs: [
      {
        question: "Will there be downtime?",
        answer: "Our migration strategy minimizes downtime wherever possible.",
      },
    ],
  },

  {
    slug: "dev-maintenance",
    icon: Wrench,

    title: "Development & Maintenance",

    shortDescription:
      "Continuous software support and long-term maintenance services.",

    description:
      "We keep your applications secure, updated, and optimized through proactive monitoring and regular improvements.",

    // Development & Maintenance
    heroImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",

    technologies: ["Linux", "Docker", "AWS", "Azure", "Redis", "NGINX"],

    features: [
      "Bug Fixes",
      "Feature Enhancements",
      "Server Monitoring",
      "Security Updates",
      "Performance Optimization",
    ],

    process: [
      "Audit",
      "Monitoring",
      "Issue Resolution",
      "Optimization",
      "Reporting",
    ],

    benefits: [
      "99.9% Uptime",
      "Faster Response",
      "Lower Maintenance Cost",
      "Improved Stability",
    ],

    industries: ["SaaS", "Healthcare", "Retail", "Manufacturing"],

    faqs: [
      {
        question: "Do you provide monthly support plans?",
        answer: "Yes, flexible maintenance plans are available.",
      },
    ],
  },

  {
    slug: "erp-solutions",
    icon: LayoutGrid,

    title: "ERP Solutions",

    shortDescription:
      "Custom ERP systems to automate and streamline business operations.",

    description:
      "Build ERP platforms for inventory, HR, CRM, finance, procurement, and manufacturing tailored to your workflow.",

    // ERP Solutions
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",

    technologies: ["Laravel", "React", "Next.js", "PostgreSQL", "Docker"],

    features: ["Inventory", "CRM", "HRMS", "Accounting", "Reporting Dashboard"],

    process: [
      "Business Analysis",
      "Module Planning",
      "Development",
      "Testing",
      "Deployment",
    ],

    benefits: [
      "Centralized Data",
      "Automation",
      "Better Reporting",
      "Operational Efficiency",
    ],

    industries: ["Manufacturing", "Logistics", "Retail", "Healthcare"],

    faqs: [
      {
        question: "Can ERP integrate with existing software?",
        answer: "Yes, via custom APIs and third-party integrations.",
      },
    ],
  },

  {
    slug: "talent-training",
    icon: GraduationCap,

    title: "Talent & Training",

    shortDescription: "Professional training for students and corporate teams.",

    description:
      "Hands-on training programs covering full-stack development, cloud computing, DevOps, AI, and software engineering best practices.",

    // Talent & Training
    heroImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",

    technologies: ["React", "Node.js", "Next.js", "AWS", "Docker", "Python"],

    features: [
      "Corporate Training",
      "Internship Programs",
      "Bootcamps",
      "Mentorship",
      "Certification",
    ],

    process: [
      "Assessment",
      "Curriculum",
      "Hands-on Projects",
      "Mentoring",
      "Certification",
    ],

    benefits: [
      "Industry Ready Skills",
      "Real Projects",
      "Experienced Mentors",
      "Career Guidance",
    ],

    industries: ["Education", "IT Companies", "Startups", "Enterprises"],

    faqs: [
      {
        question: "Are the sessions online?",
        answer: "Both online and offline training options are available.",
      },
    ],
  },
];
