import { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = (hours % 12 || 12).toString().padStart(2, "0");

      setCurrentTime(`${formattedHours}:${minutes} ${ampm}`);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="w-[150px] fixed z-40 -rotate-90 top-1/2 -right-14 transform -translate-y-1/2 bg-[#CCF381] border-[#4732D3] text-[#4732D3] dark:bg-[#1A1A1A] dark:text-[#9A9A9A] border-[1px] dark:border-[#242424] py-3 cursor-default">
      <div className="w-fit flex items-center gap-3 mx-auto">
        <div className="font-outfit text-sm">{currentTime}</div>
      </div>
    </main>
  );
};

export default Clock;
