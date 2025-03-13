/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { deleteBlog } from "@/actions/deleteblog";
import { deleteProject } from "@/actions/deleteProject";
import { TBlog, TProject } from "@/type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
import { toast } from "sonner";

const ProjectTableRow = ({
  project,
  blog,
}: {
  project?: TProject;
  blog?: TBlog;
}) => {
  const router = useRouter();
  const onDeleteProjectSubmit = (projectId: string) => {
    startTransition(async () => {
      try {
        await deleteProject(projectId);
        toast.success("Project deleted successfully", {
          style: {
            color: "green",
          },
          position: "top-right",
        });
      } catch (error) {
        toast.error("Project deleted failed..", {
          style: {
            color: "red",
          },
          position: "top-right",
        });
      }
    });
  };

  const onDeleteBlogSubmit = (blogId: string) => {
    startTransition(async () => {
      try {
        await deleteBlog(blogId);
        toast.success("Blog deleted successfully", {
          style: {
            color: "green",
          },
          position: "top-right",
        });
      } catch (error) {
        toast.error("Blog deleted failed..", {
          style: {
            color: "red",
          },
          position: "top-right",
        });
      }
    });
  };
  const handleProjectUpdate = () => {
    const url = project
      ? `/dashboard/project/update/${project?._id}`
      : `/dashboard/blog/update/${blog?._id}`;
    router.push(url);
  };
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-3">
        <Image
          src={project ? (project?.image as string) : (blog?.image as string)}
          alt={project ? (project?.title as string) : (blog?.title as string)}
          width={50}
          height={50}
          className="rounded-md"
        />
      </td>
      <td className="p-3">{project ? project?.title : blog?.title}</td>
      <td className="p-3 flex flex-col md:flex-row gap-2">
        <button
          onClick={() =>
            project
              ? onDeleteProjectSubmit(project?._id as string)
              : onDeleteBlogSubmit(blog?._id as string)
          }
          className="p-2 md:px-4 md:py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
        >
          Delete
        </button>
        <button
          onClick={handleProjectUpdate}
          className="p-2 md:px-4 md:py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Update
        </button>
      </td>
    </tr>
  );
};

export default ProjectTableRow;
