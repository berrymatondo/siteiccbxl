"use client"

import { ArrowLeft, Bell, Search } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function TeachingsTopNav() {
  const [selectedCategory, setSelectedCategory] = useState("Tout")
  const [searchQuery, setSearchQuery] = useState("")
  const [notificationsEnabled, setNotificationsEnabled] = useState(false)
  const categories = ["Tout", "Sermons", "Études Bibliques", "Maturité", "Louange"]

  const handleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled)
    if (!notificationsEnabled) {
      alert("Notifications activées! Vous recevrez des alertes pour les nouveaux enseignements.")
    } else {
      alert("Notifications désactivées.")
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-[#f7f6f8]/80 dark:bg-[#191121]/80 backdrop-blur-md">
      <div className="flex items-center p-4 pb-2 justify-between max-w-4xl mx-auto">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-[#141117] dark:text-white">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-xl font-bold leading-tight tracking-tight text-[#141117] dark:text-white">
            Enseignements
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleNotifications}
            className={`flex items-center justify-center rounded-full p-2 transition-colors ${
              notificationsEnabled
                ? "bg-primary/10 text-primary"
                : "hover:bg-black/5 dark:hover:bg-white/5 text-[#141117] dark:text-white"
            }`}
          >
            <Bell className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-2 max-w-4xl mx-auto">
        <div className="flex w-full items-stretch rounded-xl h-12 bg-white dark:bg-[#251a30] shadow-sm border border-black/5 dark:border-white/5">
          <div className="text-[#7f20df] flex items-center justify-center pl-4">
            <Search className="h-5 w-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex w-full border-none bg-transparent focus:ring-0 text-base font-normal placeholder:text-gray-400 px-3"
            placeholder="Rechercher un message, un orateur..."
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-3 px-4 py-3 overflow-x-auto no-scrollbar max-w-4xl mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`flex h-9 shrink-0 items-center justify-center rounded-full px-5 transition-all ${
              selectedCategory === category
                ? "bg-[#7f20df] shadow-sm"
                : "bg-white dark:bg-[#251a30] border border-black/5 dark:border-white/5 hover:border-primary/50"
            }`}
          >
            <p
              className={`text-sm font-semibold ${
                selectedCategory === category ? "text-white" : "text-[#141117] dark:text-white"
              }`}
            >
              {category}
            </p>
          </button>
        ))}
      </div>
    </header>
  )
}
