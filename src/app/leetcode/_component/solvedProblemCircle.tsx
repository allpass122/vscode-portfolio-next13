"use client";

import type { QuestionsCount } from "@/app/leetcode/page";
import ProgressCircle from "@/app/leetcode/_component/progressCircle";
import { useState } from "react";

function SolvedProblemCircle({
  allQuestionsCount,
  acSubmissionNum,
}: {
  allQuestionsCount: QuestionsCount;
  acSubmissionNum: QuestionsCount;
}) {
  const [hovered, setHovered] = useState(false);
  const percentage = +((acSubmissionNum.All * 100) / allQuestionsCount.All).toFixed(1);
  return (
    <div
      className="relative m-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute">
        <div className="flex size-32 flex-col items-center justify-center">
          {hovered ? (
            <span className="text-2xl font-bold">
              {Math.floor(percentage)}
              <span className="text-base">{`.${percentage - Math.floor(percentage)}%`}</span>
            </span>
          ) : (
            <span className="text-2xl font-bold">{acSubmissionNum.All}</span>
          )}
          <span className="text-base text-gray-400">solved</span>
        </div>
      </div>
      <div className="flex size-32 flex-col items-center justify-center">
        <ProgressCircle percentage={percentage} />
      </div>
    </div>
  );
}

export default SolvedProblemCircle;
