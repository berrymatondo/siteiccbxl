import { TopNav } from "@/components/top-nav"
import { BottomNav } from "@/components/bottom-nav"
import { HeroSection } from "@/components/hero-section"
import { VisionStatement } from "@/components/vision-statement"
import { QuickActions } from "@/components/quick-actions"
import { YoutubeFeatured } from "@/components/youtube-featured"
import { YoutubeHeroCard } from "@/components/youtube-hero-card"
import { LeadershipTeam } from "@/components/leadership-team"
import { JoinUsSection } from "@/components/join-us-section"
import { AccueilSeries } from "@/components/action-accueil"
import { FeaturedResource } from "@/components/featured-resource"
import { MainFooter } from "@/components/main-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <TopNav />
      <main className="max-w-4xl mx-auto pb-24">
        <HeroSection />
        <YoutubeHeroCard />
      
        <AccueilSeries/>
        <LeadershipTeam />
      </main>
      <MainFooter />
    </div>
  )
}
