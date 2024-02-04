import { cn } from "@/utils/cn";
import { AlertTriangle, BellDot, XCircle } from "lucide-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import { IoIosGitBranch } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import "./globals.css";
import { IoCheckmarkDone } from "react-icons/io5";

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

function HeaderBar() {
  return (
    <div className="flex h-8 select-none items-center bg-dark-primary px-2 text-white">
      <Image
        src="/vscode_icon.svg"
        alt="vscode logo"
        height={16}
        width={16}
      />
      <div className="ml-2 mr-auto flex flex-auto flex-wrap content-center">
        {["File", "Edit", "View", "Go", "Run", "Terminal", "Help"].map((text) => (
          <p
            className="cursor-pointer rounded-sm px-2 py-0.5 text-sm hover:bg-slate-400"
            key={text}
          >
            {text}
          </p>
        ))}
      </div>
      <p className="font-mono center flex flex-auto text-center text-sm">
        {"Dempsey Huang - Visual Studio Code"}
      </p>
      <div className="ml-auto flex flex-auto">
        <span className="ml-auto mr-1 flex size-3 cursor-pointer rounded-full bg-yellow-400"></span>
        <span className="mx-1 flex size-3 cursor-pointer rounded-full bg-green-400"></span>
        <span className="mx-1 flex size-3 cursor-pointer rounded-full bg-red-400"></span>
      </div>
    </div>
  );
}

function Footer() {
  function GitBranchComponent() {
    return (
      <div className="flex flex-row items-center gap-3">
        <a
          href="https://github.com/allpass122/vscode-portfolio-next13"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex flex-row items-center gap-1 rounded-sm p-0.5 text-xs hover:bg-slate-400">
            <IoIosGitBranch className="size-3" />
            main
          </div>
        </a>
        <div className="flex flex-row items-center gap-2 rounded-sm p-0.5 text-xs hover:bg-slate-400">
          <div className="flex flex-row items-center gap-1">
            <XCircle className="size-3" />0
          </div>
          <div className="flex flex-row items-center gap-1">
            <AlertTriangle className="size-3" /> 0
          </div>
        </div>
      </div>
    );
  }

  function ToolBoxComponent() {
    return (
      <div className="flex flex-row items-center gap-3">
        <div className="flex flex-row items-center gap-1 rounded-sm p-0.5 text-xs hover:bg-slate-400">
          <TbBrandNextjs className="size-4" />
          Powered by Next.js
        </div>
        <div className="flex flex-row items-center gap-1 rounded-sm p-0.5 text-xs hover:bg-slate-400">
          <IoCheckmarkDone className="size-4" />
          Prettier
        </div>
        <div className="flex flex-row items-center gap-1 rounded-sm p-0.5 text-xs hover:bg-slate-400">
          <BellDot className="size-4" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-6 select-none items-center justify-between bg-dark-primary px-2 text-white">
      <GitBranchComponent />
      <ToolBoxComponent />
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "flex min-h-screen flex-col")}>
        <HeaderBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
