"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function BeliefAccordion() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const beliefs = [
    {
      title: "La Sainte Bible",
      content: "Nous croyons que la Bible est la Parole inspirée de Dieu, infaillible et souveraine.",
    },
    {
      title: "Le Dieu unique",
      content: "Nous croyons en un seul Dieu, existant de toute éternité en trois personnes.",
    },
    {
      title: "Le Salut",
      content: "Nous croyons que le salut est une grâce offerte par Dieu par la foi en Jésus-Christ.",
    },
  ]

  return (
    <div className="px-4 py-5">
      <h2 className="text-[#141117] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">
        Ce que nous croyons
      </h2>
      <div className="space-y-3">
        {beliefs.map((belief, index) => (
          <div
            key={index}
            className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800"
          >
            <button
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="flex justify-between items-center w-full"
            >
              <h3 className="font-bold text-[#7f20df]">{belief.title}</h3>
              <ChevronDown
                className={`text-zinc-400 h-5 w-5 transition-transform ${expandedIndex === index ? "rotate-180" : ""}`}
              />
            </button>
            {expandedIndex === index && (
              <p className="text-sm text-[#756487] dark:text-zinc-400 mt-2">{belief.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
