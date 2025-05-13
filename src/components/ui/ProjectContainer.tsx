import { TProject } from "@/type";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import ProjectCardMotion from "./ProjectCardMotion";

// const projects = [
//   {
//     id: 1,
//     title: "Designing Dashboards",
//     year: "2020",
//     category: "Frontend",
//     description:
//       "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
//     image:
//       "https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Web-Development-Projects-1-800x391.png",
//   },
//   {
//     id: 2,
//     title: "Vibrant Portraits of 2020",
//     year: "2018",
//     category: "Backend",
//     description:
//       "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
//     image:
//       "https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Web-Development-Projects-1-800x391.png",
//   },
//   {
//     id: 3,
//     title: "36 Days of Malayalam type",
//     year: "2018",
//     category: "Fullstack",
//     description:
//       "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
//     image:
//       "https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Web-Development-Projects-1-800x391.png",
//   },
// ];

const ProjectContainer = async () => {
  const res = await fetch(`${process.env.PROJECT_URL}/api/projects`, {
    next: { revalidate: 30 },
  });
  const { data: projects } = await res.json();
  return (
    <div className="container mx-auto px-4 py-12 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(projects as TProject[])?.slice(0, 3).map((project, index) => (
          <ProjectCardMotion key={index} project={project} />
        ))}
      </div>
      <div className="my-5 flex justify-center">
        <Link href={"/projects"}>
          <button className="bg-orange-500 flex gap-1 items-center text-white px-3 py-2 rounded-md hover:bg-orange-600 transition">
            <span>See more</span>
            <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ProjectContainer;
