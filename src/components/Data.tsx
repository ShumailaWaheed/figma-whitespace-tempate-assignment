import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Data = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-auto py-10 px-5 gap-10">
            <div className="w-full max-w-[1480px] flex flex-col md:flex-row gap-10 p-5 lg:p-10">
                <div className="flex-1 flex flex-col justify-center text-center md:text-left">
                    <h1 className="text-[#212529] font-bold text-[40px] lg:text-[72px] md:text-[50px] leading-tight">
                        Your Data 100%
                    </h1>
                    <p className="text-[4.5vw] lg:text-[18px] md:text-[18px] font-medium text-[#212529] mt-4 lg:mt-8">
                        The app is open source and your notes are saved to an open format, so you will always have 
                        access to them. Uses End-To-End Encryption to secure your notes and ensure no one but 
                        yourself can access them.
                    </p>
                    <div className="mt-6 sm:mt-10 flex justify-center sm:justify-start">
                        <button className="flex items-center justify-center gap-2 bg-[#4F9CF9] text-white px-[32px] py-[14px] text-[16px] lg:px-7 lg:py-[14px] rounded-md md:px-[24px] md:py-[12px] md:text-[14px]">
                            Start Now <FaArrowRight className="text-[12px]" />
                        </button>
                    </div>
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <div className="w-full h-auto">
                        <Image
                            src="/images/Elements.png"
                            alt="banner-image"
                            layout="responsive"
                            width={681}
                            height={370}
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Data;


