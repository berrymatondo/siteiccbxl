"use client"

import type React from "react"

import { Clock, MapPin, Video, CalendarPlus, X, User, Mail, Phone } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

const events = [
  {
    id: 1,
    title: "Conférence Impact 2023",
    date: "Oct 21",
    time: "Samedi • 18:00 - 21:00",
    location: "Auditorium Principal - ICC Paris",
    image: "/christian-youth-conference.jpg",
    tag: null,
  },
  {
    id: 2,
    title: "Soirée de Prière & Intercession",
    date: "Oct 25",
    time: "Mercredi • 19:30",
    location: "En ligne & Présentiel",
    image: "/people-praying-together.jpg",
    tag: "Bientôt complet",
    isOnline: true,
  },
]

export function EventsList() {
  const router = useRouter()
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(null)
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", guests: "1" })

  const handleRegister = (event: (typeof events)[0]) => {
    setSelectedEvent(event)
  }

  const handleAddToCalendar = (event: (typeof events)[0]) => {
    // Generate a Google Calendar link
    const title = encodeURIComponent(event.title)
    const details = encodeURIComponent(event.location)
    const location = encodeURIComponent(event.location)
    // You would need to convert the date format for actual implementation
    const dates = "20241021T180000/20241021T210000" // Example format

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`
    window.open(googleCalendarUrl, "_blank")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(
      `Inscription confirmée pour "${selectedEvent?.title}"! Un email de confirmation a été envoyé à ${formData.email}.`,
    )
    setSelectedEvent(null)
    setFormData({ name: "", email: "", phone: "", guests: "1" })
  }

  const handleViewAll = () => {
    router.push("/events")
  }

  return (
    <>
      <div className="flex flex-col gap-4 p-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <h3 className="text-[#141117] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
            À venir
          </h3>
          <button onClick={handleViewAll} className="text-[#7f20df] text-sm font-semibold hover:underline">
            Voir tout
          </button>
        </div>

        {events.map((event) => (
          <div
            key={event.id}
            className="flex flex-col overflow-hidden rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
          >
            <div className="relative w-full h-48 bg-gradient-to-br from-purple-500 to-indigo-600">
              <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/70 backdrop-blur rounded-lg px-2 py-1 flex flex-col items-center">
                <span className="text-[#7f20df] font-bold text-xs uppercase">{event.date.split(" ")[0]}</span>
                <span className="text-[#141117] dark:text-white font-black text-lg -mt-1">
                  {event.date.split(" ")[1]}
                </span>
              </div>
              {event.tag && (
                <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                  {event.tag}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-3 p-4">
              <div>
                <h4 className="text-[#141117] dark:text-white text-lg font-bold leading-tight tracking-tight">
                  {event.title}
                </h4>
                <div className="flex items-center gap-1.5 mt-2 text-[#756487] dark:text-gray-400">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-medium">{event.time}</span>
                </div>
                <div className="flex items-center gap-1.5 mt-1 text-[#756487] dark:text-gray-400">
                  {event.isOnline ? <Video className="h-4 w-4" /> : <MapPin className="h-4 w-4" />}
                  <span className="text-sm font-medium">{event.location}</span>
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => handleRegister(event)}
                  className="flex-1 cursor-pointer items-center justify-center rounded-xl h-10 px-4 bg-[#7f20df] text-white text-sm font-bold shadow-lg shadow-[#7f20df]/20 transition-transform active:scale-95 hover:bg-[#6a1bc0]"
                >
                  {event.id === 1 ? "S'inscrire" : "Participer"}
                </button>
                <button
                  onClick={() => handleAddToCalendar(event)}
                  className="flex size-10 cursor-pointer items-center justify-center rounded-xl bg-[#7f20df]/10 dark:bg-[#7f20df]/20 text-[#7f20df] transition-transform active:scale-95 hover:bg-[#7f20df]/20"
                  aria-label="Add to calendar"
                >
                  <CalendarPlus className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-[#191121] rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white dark:bg-[#191121] border-b border-gray-100 dark:border-gray-800 p-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#141117] dark:text-white">Inscription à l&apos;événement</h3>
              <button
                onClick={() => setSelectedEvent(null)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-xl">
                <h4 className="font-bold text-[#141117] dark:text-white mb-1">{selectedEvent.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{selectedEvent.time}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{selectedEvent.location}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ml-1">
                  <User className="inline h-4 w-4 mr-1" />
                  Nom complet
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-background-dark/50 focus:border-primary focus:ring-primary h-12 px-4 transition-all"
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ml-1">
                  <Mail className="inline h-4 w-4 mr-1" />
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-background-dark/50 focus:border-primary focus:ring-primary h-12 px-4 transition-all"
                  placeholder="votre@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ml-1">
                  <Phone className="inline h-4 w-4 mr-1" />
                  Téléphone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-background-dark/50 focus:border-primary focus:ring-primary h-12 px-4 transition-all"
                  placeholder="+32 123 456 789"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ml-1">
                  Nombre de participants
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-background-dark/50 focus:border-primary focus:ring-primary h-12 px-4 transition-all"
                >
                  <option value="1">1 personne</option>
                  <option value="2">2 personnes</option>
                  <option value="3">3 personnes</option>
                  <option value="4">4 personnes</option>
                  <option value="5+">5+ personnes</option>
                </select>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedEvent(null)}
                  className="flex-1 h-12 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex-1 h-12 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 active:scale-95 transition-all"
                >
                  Confirmer l&apos;inscription
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
