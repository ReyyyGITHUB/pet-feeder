import FoodRemainingCard from "@/components/home/FoodRemainingCard";
import HomeGreeting from "@/components/home/HomeGreeting";
import HomeTopBar from "@/components/home/HomeTopBar";
import LastFedCard from "@/components/home/LastFedCard";
import ManualFeedSection from "@/components/home/ManualFeedSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-surface px-4 py-4">
      <div className="mx-auto flex w-full max-w-md flex-col gap-3">
        <HomeTopBar />
        <HomeGreeting />

        <div className="pt-3">
          <FoodRemainingCard />
        </div>

        <div className="pt-8 pb-8">
          <ManualFeedSection />
        </div>

        <LastFedCard />
      </div>
    </main>
  );
}
