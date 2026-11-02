type DashboardStat = {
  label: string;
  value: string;
  description: string;
};

const stats: DashboardStat[] = [
  {
    label: "Total Clients",
    value: "48",
    description: "Active practice clients",
  },
  {
    label: "Pending Documents",
    value: "12",
    description: "Awaiting client uploads",
  },
  {
    label: "Outstanding Tasks",
    value: "7",
    description: "Require attention",
  },
  {
    label: "Upcoming Deadlines",
    value: "5",
    description: "Next 30 days",
  },
];

export default function DashboardStats() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-slate-200 bg-white p-6"
        >
          <p className="text-sm font-medium text-slate-500">{stat.label}</p>

          <p className="mt-4 text-3xl font-semibold tracking-tight text-[#172B4D]">
            {stat.value}
          </p>

          <p className="mt-3 text-xs text-slate-400">{stat.description}</p>
        </div>
      ))}
    </div>
  );
}
