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

  function ThemeController() {
    return (
      <div className="dropdown mb-72">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1"
        >
          Theme
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl"
        >
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Default"
              value="default"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Dark"
              value="dark"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Light"
              value="light"
            />
          </li>
        </ul>
      </div>
    );
  }

  function SettingComponent() {
    return (
      <div className="items-cente flex w-full flex-col">
        <ThemeController />
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
                const disable =
                  list.filter((l) => l.name === title && l.disabled === true).length > 0;
                return (
                  <div
                    key={title}
                    className={cn(
                      "flex cursor-pointer flex-row items-center rounded-md p-1 text-slate-100 hover:bg-slate-700",
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
    <div className="flex w-12 select-none flex-col justify-between border-r-[0.5px] border-black bg-dark-second text-slate-400">
      <ActivityBar />
      <SettingComponent />
    </div>
  );
}
export default Sidebar;
