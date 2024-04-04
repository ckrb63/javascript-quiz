import { Quiz, QuizAnswerType } from "@/types/quiz";

export const HoistingQuizList: Quiz<QuizAnswerType>[] = [
  {
    id: "1",
    category: "Hoisting",
    question: "select log orders",
    options: [
      { number: 1, text: "console.log(1)" },
      { number: 1, text: "console.log(1)" },
      { number: 1, text: "console.log(1)" },
    ],
    description: "just select",
    code: `function add(a, b) {
      return a + b;
}`,
    answer: 1,
    explanation: "this is this",
  },
  {
    id: "2",
    category: "Hoisting",
    question: "question 2",
    options: [
      { number: 1, text: "console.log(1)" },
      { number: 1, text: "console.log(1)" },
      { number: 1, text: "console.log(1)" },
    ],
    description: "just select",
    code: `function add(a, b) {
      return a + b;
}`,
    answer: 1,
    explanation: "this is this",
  },
  {
    id: "3",
    category: "Hoisting",
    question: "this is question 3",
    options: [
      { number: 1, text: "console.log(1)" },
      { number: 1, text: "console.log(1)" },
      { number: 1, text: "console.log(1)" },
    ],
    description: "just select",
    code: `function add(a, b) {
      return a + b;
}`,
    answer: 1,
    explanation: "this is this",
  },
];
