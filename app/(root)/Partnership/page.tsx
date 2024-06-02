import { auth } from "@clerk/nextjs/server";
import { SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";

const Partnership = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  return (
    <>
    
      <section className="container mx-auto py-12">
        <div className="flex flex-col items-center justify-center gap-6">
          <Image src="/assets/icons/global.svg" alt="Partnership" width={100} height={100} />
          <h2 className="text-2xl font-bold text-zinc-600">Become a Partner</h2>
          <p className="text-gray-600 text-center">
            Join our network of professionals and leverage our platform to provide tailored solutions to clients.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-bold text-zinc-500">Benefits of Partnership</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-[#adb5bd] shadow-md text-center rounded-lg p-6">
              <Image className="inline-block mb-8" src="/assets/icons/world.svg" alt="Reach" width={50} height={50} />
              <h4 className="text-lg font-bold text-gray-800 mt-4">Expanded Reach</h4>
              <p className="text-gray-600 mt-2">
                Gain access to a wider client base and increase your visibility in the market.
              </p>
            </div>
            <div className="bg-[#adb5bd] shadow-md text-center rounded-lg p-6">
              <Image className="inline-block mb-8" src="/assets/icons/collaboration.svg" alt="Collaboration" width={50} height={50} />
              <h4 className="text-lg font-bold text-gray-800 mt-4">Collaborative Environment</h4>
              <p className="text-gray-600 mt-2">
                Collaborate with a network of like-minded professionals to share knowledge and best practices.
              </p>
            </div>
            <div className="bg-[#adb5bd] shadow-md text-center rounded-lg p-6">
              <Image className="inline-block mb-8" src="/assets/icons/support.svg" alt="Support" width={50} height={50} />
              <h4 className="text-lg font-bold text-gray-800 mt-4">Dedicated Support</h4>
              <p className="text-gray-600 mt-2">
                Receive ongoing support and resources to help you succeed in providing services.
              </p>
            </div>
            <div className="bg-[#adb5bd] shadow-md text-center rounded-lg p-6">
              <Image className="inline-block mb-8" src="/assets/icons/growth.svg" alt="Growth" width={50} height={50} />
              <h4 className="text-lg font-bold text-gray-800 mt-4">Professional Growth</h4>
              <p className="text-gray-600 mt-2">
                Enhance your skills and stay up-to-date with the latest regulations and best practices.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-bold text-zinc-500">Partnership Requirements</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-4">
            <li>Possess relevant expertise and professional qualifications</li>
            <li>Commit to providing high-quality services to clients</li>
            <li>Adhere to our ethical standards and code of conduct</li>
            <li>Actively participate in the partnership community</li>
          </ul>
        </div>

        <div className="mt-12 flex justify-center">
          <SignedIn>
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#BCFD4C_0%,#004AAD_50%,#BCFD4C_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#adb5bd] px-6 py-1 text-sm font-bold text-gray-700 backdrop-blur-3xl">
                    Apply Now
                  </span>
                </button>
          </SignedIn>
        </div>
      </section>
    </>
  );
};

export default Partnership;
