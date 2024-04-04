import {
  descriptionMap,
  orderOptionsGenerator,
} from "@/lib/quiz-text-generator";
import { Quiz } from "@/types/quiz";

export const EventLoopQuizList: Quiz[] = [
  {
    id: "1",
    category: "EventLoop",
    type: "Order",
    question: {
      en: "Q1. Predict the order of logging",
      kr: "Q1. 어떤 순서로 출력될까요?",
    },
    options: orderOptionsGenerator(6),
    description: descriptionMap.Order,
    code: `new Promise(() => console.log(1));

Promise.resolve().then(() => console.log(2))
  .catch(() => console.log(3))
  .finally(() => console.log(4));

setTimeout(() => console.log(5), 0);

queueMicrotask(() => console.log(6));

console.log(7);`,
    answer: [1],
    explanation: { en: "this is this", kr: "" },
  },
  {
    id: "2",
    category: "EventLoop",
    type: "Select",
    question: {
      en: "Predict the order of logging",
      kr: "출력되는 순서를 예측하세요",
    },
    options: orderOptionsGenerator(4),
    description: {
      en: "Look at the code, predict the order in which it is output to the console, and select and submit it in order",
      kr: "코드를 보고 콘솔에 출력되는 순서를 예측하여 순서대로 선택하여 제출하세요",
    },
    code: `new Promise(() => console.log(1));

Promise.resolve().then(() => console.log(2))
  .catch(() => console.log(3))
  .finally(() => console.log(4));

setTimeout(() => console.log(5), 0);

queueMicrotask(() => console.log(6));

console.log(7);`,
    answer: [1],
    explanation: { en: "this is this", kr: "" },
  },
];
