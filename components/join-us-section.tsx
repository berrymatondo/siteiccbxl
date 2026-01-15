"use client"

import { CalendarCheck, MapPin } from "lucide-react"

export function JoinUsSection() {
  const handleGetDirections = () => {
    const address = "Rue des lutins 8, 1190 Forest, Belgique"
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
    window.open(url, "_blank")
  }

  return (
    <section className="px-4 mb-8">
      <div className="relative bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-gray-100 dark:border-zinc-800 shadow-sm overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/image.jpeg)",
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{"Rejoignez-nous dès ce dimanche!"}</h3>
              <p
                onClick={handleGetDirections}
                className="text-xs text-gray-200 flex gap-2 cursor-pointer hover:text-white transition-colors"
              >
                <MapPin className="h-4 w-4" /> <span>{"Rue des lutins 8, 1190 Forest, Belgique"}</span>
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 rounded-lg">
              <div className="size-10 flex items-center justify-center bg-[#7f20df] rounded-md font-bold text-white text-xs">
                1er
              </div>
              <div>
                <p className="font-bold text-sm text-white">Culte de Célébration</p>
                <p className="text-xs text-gray-200 italic">09h00 — 11h00</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-lg">
              <div className="size-10 flex items-center justify-center bg-[#7f20df] rounded-md font-bold text-white text-xs">
                2ème
              </div>
              <div>
                <p className="font-bold text-sm text-white">Culte de Célébration</p>
                <p className="text-xs text-gray-200 italic">11h30 — 13h30</p>
              </div>
            </div>
          </div>
          <div className="md:flex gap-2 justify-between">
            <button
              onClick={handleGetDirections}
              className="w-full mt-6 py-3 px-4 border border-[#7f20df]/20 bg-[#7f20df] text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#7f20df]/90 active:scale-[0.98] transition-all"
            >
              <CalendarCheck className="h-4 w-4" />
              {"Nos enseignements"}
            </button>
            <button
              onClick={handleGetDirections}
              className="w-full mt-6 py-3 px-4 border border-[#7f20df]/20 bg-[#7f20df] text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#7f20df]/90 active:scale-[0.98] transition-all"
            >
              <CalendarCheck className="h-4 w-4" />
              {"Nos activités"}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
