import Image from "next/image";

const Sponser = () => {
    return (
        <div className="flex flex-col sm:gap-28 gap-12 sm:px-[32px] xl:[220px] px-[20px]">
            <div className="flex justify-center relative">
                <h1 className="text-[40px] text-[#212529] md:text-[50px] lg:text-[72px] font-bold sm:leading-[64px] z-10">
                    Our Sponsors
                </h1>
            </div>

            <div className="flex sm:flex-row items-center sm:gap-0 gap-4 flex-col sm:justify-between">
                <div className="sm:w-[5vmax] w-[14vw] h-[54px] flex items-center justify-center mb-10">
                    <Image src={"/images/apple.png"} alt="apple" width={100} height={100} className="object-contain" />
                </div>
                <div className="sm:w-[19vmax] w-[44vw] h-10 flex items-center justify-center mb-10">
                    <Image src={"/images/microsoft.png"} alt="microsoft" width={500} height={100} className="object-contain" />
                </div>
                <div className="sm:w-[19vmax] w-[44vw] h-10 flex items-center justify-center mb-10">
                    <Image src={"/images/slack.png"} alt="slack" width={500} height={100} className="object-contain" />
                </div>
                <div className="sm:w-[19vmax] w-[60vw] h-10 flex items-center justify-center mb-10">
                    <Image src={"/images/google.png"} alt="google" width={500} height={100} className="object-contain" />
                </div>
            </div>
        </div>
    );
};

export default Sponser;
