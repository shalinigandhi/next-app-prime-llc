export default function Heading({ text, className = "", highlightWidth }) {
  return (
    <div className="flex justify-center items-center mt-[100px] mb-[60px]">
      <h2
        className={`font-extrabold text-[30px] leading-[100%] uppercase flex justify-center items-center relative inline-block ${className}`}
      >
        <span className="inline-block w-[14px] h-[14px] rounded-[3px] bg-[#C0D724] mr-[10px]"></span>
        {text}
        <span
          className={`absolute h-[5px] bg-[#C0D724] rounded-[19px] right-0 bottom-[-10px] ${highlightWidth}`}
        ></span>
      </h2>
    </div>
  );
}
