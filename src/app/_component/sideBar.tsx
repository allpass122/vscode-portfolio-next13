"use client";

import { useActivityStore } from "@/providers/activityProviders";
import { cn } from "@/utils/cn";
import { activityItems } from "@/utils/useActivityStatus";
import { Popover } from "@headlessui/react";
import { Check, CircleUserRound, Settings } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { list, setDisabled } = useActivityStore((state) => state);

  function ActivityBar() {
    return (
      <div className="flex w-full flex-col items-center">
        {activityItems.map(
          (item) =>
            list.filter((l) => l.name === item.title && l.disabled === false).length > 0 && (
              <div
                key={item.title}
                className={cn(
                  "hover:bg-primary/40 flex aspect-square w-full cursor-pointer flex-col items-center justify-center",
                  pathname !== "/" &&
                    item.path.startsWith(pathname) &&
                    "text-primary border-l-2 border-cyan-400"
                )}
                onClick={() => {
                  router.push(`${item.path}?${searchParams.toString()}`);
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
      <div className="items-cente flex w-full flex-col">
        <div
          className={cn(
            "hover:bg-primary/40 flex aspect-square w-full cursor-pointer flex-col items-center justify-center",
            pathname.startsWith("/about") && "text-primary"
          )}
          onClick={() => {
            router.push(`/about?${searchParams.toString()}`);
          }}
        >
          <CircleUserRound className="size-3/5" />
        </div>
        <Popover className="relative aspect-square w-full">
          <Popover.Button
            className="hover:bg-primary/40 flex aspect-square w-full cursor-pointer flex-col items-center justify-center
          focus-visible:border-0 focus-visible:border-none "
          >
            <Settings className={"size-3/5 "} />
          </Popover.Button>
          <Popover.Panel className="border-neutral bg-base-100 absolute bottom-10 left-10 z-10 rounded-md border">
            <div className="flex flex-col p-2">
              {activityItems.map(({ title }) => {
                const disable =
                  list.filter((l) => l.name === title && l.disabled === true).length > 0;
                return (
                  <div
                    key={title}
                    className={cn(
                      "text-primary hover:bg-primary/40 flex cursor-pointer flex-row items-center rounded-md p-1",
                      disable && "text-slate-400"
                    )}
                    onClick={() => {
                      setDisabled(title, !disable);
                    }}
                  >
                    {!disable && <Check className="size-4" />}
                    <div className={cn("ml-2", disable && "pl-4")}>{title}</div>
                  </div>
                );
              })}
            </div>
          </Popover.Panel>
        </Popover>
      </div>
    );
  }

  return (
    <div className="bg-base-100 border-neutral text-primary/50 flex w-12 select-none flex-col justify-between border-r-[0.5px]">
      <ActivityBar />
      <SettingComponent />
    </div>
  );
}
export default Sidebar;
