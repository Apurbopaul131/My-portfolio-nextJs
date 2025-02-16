/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { createContactMessage } from "@/actions/createContactMessage";
import { startTransition } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const onCreateMessageSubmit = (formData: FormData) => {
    startTransition(async () => {
      try {
        await createContactMessage(formData);
        toast.success("Message sent successfully.", {
          style: {
            color: "green",
          },
          position: "top-right",
        });
      } catch (error) {
        toast.error("Message send failed..", {
          style: {
            color: "red",
          },
          position: "top-right",
        });
      }
    });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <form action={onCreateMessageSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
