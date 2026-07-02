import type { ReactNode, MouseEventHandler } from "react";

interface ButtonLinkProps {
  link?: string;
  text?: string;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  styles?: string;
}

const ButtonLink = ({
  link,
  text,
  icon,
  onClick,
  styles = "",
}: ButtonLinkProps) => {
  return (
    <a
      href={link}
      className={`flex items-center gap-5 w-fit font-outfit text-sm md:text-base dark:bg-[#1A1A1A] dark:text-[#9A9A9A] border-[1px] dark:border-[#242424] py-2 md:py-3 px-7 md:px-10 hover:transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 cursor-pointer ${styles}`}
      onClick={onClick}
    >
      {text} {icon}
    </a>
  );
};

export default ButtonLink;
