"use client";
import profileImage from "@/assets/profile.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-12 bg-white">
      {/* Left Side - Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-lg text-center md:text-left"
      >
        <p className="text-gray-600 text-sm">Hi, I am</p>
        <h2 className="text-xl font-bold text-orange-500">Apurbo Paul</h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight mt-3">
          MERN <span className="text-blue-500">Developer</span>
        </h1>
        <p className="text-gray-600 mt-3">
          A passionate MERN Stack Developer crafting full-stack web apps with
          clean code and responsive UI. I have recently completed my graduation
          in Computer Science and Engineering from Green University of
          Bangladesh.
        </p>
        <a href="/Apurbo-paul-cv.pdf" download="Apurbo-paul-cv.pdf">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition"
          >
            Hire Me
          </motion.button>
        </a>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mt-6 md:mt-0 relative"
      >
        <div className="rounded-full overflow-hidden border-4 border-gray-200">
          <Image
            src={profileImage}
            alt="Apurbo Paul"
            width={250}
            height={250}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
