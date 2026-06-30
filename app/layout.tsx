import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CS Prompts",
  description:
    "Discover viral AI image prompts, ChatGPT prompts, Midjourney prompts, anime prompts, cinematic prompts and more.",
  keywords: [
    "AI Prompts",
    "ChatGPT Prompts",
    "Image Prompts",
    "Midjourney",
    "AI Images",
    "CS Prompts",
  ],
  authors: [{ name: "CS Prompts" }],
  creator: "CS Prompts",
  verification: {
    google: "5AJIhIV7KmcrwUKKQRJlg4GfB1-evnWC5HwEzRfSC7A",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}