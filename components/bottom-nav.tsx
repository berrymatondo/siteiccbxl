"use client"

import { Home, Video, Heart, Calendar, Users } from "lucide-react"
import Link from "next/link"

interface BottomNavProps {
  activeTab?: string
}

export function BottomNav({ activeTab = "home" }: BottomNavProps) {
  const tabs = [
    { id: "home", label: "Accueil", icon: Home, filled: true, href: "/" },
    { id: "messages", label: "Messages", icon: Video, href: "/teachings" },
    { id: "service", label: "Service", icon: Heart, href: "/ministries" },
    { id: "events", label: "Agenda", icon: Calendar, href: "/events" },
    { id: "profile", label: "Profil", icon: Users, href: "/profile" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#191121]/90 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800">
      <div className="flex justify-around items-center h-20 max-w-4xl mx-auto px-6">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <Link
              key={tab.id}
              href={tab.href}
              className={`flex flex-col items-center gap-1 ${
                isActive ? "text-[#7f20df]" : "text-gray-400 dark:text-gray-500"
              }`}
            >
              <Icon className="h-6 w-6" fill={isActive && tab.filled ? "currentColor" : "none"} />
              <span className="text-[10px] font-medium">{tab.label}</span>
            </Link>
          )
        })}
      </div>
      <div className="h-4"></div>
    </nav>
  )
}
