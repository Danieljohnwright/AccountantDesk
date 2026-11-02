import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import DashboardStats from "@/components/dashboard/DashboardStats";
import ClientOverview from "@/components/dashboard/ClientOverview";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#F5F7FA] text-[#172B4D]">
      <Sidebar />

      <main className="min-w-0 flex-1">
        <Header title="Dashboard" />

        <section className="px-10 py-10">
          <h2 className="text-2xl font-semibold tracking-tight">
            Welcome to AccountantDesk
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
            Your accounting practice, organised in one workspace. Manage
            clients, documents, tasks and compliance deadlines without switching
            between multiple systems.
          </p>

          <DashboardStats />
          <ClientOverview />
        </section>
      </main>
    </div>
  );
}
