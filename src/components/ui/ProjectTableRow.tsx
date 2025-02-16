/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { deleteProject } from "@/actions/deleteProject";
import { TProject } from "@/type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
import { toast } from "sonner";

const ProjectTableRow = ({ project }: { project: TProject }) => {
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
  const handleProjectUpdate = () => {
    router.push(`/dashboard/project/update/${project?._id}`);
  };
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-3">
        <Image
          src={project.image}
          alt={project.title}
          width={50}
          height={50}
          className="rounded-md"
        />
      </td>
      <td className="p-3">{project.title}</td>
      <td className="p-3 flex flex-col md:flex-row gap-2">
        <button
          onClick={() => onDeleteProjectSubmit(project._id)}
          className="p-2 md:px-4 md:py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
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
