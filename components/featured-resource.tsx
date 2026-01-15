"use client"

import { Play } from "lucide-react"
import { useState } from "react"

export function FeaturedResource() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
    // Open video in new tab or trigger video player
    window.open("https://www.youtube.com/watch?v=uZ-7sJb48cc", "_blank")
  }

  return (
    <section className="px-4 mb-8">
      <h2 className="text-[#141117] dark:text-white text-lg font-bold px-1 pb-4">À la une</h2>

      <div
        onClick={handlePlay}
        className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-800 cursor-pointer"
      >
        <img
          alt="Latest sermon"
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
          src="/images/image.png"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5">
          <p className="text-[#D4AF37] text-[10px] font-bold uppercase mb-1">Dernière série</p>
          <h4 className="text-white font-bold text-lg leading-tight">
            Pourquoi et comment inviter des âmes à l'église
          </h4>
          <p className="text-gray-300 text-xs">Pst. Christian Saboukoulou</p>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="size-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-all group-active:scale-90">
            <Play className="h-8 w-8 text-white fill-white ml-1" />
          </div>
        </div>
      </div>
    </section>
  )
}
