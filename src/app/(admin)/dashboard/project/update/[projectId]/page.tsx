import ProjectForm from "@/components/ui/ProjectForm";

const ProjectUpdatePage = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;
  const res = await fetch(
    `${process.env.PROJECT_URL}/api/projects/${projectId}`
  );
  const projectData = await res.json();
  return (
    <div>
      <ProjectForm project={projectData?.data} />
    </div>
  );
};

export default ProjectUpdatePage;
