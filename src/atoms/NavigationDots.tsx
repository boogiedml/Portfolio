interface NavigationDotsProps {
  active: string;
}

const NavigationDots = ({ active }: NavigationDotsProps) => (
  <div className="hidden absolute bottom-32 right-8 lg:right-12 xl:right-16 md:flex flex-col gap-4 justify-center items-center">
    {["boogiedml", "about", "skills", "projects", "contact"].map(
      (item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className={`${
            active === item
              ? "w-4 h-4 bg-green-900 rotate-0"
              : "w-2 h-2 bg-red-500 rotate-45"
          } transition-all duration-500`}
        />
      )
    )}
  </div>
);

export default NavigationDots;
