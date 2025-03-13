import ProjectDetailsCard from "@/components/ui/ProjectDetailsCard";
import { TProject } from "@/type";

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.PROJECT_URL}/api/projects`);
  const { data: projects } = await res.json();

  return (projects as TProject[])?.map((project) => ({
    id: project?._id,
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await fetch(`${process.env.PROJECT_URL}/api/projects/${id}`);
  const { data: project } = await res.json();
  return {
    title: project?.title,
    description: project?.description,
  };
};
const projectPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const res = await fetch(`${process.env.PROJECT_URL}/api/projects/${id}`);
  const { data: project } = await res.json();
  return (
    <div className="w-[90%] mx-auto">
      <ProjectDetailsCard project={project} />
    </div>
  );
};

export default projectPage;
