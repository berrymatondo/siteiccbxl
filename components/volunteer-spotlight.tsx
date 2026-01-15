import { PlayCircle, BadgeCheck } from "lucide-react"

export function VolunteerSpotlight() {
  return (
    <section className="mt-4 px-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold tracking-tight">Bénévole du Mois</h2>
        <span className="text-[#7f20df] text-sm font-semibold uppercase tracking-wider">Inspirant</span>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 p-4">
        <div className="flex gap-4 items-center">
          <div className="relative">
            <div className="size-20 rounded-full border-2 border-[#7f20df] p-0.5">
              <div
                className="w-full h-full rounded-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD_8WskqZ5Fk-aoCevvqXEU2DPegq7NTAdXRcRjBBsNB40koVpWL_3YzVt2dKjMAyiUxxbVJFBMDbZku11FGpj62_C4tyUNhCEMErqIcL-5oq1-VZqt4JOjszEPkxXtru3KtxjN5_xW0TTHfyCAsLnaT3UAiQAQwbiRyuHzA7q0x4oA_Y_NtYUQSkbdJNnM-yKdvbZ9pStApVHPkQyGmeMQwLyYJ6f_3i1yIxX0PWYraa-28xK9eOhOldnLGxS0_NjlHRUYDaThzPQY')",
                }}
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-[#7f20df] text-white size-7 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900">
              <BadgeCheck className="h-4 w-4" />
            </div>
          </div>
          <div className="flex-1">
            <p className="text-xs font-medium text-[#7f20df] uppercase tracking-wide">Héros de la semaine</p>
            <h3 className="text-lg font-bold leading-none mt-1">Jean-Eudes Kouassi</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Ministère des Médias</p>
            <div className="mt-3">
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f7f6f8] dark:bg-gray-800 rounded-full text-xs font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <PlayCircle className="h-4 w-4" />
                Voir son témoignage
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
