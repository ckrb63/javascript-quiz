import { orderOptionsGenerator } from "@/lib/options";
import { Quiz, QuizAnswerType } from "@/types/quiz";

export const EventLoopQuizList: Quiz<QuizAnswerType>[] = [
  {
    id: "1",
    category: "EventLoop",
    type: "Order",
    question: {
      en: "Predict the order of logging",
      kr: "출력되는 순서를 예측하세요",
    },
    options: orderOptionsGenerator(6),
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
    answer: 1,
    explanation: { en: "this is this", kr: "" },
  },
];
