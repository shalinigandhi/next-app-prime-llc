import Heading from "./Heading";
import Tabs from "./Tabs";
export default function PlatformAdvantages() {
  return (
    <div className="container relative">
      <Heading
        text="ADVANTAGES OF THE PLATFORM"
        highlightWidth="md:w-[162px] w-[55px]"
      />
      <div className="flex justify-between mt-[150px]">
        <img
          src="/images/business-meeting.svg"
          className="w-[614px] h-[397px] rounded-[25px] border-[6px] border-white"
        />
        <div className="flex-grow ml-[80px]">
          <Tabs />
        </div>
      </div>
    </div>
  );
}
