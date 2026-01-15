import { BottomNav } from "@/components/bottom-nav"
import { MinistriesTopNav } from "@/components/ministries-top-nav"
import { VolunteerSpotlight } from "@/components/volunteer-spotlight"
import { MinistriesGrid } from "@/components/ministries-grid"
import { BibleQuote } from "@/components/bible-quote"

export default function MinistriesPage() {
  return (
    <>
      <MinistriesTopNav />
      <main className="max-w-4xl mx-auto pb-24">
        <VolunteerSpotlight />
        <MinistriesGrid />
        <BibleQuote />
      </main>
    </>
  )
}
