import InputDropdown from "./InputDropdown";
export default function Hero() {
  return (
    <div className="container">
      <div className="relative my-[15px] bg-[url('/images/hero-banner.svg')] bg-center bg-cover bg-no-repeat min-h-[715px] rounded-[55px]">
        <div className="absolute top-[40px] left-[30px] text-[40px] bg-[url('/images/gradient01.png')] bg-no-repeat bg-contain bg-center">
          <p className="py-[34px] px-[32px] font-extrabold leading-[61px] uppercase text-white">
            Find the <span className="text-[#CBEC5E]">talent</span> sign up
            <br /> & get The <span className="text-[#CBEC5E]">job</span> done
          </p>
        </div>
        <div className="absolute top-[120px] right-[60px] bg-[url('/images/gradient02.png')] bg-no-repeat bg-contain bg-center">
          <p className="py-[42px] px-[48px] text-[40px] font-extrabold leading-[61px] uppercase text-white">
            We`ll <span className="text-[#CBEC5E]">handle</span> that
          </p>
          <div className="absolute right-[42px] bottom-[-31px] flex items-center">
            <button className="mr-[10px] bg-[#CBEC5E] rounded-[40px] py-[14px] px-[30px] text-[#18470D] cursor-pointer">
              Sign Up for Contract
            </button>
            <button className="w-[51px] h-[51px] bg-white rounded-full inline-flex items-center justify-center cursor-pointer">
              <img src="/images/play.svg" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 inline-flex flex-col justify-center items-center">
          <div className="bg-black flex items-center justify-center search-icon">
            <img src="/images/search.svg" />
          </div>
          <input
            type="text"
            placeholder="Find a job, talent or service"
            className="bg-white rounded-[73px] min-w-[555px] min-h-[60px] text-[16px] font-medium pl-[70px] mb-[14px] outline-none"
          />
          <InputDropdown />
          <div className="dots flex items-center mb-[14px]">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div
            className="
                bg-white rounded-[61px] font-extrabold text-[20px] 
                leading-[32.24px] uppercase text-black 
                px-[40px] py-[15px] shadow-[0px_4px_28.3px_0px_#2B5BB540]"
          >
            Education and Tutoring
          </div>
        </div>
      </div>
    </div>
  );
}
