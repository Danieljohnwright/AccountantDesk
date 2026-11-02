import type { ReactNode } from "react";
import Sidebar from "@/components/layout/Sidebar";

type WorkspaceLayoutProps = {
  children: ReactNode;
};

export default function WorkspaceLayout({ children }: WorkspaceLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#F5F7FA] text-[#172B4D]">
      <Sidebar />

      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
