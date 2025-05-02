const skills = [
  "Strong teamwork and collaboration",
  "Analytical and problem-solving mindset",
  "Time management and task prioritization",
  "Adaptability to new tools and technologies",
  "Patience and attention to detail",
  "Critical thinking for technical decisions",
];
const AboutMe = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mt-10">About Me</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 mt-6">
        <div className="max-w-lg space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-blue-500">2020-2024</h3>
            <h3
              className="text-lg font-bold
            "
            >
              Bsc in CSE
            </h3>
          </div>
          <p>3.33 out of 4.00</p>
          <p>
            Green University is an educational institution that offers graduate,
            professional, and research programs.
          </p>
          <p>Green University,Dhaka,Bangladesh</p>
        </div>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
