import { TProject } from "@/type";
import { authOptions } from "@/uitls/authOptions";
import { getServerSession } from "next-auth";
import ProjectTableRow from "./ProjectTableRow";

const ProjectTablecontainer = async () => {
  const session = await getServerSession(authOptions);
  const res = await fetch(
    `${process.env.PROJECT_URL}/api/dashboard/projects/user-specific/${session?.user?.email}`
  );
  const projects = await res.json();

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 border-b">Image</th>
            <th className="p-3 border-b">Title</th>
            <th className="p-3 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {projects?.data?.length &&
            projects?.data?.map((project: TProject) => (
              <ProjectTableRow key={project._id} project={project} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTablecontainer;
