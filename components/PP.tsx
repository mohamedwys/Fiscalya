"use client"

import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";
import Plus from "@/public/assets/icons/Plus.svg"

const items = [
    {
        question: "Personal data you provide to us directly",
        answer: ``,
        points: [
            "Identity and Contact Data: F i s c a l y a collects identifiers, such as your name, email address, and phone number when you sign up for an F i s c a l y a account, or to receive information on our Services. We may also collect or generate indirect identifiers (e.g., “USER12345”).",
            "Payment Information: We may collect your payment information if you choose to purchase access to F i s c a l y a’s products and services.",
            "Inputs and Outputs: Our AI services allow you to prompt the Services in a variety of media including but not limited to the format of text, files and documents, photos and images, and other materials along with the metadata and other information contained therein (“Prompts” or “Inputs”), which generate responses (“Outputs” or “Completions”) based on your Inputs. If you include personal data in your Inputs, we will collect that information and this information may be reproduced in your Outputs.",
            "Feedback on your use of our Services: We appreciate feedback, including ideas and suggestions for improvement or rating an Output in response to an Input ('Feedback'). If you rate an Output in response to an Input—for example, by using the thumbs up/thumbs down icon—we will store the related conversation as part of your Feedback.",
            "Communication Information: If you communicate with us, including via our social media accounts, we collect your name, contact information, and the contents of any messages you send."
        ],
    },
    {
        question: "Personal data we receive automatically from your use of the Services",
        answer: `When you use the Services, we also receive certain technical data automatically (described below, collectively “Technical Information”). This includes:`,
        points: [
            "Device and Connection Information. Consistent with your device or browser permissions, your device or browser automatically sends us information about when and how you install, access, or use our Services. This includes information such as your device type, operating system information, browser information and web page referers, mobile network, connection information, mobile operator or internet service provider (ISP), time zone setting, IP address (including information about the location of the device derived from your IP address), identifiers (including device or advertising identifiers, probabilistic identifiers, and other unique personal or online identifiers).",
            "Usage Information. We collect information about your use of the Services, such as the dates and times of access, browsing history, search, information about the links you click, pages you view, and other information about how you use the Services, and technology on the devices you use to access the Services.",
            "Log and Troubleshooting Information. We collect information about how our Services are performing when you use them. This information includes log files. If you or your device experiences an error, we may collect information about the error, the time the error occurred, the feature being used, the state of the application when the error occurred, and any communications or content provided at the time the error occurred.",
            "Cookies & Similar Technologies. We and our service providers use cookies, scripts, or similar technologies (“Cookies”) to manage the Services and to collect information about you and your use of the Services. These technologies help us to recognize you, customize or personalize your experience, market additional products or services to you, and analyze the use of our Services to make them safer and more useful to you. For more details about how we use these technologies, and your opt-out controls and other options."
          ],
    },
    {
        question: "Personal data we collect or receive to train our models",
        answer: `F i s c a l y a obtains personal data from third party sources in order to train our models. Specifically, we train our models using data from three sources:`,
        points: [
            "Publicly available information via the Internet.",
            "Datasets that we license from third party businesses.",
            "Data that our users or crowd workers provide.",
            "We take steps to minimize the privacy impact on individuals through the training process.",
        ],
    },
    {
        question: "Uses of Personal Data Permitted Under Applicable Data Protection Laws",
        answer: `We will only use your personal data in accordance with applicable laws. We rely on the following grounds where permitted under and in accordance with data protection laws, such as in the UAE (our “Legal Bases”):”`,
        points: [
            "Where we need it to perform a contract with you. For example, we process Identity and Contact Data, Inputs, Outputs and Payment Information in order to provide Services to you. In circumstances where we do not have a contract with you, such as where you are an end user of our Commercial Services, we instead rely on our legitimate interests.",
            "Where it is necessary for our legitimate interests (or those of a third party) and your interests and rights do not override our interests. Our legitimate interests include: 1 Providing, maintaining and improving our products and services. 2 Research and development, including developing new products and features. 3 Marketing our products and services. 4 Detecting, preventing and enforcing violations of our terms including misuse of services, fraud, abuse, and other trust and safety protocols and 4 Protecting our rights and the rights of others.",
            "Where you have given us your consent. You have the right to withdraw your consent at any time.",
            "Where we need to comply with our legal obligations.",
            "We will not use your Inputs or Outputs to train our models, unless: (1) your conversations are flagged for Trust & Safety review (in which case we may use or analyze them to improve our ability to detect and enforce our Usage Policy, including training models for use by our Trust and Safety team, consistent with F i s c a l y a’s safety mission), or (2) you’ve explicitly reported the materials to us (for example via our feedback mechanisms), or (3) you've otherwise explicitly opted in to the use of your Inputs and Outputs for training purposes.",
        ],
    },
    {
        question: "How We Disclose Personal Data",
        answer: `F i s c a l y a will disclose personal data to the following categories of third parties for the purposes explained in this Policy: Affiliates & corporate partners. F i s c a l y a discloses the categories of personal data described above between and among its affiliates and related entities. Service providers & business partners. F i s c a l y a may disclose the categories of personal data described above with service providers and business partners for a variety of business purposes, including website and data hosting, ensuring compliance with industry standards, research, auditing, and data processing.`,
        points: [
            " F i s c a l y a may also disclose personal data in the following circumstances:",
            "As part of a significant corporate event. If F i s c a l y a is involved in a merger, corporate transaction, bankruptcy, or other situation involving the transfer of business assets, F i s c a l y a will disclose your personal data as part of these corporate transactions.",
            "Third-Party Websites and Services: Our Services may involve integrations with, or may direct you to, websites, apps, and services managed by third parties. By interacting with these third parties, you are providing information directly to the third party and not F i s c a l y a and subject to the third party’s privacy policy. If you access third-party services, such as social media sites or other sites linked through the Services (e.g., if you follow a link to our Twitter account), these third-party services will be able to collect personal data about you, including information about your activity on the Services. If we link to a site or service via our Services, you should read their data usage policies or other documentation. Our linking to another site or service doesn’t mean we endorse it or speak for that third party.",
            "Pursuant to regulatory or legal requirements, safety, rights of others, and to enforce our rights or our terms. We may disclose personal data to governmental regulatory authorities as required by law, including for legal, tax or accounting purposes, in response to their requests for such information or to assist in investigations. We may also disclose personal data to third parties in connection with claims, disputes or litigation, when otherwise permitted or required by law, or if we determine its disclosure is necessary to protect the health and safety of you or any other person, to protect against fraud or credit risk, to enforce our legal rights or the legal rights of others, to enforce contractual commitments that you have made, or as otherwise permitted or required by applicable law.",
            "With an individual's consent. Anthropic will otherwise disclose personal data when an individual gives us permission or directs us to disclose this information.",
        ],
    },
    {
        question: "Rights and Choices",
        answer: `Subject to applicable law and depending on where you reside, you may have some rights regarding your personal data, as described further below. We make efforts to respond to such requests. However, please be aware that these rights are limited, and that the process by which we may need to action your requests regarding our training dataset are complex. F i s c a l y a will not discriminate based on the exercising of privacy rights you may have.
                To exercise your rights, you or an authorized agent may submit a request by emailing us at ceo@fiscalya.com. After we receive your request, we may verify it by requesting information sufficient to confirm your identity. You may also have the right to appeal requests that we deny by emailing ceo@fiscalya.com.`,
        points: [
            "Right to know. You may have the right to know what personal data F i s c a l y a processes about you, including the categories of personal data, the categories of sources from which it is collected, the business or commercial purposes for collection, and the categories of third parties to whom we disclose it.",
            "Access & data portability. You may have the right to request a copy of the personal data F i s c a l y a processes about you, subject to certain exceptions and conditions. In certain cases and subject to applicable law, you have the right to port your information.",
            "Deletion. You may have the right to request that we delete personal data collected from you when you use our Services, subject to certain exceptions. You also are able to delete individual conversations, which will be removed immediately from your conversation history and automatically deleted from our back-end within 30 days. Learn more here.",
            "Correction. You may have the right to request that we correct inaccurate personal data F i s c a l y a retains about you, subject to certain exceptions. Please note that we cannot guarantee the factual accuracy of Outputs. If Outputs contain factually inaccurate personal data relating to you, you can submit a correction request and we will make a reasonable effort to correct this information—but due to the technical complexity of our large language models, it may not always be possible for us to do so.",
            "Objection. You may have a right to object to processing of your personal data, including profiling conducted on grounds of public or legitimate interest. In places where such a right applies, we will no longer process the personal data in case of such objection unless we demonstrate compelling legitimate grounds for the processing which override your interests, rights, and freedoms, or for the establishment, exercise or defense of legal claims. If we use your information for direct marketing, you can object and opt out of future direct marketing messages using the unsubscribe link in such communications.",
            "Restriction. You have the right to restrict our processing of your personal data in certain circumstances.",
            "Withdrawal of consent. Where F i s c a l y a’s processing of your personal data is based on consent, you have the right to withdraw your consent. The withdrawal of consent will not affect the lawfulness of processing based on consent before its withdrawal.",
            "Automated decision-making: F i s c a l y a does not engage in decision making based solely on automated processing or profiling in a manner which produces a legal effect (i.e., impacts your legal rights) or significantly affects you in a similar way (e.g., significantly affects your financial circumstances or ability to access essential goods or services).",
            "Sale & targeted F i s c a l y a marketing of its products and services. F i s c a l y a does not “sell” your personal data as that term is defined by applicable laws and regulations. If we share your personal data for targeted advertising to promote our products and services in the future, you can opt-out and we will honor global privacy controls. To learn more, click here."
        ],
    },
    {
        question: "Data Transfers",
        answer: `When you access our website or Services, your personal data may be transferred to our servers in the UAE.`,
        points: [],
    },
    {
        question: "Data Retention and Data Lifecycle",
        answer: `F i s c a l y a retains your personal data for as long as reasonably necessary for the purposes and criteria outlined in this Privacy Policy. When the personal data collected is no longer required by us, we and our service providers will perform the necessary procedures for destroying, deleting, erasing, or converting it into an anonymous form as permitted or required under applicable laws.`,
        points: [
            "Aggregated or De-Identified Information. We may process personal data in an aggregated or de-identified form to analyze the effectiveness of our Services, conduct research, study user behavior, and train our AI models as permitted under applicable laws. For instance:",
            "When you submit Feedback and provide us permission, we disassociate Inputs and Outputs from your user ID to use them for training and improving our models.",
            "If our systems flag Inputs or Outputs for potentially violating our Usage Policy, we disassociate the content from your user ID to train our trust and safety classification models and internal generative models. However, we may re-identify the materials to enforce our Usage Policy with the responsible user if necessary.",
            "To improve user experience, we may analyze and aggregate general user behavior and usage data. This information does not identify individual users.",

        ],
    },
    {
        question: "Children",
        answer: `Our Services are not directed towards, and we do not knowingly collect, use, disclose, sell, or share any information about, children under the age of 18. If you become aware that a child under the age of 18 has provided any personal data to us while using our Services, please email us at contact@fiscalya.com and we will investigate the matter and, if appropriate, delete the personal data.`,
        points: [],
    },
    {
        question: "Supplemental Disclosures for Residents of Canada",
        answer: `These supplemental disclosures contain additional information relevant to residents of Canada. This content should be read in conjunction with the rest of our Privacy Policy. In case of conflict between our Privacy Policy and these supplemental disclosures, the supplemental disclosures shall prevail in relation to residents of Canada.`,
        points: [
        "Consent. By expressly consenting to this Privacy Policy, you confirm you have read, understand, and consent to the collection, use, processing, and disclosure of your personal data in accordance with this Privacy Policy and understand that, in jurisdictions where it is available, F i s c a l y a also relies on other lawful bases for the foregoing as more fully set out in this policy. We will only collect, use and disclose your personal data with your consent, unless otherwise permitted or required by law. Your consent may be given expressly or implied, depending on the circumstances and the sensitivity of the information involved. You may withdraw consent at any time, subject to legal or contractual restrictions and reasonable notice.",
        "Cross-jurisdictional Transfers. By providing us with personal data, you acknowledge and agree that your personal data may be transferred or disclosed to other jurisdictions for processing and storage outside of Canada, to the United Arab Emirates, where laws regarding the protection of personal data may be less stringent than the laws in your jurisdiction. Furthermore, we may disclose your personal data in this jurisdictions in response to legal processes or where we believe in good faith that disclosure is required or permitted by law.",
        "Contact. If you have any questions or comments about our processing of your personal data, or to exercise your rights as outlined in Section 4. (“Rights and Choices”), please contact us at ceo@fiscalya.com.",
        ],
    },
    {
        question: "Changes to Our Privacy Policy",
        answer: `F i s c a l y a may update this Privacy Policy from time to time. We will notify you of any material changes to this Privacy Policy, as appropriate, and update the Effective Date`,
        points: [],
    },
    {
        question: "Contact Information",
        answer: `The data controller responsible for your personal data is F i s c a l y a UAE . If you have any questions about this Privacy Policy, or have any questions, complaints or requests regarding your personal data, you can contact us as described below:`,
        points: [
        "F i s c a l y a with a registered address at Camelia 1, Arabian Ranches 2, Dubai, United Arab Emirates",
        "You can email us at contact@fiscalya.com and contact our Data Protection Officer at ceo@fiscalya.com.",
        
        ],
    },
    
];


export default function PP() {
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