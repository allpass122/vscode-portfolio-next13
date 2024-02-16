"use client";

import { Listbox } from "@headlessui/react";
import dayjs from "dayjs";
import { parseAsInteger, useQueryState } from "nuqs";
import GitHubCalendar from "react-github-calendar";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function GithubCalendar({ username, user }: { username: string; user: any }) {
  const currentYear = dayjs().year();
  const createdAtDate = dayjs(user.created_at);
  const [year, setYear] = useQueryState(username, parseAsInteger.withDefault(currentYear));

  return (
    <div className="flex flex-col items-start">
      <div className="mb-2 flex flex-row gap-2">
        <Listbox
          value={year}
          onChange={setYear}
        >
          <Listbox.Button className="mb-1 rounded border border-teal-400 bg-teal-800 p-1 text-xs">
            {`choose the year: ${year}`}
          </Listbox.Button>
          <div className="relative">
            <Listbox.Options className="absolute left-0 top-0 rounded border border-teal-400 bg-teal-800">
              {Array.from({ length: currentYear - createdAtDate.year() + 1 }, (_, index) => (
                <Listbox.Option
                  className="cursor-pointer border-b border-teal-400 p-1 text-xs last:border-0"
                  key={index}
                  value={currentYear - index}
                >
                  {currentYear - index}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      </div>
      <GitHubCalendar
        theme={{
          light: ["#161B22", "#0E4429", "#116D32", "#26A641", "#3AD354"],
          dark: ["#161B22", "#0E4429", "#116D32", "#26A641", "#3AD354"],
        }}
        username={username}
        year={year}
      />
    </div>
  );
}

export default GithubCalendar;
