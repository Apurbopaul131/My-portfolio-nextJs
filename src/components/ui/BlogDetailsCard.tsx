"use client";
import { TBlog } from "@/type";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiFillLike } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";

const BlogDetailsCard = ({ blog }: { blog: TBlog }) => {
  const match = blog?.publish_date?.match(/^(\d{4}-\d{2}-\d{2})/);

  return (
    <motion.div
      className="container bg-white mx-auto py-6 md:py-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-4 shadow-lg rounded-lg px-4 py-4">
        <motion.p
          className="flex items-center justify-center mx-auto text-blue-600 bg-blue-100 w-fit px-3 py-1 rounded-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <FaCalendar className="mr-2" />
          {match?.[1]}
        </motion.p>

        <motion.h2
          className="text-center text-4xl font-semibold my-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {blog?.title}
        </motion.h2>

        <motion.div
          className="flex items-center justify-center bg-blue-100 mb-5 py-2 rounded-lg gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
            width={30}
            height={30}
            alt="author image"
          />
          <span className="text-lg font-medium">{blog?.blog_writter}</span>
        </motion.div>

        <motion.figure
          className="mb-5"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Image
            src={blog?.image}
            width={600}
            height={100}
            alt="blog image"
            className="rounded-lg w-full object-cover"
          />
        </motion.figure>

        <motion.div
          className="text-gray-700 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <p className="text-justify text-gray-500">{blog?.content}</p>
        </motion.div>

        <motion.div
          className="flex justify-between items-center mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <motion.div
            className="flex items-center text-xl text-gray-600 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <AiFillLike className="text-blue-600 mr-2" />
            <span className="mr-1">{blog?.total_likes}</span>
            Likes
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogDetailsCard;
