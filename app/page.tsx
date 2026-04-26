import { ArrowRight } from "lucide-react";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";

export default function OnboardingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#3158c9] px-4 py-6 sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-6xl items-center justify-center">
        <div className="relative w-full max-w-sm rounded-[2rem] px-6 pb-6 pt-6">
          <div className="absolute inset-x-0 top-0 h-28 rounded-t-[2rem]" />
          <div className="relative z-10 flex h-full min-h-[80vh] flex-col">
            <section className="text-center mt-2">
              <h1 className="mx-auto max-w-[19rem] text-[28px] font-extrabold leading-tight text-white">
                Smart Feeding for Your Aquatic Friends
              </h1>
              <p className="mx-auto mt-3 max-w-[18rem] text-[12px] leading-relaxed text-white/60">
                Control feeding schedule with one tap and keep your fish healthy
                every day.
              </p>
            </section>

            <div className="relative mt-4 flex flex-1 items-center justify-center">
              <div className="pointer-events-none absolute bottom-6 h-56 w-[28rem] rounded-full bg-cyan-300/25 blur-3xl" />
              <Image
                src="/assets/ikan_akuarium_pet-feeder.png"
                alt="Smart pet feeder aquarium illustration"
                width={640}
                height={389}
                loading="lazy"
                className="relative z-10 h-auto w-[200%] max-w-[860px] drop-shadow-[0_24px_32px_rgba(10,20,60,0.45)]"
              />
            </div>

            <div className="mt-5">
              <CTAButton
                href="/home"
                className="w-full min-h-14 px-6 text-[18px] font-semibold text-center gap-2"
              >
                <span>Get Started</span>
                <ArrowRight size={18} strokeWidth={2.4} />
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
