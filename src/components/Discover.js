"use client";

import Slider from "react-slick";
import Heading from "./Heading";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Discover() {
  const sliderRef = useRef(null);

  const data = [
    { image: "/images/discover01.svg", title: "Household Services" },
    { image: "/images/discover02.svg", title: "Home Maintenance Services" },
    { image: "/images/discover03.svg", title: "Beauty and Wellness" },
    { image: "/images/discover04.svg", title: "Education and Tutoring" },
    { image: "/images/discover05.svg", title: "Event and Entertainment" },
    { image: "/images/discover06.svg", title: "Marine Services" },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    swipe: true, // Enable touch swipe
    touchMove: true, // Enable touch move for mobile
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1.5 },
      },
    ],
  };

  return (
    <div className="relative pl-[12px] mb-[20px] md:mb-[40px]">
      <Heading text="Discover" highlightWidth="md:w-[79px] w-[55px]" />
      <Slider ref={sliderRef} {...settings}>
        {data.map((item, index) => (
          <div
            className="min-w-[223px] max-w-[223px] flex flex-col items-center"
            key={index}
          >
            <div className="overflow-hidden rounded-[40px]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[273px] object-cover rounded-lg"
              />
            </div>

            <div className="flex justify-between items-center w-full bg-white rounded-[80px] pl-[15px] pr-[4px] pt-[4px] pb-[4px] mt-[14px]">
              <p className="font-bold text-sm leading-[19px] w-[70%]">
                {item.title}
              </p>
              <button className="w-12 h-12 flex items-center justify-center bg-[#CBEC5E] rounded-full cursor-pointer">
                <img src="/images/arrow-up-line.svg" alt="Arrow Icon" />
              </button>
            </div>
          </div>
        ))}
      </Slider>
      <div className="custom-buttons justify-center items-center mt-[20px] hidden md:flex">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="slider-btn mr-[20px]"
        >
          <img src="/images/arrow-previous.svg" />
        </button>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="slider-btn"
        >
          <img src="/images/arrow-next.svg" />
        </button>
      </div>
    </div>
  );
}
