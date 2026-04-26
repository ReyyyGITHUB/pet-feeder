"use client";

import { CalendarDays } from "lucide-react";
import { useState } from "react";
import ScheduleSetupModal from "@/components/home/ScheduleSetupModal";

export default function HomeTopBar() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="flex items-center gap-3">
        <section className="flex-1 rounded-xl bg-surface-low p-3">
          <div className="flex items-center gap-2.5">
            <div className="h-10 w-10 rounded-full bg-[radial-gradient(circle_at_30%_25%,#f8f8f8_0%,#a6b6c7_35%,#4a5b6e_100%)] shadow-ambient" />
            <p className="text-[18px] leading-[1.2] text-primary font-semibold">Pet Feeder</p>
          </div>
        </section>

        <button
          type="button"
          onClick={() => setOpenModal(true)}
          className="h-12 w-12 shrink-0 rounded-full bg-surface-low border border-slate-300/50 text-slate-700 inline-flex items-center justify-center transition-colors hover:bg-slate-100 active:bg-slate-200"
          aria-label="Set schedule"
        >
          <CalendarDays size={18} strokeWidth={2.1} />
        </button>
      </div>

      <ScheduleSetupModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}
