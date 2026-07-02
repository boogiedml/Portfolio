import { useEffect } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { darkMode, lightMode } from "@/shared/store/features/themeSlice";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";

interface ThemeToggleProps {
  styles?: string;
}

const ThemeToggle = ({ styles = "" }: ThemeToggleProps) => {
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggleTheme = () => {
    theme === "light" ? dispatch(darkMode()) : dispatch(lightMode());
  };

  return (
    <div
      onClick={handleToggleTheme}
      className={`${styles} cursor-pointer text-[#4732D3] dark:text-white hover:rotate-45 transition-all duration-500 transform`}
    >
      {theme === "dark" ? <HiSun size={23} /> : <HiMoon size={23} />}
    </div>
  );
};

export default ThemeToggle;
