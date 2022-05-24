import questions from "./questions";

const answersById = questions.reduce((acc, question) => {
  const { answers } = question;
  return {
    ...acc,
    ...answers.reduce((acc, answer) => {
      return {
        ...acc,
        [answer.id]: answer,
      };
    }, {}),
  };
}, {});

export default answersById;
