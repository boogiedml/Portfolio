import type { ReactNode } from "react";
import { Nav } from "@/molecules";
import { Footer } from "@/organisms";

interface ProjectLayoutProps {
  children: ReactNode;
}

const ProjectLayout = ({ children }: ProjectLayoutProps) => {
  return (
    <div>
      <Nav />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default ProjectLayout;
