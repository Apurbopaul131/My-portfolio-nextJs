"use client";

import { useState } from "react";
import { AiOutlineFileText, AiOutlineProject } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

export default function DashboardSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  return (
    <div
      className={`bg-gray-800 text-white h-screen p-5 fixed ${
        isSidebarOpen ? "w-64" : "w-16"
      } transition-all duration-300`}
    >
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="text-xl mb-6"
      >
        <FaBars />
      </button>
      <nav className="space-y-4">
        <a
          href="#"
          className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700"
        >
          <HiHome />
          {isSidebarOpen && <span>Dashboard</span>}
        </a>
        <div>
          <button
            onClick={() => setIsProjectOpen(!isProjectOpen)}
            className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-700"
          >
            <div className="flex items-center space-x-2">
              <AiOutlineProject />
              {isSidebarOpen && <span>Project Management</span>}
            </div>
            {isSidebarOpen && (
              <IoIosArrowDown
                className={`${
                  isProjectOpen ? "rotate-180" : ""
                } transition-transform`}
              />
            )}
          </button>
          {isProjectOpen && isSidebarOpen && (
            <div className="ml-6 space-y-2">
              <a href="#" className="block p-2 rounded hover:bg-gray-700">
                All Projects
              </a>
              <a href="#" className="block p-2 rounded hover:bg-gray-700">
                Add New Project
              </a>
            </div>
          )}
        </div>
        <div>
          <button
            onClick={() => setIsBlogOpen(!isBlogOpen)}
            className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-700"
          >
            <div className="flex items-center space-x-2">
              <AiOutlineFileText />
              {isSidebarOpen && <span>Blog Management</span>}
            </div>
            {isSidebarOpen && (
              <IoIosArrowDown
                className={`${
                  isBlogOpen ? "rotate-180" : ""
                } transition-transform`}
              />
            )}
          </button>
          {isBlogOpen && isSidebarOpen && (
            <div className="ml-6 space-y-2">
              <a href="#" className="block p-2 rounded hover:bg-gray-700">
                All Blogs
              </a>
              <a href="#" className="block p-2 rounded hover:bg-gray-700">
                Add New Blog
              </a>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
