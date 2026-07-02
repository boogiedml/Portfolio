interface LinkProps {
  text: string;
  link: string;
}

const Link = ({ text, link }: LinkProps) => {
  return (
    <span className="w-fit hover:transform hover:-translate-x-2 transition-all duration-300">
      <a
        className="text base md:text-md xl:text-lg font-[400] text-[#CCF381] dark:text-[#9A9A9A] font-outfit"
        href={link}
      >
        {text}
      </a>
    </span>
  );
};

export default Link;
