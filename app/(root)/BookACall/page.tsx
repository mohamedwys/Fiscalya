import { auth } from "@clerk/nextjs/server";
import { SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";


import { Button } from "@/components/ui/button";

const BookACall = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  return (
    <>
      <section className="container mx-auto py-12">
        <div className="flex flex-col items-center justify-center gap-6">
          <Image src="/assets/icons/call.svg" alt="Call" width={100} height={100} />
          <h2 className="h2-bold text-zinc-500">Tailored Tax Expertise</h2>
          <p className="text-gray-500 text-center">
            Book a call with our tax professionals to optimize your financial strategy and minimize tax liabilities.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-bold text-center text-zinc-500">Our Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-[#adb5bd] text-center shadow-md rounded-lg p-6">
              <Image className="inline-block mb-8" src="/assets/icons/understanding.svg" alt="Understanding" width={50} height={50} />
              <h4 className="text-lg font-bold text-zinc-600 mt-4">Understanding Your Needs</h4>
              <p className="text-zinc-600 mt-2">
              we’ll take the time to understand your unique financial situation and goals.
              </p>
            </div>
            <div className="bg-[#adb5bd] text-center shadow-md rounded-lg p-6">
              <Image className="inline-block mb-8" src="/assets/icons/analysis.svg" alt="Analysis" width={50} height={50} />
              <h4 className="text-lg font-bold text-zinc-600 mt-4">Comprehensive Analysis</h4>
              <p className="text-zinc-600 mt-2">
                Our experts will analyze your current tax strategy and identify optimization opportunities.
              </p>
            </div>
            <div className="bg-[#adb5bd] text-center shadow-md rounded-lg p-6">
              <Image className="inline-block mb-8" src="/assets/icons/recommendations.svg" alt="Recommendations" width={50} height={50} />
              <h4 className="text-lg font-bold text-zinc-600 mt-4">Personalized Recommendations</h4>
              <p className="text-zinc-600 mt-2">
              we’ll provide tailored recommendations to maximize your tax efficiency.
              </p>
            </div>
            <div className="bg-[#adb5bd] text-center shadow-md rounded-lg p-6">
              <Image className="inline-block mb-8" src="/assets/icons/implementation.svg" alt="Implementation" width={50} height={50} />
              <h4 className="text-lg font-bold text-zinc-600 mt-4">Guided Implementation</h4>
              <p className="text-zinc-600 mt-2">
                Our team will guide you through the implementation of our suggested strategies.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
        
          <h3 className="text-xl font-bold text-center text-zinc-600">Post-Call Services</h3>
          <p className="text-gray-600 text-center mt-4">
            After our initial consultation, we’ll provide you with a detailed report outlining our recommendations and a roadmap for implementation. Our team will be available for ongoing support and guidance to ensure the success of your personalized tax strategy.
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
                Develop and implement strategic tax planning solutions to minimize clients tax liabilities.
              </p>
            </div>
            <div className="bg-[#adb5bd] text-center shadow-md rounded-lg p-6">
              <Image className="inline-block mb-8" src="/assets/icons/audit.svg" alt="Tax Audit" width={50} height={50} />
              <h4 className="text-lg font-bold text-gray-800 mt-4">Tax Audit</h4>
              <p className="text-gray-600 mt-2">
                Provide expert assistance and representation during tax audits to protect clients interests.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <SignedIn>
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#BCFD4C_0%,#004AAD_50%,#BCFD4C_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#adb5bd] px-6 py-1 text-sm font-bold text-gray-700 backdrop-blur-3xl">
                    Book A Call
                  </span>
                </button>
          </SignedIn>
        </div>
      </section>
    </>
  );
};

export default BookACall;
