import ProjectForm from "@/components/ui/ProjectForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apurbo | Create Project",
  description: "This is admin dashboard route",
};
const CreateProjectPage = () => {
  return (
    <div>
      <ProjectForm project={null} />
    </div>
  );
};

export default CreateProjectPage;
