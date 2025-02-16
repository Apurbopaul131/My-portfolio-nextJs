"use server";

import { authOptions } from "@/uitls/authOptions";
import { getServerSession } from "next-auth";

export const createProject = async (formData: FormData) => {
  const session = await getServerSession(authOptions);
  const formObject = Object.fromEntries(formData);
  const newFormObj = {
    ...formObject,
    author: session?.user?.email,
  };
  const res = await fetch(`${process.env.PROJECT_URL}/api/dashboard/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newFormObj),
  });
  await res.json();
};
