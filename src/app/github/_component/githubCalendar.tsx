"use client";

import { useThemeStore } from "@/providers/themeProviders";
import dayjs from "dayjs";
import { parseAsInteger, useQueryState } from "nuqs";
import GitHubCalendar from "react-github-calendar";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function GithubCalendar({ username, user }: { username: string; user: any }) {
  const currentYear = dayjs().year();
  const createdAtDate = dayjs(user.created_at);
  const [year, setYear] = useQueryState(username, parseAsInteger.withDefault(currentYear));
  const { theme } = useThemeStore((state) => state);

  const isLightTheme = (() => {
    if (theme === "light" || theme === "cupcake" || theme === "retro") return true;
    return false;
  })();

  return (
    <div className="flex w-full flex-col items-start">
      <select
        className="select select-xs prose mb-4 w-fit"
        onChange={(e) => {
          setYear(+e.target.value);
        }}
      >
        {Array.from({ length: currentYear - createdAtDate.year() + 1 }, (_, index) => (
          <option
            key={index}
            value={currentYear - index}
          >
            {currentYear - index}
          </option>
        ))}
      </select>
      <GitHubCalendar
        theme={{
          light: [isLightTheme ? "#d1d5db" : "#161B22", "#0E4429", "#116D32", "#26A641", "#3AD354"],
          dark: [isLightTheme ? "#d1d5db" : "#161B22", "#0E4429", "#116D32", "#26A641", "#3AD354"],
        }}
        username={username}
        year={year}
      />
    </div>
  );
}

export default GithubCalendar;
