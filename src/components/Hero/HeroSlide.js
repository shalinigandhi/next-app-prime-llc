"use client";
import { useRef } from "react";
import Slider from "react-slick";

export default function HeroSlide({ image, title }) {
  const sliderRef = useRef(null);

  const titleClass = `absolute bottom-[7px] left-1/2 transform -translate-x-1/2 bg-white rounded-[61px] font-extrabold uppercase text-black flex justify-center items-center text-[12px] min-w-[207px] max-w-[204px] min-h-[40px] max-h-[40px] md:text-[20px] md:min-w-[355px] md:max-w-[355px] md:min-h-[62px] md:max-h-[62px] md:bottom-[34px] md:shadow-[0px_4px_28.3px_0px_#2B5BB540]`;

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
    <Slider ref={sliderRef} {...settings}>
      {data.map((item, index) => (
        <div
          className="relative w-full inline-block h-[300px] md:h-[716px]"
          key={index}
        >
          <div className="w-full h-[285px] inline-block min-w-[calc(100vw-50px)] rounded-[20px] md:h-[716px]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-lg md:rounded-[50px]"
            />
          </div>
          <div className={titleClass}>{item.title}</div>
        </div>
      ))}
    </Slider>
  );
}
