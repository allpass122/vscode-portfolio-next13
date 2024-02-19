import { XCircle, AlertTriangle, BellDot } from "lucide-react";
import { IoIosGitBranch } from "react-icons/io";
import { IoCheckmarkDone } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";

function Footer() {
  function GitBranchComponent() {
    return (
      <div className="flex flex-row items-center gap-3">
        <a
          href="https://github.com/allpass122/vscode-portfolio-next13"
          target="_blank"
          rel="noreferrer"
        >
          <div className="hover:bg-primary/40 flex flex-row items-center gap-1 rounded-sm p-0.5 text-xs">
            <IoIosGitBranch className="size-3" />
            main
          </div>
        </a>
        <div className="hover:bg-primary/40 flex flex-row items-center gap-2 rounded-sm p-0.5 text-xs">
          <div className="flex flex-row items-center gap-1">
            <XCircle className="size-3" />0
          </div>
          <div className="flex flex-row items-center gap-1">
            <AlertTriangle className="size-3" /> 0
          </div>
        </div>
      </div>
    );
  }

  function ToolBoxComponent() {
    return (
      <div className="flex flex-row items-center gap-3">
        <div className="hover:bg-primary/40 flex flex-row items-center gap-1 rounded-sm p-0.5 text-xs">
          <TbBrandNextjs className="size-4" />
          Powered by Next.js
        </div>
        <div className="hover:bg-primary/40 flex flex-row items-center gap-1 rounded-sm p-0.5 text-xs">
          <IoCheckmarkDone className="size-4" />
          Prettier
        </div>
        <div className="hover:bg-primary/40 flex flex-row items-center gap-1 rounded-sm p-0.5 text-xs">
          <BellDot className="size-4" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-base-100 border-neutral flex h-6 select-none items-center justify-between border-t-[0.5px] px-2">
      <GitBranchComponent />
      <ToolBoxComponent />
    </div>
  );
}

export default Footer;
