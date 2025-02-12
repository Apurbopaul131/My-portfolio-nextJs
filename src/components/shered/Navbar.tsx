"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
  {
    name: "Login",
    path: "/login",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <span className="ml-2">Apurbo</span>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-800 font-medium">
          {navItems.map(({ name, path }, index) => (
            <li key={index}>
              <Link href={`${path}`} className="hover:text-blue-600">
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Download CV Button */}
        <a
          href="/cv.pdf"
          className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
        >
          Download CV
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
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md">
          <ul className="flex flex-col text-center text-gray-800">
            {navItems.map(({ name, path }, index) => (
              <li key={index}>
                <Link href={`${path}`} className="hover:text-blue-600">
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href="/cv.pdf"
            className="block text-center bg-orange-500 text-white py-3 rounded-md mt-2 hover:bg-orange-600 transition"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
