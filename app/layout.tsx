"use client";

import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Chatbot } from "@/components/chatbot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Check if the current path is the reports page
  const isReportPage = pathname === "/reports";

  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-foreground flex flex-col min-h-screen antialiased font-sans">

        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="flex-grow w-full">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />

        {/* Floating Assistant - Hidden on /reports page */}
        {!isReportPage && <Chatbot />}

      </body>
    </html>
  );
}
