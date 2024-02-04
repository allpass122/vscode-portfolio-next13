"use client";

import { cn } from "@/utils/cn";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { FaMarkdown, FaReact } from "react-icons/fa";
import { TbCodeDots } from "react-icons/tb";

function Explorer({
  disabledRecord,
  setDisabledRecord,
}: {
  disabledRecord: {
    [key: string]: boolean;
  };
  setDisabledRecord: Dispatch<
    SetStateAction<{
      [key: string]: boolean;
    }>
  >;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setDisabledRecord((prev) => prev);
  }, [disabledRecord]);

  const allItems: { title: string; path: string; icon: React.ReactNode; label: string }[] = [
    {
      title: "home",
      label: "home.tsx",
      path: "/home",
      icon: <FaReact className="size-4 text-[#00BCD4]" />,
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
  ];

  return (
    <div className="flex w-[150px] select-none flex-col bg-dark-primary text-slate-200">
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
          {allItems.map(
            (item) =>
              !disabledRecord[item.title] && (
                <div
                  key={item.title}
                  className="my-1.5 flex cursor-pointer flex-row items-center gap-1 rounded-sm px-4 text-sm font-light hover:bg-dark-second"
                  onClick={() => {
                    router.push(item.path);
                  }}
                >
                  {item.icon} {item.title}
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
}

export default Explorer;
