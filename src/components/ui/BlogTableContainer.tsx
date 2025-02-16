import { TBlog } from "@/type";
import { authOptions } from "@/uitls/authOptions";
import { getServerSession } from "next-auth";
import ProjectTableRow from "./ProjectTableRow";

const BlogTableContainer = async () => {
  const session = await getServerSession(authOptions);
  const res = await fetch(
    `${process.env.PROJECT_URL}/api/dashboard/blogs/user-specific/${session?.user?.email}`
  );
  const blogs = await res.json();

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
          {blogs?.data?.length &&
            blogs?.data?.map((blog: TBlog) => (
              <ProjectTableRow key={blog?._id} blog={blog} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogTableContainer;
