import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ToastProps {
  isVisible: boolean;
  onClose: () => void;
}

const Toast = ({ isVisible, onClose }: ToastProps) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isVisible && !isHovered) {
      const timeout = setTimeout(() => {
        onClose();
      }, 4000);

      return () => clearTimeout(timeout);
    }
  }, [isVisible, isHovered, onClose]);

  return (
    isVisible && (
      <motion.div
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 0.7 }}
        exit={{ x: 500, opacity: 0 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-full sm:w-[350px] fixed top-5 sm:right-5 z-[200] bg-[#4732D3] dark:bg-[#1A1A1A] text-[#CCF381] dark:text-white rounded-lg border-[1px] border-white dark:border-[#242424] px-6 py-5 pr-8 after:bg-[#CCF381] dark:after:bg-[#242424] after:absolute after:h-[80%] after:w-[2px] after:rounded after:left-1 after:top-[50%] after:-translate-y-[50%]"
      >
        <div className="flex gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            className="mt-1"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M6.66667 10.2778L8.71795 12.5L13.3333 7.5M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
              stroke="#CCF381"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <h5 className="font-grotesk text-base mb-4">Successful</h5>
            <p className="text-sm dark:text-[#9A9A9A]">
              Well received!. I&apos;ll get in touch ASAP
            </p>
          </div>
        </div>
        <button className="absolute top-3 right-3" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 20 20"
            fill="none"
            stroke="#CCF381"
          >
            <path
              d="M13.3882 7.49565C13.6323 7.25157 13.6323 6.85585 13.3882 6.61177C13.1441 6.36769 12.7484 6.36769 12.5043 6.61177L9.99999 9.1161L7.49566 6.61177C7.25158 6.36769 6.85585 6.36769 6.61178 6.61177C6.3677 6.85585 6.3677 7.25158 6.61178 7.49565L9.11611 9.99999L6.61177 12.5043C6.36769 12.7484 6.36769 13.1441 6.61177 13.3882C6.85585 13.6323 7.25158 13.6323 7.49565 13.3882L9.99999 10.8839L12.5043 13.3882C12.7484 13.6323 13.1441 13.6323 13.3882 13.3882C13.6323 13.1441 13.6323 12.7484 13.3882 12.5043L10.8839 9.99999L13.3882 7.49565Z"
              fill="#008000"
            />
          </svg>
        </button>
      </motion.div>
    )
  );
};

export default Toast;
