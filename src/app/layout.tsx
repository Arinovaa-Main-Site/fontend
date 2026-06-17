import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import logo from "@/assets/logo/Arinovaa.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arinovaa Labs",
  description: "Arinovaa is a cutting-edge AI-powered platform that revolutionizes the way businesses and individuals interact with technology. With its advanced natural language processing capabilities, Arinovaa enables seamless communication and enhances productivity across various domains. Whether you're looking to automate tasks, generate creative content, or gain insights from data, Arinovaa provides a powerful and intuitive solution to meet your needs.",
   icons: {
    icon: `${logo.src}`,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
