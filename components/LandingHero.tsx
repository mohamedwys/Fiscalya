"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";



export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-neutral-200 font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold text-zinc-500 bg-clip-text bg-zinc-500">
        <h1>Fiscalya Online Services</h1>
        <div className="text-transparent  bg-clip-text bg-gradient-to-r from-[#F58F7C] via-[#F2C4CE] to-[#F58F7C]">
          <TypewriterComponent
            options={{
              strings: [
                "Tax Assistance",
                "Taxation Regulations",
                "Financial Regulations",
                "Customized Reports",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm mt-10 md:text-xl top- font-light text-zinc-500 space-y-5">
      At Fiscalya, we understand the complexities of taxation and financial regulations. That’s why we’ve developed a suite of online services to streamline your fiscal processes and empower your business to thrive in today’s dynamic market. 
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
        <button className="relative mt-12 inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#BCFD4C_0%,#004AAD_50%,#BCFD4C_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#ced4da] px-6 py-1 text-sm font-bold text-zinc-500 backdrop-blur-3xl">
             Get Started
            </span>
          </button>
        </Link>
      </div>
      <div className="text-zinc-500 text-xs md:text-sm font-normal">
        When your business is clear your mind is clear.
      </div>
    </div>
  );
};