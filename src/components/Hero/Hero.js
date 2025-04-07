"use client";

import HeroSlide from "./HeroSlide";
import GradientTextBlock from "./GradientTextBlock";
import SearchInputSection from "./SearchInputSection";

const gradientBoxBase = `bg-no-repeat bg-contain bg-center md:w-auto md:h-auto`;

const heroTextBase = `text-[20px] font-extrabold uppercase text-white lg:text-[40px]`;

const ctaButton = `mr-[8px] bg-[#CBEC5E] text-[#18470D] text-[12px] rounded-[40px] py-[12px] px-[30px] lg:text-[16px]`;

const playButton = `w-[39px] h-[39px] bg-[#E0E0E0] rounded-full inline-flex items-center justify-center md:w-[51px] md:h-[51px] md:bg-white`;

export default function Hero() {
  return (
    <div className="container">
      <div className="relative mt-[20px] md:mt-[25px] md:my-[15px] md:min-h-[715px] rounded-[55px]">
        <HeroSlide />

        <div className="flex flex-col items-center md:block">
          <GradientTextBlock
            text={
              <>
                Find the <span className="text-[#CBEC5E]">talent</span> sign up
                <br /> & get The <span className="text-[#CBEC5E]">
                  job
                </span>{" "}
                done
              </>
            }
            gradientClass={`mt-[25px] md:absolute md:mt-0 md:top-[40px] md:left-[30px] ${gradientBoxBase} bg-[url('/images/gradient-mobile01.svg')] md:bg-[url('/images/gradient01.png')] w-[299px] h-[107px]`}
            textClass={`py-[10px] px-[20px] md:py-[34px] md:px-[32px] lg:leading-[61px] ${heroTextBase}`}
          />

          <GradientTextBlock
            text={
              <>
                We`ll <span className="text-[#CBEC5E]">handle</span> that
              </>
            }
            gradientClass={`relative mt-[15px] md:absolute md:mt-0 md:top-[220px] lg:top-[120px] md:right-[20px] lg:right-[60px] ${gradientBoxBase} bg-[url('/images/gradient-mobile02.svg')] md:bg-[url('/images/gradient02.png')] w-[289px] h-[85px]`}
            textClass={`py-[14px] px-[42px] md:py-[26px] md:px-[48px] lg:py-[42px] lg:leading-[61px] ${heroTextBase}`}
          >
            <div className="absolute right-[25px] md:right-[30px] lg:right-[42px] bottom-[-30px] flex items-center">
              <button className={ctaButton}>Sign Up for Contract</button>
              <button className={playButton}>
                <img src="/images/play.svg" alt="Play" />
              </button>
            </div>
          </GradientTextBlock>
        </div>

        <SearchInputSection />
      </div>
    </div>
  );
}
