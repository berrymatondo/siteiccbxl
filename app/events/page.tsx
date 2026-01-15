import { EventsTopNav } from "@/components/events-top-nav"
import { DatePicker } from "@/components/date-picker"
import { EventsList } from "@/components/events-list"
import { ImpactGroups } from "@/components/impact-groups"
import { BottomNav } from "@/components/bottom-nav"
import { Plus } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#f7f6f8] dark:bg-[#191121] pb-24">
      <EventsTopNav />
      <DatePicker />
      <EventsList />
      <ImpactGroups />

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-6 size-14 rounded-full bg-[#7f20df] text-white shadow-xl shadow-[#7f20df]/40 flex items-center justify-center transition-transform active:scale-90 z-50 hover:bg-[#6a1bc0]">
        <Plus className="h-8 w-8" />
      </button>

    </div>
  )
}
