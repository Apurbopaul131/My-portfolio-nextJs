/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { createContactMessage } from "@/actions/createContactMessage";
import { motion } from "framer-motion";
import Link from "next/link";
import { startTransition } from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { toast } from "sonner";

const containerVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const fieldVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

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
    <motion.div
      className="min-h-screen bg-gray-100 grid items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariant}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto p-4">
        <motion.div className="space-y-2" variants={fieldVariant}>
          <h3 className="text-2xl font-bold text-blue-500">
            DO YOU HAVE A PROJECT TO DISCUSS?
          </h3>
          <h6 className="text-2xl">GET IN TOUCH</h6>
          <div className="flex gap-6 md:gap-12">
            <div className="space-y-2">
              <p className="text-xl">Contact</p>
              <p>apurbopaul131@gmail.com</p>
            </div>
            <div className="space-y-2">
              <p className="text-xl">Social Media</p>
              <div className="flex space-x-6">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://www.instagram.com/apurbopaul131gmail"
                    target="_blank"
                  >
                    <FaInstagram className="w-6 h-6 text-gray-700 hover:text-pink-500 transition" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://www.facebook.com/ratr.tr.9"
                    target="_blank"
                  >
                    <FaFacebook className="w-6 h-6 text-gray-700 hover:text-blue-400 transition" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://www.linkedin.com/in/apurbo-paul-633884191"
                    target="_blank"
                  >
                    <FaLinkedinIn className="w-6 h-6 text-gray-700 hover:text-blue-700 transition" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="space-y-2" variants={fieldVariant}>
          <h3 className="text-2xl">CONTACT FORM</h3>
          <motion.form
            action={onCreateMessageSubmit}
            className="space-y-4 w-full"
            variants={containerVariant}
          >
            <motion.div variants={fieldVariant}>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </motion.div>
            <motion.div variants={fieldVariant}>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </motion.div>
            <motion.div variants={fieldVariant}>
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={4}
                required
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactForm;
