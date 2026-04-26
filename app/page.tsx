import CTAButton from "@/components/CTAButton";

export default function Home() {
  return (
    <main className="h-[100dvh] overflow-hidden bg-surface px-6 py-8">
      <section className="mx-auto flex h-full w-full max-w-md flex-col rounded-xl bg-surface-low p-8 shadow-ambient">
        <header className="pt-2">
          <p className="headline-sm text-primary flex items-center justify-center gap-2 font-semibold">
            <span className="label-md">~~~</span>
            Cerulean
          </p>
        </header>

        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <h1 className="display-md text-primary max-w-sm">
            Smart Feeding for Your Aquatic Friends
          </h1>

          <p className="body-lg text-on-surface/75 mt-8 max-w-xs">
            Automate your fish tank maintenance with precision and ease.
          </p>
        </div>

        <div className="pb-2">
          <CTAButton href="/home" className="w-full min-h-14 px-6 py-8 text-xl sm:text-2xl text-center">
            Get Started -&gt;
          </CTAButton>
        </div>
      </section>
    </main>
  );
}

