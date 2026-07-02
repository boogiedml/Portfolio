interface ProjectNameProps {
  name: string;
}

const ProjectName = ({ name }: ProjectNameProps) => {
  return (
    <h3 className="text-xl xl:text-2xl w-fit mx-auto font-semibold text-[#474747] dark:text-[#9A9A9A] dark:bg-gradient-to-r dark:from-[#9A9A9A] dark:to-zinc-700 dark:bg-clip-text dark:text-transparent mb-16">
      {name}
    </h3>
  );
};

export default ProjectName;
