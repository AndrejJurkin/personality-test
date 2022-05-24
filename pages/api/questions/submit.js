import answersById from "../../../data/answersById";

export default function handler(res, req) {
  const { method } = req;

  switch (method) {
    case "POST":
      return submit(res, req);
    default:
      return res.status(405).json({
        error: "Method not allowed",
      });
  }
}

function submit(res, req) {
  const {
    body: { answerIds },
  } = req;

  const weight = answerIds.reduce((acc, answerId) => {
    const { weight } = answersById[answerId];
    return acc + weight;
  }, 0);

  res.status(200).json({
    weight,
  });
}
