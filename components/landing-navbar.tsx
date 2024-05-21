"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { SignedOut, useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";


const font = Montserrat ({
    weight: "600",
    subsets: ['latin'] });

export const LandingNavbar = () => {
    const {isSignedIn} = useAuth();

    return (
        <nav className="p-4 bg-transparent flex items-center justify-between">
            <div className="flex-grow flex items-center justify-center">
        <Link href="/about">
          <span className="mx-4 text-sm font-bold text-[#AF8260] hover:text-zinc-600 transition duration-150 ease-in-out">
            About Us
          </span>
        </Link>
        <Link href="/contact">
          <span className="mx-4 text-sm font-bold text-[#AF8260] hover:text-zinc-600 transition duration-150 ease-in-out">
            Contact Us
          </span>
        </Link>
        <Link href="/pricing">
          <span className="mx-4 text-sm font-bold text-[#AF8260] hover:text-zinc-600 transition duration-150 ease-in-out">
            Pricing
          </span>
        </Link>
      </div>
            <div className="flex items-center gap-x-2">
            <SignedOut>
            <Button asChild className="button bg-[#966F60] bg-cover px-3 py-1 text-sm font-bold inline-flex items-center justify-center border rounded-full text-neutral-200 hover:text-zinc-600 transition duration-150 ease-in-out w-full group border-zinc-400">
              <Link href="/sign-in">Get Started</Link>
            </Button>
          </SignedOut>
                {/* <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button variant="outline" className="button bg-[#966F60] bg-cover px-3 py-1 text-sm font-bold inline-flex items-center justify-center border rounded-full text-neutral-200 hover:text-zinc-600 transition duration-150 ease-in-out w-full group border-zinc-400">
                        Get Started
                    </Button>
                </Link> */}
        </div>
    </nav>
  )
}
