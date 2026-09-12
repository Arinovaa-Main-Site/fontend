import {
  Archive,
  ChevronRight,
  Mail,
  MailOpen,
  MessageSquare,
  MoreHorizontal,
  Search,
  Star,
  Trash2,
} from "lucide-react";

type MessageStatus = "New" | "Read";

type Message = {
  id: number;
  name: string;
  email: string;
  subject: string;
  preview: string;
  date: string;
  status: MessageStatus;
  starred?: boolean;
};

const messages: Message[] = [
  {
    id: 1,
    name: "Rahul Kumar",
    email: "rahul.kumar@gmail.com",
    subject: "Enterprise ERP Development",
    preview:
      "We are looking for a technology partner to build a scalable ERP platform for our organization.",
    date: "10 min ago",
    status: "New",
    starred: true,
  },
  {
    id: 2,
    name: "Amit Sharma",
    email: "amit.sharma@company.com",
    subject: "Website Development Inquiry",
    preview:
      "We would like to discuss the development of a modern corporate website for our business.",
    date: "42 min ago",
    status: "New",
  },
  {
    id: 3,
    name: "Neha Singh",
    email: "neha.singh@gmail.com",
    subject: "Partnership Opportunity",
    preview:
      "I would like to explore a potential partnership opportunity with Arinovaa Labs.",
    date: "2 hours ago",
    status: "Read",
    starred: true,
  },
  {
    id: 4,
    name: "Vikash Verma",
    email: "vikash@startup.io",
    subject: "AI Product Development",
    preview:
      "Our startup is interested in developing an AI-powered analytics platform.",
    date: "5 hours ago",
    status: "Read",
  },
  {
    id: 5,
    name: "Priya Mehta",
    email: "priya.mehta@gmail.com",
    subject: "Mobile Application Project",
    preview:
      "Could you please share the estimated timeline and pricing for a mobile application?",
    date: "Yesterday",
    status: "Read",
  },
  {
    id: 6,
    name: "Arjun Patel",
    email: "arjun@business.com",
    subject: "Cloud Migration Services",
    preview:
      "We need assistance migrating our existing infrastructure to a secure cloud environment.",
    date: "Yesterday",
    status: "Read",
  },
];

const stats = [
  {
    label: "Total Messages",
    value: "24",
    description: "All conversations",
  },
  {
    label: "Unread",
    value: "12",
    description: "Need your attention",
  },
  {
    label: "Starred",
    value: "05",
    description: "Important messages",
  },
  {
    label: "This Week",
    value: "18",
    description: "New inquiries",
  },
];

function StatusBadge({ status }: { status: MessageStatus }) {
  if (status === "New") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 text-[10px] font-semibold text-blue-400">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
        New
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[10px] font-medium text-slate-600">
      <MailOpen size={11} />
      Read
    </span>
  );
}

function SenderAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-xs font-bold text-blue-400">
      {initials}
    </div>
  );
}

