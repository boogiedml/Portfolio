import type { ReactNode } from "react";
import { SocialMedia } from "@/molecules";

interface SectionTemplateProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const SectionTemplate = ({
  id,
  className = "",
  children,
}: SectionTemplateProps) => {
  const lightBgColor =
    id === "boogiedml" || id === "skills"
      ? "bg-[#4732D3]"
      : id === "about" || id === "contact"
        ? "bg-[#F9F9F9]"
        : "";

  return (
    <div
      id={id}
      className={`w-full relative ${lightBgColor} dark:bg-transparent ${className}`}
    >
      <SocialMedia idName={id} />
      <div
        className={`${
          id === "boogiedml" ? "py-12" : "py-16"
        } px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36`}
      >
        {children}
      </div>
    </div>
  );
};

export default SectionTemplate;
