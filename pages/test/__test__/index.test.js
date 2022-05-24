import { act, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import questions from "../../../data/questions";
import Test from "../index";

describe("Test Page", () => {
  it("renders Nav", () => {
    const { getByRole } = render(<Test questions={questions} />);
    const nav = getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });

  it("renders first question", () => {
    const { getByText } = render(<Test questions={questions} />);
    const question = getByText(questions[0].question);
    expect(question).toBeInTheDocument();
    questions[0].answers.forEach((answer) => {
      expect(getByText(answer.text)).toBeInTheDocument();
    });
  });

  it("disables previous button if on first question", () => {
    const { getByRole } = render(<Test questions={questions} />);
    const prevButton = getByRole("button", { name: "Previous" });
    expect(prevButton).toBeDisabled();
  });

  it("disables next question button while no answer is selected", () => {
    const { getByRole } = render(<Test questions={questions} />);
    const firstQuestion = getByRole("button", { name: "Next Question" });
    expect(firstQuestion).toBeDisabled();
  });

  it("renders next question", () => {
    const { getByText, getByTestId } = render(<Test questions={questions} />);
    const firstAnswer = getByText(questions[0].answers[0].text);
    const nextButton = getByTestId("next-button");

    act(() => {
      firstAnswer.click();
    });

    act(() => {
      nextButton.click();
    });

    const secondQuestion = getByText(questions[1].question);
    expect(secondQuestion).toBeInTheDocument();
    questions[1].answers.forEach((answer) => {
      expect(getByText(answer.text)).toBeInTheDocument();
    });
  });

  it("renders page without changes", () => {
    const { container } = render(<Test questions={questions} />);
    expect(container).toMatchSnapshot();
  });
});
