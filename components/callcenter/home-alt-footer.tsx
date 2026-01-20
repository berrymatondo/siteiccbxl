import { Globe, Video, Share2 } from 'lucide-react'

export default function HomeAltFooter() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 p-8 text-center space-y-6 max-w-4xl mx-auto">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-xl font-bold text-[#135bec]">ICCBXL</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Rue des lutins 8, 1190 Forest, Belgique
        </p>
      </div>
      <div className="flex justify-center gap-6">
        <button className="text-gray-400 hover:text-[#135bec] transition-colors cursor-pointer">
          <Globe className="h-6 w-6" />
        </button>
        <button className="text-gray-400 hover:text-[#135bec] transition-colors cursor-pointer">
          <Video className="h-6 w-6" />
        </button>
        <button className="text-gray-400 hover:text-[#135bec] transition-colors cursor-pointer">
          <Share2 className="h-6 w-6" />
        </button>
      </div>
      <p className="text-gray-400 text-xs">© 2026 ICCBXL. Tous droits réservés.</p>
    </footer>
  )
}
