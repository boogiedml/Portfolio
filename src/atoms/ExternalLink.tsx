import type { MouseEventHandler } from "react";

interface ExternalLinkProps {
  text: string;
  link?: string;
  onClick?: MouseEventHandler<HTMLSpanElement>;
}

const ExternalLink = ({ text, link, onClick }: ExternalLinkProps) => {
  return (
    <span
      onClick={onClick}
      className="w-fit hover:transform hover:-translate-x-2 transition-all duration-300 cursor-pointer"
    >
      <a
        className="text base md:text-md xl:text-lg font-[400] text-[#CCF381] dark:text-[#9A9A9A] font-outfit"
        href={link}
      >
        {text}
      </a>
    </span>
  );
};

export default ExternalLink;
