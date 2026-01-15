import { TeachingsTopNav } from "@/components/teachings-top-nav"
import { BottomNav } from "@/components/bottom-nav"
import { LatestSermons } from "@/components/latest-sermons"
import { BibleStudies } from "@/components/bible-studies"
import { MaturitySeries } from "@/components/maturity-series"

export default function TeachingsPage() {
  return (
    <div className="min-h-screen bg-[#f7f6f8] dark:bg-[#191121]">
      <TeachingsTopNav />
      <main className="pb-24">
        <LatestSermons />
        <BibleStudies />
        <MaturitySeries />
      </main>
    </div>
  )
}
