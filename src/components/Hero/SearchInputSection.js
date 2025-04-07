import InputDropdown from "../InputDropdown";

export default function SearchInputSection() {
  const searchInputClass = `bg-white rounded-[73px] w-full min-h-[50px] text-[12px] font-medium pl-[60px] outline-none md:min-h-[60px] md:text-[16px] md:pl-[70px] md:min-w-[555px] md:mb-[14px] placeholder-[#737373]`;
  return (
    <div
      className="relative mt-[80px] w-full inline-flex flex-col justify-center items-center
      md:absolute md:mt-0 md:bottom-[130px] md:left-1/2 md:transform md:-translate-x-1/2 md:max-w-[555px]"
    >
      <div className="bg-black flex items-center justify-center search-icon">
        <img src="/images/search.svg" alt="Search" />
      </div>
      <input
        type="text"
        placeholder="Find a job, talent or service"
        className={searchInputClass}
      />
      <InputDropdown />
    </div>
  );
}
