"use client";
import { useState } from "react";

const LanguageOption = ({ language, onClick, logo, altText }) => (
  <button
    onClick={() => onClick(language)}
    className={`w-full text-left px-4 py-2 flex items-center cursor-pointer first:border-b first:border-[#4A4A4A]`}
  >
    <img src={logo} alt={altText} className="w-[24px] h-[24px] mr-[10px]" />
    {language === "EN" ? "English" : "Greek"}
  </button>
);

export default function ChangeLanguage() {
  const [language, setLanguage] = useState("EN");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <div className="relative mr-[8px] hidden sm:block">
      <button
        className="px-4 py-2 text-white flex items-center border border-solid rounded-[39px] border-[#94949480] focus:outline-none cursor-pointer text-[12px] lg:text-[14px]"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <img
          src={language === "EN" ? "/images/english.svg" : "/images/greek.svg"}
          alt={language === "EN" ? "English Logo" : "Greek Logo"}
          className="w-[24px] h-[24px] mr-[10px]"
        />
        {language}
        <img src="/images/arrow-down.svg" alt="Dropdown Arrow" />
      </button>
      {dropdownOpen && (
        <div className="absolute mt-2 right-0 w-32 bg-black text-white font-medium text-[14px] rounded-[14px] border border-solid border-[#94949480] z-[1] cursor-pointer">
          <LanguageOption
            language="EN"
            onClick={handleLanguageChange}
            logo="/images/english.svg"
            altText="English Logo"
          />
          <LanguageOption
            language="GR"
            onClick={handleLanguageChange}
            logo="/images/greek.svg"
            altText="Greek Logo"
          />
        </div>
      )}
    </div>
  );
}
