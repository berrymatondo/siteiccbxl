"use client"

import { Search, ArrowLeft } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function EventsTopNav() {
  const [activeFilter, setActiveFilter] = useState("events")
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  return (
    <div className="sticky top-0 z-50 bg-white/80 dark:bg-[#191121]/80 backdrop-blur-md">
      <div className="flex items-center p-4 pb-2 justify-between max-w-4xl mx-auto">
        <button
          onClick={() => router.back()}
          className="text-primary flex size-12 shrink-0 items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h2 className="text-[#141117] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Activités
        </h2>
        <div className="flex w-10 items-center justify-end">
          <button
            onClick={handleSearch}
            className={`flex size-10 cursor-pointer items-center justify-center rounded-full transition-colors ${
              isSearchOpen
                ? "bg-primary/10 text-primary"
                : "hover:bg-black/5 dark:hover:bg-white/10 text-[#141117] dark:text-white"
            }`}
          >
            <Search className="h-6 w-6" />
          </button>
        </div>
      </div>

      {isSearchOpen && (
        <div className="px-4 pb-2 max-w-4xl mx-auto">
          <div className="flex w-full items-stretch rounded-xl h-12 bg-white dark:bg-[#251a30] shadow-sm border border-primary">
            <div className="text-[#7f20df] flex items-center justify-center pl-4">
              <Search className="h-5 w-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex w-full border-none bg-transparent focus:ring-0 text-base font-normal placeholder:text-gray-400 px-3"
              placeholder="Rechercher un événement..."
              autoFocus
            />
          </div>
        </div>
      )}

      {/* Segmented Buttons */}
      <div className="flex px-4 py-3 max-w-4xl mx-auto">
        <div className="flex h-11 flex-1 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 p-1">
          <button
            onClick={() => setActiveFilter("events")}
            className={`flex h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-semibold transition-all ${
              activeFilter === "events"
                ? "bg-white dark:bg-gray-700 shadow-sm text-[#7f20df] dark:text-white"
                : "text-[#756487] dark:text-gray-400"
            }`}
          >
            <span className="truncate">Événements</span>
          </button>
          <button
            onClick={() => setActiveFilter("groups")}
            className={`flex h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-semibold transition-all ${
              activeFilter === "groups"
                ? "bg-white dark:bg-gray-700 shadow-sm text-[#7f20df] dark:text-white"
                : "text-[#756487] dark:text-gray-400"
            }`}
          >
            <span className="truncate">Groupes d&apos;Impact</span>
          </button>
        </div>
      </div>
    </div>
  )
}
