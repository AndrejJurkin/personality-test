import answersById from "../../../data/answersById";

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      return submit(req, res);
    default:
      return res.status(405).json({
        error: "Method not allowed",
      });
  }
}

function submit(req, res) {
  const {
    body: { answerIds },
  } = req;

  const weight = answerIds.reduce((acc, answerId) => {
    const answer = answersById[answerId];
    return acc + answer.weight;
  }, 0);

  res.status(200).json({
    weight,
    type: weight > 0 ? "extrovert" : "introvert",
  });
}
