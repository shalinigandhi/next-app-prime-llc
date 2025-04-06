"use client";
import { useState } from "react";
import Accordion from "./Accordion";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("client");

  const getTabClassNames = (tab) => {
    return `flex-1 text-center py-2 px-4 transition-colors duration-300 ease-in-out rounded-[50px] font-medium text-[20px] leading-6 ${
      activeTab === tab ? "bg-[#CBEC5E] text-[#18470D]" : "bg-white text-black"
    } focus:outline-none`;
  };

  const getContentClassNames = (tab) => {
    return `tab-content transition-opacity duration-300 ease-in-out w-full ${
      activeTab === tab ? "block" : "hidden"
    }`;
  };

  return (
    <div className="flex flex-col items-end">
      <div className="flex mb-4 bg-white rounded-[50px] w-[297px] h-[56px] p-1 cursor-pointer absolute top-[91px]">
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
          content="Showcase your portfolio, client reviews, and verified
credentials to stand out."
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
          content="Showcase your portfolio, client reviews, and verified
credentials to stand out."
        />
        <Accordion
          title="Risk-Free Hiring"
          content="Fast styling with great flexibility."
        />
      </div>
    </div>
  );
}
