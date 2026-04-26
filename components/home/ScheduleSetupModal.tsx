"use client";

import { X } from "lucide-react";
import { useMemo, useRef, useState, useEffect } from "react";
import CTAButton from "@/components/CTAButton";

type ScheduleSetupModalProps = {
  open: boolean;
  onClose: () => void;
};

type WheelColumnProps = {
  label: string;
  max: number;
  value: number;
  onChange: (next: number) => void;
};

function WheelColumn({ label, max, value, onChange }: WheelColumnProps) {
  const itemHeight = 40;
  const topSpacer = 80;
  const wheelRef = useRef<HTMLDivElement>(null);
  const values = useMemo(() => Array.from({ length: max + 1 }, (_, index) => index), [max]);

  useEffect(() => {
    const node = wheelRef.current;
    if (!node) return;
    const targetTop = value * itemHeight;
    if (Math.abs(node.scrollTop - targetTop) > 2) {
      node.scrollTo({ top: targetTop, behavior: "smooth" });
    }
  }, [value]);

  return (
    <div>
      <p className="text-[8px] uppercase tracking-[0.08em] text-on-surface/65 mb-1">{label}</p>
      <div className="relative rounded-lg bg-surface-container-high/65">
        <div className="pointer-events-none absolute left-2 right-2 top-1/2 h-10 -translate-y-1/2 rounded-md bg-surface-lowest/95 ghost-border" />
        <div
          ref={wheelRef}
          className="h-52 overflow-y-auto snap-y snap-mandatory scrollbar-hide"
          onScroll={(event) => {
            const next = Math.round(event.currentTarget.scrollTop / itemHeight);
            if (next >= 0 && next <= max && next !== value) {
              onChange(next);
            }
          }}
        >
          <div style={{ height: topSpacer }} />
          {values.map((item) => {
            const active = item === value;
            return (
              <button
                key={`${label}-${item}`}
                type="button"
                className={`block h-10 w-full snap-center text-center text-[18px] leading-10 transition ${
                  active ? "font-semibold text-primary" : "text-on-surface/40"
                }`}
                onClick={() => onChange(item)}
              >
                {String(item).padStart(2, "0")}
              </button>
            );
          })}
          <div style={{ height: topSpacer }} />
        </div>
      </div>
    </div>
  );
}

export default function ScheduleSetupModal({ open, onClose }: ScheduleSetupModalProps) {
  const [hour, setHour] = useState(7);
  const [minute, setMinute] = useState(0);
  const [portion, setPortion] = useState("50");

  const formattedTime = useMemo(() => {
    const hh = String(hour).padStart(2, "0");
    const mm = String(minute).padStart(2, "0");
    return `${hh}:${mm}`;
  }, [hour, minute]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 px-4">
      <div className="w-full max-w-sm rounded-xl bg-surface-lowest p-5 shadow-ambient ghost-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[18px] leading-[1.2] font-semibold text-on-surface">Set Feeding Schedule</h3>
          <button
            type="button"
            onClick={onClose}
            className="h-8 w-8 rounded-full bg-surface-low text-primary inline-flex items-center justify-center"
            aria-label="Close popup"
          >
            <X size={16} strokeWidth={2.5} />
          </button>
        </div>

        <div className="rounded-lg bg-surface px-4 py-3 mb-4 text-center">
          <p className="text-[8px] uppercase tracking-[0.08em] text-on-surface/65">Selected Time</p>
          <p className="text-[32px] leading-none font-bold text-primary mt-1">{formattedTime}</p>
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 mb-4">
          <WheelColumn label="Hour" max={23} value={hour} onChange={setHour} />
          <p className="text-[32px] font-semibold text-primary mt-5">:</p>
          <WheelColumn label="Minute" max={59} value={minute} onChange={setMinute} />
        </div>

        <label className="block">
          <span className="block text-[8px] uppercase tracking-[0.06em] text-on-surface/70 mb-1">Portion (g)</span>
          <input
            type="number"
            min={1}
            value={portion}
            onChange={(event) => setPortion(event.target.value)}
            className="input-fluid w-full px-3 py-2 text-[16px]"
          />
        </label>

        <div className="mt-5 flex gap-2">
          <CTAButton variant="secondary" className="flex-1 min-h-11 text-[16px]" onClick={onClose}>
            Cancel
          </CTAButton>
          <CTAButton className="flex-1 min-h-11 text-[16px]" onClick={onClose}>
            Save
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
