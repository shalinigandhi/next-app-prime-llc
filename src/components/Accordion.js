"use client";
import { useState } from "react";

export default function Accordion({
  title = "Accordion Title",
  content = "Accordion content goes here.",
}) {
  const [isOpen, setIsOpen] = useState(false);

  const containerClasses = `w-full rounded-2xl shadow-sm bg-white lg:p-[10px] mb-[10px] ${
    isOpen ? "border-2 border-[#C1EC05]" : "border border-gray-200"
  }`;

  const buttonClasses =
    "w-full flex items-center justify-between p-4 font-medium text-[14px] md:text-[24px] lg:text-[30px] leading-[100%] text-left text-black transition";

  const arrowClasses = `transform transition-transform duration-300 ${
    isOpen ? "rotate-90" : ""
  }`;

  const contentClasses = `px-4 pb-4 font-normal text-[12px] md:text-base text-[#3F3C3C] leading-6 transition-all duration-300 ease-in-out overflow-hidden ${
    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
  }`;

  return (
    <div className={containerClasses}>
      <button onClick={() => setIsOpen(!isOpen)} className={buttonClasses}>
        {title}
        <span className="bg-black w-[22px] h-[22px] md:w-[40px] md:h-[40px] lg:w-[48px] lg:h-[48px] rounded-full flex justify-center items-center">
          <img src="/images/arrow-up-white.svg" className={arrowClasses} />
        </span>
      </button>

      {isOpen && <div className={contentClasses}>{content}</div>}
    </div>
  );
}
