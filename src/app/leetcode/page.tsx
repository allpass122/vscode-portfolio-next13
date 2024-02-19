import Image from "next/image";
import { LeetCode } from "leetcode-query";
import { SiLeetcode } from "react-icons/si";
import SolvedProblemCircle from "@/app/leetcode/_component/solvedProblemCircle";

type LanguageProblemCount = {
  languageName: string;
  problemsSolved: number;
}[];

export type QuestionsCount = {
  All: number;
  Easy: number;
  Medium: number;
  Hard: number;
};

async function LeetcodePage() {
  const {
    languageProblemCount,
    matchedUser,
    allQuestionsCount,
    acSubmissionNum,
    problemsSolvedBeatsStats,
  } = await getData();
  return (
    <div className="bg-base-100 flex grow flex-col p-8 font-cmono">
      <div className="flex flex-row flex-wrap gap-2">
        <div className="bg-base-200 rounded-lg p-4">
          <div className="prose flex flex-row items-center gap-2 text-xl">
            <SiLeetcode className="text-orange-300" /> Leetcode Profile
          </div>
          <div className="bg-primary my-0.5 h-[1px] w-full" />
          <div className="flex justify-center">
            <Image
              rel="preload"
              className="my-4 rounded-full"
              src={matchedUser?.profile.userAvatar || ""}
              width={160}
              height={160}
              alt={"avatar"}
            />
          </div>
          <a
            className="prose font-inter"
            href={`https://leetcode.com/${process.env.NEXT_PUBLIC_LEETCODE_USERNAME}/`}
            target="_blank"
            rel="noreferrer"
          >
            {matchedUser?.username}
          </a>
          <div className="bg-primary my-1 h-[1px] w-full" />
          <div className="my-2 flex flex-col">
            {languageProblemCount.map(({ languageName, problemsSolved }) => (
              <div
                key={languageName}
                className="my-2 flex h-4 flex-row items-end justify-between"
              >
                <div className="bg-base-100 mr-4 h-6 min-w-8 rounded-xl border border-amber-400 px-2 py-1 text-center text-xs text-amber-400">
                  {languageName}
                </div>
                <div className="flex flex-row items-center">
                  <span className="prose text-sm">{problemsSolved}</span>
                  <span className="whitespace-pre text-xs text-orange-300"> problems solved</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-base-200 flex h-fit grow flex-col rounded-lg p-4">
          <span className="prose mb-4 text-xl">Solved Problems</span>
          <div className="flex flex-row items-center">
            <SolvedProblemCircle
              allQuestionsCount={allQuestionsCount}
              acSubmissionNum={acSubmissionNum}
            />
            <div className="m-4 flex w-full flex-col">
              <div className="mb-4">
                <div className="flex flex-row justify-between">
                  <span className="prose mr-8 whitespace-pre text-base">
                    {"Easy  "}
                    <span>
                      <span className="text-primary text-lg">{acSubmissionNum.Easy}</span>
                      <span className="prose text-sm">{`/${allQuestionsCount.Easy}`}</span>
                    </span>
                  </span>
                  <span className="prose whitespace-pre text-sm">
                    beats
                    <span className="text-primary text-lg">{` ${problemsSolvedBeatsStats.Easy} `}</span>
                    %
                  </span>
                </div>
                <div className="relative h-2 w-full rounded-full bg-[#2cbb5d]/40">
                  <div
                    className="absolute z-10 h-2 rounded-full bg-[#2cbb5d]"
                    style={{ width: `${(acSubmissionNum.Easy * 100) / allQuestionsCount.Easy}%` }}
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="flex flex-row justify-between">
                  <span className="prose mr-8 whitespace-pre text-base">
                    {"Medium  "}
                    <span>
                      <span className="text-primary text-lg">{acSubmissionNum.Medium}</span>
                      <span className="prose text-sm">{`/${allQuestionsCount.Medium}`}</span>
                    </span>
                  </span>
                  <span className="prose whitespace-pre text-sm">
                    beats
                    <span className="text-primary text-lg">{` ${problemsSolvedBeatsStats.Medium} `}</span>
                    %
                  </span>
                </div>
                <div className="relative h-2 w-full rounded-full bg-[#ffc01e]/40">
                  <div
                    className="absolute z-10 h-2 rounded-full bg-[#ffc01e]"
                    style={{
                      width: `${(acSubmissionNum.Medium * 100) / allQuestionsCount.Medium}%`,
                    }}
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="flex flex-row justify-between">
                  <span className="prose mr-8 whitespace-pre text-base">
                    {"Hard  "}
                    <span>
                      <span className="text-primary text-lg">{acSubmissionNum.Hard}</span>
                      <span className="prose text-sm">{`/${allQuestionsCount.Hard}`}</span>
                    </span>
                  </span>
                  <span className="prose whitespace-pre text-sm">
                    beats
                    <span className="text-primary text-lg">{` ${problemsSolvedBeatsStats.Hard} `}</span>
                    %
                  </span>
                </div>
                <div className="relative h-2 w-full rounded-full bg-[#ef4743]/40">
                  <div
                    className="absolute z-10 h-2 rounded-full bg-[#ef4743]"
                    style={{
                      width: `${(acSubmissionNum.Hard * 100) / allQuestionsCount.Hard}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

async function getData() {
  const leetcode = new LeetCode();
  const user = await leetcode.user(process.env.NEXT_PUBLIC_LEETCODE_USERNAME as string);
  const matchedUser = user.matchedUser;

  const languageStats = await leetcode.graphql({
    operationName: "languageStats",
    query: `
    query languageStats($username: String!) {
      matchedUser(username: $username) {
        languageProblemCount {
          languageName
          problemsSolved
        }
      }
    }
    `,
    variables: { username: process.env.NEXT_PUBLIC_LEETCODE_USERNAME },
  });
  const languageProblemCount: LanguageProblemCount = (
    languageStats.data.matchedUser.languageProblemCount as LanguageProblemCount
  ).sort((a, b) => {
    if (a.problemsSolved > b.problemsSolved) return -1;
    else if (a.problemsSolved < b.problemsSolved) return 1;
    return 0;
  });

  const userProblemsSolved = await leetcode.graphql({
    operationName: "userProblemsSolved",
    query: `
    query userProblemsSolved($username: String!) {
      allQuestionsCount {
        difficulty
        count
      }
      matchedUser(username: $username) {
        problemsSolvedBeatsStats {
          difficulty
          percentage
        }
        submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }
      }
    }
    `,
    variables: { username: process.env.NEXT_PUBLIC_LEETCODE_USERNAME },
  });
  const allQuestionsCount = (
    userProblemsSolved.data.allQuestionsCount as { difficulty: string; count: number }[]
  ).reduce((acc, { difficulty, count }) => {
    acc[difficulty as keyof QuestionsCount] = count;
    return acc;
  }, {} as QuestionsCount);
  const acSubmissionNum = (
    userProblemsSolved.data.matchedUser.submitStatsGlobal.acSubmissionNum as {
      difficulty: string;
      count: number;
    }[]
  ).reduce((acc, { difficulty, count }) => {
    acc[difficulty as keyof QuestionsCount] = count;
    return acc;
  }, {} as QuestionsCount);
  const problemsSolvedBeatsStats = (
    userProblemsSolved.data.matchedUser.problemsSolvedBeatsStats as {
      difficulty: string;
      percentage: number;
    }[]
  ).reduce((acc, { difficulty, percentage }) => {
    acc[difficulty as keyof QuestionsCount] = percentage;
    return acc;
  }, {} as QuestionsCount);
  return {
    languageProblemCount,
    matchedUser,
    allQuestionsCount,
    acSubmissionNum,
    problemsSolvedBeatsStats,
  };
}

export default LeetcodePage;
