import { Mail, Pencil } from "lucide-react";
import { BiCodeAlt } from "react-icons/bi";
import { VscFiles, VscGithub } from "react-icons/vsc";

export const lsKey = "s-ac";

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
