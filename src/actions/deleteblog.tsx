"use server";

import { revalidatePath } from "next/cache";

export const deleteBlog = async (BlogId: string) => {
  const res = await fetch(
    `${process.env.PROJECT_URL}/api/dashboard/blogs/${BlogId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  if (data) {
    revalidatePath("/(admin)/dashboard", "layout");
  }
};
