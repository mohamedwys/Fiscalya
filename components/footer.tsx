import Image from "next/image"
import Link from "next/link"

      
export default function Footer() {
    return (
        <footer className='bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
            
            <div className='md:flex md:justify-center md:gap-24 grid grid-cols-2 mx-auto'>
                <div className='px-4 mt-4 mb-2'>
                    <h1 className='font-semibold text-base text-zinc-500'>Resources.</h1>
                    <ul className='list-none text-zinc-500'>
                        <li className='mb-3'>
                            <Link className='hover:text-zinc-500 duration-500  text-sm' href={"/AboutUs"}>About Us</Link>
                        </li>
                        <li className='mb-3'>
                            <Link className='hover:text-zinc-500 duration-500  text-sm' href={"/BusinessSolutions"}>Business Solutions</Link>
                        </li>
                        <li className='mb-3'>
                            <Link className='hover:text-zinc-500 duration-500  text-sm' href={"/TaxProblems"}>Tax Problems</Link>
                        </li>
                        <li className='mb-3'>
                            <Link className='hover:text-zinc-500 duration-500  text-sm' href={"#"}>Docs</Link>
                        </li>
                    </ul>
                </div>
                <div className='px-4 mt-4'>
                    <h1 className='font-semibold text-base text-zinc-500 mb-2'>More.</h1>
                    <ul className='text-zinc-500'>
                        <li className='hover:text-zinc-500 duration-560 text-sm mb-3'>
                            <a href={"/TermsOfService"} target='_blank'>
                                Terms of Service
                            </a>
                        </li>
                        <li className='hover:text-zinc-500 duration-560 text-sm mb-3'>
                            <a href={"/PrivacyPolicy"} target='_blank'>
                                Privacy Policy
                            </a>
                        </li>
                        <li className='hover:text-zinc-500 duration-500 text-sm mb-3'>
                            <a href={"/ResponsibleDisclosurePolicy"} className='cursor-pointer' target='_blank'>
                                Responsible Disclosure Policy
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='px-4 mt-4'>
                    <h1 className='font-semibold text-base text-zinc-500'>Contacts.</h1>
                    <ul className='list-none'>
                        <li className='text-sm text-zinc-500'>
                            <p>+ 62-831-0630-7593</p>
                        </li>
                        <li className='text-sm text-zinc-500'>
                            <p className='break-words'>contact@fiscalya.com</p>
                        </li>
                    </ul>
                </div>
                <div className='px-4 mt-4'>
                    <h1 className='font-semibold text-base text-zinc-500'>Socials.</h1>
                    <div className='mt-2'>
                        <div className='flex gap-4 items-center'>
                            <a href="https://www.instagram.com/" className='cursor-pointer bg-transparent' target='_blank'>
                                <Image src="/assets/icons/instagram.svg" alt="instagram"  width={70} height={70} />
                            </a> 
                            <a href="https://linkedin.com/" className='cursor-pointer' target='_blank'>
                                <Image src="/assets/icons/linkedin.svg" alt="x (tweeter)"  width={70} height={70} />
                            </a> 
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}