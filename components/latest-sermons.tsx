"use client"

import { Download, Share2 } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function LatestSermons() {
  const router = useRouter()
  const [downloadedSermons, setDownloadedSermons] = useState<number[]>([])

  const sermons = [
    {
      id: 1,
      title: "Le Pouvoir de la Résilience",
      speaker: "Pasteur Yvan Castanou",
      date: "Dimanche 12 Mai • 2024",
      duration: "42:15",
      image: "/modern-church-interior-with-stage-lights.jpg",
      audioUrl: "https://example.com/sermon1.mp3",
    },
    {
      id: 2,
      title: "Vaincre par l'Esprit",
      speaker: "Pasteur Yves Castanou",
      date: "Jeudi 09 Mai • 2024",
      duration: "58:30",
      image: "/people-praying-in-congregation.jpg",
      audioUrl: "https://example.com/sermon2.mp3",
    },
  ]

  const handleDownload = (sermon: (typeof sermons)[0]) => {
    // Simulate download
    setDownloadedSermons([...downloadedSermons, sermon.id])
    // In a real app, you would download the file
    const link = document.createElement("a")
    link.href = sermon.audioUrl
    link.download = `${sermon.title}.mp3`
    // link.click()
    alert(`Téléchargement de "${sermon.title}" commencé...`)
  }

  const handleShare = async (sermon: (typeof sermons)[0]) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: sermon.title,
          text: `Écoutez "${sermon.title}" par ${sermon.speaker}`,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Lien copié dans le presse-papier!")
    }
  }

  const handleViewAll = () => {
    router.push("/teachings")
  }

  return (
    <section className="mt-2">
      <div className="flex items-center justify-between px-4 pb-3 max-w-4xl mx-auto">
        <h2 className="text-lg font-bold text-[#141117] dark:text-white">Derniers Sermons</h2>
        <button onClick={handleViewAll} className="text-[#7f20df] text-sm font-semibold cursor-pointer hover:underline">
          Voir tout
        </button>
      </div>
      <div className="flex overflow-x-auto no-scrollbar px-4 gap-4 max-w-4xl mx-auto">
        {sermons.map((sermon) => (
          <div key={sermon.id} className="flex flex-col gap-3 min-w-[280px] w-[280px]">
            <div className="relative w-full aspect-video rounded-xl shadow-md overflow-hidden">
              <Image src={sermon.image || "/placeholder.svg"} alt={sermon.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                {sermon.duration}
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex-1 min-w-0">
                <p className="text-base font-bold leading-tight text-[#141117] dark:text-white">{sermon.title}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{sermon.speaker}</p>
                <p className="text-gray-400 text-xs mt-0.5">{sermon.date}</p>
              </div>
              <div className="flex gap-1 ml-2">
                <button
                  onClick={() => handleDownload(sermon)}
                  className="text-gray-400 hover:text-[#7f20df] transition-colors p-1"
                  aria-label="Download sermon"
                >
                  {downloadedSermons.includes(sermon.id) ? (
                    <Download className="h-5 w-5 fill-current text-[#7f20df]" />
                  ) : (
                    <Download className="h-5 w-5" />
                  )}
                </button>
                <button
                  onClick={() => handleShare(sermon)}
                  className="text-gray-400 hover:text-[#7f20df] transition-colors p-1"
                  aria-label="Share sermon"
                >
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
