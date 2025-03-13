import { TProject } from "@/type";
import Image from "next/image";
import Link from "next/link";

const SingleProject = ({ project }: { project: TProject }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 bg-white dark:bg-gray-800">
      <div className="w-full md:w-1/3">
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={200}
          className="rounded-lg"
        />
      </div>
      <div className="w-ful md:w-2/3">
        <h3 className="text-xl font-semibold">
          {project.title.length > 30
            ? project.title.slice(0, 30) + "..."
            : project.title}
        </h3>
        <div className="flex items-center gap-4 text-sm mt-2">
          <span className="text-blue-500 font-extrabold">{project.year}</span>
          <span className="text-blue-500 font-extrabold">
            {project.category}
          </span>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mt-3">
          {project.description.length > 100
            ? project.description.slice(0, 100) + "..."
            : project.description}
          <Link href={`/blogs/${project._id}`} className="text-blue-500  ml-1">
            Read More
          </Link>
        </p>
        <div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
