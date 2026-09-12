export type DashboardStat = {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
};

export type ProjectStatus =
  | "In Progress"
  | "Completed"
  | "Review"
  | "On Hold";

export type Project = {
  id: string;
  name: string;
  client: string;
  status: ProjectStatus;
  progress: number;
  amount: string;
};

export type Activity = {
  id: string;
  title: string;
  description: string;
  time: string;
};