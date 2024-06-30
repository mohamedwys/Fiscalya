import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LandingNavbar } from "@/components/landing-navbar";
import Footer from "@/components/footer";
import Balancer from "react-wrap-balancer";
import RDP from "@/components/RDP";


const ResponsibleDisclosurePolicy =  () => {

  

  return (
    <>
    <LandingNavbar />
      <section className="container mx-auto py-12">
        <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <Balancer>
              <span className="bg-gradient-to-r from-zinc-400 to-zinc-600 bg-clip-text text-transparent">
              Responsible Disclosure Policy
              </span>
            </Balancer>
          </h2>
          <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
            Last updated on: 27 juin 2024
            </Balancer>
          </h3>
          <h4 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
            The security of our systems and user data is Fiscalya’s top priority. We appreciate the work of security researchers acting in good faith in identifying and reporting potential vulnerabilities.
            </Balancer>
          </h4>
          </div>
          <RDP />
      </section>
      <Footer />
    </>
  );
};

export default ResponsibleDisclosurePolicy;