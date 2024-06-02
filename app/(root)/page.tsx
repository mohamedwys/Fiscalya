"use client";

import { HoverEffect } from "@/components/HoverEffect";
import { WobbleCardDemo } from "@/components/wobble";
import Lottie from "lottie-react";
import animationData from "@/public/assets/Animation - 6.json";
import { LandingNavbar } from "@/components/landing-navbar";
import Footer from "@/components/footer";
import { LandingHero } from "@/components/LandingHero";
import { GlobeDemo } from "@/components/ui/GlobePage"
import TaxContent from "@/components/TaxContent";
import FAQ from "@/components/Faq";
import { PricingSection } from "@/components/pricing-section";
import YoutubeVideo from "@/components/YoutubeVideo";

export default function LandingPage (): JSX.Element{ 
  
  return (
    
      <div className="h-full bg-[#ced4da]">
        <LandingNavbar />
        <LandingHero />   
        <GlobeDemo />
        <TaxContent  />
        <FAQ />
        <HoverEffect />
        <WobbleCardDemo  />
        <YoutubeVideo url={"https://www.youtube.com/watch?v=YIm6Km-TpbA"}/>
        <PricingSection />
        <Lottie
                  animationData={animationData}
                  width={50}
                  height={50}
                  className=""
                />
        <Footer />
        </div>

  
  )
}




// "use client";

// import { HoverEffect } from "@/components/HoverEffect";
// import { WobbleCardDemo } from "@/components/wobble";
// import Lottie from "lottie-react";
// import animationData from "@/public/assets/Animation - 6.json";
// import { LandingNavbar } from "@/components/landing-navbar";
// import Footer from "@/components/footer";
// import { LandingHero } from "@/components/LandingHero";
// import { GlobeDemo } from "@/components/ui/GlobePage"
// import TaxContent from "@/components/TaxContent";
// import FAQ from "@/components/Faq";

// const LandingPage = async ({ searchParams }: SearchParamProps) => {
//   const page = Number(searchParams?.page) || 1;
//   const searchQuery = (searchParams?.query as string) || '';

  
//   return (
    
//       <div className="h-full bg-[#ced4da]">
//         <LandingNavbar />
//         <LandingHero />   
//         <GlobeDemo />
//         <TaxContent  />
//         <FAQ />
//         <HoverEffect />
//         <WobbleCardDemo  />
        
//         <Lottie
//                   animationData={animationData}
//                   width={50}
//                   height={50}
//                   className=""
//                 />
//         <Footer />
//         </div>

  
//   )
// }

// export default LandingPage