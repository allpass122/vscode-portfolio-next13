"use client";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProgressCircle({ percentage }: { percentage: number }) {
  return (
    <CircularProgressbar
      value={+percentage.toFixed(1)}
      strokeWidth={4}
      styles={buildStyles({
        pathColor: "rgb(251, 146, 60)",
        trailColor: "gray",
      })}
    />
  );
}

export default ProgressCircle;
