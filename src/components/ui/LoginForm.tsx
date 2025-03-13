"use client";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
const LoginForm = () => {
  return (
    <div className="w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] mx-auto h-auto bg-white shadow-sm rounded-lg p-6">
      <p className="text-center font-bold text-2xl mb-6">Login</p>
      <form className="flex flex-col gap-4 mb-4">
        <input
          type="email"
          className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="Email"
        />
        <input
          type="password"
          className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="Password"
        />
        <p className="text-right text-sm text-gray-500 underline cursor-pointer hover:text-black">
          Forgot Password?
        </p>
        <button className="w-full p-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 active:shadow-none">
          Log in
        </button>
      </form>
      <p className="text-center text-xs text-gray-500">
        Do not have an account?{" "}
        <span className="text-blue-500 font-bold underline cursor-pointer">
          Sign up
        </span>
      </p>
      <div className="flex flex-col gap-4 mt-6">
        <button
          onClick={() =>
            signIn("github", {
              callbackUrl:
                "https://my-portfolio-nextjs-azure.vercel.app/dashboard",
            })
          }
          className="flex items-center justify-center p-3 border border-gray-500 rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
        >
          <FaGithub />
          <span className="ml-2 text-sm font-medium">Log in with GitHub</span>
        </button>
        <button
          onClick={() =>
            signIn("google", {
              callbackUrl:
                "https://my-portfolio-nextjs-azure.vercel.app/dashboard",
            })
          }
          className="flex items-center justify-center p-3 border border-gray-500 rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
        >
          <FaGoogle />
          <span className="ml-2 text-sm font-medium">Log in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
