"use client";

import { cn } from "@/utils/cn";
import { activityItems, title2Key, useActBar } from "@/utils/useActivityStatus";
import { Popover } from "@headlessui/react";
import { Check, CircleUserRound, Settings } from "lucide-react";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";

function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [actBar, setActBar] = useActBar();

  function ActivityBar() {
    return (
      <div className="flex w-full flex-col items-center">
        {activityItems.map(
          (item) =>
            !!actBar[title2Key(item.title)] && (
              <div
                key={item.title}
                className={cn(
                  "flex aspect-square w-full cursor-pointer flex-col items-center justify-center hover:bg-dark-primary",
                  pathname !== "/" &&
                    item.path.startsWith(pathname) &&
                    "border-l-2 border-cyan-400 text-slate-100"
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
            "flex aspect-square w-full cursor-pointer flex-col items-center justify-center hover:bg-dark-primary",
            pathname.startsWith("/about") && "text-slate-100"
          )}
          onClick={() => {
            router.push(`/about?${searchParams.toString()}`);
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
              {activityItems.map(({ title }) => {
                const disable = !actBar[title2Key(title)];
                return (
                  <div
                    key={title}
                    className={cn(
                      "flex cursor-pointer flex-row items-center rounded-md p-1 text-slate-100 hover:bg-slate-700",
                      disable && "text-slate-400"
                    )}
                    onClick={() => {
                      setActBar((prev) => ({ ...prev, [title2Key(title)]: disable ? 1 : 0 }));
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
    <div className="between flex w-12 select-none flex-col justify-between border-r-[0.5px] border-black bg-dark-second text-slate-400">
      <ActivityBar />
      <SettingComponent />
    </div>
  );
}
export default Sidebar;
