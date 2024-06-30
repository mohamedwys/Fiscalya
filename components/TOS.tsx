"use client"

import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";
import Plus from "@/public/assets/icons/Plus.svg"

const items = [
    {
        question: "Who we are.",
        answer: `Fiscalya is a company specializes in taxes and legal using the power of AI safety and research working to build reliable, interpretable, and steerable systems. We conduct frontier research, develop and apply a variety of techniques, and deploy the resulting systems via a set of partnerships.`,
        points: [],
    },
    {
        question: "Account creation and access.",
        answer: `Minimum age. You must be at least 18 years old or the minimum age required to consent to use the Services in your location, whichever is higher.`,
        points: [
            "Your F i s c a l y a Account. To access our Services, we may ask you to create an Account. You agree to provide correct, current, and complete Account information and allow us to use it to communicate with you about our Services. Our communications to you using your Account information will satisfy any requirements for legal notices. You may not share your Account login information, F i s c a l y a API key, or Account credentials with anyone else. You also may not make your Account available to anyone else. You are responsible for all activity occurring under your Account, and you agree to notify us immediately if you become aware of any unauthorized access to your Account by sending an email to contact@fiscalya.com. You may close your Account at any time by contacting us at contact@fiscalya.com.",
            "Business Domains. If you use an email address owned by your employer or another organization, your Account may be linked to the organization's F i s c a l y a enterprise account, and the organization’s administrator may be able to monitor and control the Account, including having access to Materials (defined below). We will provide notice to you before linking your Account to an organization's enterprise account. However, if the organization is responsible for notifying you or has already informed you that it may monitor and control your Account, we may not provide additional notice.",
            "Evaluation and Additional Services. In some cases, we may permit you to evaluate our Services for a limited time or with limited functionality. Use of our Services for evaluation purposes are for your personal, non-commercial use only.",
            "You may need to accept additional terms to use certain Services. These additional terms will supplement our Terms for those Services and may change your rights or obligations for those Services, including your obligations to pay fees."
          ],
    },
    {
        question: "Use of our Services.",
        answer: `You may access and use our Services only in compliance with our Terms, our Acceptable Use Policy, and any guidelines or supplemental terms we may post on the Services (the “Permitted Use”). You may not access or use, or help another person to access or use, our Services in the following ways:`,
        points: [
            "In any manner that violates any applicable law or regulation—including, without limitation, any laws about exporting data or software to and from countries.",
            "To develop any products or services that compete with our Services, including to develop or train any artificial intelligence or machine learning algorithms or models.",
            "To decompile, reverse engineer, disassemble, or otherwise reduce our Services to human-readable form, except when these restrictions are prohibited by applicable law.",
            "To crawl, scrape, or otherwise harvest data or information from our Services other than as permitted under these Terms.",
            "To use our Services or Materials to obtain unauthorized access to any system or information, or to deceive any person.",
            "To infringe, misappropriate, or violate intellectual property or other legal rights (including the rights of publicity or privacy).",
            "Except when you are accessing our Services via a F i s c a l y a API Key or where we otherwise explicitly permit it, to access the Services through automated or non-human means, whether through a bot, script, or otherwise.",
            "To engage in any other conduct that restricts or inhibits any person from using or enjoying our Services, or that we reasonably believe exposes us or any of our users, affiliates, or any other third party to any liability, damages, or detriment of any type, including reputational harms.",
            "You also must not abuse, harm, interfere with, or disrupt our Services, including, for example, introducing viruses or malware, spamming or DDoSing Services, or bypassing any of our systems or protective measures.",
        ],
    },
    {
        question: "Prompts, Outputs, and Materials.",
        answer: `You may be allowed to submit text, documents, or other materials to our Services for processing (we call these “Prompts”). Our Services may generate responses based on your Prompts (we call these “Outputs”). Prompts and Outputs collectively are “Materials.”`,
        points: [
            "Rights to Materials. You are responsible for all Prompts you submit to our Services. By submitting Prompts to our Services, you represent and warrant that you have all rights, licenses, and permissions that are necessary for us to process the Prompts under our Terms. You also represent and warrant that your submitting Prompts to us will not violate our Terms, our Acceptable Use Policy, or any laws or regulations applicable to those Prompts. As between you and F i s c a l y a, and to the extent permitted by applicable law, you retain any right, title, and interest that you have in the Prompts you submit. Subject to your compliance with our Terms, we assign to you all of our right, title, and interest if any in Outputs",
            "Comprehensive tax planning and compliance services.",
            "Reliance on Outputs. Artificial intelligence and large language models are frontier technologies that are still improving in accuracy, reliability and safety. When you use our Services, you acknowledge and agree: Outputs may not always be accurate and may contain material inaccuracies even if they appear accurate because of their level of detail or specificity. You should not rely on any Outputs without independently confirming their accuracy. The Services and any Outputs may not reflect correct, current, or complete information. Outputs may contain content that is inconsistent with F i s c a l y a’s views.",
            "Our use of Materials. We may use Materials to provide, maintain, and improve the Services and to develop other products and services. We will not train our models on any Materials that are not publicly available, except in two circumstances: If you provide Feedback to us (through the Services or otherwise) regarding any Materials, we may use that Feedback in accordance with Section 5 (Feedback). If your Materials are flagged for trust and safety review, we may use or analyze those Materials to improve our ability to detect and enforce Acceptable Use Policy violations, including training models for use by our trust and safety team, consistent with Fiscalya’s safety mission.",
        ],
    },
    {
        question: "Feedback",
        answer: `We appreciate feedback, including ideas and suggestions for improvement or rating an Output in response to a Prompt (“Feedback”). If you rate an Output in response to a Prompt—for example, by using the thumbs up/thumbs down icon—we will store the related conversation as part of your Feedback. You have no obligation to give us Feedback, but if you do, you agree that we may use the Feedback however we choose without any obligation or other payment to you.`,
        points: [],
    },
    {
        question: "Subscriptions, fees and payment.",
        answer: `Fees and billing. You may be required to pay us fees to access or use our Services or certain features of our Services. You are responsible for paying any applicable fees listed for the Services.
                If you purchase access to our Services or features of our Services, you must provide complete and accurate billing information (“Payment Method”). You agree that we may charge the Payment Method for any applicable fees listed on our Services and any applicable tax. If the fees for these Services or features are specified to be recurring or based on usage, you agree that we may charge these fees and applicable taxes to the Payment Method on a periodic basis.
                Except as expressly provided in these Terms or where required by law, all payments are non-refundable. Please check your order carefully before confirming it, and see below for additional information about recurring charges for our subscriptions.`,
        points: [
            "Additional fees. We may increase fees for our Services. If we charge additional fees in connection with our Services, we will give you an opportunity to review and accept the additional fees before you are charged. Also, additional fees may apply for additional Services or features of the Services that we may make available. If you do not accept any such additional fees, we may discontinue your access to the Services or features. You agree that we will not be held liable for any errors caused by third-party payment processors used to process fees paid by you to us.",
            "Subscriptions. To access our services we may make available to individuals, you must sign up for a subscription with us (a “Subscription”), first by creating an Account, and then following the subscription procedure on our Services. When you sign up for a Subscription, you agree to these Terms. Subscription content, features, and services. The content, features, and other services provided as part of your Subscription, and the duration of your Subscription, will be described in the order process. We may change the content, features, and other services from time to time, and we do not guarantee that any particular piece of content, feature, or other service will always be available through the Services.",
            "Subscription term and automatic renewal. If you sign up for a paid Subscription, we will automatically charge your Payment Method on each agreed-upon periodic renewal date until you cancel. If your Subscription has a minimum term (the “Initial Term”), we will let you know during the order process. The Initial Term for one month. Your Subscription will last for the Initial Term and will automatically renew, and your Payment Method will be charged, at the end of the Initial Term for an additional term equal in duration to the Initial Term and will continue to renew and incur charges for additional terms equal in duration to the Initial Term (each such additional term, a “Renewal Term”) until you cancel.",
            "Subscription cancellation. You may cancel your Subscription for any reason by using a method we may provide to you through our products. Or by notifying us at contact@fiscalya.com. To avoid renewal and charges for the next Renewal Term, cancel your subscription at least 24 hours before the last day of the Initial Term or any Renewal Term. For example, if you subscribe on January 25th for a Subscription with a one-month Initial Term, you must cancel the Subscription per the instructions by February 23rd (24 hours before February 24th) to avoid renewal and charges for the next Renewal Term. In the event of a cancellation, your fees will not be refunded, but your access to the Services will continue through the end of the Initial Term or any Renewal Term for which you previously paid fees.",
            "Subscription fees. You will pay the fees, either to us or to the App Distributor, for the Initial Term and each subsequent Renewal Term up front, at the start of that Initial Term or Renewal Term, as applicable. We have the right to make changes to the fees applicable to your Subscription from time to time, although we will not make any change to the fees applicable to your Subscription during the current Initial Term or Renewal Term, as applicable. If these changes result in an increase in the fees payable by you, we will inform you at least 30 days in advance of the change. You agree to the increase in fees payable by you unless you cancel the Subscription, as described in the paragraph (Subscription cancellation) immediately above, before the Renewal Term to which the increase in fees will apply."
        ],
    },
    {
        question: "Third-party services and links",
        answer: `Our Services may use or be used in connection with third-party content, services, or integrations. We do not control or accept responsibility for any loss or damage that may arise from your use of any third-party content, services, and integrations, for which we make no representations or warranties. Your use of any third-party content, services, and integrations is at your own risk and subject to any terms, conditions, or policies (including privacy policies) applicable to such third-party content, services, and integrations.`,
        points: [],
    },
    {
        question: "Software",
        answer: `We may offer manual or automatic updates to our software including our apps (“F i s c a l y a Software”), without advance notice to you. F i s c a l y a Software may include open source software. In the event of any conflict between these Terms and any other F i s c a l y a or third-party terms applicable to any portion of F i s c a l y a Software, such as open-source license terms, such other terms will control as to that portion of the F i s c a l y a Software and to the extent of the conflict.`,
        points: [],
    },
    {
        question: "Ownership of the Services",
        answer: `The Services are owned, operated, and provided by us and our affiliates, licensors, distributors, and service providers (collectively “Providers”). We and our Providers retain all of our respective rights, title, and interest, including intellectual property rights, in and to the Services. Other than the rights of access and use expressly granted in our Terms, our Terms do not grant you any right, title, or interest in or to our Services.`,
        points: [],
    },
    {
        question: "Disclaimer of warranties, limitations of liability, and indemnity",
        answer: `Our team works hard to provide great services, and we’re continuously working on improvements. However, there are certain aspects we can’t guarantee. We are using ALL CAPS to explain this, to make sure that you see it.`,
        points: [
        "YOUR USE OF THE SERVICES AND MATERIALS IS SOLELY AT YOUR OWN RISK. THE SERVICES AND OUTPUTS ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS AND, TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, ARE PROVIDED WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY. WE AND OUR PROVIDERS EXPRESSLY DISCLAIM ANY AND ALL WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, TITLE, MERCHANTABILITY, ACCURACY, AVAILABILITY, RELIABILITY, SECURITY, PRIVACY, COMPATIBILITY, NON-INFRINGEMENT, AND ANY WARRANTY IMPLIED BY COURSE OF DEALING, COURSE OF PERFORMANCE, OR TRADE USAGE.",
        "TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, IN NO EVENT WILL WE, OUR PROVIDERS, OR OUR OR THEIR RESPECTIVE AFFILIATES, INVESTORS, DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, SUCCESSORS OR ASSIGNS (COLLECTIVELY, THE “F I S CA L Y A PARTIES”), BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR OTHER DAMAGES ARISING OUT OF OR IN ANY WAY RELATED TO THE SERVICES, THE MATERIALS, OR THESE TERMS, WHETHER BASED IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR OTHER THEORY, EVEN IF ANY F I S CA L Y A PARTIES HAVE BEEN ADVISED OF THE POSSIBILITY OF DAMAGES, AND EVEN IF THE DAMAGES ARE FORESEEABLE.",
        "TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, THE F I S CA L Y A PARTIES’ TOTAL AGGREGATE LIABILITY TO YOU FOR ALL DAMAGES, LOSSES AND CAUSES OF ACTION ARISING OUT OF OR IN ANY WAY RELATED TO THE SERVICES, THE MATERIALS, OR THESE TERMS, WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE, WILL NOT EXCEED THE GREATER OF THE AMOUNT YOU PAID TO US FOR ACCESS TO OR USE OF THE SERVICES (IF ANY) IN THE SIX MONTHS PRECEDING THE DATE SUCH DAMAGES, LOSSES, AND CAUSES OF ACTION FIRST AROSE, AND $300. THE FOREGOING LIMITATIONS ARE ESSENTIAL TO THESE TERMS, AND WE WOULD NOT OFFER THE SERVICES TO YOU UNDER THESE TERMS WITHOUT THESE LIMITATIONS.",
        "YOU AGREE TO INDEMNIFY AND HOLD HARMLESS THE F I S C A L Y A PARTIES FROM AND AGAINST ANY AND ALL LIABILITIES, CLAIMS, DAMAGES, EXPENSES (INCLUDING REASONABLE ATTORNEYS’ FEES AND COSTS), AND OTHER LOSSES ARISING OUT OF OR RELATED TO YOUR BREACH OR ALLEGED BREACH OF THESE TERMS; YOUR ACCESS TO, USE OF, OR ALLEGED USE OF THE SERVICES OR THE MATERIALS; YOUR FEEDBACK; ANY PRODUCTS OR SERVICES THAT YOU DEVELOP, OFFER, OR OTHERWISE MAKE AVAILABLE USING OR OTHERWISE IN CONNECTION WITH THE SERVICES; YOUR VIOLATION OF APPLICABLE LAW OR ANY THIRD-PARTY RIGHT; AND ANY ACTUAL OR ALLEGED FRAUD, INTENTIONAL MISCONDUCT, GROSS NEGLIGENCE, OR CRIMINAL ACTS COMMITTED BY YOU OR YOUR EMPLOYEES OR AGENTS. WE RESERVE THE RIGHT TO ENGAGE SEPARATE COUNSEL AND PARTICIPATE IN OR ASSUME THE EXCLUSIVE DEFENSE AND CONTROL OF ANY MATTER OTHERWISE SUBJECT TO INDEMNIFICATION BY YOU HEREUNDER, IN WHICH CASE YOU AGREE TO COOPERATE WITH US AND SUCH SEPARATE COUNSEL AS WE REASONABLY REQUEST.",
        "THE LAWS OF SOME JURISDICTIONS DO NOT ALLOW THE DISCLAIMER OF IMPLIED WARRANTIES OR CERTAIN TYPES OF DAMAGES, SO SOME OR ALL OF THE DISCLAIMERS AND LIMITATIONS OF LIABILITY IN THESE TERMS MAY NOT APPLY TO YOU. OUR PROVIDERS ARE INTENDED THIRD PARTY BENEFICIARIES OF THE WARRANTY DISCLAIMERS AND LIMITATIONS OF LIABILITY CONTAINED IN THIS SECTION 10."
        ],
    },
    {
        question: "General terms",
        answer: `Changes to the Services. Our Services are novel and will change. We may sometimes add or remove features, increase or decrease capacity limits, offer new Services, or stop offering certain Services. Unless we specifically agree otherwise in a separate agreement with you, we reserve the right to modify, suspend, or discontinue the Services or your access to the Services, in whole or in part, at any time without notice to you. Although we will strive to provide you with reasonable advance notice if we stop offering a Service, there may be urgent situations—such as preventing abuse, responding to legal requirements, or addressing security and operability issues—where providing advance notice is not feasible. We will not be liable for any change to or any suspension or discontinuation of the Services or your access to them.`,
        points: [
        "Changes to these terms. We may revise and update these Terms at our discretion. Some examples of times, we may update these Terms include (1) to reflect changes in our Services, like when we add or remove features or services, or update our pricing, (2) for security or legal reasons, or (3) to promote safety or prevent abuse. If you continue to access the Services after we post the updated Terms on F i s c a l y a’s website or otherwise give you notice of Terms changes, then you agree to the updated Terms. If you do not accept the updated Terms, you must stop using our Services.",
        "Supplemental terms. We may offer Services or features that we believe require service-specific terms or guidelines. When using our Services, you agree to comply with any applicable guidelines, rules, or supplemental terms that may be posted on the Services from time to time (“Supplemental Terms”). If these Terms conflict with Supplemental Terms, the Supplemental Terms will govern for the applicable Service.",
        "Entire agreement. These Terms and any other terms expressly incorporated by reference form the entire agreement between you and us regarding the subject matter of our Terms.",
        "Termination. You may stop accessing the Services at any time. We may suspend or terminate your access to the Services (including any Subscriptions) at any time without notice to you if we believe that you have breached these Terms, or if we must do so in order to comply with law. If we terminate your access to the Services due to a violation of these Terms and you have a Subscription, you will not be entitled to any refund. In addition, if you have a Subscription, we may terminate the Subscription at any time for any other reason. If we exercise this right, we will refund you, on a pro rata basis, the fees you paid for the remaining portion of your Subscription after termination. We may also terminate your Account if you have been inactive for over a year and you do not have a paid Account. If we terminate your Account due to inactivity, we will provide you with notice before doing so. Upon termination of these Terms, a Subscription, or your access to the Services, we may at our option delete any Materials or other data associated with your Account. Sections 6 (with respect to fees outstanding as of such expiration or termination) and 9 – 12 will survive any expiration or termination of our Terms or a Subscription.",
        "Severability. If a particular Term or portion of these Terms is not valid or enforceable, this will have no effect on any other Terms.",
        "No waiver. Any delay or failure on our part to enforce a provision of these Terms is not a waiver of our right to enforce them later.",
        "No assignment. These Terms may not be transferred or assigned by you without our prior written consent, but may be assigned by us without restriction.",
        "Use of our brand. You may not, without our prior written permission, use our name, logos, or other trademarks in connection with products or services other than the Services, or in any other way that implies our affiliation, endorsement, or sponsorship. To seek permission, please email us at contact@fiscalya.com.",
        "Export Controls. You may not export or provide access to the Services into any embargoed countries. Treasury Department’s list of Specially Designated Nationals, (ii) any other restricted party lists identified by the Office of Foreign Asset Control. Department of Commerce Denied Persons List or Entity List, or (iv) any other restricted party lists. You represent and warrant that you and anyone accessing or using the Services on your behalf, or using your Account credentials, are not such persons or entities and are not located in any such country.",
        "Legal Compliance. We may comply with governmental, court, and law enforcement requests or requirements relating to provision or use of the Services, or to information provided to or collected under our Terms. We reserve the right, at our sole discretion, to report information from or about you, including but not limited to Prompts or Outputs, to law enforcement.",
        "Government Use. The Services were developed solely at private expense and are commercial computer software and commercial computer software documentation within the meaning of the applicable Acquisition Regulations and their agency supplements. Accordingly, Government users of the Services will have only those rights that are granted to all other end users of the Services pursuant to these Terms."
        ],
    },
    {
        question: "In case of disputes",
        answer: ``,
        points: [
        "Equitable relief. You agree that (a) no adequate remedy exists at law if you breach Section 3 (Use of Our Services); (b) it would be difficult to determine the damages resulting from such breach, and any such breach would cause irreparable harm; and (c) a grant of injunctive relief provides the best remedy for any such breach. You waive any opposition to such injunctive relief, as well as any demand that we prove actual damage or post a bond or other security in connection with such injunctive relief.",
        "Governing law and exclusive jurisdiction. Our Terms will be governed by, and construed and interpreted in accordance with, the laws of the United Arab Emirates without giving effect to conflict of law principles. You and F i s c a l y a agree that any disputes arising out of or relating to these Terms will be resolved exclusively in the United Arab Emirates or courts located in Dubai, United Arab Emirates, and you and Fiscalya submit to the personal and exclusive jurisdiction of those courts. By accessing our Services, you waive any claims that may arise under the laws of other jurisdictions.",
        
        ],
    },
    
];


export default function TOS() {
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