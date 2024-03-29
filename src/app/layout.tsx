import Explorer from "@/app/_component/explorer";
import Footer from "@/app/_component/footer";
import HeaderBar from "@/app/_component/headerBar";
import Sidebar from "@/app/_component/sideBar";
import Tab from "@/app/_component/tab";
import ThemeWrap from "@/app/_component/themeWrap";
import "@/app/globals.css";
import { ActivityStoreProvider } from "@/providers/activityProviders";
import { ThemeStoreProvider } from "@/providers/themeProviders";
import { cn } from "@/utils/cn";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter, Press_Start_2P, Share_Tech_Mono } from "next/font/google";
import { Suspense } from "react";

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
          "flex h-screen w-screen flex-col font-inter"
        )}
      >
        <ActivityStoreProvider>
          <ThemeStoreProvider>
            <ThemeWrap>
              <SpeedInsights />
              <Analytics />
              <HeaderBar />
              <Suspense>
                <div className="flex flex-1 flex-row">
                  <Sidebar />
                  <Explorer />
                  <div className="text-primary/50 flex flex-1 flex-col overflow-scroll hide-scrollbar">
                    <Tab />
                    {children}
                  </div>
                </div>
              </Suspense>
              <Footer />
            </ThemeWrap>
          </ThemeStoreProvider>
        </ActivityStoreProvider>
      </body>
    </html>
  );
}
