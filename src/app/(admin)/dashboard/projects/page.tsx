import ProjectTablecontainer from "@/components/ui/ProjectTableContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Projects",
  description: "This is admin all project route route",
};
const AllProjectPage = () => {
  return (
    <div>
      <ProjectTablecontainer />
    </div>
  );
};

export default AllProjectPage;
