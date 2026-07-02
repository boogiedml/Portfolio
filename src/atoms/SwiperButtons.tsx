import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SwiperButtons = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };
    swiper.on("slideChange", handleSlideChange);
    swiper.on("reachEnd", () => {
      setIsEnd(true);
    });
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  return (
    <div className="w-full absolute top-[50%] -translate-y-[50%] flex item-center justify-between z-10">
      <button
        className={`${
          isBeginning ? "opacity-0" : "opacity-100"
        } ml-4 text-[#CCF381] bg-[#3D155F] dark:bg-[#1A1A1A] dark:text-[#9A9A9A] border-[1px] border-white hover:scale-110 transition-all duration-500 w-10 h-10 flex items-center justify-center rounded-full`}
        onClick={() => swiper.slidePrev()}
      >
        <IoIosArrowBack size={20} />
      </button>
      <button
        className={`${
          isEnd ? "opacity-0" : "opacity-100"
        } mr-4 text-[#CCF381] bg-[#3D155F] dark:bg-[#1A1A1A] dark:text-[#9A9A9A] border-[1px] border-white hover:scale-110 transition-all duration-500 w-10 h-10 flex items-center justify-center rounded-full`}
        onClick={() => swiper.slideNext()}
      >
        <IoIosArrowForward size={20} />
      </button>
    </div>
  );
};

export default SwiperButtons;
