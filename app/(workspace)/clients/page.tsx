import Header from "@/components/layout/Header";
import ClientDirectory from "@/components/layout/clients/ClientDirectory";
export default function ClientsPage() {
  return (
    <>
      <Header title="Clients" subtitle="Client management" />

      <section className="px-10 py-10">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Your Clients
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Manage your practices client records, services and documentation.
            </p>
          </div>
        </div>

        <ClientDirectory />
      </section>
    </>
  );
}
