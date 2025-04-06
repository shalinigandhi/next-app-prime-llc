import Heading from "./Heading";
import Tabs from "./Tabs";
export default function PlatformAdvantages() {
  return (
    <div className="container relative">
      <Heading
        text="ADVANTAGES OF THE PLATFORM"
        highlightWidth="md:w-[162px] w-[108px]"
        right="right-[108px] md:right-0"
      />
      <div className="flex flex-col lg:flex-row justify-between items-center lg:mt-[150px]">
        <img
          src="/images/business-meeting.svg"
          className="w-full h-[219px] md:w-[520px] md:h-[340px] lg:w-[614px] lg:h-[397px] rounded-[25px] border-[6px] border-white mb-[40px] lg:mb-[0]"
        />
        <div className="flex-grow lg:ml-[80px] w-full">
          <Tabs />
        </div>
      </div>
    </div>
  );
}
