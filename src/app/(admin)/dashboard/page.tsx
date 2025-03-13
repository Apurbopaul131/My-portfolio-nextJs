import DashboardBarChart from "@/components/ui/DashboardBarChart";
import Profile from "@/components/ui/Profile";
import ProjectTablecontainer from "@/components/ui/ProjectTableContainer";
import { authOptions } from "@/uitls/authOptions";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Apurbo | Dashboard",
  description: "This is admin dashboard route",
};
const page = async () => {
  const session = await getServerSession(authOptions);
  const projectsRes = await fetch(`${process.env.PROJECT_URL}/api/projects`);
  const { data: projects } = await projectsRes.json();

  const blogRes = await fetch(`${process.env.PROJECT_URL}/api/projects`);
  const { data: blogs } = await blogRes.json();

  const totalProject = projects.length;
  const totalBlog = blogs.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4">
      {/* Sidebar */}
      <Profile
        session={
          session?.user as { name: string; email: string; image: string }
        }
        totalBlog={totalBlog}
        totalProject={totalProject}
      />

      {/* Main Content */}
      <div className="md:col-span-3 lg:col-span-3 flex flex-col gap-4">
        <ProjectTablecontainer />
        <DashboardBarChart />
      </div>
    </div>
  );
};

export default page;
