"use client"

import { ArrowLeft, Share2 } from "lucide-react"
import { useRouter } from "next/navigation"

export function AboutTopNav() {
  const router = useRouter()

  return (
    <header className="sticky top-0 z-50 bg-[#f7f6f8]/80 dark:bg-[#191121]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="flex items-center justify-between p-4 h-16 max-w-4xl mx-auto">
        <button
          onClick={() => router.back()}
          className="text-[#7f20df] flex size-12 shrink-0 items-center justify-center"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h2 className="text-[#141117] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          À Propos
        </h2>
        <button className="flex items-center justify-center h-12 w-12 text-[#141117] dark:text-white">
          <Share2 className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
