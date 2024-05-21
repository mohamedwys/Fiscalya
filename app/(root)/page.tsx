"use client";

import TypewriterComponent from "typewriter-effect";
import { Collection } from "@/components/shared/Collection"
import { navLinks } from "@/constants"
// import { getAllImages } from "@/lib/actions/image.actions"
import Image from "next/image"
import Link from "next/link"
import { HoverEffect } from "@/components/HoverEffect";
import { WobbleCardDemo } from "@/components/wobble";
import Lottie from "lottie-react";
import animationData from "@/public/assets/Animation - 6.json";
import { LandingNavbar } from "@/components/landing-navbar";
import { SparklesPreview } from "@/components/sparklesComponents";

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || '';

  // const images = await getAllImages({ page, searchQuery})

  return (
    <><>
    <LandingNavbar />
    <SparklesPreview />
      <section className="home">
        <h1 className="home-heading">
          Fiscalya Online Services
        </h1>

        <ul className="flex-center w-full gap-20">
          {navLinks.slice(1, 5).map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className="flex-center flex-col gap-2"
            >
              <li className="flex-center w-fit rounded-full bg-[#FBE9D0] p-4">
                <Image src={link.icon} alt="image" width={24} height={24} />
              </li>
              <p className="p-14-medium text-center text-white">{link.label}</p>
            </Link>
          ))}
        </ul>
      </section>
     
      <div className="font-bold py-36 text-center text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#CDA292] via-[#820000] to-[#820000]">
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
        
      {/* <section className="sm:mt-12">
      <Collection
        hasSearch={true}
        images={images?.data}
        totalPages={images?.totalPage}
        page={page}
      />
    </section> */}
    </><HoverEffect />
    <WobbleCardDemo  />
    <Lottie
              animationData={animationData}
              width={50}
              height={50}
              className=""
            />
    </>
  )
}

export default Home