import React from "react";
import Answer from "../Answer/Answer";

export default function Question({
  question,
  selectedAnswerId,
  onAnswerClick,
}) {
  return (
    <>
      <div className="mb-8 font-display">{question.question}</div>
      <div className="flex flex-col gap-2">
        {question.answers.map((answer) => (
          <Answer
            key={answer.id}
            answer={answer}
            onAnswerClick={onAnswerClick}
            selected={answer.id === selectedAnswerId}
          />
        ))}
      </div>
    </>
  );
}
