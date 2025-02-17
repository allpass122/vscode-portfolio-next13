"use client";

import { useThemeStore } from "@/providers/themeProviders";
import { cn } from "@/utils/cn";
import { checkLightTheme } from "@/utils/theme";
import { useMemo, useRef } from "react";
import { useMouse } from "react-use";

function ContactPage() {
  const ref = useRef(null);
  const { elX, elY } = useMouse(ref);
  const { theme } = useThemeStore((state) => state);

  const isLightTheme = checkLightTheme(theme);

  const contactItems = [
    {
      social: "website",
      link: "dempsey.vscode.portfolio",
      href: "/",
    },
    {
      social: "email (personal)",
      link: "dges5102@gmail.com",
      href: "mailto:dges5102@gmail.com",
    },
    // {
    //   social: "email (office)",
    //   link: "dempsey@maijoe.com",
    //   href: "mailto:dempsey@maijoe.com",
    // },
    {
      social: "linkedIn",
      link: "wenyen huang",
      href: "https://www.linkedin.com/in/wenyen-huang-45a7a9207/",
    },
  ];
  function CodeStyleBlock() {
    return (
      <div className="my-6 w-fit whitespace-pre text-xl selection:bg-indigo-300 selection:text-indigo-900">
        <span className="prose mr-4 select-none">1</span>
        <span className="text-orange-400">{".socials "}</span>
        <span className="text-yellow-400">{"{"}</span>

        {contactItems.map(({ social, link, href }, idx) => (
          <div
            key={idx}
            className=""
          >
            <span className="prose mr-4 select-none">{idx + 2}</span>
            <span className="prose text-xl">{`  ${social}: `}</span>
            <a
              className="text-orange-400"
              target="_blank"
              href={href}
              rel="noreferrer"
            >{`${link}`}</a>
            <span>;</span>
          </div>
        ))}
        <span className="prose mr-4 select-none">{contactItems.length + 2}</span>
        <span className="text-yellow-400">{"}"}</span>
      </div>
    );
  }
  const MemoizedCodeStyleBlock = useMemo(() => CodeStyleBlock, []);

  return (
    <div
      ref={ref}
      style={
        isLightTheme
          ? elX && elY
            ? {
                background: `#eaead9 radial-gradient(50% 50% at ${elX}px ${elY}px
                , rgba(43, 232, 43, 0.48), transparent 80%)`,
              }
            : { background: "#eaead9" }
          : elX && elY
            ? {
                background: `#1f2428 radial-gradient(50% 50% at ${elX}px ${elY}px
                , rgba(52, 176, 60, .05), transparent 80%)`,
              }
            : { background: "#1f2428" }
      }
      className={cn("flex-1 p-8 font-tech")}
    >
      <div className="w-fit cursor-replay select-none">
        <div
          className="w-fit animate-typing overflow-hidden whitespace-pre border-r-2
         border-r-sky-400 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text 
         pr-2 text-4xl text-transparent active:animate-none"
        >
          Reach Out Via Socials
        </div>
      </div>
      <div className="prose font-cmono">{"hint: click above title or select above code :>"}</div>
      <MemoizedCodeStyleBlock />
    </div>
  );
}

export default ContactPage;
