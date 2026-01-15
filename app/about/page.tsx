import { AboutTopNav } from "@/components/about-top-nav"
import { BottomNav } from "@/components/bottom-nav"
import { PastorProfile } from "@/components/pastor-profile"
import { VisionMission } from "@/components/vision-mission"
import { HistoryTimeline } from "@/components/history-timeline"
import { BeliefAccordion } from "@/components/belief-accordion"
import { AboutCTA } from "@/components/about-cta"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f7f6f8] dark:bg-[#191121]">
      <AboutTopNav />
      <main className="max-w-4xl mx-auto pb-24">
        <PastorProfile />
        <VisionMission />
        <HistoryTimeline />
        <BeliefAccordion />
        <AboutCTA />
      </main>
    </div>
  )
}
