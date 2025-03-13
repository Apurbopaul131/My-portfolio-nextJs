/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { createBlog } from "@/actions/createBlog";
import { updateBlog } from "@/actions/updateBlog";
import { TBlog } from "@/type";
import { startTransition } from "react";
import { toast } from "sonner";

const categories = [
  "Web Development",
  "Mobile App Development",
  "Software Engineering & Best Practices",
  "Programming Languages",
  "Data Science & Machine Learning",
  "Cloud Computing & DevOps",
  "Cybersecurity & Ethical Hacking",
  "Game Development",
  "Blockchain & Web3 Development",
  "Tech Trends & Career Growth",
];

const BlogForm = ({ blog }: { blog: TBlog | null }) => {
  const onCreateBlogSubmit = (formData: FormData) => {
    startTransition(async () => {
      try {
        const result = await createBlog(formData);
        toast.success("Blog created successfully.", {
          style: {
            color: "green",
          },
          position: "top-right",
        });
      } catch (error) {
        toast.error("Blog Created failed..", {
          style: {
            color: "red",
          },
          position: "top-right",
        });
      }
    });
  };
  const onUpadteBlogSubmit = (projectId: string, formData: FormData) => {
    startTransition(async () => {
      try {
        const result = await updateBlog(projectId, formData);
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

  const onUpdateBlogSubmitWithId = onUpadteBlogSubmit.bind(
    null,
    blog?._id as string
  );
  return (
    <div className="max-w-lg mx-auto p-6 rounded-lg">
      <form
        action={blog?._id ? onUpdateBlogSubmitWithId : onCreateBlogSubmit}
        className="space-y-6"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            defaultValue={blog?.title ? blog?.title : ""}
            type="text"
            name="title"
            placeholder="Title"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Author
          </label>
          <input
            defaultValue={blog?.blog_writter ? blog?.blog_writter : ""}
            type="text"
            placeholder="Author"
            name="blog_writter"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Total Likes
          </label>
          <input
            defaultValue={blog?.total_likes ? blog?.total_likes : ""}
            type="number"
            name="total_likes"
            placeholder="Likes"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <textarea
            name="content"
            required
            placeholder="Content"
            defaultValue={blog?.content ? blog?.content : ""}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="url"
            name="image"
            required
            placeholder="Image Url"
            defaultValue={blog?.image ? blog?.image : ""}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            name="category"
            required
            defaultValue={blog?.category && blog?.category}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            {blog?._id || <option value="">Select Category</option>}
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default BlogForm;
