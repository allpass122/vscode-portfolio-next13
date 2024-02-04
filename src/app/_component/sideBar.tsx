"use client";

import { cn } from "@/utils/cn";
import { CircleUserRound, Mail, Pencil, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { BiCodeAlt } from "react-icons/bi";
import { VscFiles, VscGithub } from "react-icons/vsc";

function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const allItems: { path: string; icon: React.ReactNode; disabled?: boolean }[] = [
    {
      path: "/home",
      icon: <VscFiles className={"size-3/5"} />,
    },
    {
      path: "/github",
      icon: <VscGithub className={"size-3/5 "} />,
    },
    {
      path: "/projects",
      icon: <BiCodeAlt className={"size-3/5 "} />,
    },
    {
      path: "/articles",
      icon: <Pencil className={"size-3/5 "} />,
      disabled: true,
    },
    {
      path: "/contact",
      icon: <Mail className={"size-3/5 "} />,
    },
  ];

  function ActivityBar() {
    return (
      <div className="flex w-full flex-col items-center">
        {allItems.map(
          (item) =>
            !item.disabled && (
              <div
                key={item.path}
                className={cn(
                  "flex aspect-square w-full cursor-pointer flex-col items-center justify-center hover:bg-dark-primary",
                  item.path.startsWith(pathname) && "border-l-2 border-cyan-400"
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
          className={
            "flex aspect-square w-full cursor-pointer flex-col items-center justify-center hover:bg-dark-primary"
          }
          onClick={() => {
            router.push("/about");
          }}
        >
          <CircleUserRound className={"size-3/5 "} />
        </div>
        <div
          className={
            "flex aspect-square w-full cursor-pointer flex-col items-center justify-center hover:bg-dark-primary"
          }
          onClick={() => {
            // TODO ActivityBar config
          }}
        >
          <Settings className={"size-3/5 "} />
        </div>
      </div>
    );
  }

  return (
    <div className="between flex w-12 flex-col justify-between bg-dark-second ">
      <ActivityBar />
      <SettingComponent />
    </div>
  );
}
export default Sidebar;
