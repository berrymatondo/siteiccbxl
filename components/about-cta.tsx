import { Button } from "@/components/ui/button"

export function AboutCTA() {
  return (
    <div className="px-4 py-8">
      <div className="bg-[#7f20df]/10 dark:bg-[#7f20df]/20 rounded-2xl p-6 text-center">
        <h3 className="text-xl font-bold text-[#7f20df] mb-2">Envie d'en savoir plus ?</h3>
        <p className="text-sm text-[#756487] dark:text-zinc-300 mb-6">
          Rejoignez-nous lors de notre prochain culte ou contactez-nous directement.
        </p>
        <div className="flex flex-col gap-3">
          <Button className="w-full bg-[#7f20df] hover:bg-[#6a1bbf] text-white font-bold py-3 shadow-lg shadow-[#7f20df]/30">
            Nous Contacter
          </Button>
          <Button
            variant="outline"
            className="w-full bg-white dark:bg-zinc-800 text-[#7f20df] font-bold py-3 border-[#7f20df]/20 hover:bg-[#7f20df]/5"
          >
            Trouver un Campus
          </Button>
        </div>
      </div>
    </div>
  )
}
