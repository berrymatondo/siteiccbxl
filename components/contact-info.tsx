"use client"

import { MapPin, Phone, Mail, Copy, ChevronRight } from "lucide-react"
import { useState } from "react"

export function ContactInfo() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null)

  const copyToClipboard = (text: string, item: string) => {
    navigator.clipboard.writeText(text)
    setCopiedItem(item)
    setTimeout(() => setCopiedItem(null), 2000)
  }

  const contactItems = [
    {
      id: "address",
      icon: MapPin,
      title: "Campus Principal",
      value: "20 Rue des Peupliers, 75013 Paris",
      action: "copy",
    },
    {
      id: "phone",
      icon: Phone,
      title: "Téléphone",
      value: "+33 1 23 45 67 89",
      action: "link",
      href: "tel:+33123456789",
    },
    {
      id: "email",
      icon: Mail,
      title: "Email",
      value: "contact@impactcentre.org",
      action: "link",
      href: "mailto:contact@impactcentre.org",
    },
  ]

  return (
    <div className="space-y-1">
      {contactItems.map((item) => {
        const Icon = item.icon
        return (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-white dark:bg-background-dark px-4 min-h-[72px] py-2 justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="text-primary flex items-center justify-center rounded-xl bg-primary/10 shrink-0 size-12">
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#141117] dark:text-white text-base font-semibold leading-normal line-clamp-1">
                  {item.title}
                </p>
                <p className="text-[#756487] dark:text-gray-400 text-sm font-normal leading-normal">{item.value}</p>
              </div>
            </div>
            {item.action === "copy" ? (
              <button
                onClick={() => copyToClipboard(item.value, item.id)}
                className="shrink-0 cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                <Copy className={`h-5 w-5 ${copiedItem === item.id ? "text-green-500" : "text-gray-400"}`} />
              </button>
            ) : (
              <a
                href={item.href}
                className="shrink-0 cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                <ChevronRight className="h-5 w-5 text-primary" />
              </a>
            )}
          </div>
        )
      })}
    </div>
  )
}
