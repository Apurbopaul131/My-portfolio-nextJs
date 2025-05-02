import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="shadow-md mt-10 bg-gray-100 text-base-content">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 container mx-auto px-4 pt-12">
        <aside>
          <h3 className="font-bold text-xl">Apurbo Paul</h3>
          <p className="text-sm text-gray-500">
            A passionate web developer with a knack for <br /> creating stunning
            and functional websites. Let&apos;s build something amazing
            together!
          </p>
        </aside>
        <nav>
          <h6 className="font-bold text-xl">SENT MAIL</h6>
          <p>apurbopaul 131@gmail.com</p>
        </nav>
        <nav>
          <h6 className="font-bold text-xl">MAKE CALL</h6>
          <p>01917424643</p>
          <p>01793736293</p>
        </nav>
        <nav>
          <h6 className="font-bold text-xl">GET IN TOUCH</h6>
          <p>123A/shewrapara</p>
          <p>Dhaka,Bangladesh</p>
        </nav>
      </div>
      <div className="container mx-auto flex flex-col items-center space-y-4 mt-10">
        {/* Social Icons */}
        <div className="flex space-x-6">
          <Link
            href="https://www.instagram.com/apurbopaul131gmail"
            target="_blank"
          >
            <FaInstagram className="w-6 h-6 text-gray-700 hover:text-pink-500 transition" />
          </Link>
          <Link href="https://www.facebook.com/ratr.tr.9" target="_blank">
            <FaFacebook className="w-6 h-6 text-gray-700 hover:text-blue-400 transition" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/apurbo-paul-633884191"
            target="_blank"
          >
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
