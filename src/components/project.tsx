import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ProjectManagement = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full py-10 px-5 gap-[60px]">
            <div className="w-full max-w-[1920px] h-auto flex flex-col md:flex-row gap-[60px] p-5">
                <div className="flex-1 flex flex-col justify-center text-center md:text-left">
                    <h1 className="text-[#212529] font-bold text-[40px] sm:text-[40px] md:text-[50px] lg:text-[72px] leading-tight">
                        Project Management
                    </h1>
                    <p className="text-[18px] sm:text-[18px] md:text-[18px] text-[#212529] mt-6">
                        Images, videos, PDFs, and audio files are supported. Create math expressions and diagrams directly 
                        in the app. Capture photos with the mobile app and save them to a note.
                    </p>
                    <div className="mt-4 sm:mt-10 flex justify-center sm:justify-start">
                        <button className="flex items-center gap-2 bg-[#4F9CF9] text-white text-[16px] sm:text-[18px] px-7 py-[14px] rounded-md">
                            Start Now <FaArrowRight className="text-[12px]" />
                        </button>
                    </div>
                </div>
             
                <div className="flex-1 flex justify-center items-center w-[719px] h-[448px] sm:h-[400px] md:h-[400px] lg:h-[400px] bg-[#C4DEFD] rounded-md">
              </div>
            </div>

            <div className="w-full max-w-[1480px] h-auto flex flex-col md:flex-row gap-[60px] p-5">
                <div className="flex-1 flex justify-center items-center">
                    <Image
                        src="/images/Work-Together.png" 
                        alt="Description of the image"
                        width={610}
                        height={440}
                        className="rounded-md"
                    />
                </div>
             
                <div className="flex-1 flex flex-col justify-center text-center md:text-left">
                    <h1 className="text-[#212529] font-bold text-[40px] md:text-[50px] sm:text-[40px] lg:text-[72px] leading-tight mb-5">
                        Work Together
                    </h1>
                    <p className="text-[18px] sm:text-[18px] md:text-[18px] text-[#212529] mt-4">
                        Use whiteboards, share notes, and collaborate in real-time with colleagues. Publish notes to the internet and share with ease.
                    </p>
                    <div className="mt-6 sm:mt-10 flex justify-center sm:justify-start">
                        <button className="flex items-center gap-2 bg-[#4F9CF9] text-white text-[16px] sm:text-[18px] px-7 py-[14px] rounded-md">
                            Try It Now <FaArrowRight className="text-[12px]" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectManagement;
