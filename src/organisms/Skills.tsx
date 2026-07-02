import { useAppSelector } from "@/shared/hooks";
import { SectionTemplate } from "@/templates";
import { SectionHeader, WordCloud } from "@/molecules";
import { SkillImg } from "@/atoms";
import jsDark from "@/assets/javascript-dark.svg";
import js from "@/assets/javascript.svg";
import nodeDark from "@/assets/node-dark.svg";
import node from "@/assets/node.svg";
import reactDark from "@/assets/react-dark.svg";
import react from "@/assets/react.svg";
import htmlDark from "@/assets/html-dark.svg";
import html from "@/assets/html.svg";

const SkillsContent = () => {
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <section className="relative p-2 mt-6 md:mt-10 lg:mt-16">
      <SectionHeader sectionTitle="My Skillsets" idName="skills" />
      <div className="flex justify-around items-center my-32">
        <SkillImg src={theme === "dark" ? htmlDark : html} alt="HTML" />
        <SkillImg src={theme === "dark" ? jsDark : js} alt="JavaScript" />
        <SkillImg src={theme === "dark" ? reactDark : react} alt="React" />
        <SkillImg src={theme === "dark" ? nodeDark : node} alt="Node.js" />
      </div>
      <WordCloud />
    </section>
  );
};

const Skills = () => (
  <SectionTemplate id="skills" className="md:min-h-screen">
    <SkillsContent />
  </SectionTemplate>
);

export default Skills;
