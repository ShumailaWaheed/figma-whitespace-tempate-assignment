import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-[#043873] bg-center bg-no-repeat bg-cover relative max-w-[1920px] mx-auto" 
     style={{ backgroundImage: 'url(/images/Element-01.png)' }}>
      <div
        className="flex flex-col md:flex-row items-center justify-between px-8 lg:px-20 gap-8 lg:gap-16"
        style={{
          height: 'auto',
          paddingTop: '40px',
          paddingBottom: '100px',
          paddingLeft: '32px',
          paddingRight: '32px',
          maxWidth: '1440px',
          margin: '0 auto',
        }}
      >
        <div className="flex-1 text-center md:text-left mt-4 lg:mt-0">
          <h1 className="text-white text-[40px] sm:text-[36px] md:text-[45px] lg:text-[64px] xl:text-[62px] font-bold mb-4 leading-snug">
            Get More Done with Whitepace
          </h1>
          <p className="text-white text-lg sm:text-base lg:text-lg xl:text-[18px] md:text-[16px] mb-6 leading-relaxed">
            Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
          </p>

          <div className="flex justify-center lg:justify-start md:justify-start">
            <button className="flex items-center gap-2 bg-[#4F9CF9] text-sm sm:text-base text-white px-6 py-4 rounded-md shadow-md transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4F9CF9]">
              Try Whitepace Free <FaArrowRight className="font-light" />
            </button>
          </div>
        </div>

        <div className="flex-1 flex items-end justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="w-[300px] sm:w-[80%] md:w-[450px] lg:w-[585px] lg:h-[456px] h-[350px] sm:h-[400px] md:h-[350px] bg-[rgba(196,222,253,1)] rounded-md shadow-lg aspect-square sm:aspect-[4/3] md:aspect-[16/9] max-w-full" style={{ marginBottom: '0' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
