"use client";

import { useActivityStore } from "@/providers/activityProviders";
import { cn } from "@/utils/cn";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { FaHtml5, FaMarkdown, FaReact } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { TbCodeDots } from "react-icons/tb";

export const explorerItems: {
  title: string;
  path: string;
  icon: React.ReactNode;
  label: string;
  immutable?: boolean;
}[] = [
  {
    title: "home",
    label: "home.tsx",
    path: "/home",
    icon: <FaReact className="size-4 text-[#00BCD4]" />,
  },
  {
    title: "about",
    label: "about.html",
    path: "/about",
    icon: <FaHtml5 className="size-4 text-red-700" />,
    immutable: true,
  },
  {
    title: "github",
    label: "github.md",
    path: "/github",
    icon: <FaMarkdown className="size-4 text-blue-700" />,
  },
  {
    title: "projects",
    label: "projects.ts",
    path: "/projects",
    icon: <BiLogoTypescript className="size-4 text-green-600" />,
  },
  {
    title: "articles",
    label: "articles.json",
    path: "/articles",
    icon: <TbCodeDots className="size-4 text-yellow-400" />,
  },
  {
    title: "contact",
    label: "contact.css",
    path: "/contact",
    icon: <BiLogoTailwindCss className="size-4 text-cyan-500" />,
  },
  {
    title: "leetcode",
    label: "leetcode.cpp",
    path: "/leetcode",
    icon: <SiLeetcode className="size-4 text-orange-500" />,
  },
];

function Explorer() {
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const searchParams = useSearchParams();
  const { list } = useActivityStore((state) => state);

  return (
    <div className="bg-base-100 border-neutral prose flex w-[150px] select-none flex-col border-r-[0.5px]">
      <div className="flex flex-row items-center justify-between p-4 font-sans text-xs font-extralight">
        EXPLORER <MoreHorizontal className="size-3" />
      </div>
      <div
        className="flex transform cursor-pointer flex-row items-center justify-start p-2 font-sans text-sm font-bold duration-500"
        onClick={() => setOpen((prev) => !prev)}
      >
        <ChevronRight className={cn("size-4", open && "rotate-90")} />
        My Workspace
      </div>
      {open && (
        <div className="items-left flex flex-col">
          {explorerItems.map(
            (item) =>
              (item.immutable ||
                list.filter((l) => l.name === item.title && l.disabled === false).length > 0) && (
                <div
                  key={item.title}
                  className="hover:bg-primary/40 flex cursor-pointer flex-row items-center gap-1 rounded-sm px-4 py-1.5 text-sm font-light"
                  onClick={() => {
                    router.push(`${item.path}?${searchParams.toString()}`);
                  }}
                >
                  {item.icon} {item.label}
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
}

export default Explorer;
