export default function HomeGreeting() {
  return (
    <div className="flex items-end justify-between gap-2">
      <div>
        <p className="text-[8px] leading-[1.3] text-on-surface/80 tracking-[0.08em]">Hello,</p>
        <p className="text-[24px] leading-[1.05] font-extrabold text-on-surface">Buddy</p>
      </div>

      <div className="rounded-full bg-secondary-container px-3 py-1 text-[8px] leading-none text-on-secondary-container">
        Feeder Online
      </div>
    </div>
  );
}
