"use client"

import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";
import Plus from "@/public/assets/icons/Plus.svg"

const items = [
    {
        question: "What is Taxpert and how does it work?",
        answer: `Businesses must navigate the complexities of corporate tax to ensure compliance and optimize their tax liabilities. Our team of experienced tax consultants at Fiscalya provides comprehensive corporate tax services to help our clients achieve these goals.`,
        points: [
            "Taxpert is an Artificial Intelligence, trained by Fiscalya experts using Constitutional AI to be safe, accurate, and secure the best assistant for you to understand the worldwide Tax & Legal regulations and do your best work.",
            "You can use Taxpert for your own personal use or create a Team account to collaborate with your teammates.",
        ],
    },
    {
        question: "What should I use Taxpert for?.",
        answer: `Taxpert can process large amounts of information that can be used for a variety of tax-related tasks and queries. Here are some key things you can use Taxpert for:`,
        points: [
            "Understanding your tax documents like the 1040 form and getting help with tax filing",
            "Obtaining expert advice on GST (Goods and Services Tax), including the latest updates, registration process, filing procedures, and penalties",
            "Getting assistance with international tax laws, focusing on cross-border tax implications, double taxation avoidance, and tax treaty interpretation",
            "Taxpert leverages artificial intelligence to simplify complex tax matters and provide personalized guidance. It acts as a knowledgeable tax consultant, helping individuals and businesses navigate the intricacies of tax laws and regulations.",
            "By using Taxpert, you can ensure accuracy, compliance, and optimization of your tax strategies, ultimately minimizing your tax liabilities and maximizing potential refunds."
        ],
    },
    {
        question: "How much does it cost to use?",
        answer: `The cost of using our AI bot is based on a straightforward credit system. Each credit corresponds to one question or interaction with the AI assistant. Customers can purchase credit packages that are tailored to their specific needs and usage patterns.`,
        points: [
        "Affordable Credit Packages: Our credit packages start at a very reasonable rate, making the Taxpert bot accessible to users of all sizes, from individuals to small businesses.",
        "Flexible Package Sizes: Customers can choose from a variety of credit package sizes, ranging from a small starter pack to larger bundles that offer even greater value and cost savings.",
        "Transparent Pricing: Each credit is priced competitively, and users can easily track their credit usage and remaining balance within their account Profil. There are no hidden fees or surprise charges.",
        "Exceptional Value: The cost of using Taxpert bot is a small investment compared to the potential time savings, efficiency gains, and enhanced user experience you'll enjoy. Our AI assistant provides exceptional value by delivering expert-level support on-demand.",
        "Access to Tax and Legal Experts: For special requests, such as tax audits or optimization strategies, customers have the option to book a call with our team of tax and legal experts. While this service incurs an additional fee, it provides personalized guidance and support from seasoned professionals."
        ],
    }
    
];


export default function FAQQ() {
    return (
        <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6">
            <div className="lg:w-[44%] lg:py-[32px] lg:pr-[56px]">
                <h3 className="text-[#CB837F] font-poppins text-[17px] font-bold lg:text-base">
                    Frequently asked questions
                </h3>
                <h1 className="py-4 text-3xl font-poppins font-semibold text-[#172026] lg:text-[40px] lg:leading-[58px]">
                    Taxpert is a next generation AI assistant.
 
                </h1>
                <p className="text-zinc-500 font-poppins font-medium pb-[24px]">
                    Built for work and trained to be safe, accurate, secure and comprehensive tax management AI that provides expert guidance and personalized recommendations for optimal tax strategies.

                </p>
            </div>

            <div className="lg:w-2/3 lg:-ml-8">
                <Accordion.Root
                    type="single"
                    defaultValue="item-1"
                    collapsible
                    className="flex flex-col gap-y-4"
                >
                    {items.map((item, index) => (
                        <div key={index}>
                            <Accordion.Item
                                value={`item-${index + 1}`}
                                className="bg-neutral-300 p-[16px] rounded-[8px]"
                            >
                                <Accordion.Header>
                                    <Accordion.Trigger className="flex w-full items-center justify-between">
                                        <p className="text-left font-medium font-poppins text-[#2C3E50] lg:text-[18px]">
                                            {item.question}
                                        </p>
                                        <span>
                                            <Image
                                                src={Plus}
                                                alt="See more"
                                                className="h-10 w-10 lg:w-6 lg:h-6 "
                                            />
                                        </span>
                                    </Accordion.Trigger>
                                </Accordion.Header>

                                <Accordion.Content>
                                    <p className="pt-2 font-poppins text-[#2C3E50]">
                                        {item.answer}
                                    </p>
                                    <ul className="pt-2 list-disc list-inside font-poppins text-[#2C3E50]">
                                        {item.points.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                </Accordion.Content>
                            </Accordion.Item>
                        </div>
                    ))}
                </Accordion.Root>
            </div>
        </div>
    );
}