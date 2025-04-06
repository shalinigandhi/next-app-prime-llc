import Heading from "./Heading";
import Tabs from "./Tabs";

export default function PlatformAdvantages() {
  const containerClasses = "container relative";
  const imageClasses =
    "w-full h-[219px] md:w-[520px] md:h-[340px] lg:w-[614px] lg:h-[397px] rounded-[25px] mb-[40px] lg:mb-[0]";
  const contentClasses =
    "flex-grow lg:ml-[80px] w-full md:max-w-[588px] lg:max-w-[100%]";
  const flexClasses =
    "flex flex-col lg:flex-row justify-between items-center lg:items-start lg:mt-[150px]";

  return (
    <div className={containerClasses}>
      <Heading
        text="ADVANTAGES OF THE PLATFORM"
        highlightWidth="md:w-[162px] w-[108px]"
        right="right-[108px] md:right-0"
      />
      <div className={flexClasses}>
        <img src="/images/business-meeting.svg" className={imageClasses} />
        <div className={contentClasses}>
          <Tabs />
        </div>
      </div>
    </div>
  );
}
