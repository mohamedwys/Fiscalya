import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LandingNavbar } from "@/components/landing-navbar";
import Footer from "@/components/footer";
import Balancer from "react-wrap-balancer";

const TaxProblems = async () => {
    
  
    return (
    <>
    <LandingNavbar />
      <section className="container mx-auto py-12">
        <div className="flex flex-col items-center justify-center gap-6">
        <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <Balancer>
              <span className="bg-gradient-to-r from-zinc-400 to-zinc-600 bg-clip-text text-transparent">
              We'll help you Solve your Tax Issues
              </span>
            </Balancer>
          </h2>
          <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
            Find the best solution to your tax problems with our expert team.
            </Balancer>
          </h3>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <a href="#personal-tax">
              <div className="bg-[#adb5bd] shadow-md rounded-lg p-6 flex flex-col items-center">
                <Image className="inline-block mb-4" src="/assets/icons/Personal.svg" alt="Understanding" width={50} height={50} />
                <h4 className="text-lg font-bold text-gray-800">Your Personal Tax</h4>
              </div>
            </a>
            <a href="#business-tax">
              <div className="bg-[#adb5bd] shadow-md rounded-lg p-6 flex flex-col items-center">
                <Image className="inline-block mb-4" src="/assets/icons/busi.svg" alt="Analysis" width={50} height={50} />
                <h4 className="text-lg font-bold text-gray-800">Your Business Tax</h4>
              </div>
            </a>
          </div>
        </div>
        <section className="container mx-auto py-12">
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="text-center max-w-md">
          
            <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
               We'll Find the Best Solution for You
            </Balancer>
            </h3>
              We're committed to finding the best solution to your tax issue that works for you. We will only suggest a solution to address your tax problem if we think it's right for you. 
              <br /><br />
              If we don't think our services are necessary, we'll give you advice on how to handle your tax issue.
           
          </div>
          <div>
          <Image
              src="/assets/images/solution.jpg"
              alt="Solution"
              width={400}
              height={400}
              className="rounded-3xl"
            />
            </div>
          </div>
        
        </section>


        <div className="container grid max-w-6xl gap-4 md:gap-8">
        <div id="personal-tax" className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <Balancer>
              <span className="bg-gradient-to-r from-zinc-400 to-zinc-600 bg-clip-text text-transparent">
              Resolve your Personal Tax Issues
              </span>
            </Balancer>
          </h2>
          <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
            Whether you just received a letter from the Authorities, an audit, or need help with your tax debt, we can help.
            </Balancer>
          </h3>
        </div>

  <h3  className="text-xl font-bold text-center text-zinc-500"></h3>
  <p className="text-gray-600 text-center mt-4">
    
  </p>
  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
    <li className="bg-white shadow-md rounded-lg p-6 border border-gray-200 text-gray-600 flex items-center space-x-4">
      <svg className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V7a1 1 0 10-2 0v2H7a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
      </svg>
      <span>Letter from the IRS</span>
    </li>
    <li className="bg-white shadow-md rounded-lg p-6 border border-gray-200 text-gray-600 flex items-center space-x-4">
      <svg className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/auditpb.svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V7a1 1 0 10-2 0v2H7a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
      </svg>
      <span>IRS Audit</span>
    </li>
    <li className="bg-white shadow-md rounded-lg p-6 border border-gray-200 text-gray-600 flex items-center space-x-4">
      <svg className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V7a1 1 0 10-2 0v2H7a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
      </svg>
      <span>Tax Debt Resolution</span>
    </li>
    <li className="bg-white shadow-md rounded-lg p-6 border border-gray-200 text-gray-600 flex items-center space-x-4">
      <svg className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V7a1 1 0 10-2 0v2H7a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
      </svg>
      <span>Corrections to Prior Year Tax Returns</span>
    </li>
  </ul>
</div>


        <div id="business-tax" className="flex flex-col items-center gap-6 text-center mt-20">
          <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <Balancer>
              <span className="bg-gradient-to-r from-zinc-400 to-zinc-600 bg-clip-text text-transparent">
              The Expertise to Resolve your Business Tax Issues
              </span>
            </Balancer>
          </h2>
          <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
            We help businesses like yours resolve these and related tax issues. Ask us today about how we can assist you.
            </Balancer>
          </h3>
        </div>
    <div className="mt-12">
  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
    <li className="bg-white shadow-md rounded-lg p-6 border border-gray-200 text-gray-600 flex items-center space-x-4">
      <svg className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V7a1 1 0 10-2 0v2H7a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
      </svg>
      <span>IRS Issues</span>
    </li>
    <li className="bg-white shadow-md rounded-lg p-6 border border-gray-200 text-gray-600 flex items-center space-x-4">
      <svg className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V7a1 1 0 10-2 0v2H7a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
      </svg>
      <span>IRS Letter / Inquiry</span>
    </li>
    <li className="bg-white shadow-md rounded-lg p-6 border border-gray-200 text-gray-600 flex items-center space-x-4">
      <svg className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V7a1 1 0 10-2 0v2H7a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
      </svg>
      <span>Tax Lien</span>
    </li>
    <li className="bg-white shadow-md rounded-lg p-6 border border-gray-200 text-gray-600 flex items-center space-x-4">
      <svg className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V7a1 1 0 10-2 0v2H7a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
      </svg>
      <span>Audit Representation</span>
    </li>
    <li className="bg-white shadow-md rounded-lg p-6 border border-gray-200 text-gray-600 flex items-center space-x-4">
      <svg className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V7a1 1 0 10-2 0v2H7a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
      </svg>
      <span>Collections</span>
    </li>
    <li className="bg-white shadow-md rounded-lg p-6 border border-gray-200 text-gray-600 flex items-center space-x-4">
      <svg className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V7a1 1 0 10-2 0v2H7a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
      </svg>
      <span>Installment Agreement</span>
    </li>
    <li className="bg-white shadow-md rounded-lg p-6 border border-gray-200 text-gray-600 flex items-center space-x-4">
      <svg className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V7a1 1 0 10-2 0v2H7a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
      </svg>
      <span>Penalty Abatement</span>
    </li>
    <li className="bg-white shadow-md rounded-lg p-6 border border-gray-200 text-gray-600 flex items-center space-x-4">
      <svg className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V7a1 1 0 10-2 0v2H7a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
      </svg>
      <span>Offer-in-Compromise</span>
    </li>
    <li className="bg-white shadow-md rounded-lg p-6 border border-gray-200 text-gray-600 flex items-center space-x-4">
      <svg className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V7a1 1 0 10-2 0v2H7a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
      </svg>
      <span>Report Corrections</span>
    </li>
    <li className="bg-white shadow-md rounded-lg p-6 border border-gray-200 text-gray-600 flex items-center space-x-4">
      <svg className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V7a1 1 0 10-2 0v2H7a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
      </svg>
      <span>State & Local Taxes</span>
    </li>
    <li className="bg-white shadow-md rounded-lg p-6 border border-gray-200 text-gray-600 flex items-center space-x-4">
      <svg className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V7a1 1 0 10-2 0v2H7a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
      </svg>
      <span>Franchise Tax</span>
    </li>
    <li className="bg-white shadow-md rounded-lg p-6 border border-gray-200 text-gray-600 flex items-center space-x-4">
      <svg className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V7a1 1 0 10-2 0v2H7a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
      </svg>
      <span>Sales Tax</span>
    </li>
    <li className="bg-white shadow-md rounded-lg p-6 border border-gray-200 text-gray-600 flex items-center space-x-4">
      <svg className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V7a1 1 0 10-2 0v2H7a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
      </svg>
      <span>Collections</span>
    </li>
    <li className="bg-white shadow-md rounded-lg p-6 border border-gray-200 text-gray-600 flex items-center space-x-4">
      <svg className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V7a1 1 0 10-2 0v2H7a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
      </svg>
      <span>Liquor Tax</span>
    </li>
    <li className="bg-white shadow-md rounded-lg p-6 border border-gray-200 text-gray-600 flex items-center space-x-4">
      <svg className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V7a1 1 0 10-2 0v2H7a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
      </svg>
      <span>Payroll Taxes</span>
    </li>
    <li className="bg-white shadow-md rounded-lg p-6 border border-gray-200 text-gray-600 flex items-center space-x-4">
      <svg className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V7a1 1 0 10-2 0v2H7a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
      </svg>
      <span>Prior Period Reporting</span>
    </li>
    <li className="bg-white shadow-md rounded-lg p-6 border border-gray-200 text-gray-600 flex items-center space-x-4">
      <svg className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V7a1 1 0 10-2 0v2H7a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
      </svg>
      <span>Payroll Tax Audit</span>
    </li>
    <li className="bg-white shadow-md rounded-lg p-6 border border-gray-200 text-gray-600 flex items-center space-x-4">
      <svg className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V7a1 1 0 10-2 0v2H7a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
      </svg>
      <span>Unemployment</span>
    </li>
    <li className="bg-white shadow-md rounded-lg p-6 border border-gray-200 text-gray-600 flex items-center space-x-4">
      <svg className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V7a1 1 0 10-2 0v2H7a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
      </svg>
      <span>Workmans Comp</span>
    </li>
    <li className="bg-white shadow-md rounded-lg p-6 border border-gray-200 text-gray-600 flex items-center space-x-4">
      <svg className="h-6 w-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V7a1 1 0 10-2 0v2H7a1 1 0 000 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
      </svg>
      <span>Collections</span>
    </li>
  </ul>
</div>

        {/* <div className="mt-12">
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
        </div> */}
      </section>
      <Footer />
    </>
  );
};

export default TaxProblems;
