"use client";

import { Download } from "lucide-react";
import Link from "next/link";

export default function HomeAltActionCards() {
  return (
    <div className="px-4 pt-8 pb-12 space-y-6 max-w-4xl mx-auto">
      {/* Écoute Pastorale */}
      <div
        className="relative overflow-hidden rounded-2xl aspect-[16/9] flex flex-col justify-end p-6"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url("https://images.unsplash.com/photo-1573497161161-c3e73707e25c?w=800&h=450&fit=crop")`,
        }}
      >
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
      <div
        className="relative overflow-hidden rounded-2xl aspect-[16/9] flex flex-col justify-end p-6"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url("https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=450&fit=crop")`,
        }}
      >
        <div className="relative z-10 space-y-3">
          <div className="inline-block px-3 py-1 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
            Nouveau
          </div>
          <h3 className="text-white text-2xl font-bold">
            Magazine de la semaine
          </h3>
          <p className="text-white/80 text-sm leading-snug">
            Édition du 24 Mai - Retrouvez les dernières nouvelles de la
            communauté.
          </p>
          <Link
            href="https://qrco.de/ICCMonEglise"
            className="flex gap-2 hover:cursor-pointer"
          >
            <p className="hover:cursor-pointer flex-1 py-3 bg-[#135bec] text-white font-bold rounded-lg text-sm shadow-lg hover:bg-[#135bec]/90 transition-colors">
              {/*               <Link
                href="https://qrco.de/ICCMonEglise"
                className="text-white/80 text-sm leading-snug"
              > */}
              Lire en ligne
              {/*               </Link>
               */}{" "}
            </p>
            <button className="px-4 py-3 bg-white/20 backdrop-blur-md text-white font-bold rounded-lg text-sm border border-white/30 hover:bg-white/30 transition-colors">
              <Download className="h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
