/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { createContactMessage } from "@/actions/createContactMessage";
import Link from "next/link";
import { startTransition } from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
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
    <div className="min-h-screen bg-gray-100 grid items-center">
      <div className="grid grid-cols-2 gap-4 container mx-auto px-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-blue-500">
            DO YOU HAVE A PROJECT TO DISSCUSS?
          </h3>
          <h6 className="text-2xl">GET IN TOUCH</h6>
          <div className="flex gap-12">
            <div className="space-y-2">
              <p className="text-xl">Contact</p>
              <p>apurbopaul131@gmail.com</p>
            </div>
            <div className="space-y-2">
              <p className="text-xl">Social Media</p>
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
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl">CONTACT FORM</h3>
          <form action={onCreateMessageSubmit} className="space-y-4 w-full">
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
    </div>
  );
};

export default ContactForm;
