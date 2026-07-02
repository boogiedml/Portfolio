import { ThemeToggle, ButtonLink } from "@/atoms";

interface AppSettingsProps {
  onClose: () => void;
}

const AppSettings = ({ onClose }: AppSettingsProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 dark:bg-black bg-opacity-50 dark:bg-opacity-50 z-40">
      <div className="bg-[#CCF381] dark:bg-[#1A1A1A] text-[#4732D3] dark:text-[#9A9A9A] text-sm p-4 w-screen md:w-[350px] mx-3">
        <h5 className="text-sm md:text-base mb-3 tracking-[2px]">
          App setting
        </h5>
        <div className="flex justify-between items-center gap-5">
          <p className="text-xs md:text-sm">App mode</p>
          <ThemeToggle />
        </div>
        <ButtonLink
          onClick={onClose}
          text="Close setting"
          styles="py-1 md:py-[8px] px-2 md:px-4 mt-10 border-[#4732D3] hover:bg-[]"
        />
      </div>
    </div>
  );
};

export default AppSettings;
