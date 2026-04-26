type OnboardingProgressProps = {
  total?: number;
  active?: number;
};

export default function OnboardingProgress({
  total = 3,
  active = 1,
}: OnboardingProgressProps) {
  return (
    <div className="flex items-center gap-sm" aria-label="Onboarding progress">
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index + 1 === active;

        return (
          <span
            key={`dot-${index + 1}`}
            className={isActive ? "h-2.5 w-8 rounded-full bg-primary" : "h-2.5 w-2.5 rounded-full bg-surface-high"}
          />
        );
      })}
    </div>
  );
}
