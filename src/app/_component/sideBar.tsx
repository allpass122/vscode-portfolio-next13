"use client";

import { cn } from "@/utils/cn";
import { Check, CircleUserRound, Mail, Pencil, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { BiCodeAlt } from "react-icons/bi";
import { VscFiles, VscGithub } from "react-icons/vsc";
import { Popover } from "@headlessui/react";
import { useState } from "react";

function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const lsKey = "s-ac";

  const allItems: { title: string; path: string; icon: React.ReactNode; disabled?: boolean }[] = [
    {
      title: "home",
      path: "/home",
      icon: <VscFiles className={"size-3/5"} />,
    },
    {
      title: "github",
      path: "/github",
      icon: <VscGithub className={"size-3/5 "} />,
    },
    {
      title: "projects",
      path: "/projects",
      icon: <BiCodeAlt className={"size-3/5 "} />,
    },
    {
      title: "articles",
      path: "/articles",
      icon: <Pencil className={"size-3/5 "} />,
      disabled: true,
    },
    {
      title: "contact",
      path: "/contact",
      icon: <Mail className={"size-3/5 "} />,
    },
  ];
  const localStorageData = localStorage.getItem(lsKey);
  const [disabledRecord, setDisabledRecord] = useState<{ [key: string]: boolean }>(
    (localStorageData && JSON.parse(localStorageData)) ??
      Object.fromEntries(allItems.map((item) => [item.title, item.disabled ?? false]))
  );

  function ActivityBar() {
    return (
      <div className="flex w-full flex-col items-center">
        {allItems.map(
          (item) =>
            !disabledRecord[item.title] && (
              <div
                key={item.title}
                className={cn(
                  "flex aspect-square w-full cursor-pointer flex-col items-center justify-center hover:bg-dark-primary",
                  item.path.startsWith(pathname) && "border-l-2 border-cyan-400 text-slate-100"
                )}
                onClick={() => {
                  router.push(item.path);
                }}
              >
                {item.icon}
              </div>
            )
        )}
      </div>
    );
  }

  function SettingComponent() {
    return (
      <div className="flex w-full flex-col items-center">
        <div
          className={cn(
            "flex aspect-square w-full cursor-pointer flex-col items-center justify-center hover:bg-dark-primary",
            pathname.startsWith("/about") && "text-slate-100"
          )}
          onClick={() => {
            router.push("/about");
          }}
        >
          <CircleUserRound className="size-3/5" />
        </div>
        <Popover className="relative aspect-square w-full">
          <Popover.Button
            className="flex aspect-square w-full cursor-pointer flex-col items-center justify-center hover:bg-dark-primary 
          focus-visible:border-0 focus-visible:border-none "
          >
            <Settings className={"size-3/5 "} />
          </Popover.Button>
          <Popover.Panel className="absolute bottom-10 left-10 z-10 rounded-md border border-white bg-dark-primary">
            <div className="flex flex-col p-2">
              {Object.entries(disabledRecord).map(([title, disable]) => (
                <div
                  key={title}
                  className={cn(
                    "flex flex-row items-center rounded-md p-1 text-slate-100 hover:bg-slate-700",
                    disable && "text-slate-400"
                  )}
                  onClick={() => {
                    setDisabledRecord((prev) => ({ ...prev, [title]: !disable }));
                    localStorage.setItem(
                      lsKey,
                      JSON.stringify({ ...disabledRecord, [title]: !disable })
                    );
                  }}
                >
                  {!disable && <Check className="size-4" />}
                  <div className={cn("ml-2", disable && "pl-4")}>{title}</div>
                </div>
              ))}
            </div>
          </Popover.Panel>
        </Popover>
      </div>
    );
  }

  return (
    <div className="between flex w-12 flex-col justify-between bg-dark-second text-slate-400">
      <ActivityBar />
      <SettingComponent />
    </div>
  );
}
export default Sidebar;
