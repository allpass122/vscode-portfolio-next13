import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import { Inter, Share_Tech_Mono, Press_Start_2P } from "next/font/google";
import { Suspense } from "react";
import Explorer from "@/app/_component/explorer";
import Footer from "@/app/_component/footer";
import HeaderBar from "@/app/_component/headerBar";
import Sidebar from "@/app/_component/sideBar";
import Tab from "@/app/_component/tab";
import "@/app/globals.css";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const stm = Share_Tech_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--share-tech-mono",
  display: "swap",
});

const ps2p = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--press-start-2p",
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
      <body
        className={cn(
          inter.variable,
          stm.variable,
          ps2p.variable,
          "font-inter flex h-screen w-screen flex-col"
        )}
      >
        <HeaderBar />
        <Suspense>
          <div className="flex flex-1 flex-row">
            <Sidebar />
            <Explorer />
            <div className="flex flex-1 flex-col overflow-scroll">
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
