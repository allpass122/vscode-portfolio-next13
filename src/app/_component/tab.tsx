"use client";

import { explorerItems } from "./explorer";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/utils/cn";
import { useActivityStore } from "@/providers/activityProviders";

function Tab() {
  const router = useRouter();
  const { list } = useActivityStore((state) => state);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <div className="bg-base-100/90 flex h-10 w-fit min-w-full select-none flex-row">
      {explorerItems.map(
        (item) =>
          (item.immutable ||
            list.filter((l) => l.name === item.title && l.disabled === false).length > 0) && (
            <div
              key={item.title}
              className={cn(
                "border-neutral prose flex cursor-pointer flex-row items-center gap-2 rounded-sm border-r px-4 py-1.5 text-sm",
                pathname !== "/" &&
                  item.path.startsWith(pathname) &&
                  "bg-base-100 border-t-2 border-y-amber-400"
              )}
              onClick={() => {
                router.push(`${item.path}?${searchParams.toString()}`);
              }}
            >
              {item.icon} {item.label}
            </div>
          )
      )}
    </div>
  );
}
export default Tab;
