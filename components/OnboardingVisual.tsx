export default function OnboardingVisual() {
  return (
    <div className="card-fluid p-lg shadow-ambient relative overflow-hidden">
      <div className="absolute -top-10 -right-8 h-32 w-32 rounded-full bg-secondary-container opacity-50" />
      <div className="absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-surface-low opacity-90" />

      <div className="relative flex items-center gap-md">
        <div className="pulse-indicator">
          <div className="h-20 w-20 rounded-full bg-surface-lowest flex items-center justify-center text-2xl">
            PF
          </div>
        </div>

        <div className="flex-1">
          <p className="label-sm text-secondary uppercase tracking-[0.12em]">Connected Device</p>
          <p className="headline-sm text-on-surface">Rayhan&apos;s Feeder</p>
          <p className="label-md text-on-surface/70">Online and ready to sync schedule</p>
        </div>
      </div>

      <div className="mt-5 section-layer p-lg">
        <p className="label-sm text-secondary uppercase tracking-[0.12em]">Next Feed</p>
        <p className="display-md text-primary">2h</p>
        <p className="body-lg text-on-surface/80">Auto dispense at 07:00 with 45g portion.</p>
      </div>
    </div>
  );
}

