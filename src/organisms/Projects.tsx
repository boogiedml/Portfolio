import { useAppSelector } from "@/shared/hooks";
import { SectionTemplate } from "@/templates";
import { ProjectCard } from "@/molecules";
import portfolioLogoD from "@/assets/isholaG.svg";
import portfolioLogo from "@/assets/isholaP.svg";
import arktively from "@/assets/Arktively.svg";
import posxenaDark from "@/assets/posxena-dark.svg";
import posxenaLight from "@/assets/posxena-light.svg";

const ProjectsContent = () => {
  const { theme } = useAppSelector((state) => state.theme);

  const projects = [
    {
      title: "My Portfolio",
      link: "http://boogiedml.onrender.com/",
      linkDisplay: "boogiedml.com",
      logoImg: theme === "dark" ? portfolioLogoD : portfolioLogo,
      detailPageLink: "http://boogiedml.onrender.com/",
    },
    {
      title: "Posxena",
      detailPageLink: "/work/posxena/",
      logoImg: theme === "dark" ? posxenaDark : posxenaLight,
    },
    {
      title: "Arktively",
      link: "https://arktively.com",
      linkDisplay: "arktively.com",
      logoImg: arktively,
      detailPageLink: "https://arktively.com",
    },
    {
      title: "Football Fury",
      link: "https://www.footballfury.net/",
      linkDisplay: "footballfury.net",
      logoWidth: "55%",
      logoImg: "https://www.footballfury.net/assets/Logo-D_Lo8f-d.svg",
      detailPageLink: "https://www.footballfury.net/",
    },
  ];

  return (
    <section className="relative p-2 mt-6 md:mt-10 lg:mt-16">
      <div className="header pb-5 text-[#474747] text-center cursor-default">
        <h3 className="text-2xl xl:text-3xl max-w-2xl mx-auto font-semibold dark:text-white mb-6">
          <span className="opacity-70">/</span>
          work
          <span className="opacity-70">.</span>
        </h3>
        <p className="text-base lg:text-lg xl:text-xl font-outfit font-[350]">
          Selected work I&apos;ve taken on in the past.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:my-20">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.title + i}
            title={p.title}
            link={p.link}
            linkDisplay={p.linkDisplay}
            logoImg={p.logoImg}
            logoWidth={p.logoWidth}
            detailPageLink={p.detailPageLink}
          />
        ))}
      </div>
    </section>
  );
};

const Projects = () => (
  <SectionTemplate id="projects" className="min-h-screen bg-[#f5f4fc]">
    <ProjectsContent />
  </SectionTemplate>
);

export default Projects;
