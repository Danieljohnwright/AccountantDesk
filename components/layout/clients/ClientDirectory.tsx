"use client";

import { useState } from "react";

type ClientStatus = "Active" | "Awaiting Documents" | "Inactive";

type Client = {
  id: string;
  name: string;
  contact: string;
  service: string;
  status: ClientStatus;
};

const clients: Client[] = [
  {
    id: "CL-001",
    name: "Cedarstone Trading",
    contact: "accounts@cedarstone.example",
    service: "Monthly Bookkeeping",
    status: "Awaiting Documents",
  },
  {
    id: "CL-002",
    name: "Northfield Consulting",
    contact: "finance@northfield.example",
    service: "VAT Administration",
    status: "Active",
  },
  {
    id: "CL-003",
    name: "Harbourline Logistics",
    contact: "admin@harbourline.example",
    service: "Payroll Processing",
    status: "Active",
  },
  {
    id: "CL-004",
    name: "Bluefern Holdings",
    contact: "info@bluefern.example",
    service: "Annual Financial Statements",
    status: "Awaiting Documents",
  },
  {
    id: "CL-005",
    name: "Westbridge Services",
    contact: "office@westbridge.example",
    service: "Tax Administration",
    status: "Inactive",
  },
];

const statusStyles: Record<ClientStatus, string> = {
  Active: "bg-emerald-50 text-emerald-700",
  "Awaiting Documents": "bg-amber-50 text-amber-700",
  Inactive: "bg-slate-100 text-slate-600",
};

export default function ClientDirectory() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClients = clients.filter((client) => {
    const query = searchQuery.trim().toLowerCase();

    return (
      client.name.toLowerCase().includes(query) ||
      client.id.toLowerCase().includes(query) ||
      client.contact.toLowerCase().includes(query) ||
      client.service.toLowerCase().includes(query)
    );
  });

  return (
    <div className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
        <div>
          <h3 className="text-base font-semibold text-[#172B4D]">
            Client Directory
          </h3>
          <p className="mt-1 text-xs text-slate-400">
            All clients registered with your practice
          </p>
        </div>

        <span className="text-xs font-medium text-slate-500">
          {clients.length} demo clients
        </span>
      </div>

      <div className="border-b border-slate-200 px-6 py-5">
        <label
          htmlFor="client-search"
          className="mb-2 block text-xs font-medium text-slate-600"
        >
          Search clients
        </label>

        <input
          id="client-search"
          type="search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search by name, ID, email or service..."
          className="w-full max-w-md rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-[#172B4D] outline-none transition-colors placeholder:text-slate-400 focus:border-[#207A59] focus:ring-2 focus:ring-[#207A59]/10"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#F8FAFC] text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium">
                Client ID
              </th>
              <th scope="col" className="px-6 py-4 font-medium">
                Client Name
              </th>
              <th scope="col" className="px-6 py-4 font-medium">
                Contact
              </th>
              <th scope="col" className="px-6 py-4 font-medium">
                Service
              </th>
              <th scope="col" className="px-6 py-4 font-medium">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {clients.map((client) => (
              <tr key={client.id} className="hover:bg-slate-50">
                <td className="whitespace-nowrap px-6 py-5 text-slate-500">
                  {client.id}
                </td>

                <td className="whitespace-nowrap px-6 py-5 font-medium text-[#172B4D]">
                  {client.name}
                </td>

                <td className="px-6 py-5 text-slate-500">{client.contact}</td>

                <td className="px-6 py-5 text-slate-600">{client.service}</td>

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
    </div>
  );
}
