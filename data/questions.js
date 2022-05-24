const questions = [
  {
    id: 1,
    question:
      "You’re really busy at work and a colleague is telling you their life story and personal woes. You:",
    answers: [
      {
        id: 1,
        text: "Don’t dare to interrupt them",
        weight: -1,
      },
      {
        id: 2,
        text: "Think it’s more important to give them some of your time; work can wait",
        weight: -1,
      },
      {
        id: 3,
        text: "Listen, but with only with half an ear",
        weight: 1,
      },
      {
        id: 4,
        text: "Interrupt and explain that you are really busy at the moment",
        weight: 1,
      },
    ],
  },
  {
    id: 2,
    question:
      "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:",
    answers: [
      {
        id: 5,
        text: "Look at your watch every two minutes",
        weight: -1,
      },
      {
        id: 6,
        text: "Complain in a loud voice, while tapping your foot impatiently",
        weight: 1,
      },
      {
        id: 7,
        text: "Explain to other people in the room that the doctor is always running late",
        weight: 1,
      },
      {
        id: 8,
        text: "Bubble with inner anger, but keep quiet",
        weight: -1,
      },
    ],
  },
  {
    id: 3,
    question:
      "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:",
    answers: [
      {
        id: 9,
        text: "Don’t dare contradict them",
        weight: -1,
      },
      {
        id: 10,
        text: "Think that they are obviously right",
        weight: -1,
      },
      {
        id: 11,
        text: "Defend your own point of view, tooth and nail",
        weight: 1,
      },
      {
        id: 12,
        text: "Continuously interrupt your colleague",
        weight: 1,
      },
    ],
  },
];

export default questions;
