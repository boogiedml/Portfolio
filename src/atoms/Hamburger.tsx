interface HamburgerProps {
  color?: string;
  isNavMenuOpened: boolean;
  setIsNavMenuOpened: (open: boolean) => void;
}

const Hamburger = ({
  color,
  isNavMenuOpened,
  setIsNavMenuOpened,
}: HamburgerProps) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setIsNavMenuOpened(!isNavMenuOpened);
      }}
      className={`w-10 h-3.5 cursor-pointer z-[150] ${
        isNavMenuOpened
          ? "opened fixed top-[3.19rem] right-5 sm:right-10 md:top-14 md:right-20"
          : "relative"
      }`}
    >
      <span
        className={`bar bar1 ${
          isNavMenuOpened
            ? "bg-[#4732d3]"
            : color && !isNavMenuOpened
              ? color
              : "bg-[#CCF381]"
        } dark:bg-white`}
      ></span>
      <span className="bar bar-space"></span>
      <span
        className={`bar bar2 ${
          isNavMenuOpened
            ? "bg-[#4732d3]"
            : color && !isNavMenuOpened
              ? color
              : "bg-[#CCF381]"
        } dark:bg-white`}
      ></span>
    </div>
  );
};

export default Hamburger;
