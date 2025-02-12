import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-white shadow-md p-6 mt-10">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        {/* Social Icons */}
        <div className="flex space-x-6">
          <Link href="https://facebook.com" target="_blank">
            <FaFacebookF className="w-6 h-6 text-gray-700 hover:text-blue-600 transition" />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <FaInstagram className="w-6 h-6 text-gray-700 hover:text-pink-500 transition" />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <FaTwitter className="w-6 h-6 text-gray-700 hover:text-blue-400 transition" />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <FaLinkedinIn className="w-6 h-6 text-gray-700 hover:text-blue-700 transition" />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600">© 2023 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
