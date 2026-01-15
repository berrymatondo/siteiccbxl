"use client"

import { Globe, PlayCircle, Share2 } from "lucide-react"

export function SocialFooter() {
  const socialLinks = [
    { icon: Globe, label: "Website", href: "https://impactcentre.org" },
    { icon: PlayCircle, label: "YouTube", href: "https://youtube.com/@impactcentre" },
    { icon: Share2, label: "Share", action: "share" },
  ]

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Impact Centre Chrétien",
          text: "Rejoignez-nous à Impact Centre Chrétien",
          url: window.location.origin,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    }
  }

  return (
    <div className="flex justify-center gap-6 py-8 border-t border-gray-100 dark:border-gray-800">
      {socialLinks.map((link) => {
        const Icon = link.icon
        return (
          <button
            key={link.label}
            onClick={link.action === "share" ? handleShare : () => window.open(link.href, "_blank")}
            className="size-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 cursor-pointer hover:bg-primary hover:text-white transition-all"
            aria-label={link.label}
          >
            <Icon className="h-5 w-5" />
          </button>
        )
      })}
    </div>
  )
}
