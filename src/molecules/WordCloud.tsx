import { useAppSelector } from "@/shared/hooks";

const WordCloud = () => {
  const { theme } = useAppSelector((state) => state.theme);

  const skillClass =
    theme === "dark" ? "cloud_skill" : "cloud_skillLight";

  return (
    <div
      className="hidden lg:block"
      style={{ transform: "translate3d(0%, -298.141px, 0px)" }}
    >
      {[
        { label: "HTML5", className: "absolute -top-20 left-full text-[23px]" },
        { label: "SASS", className: "absolute -top-28 left-0 text-[25px]" },
        { label: "CSS3", className: "absolute top-16 right-full text-[14px]" },
        { label: "Redux", className: "absolute -top-28 left-1/3 text-[18px]" },
        { label: "Bootstrap", className: "absolute -top-24 right-1/4 text-[12px]" },
        { label: "MongoDB", className: "absolute -bottom-80 right-0 text-[18px]" },
        { label: "Git", className: "absolute -bottom-64 right-1/4 text-[18px]" },
        { label: "ES6", className: "absolute -bottom-72 left-40 text-[20px]" },
        { label: "EJS", className: "absolute top-0 left-1/4 text-[12px]" },
        { label: "Tailwind", className: "absolute -bottom-48 left-1/2 text-[16px]" },
      ].map(({ label, className }) => (
        <p
          key={label}
          className={`${skillClass} font-outfit ${className}`}
        >
          {label}
        </p>
      ))}
    </div>
  );
};

export default WordCloud;
