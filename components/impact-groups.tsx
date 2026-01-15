import { Users, Heart, BookOpen } from "lucide-react"

const groups = [
  {
    id: 1,
    name: "Impact Hommes",
    schedule: "Mardi • 19h00",
    icon: Users,
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    name: "Femmes d'Impact",
    schedule: "Jeudi • 18h30",
    icon: Heart,
    bgColor: "bg-pink-100 dark:bg-pink-900/30",
    iconColor: "text-pink-600",
  },
  {
    id: 3,
    name: "Études Bibliques",
    schedule: "Samedi • 10h00",
    icon: BookOpen,
    bgColor: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600",
  },
]

export function ImpactGroups() {
  return (
    <div className="flex flex-col gap-4 px-4 pb-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between pt-4 pb-2">
        <h3 className="text-[#141117] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          Vos Groupes d'Impact
        </h3>
      </div>

      <div className="flex overflow-x-auto hide-scrollbar gap-4">
        {groups.map((group) => {
          const Icon = group.icon
          return (
            <div
              key={group.id}
              className="min-w-[160px] bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className={`size-10 rounded-full ${group.bgColor} flex items-center justify-center mb-3`}>
                <Icon className={`h-5 w-5 ${group.iconColor}`} />
              </div>
              <p className="font-bold text-sm mb-1 text-[#141117] dark:text-white">{group.name}</p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-3">{group.schedule}</p>
              <button className="w-full py-1.5 text-[11px] font-bold text-[#7f20df] border border-[#7f20df]/30 rounded-lg hover:bg-[#7f20df]/5 transition-colors">
                Rejoindre
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
