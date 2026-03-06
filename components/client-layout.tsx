// components/client-layout.tsx
"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Chatbot } from "@/components/chatbot";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isReportPage = pathname === "/reports";

  return (
    <>
      <Navbar />
      <main className="flex-grow w-full">{children}</main>
      <Footer />
      {!isReportPage && <Chatbot />}
    </>
  );
}
