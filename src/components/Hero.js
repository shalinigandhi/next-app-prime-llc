"use client";
import InputDropdown from "./InputDropdown";
import Slider from "react-slick";
import { useRef } from "react";
export default function Hero() {
  const sliderRef = useRef(null);

  const data = [
    { image: "/images/hero-banner.svg", title: "Education and Tutoring" },
    { image: "/images/discover01.svg", title: "Household Services" },
    { image: "/images/discover02.svg", title: "Home Maintenance Services" },
    { image: "/images/discover03.svg", title: "Beauty and Wellness" },
    { image: "/images/discover05.svg", title: "Event and Entertainment" },
    { image: "/images/discover06.svg", title: "Marine Services" },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    swipe: true,
    touchMove: true,
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center items-center">{dots}</ul>
      </div>
    ),
  };
  return (
    <div className="container">
      <div className="relative md:my-[15px] md:min-h-[715px] rounded-[55px] mt-[20px] md:mt-[25px]">
        <Slider ref={sliderRef} {...settings}>
          {data.map((item, index) => (
            <div
              className="relative w-full inline-block h-[300px] md:h-[716px]"
              key={index}
            >
              <div
                className="w-full h-[285px] md:h-[716px] inline-block min-w-[calc(100vw-50px)] rounded-[20px] "
                key={index}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg md:rounded-[50px]"
                />
              </div>
              <div
                className="
                absolute bg-white rounded-[61px] font-extrabold md:text-[20px] text-[12px] 
                uppercase text-black flex justify-center items-center
               md:shadow-[0px_4px_28.3px_0px_#2B5BB540]
                min-w-[207px] md:min-w-[355px] md:max-w-[355px] max-w-[204px] max-h-[40px] min-h-[40px] md:max-h-[62px] md:min-h-[62px]
                absolute bottom-[7px] md:bottom-[34px] left-1/2 transform -translate-x-1/2"
              >
                {item.title}
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex flex-col items-center md:block">
          <div className="md:absolute md:top-[40px] mt-[25px] md:mt-[0px] md:left-[30px] lg:text-[40px] text-[20px] bg-[url('/images/gradient-mobile01.svg')] md:bg-[url('/images/gradient01.png')] bg-no-repeat bg-contain bg-center w-[299px] h-[107px] md:w-auto md:h-auto">
            <p className="py-[10px] px-[20px] md:py-[34px] md:px-[32px] font-extrabold lg:leading-[61px] uppercase text-white">
              Find the <span className="text-[#CBEC5E]">talent</span> sign up
              <br /> & get The <span className="text-[#CBEC5E]">job</span> done
            </p>
          </div>
          <div className="md:absolute relative md:top-[220px] lg:top-[120px] md:right-[20px] lg:right-[60px] bg-[url('/images/gradient-mobile02.svg')] md:bg-[url('/images/gradient02.png')] bg-no-repeat bg-contain bg-center w-[289px] h-[85px] md:w-auto md:h-auto mt-[15px] md:mt-[0]">
            <p className="py-[14px] px-[42px] lg:py-[42px] md:px-[48px] md:py-[26px] lg:text-[40px] text-[20px] font-extrabold lg:leading-[61px] uppercase text-white">
              We`ll <span className="text-[#CBEC5E]">handle</span> that
            </p>
            <div className="absolute md:right-[30px] lg:right-[42px] right-[25px] bottom-[-30px] flex items-center">
              <button className="mr-[8px] bg-[#CBEC5E] lg:text-[16px] text-[12px] rounded-[40px] py-[12px] px-[30px] text-[#18470D] cursor-pointer">
                Sign Up for Contract
              </button>
              <button className="md:w-[51px] md:h-[51px] w-[39px] h-[39px] md:bg-white bg-[#E0E0E0] rounded-full inline-flex items-center justify-center cursor-pointer">
                <img src="/images/play.svg" />
              </button>
            </div>
          </div>
        </div>

        <div className="md:absolute relative md:bottom-[130px] md:left-1/2 md:transform md:-translate-x-1/2 inline-flex flex-col justify-center items-center mt-[80px] md:mt-[0] w-full md:max-w-[555px]">
          <div className="bg-black flex items-center justify-center search-icon">
            <img src="/images/search.svg" />
          </div>
          <input
            type="text"
            placeholder="Find a job, talent or service"
            className="bg-white rounded-[73px] md:min-w-[555px] md:min-h-[60px] min-h-[50px] w-full md:text-[16px] text-[12px] font-medium md:pl-[70px] pl-[60px] md:mb-[14px] outline-none"
          />
          <InputDropdown />
        </div>
      </div>
    </div>
  );
}
