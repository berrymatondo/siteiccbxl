export function HistoryTimeline() {
  const timelineItems = [
    {
      year: "2002",
      title: "Première réunion à Paris",
      description: "Le début d'une aventure de foi avec seulement une poignée de personnes passionnées.",
    },
    {
      year: "2010",
      title: "Expansion Internationale",
      description: "Ouverture des premiers campus en Afrique et en Amérique du Nord.",
    },
    {
      year: "Aujourd'hui",
      title: "Une communauté mondiale",
      description: "Plus de 30 campus à travers le monde impactant des milliers de vies.",
    },
  ]

  return (
    <div className="px-4 py-5">
      <h2 className="text-[#141117] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">
        Notre Histoire
      </h2>
      <div className="flex flex-col gap-0 pl-2">
        {timelineItems.map((item, index) => (
          <div key={index} className="flex gap-4 min-h-[80px]">
            <div className="flex flex-col items-center">
              <div className="size-4 rounded-full bg-[#7f20df] ring-4 ring-[#7f20df]/20" />
              {index < timelineItems.length - 1 && <div className="w-0.5 h-full bg-[#7f20df]/20" />}
            </div>
            <div className={index < timelineItems.length - 1 ? "pb-8" : "pb-2"}>
              <p className="text-[#7f20df] font-bold text-sm">{item.year}</p>
              <p className="text-[#141117] dark:text-white font-bold text-base">{item.title}</p>
              <p className="text-[#756487] dark:text-zinc-400 text-sm mt-1 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
