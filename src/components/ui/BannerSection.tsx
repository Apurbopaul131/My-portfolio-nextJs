"use client";
import profileImage from "@/assets/profile.jpg";
import { motion } from "framer-motion";
import { DownloadIcon, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

function BannerSection() {
  return (
    <section className="relative lg:py-20 py-14 px-4 dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e] text-black dark:text-white mt-[45px] lg:mt-[65px] overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-blue-300 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse top-[-100px] left-[-100px] z-0" />
      <div className="absolute w-[400px] h-[400px] bg-orange-300 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-ping top-[300px] right-[-120px] z-0" />

      <div className="grid grid-cols-1 md:container  mx-auto px-4 sm:grid-cols-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="col-span-8  place-self-center text-center sm:text-left justify-self-start"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-5 lg:leading-tight font-extrabold"
          >
            <span className="text-transparent text-4xl sm:text-4xl lg:text-5xl bg-clip-text bg-gradient-to-br from-orange-300 to-orange-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Apurbo",
                2500,
                "A Professional",
                300,
                "MERN Stack",
                500,
                "Web Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-3xl sm:text-3xl lg:text-4xl"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base mb-6 lg:w-[650px] text-justify"
          >
            MERN Stack Developer with expertise in TypeScript, Node.js,
            Express.js, React.js, Redux, MongoDB and Mongoose, dedicated to
            building full-stack web apps with clean code, scalable backend and
            continuous learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-6"
          >
            {/* Preview Resume */}
            <Link
              href={"/projects"}
              className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Eye
                size={20}
                className="transition-transform duration-300 group-hover:rotate-6"
              />
              <span className="font-medium">Explore Works</span>
            </Link>

            {/* Download Resume */}
            <a
              href="https://drive.google.com/file/d/1_Fg7OXwGJwlEXYz2vf0nBp-C2swM4_yl/view?usp=sharing"
              download
              className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-orange-500 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <DownloadIcon
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
              <span className="font-medium">Download Resume</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="rounded-full bg-gradient-to-br from-blue-500 via-orange-500 to-orange-500 dark:bg-gray-800 w-[250px] h-[250px] lg:w-[357px] lg:h-[357px] relative col-span-4 place-self-center mt-4 lg:mt-0 hidden lg:block shadow-xl"
        >
          <Image
            src={profileImage}
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
            width={350}
            height={350}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

export default BannerSection;
