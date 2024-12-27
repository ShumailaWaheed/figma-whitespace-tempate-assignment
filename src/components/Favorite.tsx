import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Favorite = () => {
    return (
        <div 
            className="flex flex-col sm:flex-row sm:gap-0 gap-14 sm:px-[32px] px-[20px] lg:py-[145px] py-[70px] md:py-[150px] bg-[#043873] mt-32 xl:h-[750px]"
            style={{
                backgroundImage: `url('/images/Element-03.png')`,
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'calc(60vw + 50%)', 
            }}
        >
            <div className="flex flex-1 justify-center items-center mx-auto text-center">
                <div className="lg:w-[570px] md:w-[420px] w-[80vw] md:mb-20">
                    <Image
                        src="/images/Apps.png"
                        alt="banner-image"
                        layout="responsive"
                        width={570}
                        height={450}
                        className="object-cover"
                    />
                </div>
            </div>

            <div className="flex-1 sm:text-start text-center sm:justify-start justify-center">
                <h1 className="text-white text-[40px] md:text-[50px] lg:text-[58px] font-bold sm:leading-[64px] mt-6 sm:mr-20">
                    Work with Your Favorite Apps Using whitepace
                </h1>
                <p className="text-white lg:text-[18px] text-[18px] mt-6 sm:mr-20">
                    Use the web clipper extension, available on Chrome and Firefox, to save web pages or take 
                    screenshots as notes.
                </p>
                <div className="flex sm:justify-start justify-center">
                    <button className="flex items-center mt-12 gap-2 bg-[#4F9CF9] text-[16px] text-white px-7 py-4 rounded-md">
                        Let s Go <span><FaArrowRight className="font-[100] text-[12px]" /></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Favorite;

