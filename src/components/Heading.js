export default function Heading({
  text,
  className = "",
  highlightWidth,
  right,
}) {
  return (
    <div className="flex justify-center items-center md:mt-[100px] mt-[80px] md:mb-[60px] mb-[40px]">
      <h2
        className={`font-extrabold md:text-[30px] text-[20px] leading-[100%] uppercase flex justify-center items-center relative inline-block text-center ${className}`}
      >
        <span className="inline-block md:w-[14px] md:h-[14px] w-[10.5px] h-[10.5px] rounded-[3px] bg-[#C0D724] mr-[10px]"></span>
        {text}
        <span
          className={`absolute md:h-[5px] h-[2px] bg-[#C0D724] rounded-[19px] md:bottom-[-10px] bottom-[-5px] ${highlightWidth} ${right}`}
        ></span>
      </h2>
    </div>
  );
}
