"use client";
import { TBlog } from "@/type";
import Image from "next/image";
import Link from "next/link";

import { AiFillLike } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";

const BlogCard = ({ blog }: { blog: TBlog }) => {
  return (
    <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
      <figure>
        <Image
          src={blog?.image || ""}
          width={600}
          height={100}
          alt="blog image"
          className="rounded-t-lg h-64 object-cover"
        />
      </figure>
      <div className="p-6">
        <div className="flex justify-between">
          <p className="flex items-center justify-center text-blue-600 bg-blue-100 w-32 rounded-full py-1 text-sm">
            <FaCalendar className="mr-2" />
            {blog?.publish_date.split("T")[0]}
          </p>
          <div>
            <Link href={`/blog/${blog?._id}`}>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-full  hover:hover:bg-orange-600">
                View Details
              </button>
            </Link>
          </div>
        </div>
        <h2 className="text-xl font-bold mt-4">
          {blog.title.length > 30
            ? blog.title.slice(0, 30) + "..."
            : blog.title}
        </h2>
        <p className="text-gray-400 mt-2">
          {blog?.content?.length > 100
            ? blog?.content.slice(0, 60) + "..."
            : blog?.content}
          <Link href={`/blog/${blog?._id}`} className="text-blue-600 ml-1">
            Read More
          </Link>
        </p>
        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
                width={100}
                height={100}
                alt="author image"
                className="object-cover"
              />
            </div>
            <span className="text-sm font-medium text-gray-500">
              {blog?.blog_writter}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <AiFillLike className="text-blue-600 text-xl mr-1" />
            {blog?.total_likes} Likes
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
