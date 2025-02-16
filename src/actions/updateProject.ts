"use server";

import { revalidatePath } from "next/cache";

export const updateProject = async (projectId: string, formData: FormData) => {
  const formObject = Object.fromEntries(formData);

  const res = await fetch(
    `${process.env.PROJECT_URL}/api/dashboard/projects/${projectId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObject),
    }
  );
  const result = await res.json();
  if (result) {
    revalidatePath("/(admin)/dashboard", "layout");
  }
  return result;
};
