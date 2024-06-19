"use client";

import { Montserrat } from "next/font/google";
import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";


// import { Button } from '../ui/button'
const font = Montserrat({
  weight: "600",
  subsets: ['latin']
});


const Sidebar = () => {
  const pathname = usePathname();
  const logoDivStyling = "flex-1 flex items-center pl-[20px]";
  const logoStyling = "w-[45px] h-[45px] bg-gradient-to-br from-[#2C3E50] via-[#fd746c] to-[#2C3E50]";

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <div className="flex items-center justify-start">
          <div className="flex items-center pl-3 mb-12">
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
                <h1 className={cn("text-3xl font-bold text-neutral-200", font.className)}>
                  Fiscalya
                </h1>
              </Link>
            </div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements top-4">
              {navLinks.slice(0, 3).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li key={link.route} className={`sidebar-nav_element group ${
                    isActive ? 'bg-[#fd746c] text-[#2C3E50]' : 'text-neutral-200'
                  }`}>
                    <Link className="sidebar-link" href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className="sidebar-nav_elements">
              {navLinks.slice(3).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li key={link.route} className={`sidebar-nav_element group ${
                    isActive ? 'bg-[#fd746c] text-[#2C3E50]' : 'text-neutral-200'
                  }`}>
                    <Link className="sidebar-link" href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}

              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl='/' showName />
              </li>
            </ul>
          </SignedIn>

          {/* <SignedOut>
            <Button asChild className="button bg-[#966F60] bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut> */}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
