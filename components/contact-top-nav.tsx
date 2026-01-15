"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export function ContactTopNav() {
  const router = useRouter()

  return (
    <div className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="flex items-center p-4 pb-2 justify-between max-w-4xl mx-auto">
        <button
          onClick={() => router.back()}
          className="text-primary flex size-12 shrink-0 items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h2 className="text-[#141117] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
          Contact & Localisation
        </h2>
      </div>
    </div>
  )
}
