import BlogForm from "@/components/ui/BlogForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apurbo | Create Blog",
  description: "This is admin create blog route",
};
const CreateBlogPage = () => {
  return (
    <div>
      <BlogForm blog={null} />
    </div>
  );
};

export default CreateBlogPage;
