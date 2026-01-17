import { TopNav } from "@/components/top-nav";
import { BottomNav } from "@/components/bottom-nav";
import { HeroSection } from "@/components/hero-section";
import { VisionStatement } from "@/components/vision-statement";
import { QuickActions } from "@/components/quick-actions";
import { YoutubeFeatured } from "@/components/youtube-featured";
import { YoutubeHeroCard } from "@/components/youtube-hero-card";
import { LeadershipTeam } from "@/components/leadership-team";
import { JoinUsSection } from "@/components/join-us-section";
import { AccueilSeries } from "@/components/action-accueil";
import { FeaturedResource } from "@/components/featured-resource";
import { MainFooter } from "@/components/main-footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <TopNav />
      <HeroSection />
      <main className="max-w-5xl mx-auto pb-24">
        <div className="md:fle md:flex-col items-center justify-center  rounded-lg md:mx-4 ">
          <div className="md:w-full md:flex md:justify-center  bg-white relative border rounded-xl">
            <div className="">
              <YoutubeHeroCard />
            </div>
          </div>
          <div className="bg-white">
            <AccueilSeries />
          </div>
        </div>
        <LeadershipTeam />
      </main>
      <MainFooter />
    </div>
  );
}
