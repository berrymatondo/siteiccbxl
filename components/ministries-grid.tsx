"use client"

import type React from "react"

import { Music, Video, Baby, DoorOpen, X, Mail, Phone, User } from "lucide-react"
import { useState } from "react"

const ministries = [
  {
    id: "louange",
    title: "Louange",
    icon: Music,
    description: "Conduire l'assemblée dans une adoration authentique et passionnée.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCe1rIxHmZ6jVo1PeLGibyQH67d8lgg-kC2gq135KZtO_9vr4OM8KrIWLdegWM-Jca11uo3ZYyLzkAUv0qItuUCC6_H78I1_Ix0MbYHDNm0X8fJSMvaDYKSzN4OS8OB2uicK5INJSzNM0wn_wPkqPrITrloHoGU-GozFeC9s-3OE2OSo6yrtVaG2nAZQeoPes1MG0jmaCGts7fi_dr1ELfytQGCnUIFlQK_otLXG0M_TH4E6iUzzy_pDc8K39EMnbs52G2OefE03ATa",
  },
  {
    id: "media",
    title: "Média & Tech",
    icon: Video,
    description: "Capturer, diffuser et magnifier la Parole de Dieu via le numérique.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQcTd6vqJiopQouycT0aG4MZ71QSILHkNvDCCsLrh6PT4nE4ekV0enKx_15Y4SF3mttuKrRQJzxX5GRg_UCbVCpjqZC5bZFrtNDFBieMoVipJ62HP3sLnAODDcMBqV0ArOz1X85fY64KR0ThInUF2ojl7a93HaBzDTGGWy9IGid-_qxbfToHZSzwka4R1YWe-ttRLFr_7EVh039K5nLp85RUjV-Nayz7WlXQ2-Xl5nfvHEwNIbMjELEyYWe53VQ1DOartbFwrhKjz7",
  },
  {
    id: "kids",
    title: "ICC Kids",
    icon: Baby,
    description: "Éduquer et inspirer la prochaine génération de leaders spirituels.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYSgHDGHRNt_crQfYKPkPqwIipzrV8dTZEcSsY6SGp5tosD3iYbBFbKciQo-NqRcCw_z-i4n9XUtAic864eiUfz3d02YJEaEjMWEy0ZqkrVca-MV5eurmLc_LH3EEWug9CxfARw7ykbzy3vzRZfQUXcqJfCZCwS_3nQdFpIzp5ybcUfbuN0uAZ9MwPGjYsihqPvEkY-Dwn3rcMZAiuTjNtfxURpOWH_UbrrZGjmUyTs4TdT6DdO2M9pDzM3xtyiXZGMTPIK9LgN8PK",
  },
  {
    id: "accueil",
    title: "Accueil",
    icon: DoorOpen,
    description: "Être le premier sourire et le reflet de l'amour de Dieu dès l'entrée.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB4CiOEmemzr3eDh19shupZSZWL6EkW9BiQwS9VstbnvXBXd_ucR2wCMhjQY-sh442vt5mw4g1JaexrkhbQe0lwdpSU3_DjhZt3pJhnKf860KLsLDIzImX-npcwON3ETWxRF6bDP6uWTu6P8L_XGiiKSbH-SHPFNjs7IjEfGZbAqfudgooo_2883wD4dX901yaNoqbDXptlKL3ZfCELm9NUTRv6SUK5yVidxVNEejN8fcZHamuEudSA3uMB2yXnFgElHBGU_VYFtTT_",
  },
]

export function MinistriesGrid() {
  const [selectedMinistry, setSelectedMinistry] = useState<(typeof ministries)[0] | null>(null)
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })

  const handleJoinMinistry = (ministry: (typeof ministries)[0]) => {
    setSelectedMinistry(ministry)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(
      `Merci de votre intérêt pour le ministère ${selectedMinistry?.title}! Nous vous contacterons bientôt à ${formData.email}.`,
    )
    setSelectedMinistry(null)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <>
      <div className="px-4 mt-8 mb-2">
        <h2 className="text-xl font-bold tracking-tight">Nos Départements</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Trouvez votre place dans la famille</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        {ministries.map((ministry) => (
          <div
            key={ministry.id}
            className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col"
          >
            <div className="h-32 bg-cover bg-center" style={{ backgroundImage: `url('${ministry.image}')` }} />
            <div className="p-4 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-2">
                <ministry.icon className="h-5 w-5 text-[#7f20df]" />
                <h3 className="font-bold">{ministry.title}</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 flex-1 leading-relaxed">{ministry.description}</p>
              <button
                onClick={() => handleJoinMinistry(ministry)}
                className="mt-4 w-full bg-[#7f20df]/10 dark:bg-[#7f20df]/20 text-[#7f20df] font-bold py-2.5 rounded-lg text-sm transition-all hover:bg-[#7f20df] hover:text-white active:scale-95"
              >
                Rejoindre ce ministère
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedMinistry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-[#191121] rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white dark:bg-[#191121] border-b border-gray-100 dark:border-gray-800 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <selectedMinistry.icon className="h-5 w-5 text-[#7f20df]" />
                <h3 className="text-lg font-bold text-[#141117] dark:text-white">Rejoindre {selectedMinistry.title}</h3>
              </div>
              <button
                onClick={() => setSelectedMinistry(null)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">{selectedMinistry.description}</p>

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
                  Téléphone (optionnel)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-background-dark/50 focus:border-primary focus:ring-primary h-12 px-4 transition-all"
                  placeholder="+32 123 456 789"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ml-1">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-background-dark/50 focus:border-primary focus:ring-primary px-4 py-3 transition-all"
                  placeholder="Pourquoi souhaitez-vous rejoindre ce ministère?"
                  rows={4}
                  required
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedMinistry(null)}
                  className="flex-1 h-12 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex-1 h-12 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 active:scale-95 transition-all"
                >
                  Envoyer ma demande
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
