export default function GradientTextBlock({
  text,
  gradientClass,
  textClass,
  children,
}) {
  return (
    <div className={gradientClass}>
      <p className={textClass}>{text}</p>
      {children}
    </div>
  );
}
