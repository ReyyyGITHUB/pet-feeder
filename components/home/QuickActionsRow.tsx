import type { LucideIcon } from "lucide-react";

type QuickActionsRowProps = {
  title: string;
  icon: LucideIcon;
  iconBgClassName?: string;
  iconClassName?: string;
  onClick?: () => void;
};

export default function QuickActionsRow({
  title,
  icon: Icon,
  iconBgClassName = "bg-[#e6eef7]",
  iconClassName = "text-primary",
  onClick,
}: QuickActionsRowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-white rounded-sm min-h-32 px-4 py-4 flex flex-col items-center justify-center gap-3 transition-colors hover:bg-surface-lowest/90 active:bg-surface-low"
    >
      <span className={`h-14 w-14 rounded-full inline-flex items-center justify-center ${iconBgClassName} ${iconClassName}`.trim()}>
        <Icon size={24} strokeWidth={2.1} />
      </span>
      <span className="text-[16px] leading-[1.25] font-semibold text-on-surface">{title}</span>
    </button>
  );
}
