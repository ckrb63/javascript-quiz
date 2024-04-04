import { descriptionMap } from "@/lib/quiz-text-generator";
import { Quiz } from "@/types/quiz";

export const HoistingQuizList: Quiz[] = [
  {
    id: "1",
    category: "EventLoop",
    type: "Select",
    question: {
      en: "Q1. Predict the logging",
      kr: "Q1. 어떻게 출력될까요?",
    },
    options: [
      { number: 1, text: { en: "`foo` and `bar`", kr: "`foo` 그리고 `bar`" } },
    ],
    description: descriptionMap.Select,
    code: `console.log(foo);
console.log(bar);

var foo = 'foo';
let bar = 'bar';`,
    answer: [1],
    explanation: { en: "this is this", kr: "" },
  },
];
