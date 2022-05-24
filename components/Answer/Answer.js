import React from "react";
import clsx from "clsx";

export default function Answer({ answer, selected, onAnswerClick }) {
  return (
    <div
      onClick={() => {
        onAnswerClick(answer);
      }}
      className={clsx("cursor-pointer rounded-md border p-3", {
        ["bg-gray-100"]: selected,
      })}
    >
      <span className="select-none text-sm">{answer.text}</span>
    </div>
  );
}
