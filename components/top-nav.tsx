"use client";

import {
  Menu,
  X,
  Home,
  Info,
  Calendar,
  Mail,
  Users,
  LibraryBig,
  ChevronDown,
  LogIn,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "@/lib/auth-client";

export function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [getInvolvedOpen, setGetInvolvedOpen] = useState(false);
  const router = useRouter();

  const { data: session } = useSession();
  const user = session?.user;

  console.log("user", user);

  const menuItems = [
    { icon: Home, label: "Accueil", href: "/" },
    { icon: Info, label: "À Propos", href: "/about" },
    { icon: Users, label: "Ministères", href: "/ministries" },
    { icon: LibraryBig, label: "Enseignements", href: "/teachings" },
    { icon: Calendar, label: "Activités", href: "/events" },
    { icon: Mail, label: "Contact", href: "/contact" },
  ];

  const handleLoginClick = () => {
    router.push("/auth/login");
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800">
        <div className="flex items-center justify-between px-4 md:px-8 h-16 max-w-7xl mx-auto">
          {/* Logo/Church Name */}
          <Link href="/" className="flex flex-col items-center gap-0.5">
            <img src="/images/image.png" alt="ICC Logo" className="h-10 w-10" />
            <span className="text-white text-[10px] font-medium tracking-wider">
              BRUXELLES
            </span>
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/about"
              className="text-white hover:text-gray-300 transition-colors text-sm font-medium"
            >
              À Propos
            </Link>
            <Link
              href="/teachings"
              className="text-white hover:text-gray-300 transition-colors text-sm font-medium"
            >
              Enseignements
            </Link>
            <div className="relative">
              <button
                onMouseEnter={() => setGetInvolvedOpen(true)}
                onMouseLeave={() => setGetInvolvedOpen(false)}
                className="text-white hover:text-gray-300 transition-colors text-sm font-medium flex items-center gap-1"
              >
                S'impliquer
                <ChevronDown className="h-4 w-4" />
              </button>
              {getInvolvedOpen && (
                <div
                  onMouseEnter={() => setGetInvolvedOpen(true)}
                  onMouseLeave={() => setGetInvolvedOpen(false)}
                  className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-zinc-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 py-2"
                >
                  <Link
                    href="/ministries"
                    className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors text-sm"
                  >
                    Ministères
                  </Link>
                  <Link
                    href="/events"
                    className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors text-sm"
                  >
                    Activités
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className="text-white hover:text-gray-300 transition-colors text-sm font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-4 ">
            {user ? (
              <>
                <div className="flex items-center gap-4">
                  <div className="text-white">{user?.name || "User"}</div>
                  <button
                    onClick={() => {
                      signOut();
                      setMenuOpen(false);
                    }}
                    className=" max-md:hidden flex items-center w-full bg-white text-red-400 font-medium rounded-md px-4 py-2 hover:bg-gray-200"
                  >
                    <LogOut className="h-5 w-5" />

                    {"Déconnexion"}
                  </button>
                </div>
              </>
            ) : (
              <button
                onClick={() => {
                  handleLoginClick();
                  setMenuOpen(false);
                }}
                className="max-md:hidden mx-6 my-4 bg-[#7f20df] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#6a1bc0] transition-colors text-center flex items-center justify-center gap-2"
              >
                <LogIn className="h-5 w-5" />
                Connexion
              </button>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white flex size-10 shrink-0 items-center justify-center"
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute top-16 left-0 right-0 bg-white dark:bg-[#191121] border-b border-gray-200 dark:border-gray-800 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 dark:hover:bg-zinc-900 border-b border-gray-100 dark:border-gray-800 last:border-b-0 transition-colors"
                >
                  <item.icon className="h-5 w-5 text-[#7f20df]" />
                  <span className="text-[#141117] dark:text-white font-medium">
                    {item.label}
                  </span>
                </Link>
              ))}
              {user ? (
                <>
                  <button
                    onClick={() => {
                      signOut();
                      setMenuOpen(false);
                    }}
                    className="flex gap-4 w-full bg-white text-red-600 font-medium rounded-md ml-2 px-4 py-2 hover:bg-gray-200"
                  >
                    <LogOut className="h-5 w-5" />

                    {"Déconnexion"}
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    handleLoginClick();
                    setMenuOpen(false);
                  }}
                  className="mx-6 my-4 bg-[#7f20df] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#6a1bc0] transition-colors text-center flex items-center justify-center gap-2"
                >
                  <LogIn className="h-5 w-5" />
                  Connexion
                </button>
              )}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
