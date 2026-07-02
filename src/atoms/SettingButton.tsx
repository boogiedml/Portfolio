import { openSetting } from "@/shared/store/features/appSettingSlice";
import { FiSettings } from "react-icons/fi";
import { useAppDispatch } from "@/shared/hooks";

interface SettingButtonProps {
  idName: string;
  styles?: string;
}

const SettingButton = ({ idName, styles = "" }: SettingButtonProps) => {
  const dispatch = useAppDispatch();
  return (
    <div
      onClick={() => dispatch(openSetting())}
      className={`absolute hidden md:block bottom-10 right-8 lg:right-12 xl:right-16 border-[2px] bg-transparent ${
        idName === "boogiedml" || idName === "skills"
          ? "text-[#CCF381] border-[#CCF381]"
          : idName === "about" || idName === "projects" || idName === "contact"
            ? "text-[#4732D3] border-[#4732D3]"
            : ""
      } dark:border-[#A1A3A5] dark:text-[#A1A3A5] p-2 rounded-full cursor-pointer text-lg hover:transform hover:rotate-90 transition-all duration-500 ${styles}`}
    >
      <FiSettings />
    </div>
  );
};

export default SettingButton;
