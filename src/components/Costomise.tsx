import { FaArrowRight } from "react-icons/fa";

const Customize = () => {
    return (
        <div className="sm:px-[32px] px-[20px] bg-[#FEFEFE]">
            <div className="w-full flex flex-col sm:flex-row-reverse items-center md:h-[656px] sm:w-full py-16 sm:py-0 sm:gap-6">
                <div className="flex-1 sm:text-start text-center sm:mt-20 md:mt-0">
                    <h1 className="text-[40px] text-[#212529] lg:text-[72px] md:text-[50px] font-bold sm:leading-[1.1] leading-tight">
                        Customise it to your needs
                    </h1>
                    
                    <p className="text-[18px] text-[#212529] md:text-[18px] sm:mt-3 mt-2 md:mt-6">
                        Customise the app with plugins, custom themes, and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
                    </p>
                    <div className="flex sm:justify-start justify-center sm:mb-0 mb-20 sm:pt-0 pt-7">
                        <button className="flex items-center md:mt-8 sm:mt-7 gap-2 bg-[#4F9CF9] sm:text-[16px] text-[14px] text-white px-7 py-4 rounded-md">
                            Let&apos;s Go <FaArrowRight className="text-[12px]" />
                        </button>
                    </div>
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <div className="lg:w-[670px] lg:h-[499px] md:w-[500px] md:h-[400px] w-[310px] h-[350px] mt-[-20px] sm:w-[100%] sm:h-[100%] bg-[#C4DEFD] rounded-md">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customize;
