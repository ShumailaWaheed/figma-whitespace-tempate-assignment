"use client";

import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

const ChoosePlan = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const features = [
    "Sync unlimited devices",
    "10 GB monthly uploads",
    "200 MB max. note size",
    "Customize Home dashboard and access extra widgets",
    "Connect primary Google Calendar account",
    "Add due dates, reminders, and notifications to your tasks"
  ];

  return (
    <div className="sm:px-[32px] px-[20px] flex flex-col gap-5">
      <div className="text-center">
        <h1 className="md:block text-[#212529] text-[40px] lg:text-[72px] md:text-[50px] font-[700]">
          Choose Your Plan
        </h1>
        <p className="md:block md:w-[70%] lg:text-[18px] md:text-[18px] text-[18px] text-[#212529] sm:mt-0 mt-2 mx-auto">
          Whether you want to get organized, keep your personal life on track, or boost workplace productivity, 
          Evernote has the right plan for you.
        </p>
      </div>

      <div className="hidden md:flex gap-6 mt-20 mb-5 justify-center mx-auto max-w-[1920px]">
        {/* Free Plan */}
        <div
          onMouseEnter={() => setHovered(1)}
          onMouseLeave={() => setHovered(null)}
          className={`p-[40px] lg:h-[640px] lg:w-[340px] md:w-[300px] md:h-[640px] rounded-md border border-orange-300 flex flex-col gap-5 group transform transition-transform duration-300 ${
            hovered === 1 ? "bg-[#043873] scale-y-110 scale-x-105" : ""
          }`}
        >
          <div className="flex flex-col gap-3">
            <p className={`text-[24px] font-[600] ${hovered === 1 ? "text-white" : "text-black"}`}>Free</p>
            <h1 className={`font-[700] text-[36px] ${hovered === 1 ? "text-[#FFE492]" : "text-black"}`}>$0</h1>
            <p className={`text-[18px] font-[500] ${hovered === 1 ? "text-white" : "text-black"}`}>Capture ideas and find them quickly</p>
          </div>

          <div className="flex flex-col gap-3 lg:w-[90%]">
            {features.map((text, index) => (
              <div
                key={index}
                className={`lg:text-[15px] sm:text-[13px] font-[400] flex items-center gap-3 ${hovered === 1 ? "text-white" : "text-black"}`}
              >
                <span className={`text-[20px] font-bold ${hovered === 1 ? "text-[#FFE492]" : "text-black"}`}>
                  <FiCheckCircle />
                </span>
                {text}
              </div>
            ))}
          </div>

          <div>
            <button className="rounded-md border px-6 py-2 lg:text-[16px] sm:text-[14px] font-[500] group-hover:bg-[#4F9CF9] group-hover:border-none group-hover:text-white">
              Get Started
            </button>
          </div>
        </div>

        {/* Personal Plan */}
        <div
          onMouseEnter={() => setHovered(2)}
          onMouseLeave={() => setHovered(null)}
          className={`p-[60px] lg:w-[417px] lg:h-[641px] md:w-[300px] md:h-[660px] rounded-md border border-orange-300 flex flex-col gap-5 group transform transition-transform duration-300 ${
            hovered === 2 || hovered === null ? "bg-[#043873] scale-y-110 scale-x-105" : ""
          }`}
        >
          <div className="flex flex-col gap-3">
            <p className={`text-[24px] font-[600] ${hovered === 2 || hovered === null ? "text-white" : "text-black"}`}>Personal</p>
            <h1 className={`font-[700] text-[36px] ${hovered === 2 || hovered === null ? "text-[#FFE492]" : "text-black"}`}>$11.99</h1>
            <p className={`text-[18px] font-[500] ${hovered === 2 || hovered === null ? "text-white" : "text-black"}`}>Keep home and family on track</p>
          </div>

          <div className="flex flex-col gap-3 lg:w-[90%]">
            {features.map((text, index) => (
              <div
                key={index}
                className={`lg:text-[15px] sm:text-[13px] font-[400] flex items-center gap-3 ${hovered === 2 || hovered === null ? "text-white" : "text-black"}`}
              >
                <span className={`text-[20px] font-bold ${hovered === 2 || hovered === null ? "text-[#FFE492]" : "text-black"}`}>
                  <FiCheckCircle />
                </span>
                {text}
              </div>
            ))}
          </div>

          <div>
            <button
              className={`rounded-md border px-6 py-2 lg:text-[16px] sm:text-[14px] font-[500] ${
                hovered === 2 || hovered === null ? "bg-[#4F9CF9] border-none text-white" : ""
              }`}
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Organization Plan */}
        <div
          onMouseEnter={() => setHovered(3)}
          onMouseLeave={() => setHovered(null)}
          className={`p-[40px] lg:h-[640px] lg:w-[340px] md:w-[300px] md:h-[640px] rounded-md border border-orange-300 flex flex-col gap-5 group transform transition-transform duration-300 ${
            hovered === 3 ? "bg-[#043873] scale-y-110 scale-x-105" : ""
          }`}
        >
          <div className="flex flex-col gap-3">
            <p className={`text-[24px] font-[600] ${hovered === 3 ? "text-white" : "text-black"}`}>Organization</p>
            <h1 className={`font-[700] text-[36px] ${hovered === 3 ? "text-[#FFE492]" : "text-black"}`}>$49.99</h1>
            <p className={`text-[18px] font-[500] ${hovered === 3 ? "text-white" : "text-black"}`}>Capture ideas and find them quickly</p>
          </div>

          <div className="flex flex-col gap-3 lg:w-[90%]">
            {features.map((text, index) => (
              <div
                key={index}
                className={`lg:text-[15px] sm:text-[13px] font-[400] flex items-center gap-3 ${hovered === 3 ? "text-white" : "text-black"}`}
              >
                <span className={`text-[20px] font-bold ${hovered === 3 ? "text-[#FFE492]" : "text-black"}`}>
                  <FiCheckCircle />
                </span>
                {text}
              </div>
            ))}
          </div>

          <div>
            <button className="rounded-md border px-6 py-2 lg:text-[16px] sm:text-[14px] font-[500] group-hover:bg-[#4F9CF9] group-hover:border-none group-hover:text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Mobile view (added scrollable slide bar) */}
      <div className="md:hidden flex gap-4 py-6 overflow-x-auto">
        <div
          onMouseEnter={() => setHovered(1)}
          onMouseLeave={() => setHovered(null)}
          className={`min-w-[300px] p-[20px] rounded-md border border-orange-300 flex flex-col gap-5 group transform transition-transform duration-300 ${
            hovered === 1 ? "bg-[#043873] scale-y-110 scale-x-105" : ""
          }`}
        >
          <div className="flex flex-col gap-3">
            <p className={`text-[18px] font-[600] ${hovered === 1 ? "text-white" : "text-black"}`}>Free</p>
            <h1 className={`font-[700] text-[24px] ${hovered === 1 ? "text-[#FFE492]" : "text-black"}`}>$0</h1>
            <p className={`text-[14px] font-[500] ${hovered === 1 ? "text-white" : "text-black"}`}>Capture ideas and find them quickly</p>
          </div>

          <div className="flex flex-col gap-3">
            {features.map((text, index) => (
              <div
                key={index}
                className={`text-[14px] font-[400] flex items-center gap-3 ${hovered === 1 ? "text-white" : "text-black"}`}
              >
                <span className={`text-[16px] font-bold ${hovered === 1 ? "text-[#FFE492]" : "text-black"}`}>
                  <FiCheckCircle />
                </span>
                {text}
              </div>
            ))}
          </div>

          <div>
            <button className="rounded-md border px-6 py-2 lg:text-[14px] sm:text-[12px] font-[500] group-hover:bg-[#4F9CF9] group-hover:border-none group-hover:text-white">
              Get Started
            </button>
          </div>
        </div>

        <div
          onMouseEnter={() => setHovered(2)}
          onMouseLeave={() => setHovered(null)}
          className={`min-w-[300px] p-[20px] rounded-md border border-orange-300 flex flex-col gap-5 group transform transition-transform duration-300 ${
            hovered === 2 ? "bg-[#043873] scale-y-110 scale-x-105" : ""
          }`}
        >
          <div className="flex flex-col gap-3">
            <p className={`text-[18px] font-[600] ${hovered === 2 ? "text-white" : "text-black"}`}>Personal</p>
            <h1 className={`font-[700] text-[24px] ${hovered === 2 ? "text-[#FFE492]" : "text-black"}`}>$11.99</h1>
            <p className={`text-[14px] font-[500] ${hovered === 2 ? "text-white" : "text-black"}`}>Keep home and family on track</p>
          </div>

          <div className="flex flex-col gap-3">
            {features.map((text, index) => (
              <div
                key={index}
                className={`text-[14px] font-[400] flex items-center gap-3 ${hovered === 2 ? "text-white" : "text-black"}`}
              >
                <span className={`text-[16px] font-bold ${hovered === 2 ? "text-[#FFE492]" : "text-black"}`}>
                  <FiCheckCircle />
                </span>
                {text}
              </div>
            ))}
          </div>

          <div>
            <button className="rounded-md border px-6 py-2 lg:text-[14px] sm:text-[12px] font-[500] group-hover:bg-[#4F9CF9] group-hover:border-none group-hover:text-white">
              Get Started
            </button>
          </div>
        </div>

        <div
          onMouseEnter={() => setHovered(3)}
          onMouseLeave={() => setHovered(null)}
          className={`min-w-[300px] p-[20px] rounded-md border border-orange-300 flex flex-col gap-5 group transform transition-transform duration-300 ${
            hovered === 3 ? "bg-[#043873] scale-y-110 scale-x-105" : ""
          }`}
        >
          <div className="flex flex-col gap-3">
            <p className={`text-[18px] font-[600] ${hovered === 3 ? "text-white" : "text-black"}`}>Organization</p>
            <h1 className={`font-[700] text-[24px] ${hovered === 3 ? "text-[#FFE492]" : "text-black"}`}>$49.99</h1>
            <p className={`text-[14px] font-[500] ${hovered === 3 ? "text-white" : "text-black"}`}>Capture ideas and find them quickly</p>
          </div>

          <div className="flex flex-col gap-3">
            {features.map((text, index) => (
              <div
                key={index}
                className={`text-[14px] font-[400] flex items-center gap-3 ${hovered === 3 ? "text-white" : "text-black"}`}
              >
                <span className={`text-[16px] font-bold ${hovered === 3 ? "text-[#FFE492]" : "text-black"}`}>
                  <FiCheckCircle />
                </span>
                {text}
              </div>
            ))}
          </div>

          <div>
            <button className="rounded-md border px-6 py-2 lg:text-[14px] sm:text-[12px] font-[500] group-hover:bg-[#4F9CF9] group-hover:border-none group-hover:text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosePlan;
