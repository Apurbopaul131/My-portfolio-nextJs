"use client";
import { TProject } from "@/type";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectCardMotion = ({ project }: { project: TProject }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-5 overflow-hidden transition-all flex flex-col"
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Image
        src={project?.image}
        alt={project?.title}
        width={500}
        height={200}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="mt-4 flex-1 flex flex-col">
        <span className="text-sm text-gray-500">#{project?.category}</span>
        <h3 className="text-xl font-bold mt-1">
          {project.title.length > 30
            ? project.title.slice(0, 30) + "..."
            : project.title}
        </h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
          {project.description.length > 100
            ? project.description.slice(0, 100) + "..."
            : project.description}
          <Link
            href={`/projects/${project._id}`}
            className="text-blue-500  ml-1"
          >
            Read More
          </Link>
        </p>

        <div className="flex justify-between items-center mt-auto">
          <span className="text-sm text-gray-400">{project?.year}</span>
          <Link href={`/projects/${project._id}`}>
            <motion.button
              className="bg-orange-500 text-white px-4 py-2 rounded-full  hover:hover:bg-orange-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              View Details
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCardMotion;
