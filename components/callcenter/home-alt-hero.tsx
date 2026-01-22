"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeAltHero() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <motion.div
        className="relative flex min-h-[400px] flex-col gap-6 rounded-xl items-center justify-center p-6 text-center overflow-hidden"
        initial={{ opacity: 0, y: 18, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Background Image (léger zoom + fondu) */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <Image
            src="/temis.jpg"
            alt="Fond ICCBXL"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Gradient overlay (apparition douce) */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        />

        {/* Subtle floating glow blobs */}
        <motion.div
          className="absolute -top-16 -left-16 h-48 w-48 rounded-full bg-[#135bec]/30 blur-3xl"
          animate={{ y: [0, 14, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-white/10 blur-3xl"
          animate={{ y: [0, -16, 0], x: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Content (stagger) */}
        <motion.div
          className="relative z-10 flex flex-col gap-6 items-center"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.12, delayChildren: 0.15 },
            },
          }}
        >
          <motion.div
            className="flex flex-col gap-3 w-full"
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
          >
            <motion.h1
              className="text-white text-4xl font-black leading-tight tracking-tight sm:text-5xl"
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
            >
              Bienvenue à Impact Centre Chrétien Bruxelles
            </motion.h1>

            <motion.p
              className="text-white/90 w-full text-center text-sm font-normal leading-relaxed sm:text-base max-md:max-w-md"
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
            >
              Une communauté dynamique au cœur de Bruxelles pour grandir
              ensemble dans la foi et l&apos;amour.
            </motion.p>
          </motion.div>

          {/* Button (hover/tap + entrée) */}
          <motion.button
            className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-[#135bec] text-white text-base font-bold leading-normal tracking-wide hover:bg-[#135bec]/90 transition-colors"
            variants={{
              hidden: { opacity: 0, y: 12, scale: 0.98 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.45, ease: "easeOut" },
              },
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              className="truncate"
              whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              Découvrir nos cultes
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
