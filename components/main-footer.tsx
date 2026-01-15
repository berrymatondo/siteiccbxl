import { MapPin, Phone, Mail, Calendar, Facebook, Instagram, Youtube } from "lucide-react"
import Link from "next/link"

export function MainFooter() {
  return (
    <footer className="bg-primary text-white w-full rounded-t-3xl overflow-hidden shadow-2xl mt-12">
      <div className="max-w-4xl mx-auto px-6 pt-10 pb-8 flex flex-col space-y-10">
        {/* Social Section */}
        <div className="flex flex-col items-center space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tighter uppercase text-center">REJOIGNEZ-NOUS</h2>
          <div className="flex items-center space-x-5">
            <a
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors flex items-center justify-center"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="w-7 h-7" />
            </a>
            <a
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors flex items-center justify-center"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="w-7 h-7" />
            </a>
            <a
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors flex items-center justify-center"
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Youtube className="w-7 h-7" />
            </a>
            <a
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors flex items-center justify-center"
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Info Sections */}
        <div className="space-y-8">
          {/* Address */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2 border-b border-white/20 pb-2 mb-2">
              <MapPin className="w-5 h-5" />
              <h3 className="text-xl font-bold">Adresse</h3>
            </div>
            <div className="space-y-1 opacity-90 leading-relaxed">
              <p className="font-medium italic">Rue des lutins 8, Forest, 1190 Bruxelles, BELGIQUE</p>
              <p className="text-sm">Réseau STIB : Tram 82, Tram 97 / Bus 50 – Arrêt: NEERSTALLE</p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2 border-b border-white/20 pb-2 mb-2">
              <Phone className="w-5 h-5" />
              <h3 className="text-xl font-bold">Contact</h3>
            </div>
            <div className="space-y-2 opacity-90">
              <a className="flex items-center space-x-2 hover:underline" href="tel:+3222459250">
                <Phone className="w-4 h-4" />
                <span>Tel. : +32 2 245 92 50</span>
              </a>
              <a className="flex items-center space-x-2 hover:underline" href="mailto:icc-bruxelles@egliseicc.com">
                <Mail className="w-4 h-4" />
                <span>Email : icc-bruxelles@egliseicc.com</span>
              </a>
            </div>
          </div>

          {/* Schedule */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2 border-b border-white/20 pb-2 mb-2">
              <Calendar className="w-5 h-5" />
              <h3 className="text-xl font-bold">Nos rendez-vous</h3>
            </div>
            <ul className="space-y-3 opacity-90">
              <li className="flex items-start space-x-3 italic">
                <span className="w-1.5 h-1.5 mt-2 bg-white rounded-full flex-shrink-0"></span>
                <span>Vendredi: 19h30 – 21h30 (Atmosphère de Gloire)</span>
              </li>
              <li className="flex items-start space-x-3 italic">
                <span className="w-1.5 h-1.5 mt-2 bg-white rounded-full flex-shrink-0"></span>
                <span>Dimanche (2 cultes de célébration) : 9h00 – 11h30 & 11h45 – 14h15</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="pt-8 border-t border-white/10 text-center space-y-4">
          <p className="text-[10px] opacity-70 uppercase tracking-widest font-medium">
            © Impact Centre Chrétien 2025. Tous droits réservés
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] font-semibold opacity-80">
            <Link className="hover:text-slate-300" href="#">
              Politique de confidentialité
            </Link>
            <Link className="hover:text-slate-300" href="#">
              Mentions Légales
            </Link>
            <Link className="hover:text-slate-300" href="#">
              Cookies
            </Link>
            <Link className="hover:text-slate-300 text-center w-full mt-1" href="#">
              Mention d'information applications
            </Link>
          </div>
        </div>
      </div>
      {/* Spacer for bottom nav */}
      <div className="h-8 w-full"></div>
    </footer>
  )
}
