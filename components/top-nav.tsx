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
  Phone,
} from "lucide-react";
import { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { signOut, useSession } from "@/lib/auth-client";

export function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [getInvolvedOpen, setGetInvolvedOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const { data: session } = useSession();
  const user = session?.user;

  const menuItems = [
    { icon: Home, label: "Accueil", href: "/" },
    { icon: Info, label: "À Propos", href: "/about" },
    { icon: Users, label: "Ministères", href: "/ministries" },
    { icon: LibraryBig, label: "Enseignements", href: "/teachings" },
    { icon: Calendar, label: "Activités", href: "/events" },
    { icon: Phone, label: "Infos Utiles", href: "/callcenter" },
    { icon: Mail, label: "Contact", href: "/contact" },
  ];

  const handleLoginClick = () => {
    router.push("/auth/login");
  };

  // Active si on est exactement sur la route,
  // ou sur une sous-page (ex: /teachings/123 => /teachings)
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  // Desktop links (style)
  const desktopLinkClass = (href: string) =>
    [
      "transition-colors text-sm font-medium",
      isActive(href)
        ? "text-white border-b-2 border-[#7f20df] pb-1"
        : "text-white hover:text-gray-300",
    ].join(" ");

  // Dropdown links (style)
  const dropdownLinkClass = (href: string) =>
    [
      "block px-4 py-2 transition-colors text-sm",
      isActive(href)
        ? "bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white font-semibold"
        : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800",
    ].join(" ");

  // Mobile links (style)
  const mobileLinkClass = (href: string) =>
    [
      "flex items-center gap-4 px-6 py-4 border-b border-gray-100 dark:border-gray-800 last:border-b-0 transition-colors",
      isActive(href)
        ? "bg-gray-50 dark:bg-zinc-900"
        : "hover:bg-gray-50 dark:hover:bg-zinc-900",
    ].join(" ");

  // Optionnel : surbrillance du bouton "S'impliquer" si on est sur /ministries ou /events
  const getInvolvedActive = useMemo(() => {
    return isActive("/ministries") || isActive("/events");
  }, [pathname]);

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
            <Link href="/about" className={desktopLinkClass("/about")}>
              À Propos
            </Link>

            <Link href="/teachings" className={desktopLinkClass("/teachings")}>
              Enseignements
            </Link>

            <div className="relative">
              <button
                onMouseEnter={() => setGetInvolvedOpen(true)}
                onMouseLeave={() => setGetInvolvedOpen(false)}
                className={[
                  "transition-colors text-sm font-medium flex items-center gap-1",
                  getInvolvedActive
                    ? "text-white border-b-2 border-[#7f20df] pb-1"
                    : "text-white hover:text-gray-300",
                ].join(" ")}
              >
                S&apos;impliquer
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
                    className={dropdownLinkClass("/ministries")}
                  >
                    Ministères
                  </Link>
                  <Link href="/events" className={dropdownLinkClass("/events")}>
                    Activités
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/callcenter"
              className={desktopLinkClass("/callcenter")}
            >
              Infos Utiles
            </Link>

            <Link href="/contact" className={desktopLinkClass("/contact")}>
              Contact
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <div className="text-white">{user?.name || "User"}</div>
                <button
                  onClick={() => {
                    signOut();
                    setMenuOpen(false);
                  }}
                  className="max-md:hidden flex items-center w-full bg-white text-red-400 font-medium rounded-md px-4 py-2 hover:bg-gray-200"
                >
                  <LogOut className="h-5 w-5" />
                  {"Déconnexion"}
                </button>
              </div>
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
                  className={mobileLinkClass(item.href)}
                >
                  <item.icon
                    className={[
                      "h-5 w-5",
                      isActive(item.href) ? "text-white" : "text-[#7f20df]",
                    ].join(" ")}
                  />
                  <span
                    className={[
                      "font-medium",
                      isActive(item.href)
                        ? "text-white bg-[#7f20df] px-2 py-1 rounded-md"
                        : "text-[#141117] dark:text-white",
                    ].join(" ")}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}

              {user ? (
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
