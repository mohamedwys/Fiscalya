import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LandingNavbar } from "@/components/landing-navbar";
import Footer from "@/components/footer";
import Balancer from "react-wrap-balancer";
import PP from "@/components/PP";


const PrivacyPolicy =  () => {

  

  return (
    <>
    <LandingNavbar />
      <section className="container mx-auto py-12">
        <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <Balancer>
              <span className="bg-gradient-to-r from-zinc-400 to-zinc-600 bg-clip-text text-transparent">
              Consumer Privacy Policy
              </span>
            </Balancer>
          </h2>
          <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
            Fiscalya is a company specializes in taxes and legal using the power of AI safety and research working to build reliable, interpretable, and steerable systems.
            </Balancer>
          </h3>
          <h4 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
            This Privacy Policy describes your privacy rights. More information about your rights, and how to exercise them, is set out in the “Rights and Choices” section.
            </Balancer>
          </h4>
          </div>
          <PP />
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;