import { Chat } from "@/components/chatComponent";

export const runtime = 'edge';

export default function Page() {
  return <Chat />;
}

// import { auth } from "@clerk/nextjs/server";
// import { SignedIn } from "@clerk/nextjs";
// import Image from "next/image";
// import { redirect } from "next/navigation";
// import { Button } from "@/components/ui/button";

// import ChatComponent from "@/components/chatComponent";

// const Chat = async () => {
//   const { userId } = auth();

//   if (!userId) redirect("/sign-in");

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24" >
//       <div className="bg-zinc-400 p-3 w-[1000] rounded-md text-zinc-600">
//         <h2 className="text-2xl font-bold text-gray-800">How Can we light You</h2>
//         <ChatComponent />
//       </div>
//     </main>
    // <>
    //   <section className="container mx-auto py-12">
    //     <div className="flex flex-col items-center justify-center gap-6">
    //       <Image src="/assets/icons/chatbot.svg" alt="Chatbot" width={100} height={100} />
    //       
    //       <p className="text-gray-600 text-center">
    //         Learn how to effectively interact with our chatbot to receive accurate and tailored tax advice.
    //       </p>
    //     </div>

    //     <div className="mt-12">
    //       <h3 className="text-xl font-bold text-gray-800">Steps for Quality Information</h3>
    //       <ol className="list-decimal pl-6 space-y-2 text-gray-600 mt-4">
    //         <li>
    //           <strong>Provide Context:</strong> Begin by giving the chatbot a clear understanding of your tax situation, including your profession, income sources, and any relevant life events.
    //         </li>
    //         <li>
    //           <strong>Specify Countries:</strong> Clearly state the countries where you have tax obligations or residency. This will help the chatbot tailor its advice to your specific tax jurisdictions.
    //         </li>
    //         <li>
    //           <strong>Share Financial Details:</strong> When prompted, provide accurate information about your income, assets, and expenses. This data is crucial for the chatbot to analyze your tax situation and suggest optimization strategies.
    //         </li>
    //         <li>
    //           <strong>Ask Specific Questions:</strong> Use keywords related to your tax concerns, such as deductions, credits, or tax planning, to receive more targeted and relevant responses from the chatbot.
    //         </li>
    //         <li>
    //           <strong>Follow Prompts:</strong> Carefully follow the chatbot's prompts and provide all requested details. This will ensure that the chatbot has a comprehensive understanding of your situation and can provide thorough advice.
    //         </li>
    //         <li>
    //           <strong>Review and Confirm:</strong> Before accepting any recommendations, review the information you provided and confirm its accuracy. This step helps minimize the risk of errors in the chatbot's advice.
    //         </li>
    //       </ol>
    //     </div>

    //     <div className="mt-12">
    //       <h3 className="text-xl font-bold text-gray-800">Warning: Sensitive Information</h3>
    //       <p className="text-gray-600 mt-4">
    //         Please avoid sharing sensitive personal or financial information with the chatbot. Our chatbot is designed to provide general guidance and should not be used for confidential data.
    //       </p>
    //     </div>

    //     <div className="mt-12 flex justify-center">
    //       <SignedIn>
    //         <Button variant="secondary" className="px-6 py-3">
    //           <a href="/chatbot">Start Chatting</a>
    //         </Button>
    //       </SignedIn>
    //     </div>
    //   </section>
    // </>
//   );
// };

// export default Chat;