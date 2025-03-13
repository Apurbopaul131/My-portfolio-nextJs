import Navbar from "@/components/shered/Navbar";
import { authOptions } from "@/uitls/authOptions";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Roboto } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apurbo's Portfolio",
  description:
    "I am professional web developer. I love to learn new technology everyday.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar session={session} />
        <div className="min-h-screen mt-20">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
