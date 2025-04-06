"use client";
import { useState } from "react";
import Accordion from "./Accordion";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("client");

  const tabButtonClasses =
    "flex-1 text-center py-2 px-4 transition-colors duration-300 ease-in-out rounded-[50px] font-medium text-[18px] md:text-[20px] leading-6 text-[#18470D]";
  const activeTabClasses = "bg-[#CBEC5E]";
  const inactiveTabClasses = "bg-white";
  const tabContentClasses =
    "tab-content transition-opacity duration-300 ease-in-out w-full";
  const tabWrapperClasses =
    "flex mb-4 bg-white rounded-[50px] w-[224px] h-[46px] md:w-[297px] md:h-[56px] p-1 cursor-pointer lg:absolute lg:top-[91px]";

  const getTabClassNames = (tab) => {
    return `${tabButtonClasses} ${
      activeTab === tab ? activeTabClasses : inactiveTabClasses
    } focus:outline-none`;
  };

  const getContentClassNames = (tab) => {
    return `${tabContentClasses} ${activeTab === tab ? "block" : "hidden"}`;
  };

  return (
    <div className="flex flex-col items-end">
      <div className={tabWrapperClasses}>
        <button
          onClick={() => setActiveTab("client")}
          className={getTabClassNames("client")}
        >
          Client
        </button>
        <button
          onClick={() => setActiveTab("talent")}
          className={getTabClassNames("talent")}
        >
          Talent
        </button>
      </div>

      {/* Tab Content */}
      <div className={getContentClassNames("talent")}>
        <Accordion
          title="Top Talents Verified"
          content="Showcase your portfolio, client reviews, and verified credentials to stand out."
        />
        <Accordion
          title="Risk-Free Hiring"
          content="Fast styling with great flexibility."
        />
        <Accordion
          title="Safe contract system"
          content="Fast styling with great flexibility."
        />
      </div>

      <div className={getContentClassNames("client")}>
        <Accordion
          title="Top Clients Verified"
          content="Showcase your portfolio, client reviews, and verified credentials to stand out."
        />
        <Accordion
          title="Risk-Free Hiring"
          content="Fast styling with great flexibility."
        />
      </div>
    </div>
  );
}
