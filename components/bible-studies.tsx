"use client"

import { Download, MoreVertical, Play, Clock, Headphones, Video } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function BibleStudies() {
  const router = useRouter()
  const [downloadedStudies, setDownloadedStudies] = useState<number[]>([])

  const studies = [
    {
      id: 1,
      title: "Les Fondements du Salut",
      series: "Maturité Spirituelle Vol. 1",
      duration: "1h 15m",
      type: "Audio",
      typeIcon: Headphones,
      image: "/open-bible-on-wooden-table.jpg",
      fileUrl: "https://example.com/study1.mp3",
    },
    {
      id: 2,
      title: "L'Art de la Prière Efficace",
      series: "Série Communication Divine",
      duration: "45m",
      type: "Vidéo",
      typeIcon: Video,
      image: "/hands-holding-coffee-and-notebook.jpg",
      fileUrl: "https://example.com/study2.mp4",
    },
  ]

  const handleDownload = (study: (typeof studies)[0]) => {
    setDownloadedStudies([...downloadedStudies, study.id])
    alert(`Téléchargement de "${study.title}" commencé...`)
  }

  const handleViewAll = () => {
    router.push("/teachings")
  }

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between px-4 pb-3 max-w-4xl mx-auto">
        <h2 className="text-lg font-bold text-[#141117] dark:text-white">Études Bibliques</h2>
        <button onClick={handleViewAll} className="text-[#7f20df] text-sm font-semibold cursor-pointer hover:underline">
          Voir tout
        </button>
      </div>
      <div className="flex flex-col px-4 gap-4 max-w-4xl mx-auto">
        {studies.map((study) => {
          const TypeIcon = study.typeIcon
          return (
            <div
              key={study.id}
              className="flex gap-4 items-center bg-white dark:bg-[#251a30] p-3 rounded-xl border border-black/5 dark:border-white/5 shadow-sm"
            >
              <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden">
                <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                    <Play className="h-6 w-6 text-white fill-white ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm truncate text-[#141117] dark:text-white">{study.title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{study.series}</p>
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
                    <Clock className="h-3 w-3" />
                    {study.duration}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
                    <TypeIcon className="h-3 w-3" />
                    {study.type}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleDownload(study)}
                  className={`p-1 rounded-full transition-colors ${
                    downloadedStudies.includes(study.id)
                      ? "text-[#7f20df] bg-[#7f20df]/10"
                      : "text-[#7f20df] hover:bg-[#7f20df]/10"
                  }`}
                >
                  <Download className="h-5 w-5" />
                </button>
                <button className="p-1 rounded-full text-gray-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
