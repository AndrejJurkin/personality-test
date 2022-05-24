import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Question from "../Question";

describe("Question", () => {
  it("renders a heading", () => {
    const { getByText } = render(<Question question={question} />);
    expect(getByText(/Question Title/i)).toBeInTheDocument();
  });

  it("renders all questions", () => {
    const { getByText } = render(<Question question={question} />);
    question.answers.forEach((answer) => {
      expect(getByText(answer.text)).toBeInTheDocument();
    });
  });

  it("calls onAnswerClick", () => {
    const onAnswerClick = jest.fn();
    const { getByText } = render(
      <Question question={question} onAnswerClick={onAnswerClick} />
    );
    getByText(question.answers[0].text).click();
    expect(onAnswerClick).toHaveBeenCalled();
  });

  it("highlights selected answer", () => {
    const { getByTestId } = render(
      <Question question={question} selectedAnswerId={question.answers[0].id} />
    );
    const selectedAnswer = getByTestId(question.answers[0].id);
    expect(selectedAnswer).toHaveClass("bg-gray-100");
  });

  it("renders component unchanged", () => {
    const { container } = render(
      <Question question={question} selectedAnswerId={question.answers[0].id} />
    );
    expect(container).toMatchSnapshot();
  });
});

const question = {
  id: 1,
  question: "Question Title",
  answers: [
    {
      id: 1,
      text: "Question Answer 1",
      weight: -1,
    },
    {
      id: 2,
      text: "Question Answer 2",
      weight: -1,
    },
    {
      id: 3,
      text: "Question Answer 3",
      weight: 1,
    },
    {
      id: 4,
      text: "Question Answer 4",
      weight: 1,
    },
  ],
};
