import CTAButton from "@/components/CTAButton";

export default function ManualFeedSection() {
  return (
    <section className="flex flex-col items-center text-center py-1">
      <CTAButton className="h-44 w-44 rounded-full shadow-ambient bg-[linear-gradient(180deg,#a9c8e8_0%,#2a7cb8_55%,#0f5f98_100%)] text-on-primary flex flex-col items-center justify-center gap-1.5">
        <span className="text-[26px] leading-none">F</span>
        <span className="text-[18px] leading-[1.2] font-semibold text-on-primary">Manual Feed</span>
      </CTAButton>

      <p className="text-[16px] leading-[1.35] mt-2 text-on-surface/80">Dispenses 1 portion (50g)</p>
    </section>
  );
}
