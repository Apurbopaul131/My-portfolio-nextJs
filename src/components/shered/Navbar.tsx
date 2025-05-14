"use client";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// const navItems = [
//   {
//     name: "Home",
//     path: "/",
//   },
//   {
//     name: "Projects",
//     path: "/projects",
//   },
//   {
//     name: "Blogs",
//     path: "/blogs",
//   },
//   ,
//   {
//     name: "Contact Us",
//     path: "/contact",
//   },
//   {
//     name: "Dashboard",
//     path: "/dashboard",
//   },
//   {
//     name: "Login",
//     path: "/login",
//   },
// ];
export type TSessionProps = {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
};
const Navbar = ({ session }: { session: TSessionProps | null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  console.log(session);

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <span className="">Apurbo</span>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <li>
            <Link
              href="/"
              className={`hover:text-blue-600 ${
                pathname === "/" ? "underline text-orange-500" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`hover:text-blue-600 ${
                pathname === "/projects" ? "underline text-orange-500" : ""
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={`hover:text-blue-600 ${
                pathname === "/blog" && "underline text-orange-500"
              }`}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`hover:text-blue-600 ${
                pathname === "/contact" && "underline text-orange-500"
              }`}
            >
              Contact Us
            </Link>
          </li>
          {/* {session?.user && (
            <li>
              <Link
                href="/dashboard"
                className={`hover:text-blue-600 ${
                  pathname === "/dashboard" && "underline text-orange-500"
                }`}
              >
                Dashboard
              </Link>
            </li>
          )}
          {session?.user ? (
            <li onClick={() => signOut()}>
              <span className="hover:text-blue-600 cursor-pointer">Logout</span>
            </li>
          ) : (
            <li>
              <Link
                href="/login"
                className={`hover:text-blue-600 ${
                  pathname === "/dashboard" && "underline text-orange-500"
                }`}
              >
                Login
              </Link>
            </li>
          )} */}
        </ul>

        {/* Download CV Button */}
        <a href="/Apurbo-paul-cv.pdf" download="Apurbo-paul-cv.pdf">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
          >
            {" "}
            Download CV
          </motion.button>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md pb-3">
          <ul className="text-center text-gray-800">
            {/* {navItems.map((items, index) => (
              <li key={index}>
                <Link
                  href={`${items?.path}`}
                  className={`hover:text-blue-600 ${
                    pathname === items?.path && "underline text-orange-500"
                  }`}
                >
                  {items?.name}
                </Link>
              </li>
            ))} */}
            <li>
              <Link
                href="/"
                className={`hover:text-blue-600 ${
                  pathname === "/" ? "underline text-orange-500" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`hover:text-blue-600 ${
                  pathname === "/projects" ? "underline text-orange-500" : ""
                }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`hover:text-blue-600 ${
                  pathname === "/blog" && "underline text-orange-500"
                }`}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`hover:text-blue-600 ${
                  pathname === "/contact" && "underline text-orange-500"
                }`}
              >
                Contact Us
              </Link>
            </li>
            {/* {session?.user && (
              <li>
                <Link
                  href="/dashboard"
                  className={`hover:text-blue-600 ${
                    pathname === "/dashboard" && "underline text-orange-500"
                  }`}
                >
                  Dashboard
                </Link>
              </li>
            )}
            {session?.user ? (
              <li onClick={() => signOut()}>
                <span className="hover:text-blue-600 cursor-pointer">
                  Logout
                </span>
              </li>
            ) : (
              <li>
                <Link
                  href="/login"
                  className={`hover:text-blue-600 ${
                    pathname === "/dashboard" && "underline text-orange-500"
                  }`}
                >
                  Login
                </Link>
              </li>
            )} */}
          </ul>

          {/* <a href="/Apurbo-paul-cv.pdf" download="Apurbo-paul-cv.pdf">
            <button className="block w-[30%] mx-auto text-center bg-orange-500 text-white py-2 rounded-md mt-2 hover:bg-orange-600 transition">
              {" "}
              Download CV
            </button>
          </a> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
