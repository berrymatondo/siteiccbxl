"use client"

import { Clock, Edit2, Save, Play } from "lucide-react"
import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface VideoInfo {
  title: string
  duration: string
  thumbnailUrl: string
  videoId: string
  url: string
}

export function YoutubeFeatured() {
  const [videoInfo, setVideoInfo] = useState<VideoInfo>({
    title: "Chargement...",
    duration: "",
    thumbnailUrl: "",
    videoId: "uZ-7sJb48cc",
    url: "https://www.youtube.com/watch?v=uZ-7sJb48cc",
  })
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [editUrl, setEditUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const extractVideoId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
      /youtube\.com\/embed\/([^&\n?#]+)/,
      /youtube\.com\/v\/([^&\n?#]+)/,
    ]

    for (const pattern of patterns) {
      const match = url.match(pattern)
      if (match) return match[1]
    }
    return null
  }

  const fetchVideoInfo = async (url: string) => {
    try {
      setIsLoading(true)
      const videoId = extractVideoId(url)

      if (!videoId) {
        alert("URL YouTube invalide")
        return
      }

      const oembedResponse = await fetch(
        `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`,
      )

      if (!oembedResponse.ok) {
        throw new Error("Impossible de récupérer les informations de la vidéo")
      }

      const oembedData = await oembedResponse.json()

      const newVideoInfo: VideoInfo = {
        title: oembedData.title || "Sans titre",
        duration: "",
        thumbnailUrl: oembedData.thumbnail_url || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        videoId,
        url,
      }

      setVideoInfo(newVideoInfo)

      await fetch("/api/video-embeds", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          key: "featured_video",
          url,
          title: newVideoInfo.title,
          duration: newVideoInfo.duration,
          thumbnail: newVideoInfo.thumbnailUrl,
        }),
      })
    } catch (error) {
      console.error("[v0] Erreur lors du chargement de la vidéo:", error)
      alert("Erreur lors du chargement des informations de la vidéo")
    } finally {
      setIsLoading(false)
    }
  }

  const formatDuration = (duration: string): string => {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/)
    if (!match) return ""

    const hours = match[1] ? Number.parseInt(match[1]) : 0
    const minutes = match[2] ? Number.parseInt(match[2]) : 0
    const seconds = match[3] ? Number.parseInt(match[3]) : 0

    if (hours > 0) {
      return `${hours}h ${minutes}m`
    } else if (minutes > 0) {
      return `${minutes}m`
    } else {
      return `${seconds}s`
    }
  }

  useEffect(() => {
    const loadVideo = async () => {
      try {
        const response = await fetch("/api/video-embeds?key=featured_video")
        if (response.ok) {
          const data = await response.json()
          setVideoInfo({
            title: data.title || "Sans titre",
            duration: data.duration || "",
            thumbnailUrl: data.thumbnail || `https://img.youtube.com/vi/${data.videoId}/maxresdefault.jpg`,
            videoId: extractVideoId(data.url) || data.videoId,
            url: data.url,
          })
        } else {
          // Charger la vidéo par défaut
          await fetchVideoInfo(videoInfo.url)
        }
      } catch (error) {
        console.error("[v0] Erreur lors du chargement de la vidéo:", error)
      }
    }

    loadVideo()
  }, [])

  const handleSaveEdit = async () => {
    if (!editUrl.trim()) {
      alert("Veuillez entrer une URL YouTube valide")
      return
    }

    await fetchVideoInfo(editUrl)
    setIsEditOpen(false)
    setEditUrl("")
  }

  const handleDownload = () => {
    alert(
      "Pour télécharger cette vidéo, veuillez la regarder sur YouTube et utiliser les options de téléchargement disponibles.",
    )
  }

  return (
    <>
      <div className="px-4 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Dernier Message</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setEditUrl(videoInfo.url)
              setIsEditOpen(true)
            }}
            className="gap-2"
          >
            <Edit2 className="w-4 h-4" />
            Éditer
          </Button>
        </div>

        <a
          href={videoInfo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white dark:bg-zinc-900 rounded-2xl p-4 border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex max-md:flex-col gap-4">
            {/* Thumbnail avec play button */}
            <div
              key={videoInfo.videoId}
              className="relative w-32 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 dark:bg-zinc-800"
            >
              <img
                src={videoInfo.thumbnailUrl || "/placeholder.svg"}
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                  <Play className="w-6 h-6 text-primary ml-1" fill="currentColor" />
                </div>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1 line-clamp-2">{videoInfo.title}</h3>
              <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">Impact Centre Chrétien</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                {videoInfo.duration && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{videoInfo.duration}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </a>
      </div>

      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Éditer le lien YouTube</DialogTitle>
            <DialogDescription>
              Entrez une nouvelle URL YouTube pour mettre à jour la vidéo en vedette.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="youtube-url">URL YouTube</Label>
              <Input
                id="youtube-url"
                placeholder="https://www.youtube.com/watch?v=..."
                value={editUrl}
                onChange={(e) => setEditUrl(e.target.value)}
                disabled={isLoading}
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsEditOpen(false)} disabled={isLoading}>
              Annuler
            </Button>
            <Button onClick={handleSaveEdit} disabled={isLoading} className="gap-2">
              <Save className="w-4 h-4" />
              {isLoading ? "Chargement..." : "Enregistrer"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
