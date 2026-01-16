import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export function MainFooter() {
  return (
    <footer className="bg-[#3d5a80] text-white">
      <div className="container mx-auto px-4 py-4">
        {/* Header with social icons */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-8 gap-6">
          <h2 className="text-lg font-bold">REJOIGNEZ-NOUS</h2>
          <div className="flex items-center gap-3">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-[#1877f2] flex items-center justify-center hover:opacity-90 transition-opacity"
              aria-label="Facebook"
            >
              <Facebook className="w-3 h-3" fill="white" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center hover:opacity-90 transition-opacity"
              aria-label="Instagram"
            >
              <Instagram className="w-3 h-3" fill="white" />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-[#ff0000] flex items-center justify-center hover:opacity-90 transition-opacity"
              aria-label="YouTube"
            >
              <Youtube className="w-3 h-3" fill="white" />
            </Link>
            <Link
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-black flex items-center justify-center hover:opacity-90 transition-opacity"
              aria-label="TikTok"
            >
              <svg
                className="w-3 h-3"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </Link>
            <Link
              href="https://spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-[#1db954] flex items-center justify-center hover:opacity-90 transition-opacity"
              aria-label="Spotify"
            >
              <svg
                className="w-3 h-3"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-2 text-xs">
          {/* Address */}
          <div>
            <h3 className="text-xl font-bold mb-2">Adresse</h3>
            <address className="not-italic text-white/90 leading-relaxed">
              Rue des lutins 8, Forest, 1190 Bruxelles, BELGIQUE
              <br />
              Réseau STIB : Tram 82, Tram 97 / Bus 50
              <br />– Arrêt: NEERSTALLE
            </address>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-2">Contact</h3>
            <div className="text-white/90 leading-relaxed">
              <p>
                Tél. :{" "}
                <a
                  href="tel:+3222459250"
                  className="hover:underline focus:outline-none focus:underline"
                >
                  +32 2 245 92 50
                </a>
              </p>
              <p>
                Email :{" "}
                <a
                  href="mailto:icc-bruxelles@egliseicc.com"
                  className="hover:underline focus:outline-none focus:underline"
                >
                  icc-bruxelles@egliseicc.com
                </a>
              </p>
            </div>
          </div>

          {/* Meeting times */}
          <div>
            <h3 className="text-xl font-bold mb-2">Nos rendez-vous</h3>
            <ul className="text-white/90 leading-relaxed space-y-2 flex justify-between">
              <li>
                <span className="font-medium">Vendredi:</span> 19h00 – 20h15
                <br />
                <span className="text-xs">(Atmosphère de prière)</span>
              </li>
              <li>
                <span className="font-medium">Dimanche</span> (2 cultes de
                célébration):
                <br />
                9h00 – 11h00 & 11h30 – 13h30
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and links */}
        <div className="border-t border-white/20 mt-2 text-xs">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-white/80 text-center">
            <p>©Impact Centre Chrétien 2021. Tous droits réservés</p>
            <span className="hidden md:inline">-</span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Link
                href="/politique"
                className="hover:underline focus:outline-none focus:underline"
              >
                Politique de confidentialité
              </Link>
              <span>-</span>
              <Link
                href="/mentions-legales"
                className="hover:underline focus:outline-none focus:underline"
              >
                Mentions Légales
              </Link>
              <span>-</span>
              <Link
                href="/cookies"
                className="hover:underline focus:outline-none focus:underline"
              >
                Cookies
              </Link>
              <span>-</span>
              <Link
                href="/applications"
                className="hover:underline focus:outline-none focus:underline"
              >
                Mention d&apos;information applications
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
