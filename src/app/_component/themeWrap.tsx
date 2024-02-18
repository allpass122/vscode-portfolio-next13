"use client";

import { useThemeStore } from "@/providers/themeProviders";

function ThemeWrap({ children }: React.PropsWithChildren) {
  const { theme } = useThemeStore((state) => state);

  return (
    <div
      className="flex flex-1 flex-col"
      data-theme={theme}
    >
      {children}
    </div>
  );
}
export default ThemeWrap;
