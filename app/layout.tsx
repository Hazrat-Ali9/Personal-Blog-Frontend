import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";
// Layout tsx
export const dynamic = "force-dynamic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Hazrat Ali - Blogs Website",
  description:
    "Hazrat Ali is a platform for aspiring problem solvers and developers to sharpen their coding skills.",
  openGraph: {
    title: "Hazrat Ali - Blogs Website",
    description:
      "Join Hazrat Ali  - Blogs Website to improve your problem-Solving skills and coding expertise.",
    images: [
      {
        url: "/images/hazrat-ali.png", // Ensure this file exists in the `public/` folder
        width: 100,
        height: 100,
        alt: "Hazrat Ali Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hazrat Ali - Blogs Website",
    description:
      "Join Hazrat Ali - Blogs Website to improve your problem-Solving skills and coding expertise.",
    images: [
      {
        url: "/images/hazrat-ali.png", // Ensure this file exists in the `public/` folder
        width: 100,
        height: 100,
        alt: "Hazrat Ali Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Navbar />
        <Toaster />
        <div className="min-h-[82vh]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
