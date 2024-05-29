import Image from "next/image"
import Link from "next/link"

      
export default function Footer() {
    return (
        <footer className='bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
            
            <div className='md:flex md:justify-center md:gap-24 grid grid-cols-2 mx-auto'>
                <div className='px-4 mt-4 mb-2'>
                    <div className=' mt-1'>
                        <h1 className='text-base text-neutral-200 font-black'>NexT-Component.</h1>
                    </div>
                    <div className=' mt-1'>
                        <p className='text-neutral-200-sm '>©Alfath Izha Barikallah</p>
                    </div>
                </div>
                <div className='px-4 mt-4 mb-2'>
                    <h1 className='font-semibold text-base text-neutral-200'>Resources.</h1>
                    <ul className='list-none text-neutral-200'>
                        <li className='mb-3'>
                            <Link className='hover:text-neutral-200 duration-500  text-sm' href={"/about"}>About</Link>
                        </li>
                        <li className='mb-3'>
                            <Link className='hover:text-neutral-200 duration-500  text-sm' href={"#"}>Guide</Link>
                        </li>
                        <li className='mb-3'>
                            <Link className='hover:text-neutral-200 duration-500  text-sm' href={"#"}>Design</Link>
                        </li>
                        <li className='mb-3'>
                            <Link className='hover:text-neutral-200 duration-500  text-sm' href={"#"}>Docs</Link>
                        </li>
                    </ul>
                </div>
                <div className='px-4 mt-4'>
                    <h1 className='font-semibold text-base text-neutral-200 mb-2'>More.</h1>
                    <ul className='text-neutral-200'>
                        <li className='hover:text-neutral-200 duration-560 text-sm mb-3'>
                            <a href="https://github.com/justizha/NextDesignComponent" target='_blank'>
                                Github
                            </a>
                        </li>
                        <li className='hover:text-neutral-200 duration-560 text-sm mb-3'>
                            <a href="https://github.com/justizha/NextDesignComponent/releases" target='_blank'>
                                Release
                            </a>
                        </li>
                        <li className='hover:text-neutral-200 duration-500 text-sm mb-3'>
                            <a href="https://nextjs.org/docs" className='cursor-pointer' target='_blank'>
                                Learn Next js
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='px-4 mt-4'>
                    <h1 className='font-semibold text-base text-neutral-200'>Contacts.</h1>
                    <ul className='list-none'>
                        <li className='text-sm text-neutral-200'>
                            <p>+ 62-831-0630-7593</p>
                        </li>
                        <li className='text-sm text-neutral-200'>
                            <p className='break-words'>contact@fiscalya.com</p>
                        </li>
                    </ul>
                </div>
                <div className='px-4 mt-4'>
                    <h1 className='font-semibold text-base text-neutral-200'>Socials.</h1>
                    <div className='mt-2'>
                        <div className='flex gap-4 items-center'>
                            <a href="https://www.instagram.com/" className='cursor-pointer bg-white' target='_blank'>
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