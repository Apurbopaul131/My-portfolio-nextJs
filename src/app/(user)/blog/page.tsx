import BlogCard from "@/components/ui/BlogCard";
import { TBlog } from "@/type";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apurbo | Blogs",
  description: "This is blogs route",
};
const BlogsPage = async () => {
  const res = await fetch(`${process.env.PROJECT_URL}/api/blogs`, {
    cache: "no-cache",
  });
  const { data: blogs } = await res.json();
  return (
    <div className="container mx-auto px-4 flex flex-col items-center">
      <h1 className="text-center text-3xl font-bold my-8">All Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(blogs as TBlog[])?.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
