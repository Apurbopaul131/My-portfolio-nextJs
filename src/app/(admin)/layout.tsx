"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineFileText, AiOutlineProject } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white p-5 transition-all duration-300 ${
          isSidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-xl mb-6"
        >
          <FaBars />
        </button>
        <nav className="space-y-4">
          <Link
            href="/dashboard"
            className={`flex items-center space-x-2 p-2 rounded hover:bg-gray-700 ${
              pathname === "/dashboard" && "bg-orange-500"
            }`}
          >
            <HiHome />
            {isSidebarOpen && <span>Dashboard</span>}
          </Link>
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
                <Link
                  href="/dashboard/projects"
                  className={`block p-2 rounded hover:bg-gray-700 ${
                    pathname === "/dashboard/projects" && "bg-orange-500"
                  }`}
                >
                  All Projects
                </Link>
                <Link
                  href="/dashboard/create-project"
                  className={`block p-2 rounded hover:bg-gray-700 ${
                    pathname === "/dashboard/create-project" && "bg-orange-500"
                  }`}
                >
                  Add New Project
                </Link>
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
                <Link
                  href="/dashboard/blogs"
                  className={`block p-2 rounded hover:bg-gray-700 ${
                    pathname === "/dashboard/blogs" && "bg-orange-500"
                  }`}
                >
                  All Blogs
                </Link>
                <Link
                  href="/dashboard/create-blog"
                  className={`block p-2 rounded hover:bg-gray-700 ${
                    pathname === "/dashboard/create-blog" && "bg-orange-500"
                  }`}
                >
                  Add New Blog
                </Link>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => setIsMessageOpen(!isMessageOpen)}
              className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-700"
            >
              <div className="flex items-center space-x-2">
                <AiOutlineProject />
                {isSidebarOpen && <span>M. Management</span>}
              </div>
              {isSidebarOpen && (
                <IoIosArrowDown
                  className={`${
                    isMessageOpen ? "rotate-180" : ""
                  } transition-transform`}
                />
              )}
            </button>
            {isMessageOpen && isSidebarOpen && (
              <div className="ml-6 space-y-2">
                <Link
                  href="/dashboard/view-messages"
                  className={`block p-2 rounded hover:bg-gray-700 ${
                    pathname === "/dashboard/view-messages" && "bg-orange-500"
                  }`}
                >
                  View Messages
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6 overflow-auto">{children}</div>
    </div>
  );
}
