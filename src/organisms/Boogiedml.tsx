import { useAppSelector } from "@/shared/hooks";
import { ButtonLink } from "@/atoms";
import { SectionTemplate } from "@/templates";
import sherifdeen from "@/assets/sherifdeen.JPG";
import sherifdeenLight from "@/assets/sherifdeenLight.JPG";
import resumePDF from "@/assets/01SherifdeenIsholaResume.pdf";

const BoogiedmlContent = () => {
  const { theme } = useAppSelector((state) => state.theme);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "01SherifdeenIsholaResume.pdf";
    link.click();
  };

  return (
    <div className="relative flex flex-col gap-6 max-w-lg mx-auto my-0 md:my-8 text-center">
      <div className="mx-auto w-48 h-48 md:w-60 md:h-60">
        <img
          className="w-full rounded-full"
          src={theme === "dark" ? sherifdeen : sherifdeenLight}
          alt="Sherifdeen Ishola"
        />
      </div>
      <div>
        <p className="text-[#CCF381] dark:text-[#9A9A9A] md:hidden">
          Hi, I&apos;m Sherifdeen 👋🏾
        </p>
      </div>
      <div className="absolute hidden md:block -top-14 lg:-top-6 -left-32 lg:-left-64 w-72 lg:w-96 px-5 py-3 text-left font-outfit text-base bg-[#CCF381] border-[#CCF381] text-[#4732D3] dark:bg-[#1A1A1A] dark:text-[#9A9A9A] border-[1px] dark:border-[#242424]">
        <p>
          Sherifdeen Ishola Web Developer Based in Nigeria. A Software Developer
          with intermediate - level experience, specializing in{" "}
          <span className=" underline underline-offset-2 dark:decoration-transparent dark:text-white">
            user interface design
          </span>
          , application development, data security, and continuous improvement.
        </p>
      </div>
      <div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-outfit font-normal leading-tight bg-gradient-to-r from-[#CCF381] dark:from-[#9A9A9A] to-white dark:to-zinc-700 bg-clip-text text-transparent">
          Creating exceptional digital products, brands, and user experiences.
        </h3>
      </div>
      <div className=" mt-32 md:mt-4">
        <ButtonLink
          text="Download Resume"
          onClick={handleResumeDownload}
          styles="mx-auto bg-transparent border-[#CCF381] text-[#CCF381]"
        />
      </div>
    </div>
  );
};

const Boogiedml = () => (
  <SectionTemplate id="boogiedml">
    <BoogiedmlContent />
  </SectionTemplate>
);

export default Boogiedml;
