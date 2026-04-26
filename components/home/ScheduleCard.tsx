import CTAButton from "@/components/CTAButton";

export default function ScheduleCard() {
  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-[18px] leading-[1.2] font-semibold text-on-surface">Scheduler Set</h2>
        <button type="button" className="text-[16px] leading-[1.2] text-primary">Edit</button>
      </div>

      <div className="rounded-xl bg-surface-container-high p-4">
        <div className="rounded-full bg-surface-low px-5 py-2 text-center mb-4">
          <div className="grid grid-cols-3 items-center text-[32px] leading-none text-on-surface/35">
            <span>06</span>
            <span className="text-on-surface">:</span>
            <span>28</span>
          </div>
          <div className="grid grid-cols-3 items-center text-[32px] leading-none text-on-surface/20 mt-1">
            <span>07</span>
            <span>&nbsp;</span>
            <span>29</span>
          </div>
        </div>

        <CTAButton className="w-full min-h-12 px-4 py-3 text-[18px] text-center">+ Add Schedule</CTAButton>
      </div>
    </section>
  );
}
