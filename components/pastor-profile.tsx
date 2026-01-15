import { Button } from "@/components/ui/button"

export function PastorProfile() {
  return (
    <div className="p-4">
      <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-800">
        <div className="flex flex-col items-center gap-4">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full ring-4 ring-[#7f20df]/10 min-h-32 w-32"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAFC0QC4uY7RrtPR7Wo6v2KXEpjUsOtupN8U4QSZCJPjfxyu2HAO0c_T3l0hgM-YDmx3Qkr83-EzSWf6poE9Qy2fKFFzuEFE9z059GEo7fh5_8-z3oEts7STvv3N1qjuJd6tfjmexLzOFyvten5k7RQnkgB98W2Yu1Y6AWP72vohnXkegeJQjJZ6xPHFCEm3MHSq7pX3rOlTRDzgsvLqpiGHJadRgFqnjrk9DTmSA-AE8zt0ZG2QN-oiXGXmObXxX754SoOC8E_lDNT")',
            }}
          />
          <div className="flex flex-col items-center">
            <p className="text-[#141117] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">
              Le Mot des Pasteurs Principaux
            </p>
            <p className="text-[#7f20df] font-medium text-base leading-normal text-center mt-1">
              Pasteurs Yves & Marie Castanou
            </p>
            <p className="text-[#756487] dark:text-zinc-400 text-sm font-normal leading-relaxed text-center mt-3 max-w-[320px]">
              "Bienvenue dans notre famille spirituelle où l'amour de Dieu transforme les vies et restaure les
              destinées."
            </p>
          </div>
          <Button className="w-full bg-[#7f20df] hover:bg-[#6a1bbf] text-white">Lire la lettre complète</Button>
        </div>
      </div>
    </div>
  )
}
