import InputDropdown from "../InputDropdown";

export default function SearchInputSection({ searchInputClass }) {
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
