import Image from "next/image";

export default function HomeAltHero() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="relative flex min-h-[400px] flex-col gap-6 rounded-xl items-center justify-center p-6 text-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/temis.jpg"
          alt="Fond ICCBXL"
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
          className="object-cover object-center"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-6 items-center">
          <div className="flex flex-col gap-3 w-full">
            <h1 className="text-white text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Bienvenue à Impact Centre Chrétien Bruxelles
            </h1>
            <p className="text-white/90  w-full text-center text-sm font-normal leading-relaxed sm:text-base max-md:max-w-md">
              Une communauté dynamique au cœur de Bruxelles pour grandir
              ensemble dans la foi et l&apos;amour.
            </p>
          </div>

          <button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-[#135bec] text-white text-base font-bold leading-normal tracking-wide hover:bg-[#135bec]/90 transition-colors">
            <span className="truncate">Découvrir nos cultes</span>
          </button>
        </div>
      </div>
    </div>
  );
}
