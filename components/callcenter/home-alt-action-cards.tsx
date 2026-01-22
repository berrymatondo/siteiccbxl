"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import Link from "next/link";

export default function HomeAltActionCards() {
  return (
    <div className="px-4 pt-8 pb-12 space-y-6 max-w-4xl mx-auto">
      {/* Écoute Pastorale */}
      <div className="relative overflow-hidden rounded-2xl aspect-[16/9] max-md:aspect-auto flex flex-col justify-end p-6">
        {/* Image */}
        <Image
          src="/ssssv.jpg"
          alt="Soins pastoraux"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Content */}
        <div className="relative z-10 space-y-3">
          <div className="inline-block px-3 py-1 bg-[#135bec] text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
            Accompagnement
          </div>
          <h3 className="text-white text-2xl font-bold">Soins Pastoraux</h3>
          <p className="text-white/80 text-sm leading-snug">
            Besoin de parler ou de prier ? Nos pasteurs et assistants pasteurs
            sont à votre disposition.
          </p>
          <button className="mt-2 w-full py-3 bg-white text-[#111318] font-bold rounded-lg text-sm shadow-lg hover:bg-gray-100 transition-colors">
            Prendre rendez-vous
          </button>
        </div>
      </div>

      {/* Magazine hebdomadaire */}
      <div className="relative overflow-hidden rounded-2xl aspect-[16/9] max-md:aspect-auto flex flex-col justify-end p-6">
        {/* Image */}
        <Image
          src="hebdo.jpg"
          alt="Magazine ICC Mon Eglise"
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Content */}
        <div className="relative z-10 space-y-3">
          <div className="inline-block px-3 py-1 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
            Hebdomadaire
          </div>
          <h3 className="text-white text-2xl font-bold">
            Magazine ICC Mon Église
          </h3>
          <p className="text-white/80 text-sm leading-snug">
            Retrouvez les dernières nouvelles de la famille ICC Bruxelles.
          </p>

          <Link href="https://qrco.de/ICCMonEglise" className="flex gap-2">
            <span className="flex-1 py-3 bg-[#135bec] text-center text-white font-bold rounded-lg text-sm shadow-lg hover:bg-[#135bec]/90 transition-colors">
              Lire en ligne
            </span>

            {/*
            <button className="px-4 py-3 bg-white/20 backdrop-blur-md text-white font-bold rounded-lg text-sm border border-white/30 hover:bg-white/30 transition-colors">
              <Download className="h-5 w-5" />
            </button>
            */}
          </Link>
        </div>
      </div>

      {/* Location studio */}
      <div className="relative overflow-hidden rounded-2xl aspect-[16/9] max-md:aspect-auto flex flex-col justify-end p-6">
        {/* Image */}
        <Image
          src="st2.JPG"
          alt="Magazine ICC Mon Eglise"
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Content */}
        <div className="relative z-10 space-y-3">
          <div className="inline-block px-3 py-1 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
            Studio
          </div>
          <h3 className="text-white text-2xl font-bold">
            Location du Studio d'Enregistrement
          </h3>
          <p className="text-white/80 text-sm leading-snug">
            Réservez le studio pour vos enregistrements audio et vidéo.
          </p>

          <Link
            href="https://icistudiolocations.wixsite.com/icistudio"
            target="_blank"
            className="flex gap-2"
          >
            <span className="flex-1 py-3 bg-teal-400 text-center text-white font-bold rounded-lg text-sm shadow-lg hover:bg-[#135bec]/90 transition-colors">
              Réserver le studio
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
