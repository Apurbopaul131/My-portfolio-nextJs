import BlogCard from "@/components/ui/BlogCard";
import { TBlog } from "@/type";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

// const blogs = [
//   {
//     id: "2",
//     title: "Augmented Reality: Bridging the Digital and Physical Worlds",
//     description:
//       "Discover the transformative impact of augmented reality (AR) on various industries, from gaming and education to healthcare and manufacturing. Uncover the latest AR technologies, groundbreaking applications, and the future possibilities of this immersive tech.",
//     publish_date: "2025-03-02",
//     author_name: "Mir Hussain",
//     blog_image:
//       "https://media.licdn.com/dms/image/D4D12AQHvTniQX6OVlQ/article-cover_image-shrink_720_1280/0/1670407089131?e=2147483647&v=beta&t=p_20uM0MxufGmxjzczZz4HxCp9BbhLADoQmsWR4KD1I",
//     total_likes: "950",
//   },
//   {
//     id: "3",
//     title: "The Blockchain Revolution: Beyond Cryptocurrencies",
//     description:
//       "Explore the underlying technology of cryptocurrencies – blockchain – and its potential to revolutionize industries beyond finance. Delve into smart contracts, decentralized applications (DApps), and the growing adoption of blockchain in various sectors.",
//     publish_date: "2025-03-03",
//     author_name: "Fahim Ahammed Firoz",
//     blog_image:
//       "https://media.licdn.com/dms/image/D5612AQGeP6XjXfJCVA/article-cover_image-shrink_720_1280/0/1697003227988?e=2147483647&v=beta&t=_uW0A4JGrQK-AAT171YP-jMwxxRLWcDBM4rAZsHJfhI",
//     total_likes: "800",
//   },
//   {
//     id: "4",
//     title: "5G and the Future of Connectivity",
//     description:
//       "Uncover the promises and possibilities that 5G technology brings to the world. From lightning-fast internet speeds to enabling the Internet of Things (IoT), this blog explores the impact of 5G on communication, entertainment, and the connected future.",
//     publish_date: "2025-03-04",
//     author_name: "Mizanur Rahman",
//     blog_image:
//       "https://idsb.tmgrup.com.tr/ly/uploads/images/2020/10/23/67197.jpg",
//     total_likes: "1100",
//   },
//   {
//     id: "6",
//     title: "Cybersecurity in the Digital Age",
//     description:
//       "Navigate the evolving landscape of cybersecurity and the critical role it plays in safeguarding digital assets. From advanced threat detection to ethical hacking, this blog examines the strategies and technologies shaping the future of online security.",
//     publish_date: "2025-03-06",
//     author_name: "Mehedi Imun Anik",
//     blog_image:
//       "https://startnearshoring.com/wp-content/uploads/2023/07/The_Growing_Importance_of_Cybersecurity.jpg",
//     total_likes: "950",
//   },
//   {
//     id: "d66e",
//     title: "new Blog",
//     author_name: "Apubo Paul",
//     publish_date: "2025-02-13",
//     total_likes: "200",
//     blog_image:
//       "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fonline%2F&psig=AOvVaw0-j4-pCG551sBPjRdZAn6S&ust=1739169595477000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNDz0-H9tYsDFQAAAAAdAAAAABAI",
//     description: "abced abec",
//   },
// ];

const BlogsContainer = async () => {
  const res = await fetch(`${process.env.PROJECT_URL}/api/blogs`);
  const blogs = await res.json();

  return (
    <div className="text-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-8">My Blogs</h2>
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs?.data.length &&
          blogs?.data
            .slice(0, 3)
            .map((blog: TBlog) => <BlogCard key={blog?._id} blog={blog} />)}
      </div>
      <div className="mt-3 flex justify-center">
        <Link href={"/blog"}>
          <button className="bg-orange-500 flex gap-1 items-center text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">
            <span>See more</span>
            <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogsContainer;
