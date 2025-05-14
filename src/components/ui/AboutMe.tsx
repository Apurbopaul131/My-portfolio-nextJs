"use client";
import { motion } from "framer-motion";

const skills = [
  "Strong teamwork and collaboration",
  "Analytical and problem-solving mindset",
  "Time management and task prioritization",
  "Adaptability to new tools and technologies",
  "Patience and attention to detail",
  "Critical thinking for technical decisions",
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const AboutMe = () => {
  return (
    <motion.div
      className="container mx-auto px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
    >
      <motion.h2
        className="text-3xl font-bold text-center mt-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12 mt-6">
        <motion.div className="max-w-lg space-y-2" variants={itemVariants}>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-blue-500">2020–2024</h3>
            <h3 className="text-lg font-bold text-blue-500">BSc in CSE</h3>
          </div>
          <p>3.33 out of 4.00</p>
          <p>
            Green University is an educational institution that offers graduate,
            professional, and research programs.
          </p>
          <p>Green University, Dhaka, Bangladesh</p>
        </motion.div>

        <motion.ul
          className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.li key={index} variants={itemVariants}>
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default AboutMe;
