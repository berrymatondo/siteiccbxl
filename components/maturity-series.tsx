import { Sparkles, Flame, Sprout } from "lucide-react"

export function MaturitySeries() {
  const series = [
    {
      id: 1,
      title: "Fondations Chrétiennes",
      episodes: "12 épisodes",
      icon: Sparkles,
      gradient: "from-[#7f20df] to-indigo-700",
    },
    {
      id: 2,
      title: "Feu de l'Esprit",
      episodes: "8 épisodes",
      icon: Flame,
      gradient: "from-orange-500 to-red-600",
    },
    {
      id: 3,
      title: "Croissance Durable",
      episodes: "5 épisodes",
      icon: Sprout,
      gradient: "from-emerald-500 to-teal-700",
    },
  ]

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between px-4 pb-3 max-w-4xl mx-auto">
        <h2 className="text-lg font-bold text-[#141117] dark:text-white">Séries Maturité Spirituelle</h2>
        <span className="text-[#7f20df] text-sm font-semibold cursor-pointer">Découvrir</span>
      </div>
      <div className="flex overflow-x-auto no-scrollbar px-4 gap-4 max-w-4xl mx-auto">
        {series.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.id} className="flex flex-col min-w-[160px] w-[160px] gap-2">
              <div className="aspect-[3/4] rounded-xl flex flex-col items-center justify-end p-4 relative overflow-hidden cursor-pointer hover:scale-105 transition-transform">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80`}></div>
                <Icon className="h-12 w-12 text-white/50 absolute top-4 left-4" />
                <p className="text-white text-sm font-bold relative z-10 leading-tight text-balance">{item.title}</p>
                <p className="text-white/70 text-[10px] relative z-10 w-full mt-1">{item.episodes}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
