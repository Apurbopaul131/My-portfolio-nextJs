import BlogForm from "@/components/ui/BlogForm";

const BlogUpdatePage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const res = await fetch(`${process.env.PROJECT_URL}/api/blogs/${blogId}`);
  const blog = await res.json();
  return (
    <div>
      <BlogForm blog={blog?.data} />
    </div>
  );
};

export default BlogUpdatePage;
