import { AdminShell } from "@/components/Admin/common/AdminShell";

export default function ProtectedAdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AdminShell>{children}</AdminShell>;
}