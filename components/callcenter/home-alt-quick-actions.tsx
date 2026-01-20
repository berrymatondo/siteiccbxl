'use client'

import { Phone, Mail, MapPin } from 'lucide-react'

export default function HomeAltQuickActions() {
  const handleCall = () => {
    window.location.href = 'tel:+3212345678'
  }

  const handleEmail = () => {
    window.location.href = 'mailto:contact@iccbxl.be'
  }

  const handleDirections = () => {
    window.open('https://maps.google.com/?q=Rue+des+lutins+8,+1190+Forest,+Belgique', '_blank')
  }

  return (
    <div className="px-4 py-2 max-w-4xl mx-auto">
      <div className="grid grid-cols-3 gap-2 bg-white dark:bg-gray-900 rounded-xl p-2 shadow-sm border border-gray-100 dark:border-gray-800">
        <button
          onClick={handleCall}
          className="flex flex-col items-center gap-1.5 py-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
        >
          <div className="rounded-full bg-[#135bec]/10 p-2.5">
            <Phone className="h-5 w-5 text-[#135bec]" />
          </div>
          <p className="text-[#111318] dark:text-gray-300 text-xs font-semibold">Appeler</p>
        </button>
        <button
          onClick={handleEmail}
          className="flex flex-col items-center gap-1.5 py-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
        >
          <div className="rounded-full bg-[#135bec]/10 p-2.5">
            <Mail className="h-5 w-5 text-[#135bec]" />
          </div>
          <p className="text-[#111318] dark:text-gray-300 text-xs font-semibold">Email</p>
        </button>
        <button
          onClick={handleDirections}
          className="flex flex-col items-center gap-1.5 py-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
        >
          <div className="rounded-full bg-[#135bec]/10 p-2.5">
            <MapPin className="h-5 w-5 text-[#135bec]" />
          </div>
          <p className="text-[#111318] dark:text-gray-300 text-xs font-semibold">Itinéraire</p>
        </button>
      </div>
    </div>
  )
}
