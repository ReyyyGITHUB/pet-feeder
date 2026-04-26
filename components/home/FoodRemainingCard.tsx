export default function FoodRemainingCard() {
  return (
    <section className="card-fluid relative overflow-hidden px-4 py-3">
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-xl bg-surface-low" />

      <div className="relative flex items-center justify-between gap-3">
        <div>
          <p className="text-[18px] leading-[1.2] text-on-surface font-semibold">Food Remaining</p>
          <p className="text-[52px] leading-[1] font-extrabold text-primary mt-1">
            85<span className="text-[22px] text-primary/30 ml-1">%</span>
          </p>
          <p className="text-[16px] leading-[1.35] text-on-surface/75 mt-1">Sufficient for ~4 days</p>
        </div>

        <div className="h-20 w-20 rounded-full border-[8px] border-primary border-l-transparent border-b-transparent rotate-45 flex items-center justify-center">
          <div className="-rotate-45 text-primary text-[8px] font-bold tracking-[0.06em]">FEED</div>
        </div>
      </div>
    </section>
  );
}
