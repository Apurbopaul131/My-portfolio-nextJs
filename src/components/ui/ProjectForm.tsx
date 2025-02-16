/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { createProject } from "@/actions/createProject";
import { updateProject } from "@/actions/updateProject";
import { TProject } from "@/type";
import { startTransition } from "react";
import { toast } from "sonner";

const projectCategory = ["frontend", "backend", "fullstack"];
const ProjectForm = ({ project }: { project: TProject | null }) => {
  const onUpadteProjectSubmit = (projectId: string, formData: FormData) => {
    startTransition(async () => {
      try {
        const result = await updateProject(projectId, formData);
        toast.success(result?.message, {
          style: {
            color: "green",
          },
          position: "top-right",
        });
      } catch (error) {
        toast.error("Project updated failed..", {
          style: {
            color: "red",
          },
          position: "top-right",
        });
      }
    });
  };
  const onCreateProjectSubmit = (formData: FormData) => {
    startTransition(async () => {
      try {
        await createProject(formData);
        toast.success("Project create successfully.", {
          style: {
            color: "green",
          },
          position: "top-right",
        });
      } catch (error) {
        toast.error("Project Created failed..", {
          style: {
            color: "red",
          },
          position: "top-right",
        });
      }
    });
  };
  const onUpdateProjectSubmitWithId = onUpadteProjectSubmit.bind(
    null,
    project?._id as string
  );
  return (
    <div className="max-w-lg mx-auto p-6 rounded-lg">
      <h2 className="text-xl text-center font-semibold mb-4">
        Create New Project
      </h2>
      <form
        action={
          project?._id ? onUpdateProjectSubmitWithId : onCreateProjectSubmit
        }
        className="space-y-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          defaultValue={project?.title || ""}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="year"
          placeholder="Year"
          defaultValue={project?.year || ""}
          required
          className="w-full p-2 border rounded"
        />
        <select
          name="category"
          defaultValue={project?.category && project?.category}
          required
          className="w-full p-2 border rounded"
        >
          {project?._id || <option value="">Select Category</option>}
          {projectCategory.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <textarea
          name="description"
          placeholder="Description"
          defaultValue={project?.description || ""}
          required
          className="w-full p-2 border rounded"
        ></textarea>
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          defaultValue={project?.image || ""}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="url"
          name="liveLink"
          placeholder="Live Link"
          defaultValue={project?.liveLink || ""}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="url"
          name="repoLink"
          placeholder="Repo Link"
          defaultValue={project?.repoLink || ""}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="technologies"
          placeholder="Technologies (comma-separated)"
          defaultValue={project?.technologies || ""}
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {project?._id ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
