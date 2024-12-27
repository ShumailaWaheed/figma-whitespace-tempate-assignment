import { FaArrowRight } from "react-icons/fa";

const WorkEverywhere = () => {
    return (
        <div className="flex items-end justify-center lg:mt-16 h-auto w-full max-w-[1920px] mt-10 md:mt-20">
            <div className='px-5 sm:px-8 lg:px-[80px] bg-[#043873] relative flex flex-col items-center w-full max-w-[1440px]'>
                
                <div className="absolute inset-0 bg-cover bg-no-repeat" style={{
                    backgroundImage: "url('/images/Element-02.png')",
                    backgroundPosition: 'left center',
                    backgroundSize: 'contain', 
                    zIndex: 0 
                }} />

                <div className='flex flex-col items-center mt-10 sm:mt-20 lg:mt-40 w-full text-center justify-center relative z-10'>
                    <h1 className='text-white text-[40px] md:text-[50px] lg:text-[72px] font-bold leading-tight max-w-[90%] sm:max-w-[1064px]'>
                        Your work, everywhere you are
                    </h1>
                    <p className='text-white text-[18px] md:text-[18px] lg:text-[18px] mt-4 sm:mt-8 lg:mt-16 leading-snug max-w-[90%] sm:max-w-[720px]'>
                        Access your notes from your computer, phone, or tablet by synchronising with various services, 
                        including Whitepace, Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, 
                        Android, and iOS. A terminal app is also available!
                    </p>
                    <div className='flex justify-center mt-6 sm:mt-10 lg:mt-24 mb-10 sm:mb-20 lg:mb-40'>
                        <button className='flex items-center gap-4 sm:gap-6 lg:gap-8 bg-[#4F9CF9] px-6 sm:px-8 lg:px-[32px] py-3 sm:py-4 lg:py-[12px] text-[12px] sm:text-[14px] lg:text-[16px] text-white rounded-md hover:bg-[#3b8ed6] transition'>
                            Try Taskey <span><FaArrowRight className='font-[100] text-[10px] sm:text-[12px] lg:text-[12px]' /></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkEverywhere;
