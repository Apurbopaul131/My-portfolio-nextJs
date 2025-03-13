import BlogTableContainer from "@/components/ui/BlogTableContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apurbo | Create Blogs",
  description: "This is create blog route",
};
const BlogsPage = () => {
  return (
    <div>
      <BlogTableContainer />
    </div>
  );
};

export default BlogsPage;
