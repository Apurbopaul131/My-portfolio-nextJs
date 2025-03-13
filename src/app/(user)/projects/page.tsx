import ProjectCardMotion from "@/components/ui/ProjectCardMotion";
import { TProject } from "@/type";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apurbo | Projects",
  description: "This is projects route",
};
const ProjectsPage = async () => {
  const res = await fetch(`${process.env.PROJECT_URL}/api/projects`, {
    cache: "no-cache",
  });
  const { data: projects } = await res.json();
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-center text-3xl font-bold my-8">All projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(projects as TProject[])?.map((project, index) => (
          <ProjectCardMotion key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
