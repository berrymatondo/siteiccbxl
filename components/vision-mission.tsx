import { Eye, Rocket } from "lucide-react"

export function VisionMission() {
  return (
    <div className="px-4">
      <h2 className="text-[#141117] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">
        Notre Vision & Mission
      </h2>
      <div className="grid grid-cols-2 gap-3">
        <div
          className="bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-4 aspect-square shadow-md relative"
          style={{
            backgroundImage:
              'linear-gradient(0deg, rgba(127, 32, 223, 0.8) 0%, rgba(127, 32, 223, 0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3gcZl9-rfSEIHxOdeIfkr3nbnHNLJg2t1Tlstp_XvN1MuyLaYn_qUc1JaWMhyXYcME3rzjwBmJKfHmGipKztJZGo7vZTCnmJ_48Z3Lkw71C6ygMxB959EDCpXnDd0YaTCJdMysGR3IQAJSkB3h-xy9i5klKfRCBYxHmw6uJYDhXarN3uM6N_HsDU-ZyJHvog8d1UREUy_EDdO7XjBeyKz-y6abt53LD_dIawfuq5fxoBH0v4CI6gR6Oo23fHoIgXr_ryLyrII1nXo")',
          }}
        >
          <div className="flex flex-col">
            <Eye className="text-white mb-1 h-6 w-6" />
            <p className="text-white text-base font-bold leading-tight">Transformer les nations</p>
          </div>
        </div>
        <div
          className="bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-4 aspect-square shadow-md relative"
          style={{
            backgroundImage:
              'linear-gradient(0deg, rgba(127, 32, 223, 0.8) 0%, rgba(127, 32, 223, 0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAA_pMLo8NEkFw952DwoRCQVRqMIQd8k7oH_IYKo0u8lS8_7EqUyQUjHUbiD7CXwdg2WYoovO71GfhZOs4csFT6KjXpqN2gcMM0bbhRjvxClaeG2Darjf1HuxIdwt-By3KXDA3TdfxUXHzQVN7zygG8gOgLHaEKzUR1Po9vmEVVm3smOeQue3lB2-tXzZIh3K8hMUtBVh0p1p2y3VNYOFdkMwWtrpib6boFSTlFzU3_CJdu7bjLXxNpxion45ZIPFI3DcA9RKoJ3wBZ")',
          }}
        >
          <div className="flex flex-col">
            <Rocket className="text-white mb-1 h-6 w-6" />
            <p className="text-white text-base font-bold leading-tight">Équiper les leaders</p>
          </div>
        </div>
      </div>
    </div>
  )
}
