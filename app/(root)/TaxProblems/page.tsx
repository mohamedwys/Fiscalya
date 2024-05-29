import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LandingNavbar } from "@/components/landing-navbar";
import Footer from "@/components/footer";

const TaxProblems = async ({ searchParams }: SearchParamProps) => {
    const page = Number(searchParams?.page) || 1;
    const searchQuery = (searchParams?.query as string) || '';
  
    return (
    <>
    <LandingNavbar />
      <section className="container mx-auto py-12">
        <div className="flex flex-col items-center justify-center gap-6">
          <Image src="/assets/icons/detective.svg" alt="Call" width={100} height={100} />
          <h2 className="h2-bold text-zinc-500">We'll help you Solve your Tax Issues</h2>
          <p className="text-gray-600 text-center">
          Find the best solution to your tax problems with our expert team.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <a href="#personal-tax">
              <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                <Image className="inline-block mb-4" src="/assets/icons/Personal.svg" alt="Understanding" width={50} height={50} />
                <h4 className="text-lg font-bold text-gray-800">Your Personal Tax</h4>
              </div>
            </a>
            <a href="#business-tax">
              <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
                <Image className="inline-block mb-4" src="/assets/icons/busi.svg" alt="Analysis" width={50} height={50} />
                <h4 className="text-lg font-bold text-gray-800">Your Business Tax</h4>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="text-center max-w-md">
            <p className="text-gray-600">
              <strong>We'll Find the Best Solution for You</strong><br />
              We're committed to finding the best solution to your tax issue that works for you. We will only suggest a solution to address your tax problem if we think it's right for you.
              <br /><br />
              If we don't think our services are necessary, we'll give you advice on how to handle your tax issue.
            </p>
          </div>
          <div>
            <Image src="/assets/icons/women.svg" alt="Solution" width={300} height={200} />
          </div>
        </div>

        <div className="mt-12">
          <h3 id="personal-tax" className="text-xl font-bold text-center text-zinc-500">Resolve your Personal Tax Issues</h3>
          <p className="text-gray-600 text-center mt-4">
          Whether you just received a letter from the Authorities, an audit, or need help with your tax debt, we can help.
          </p>
          <ul className="list-disc pl-6 text-gray-600 mt-4">
            <li>Letter from the IRS</li>
            <li>IRS Audit</li>
            <li>Tax Debt Resolution</li>
            <li>Corrections to Prior Year Tax Returns</li>
          </ul>
        </div>

        <div className="mt-12">
          <h3 id="business-tax" className="text-xl font-bold text-center text-zinc-500">The Expertise to Resolve your Business Tax Issues</h3>
          <p className="text-gray-600 text-center mt-4">
          We help businesses like yours resolve these and related tax issues. Ask us today about how we can assist you.
          </p>
          <ul className="list-disc pl-6 text-gray-600 mt-4">
            <li>IRS Issues</li>
            <li>IRS Letter / Inquiry</li>
            <li>Tax Lien</li>
            <li>Audit Representation</li>
            <li>Collections</li>
            <li>Installment Agreement</li>
            <li>Penalty Abatement</li>
            <li>Offer-in-Compromise</li>
            <li>Report Corrections</li>
            <li>State & Local Taxes</li>
            <li>Franchise Tax</li>
            <li>Sales Tax</li>
            <li>Collections</li>
            <li>Liquor Tax</li>
            <li>Payroll Taxes</li>
            <li>Prior Period Reporting</li>
            <li>Payroll Tax Audit</li>
            <li>Unemployment</li>
            <li>Workmans Comp</li>
            <li>Collections</li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TaxProblems;
