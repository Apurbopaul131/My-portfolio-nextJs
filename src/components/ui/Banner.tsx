import profileImage from "@/assets/profile.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-evenly p-6 md:p-12 bg-white">
      {/* Left Side - Text Content */}
      <div className="max-w-lg text-center md:text-left">
        <p className="text-gray-600 text-sm">Hi, I am</p>
        <h2 className="text-xl font-bold text-orange-500">Apurbo Paul</h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
          JS & REACT <span className="text-blue-500">Developer</span>
        </h1>
        <p className="text-gray-600 mt-3">
          I am professional web developer. I love to learn new technology
          everyday. I love to focus on my dateline and finished my work before
          dateline.
        </p>
        <button className="mt-4 bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition">
          Hire Me
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="mt-6 md:mt-0 relative">
        <div className=" rounded-full overflow-hidden border-4 border-gray-200">
          <Image
            src={profileImage} // Replace with your image URL
            alt="Apurbo Paul"
            width={250}
            height={250}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
