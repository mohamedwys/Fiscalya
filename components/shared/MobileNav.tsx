"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google"



const font = Montserrat({
  weight: "600",
  subsets: ['latin']
});


const MobileNav = () => {
  const pathname = usePathname();
  const logoDivStyling = "flex-1 flex items-center pl-[20px]";
  const logoStyling = "w-[45px] h-[45px] bg-gradient-to-br from-[#2C3E50] via-[#fd746c] to-[#2C3E50] "

  return (
    <header className="header">
      <div className={logoDivStyling}>
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1.2, 1, 1],
                          rotate: [0, 0, 270, 270, 0],
                          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        className={logoStyling}
                      ></motion.div>
                      <Link href="/" className="px-3 py-2 flex-1">
                        <h1 className={cn("text-3xl font-bold text-zinc-500", font.className)}>
                          Fiscalya
                        </h1>
                      </Link>
                    </div>
      <nav className="flex gap-2">
      
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <Sheet>
            <SheetTrigger>
              <Image 
                src="/assets/icons/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
              
                  <Link href="/" className="sidebar-logo">
                    <h1 className={cn("text-3xl font-bold text-neutral-200", font.className)}>
                      Fiscalya
                    </h1>
                  </Link>
                  <ul className="header-nav_elements">
              {navLinks.map((link) => {
                const isActive = link.route === pathname

                return (
                  <li 
                    className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-neutral-200`}
                    key={link.route}
                    >
                    <Link className="sidebar-link cursor-pointer" href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
              </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2C3E50_0%,#004AAD_50%,#fd746c_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-200 px-6 py-1 text-sm font-bold text-zinc-500 backdrop-blur-3xl">
                    Login
                </span>
            </button>
          </SignedOut>
      </nav>
    </header>
  )
}

export default MobileNav;