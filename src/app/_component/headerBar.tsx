"use client";

import { useThemeStore } from "@/providers/themeProviders";
import Image from "next/image";

function HeaderBar() {
  const { setTheme } = useThemeStore((state) => state);

  function ThemeController() {
    return (
      <div
        className="dropdown"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={(e: any) => {
          setTheme(e.target.value);
        }}
      >
        <div
          tabIndex={0}
          role="button"
          className="btn btn-xs btn-outline btn-accent"
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
              value="mytheme"
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
              aria-label="Dracula"
              value="dracula"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Luxury"
              value="luxury"
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
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Cupcake"
              value="cupcake"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Retro"
              value="retro"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Winter"
              value="winter"
            />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label="Wireframe"
              value="wireframe"
            />
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="bg-base-100 border-neutral flex h-8 select-none items-center border-b-[0.5px] px-2">
      <Image
        src="/vscode_icon.svg"
        alt="vscode logo"
        height={16}
        width={16}
      />
      <div className="my-0.5 ml-2 mr-auto flex flex-auto flex-wrap content-center gap-1">
        <ThemeController />

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
