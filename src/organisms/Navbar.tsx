import { useState, useEffect } from "react";
import { Hamburger } from "@/atoms";
import { NavbarMenu } from "@/molecules";
import logo from "@/assets/isholaG.svg";
import logoD from "@/assets/isholaW.svg";
import logoP from "@/assets/isholaP.svg";
import { useAppSelector } from "@/shared/hooks";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isNavMenuOpened, setIsNavMenuOpened] = useState(false);
  const { theme } = useAppSelector((state) => state.theme);
  const [smallScreen, setSmallScreen] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="bg-[#4732D3] dark:bg-transparent w-full flex justify-between items-center py-12 px-6 sm:px-10 md:px-20">
        <img
          className="w-20 md:w-24 relative z-[150]"
          src={
            theme === "dark"
              ? logoD
              : theme === "light" && isNavMenuOpened && smallScreen
                ? logoP
                : logo
          }
          alt="logo"
        />
        <Hamburger
          isNavMenuOpened={isNavMenuOpened}
          setIsNavMenuOpened={setIsNavMenuOpened}
        />
      </div>
      <AnimatePresence>
        {isNavMenuOpened && (
          <NavbarMenu
            menuOpen={isNavMenuOpened}
            setMenuOpen={setIsNavMenuOpened}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
