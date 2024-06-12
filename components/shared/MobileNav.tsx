"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"
import { motion } from "framer-motion";


const MobileNav = () => {
  const pathname = usePathname();
  const links = ["AboutUs", "BusinessSolutions", "TaxProblems"];
  const logoDivStyling = "flex-1 flex items-center pl-[20px]";
  const logoStyling = "w-[45px] h-[45px] bg-gradient-to-br from-[#BCFD4C] via-cyan-600 to-[#BCFD4C] "

  return (
    <header className="header">
      <nav className="flex gap-2">
      <div className="flex-grow flex items-center justify-center">
        <Link href="/AboutUs">
          <span className="mx-4 text-sm font-bold text-[#6E6E6E] hover:text-zinc-600 transition duration-150 ease-in-out">
             About Us
          </span>
        </Link>
        <Link href="/BusinessSolutions">
          <span className="mx-4 text-sm font-bold text-[#6E6E6E] hover:text-zinc-600 transition duration-150 ease-in-out">
              Solutions
          </span>
        </Link>
        <Link href="/TaxProblems">
          <span className="mx-4 text-sm font-bold text-[#6E6E6E] hover:text-zinc-600 transition duration-150 ease-in-out">
              Problems
          </span>
        </Link>
      </div>
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
                
              <ul className="header-nav_elements">
              {navLinks.map((link) => {
                const isActive = link.route === pathname

                return (
                  <li 
                    className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}
                    key={link.route}
                    >
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
                    </div>
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
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#BCFD4C_0%,#004AAD_50%,#BCFD4C_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#6E6E6E] px-6 py-1 text-sm font-bold text-white backdrop-blur-3xl">
              Login
            </span>
          </button>
          </SignedOut>
      </nav>
    </header>
  )
}

export default MobileNav