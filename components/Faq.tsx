"use client"

import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";
import Plus from "@/public/assets/icons/Plus.svg"

const items = [
    {
        question: "Advisor PRO BOT Services 24/7",
        answer: `Taxable corporations and individuals in the UAE must outsource accredited tax services to remain compliant with the Federal Tax Authority's regulations and standards, and to avoid penalties for tax delays or non-compliance. Our dedicated tax BOT is trained to strategize and implement customized tax solutions that are tailored to meet our clients' specific needs. We offer expert consultant services, and our team will be glad to assist you.`,
        points: [
            "24/7 availability for all tax-related queries.",
            "Customized tax solutions for unique business needs.",
            "Accredited and compliant with Federal Tax Authority standards.",
            "Expert consultants ready to assist at any time.",
            "Avoidance of penalties through timely compliance."
        ],
    },
    {
        question: "Tax (VAT) Services.",
        answer: `Fiscalya offers comprehensive VAT services, including VAT filing assistance, VAT deduction assessment, VAT group implementation strategies, VAT refund assistance, VAT optimization for financial sectors, and pro-rata application. Our certified tax agents streamline VAT strategies to suit various business frameworks. We also provide VAT adjustments for capital goods, transfer of business assistance, VAT deductibility for intra-group services, and tax due diligence enforcement, ensuring optimal VAT compliance for our clients.`,
        points: [
            "Assistance with VAT filing and compliance.",
            "Optimization strategies for VAT in financial sectors.",
            "Expertise in VAT group implementation and management.",
            "Support for VAT refunds and deductions.",
            "Comprehensive VAT adjustments for various business scenarios."
        ],
    },
    {
        question: "Excise Tax Services.",
        answer: `Excise tax is a type of indirect tax that is levied on specific goods that are typically harmful to human health or the environment. Businesses that import, store, or produce excise goods from a designated zone must register for excise tax. At Fiscalya, we provide effective solutions for our clients to register and file excise tax in compliance with the Federal Tax Authority's regulations and standards.`,
        points: [
            "Expert assistance with excise tax registration and filing.",
            "Compliance with Federal Tax Authority regulations.",
            "Solutions tailored for businesses dealing with excise goods.",
            "Guidance on minimizing excise tax liabilities.",
            "Support for excise tax audits and compliance checks."
        ],
    },
    {
        question: "Individual Tax Services.",
        answer: `At Fiscalya, we provide comprehensive individual tax services to ensure that our clients are fully compliant with the tax regulations. Our team of experienced professionals offers a range of services tailored to meet the unique needs of high-net-worth individuals and individuals with complex tax situations.`,
        points: [
            "Personalized tax strategies for high-net-worth individuals.",
            "Comprehensive tax planning and compliance services.",
            "Expert advice on complex tax situations.",
            "Assistance with tax filings and documentation.",
            "Strategies to minimize personal tax liabilities."
        ],
    },
    {
        question: "Corporate Tax Services.",
        answer: `Businesses must navigate the complexities of corporate tax to ensure compliance and optimize their tax liabilities. Our team of experienced tax consultants at Fiscalya provides comprehensive corporate tax services to help our clients achieve these goals.`,
        points: [
            "Detailed corporate tax planning and strategy.",
            "Compliance with corporate tax regulations.",
            "Optimization of corporate tax liabilities.",
            "Assistance with corporate tax filings.",
            "Expert guidance on corporate tax audits."
        ],
    },
    {
        question: "Tax Compliance Services.",
        answer: `Maintaining tax compliance is crucial for businesses and individuals to avoid penalties and ensure accurate tax declarations. At Fiscalya, we offer efficient tax compliance services to help our clients navigate the complexities of tax regulations and maximize refunds where applicable.`,
        points: [
            "Comprehensive tax compliance solutions.",
            "Avoidance of penalties through timely filings.",
            "Accurate tax declarations and documentation.",
            "Strategies to maximize tax refunds.",
            "Ongoing support for compliance-related queries."
        ],
    },
    {
        question: "Transfer Pricing Services.",
        answer: `In today's global business environment, transfer pricing has become a critical aspect of corporate tax planning and compliance. At Fiscalya, we offer comprehensive transfer pricing services to help our clients navigate the complexities of this specialized field and ensure they remain compliant with the relevant regulations.`,
        points: [
        "Compliance: Prepare necessary documentation and ensure adherence to UAE regulations. Represent clients in audits and disputes.",
        "Improve transfer pricing policies, develop strategies to minimize tax, and advise on appropriate methods.",
        "Conduct arm's-length pricing studies, perform benchmarking, and prepare reports.",
        "Represent clients in disputes, prepare position papers, and negotiate with tax authorities.",
        "Provide updates on regulations, offer strategic tax advice, and collaborate with in-house tax teams."
        ],
    }
    
];


export default function FAQ() {
    return (
        <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6">
            <div className="lg:w-[44%] lg:py-[32px] lg:pr-[56px]">
                <h3 className="text-[#457b9d] font-poppins text-[17px] font-bold lg:text-base">
                    Embracing Tax Efficiency
                </h3>
                <h1 className="py-4 text-3xl font-poppins font-semibold text-[#172026] lg:text-[40px] lg:leading-[58px]">
                    Leveraging the Unique Characteristics of Taxation 
                </h1>
                <p className="text-zinc-500 font-poppins font-medium pb-[24px]">
                At Fiscalya, we have a team of experienced tax professionals who are well-versed in the UAE’s excise tax laws and regulations. We provide tailored solutions to meet the specific needs of our clients, ensuring that they are fully compliant with the tax authorities. Our services are designed to help businesses minimize their tax liabilities and maximize their profitability.

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
                                className="bg-[#6E6E6E] p-[16px] rounded-[8px]"
                            >
                                <Accordion.Header>
                                    <Accordion.Trigger className="flex w-full items-center justify-between">
                                        <p className="text-left font-medium font-poppins text-neutral-200 lg:text-[18px]">
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
                                    <p className="pt-2 font-poppins text-neutral-200">
                                        {item.answer}
                                    </p>
                                    <ul className="pt-2 list-disc list-inside font-poppins text-neutral-200">
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