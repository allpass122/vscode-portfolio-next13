import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Home | Vscode Portfolio With Next14",
    template: "%s | Vscode Portfolio With Next14",
  },
  description: "tailwindcss + nextjs + typescript",
};

function HeaderBar() {
  return (
    <div className="text-white bg-dark-primary flex h-8 select-none items-center px-2">
      <Image
        src="/vscode_icon.svg"
        alt="vscode logo"
        height={16}
        width={16}
      />
      <div className="ml-2 mr-auto flex flex-auto flex-wrap content-center">
        {["File", "Edit", "View", "Go", "Run", "Terminal", "Help"].map((text) => (
          <p
            className="hover:bg-slate-400 cursor-pointer rounded-sm px-2 py-0.5 text-sm"
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
        <span className="bg-yellow-400 ml-auto mr-1 flex size-3 cursor-pointer rounded-full"></span>
        <span className="bg-green-400 mx-1 flex size-3 cursor-pointer rounded-full"></span>
        <span className="bg-red-400 mx-1 flex size-3 cursor-pointer rounded-full"></span>
      </div>
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
      <body className={inter.className}>
        <HeaderBar />
        {children}
      </body>
    </html>
  );
}
