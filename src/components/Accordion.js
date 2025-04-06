"use client";
import { useState } from "react";

export default function Accordion({
  title = "Accordion Title",
  content = "Accordion content goes here.",
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-full rounded-2xl shadow-sm bg-white p-[10px] mb-[10px] ${
        isOpen ? "border-2 border-[#C1EC05]" : "border border-gray-200"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 font-medium text-[30px] leading-[100%] text-left text-black transition"
      >
        {title}
        <span className="bg-black w-[48px] h-[48px] rounded-full flex justify-center items-center">
          <img
            src="/images/arrow-up-white.svg"
            className={`transform transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        </span>
      </button>

      {isOpen && (
        <div
          className={`px-4 pb-4 font-normal text-base text-[#3F3C3C] leading-6 transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {content}
        </div>
      )}
    </div>
  );
}
