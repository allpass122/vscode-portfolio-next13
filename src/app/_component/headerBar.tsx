import Image from "next/image";

function HeaderBar() {
  return (
    <div className="flex h-8 select-none items-center border-b-[0.5px] border-black bg-dark-primary px-2 text-white">
      <Image
        src="/vscode_icon.svg"
        alt="vscode logo"
        height={16}
        width={16}
      />
      <div className="ml-2 mr-auto flex flex-auto flex-wrap content-center">
        {["File", "Edit", "View", "Go", "Run", "Terminal", "Help"].map((text) => (
          <p
            className="cursor-pointer rounded-sm px-2 py-0.5 text-sm hover:bg-slate-400"
            key={text}
          >
            {text}
          </p>
        ))}
      </div>
      <p className="font-mono center flex flex-auto text-center text-sm">
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
