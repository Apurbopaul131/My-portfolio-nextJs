import SingleProject from "@/components/ui/SingleProject";

const projects = [
  {
    id: 1,
    title: "Designing Dashboards",
    year: "2020",
    category: "Frontend",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    image:
      "https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Web-Development-Projects-1-800x391.png",
  },
  {
    id: 2,
    title: "Vibrant Portraits of 2020",
    year: "2018",
    category: "Backend",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    image:
      "https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Web-Development-Projects-1-800x391.png",
  },
  {
    id: 3,
    title: "36 Days of Malayalam type",
    year: "2018",
    category: "Fullstack",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    image:
      "https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Web-Development-Projects-1-800x391.png",
  },
];

const ProjectContainer = () => {
  return (
    <div className="container mx-auto p-4 py-12 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Works</h2>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <SingleProject key={index} project={project} />
        ))}
      </div>
    </div>
  );
};
export default ProjectContainer;
