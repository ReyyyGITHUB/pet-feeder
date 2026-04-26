import { History } from "lucide-react";

export default function LastFedCard() {
  return (
    <section className="card-fluid px-4 py-3 flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
          <History size={16} strokeWidth={2.2} />
        </div>

        <div>
          <p className="text-[16px] leading-[1.2] font-semibold text-on-surface">
            Last Fed
          </p>
          <p className="text-[4px] leading-[1.35] text-on-surface/70">
            Today, 08:30 AM
          </p>
        </div>
      </div>

      <p className="text-[16px] leading-[1.2] font-semibold text-primary">
        50g
      </p>
    </section>
  );
}
