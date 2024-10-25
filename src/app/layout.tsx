import Client from "@/components/client";
import Links from "@/components/links";
import { LoadingBar } from "@/lib/loading-bar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Next Loading Bar",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased px-4 text-lg`}>
        <LoadingBar color="#0284c7" waitingTime={200} />
        {children}
        <div className="mb-5" />
        <Links />
        <Client />
      </body>
    </html>
  );
}