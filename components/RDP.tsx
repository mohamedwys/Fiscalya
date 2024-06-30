"use client"

import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";
import Plus from "@/public/assets/icons/Plus.svg"

const items = [
    {
        question: "Purpose",
        answer: `F i s c a l y a (the “Company”, “we”, “our”, or “us”) is committed to ensuring the ongoing security and confidentiality of its information systems and customer information. This Responsible Disclosure Policy (this “Policy”) is intended to give security researchers clear guidelines for conducting vulnerability discovery activities and our recommended procedures for reporting potential vulnerabilities to us.
                We recognize and appreciate that security researchers (“you”, “your”, “yours”) regularly contribute to the effort of securing information systems, including ours. Therefore, we appreciate security researchers disclosing to us potential vulnerabilities on our Information Systems (as defined below) that are discovered in good faith in accordance with this Policy.`,
        points: [],
    },
    {
        question: "Scope of Systems",
        answer: `This Policy covers all internet-facing information systems, applications, or websites owned, operated, or controlled by us, including any web or mobile applications hosted on those websites, including the F i s c a l y a domain and related subdomains (collectively, “Information Systems”).
                This Policy also does not cover any information systems, websites, or applications that are owned, operated, or controlled by any third party, including any service provider or contractor to the Company, even where under a F i s c a l y a domain. You should comply with the responsible disclosure efforts for those other systems, websites, and applications.`,
        points: [
        ],
    },
    {
        question: "Scope of Vulnerabilities",
        answer: `This Policy covers technical vulnerabilities that potentially exist on our Information Systems such as misconfigurations, CSRFs or cross site request forgeries, privilege escalation attacks, SQL Injection, XSS, and directory traversal attacks. This Policy excludes the following vulnerabilities, subject to F i s c a l y a’s discretion:`,
        points: [
            "General security, email best practices, or missing best practices in SSL/TLS configurations without a working proof-of-concept,",
            "physical compromise or intrusions,",
            "rate limiting or brute-force issues on non-authenticated endpoints,",
            "compromises involving an insider,",
            "social engineering (including phishing attempts),",
            "reflected file downloads,",
            "account takeovers (including any brute force attacks on accounts that are not yours),",
            "red-teaming, adversarial testing of our models,",
            "content issues with model prompts and responses,",
            "denial of service attacks,",
            "clickjacking on pages with no sensitive actions,",
            "missing HttpOnly or Secure flags on cookies,",
            "dependency hijacking, or",
            "any widely publicized zero-day vulnerabilities that have no patch or have only had a patch available for less than 30 days",
            "We welcome reports concerning safety issues, “jailbreaks,” and similar concerns so that we can enhance the safety and harmlessness of our models. Please report such issues to ceo@fiscalya.com with enough detail for us to replicate the issue."
        ],
    },
    {
        question: "How to Submit a Report",
        answer: `If you discover a security vulnerability in a F i s c a l y a system, please promptly report it. Include a detailed summary and any supporting details (logs, code, proofs of concept) to help us understand, validate, reproduce, and respond to it quickly.`,
        points: [
            "The type and severity of the vulnerability,",
            "Technical details associated with the vulnerability,",
            "Summary of the vulnerability,",
            "The steps to reproduce the vulnerability,",
            "URL / Location of the vulnerability",
            "Proof-of-concept scripts, screenshots, screen recordings, etc.",
            "If applicable, the potential impacts to the Information System",
            "Any recommended remediation actions.",
            "We ask that all reports be well-written, include only one vulnerability per report, and include any plans or intentions for public disclosure. The more detailed and clear the report, the more likely we will be able to investigate and respond effectively."
        ],
    },
    {
        question: "Research Guidelines",
        answer: `While we reserve final and sole discretion for whether you are acting in good faith and in accordance with this Policy, we will generally presume you are acting in good faith if you abide by this Policy for conducting security research and discovering potential vulnerabilities related to the Information Systems and agree to the following:`,
        points: [
            "You are testing Information Systems for the sole purpose of identifying or discovering a potential vulnerability or any associated indicator of a vulnerability and reporting such information to us;",
            "You will avoid causing any harm to the Information Systems, including avoiding any data destruction, use, access, or acquisition; disruption of Information Systems or any customer user experience (including initiating denial of service attacks or using tools that generate substantial amounts of traffic); violation or compromise of the privacy or security of our customers, employees, or other users; or other illegal or harmful activities;",
            "You will avoid exploiting any vulnerability beyond what is minimally required to reasonably prove that such potential vulnerability exists, including avoiding accessing, acquiring, or using data that may be accessible from exploiting the vulnerability;",
            "You will avoid accessing, acquiring, or using the content of any communications, data, or information transmitted or stored on the Information Systems, unless such access is inadvertent;",
            "You will not exfiltrate, download, or otherwise retain any data that you collect. If you inadvertently access any data, you will report such access to us as part of your report;",
            "You will avoid disclosing the existence of or any details relating to the discovered vulnerability to any third party or to the public until you have received prior written approval from us;",
            "You must not perform any attacks that would compromise the security or confidentiality of any account that is not your own;",
            "You must not perform any social engineering attacks (phishing, vishing, etc.) on any F i s c l y a employee, contractor, or representative;",
            "You must not, as a condition of disclosure, require payment or compensation, or otherwise make threats to disclose the vulnerability in an irresponsible manner;",
            "You, at all times, are in compliance with all applicable federal, state, and local laws in connection with your research activities.",
            "If you have any questions about this Policy or whether your research is consistent with these engagement guidelines, please contact ceo@fiscalya.com before proceeding."
        ],
    },
    {
        question: "Your Expectations of Us",
        answer: `All good-faith reports will be taken seriously. Upon promptly and responsibly reporting any potential vulnerability you have discovered, you can expect us to promptly evaluate your findings. If we determine (at our sole discretion) that a vulnerability exists, you can expect us to validate the existence of the vulnerability, to confirm the same with you, and to promptly take appropriate steps to address, mitigate, or remediate the vulnerability to the extent feasible. If you provide your contact information, our representatives may contact you for further information. Additionally, we will:`,
        points: [
        "Protect your name and contact information and will not disclose such information without your consent, unless required by lawful legal process, law or court order;",
        "Refrain from taking legal action as further set forth in the Safe Harbor section below;",
        "With your permission, attribute your name and contribution on any public disclosure we make, to the extent we choose to make a public disclosure;",
        "Acknowledge your submission within three (3) business days;",
        "Make best efforts to keep you updated and promptly complete our investigation and, if applicable, confirm our remediation strategy within an established timeline."
    ],
    },
    {
        question: "Safe Harbor",
        answer: `If you, in our sole determination, make a good faith effort to research and disclose vulnerabilities in accordance with this Policy and the above Research Guidelines, we will not pursue any legal action because of your research or responsible disclosure, subject to F i s c a l y a’s compliance with applicable laws and legal obligations. To qualify for safe harbor, disclosures to us must be unconditional and may not involve extortion or threats.`,
        points: [
        ],
    },
    {
        question: "Changes to this Policy",
        answer: ``,
        points: [
        "We reserve the right to make changes to this Policy at any time by publishing a new policy and amending the date of last update. Vulnerabilities disclosed prior to any update of this Policy will remain subject to the then-current policy in effect.",
        ],
    },
    
];


export default function RDP() {
    return (
        <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6">
            <div className="lg:w-2/3 lg:-ml-15">
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
                                        <p className="text-left font-medium font-poppins text-neutral-500 lg:text-[18px]">
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
                                    <p className="pt-2 font-poppins text-neutral-500">
                                        {item.answer}
                                    </p>
                                    <ul className="pt-2 list-disc list-inside font-poppins text-neutral-500">
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