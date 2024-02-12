import Image from "next/image";
import { LeetCode } from "leetcode-query";
import { SiLeetcode } from "react-icons/si";
import ProgressCircle from "@/app/leetcode/_component/progressCircle";

type LanguageProblemCount = {
  languageName: string;
  problemsSolved: number;
}[];

type QuestionsCount = {
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
    <div className="font-cmono flex grow flex-col bg-dark-second p-8">
      <div className="flex flex-row flex-wrap gap-2">
        <div className="rounded-lg bg-dark-primary p-4">
          <div className="flex flex-row items-center gap-2 text-xl">
            <SiLeetcode className=" text-orange-300" /> Leetcode Profile
          </div>
          <div className="my-0.5 h-[1px] w-full bg-white" />
          <div className="flex justify-center">
            <Image
              className="my-4 rounded-full"
              src={matchedUser?.profile.userAvatar || ""}
              width={160}
              height={160}
              alt={"avatar"}
            />
          </div>
          <a
            className="font-inter text-white"
            href={"https://leetcode.com/b06902122/"}
            target="_blank"
            rel="noreferrer"
          >
            {matchedUser?.username}
          </a>
          <div className="my-1 h-[1px] w-full bg-white" />
          <div className="my-2 flex flex-col">
            {languageProblemCount.map(({ languageName, problemsSolved }) => (
              <div
                key={languageName}
                className="my-2 flex h-4 flex-row items-end justify-between"
              >
                <div className="mr-4 h-6 min-w-8 rounded-xl border border-amber-400 bg-dark-second px-2 py-1 text-center text-xs text-amber-400">
                  {languageName}
                </div>
                <div className="flex flex-row items-center">
                  <span className="text-sm text-white">{problemsSolved}</span>
                  <span className="whitespace-pre text-xs text-gray-300"> problems solved</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex h-fit grow flex-col rounded-lg bg-dark-primary p-4">
          <span className="mb-8 text-xl text-white">Solved Problems</span>
          <div className="flex flex-row">
            <div className="relative select-none">
              <div className="absolute">
                <div className="flex size-32 flex-col items-center justify-center">
                  <span className="text-2xl font-bold">{acSubmissionNum.All}</span>
                  <span className="text-base text-gray-400">solved</span>
                </div>
              </div>
              <div className="flex size-32 flex-col items-center justify-center">
                <ProgressCircle
                  percentage={+((acSubmissionNum.All * 100) / allQuestionsCount.All).toFixed(1)}
                />
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
    userProblemsSolved.data.matchedUser.submitStatsGlobal.acSubmissionNum as {
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
