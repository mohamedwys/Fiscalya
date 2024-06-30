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
import { Card } from "@/components/card";
import FAQQ from "@/components/faqq";
import WhatsappButton from "@/components/whatsappButton";




export default function LandingPage (): JSX.Element{ 
  
  const handleWhatsappClick = () => {
    if (typeof navigator !== 'undefined' && navigator.userAgent.includes('WhatsApp')) {
      // WhatsApp is installed, open the app with a pre-filled message
      window.open(`whatsapp://send?phone=+1234567890&text=Hello, I need assistance.`, '_self');
    } else {
      // WhatsApp is not installed, open the web version in a new tab
      window.open('https://web.whatsapp.com/send?phone=+1234567890&text=Hello, I need assistance.', '_blank');
    }
  };

  return (
    
      <div className="h-full bg-neutral-200">
        <LandingNavbar />
        
        <LandingHero />   
        <GlobeDemo />
        <WhatsappButton />
        <Card/>
        <WobbleCardDemo  />
        <FAQ />
        <TaxContent  />
        <HoverEffect />
        <YoutubeVideo url={"https://www.youtube.com/watch?v=mSOLdtryA6Q&list=PLsPIJCUdzSaJjJBmhEo3Dg0ol258-bl90"}  />
        <PricingSection />
        <FAQQ />
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
