import React from "react";
import Nav from "../../components/Nav/Nav";
import getAbsoluteUrl from "../../utils/getAbsoluteUrl";
import Question from "../../components/Question/Question";
import Button from "../../components/Button/Button";
import useLazyRequest from "../../hooks/useLazyRequest";
import Router from "next/router";

export default function Test({ questions }) {
  const [questionIndex, setQuestionIndex] = React.useState(0);
  // A map of question id to answer id
  const [answers, setAnswers] = React.useState({});

  const [submit, { loading }] = useLazyRequest(
    "/api/questions/submit/",
    {
      method: "POST",
      body: JSON.stringify({ answerIds: Object.values(answers) }),
      headers: {
        "Content-Type": "application/json",
      },
    },
    {
      onSuccess: (response) => {
        Router.replace(`/test/result/${response.type}`);
      },
    }
  );

  const question = questions[questionIndex];

  const nextButtonText =
    questionIndex === questions.length - 1 ? "Submit" : "Next Question";

  function handleAnswerClick(answer) {
    setAnswers({
      ...answers,
      [question.id]: answer.id,
    });
  }

  function handleNextClick() {
    if (questionIndex === questions.length - 1) {
      submit();
      return;
    }

    setQuestionIndex(questionIndex + 1);
  }

  function handlePreviousClick() {
    setQuestionIndex(questionIndex - 1);
  }

  return (
    <div className="overflow-x-hidden bg-white">
      <Nav dark showDivider offsetTop />
      <main className="overflow-hidden pt-12 text-center">
        <section className="section-padding mx-auto max-w-3xl text-left text-slate-800">
          <h1 className="lg:5xl mb-4 font-display text-2xl md:text-3xl">
            Question {questionIndex + 1}/{questions?.length}
          </h1>
          <Question
            question={question}
            selectedAnswerId={answers[question.id]}
            onAnswerClick={handleAnswerClick}
          />
          <div className="mt-8 flex flex-row justify-between">
            <Button
              onClick={handlePreviousClick}
              disabled={questionIndex === 0 || loading}
              data-testid="previous-button"
            >
              Previous
            </Button>
            <Button
              onClick={handleNextClick}
              disabled={!answers[question.id] || loading}
              outline
              data-testid="next-button"
            >
              {nextButtonText}
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(getAbsoluteUrl("/api/questions")).then((res) =>
    res.json()
  );
  return {
    props: {
      questions: res.questions,
    },
  };
}
