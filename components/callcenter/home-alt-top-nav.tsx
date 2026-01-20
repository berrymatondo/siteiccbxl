'use client'

import { Menu, UserCircle } from 'lucide-react'

export default function HomeAltTopNav() {
  return (
    <div className="sticky top-0 z-50 flex items-center bg-white dark:bg-[#101622]/90 backdrop-blur-md p-4 border-b border-gray-100 dark:border-gray-800 justify-between max-w-4xl mx-auto">
      <button className="text-[#111318] dark:text-white flex size-12 shrink-0 items-center justify-start">
        <Menu className="h-6 w-6" />
      </button>
      <h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">
        ICCBXL
      </h2>
      <button className="flex w-12 items-center justify-end">
        <UserCircle className="h-6 w-6 text-[#111318] dark:text-white" />
      </button>
    </div>
  )
}
