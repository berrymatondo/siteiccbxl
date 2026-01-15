"use client"

import type React from "react"

import { Send } from "lucide-react"
import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Demande d'information",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici, vous pouvez ajouter la logique d'envoi du formulaire
    console.log("Form submitted:", formData)
    alert("Message envoyé ! Nous vous répondrons bientôt.")
    setFormData({ name: "", email: "", subject: "Demande d'information", message: "" })
  }

  return (
    <div className="px-4 pb-8">
      <h3 className="text-[#141117] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] pb-2">
        Besoin de prière ou d'infos ?
      </h3>
      <p className="text-[#756487] dark:text-gray-400 text-sm mb-6">
        Notre équipe est à votre écoute pour vous accompagner.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ml-1">Nom complet</label>
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
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ml-1">Email</label>
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
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ml-1">Objet</label>
          <select
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-background-dark/50 focus:border-primary focus:ring-primary h-12 px-4 transition-all appearance-none"
          >
            <option>Demande d'information</option>
            <option>Requête de prière</option>
            <option>Témoignage</option>
            <option>Autre</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ml-1">Message</label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-background-dark/50 focus:border-primary focus:ring-primary px-4 py-3 transition-all"
            placeholder="Comment pouvons-nous vous aider ?"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white font-bold h-14 rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <Send className="h-5 w-5" />
          Envoyer le message
        </button>
      </form>
    </div>
  )
}
