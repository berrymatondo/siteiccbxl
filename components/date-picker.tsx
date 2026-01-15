"use client"

import { useState } from "react"

const dates = [
  { day: "Lun", date: 16 },
  { day: "Mar", date: 17 },
  { day: "Mer", date: 18 },
  { day: "Jeu", date: 19, active: true },
  { day: "Ven", date: 20 },
  { day: "Sam", date: 21 },
  { day: "Dim", date: 22 },
]

export function DatePicker() {
  const [selectedDate, setSelectedDate] = useState(19)

  return (
    <div className="flex overflow-x-auto hide-scrollbar px-4 py-2 gap-3 items-center max-w-4xl mx-auto">
      {dates.map((item) => (
        <button
          key={item.date}
          onClick={() => setSelectedDate(item.date)}
          className={`flex flex-col items-center justify-center min-w-[50px] h-16 rounded-xl shadow-sm transition-all ${
            selectedDate === item.date
              ? "bg-[#7f20df] text-white shadow-lg shadow-[#7f20df]/30"
              : "bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
          }`}
        >
          <span className="text-[10px] font-bold uppercase">{item.day}</span>
          <span className="text-lg font-bold">{item.date}</span>
        </button>
      ))}
    </div>
  )
}
