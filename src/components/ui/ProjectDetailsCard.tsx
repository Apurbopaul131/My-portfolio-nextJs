"use client";

import { TProject } from "@/type";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectDetailsCard = ({ project }: { project: TProject }) => {
  console.log(project.features.split("#"));
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
            <span className="font-bold">Overview:</span> {project.description}
          </p>
          <div className="mt-3">
            <p className="text-gray-700 font-bold">Features:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-800 text-base">
              {project.features.split("#").map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
          <p className="text-gray-700 mt-3">
            <span className="font-bold">Future Work:</span>{" "}
            {project.futureScope}
          </p>
          <p className="text-gray-700 mt-3">
            <span className="font-bold">Challenges:</span> {project.challenges}
          </p>

          <div className="flex flex-wrap gap-3 mt-3 items-center">
            <p className="font-bold">Technology Used:</p>
            {project.technologies?.split(",").map((tech, idx) => (
              <div
                key={idx}
                className="px-2 py-1 text-center text-black border-2 rounded-md border-blue-500"
              >
                {tech}
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-col md:flex-row gap-2 items-center justify-between">
            <p className="text-sm text-gray-500">By {project.author}</p>
            <div className="flex gap-3">
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Live Demo <FaExternalLinkAlt />
              </motion.a>
              <motion.a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600"
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
