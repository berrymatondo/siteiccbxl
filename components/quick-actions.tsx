"use client"

import { UserPlus, Podcast } from "lucide-react"
import { useRouter } from "next/navigation"

export function QuickActions() {
  const router = useRouter()

  const handleNewHere = () => {
    router.push("/about")
  }

  const handleLatestMessage = () => {
    router.push("/teachings")
  }

  return (
    <div className="flex justify-center px-4 mb-8">
      <div className="flex flex-1 gap-4 flex-wrap max-w-[480px] justify-center">
        <button
          onClick={handleNewHere}
          className="flex flex-col flex-1 min-w-[140px] items-center justify-center rounded-xl p-5 bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 shadow-sm transition-all active:scale-95 hover:border-primary"
        >
          <div className="size-12 rounded-full bg-[#7f20df]/10 flex items-center justify-center mb-3 text-[#7f20df]">
            <UserPlus className="h-6 w-6" />
          </div>
          <span className="text-sm font-bold text-[#141117] dark:text-white">New Here?</span>
        </button>


        <button
          onClick={handleLatestMessage}
          className="flex flex-col flex-1 min-w-[140px] items-center justify-center rounded-xl p-5 bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 shadow-sm transition-all active:scale-95 hover:border-primary"
        >
          <div className="size-12 rounded-full bg-[#f7f6f8] dark:bg-zinc-700 flex items-center justify-center mb-3 text-[#7f20df]">
            <Podcast className="h-6 w-6" />
          </div>
          <span className="text-sm font-bold text-[#141117] dark:text-white">Latest Message</span>
        </button>
      </div>
    </div>
  )
}
