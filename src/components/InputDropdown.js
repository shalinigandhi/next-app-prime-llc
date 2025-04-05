"use client";
import { useState } from "react";

export default function InputDropdown() {
  const [inputType, setInputType] = useState("Talent");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleInputType = (type) => {
    setInputType(type);
    setDropdownOpen(false);
  };

  return (
    <div className="absolute right-1 top-1 min-w-[122px] min-h-[52px] border border-[#CDCDCD] bg-[#F0F1F4] rounded-[27.5px] flex items-center justify-center text-[#474747]">
      <button
        onClick={() => setDropdownOpen((prev) => !prev)}
        className="flex items-center"
      >
        {inputType}
        <img
          src="/images/arrow-up.svg"
          alt="Toggle Dropdown"
          className="ml-2"
        />
      </button>

      {dropdownOpen && (
        <div className="absolute min-w-[240px] bg-white rounded-[12px] shadow-[0px_11px_28.3px_0px_#617CAE21] top-[60px] left-[4px]">
          {["Talent", "Client"].map((type) => (
            <button
              key={type}
              onClick={() => handleInputType(type)}
              className="w-full text-left px-4 py-2 flex items-center cursor-pointer flex items-start"
            >
              <img
                src={`/images/${type.toLowerCase()}.svg`}
                alt={`${type} Icon`}
                className="w-[24px] h-[24px] mr-[10px]"
              />
              <div>
                <p className="text-[14px] text-[#181818] leading-[21px] font-medium">
                  {type}
                </p>
                <p className="text-[11px] text-[#3F3C3C] leading-[17px] font-normal">
                  {type === "Talent"
                    ? "Hire professionals effortlessly."
                    : "Apply to jobs posted by clients."}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
