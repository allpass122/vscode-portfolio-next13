"use client";

import { Mail, Pencil } from "lucide-react";
import { useQueryState, parseAsJson } from "nuqs";
import { BiCodeAlt } from "react-icons/bi";
import { VscFiles, VscGithub } from "react-icons/vsc";

export const lsKey = "s-ac";

export type ActBar = {
  [key: string]: 0 | 1;
};

export function useActBar() {
  const r = useQueryState(
    "act",
    parseAsJson<ActBar>().withDefault(
      Object.fromEntries(
        activityItems.map((item) => [title2Key(item.title), item.disabled ? 0 : 1])
      )
    )
  );
  return r;
}

export function title2Key(title: string) {
  return title[0];
}

export const activityItems: {
  title: string;
  path: string;
  icon: React.ReactNode;
  disabled?: boolean;
}[] = [
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
