"use client"

import { ArrowLeft, Search } from "lucide-react"
import { useRouter } from "next/navigation"

export function MinistriesTopNav() {
  const router = useRouter()

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#191121]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="flex items-center p-4 justify-between max-w-4xl mx-auto">
        <div className="flex items-center gap-2">
          <button onClick={() => router.back()} className="flex items-center">
            <ArrowLeft className="h-5 w-5 text-[#141117] dark:text-white" />
          </button>
          <h1 className="text-lg font-bold tracking-tight">Ministères</h1>
        </div>
        <button className="flex items-center justify-center size-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
          <Search className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
