import { CopyRight, ExternalLink, InternalLink } from "@/atoms";
import { useLocation } from "react-router-dom";
import resumePDF from "@/assets/01SherifdeenIsholaResume.pdf";

const Footer = () => {
  const location = useLocation();
  const handleResumeView = () => {
    window.open(resumePDF, "_blank");
  };

  return (
    <section className="bg-[#3D155F] dark:bg-transparent">
      <div className="py-4 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-36">
        <hr className="hidden dark:block border-t-0 border-l-0 border-r-0 border-b-[1.5px] border-[#242424]" />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-end gap-20 sm:gap-40 md:gap-56 mx-4 sm:mx-8 md:mx-8]16 lg:mx-24 xl:mx-36 my-28">
        <div className="flex flex-col gap-6 w-fit">
          <h4 className="text-[#cbc9e2] dark:text-[#CCF381] text base md:text-md xl:text-lg leading-10 tracking-[0.25em] font-light">
            SAY HELLO
          </h4>
          <ExternalLink
            text="hello@boogiedml.dev"
            link="mailto:isholasherifdeen@gmail.com"
          />
          <ExternalLink
            text="t.me/boogiedml"
            link="https://t.me/boogiedml"
          />
        </div>
        <div className="h-fit flex flex-col gap-6">
          {location.pathname === "/" ? (
            <InternalLink text="My Work" link="/work/" />
          ) : (
            <InternalLink text="Home" link="/" />
          )}
          <ExternalLink text="My Résumé" onClick={handleResumeView} />
        </div>
      </div>
      <div className="py-4 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-36">
        <hr className="border-t-0 border-l-0 border-r-0 border-b-[0.5px] dark:border-b-[1.5px] border-[#CCF381] dark:border-[#242424]" />
      </div>
      <div className="py-4 mx-4 sm:mx-8 md:mx-8]16 lg:mx-24 xl:mx-36 flex flex-col-reverse md:flex-row justify-between">
        <CopyRight />
      </div>
    </section>
  );
};

export default Footer;
