"use client";
import { useState } from "react";

export default function InputDropdown() {
  const [inputType, setInputType] = useState("Talent");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleInputType = (type) => {
    setInputType(type);
    setDropdownOpen(false);
  };

  const containerClasses =
    "absolute right-1 top-1 md:min-w-[122px] min-w-[88px] md:min-h-[52px] min-h-[41px] border border-[#CDCDCD] bg-[#F0F1F4] rounded-[27.5px] flex items-center justify-center text-[#474747] text-[12px] md:text-[16px]";
  const buttonClasses = "flex items-center";
  const arrowClasses = "ml-2";
  const dropdownClasses =
    "absolute min-w-[240px] bg-white rounded-[12px] shadow-[0px_11px_28.3px_0px_#617CAE21] md:top-[60px] top-[52px] md:left-[4px] left-[-149px] z-[1]";
  const optionButtonClasses =
    "w-full text-left px-4 py-2 flex items-center cursor-pointer flex items-start";
  const iconClasses = "w-[24px] h-[24px] mr-[10px]";
  const titleClasses = "text-[14px] text-[#181818] leading-[21px] font-medium";
  const descriptionClasses =
    "text-[11px] text-[#3F3C3C] leading-[17px] font-normal";

  return (
    <div className={containerClasses}>
      <button
        onClick={() => setDropdownOpen((prev) => !prev)}
        className={buttonClasses}
      >
        {inputType}
        <img
          src="/images/arrow-up.svg"
          alt="Toggle Dropdown"
          className={arrowClasses}
        />
      </button>

      {dropdownOpen && (
        <div className={dropdownClasses}>
          {["Talent", "Client"].map((type) => (
            <button
              key={type}
              onClick={() => handleInputType(type)}
              className={optionButtonClasses}
            >
              <img
                src={`/images/${type.toLowerCase()}.svg`}
                alt={`${type} Icon`}
                className={iconClasses}
              />
              <div>
                <p className={titleClasses}>{type}</p>
                <p className={descriptionClasses}>
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
