"use client";

import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import Footer from "@/components/footer";
import Balancer from "react-wrap-balancer";

const AboutUs =  () => {
    
  
    return (
    <>
    <LandingNavbar />
      <section className="container mx-auto py-12">
        
      <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <Balancer>
              <span className="bg-gradient-to-r from-zinc-400 to-zinc-600 bg-clip-text text-transparent">
                About Us
              </span>
            </Balancer>
          </h2>
          <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
              Fiscalya operate in many countries and territories across the globe, offering audit, tax and advisory services.
            </Balancer>
          </h3>
        </div>
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
        
          <div className="text-center max-w-md">
            <p className="text-zinc-500">
            <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
              Our Purpose
            </Balancer>
            </h3>
              We believe a better working world is one where economic growth is sustainable and inclusive. We work continuously to improve the quality of all our services, investing in our people and innovation. 
              <br /><br />
              And we’re proud to work with others from our clients to wider partners to use our knowledge, skills and experience to help fulfill our purpose and create positive change.
            </p>
          </div>
          <div>
          <Image
              src="/assets/images/ourpurpose.jpg"
              alt="Solution"
              width={500}
              height={500}
              className="rounded-3xl"
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
        <div>
          <Image
              src="/assets/images/ourvalue.jpg"
              alt="Solution"
              width={500}
              height={500}
              className="rounded-3xl"
            />
          </div>
          <div className="text-center max-w-md">
            
            <p className="text-zinc-500">
            <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
              Our Values
            </Balancer>
            </h3>
               We believe economic growth and social inclusion must always be looked at together and increased overall prosperity can only be achieved along with more equal opportunity and outcomes.  
              <br /><br />
              Through our services, our wider influence and our approach to corporate responsibility, we’re committed to supporting broad-based growth that empowers everyone to contribute to and benefit from economic success, both today and tomorrow.
            </p>
          </div>
          
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
        
          <div className="text-center max-w-md">
            <p className="text-zinc-500">
            <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
              Our People
            </Balancer>
            </h3>
               At Fiscalya, we empower our people with the right mindsets and skills to navigate what’s next, become the transformative leaders the world needs, pursue careers as unique as they are, and build their own exceptional experiences. 
              <br /><br />
              The ability to invite, leverage and learn from different perspectives is key to delivering for our clients. We believe diversity and inclusiveness means growth.
            </p>
          </div>
          <div>
          <Image
              src="/assets/images/ourpeople.jpg"
              alt="Solution"
              width={500}
              height={500}
              className="rounded-3xl"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
