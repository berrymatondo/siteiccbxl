"use client"

import { Navigation } from "lucide-react"
import { useState } from "react"

export function ContactMap() {
  const [selectedAddress, setSelectedAddress] = useState<string>("Forest")

  const addresses = {
    Forest: "Rue des lutins 8, 1190 Forest, Belgique",
    Mons: "Rue Mac Donald 145, 7012 Mons, Belgique",
  }

  const handleGetDirections = () => {
    const address = addresses[selectedAddress as keyof typeof addresses]
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
    window.open(url, "_blank")
  }

  return (
    <div className="relative flex flex-col">
      <div className="flex px-4 py-3">
        <div className="w-full aspect-[16/10] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163841.29964890184!2d4.157991749999999!3d50.5485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c4f1e4b3e0e5%3A0x9e6f5b4c5d3e2f1a!2sRue%20des%20Lutins%208%2C%201190%20Forest%2C%20Belgique!5e0!3m2!1sfr!2sbe!4v1234567890123"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Carte des emplacements Impact Church"
          />
        </div>
      </div>

      <div className="flex gap-2 px-4 py-2">
        <button
          onClick={() => setSelectedAddress("Forest")}
          className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            selectedAddress === "Forest"
              ? "bg-primary text-white"
              : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          Forest
        </button>
        <button
          onClick={() => setSelectedAddress("Mons")}
          className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            selectedAddress === "Mons"
              ? "bg-primary text-white"
              : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          Mons
        </button>
      </div>

      <div className="flex px-4 py-2 relative z-10">
        <button
          onClick={handleGetDirections}
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-6 flex-1 bg-primary text-white gap-3 shadow-lg hover:bg-primary/90 transition-all active:scale-95 font-bold leading-normal tracking-[0.015em]"
        >
          <Navigation className="h-5 w-5" />
          <span className="truncate">Obtenir l'itinéraire</span>
        </button>
      </div>
    </div>
  )
}
