"use server";

import { revalidatePath } from "next/cache";

export const createContactMessage = async (formData: FormData) => {
  const formObject = Object.fromEntries(formData);

  const res = await fetch(`${process.env.PROJECT_URL}/api/dashboard/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formObject),
  });
  const result = await res.json();
  if (result) {
    revalidatePath("/(admin)/dashboard", "layout");
  }
  return result;
};
