import React from 'react';
import Image from 'next/image';

const Clients = () => {
  return (
    <section className="py-16 bg-gray-100 w-full max-w-[1920px] mx-auto">
      <div className="w-full px-4">

        <h2 className="text-[40px] text-[#212529] md:text-[50px] lg:text-[72px] text-center font-bold mb-10">What Our Clients Says</h2>

        {/* Mobile View */}
        <div className="overflow-x-auto py-6 no-scrollbar sm:hidden">
          <div className="flex space-x-4 transition-transform ease-in-out duration-500">
            {/* Client 1 */}
            <div className="bg-white border border-gray-200 rounded-[10px] shadow-md p-8 hover:shadow-lg transform transition-transform hover:scale-105 w-[320px] flex-shrink-0 text-left">
              <svg className="mb-10 w-[86px] h-[61px] text-left" width="87" height="62" viewBox="0 0 87 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M86.3331 12.686L83.5741 0C63.7088 0.910025 49.9382 9.17535 49.9382 33.4821V61.4603H84.6437V26.2958H71.4999C71.5001 18.4966 76.3936 13.9093 86.3331 12.686Z" fill="#043873" />
                <path d="M36.7281 12.6862L33.9691 0.000244141C14.1038 0.910269 0.333252 9.17582 0.333252 33.4825V61.4607H35.0401V26.2961H21.888C21.888 18.4968 26.7816 13.9096 36.7281 12.6862Z" fill="#043873" />
              </svg>
              <p className="text-gray-600 mb-8 border-b border-gray-300 pb-8">
                Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
              </p>
              <div className="flex items-center gap-4">
                <Image src="/images/client-1.png" alt="Client 1" width={95} height={95} className="rounded-full border-2 border-gray-300" />
                <div>
                  <h4 className="font-bold">Oberon Shaw, MCH</h4>
                  <p className="text-sm text-gray-500">Head of Talent Acquisition, North America</p>
                </div>
              </div>
            </div>

            {/* Client 2 */}
            <div className="bg-blue-500 text-white border border-blue-700 rounded-[10px] shadow-md p-8 hover:shadow-lg transform transition-transform hover:scale-105 w-[320px] flex-shrink-0 text-left">
              <svg className="mb-10 w-[86px] h-[61px] text-left" width="87" height="62" viewBox="0 0 87 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M86.3331 12.686L83.5741 0C63.7088 0.910025 49.9382 9.17535 49.9382 33.4821V61.4603H84.6437V26.2958H71.4999C71.5001 18.4966 76.3936 13.9093 86.3331 12.686Z" fill="white" />
                <path d="M36.7281 12.6862L33.9691 0.000244141C14.1038 0.910269 0.333252 9.17582 0.333252 33.4825V61.4607H35.0401V26.2961H21.888C21.888 18.4968 26.7816 13.9096 36.7281 12.6862Z" fill="white" />
              </svg>
              <p className="mb-6 border-b border-blue-300 pb-2">
                Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
              </p>
              <div className="flex items-center gap-4">
                <Image src="/images/client-2.png" alt="Client 2" width={95} height={95} className="rounded-full border-2 border-blue-300" />
                <div>
                  <h4 className="font-bold">Oberon Shaw, MCH</h4>
                  <p className="text-sm">Head of Talent Acquisition, North America</p>
                </div>
              </div>
            </div>

            {/* Client 3 */}
            <div className="bg-blue-500 text-white border border-blue-700 rounded-[10px] shadow-md p-8 hover:shadow-lg transform transition-transform hover:scale-105 w-[320px] flex-shrink-0 text-left">
              <svg className="mb-10 w-[86px] h-[61px] text-left" width="87" height="62" viewBox="0 0 87 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M86.3331 12.686L83.5741 0C63.7088 0.910025 49.9382 9.17535 49.9382 33.4821V61.4603H84.6437V26.2958H71.4999C71.5001 18.4966 76.3936 13.9093 86.3331 12.686Z" fill="white" />
                <path d="M36.7281 12.6862L33.9691 0.000244141C14.1038 0.910269 0.333252 9.17582 0.333252 33.4825V61.4607H35.0401V26.2961H21.888C21.888 18.4968 26.7816 13.9096 36.7281 12.6862Z" fill="white" />
              </svg>
              <p className="mb-6 border-b border-blue-300 pb-2">
                Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
              </p>
              <div className="flex items-center gap-4">
                <Image src="/images/client-3.png" alt="Client 3" width={95} height={95} className="rounded-full border-2 border-blue-300" />
                <div>
                  <h4 className="font-bold">Oberon Shaw, MCH</h4>
                  <p className="text-sm">Head of Talent Acquisition, North America</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mt-10">
          {/* Client 1 */}
          <div className="bg-white border border-gray-200 rounded-[10px] shadow-md p-8 hover:shadow-lg transform transition-transform hover:scale-105 text-left">
            <svg className="mb-10 w-[86px] h-[61px] text-left" width="87" height="62" viewBox="0 0 87 62" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M86.3331 12.686L83.5741 0C63.7088 0.910025 49.9382 9.17535 49.9382 33.4821V61.4603H84.6437V26.2958H71.4999C71.5001 18.4966 76.3936 13.9093 86.3331 12.686Z" fill="#043873" />
              <path d="M36.7281 12.6862L33.9691 0.000244141C14.1038 0.910269 0.333252 9.17582 0.333252 33.4825V61.4607H35.0401V26.2961H21.888C21.888 18.4968 26.7816 13.9096 36.7281 12.6862Z" fill="#043873" />
            </svg>
            <p className="text-gray-600 mb-8 border-b border-gray-300 pb-8">
              Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
            </p>
            <div className="flex items-center gap-4">
              <Image src="/images/client-1.png" alt="Client 1" width={95} height={95} className="rounded-full border-2 border-gray-300" />
              <div>
                <h4 className="font-bold">Oberon Shaw, MCH</h4>
                <p className="text-sm text-gray-500">Head of Talent Acquisition, North America</p>
              </div>
            </div>
          </div>

          {/* Client 2 */}
          <div className="bg-blue-500 text-white border border-blue-700 rounded-[10px] shadow-md p-8 hover:shadow-lg transform transition-transform hover:scale-105 text-left">
            <svg className="mb-10 w-[86px] h-[61px] text-left" width="87" height="62" viewBox="0 0 87 62" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M86.3331 12.686L83.5741 0C63.7088 0.910025 49.9382 9.17535 49.9382 33.4821V61.4603H84.6437V26.2958H71.4999C71.5001 18.4966 76.3936 13.9093 86.3331 12.686Z" fill="white" />
              <path d="M36.7281 12.6862L33.9691 0.000244141C14.1038 0.910269 0.333252 9.17582 0.333252 33.4825V61.4607H35.0401V26.2961H21.888C21.888 18.4968 26.7816 13.9096 36.7281 12.6862Z" fill="white" />
            </svg>
            <p className="mb-8 border-b border-blue-300 pb-8">
              Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
            </p>
            <div className="flex items-center gap-4">
              <Image src="/images/client-2.png" alt="Client 2" width={95} height={95} className="rounded-full border-2 border-blue-300" />
              <div>
                <h4 className="font-bold">Oberon Shaw, MCH</h4>
                <p className="text-sm">Head of Talent Acquisition, North America</p>
              </div>
            </div>
          </div>

          {/* Client 3 */}
          <div className="bg-blue-500 text-white border border-blue-700 rounded-[10px] shadow-md p-8 hover:shadow-lg transform transition-transform hover:scale-105 text-left">
            <svg className="mb-10 w-[86px] h-[61px] text-left" width="87" height="62" viewBox="0 0 87 62" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M86.3331 12.686L83.5741 0C63.7088 0.910025 49.9382 9.17535 49.9382 33.4821V61.4603H84.6437V26.2958H71.4999C71.5001 18.4966 76.3936 13.9093 86.3331 12.686Z" fill="white" />
              <path d="M36.7281 12.6862L33.9691 0.000244141C14.1038 0.910269 0.333252 9.17582 0.333252 33.4825V61.4607H35.0401V26.2961H21.888C21.888 18.4968 26.7816 13.9096 36.7281 12.6862Z" fill="white" />
            </svg>
            <p className="mb-8 border-b border-blue-300 pb-8">
              Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
            </p>
            <div className="flex items-center gap-4">
              <Image src="/images/client-3.png" alt="Client 3" width={95} height={95} className="rounded-full border-2 border-blue-300" />
              <div>
                <h4 className="font-bold">Oberon Shaw, MCH</h4>
                <p className="text-sm">Head of Talent Acquisition, North America</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex relative items-centert justify-center mt-10 left-1/2 transform -translate-x-1/2 gap-2 z-10">
          <div className="w-3 h-3 bg-blue-400 rounded-full cursor-pointer"></div>
          <div className="w-3 h-3 bg-blue-800 rounded-full cursor-pointer"></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full cursor-pointer"></div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
