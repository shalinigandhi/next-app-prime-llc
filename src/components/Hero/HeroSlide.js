export default function HeroSlide({ image, title, titleClass }) {
  return (
    <div className="relative w-full inline-block h-[300px] md:h-[716px]">
      <div className="w-full h-[285px] inline-block min-w-[calc(100vw-50px)] rounded-[20px] md:h-[716px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg md:rounded-[50px]"
        />
      </div>
      <div className={titleClass}>{title}</div>
    </div>
  );
}
