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
          <div className="flex flex-row items-center gap-1 rounded-sm p-0.5 text-xs hover:bg-slate-400">
            <IoIosGitBranch className="size-3" />
            main
          </div>
        </a>
        <div className="flex flex-row items-center gap-2 rounded-sm p-0.5 text-xs hover:bg-slate-400">
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
        <div className="flex flex-row items-center gap-1 rounded-sm p-0.5 text-xs hover:bg-slate-400">
          <TbBrandNextjs className="size-4" />
          Powered by Next.js
        </div>
        <div className="flex flex-row items-center gap-1 rounded-sm p-0.5 text-xs hover:bg-slate-400">
          <IoCheckmarkDone className="size-4" />
          Prettier
        </div>
        <div className="flex flex-row items-center gap-1 rounded-sm p-0.5 text-xs hover:bg-slate-400">
          <BellDot className="size-4" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-6 select-none items-center justify-between bg-dark-primary px-2 text-white">
      <GitBranchComponent />
      <ToolBoxComponent />
    </div>
  );
}

export default Footer;
