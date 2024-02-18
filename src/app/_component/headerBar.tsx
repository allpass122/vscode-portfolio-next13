import Image from "next/image";

function HeaderBar() {
  return (
    <div className="border-base-100 bg-base-100 flex h-8 select-none items-center border-b-[0.5px] px-2">
      <Image
        src="/vscode_icon.svg"
        alt="vscode logo"
        height={16}
        width={16}
      />
      <div className="ml-2 mr-auto flex flex-auto flex-wrap content-center gap-1">
        {["File", "Edit", "View", "Go", "Run", "Terminal", "Help"].map((text) => (
          <p
            className="btn btn-xs"
            key={text}
          >
            {text}
          </p>
        ))}
      </div>
      <p className="prose font-mono center flex flex-auto text-center text-sm">
        {"Dempsey Huang - Visual Studio Code"}
      </p>
      <div className="ml-auto flex flex-auto">
        <span className="ml-auto mr-1 flex size-3 cursor-pointer rounded-full bg-yellow-400"></span>
        <span className="mx-1 flex size-3 cursor-pointer rounded-full bg-green-400"></span>
        <span className="mx-1 flex size-3 cursor-pointer rounded-full bg-red-400"></span>
      </div>
    </div>
  );
}

export default HeaderBar;
