import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiAntdesign,
  SiBootstrap,
  SiDaisyui,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const skills = {
  frontend: [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-orange-500" />,
      projects: 5,
    },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, projects: 5 },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-teal-500" />,
      projects: 4,
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="text-purple-500" />,
      projects: 2,
    },
    {
      name: "DaisyUI",
      icon: <SiDaisyui className="text-green-500" />,
      projects: 3,
    },
    {
      name: "Ant Design",
      icon: <SiAntdesign className="text-red-500" />,
      projects: 2,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-500" />,
      projects: 6,
    },
    { name: "React", icon: <FaReact className="text-blue-400" />, projects: 6 },
    {
      name: "React Router",
      icon: <SiReact className="text-red-400" />,
      projects: 5,
    },
    {
      name: "Redux",
      icon: <SiRedux className="text-purple-600" />,
      projects: 3,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-600" />,
      projects: 2,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-black dark:text-white" />,
      projects: 2,
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500" />,
      projects: 5,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-500" />,
      projects: 5,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600" />,
      projects: 5,
    },
    {
      name: "Mongoose",
      icon: <SiMongoose className="text-red-600" />,
      projects: 4,
    },
  ],
  tools: [
    {
      name: "Firebase",
      icon: <SiFirebase className="text-yellow-500" />,
      projects: 3,
    },
    {
      name: "Payment System",
      icon: <SiStripe className="text-indigo-500" />,
      projects: 2,
    },
  ],
};

const SkillSection = () => {
  return (
    <div className="py-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4 capitalize">
              {category}
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
              {items.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center">
                  <div className="relative group inline-block">
                    <div className="text-4xl">{skill.icon}</div>

                    <div
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
              hidden group-hover:block
              bg-gray-800 text-white text-sm px-3 py-1 rounded 
              whitespace-nowrap z-10 shadow-lg"
                    >
                      {skill.projects}+ projects
                    </div>
                  </div>
                  <p className="text-sm mt-2">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
