"use client"
import Image from "next/image"
import Link from "next/link"
import { AiFillAndroid } from "react-icons/ai"
import { FaArrowRight, FaChevronDown, FaChevronUp, FaFacebookF, FaLinkedinIn, FaTwitter, FaWindows } from "react-icons/fa"
import { IoLogoApple } from "react-icons/io"
import { useState } from "react"
import { TbWorld } from "react-icons/tb"

const Footer = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'es', label: 'Urdu' },
        { code: 'fr', label: 'Hindi' },
    ];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleLanguageSelect = (label: string) => {
        setSelectedLanguage(label);
        setIsOpen(false); 
    };

    return (
        <div className="bg-[#043873] w-full px-4 xl:px-0">
            <div className="py-32">
                <div className="flex flex-col sm:items-center">
                    <div className="flex flex-col sm:items-center sm:gap-5 gap-8 sm:text-center sm:w-[45%]">
                        <h1 className="text-white sm:text-[4.5vw] text-[45px] sm:w-[90%] font-[700] leading-tight">Try Whitepace today</h1>

                        <p className="text-white sm:text-center sm:text-[22px] text-[18px] font-[400]">Get started for free. <br />
                            Add your whole team as your needs grow.</p>

                        <div className='flex sm:justify-center'>
                            <button className='flex items-center gap-2 bg-[#4F9CF9] sm:text-[16px] text-[14px] text-white px-7 py-4 rounded-md'>Try Taskey free <span> <FaArrowRight className='font-[100] text-[12px]' /></span></button>
                        </div>

                        <p className="text-white sm:text-[22px] text-[18px] font-[400]">On a big team? Contact sales</p>

                        <div className="flex sm:justify-center sm:items-center gap-4">
                            <span><IoLogoApple className="text-white sm:h-[4.4vw] sm:w-[4.4vw] h-[10vw] w-[10vw]" /></span>
                            <span><FaWindows className="text-white sm:h-[4.4vw] sm:w-[4.4vw] h-[10vw] w-[10vw]" /></span>
                            <span><AiFillAndroid className="text-white sm:h-[4.4vw] sm:w-[4.4vw] h-[10vw] w-[10vw]" /></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex md:flex-row flex-col sm:items-start items-center sm:gap-[8vw] gap-10">
                <div className="flex-1 flex flex-col sm:items-start items-center gap-10 md:mt-3 sm:text-start text-center">
                    <Link href={"/"} className="text-xl"><Image src={"/images/logo-1.png"} alt='main-logo' 
                    width={191} height={34} className='md:w-[15vw] sm:w-[42vmax] w-[53vw] ml-5' /></Link>
                    <p className="lg:text-[18px] md:text-[16px] text-[17px] md:w-full sm:w-[70%] text-white font-[400] max-w-xs ml-5">
                     whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                </div>

                <div className="flex md:flex-row flex-col flex-1 sm:gap-[8vw] gap-8 md:mt-3 sm:text-start text-center">
                    <div className="flex flex-col sm:gap-6 gap-3">
                        <h1 className="text-[18px] font-[700] text-white">Product</h1>
                        <ul className="flex flex-col gap-1">
                            <li className="text-[16px] font-[400] text-white hover:text-[#FFE492]">Overview</li>
                            <li className="text-[16px] font-[400] text-white hover:text-[#FFE492]">Pricing</li>
                            <li className="text-[16px] font-[400] text-white hover:text-[#FFE492]">Customer stories</li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:gap-6 gap-3">
                        <h1 className="text-[18px]   font-[700] text-white">Resources</h1>
                        <ul className="flex flex-col gap-1">
                            <li className="text-[16px] font-[400] text-white hover:text-[#FFE492]">Blog</li>
                            <li className="text-[16px] font-[400] text-white hover:text-[#FFE492]">Guides & tutorials</li>
                            <li className="text-[16px] font-[400] text-white hover:text-[#FFE492]">Help center</li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:gap-6 gap-3">
                        <h1 className="text-[18px]  font-[700] text-white">Company</h1>
                        <ul className="flex flex-col gap-1">
                            <li className="text-[16px] font-[400] text-white hover:text-[#FFE492]">About us</li>
                            <li className="text-[16px] font-[400] text-white hover:text-[#FFE492]">Careers</li>
                            <li className="text-[16px] font-[400] text-white hover:text-[#FFE492]">Media kit</li>
                        </ul>
                    </div>
                </div>

                <div className="flex-1 flex flex-col gap-3 sm:items-start items-center sm:text-start text-center lg:mt-5">
                    <h1 className="text-[18px] font-[700] text-white">Try It Today</h1>

                    <p className="text-white text-[17px]  font-[400] max-w-xs">Get started for free.
                        Add your whole team as your needs grow.</p>

                    <div className='flex'>
                        <button className='flex items-center gap-2 bg-[#4F9CF9] sm:text-[1.2vw] text-[14px] text-white lg:px-6 md:px-4 px-6 py-3 rounded-md'>Start today <span> <FaArrowRight className='font-[100] text-[12px]' /></span></button>
                    </div>
                </div>
            </div>

            <div className="mt-20">

                <div className="border-t-[0.2vw] sm:mt-0 mt-[5vw] border-[#2E4E73] hidden md:block"></div>
                <div className="flex md:flex-row flex-col md:justify-between justify-start md:items-center py-5 pt-7">
                    <div className="flex sm:flex-row flex-col sm:gap-[2.7vw] gap-5 items-center">
                        <div className="relative group">
                            <button
                                className="flex items-center gap-2 group-hover:text-[#FFE492] w-full font-medium text-white focus:outline-none"
                                onClick={toggleDropdown}
                            >
                                <div className="flex items-center space-x-2">
                                    <TbWorld className="text-white group-hover:text-[#FFE492] text-[24px] font-[100] ml-5"/>
                                    <span>{selectedLanguage}</span>
                                </div>
                                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                            </button>
                            {isOpen && (
                                <div className="absolute bottom-full w-full px-4 py-2 bg-white border rounded-md shadow-lg mb-2">
                                    {languages.map((lang) => (
                                        <div
                                            key={lang.code}
                                            className="py-1 cursor-pointer hover:bg-[#FFE492]"
                                            onClick={() => handleLanguageSelect(lang.label)}
                                        >
                                            {lang.label}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="flex items-center sm:flex-row flex-col sm:gap-[2.7vw] gap-3 ml-5">
                            <p className="text-white hover:text-[#FFE492]">Terms & privacy</p>

                            <p className="text-white hover:text-[#FFE492]">Security</p>

                            <p className="text-white hover:text-[#FFE492]">Status</p>

                            <p className="text-white hover:text-[#FFE492]">©2021 Whitepace LLC.</p>
                        </div>
                    </div>

                    <div className="border-t-[0.2vw]  border-[#2E4E73] block md:hidden my-5"></div>
                    <div className="flex md:gap-[1.4vw] gap-10 justify-center sm:justify-start mr-5">
                        <Link href={"/"}><FaFacebookF className="text-white h-[19px] w-[19px]" /></Link>
                        <Link href={"/"}><FaTwitter className="text-white h-[19px] w-[19px]" /></Link>
                        <Link href={"/"}><FaLinkedinIn className="text-white h-[19px] w-[19px]" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
