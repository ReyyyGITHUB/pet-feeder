"use client";

import { Bell, CalendarDays } from "lucide-react";
import { useState } from "react";
import ScheduleSetupModal from "@/components/home/ScheduleSetupModal";

export default function HomeTopBar() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="flex items-center gap-3">
        <section className="flex-1 rounded-xl bg-surface-low p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="h-10 w-10 rounded-full bg-[radial-gradient(circle_at_30%_25%,#f8f8f8_0%,#a6b6c7_35%,#4a5b6e_100%)] shadow-ambient" />
              <p className="text-[18px] leading-[1.2] text-primary font-semibold">Pawsitive</p>
            </div>

            <button
              type="button"
              className="h-9 w-9 rounded-full bg-surface-lowest text-primary inline-flex items-center justify-center"
              aria-label="Notifications"
            >
              <Bell size={16} strokeWidth={2.25} />
            </button>
          </div>
        </section>

        <button
          type="button"
          onClick={() => setOpenModal(true)}
          className="h-14 w-14 shrink-0 rounded-full bg-gradient-primary text-on-primary shadow-ambient inline-flex items-center justify-center"
          aria-label="Set schedule"
        >
          <CalendarDays size={22} strokeWidth={2.25} />
        </button>
      </div>

      <ScheduleSetupModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}
