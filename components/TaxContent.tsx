"use client";

import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import Footer from "@/components/footer";

const TaxContent =  () => {
    
  
    return (
    <>
      <section className="container mx-auto py-12">
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="text-center max-w-md">
            <p className="text-zinc-500">
              <strong>Direct Tax</strong><br />
              Direct taxes are levied directly on an individual’s income or wealth. These taxes are paid by the taxpayer to the government and cannot be transferred to another entity. 
              <br /><br />
              Direct taxes are typically imposed on income, profits, or wealth, and the rate of taxation varies based on the taxpayer’s income level. Direct taxes are considered progressive, meaning that higher-income individuals pay a higher rate of tax.
            </p>
          </div>
          <div>
          <Image
              src="/assets/images/taxcontent4.jpg"
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
              src="/assets/images/taxcontent5.jpg"
              alt="Solution"
              width={500}
              height={500}
              className="rounded-3xl"
            />
          </div>
          <div className="text-center max-w-md">
            
            <p className="text-zinc-500">
              <strong>Indirect Tax</strong><br />
              Indirect taxes, on the other hand, are levied on goods and services consumed by individuals. These taxes are paid by the consumer through the price of the goods or services. Indirect taxes are typically imposed on the production, distribution, or sale of goods and services, and the rate of taxation is the same for all taxpayers. 
.
              <br /><br />
              Indirect taxes are typically imposed on the production, distribution, or sale of goods and services, and the rate of taxation is the same for all taxpayers. Indirect taxes are considered regressive, meaning that lower-income individuals pay a higher proportion of their income in taxes.
.
            </p>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default TaxContent;
