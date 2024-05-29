import { navLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { HoverEffect } from "@/components/HoverEffect";

import { LandingNavbar } from "@/components/landing-navbar";
import { SparklesPreview } from "@/components/sparklesComponents";

const AboutUs = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || '';



  return (
    <><>
    <LandingNavbar />
    <SparklesPreview />
      <section className="home">
        <h1 className="home-heading">
          Online Advisor
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
     
    </><HoverEffect />
    
    
    </>
  )
}

export default AboutUs