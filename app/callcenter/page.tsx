import HomeAltActionCards from "@/components/callcenter/home-alt-action-cards";
import HomeAltFooter from "@/components/callcenter/home-alt-footer";
import HomeAltHero from "@/components/callcenter/home-alt-hero";
import HomeAltQuickActions from "@/components/callcenter/home-alt-quick-actions";
import HomeAltSchedule from "@/components/callcenter/home-alt-schedule";
import HomeAltTopNav from "@/components/callcenter/home-alt-top-nav";
import { TopNav } from "@/components/top-nav";

export default function CallCenterPage() {
  return (
    <main className="min-h-screen bg-[#f6f6f8] dark:bg-[#101622]">
      <TopNav />

      <HomeAltHero />
      <HomeAltQuickActions />
      <HomeAltSchedule />
      <HomeAltActionCards />
    </main>
  );
}
