"use client";

import { TProject } from "@/type";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectDetailsCard = ({ project }: { project: TProject }) => {
  return (
    <motion.div
      className="container bg-white mx-auto py-6 md:py-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-4 shadow-lg rounded-lg px-4 py-4">
        <div className="relative w-full h-56 md:h-72 rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="mt-5">
          <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
          <p className="text-sm text-gray-500">
            {project.category} | {project.year}
          </p>
          <p className="text-gray-700 mt-3">
            <span className="font-bold">Description:</span>{" "}
            {project.description}
          </p>
          <p className="text-gray-700 mt-3">
            <span className="font-bold">Future Work:</span>{" "}
            {project.futureScope}
          </p>
          <p className="text-gray-700 mt-3">
            <span className="font-bold">Challenges</span> {project.challenges}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <p className="bg-blue-100 text-blue-600 px-3 py-1 text-sm rounded-lg">
              {project.technologies}
            </p>
          </div>

          <div className="mt-5 flex flex-col md:flex-row gap-2 items-center justify-between">
            <p className="text-sm text-gray-500">By {project.author}</p>
            <div className="flex gap-3">
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Live Demo <FaExternalLinkAlt />
              </motion.a>
              <motion.a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub <FaGithub />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetailsCard;
