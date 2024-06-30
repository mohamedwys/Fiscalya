import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LandingNavbar } from "@/components/landing-navbar";
import Footer from "@/components/footer";
import Balancer from "react-wrap-balancer";
import TOS from "@/components/TOS";


const TermsOfService =  () => {

  

  return (
    <>
    <LandingNavbar />
      <section className="container mx-auto py-12">
        <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <Balancer>
              <span className="bg-gradient-to-r from-zinc-400 to-zinc-600 bg-clip-text text-transparent">
              Consumer Terms of Service
              </span>
            </Balancer>
          </h2>
          <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
            Welcome to Fiscalya! Before you access our services, please read these Terms of Service.
            </Balancer>
          </h3>
          <h4 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
            These Terms of Service (“Terms”) govern your use of our AI ChatBot, and other services that we may offer for individuals, along with any associated apps, software, and websites (together, our “Services”). These Terms are a contract between you and Fiscalya.
            </Balancer>
          </h4>
          </div>
          <TOS />
      </section>
      <Footer />
    </>
  );
};

export default TermsOfService;

