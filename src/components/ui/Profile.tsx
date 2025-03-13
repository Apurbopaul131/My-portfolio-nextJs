"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Profile = ({
  session,
  totalProject,
  totalBlog,
}: {
  session: { name: string; email: string; image: string };
  totalProject: number;
  totalBlog: number;
}) => {
  return (
    <div className="md:col-span-2 lg:col-span-2 bg-gray-900 text-white p-6 rounded-lg min-h-screen">
      <div className="flex flex-col items-center">
        <Image
          src={session?.image as string}
          width={80}
          height={80}
          alt="Picture of the author"
          className="mb-4 rounded-full"
        />
        <h4 className="text-white">{session?.name}</h4>
        <p className="text-gray-400">{session?.email}</p>
      </div>
      <div className="mt-6 bg-orange-300 p-4 rounded-lg">
        <p>Total Project:{totalProject}</p>
      </div>
      <div className="mt-4 bg-orange-300 p-4 rounded-lg">
        <p>Total Blog:{totalBlog}</p>
      </div>
      <Link href={"/"}>
        <button className="mt-6 rounded-lg block w-full p-4 bg-blue-500 text-white">
          Home
        </button>
      </Link>
      <button
        onClick={() => signOut()}
        className="mt-4 rounded-lg block w-full p-4 bg-orange-500 text-white"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
