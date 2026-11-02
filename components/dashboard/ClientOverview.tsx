type Client = {
  name: string;
  service: string;
  documents: string;
  status: "Action Required" | "Up to Date" | "In Progress";
};

const clients: Client[] = [
  {
    name: "Cedarstone Trading",
    service: "Monthly Bookkeeping",
    documents: "Bank statements outstanding",
    status: "Action Required",
  },
  {
    name: "Northfield Consulting",
    service: "VAT Administration",
    documents: "All documents received",
    status: "Up to Date",
  },
  {
    name: "Harbourline Logistics",
    service: "Payroll Processing",
    documents: "Payslips under review",
    status: "In Progress",
  },
  {
    name: "Bluefern Holdings",
    service: "Annual Financial Statements",
    documents: "Supporting documents pending",
    status: "Action Required",
  },
];

const statusStyles: Record<Client["status"], string> = {
  "Action Required": "bg-amber-50 text-amber-700",
  "Up to Date": "bg-emerald-50 text-emerald-700",
  "In Progress": "bg-blue-50 text-blue-700",
};

export default function ClientOverview() {
  return (
    <section className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
        <div>
          <h2 className="text-base font-semibold text-[#172B4D]">
            Client Overview
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Recent client activity and outstanding requirements
          </p>
        </div>

        <span className="text-xs font-medium text-[#207A59]">Demo clients</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#F8FAFC] text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium">
                Client
              </th>
              <th scope="col" className="px-6 py-4 font-medium">
                Service
              </th>
              <th scope="col" className="px-6 py-4 font-medium">
                Documents
              </th>
              <th scope="col" className="px-6 py-4 font-medium">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {clients.map((client) => (
              <tr key={client.name} className="hover:bg-slate-50">
                <td className="whitespace-nowrap px-6 py-5 font-medium text-[#172B4D]">
                  {client.name}
                </td>

                <td className="whitespace-nowrap px-6 py-5 text-slate-600">
                  {client.service}
                </td>

                <td className="px-6 py-5 text-slate-500">{client.documents}</td>

                <td className="whitespace-nowrap px-6 py-5">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${statusStyles[client.status]}`}
                  >
                    {client.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
