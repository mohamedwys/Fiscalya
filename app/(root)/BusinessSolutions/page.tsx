import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LandingNavbar } from "@/components/landing-navbar";
import Footer from "@/components/footer";
import Balancer from "react-wrap-balancer";

const BusinessSolutions =  () => {

  

  return (
    <>
    <LandingNavbar />
      <section className="container mx-auto py-12">
        <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <Balancer>
              <span className="bg-gradient-to-r from-zinc-400 to-zinc-600 bg-clip-text text-transparent">
              Together, We'll Take Care of Your Business
              </span>
            </Balancer>
          </h2>
          <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
            Learn how our services can help you Start, Grow, and Manage your Business.
            </Balancer>
          </h3>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-bold text-center text-zinc-500">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-[#adb5bd] text-center shadow-md rounded-lg p-6">
              <Image className="inline-block mb-8" src="/assets/icons/taxfinance.svg" alt="Understanding" width={50} height={50} />
              <h4 className="text-lg font-bold text-gray-800 mt-4">Tax & Financial Services for Your Business</h4>
              <p className="text-gray-600 mt-2">
                Manage your business tax and financial reports. Keep your business on track and get support for your business all year long with our dedicated services.
              </p>
            </div>
            <div className="bg-[#adb5bd] text-center shadow-md rounded-lg p-6">
              <Image className="inline-block mb-8" src="/assets/icons/valid.svg" alt="Analysis" width={50} height={50} />
              <h4 className="text-lg font-bold text-gray-800 mt-4">Start & Register your Business</h4>
              <p className="text-gray-600 mt-2">
                Take care of the registrations needed to establish your business and learn which tax requirements could affect your business.
              </p>
            </div>
            <div className="bg-[#adb5bd] text-center shadow-md rounded-lg p-6">
              <Image className="inline-block mb-8" src="/assets/icons/file.svg" alt="Recommendations" width={50} height={50} />
              <h4 className="text-lg font-bold text-gray-800 mt-4">File your Business Tax Returns</h4>
              <p className="text-gray-600 mt-2">
                Meet your tax requirements and file all required tax reports for your business. We can prepare and file for any business entity type: Sole Propietorships, Corporations, Partnerships, LLCs, and LLPs.
              </p>
            </div>
            <div className="bg-[#adb5bd] text-center shadow-md rounded-lg p-6">
              <Image className="inline-block mb-8" src="/assets/icons/implementation.svg" alt="Implementation" width={50} height={50} />
              <h4 className="text-lg font-bold text-gray-800 mt-4">Consulting and Expert Advice</h4>
              <p className="text-gray-600 mt-2">
                Do you need tax or business-related advice? We can help you with your questions or project.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-bold text-center text-zinc-500">Post-Call Services</h3>
          <p className="text-gray-600 text-center mt-4">
            After our initial consultation, we'll provide you with a detailed report outlining our recommendations and a roadmap for implementation. Our team will be available for ongoing support and guidance to ensure the success of your personalized tax strategy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-[#adb5bd] text-center shadow-md rounded-lg p-6">
              <Image className="inline-block mb-8" src="/assets/icons/knowledge.svg" alt="Tax Advisory" width={50} height={50} />
              <h4 className="text-lg text-center font-bold text-gray-800 mt-4">Tax Advisory</h4>
              <p className="text-gray-600 mt-2">
                Provide expert tax advisory services to clients, leveraging our knowledge and resources.
              </p>
            </div>
            <div className="bg-[#adb5bd] text-center shadow-md rounded-lg p-6">
              <Image className="inline-block mb-8" src="/assets/icons/Compliance.svg" alt="Tax Compliance" width={50} height={50} />
              <h4 className="text-lg font-bold text-gray-800 mt-4">Tax Compliance</h4>
              <p className="text-gray-600 mt-2">
                Assist clients in meeting their tax compliance obligations with our comprehensive services.
              </p>
            </div>
            <div className="bg-[#adb5bd] text-center shadow-md rounded-lg p-6">
              <Image className="inline-block mb-8" src="/assets/icons/planning.svg" alt="Tax Planning" width={50} height={50} />
              <h4 className="text-lg font-bold text-gray-800 mt-4">Tax Planning</h4>
              <p className="text-gray-600 mt-2">
                Develop and implement strategic tax planning solutions to minimize clients' tax liabilities.
              </p>
            </div>
            <div className="bg-[#adb5bd] text-center shadow-md rounded-lg p-6">
              <Image className="inline-block mb-8" src="/assets/icons/audit.svg" alt="Tax Audit" width={50} height={50} />
              <h4 className="text-lg font-bold text-gray-800 mt-4">Tax Audit</h4>
              <p className="text-gray-600 mt-2">
                Provide expert assistance and representation during tax audits to protect clients' interests.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-zinc-400 p-6 rounded-md">
          <h3 className="text-xl font-bold text-white text-center">How can we help? We're glad to answer all of your questions.</h3>
          <form className="mt-6 flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="bg-gray-100 px-4 py-2 rounded-md flex-1"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-gray-100 px-4 py-2 rounded-md flex-1"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="tel"
                placeholder="Phone"
                className="bg-gray-100 px-4 py-2 rounded-md flex-1"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-100 px-4 py-2 rounded-md flex-1"
              />
            </div>
            <textarea
              placeholder="What can we help you with?"
              rows={4}
              className="bg-gray-100 px-4 py-2 rounded-md"
            ></textarea>
            <Button type="submit" variant="secondary" className="collection-btn">
              Submit
            </Button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BusinessSolutions;

