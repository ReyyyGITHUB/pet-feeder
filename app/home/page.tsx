import { Camera, History } from "lucide-react";
import FoodRemainingCard from "@/components/home/FoodRemainingCard";
import HomeGreeting from "@/components/home/HomeGreeting";
import HomeTopBar from "@/components/home/HomeTopBar";
import ManualFeedSection from "@/components/home/ManualFeedSection";
import QuickActionsRow from "@/components/home/QuickActionsRow";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-surface px-4 py-4">
      <div className="mx-auto flex w-full max-w-md flex-col gap-3">
        <HomeTopBar />
        <HomeGreeting />

        <div className="pt-3">
          <FoodRemainingCard />
        </div>

        <div className="pt-8 pb-4">
          <ManualFeedSection />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <QuickActionsRow title="See Camera" icon={Camera} iconBgClassName="bg-[#e6eef7]" iconClassName="text-primary" />
          <QuickActionsRow title="Feed History" icon={History} iconBgClassName="bg-[#c8f2f6]" iconClassName="text-[#036b81]" />
        </div>
      </div>
    </main>
  );
}
