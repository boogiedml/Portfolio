interface SectionHeaderProps {
  sectionTitle: string;
  idName: string;
  styles?: string;
}

const SectionHeader = ({
  sectionTitle,
  idName,
  styles = "",
}: SectionHeaderProps) => {
  const textColor =
    idName === "about" || idName === "contact"
      ? "from-[#4732D3] to-[#4732D3]"
      : idName === "skills"
        ? "from-[#CCF381] to-[#CCF381]"
        : "";

  return (
    <div className="header mb-4 text-center cursor-default">
      <h3
        className={`text-xl md:text-2xl lg:text-3xl max-w-fit mx-auto font-grotesk font-normal leading-tight bg-gradient-to-r ${textColor} dark:from-[#9A9A9A] dark:to-zinc-700 bg-clip-text text-transparent ${styles}`}
      >
        {sectionTitle}
      </h3>
    </div>
  );
};

export default SectionHeader;
