"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Dashboard", symbol: "▦", href: "/" },
  { label: "Clients", symbol: "◫", href: "/clients" },
  { label: "Documents", symbol: "▤", href: "/documents" },
  { label: "Tasks", symbol: "☑", href: "/tasks" },
  {
    label: "Compliance Calendar",
    symbol: "▦",
    href: "/calendar",
  },
  { label: "Reports", symbol: "▥", href: "/reports" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-64 shrink-0 flex-col bg-[#14263D] text-white">
      <div className="border-b border-white/10 px-7 py-8">
        <div className="text-xl font-semibold tracking-tight">
          Accountant
          <span className="text-[#5FC9A3]">Desk</span>
        </div>

        <p className="mt-1 text-xs tracking-widest text-slate-400">BY ACCODE</p>
      </div>

      <div className="px-5 pt-8">
        <p className="mb-4 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
          Workspace
        </p>

        <nav aria-label="Main navigation" className="space-y-1">
          {navigation.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(`${item.href}/`));

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-colors ${
                  isActive
                    ? "bg-[#25435B] font-medium text-white"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span aria-hidden="true" className="w-5 text-center text-lg">
                  {item.symbol}
                </span>

                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto border-t border-white/10 px-7 py-6">
        <p className="text-sm font-medium">Demo Practice</p>

        <p className="mt-1 text-xs text-slate-400">Development workspace</p>
      </div>
    </aside>
  );
}
