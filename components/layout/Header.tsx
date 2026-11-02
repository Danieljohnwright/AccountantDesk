type HeaderProps = {
  title: string;
  subtitle?: string;
};

export default function Header({
  title,
  subtitle = "Practice overview",
}: HeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-10 py-6">
      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
          {subtitle}
        </p>

        <h1 className="mt-1 text-2xl font-semibold tracking-tight">{title}</h1>
      </div>

      <div
        aria-label="Demo practice profile"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E0F4EB] text-sm font-semibold text-[#207A59]"
      >
        AD
      </div>
    </header>
  );
}
