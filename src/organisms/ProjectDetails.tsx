interface ProjectDetailsProps {
  paragraphArr?: string[];
}

const ProjectDetails = ({ paragraphArr }: ProjectDetailsProps) => {
  return (
    <div className="max-w-4xl mx-auto pt-8 pb-10">
      {paragraphArr?.map((paragraph, i) => (
        <p
          key={i}
          className="text-[#474747] dark:text-[#9A9A9A] text-lg leading-9 mb-5"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default ProjectDetails;
