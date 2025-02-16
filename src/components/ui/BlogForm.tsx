/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { createBlog } from "@/actions/createBlog";
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

const BlogForm = () => {
  const onCreateBlogSubmit = (formData: FormData) => {
    startTransition(async () => {
      try {
        const result = await createBlog(formData);
        console.log(result);
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
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100">
      <form action={onCreateBlogSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
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
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select a category</option>
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
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default BlogForm;
