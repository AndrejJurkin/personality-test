import questions from "./questions";

const answersById = questions.reduce((acc, question) => {
  const { id, answers } = question;
  return {
    ...acc,
    [id]: answers,
  };
}, {});

export default answersById;
