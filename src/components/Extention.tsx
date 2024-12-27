import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const UseExtention = () => {
    return (
        <div className="bg-[#043873] py-12 sm:py-8">
            <div className="max-w-[1920px] lg:h-[759px] mx-auto flex flex-col md:flex-row items-center gap-10 px-4 sm:px-6 lg:px-8">
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-white text-[40px] sm:text-5xl lg:text-6xl md:text-[50px] font-bold">
                        Use as Extension
                    </h1>
                    <p className="text-white text-[18px] md:text-[18px] sm:text-lg mt-4 sm:mt-6">
                        Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
                    </p>
                    <div className="mt-6 sm:mt-8 flex justify-center md:justify-start">
                        <button className="flex items-center justify-center w-[136px] h-[53px] md:w-[156px] md:h-[63px] lg:w-[176px] lg:h-[63px] gap-2 bg-[#4F9CF9] text-white text-base sm:text-lg px-6 py-3 rounded-md hover:bg-[#3b8ed6] transition">
                            Let&apos;s Go <FaArrowRight className="text-sm" />
                        </button>
                    </div>
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <div className="w-[290px] h-[300px] md:w-[500px] md:h-[380px] lg:w-[636px] lg:h-[459px] bg-[#C4DEFD] rounded-md">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UseExtention;
