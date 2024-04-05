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
    options: orderOptionsGenerator(7),
    description: descriptionMap.Order,
    code: `new Promise(() => console.log(1));

Promise.resolve().then(() => console.log(2))
  .catch(() => console.log(3))
  .finally(() => console.log(4));

setTimeout(() => console.log(5), 0);

queueMicrotask(() => console.log(6));

console.log(7);
`,
    answer: [1, 7, 2, 6, 4, 5],
    explanation: {
      en: `Answer: 1 7 2 6 4 5
          \nThe function that enters the constructor of 'Promise' is processed synchronously.
          \nSince 'Promise' was not 'rejected', only the callback function in 'then' moves to the microtask queue.
          \nThe callback function of 'setTimeout' moves immediately to the macro task queue because the delay is 0ms.
          \nThe callback function of 'queueMicrotask' moves immediately to the microtask queue.
          \nThe macro task queue moves one by one to the call stack when both the call stack and the microtask queue are empty.`,
      kr: `정답 : 1 7 2 6 4 5
          \n'Promise'의 생성자로 들어간 함수는 동기적으로 처리됩니다.
          \n'Promise'를 'reject'하지 않았기 때문에 'then'에 있는 콜백 함수만 마이크로 태스크 큐로 이동합니다.
          \n'setTimeout'의 콜백 함수는 딜레이가 0ms이기 때문에 즉시 매크로 태스크 큐로 이동합니다.
          \n'queueMicrotask'의 콜백 함수는 즉시 마이크로 태스크 큐로 이동합니다.
          \n매크로 태스크 큐는 콜 스택과 마이크로 태스크 큐 모두 비었을 때 콜 스택으로 하나씩 이동합니다.`,
    },
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
