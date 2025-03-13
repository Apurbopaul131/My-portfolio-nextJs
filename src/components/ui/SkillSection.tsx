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
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
    { name: "DaisyUI", icon: <SiDaisyui className="text-green-500" /> },
    { name: "Ant Design", icon: <SiAntdesign className="text-red-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "React Router", icon: <SiReact className="text-red-400" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-black dark:text-white" />,
    },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Mongoose", icon: <SiMongoose className="text-red-600" /> },
  ],
  tools: [
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "Payment System", icon: <SiStripe className="text-indigo-500" /> },
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
                  <div className="text-4xl">{skill.icon}</div>
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