export default function Messages() {
  return (
    <section className="min-h-screen bg-[#050B1D] px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-blue-400">
              <MessageSquare size={14} />
              <span>COMMUNICATION</span>
            </div>

            <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Messages
            </h1>

            <p className="mt-1 max-w-2xl text-sm text-slate-500">
              Manage inquiries and conversations received through the
              Arinovaa Labs website.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-blue-500/10 bg-blue-500/5 px-3 py-2 text-xs text-blue-400">
            <Mail size={14} />
            <span>12 unread messages</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
                rounded-2xl border border-white/10
                bg-white/[0.025] p-5
                transition-colors duration-200
                hover:border-blue-500/20
              "
            >
              <p className="text-xs text-slate-600">{stat.label}</p>

              <p className="mt-2 text-2xl font-bold tracking-tight">
                {stat.value}
              </p>

              <p className="mt-1 text-xs text-slate-600">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Inbox */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">
          {/* Toolbar */}
          <div className="flex flex-col gap-3 border-b border-white/10 p-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600"
              />

              <input
                type="search"
                placeholder="Search messages..."
                className="
                  h-10 w-full rounded-xl
                  border border-white/10
                  bg-black/10
                  pl-9 pr-3
                  text-sm text-white
                  outline-none
                  placeholder:text-slate-600
                  focus:border-blue-500/40
                "
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="
                  inline-flex h-9 items-center gap-2
                  rounded-lg border border-white/10
                  px-3 text-xs text-slate-400
                  transition-colors
                  hover:bg-white/5 hover:text-white
                "
              >
                All
              </button>

              <button
                type="button"
                className="
                  inline-flex h-9 items-center gap-2
                  rounded-lg border border-white/10
                  px-3 text-xs text-slate-400
                  transition-colors
                  hover:bg-white/5 hover:text-white
                "
              >
                Unread
              </button>

              <button
                type="button"
                aria-label="More message filters"
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-lg border border-white/10
                  text-slate-600
                  transition-colors
                  hover:bg-white/5 hover:text-white
                "
              >
                <MoreHorizontal size={16} />
              </button>
            </div>
          </div>

          {/* Desktop messages */}
          <div className="hidden md:block">
            {messages.map((message) => {
              const unread = message.status === "New";

              return (
                <button
                  key={message.id}
                  type="button"
                  className={[
                    "group flex w-full items-center gap-4 border-b border-white/5 px-5 py-4 text-left",
                    "transition-colors duration-200 last:border-0",
                    unread
                      ? "bg-blue-500/[0.025] hover:bg-blue-500/[0.05]"
                      : "hover:bg-white/[0.02]",
                  ].join(" ")}
                >
                  {/* Checkbox */}
                  <span
                    className="h-4 w-4 shrink-0 rounded border border-white/15"
                    aria-hidden="true"
                  />

                  {/* Star */}
                  <span
                    className={[
                      "shrink-0 transition-colors",
                      message.starred
                        ? "text-amber-400"
                        : "text-slate-700 group-hover:text-slate-500",
                    ].join(" ")}
                  >
                    <Star
                      size={15}
                      fill={message.starred ? "currentColor" : "none"}
                    />
                  </span>

                  <SenderAvatar name={message.name} />

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p
                        className={[
                          "truncate text-sm",
                          unread
                            ? "font-bold text-white"
                            : "font-medium text-slate-300",
                        ].join(" ")}
                      >
                        {message.name}
                      </p>

                      {unread && (
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      )}
                    </div>

                    <p
                      className={[
                        "mt-1 truncate text-xs",
                        unread
                          ? "font-semibold text-slate-300"
                          : "text-slate-500",
                      ].join(" ")}
                    >
                      {message.subject}
                    </p>

                    <p className="mt-0.5 truncate text-xs text-slate-700">
                      {message.preview}
                    </p>
                  </div>

                  {/* Status */}
                  <div className="hidden shrink-0 lg:block">
                    <StatusBadge status={message.status} />
                  </div>

                  {/* Date */}
                  <span className="w-20 shrink-0 text-right text-[11px] text-slate-600">
                    {message.date}
                  </span>

                  <ChevronRight
                    size={15}
                    className="shrink-0 text-slate-700 transition-transform group-hover:translate-x-0.5 group-hover:text-slate-400"
                  />
                </button>
              );
            })}
          </div>

          {/* Mobile messages */}
          <div className="divide-y divide-white/5 md:hidden">
            {messages.map((message) => {
              const unread = message.status === "New";

              return (
                <button
                  key={message.id}
                  type="button"
                  className={[
                    "flex w-full gap-3 p-4 text-left",
                    "transition-colors hover:bg-white/[0.02]",
                    unread ? "bg-blue-500/[0.025]" : "",
                  ].join(" ")}
                >
                  <SenderAvatar name={message.name} />

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p
                          className={[
                            "truncate text-sm",
                            unread
                              ? "font-bold text-white"
                              : "font-medium text-slate-300",
                          ].join(" ")}
                        >
                          {message.name}
                        </p>

                        <p className="mt-0.5 truncate text-[10px] text-slate-600">
                          {message.email}
                        </p>
                      </div>

                      <span className="shrink-0 text-[10px] text-slate-700">
                        {message.date}
                      </span>
                    </div>

                    <p
                      className={[
                        "mt-3 truncate text-xs",
                        unread
                          ? "font-semibold text-slate-300"
                          : "text-slate-500",
                      ].join(" ")}
                    >
                      {message.subject}
                    </p>

                    <p className="mt-1 line-clamp-2 text-[11px] leading-5 text-slate-700">
                      {message.preview}
                    </p>

                    <div className="mt-3">
                      <StatusBadge status={message.status} />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-2 border-t border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-600">
              Showing{" "}
              <span className="font-medium text-slate-400">
                {messages.length}
              </span>{" "}
              of 24 messages
            </p>

            <div className="flex items-center gap-4">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 text-xs text-slate-600 transition-colors hover:text-white"
              >
                <Archive size={13} />
                Archive
              </button>

              <button
                type="button"
                className="inline-flex items-center gap-1.5 text-xs text-slate-600 transition-colors hover:text-red-400"
              >
                <Trash2 size={13} />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}