import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./_component/footer";
import HeaderBar from "./_component/headerBar";
import "./globals.css";
import Tab from "./_component/tab";
import { Suspense } from "react";
import { Sidebar } from "lucide-react";
import Explorer from "./_component/explorer";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Home | Vscode Portfolio With Next14",
    template: "%s | Vscode Portfolio With Next14",
  },
  description: "tailwindcss + nextjs + typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "flex min-h-screen flex-col")}>
        <HeaderBar />
        <Suspense>
          <div className="flex flex-1 flex-row">
            <Sidebar />
            <Explorer />
            <div className="flex flex-1 flex-col">
              <Tab />
              {children}
            </div>
          </div>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
