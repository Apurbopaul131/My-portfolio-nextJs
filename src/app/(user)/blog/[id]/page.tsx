import BlogDetailsCard from "@/components/ui/BlogDetailsCard";
import { TBlog } from "@/type";

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.PROJECT_URL}/api/blogs`);
  const { data: blogs } = await res.json();

  return (blogs as TBlog[])?.map((blog) => ({
    id: blog?._id,
  }));
};
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await fetch(`${process.env.PROJECT_URL}/api/blogs/${id}`);
  const { data: blog } = await res.json();
  return {
    title: blog?.title,
    description: blog?.content,
  };
};
const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const res = await fetch(`${process.env.PROJECT_URL}/api/blogs/${id}`);
  const { data: blog } = await res.json();
  return (
    <div className="w-[90%] mx-auto">
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default BlogPage;
