"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { SignedOut, useAuth } from "@clerk/nextjs";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const font = Montserrat({
  weight: "600",
  subsets: ['latin']
});

const links = ["AboutUs", "BusinessSolutions", "TaxProblems"];
const logoDivStyling = "flex-1 flex items-center pl-[20px]";
const logoStyling = "w-[45px] h-[45px] bg-gradient-to-br from-[#BCFD4C] via-cyan-600 to-[#BCFD4C]";

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {!isMobile && (
        <nav className="p-4 bg-transparent flex items-center justify-between">
          <div className="flex items-center justify-start">
            <div className="absolute top-67 left-5 mt12">
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
                <Link href="/" className="flex items-center ml-4">
                  <h1 className={cn("text-3xl font-bold text-zinc-500", font.className)}>
                    Fiscalya
                  </h1>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex-grow flex items-center justify-center">
            <Link href="/AboutUs">
              <span className="mx-4 text-sm font-bold text-zinc-500 hover:text-zinc-600 transition duration-150 ease-in-out">
                About Us
              </span>
            </Link>
            <Link href="/BusinessSolutions">
              <span className="mx-4 text-sm font-bold text-zinc-500 hover:text-zinc-600 transition duration-150 ease-in-out">
                Business Solutions
              </span>
            </Link>
            <Link href="/TaxProblems">
              <span className="mx-4 text-sm font-bold text-zinc-500 hover:text-zinc-600 transition duration-150 ease-in-out">
                Tax Problems
              </span>
            </Link>
          </div>
          <div className="flex items-center justify-end">
            <div className="absolute top-0 right-8 mt-12">
              <Link href={isSignedIn ? "/Home" : "/sign-up"}>
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#BCFD4C_0%,#004AAD_50%,#BCFD4C_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#ced4da] px-6 py-1 text-sm font-bold text-zinc-500 backdrop-blur-3xl">
                    Login
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};
