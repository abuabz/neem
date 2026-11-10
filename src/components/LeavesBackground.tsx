import React from "react";

const LEAF_CONFIGS = [
  { left: "6%", duration: "16s", delay: "-2s", width: 22 },
  { left: "22%", duration: "22s", delay: "-9s", width: 30 },
  { left: "40%", duration: "18s", delay: "-5s", width: 20 },
  { left: "58%", duration: "25s", delay: "-13s", width: 26 },
  { left: "76%", duration: "17s", delay: "-7s", width: 32 },
  { left: "92%", duration: "21s", delay: "-1s", width: 22 },
];

export default function LeavesBackground() {
  return (
    <div className="sky" aria-hidden="true">
      {LEAF_CONFIGS.map((leaf, index) => (
        <svg
          key={index}
          className="lf"
          style={{
            left: leaf.left,
            animationDuration: leaf.duration,
            animationDelay: leaf.delay,
            width: `${leaf.width}px`,
          }}
          viewBox="0 0 40 60"
        >
          <path
            d="M20 58C20 40 20 20 20 2M20 42C12 38 7 31 6 22M20 42C28 38 33 31 34 22M20 26C14 22 11 16 11 10M20 26C26 22 29 16 29 10"
            stroke="#c89559"
            fill="none"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      ))}
    </div>
  );
}

