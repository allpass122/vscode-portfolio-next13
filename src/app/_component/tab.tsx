"use client";

import { title2Key, useActBar } from "@/utils/useActivityStatus";
import { explorerItems } from "./explorer";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/utils/cn";

// TODO: dnd-toolkit
function Tab() {
  const router = useRouter();
  const [actBar] = useActBar();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <div className="flex h-10 w-full select-none flex-row bg-dark-primary">
      {explorerItems.map(
        (item) =>
          (item.immutable || !!actBar[title2Key(item.title)]) && (
            <div
              key={item.title}
              className={cn(
                "flex cursor-pointer flex-row items-center gap-2 rounded-sm border-r border-black/20 px-4 py-1.5 text-sm font-light",
                pathname !== "/" &&
                  item.path.startsWith(pathname) &&
                  "border-t border-y-amber-400 bg-dark-second "
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
