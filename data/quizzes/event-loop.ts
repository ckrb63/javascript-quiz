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
      en: "Q2. What values will be logged?",
      kr: "Q2. 어떤 값들이 출력될까요?",
    },
    options: [
      {
        number: 1,
        text: { kr: "'1 2 3' 그리고 '0 1 2'", en: "'1 2 3' and '0 1 2'" },
      },
      {
        number: 2,
        text: { kr: "'3 3 3' 그리고 '0 1 2'", en: "'3 3 3' and '0 1 2'" },
      },
      {
        number: 3,
        text: { kr: "'0 1 2' 그리고 '3 3 3'", en: "'0 1 2' and '3 3 3'" },
      },
      {
        number: 4,
        text: { kr: "'0 1 2' 그리고 '0 1 2'", en: "'0 1 2' and '0 1 2'" },
      },
    ],
    description: {
      en: "Consider i declared var and let",
      kr: "var와 let으로 선언된 i를 고려하세요",
    },
    code: `for(let i = 0; i < 3; i++){
  setTimeout(() => console.log(i), 0);
}

for(var i = 0; i < 3 ; i++){
  setTimeout( () => console.log(i), 0);
}`,
    answer: [1],
    explanation: {
      en: `The callback function in 'setTimeout' is called after all loops are executed.
      \nEach variable declared 'let' is a block-scope, so each has a new value.
      \nThe variable declared 'var' becomes a global value, and all have a value of '3' when the callback function is called.`,
      kr: `'setTimeout'의 콜백 함수는 모든 루프가 실행된 후에 호출됩니다. 
    \n'let'으로 선언된 변수는 블록-스코프이기 때문에 각각 새로운 값을 가집니다.
    \n'var'로 선언된 변수는 전역 값이 되어 콜백 함수가 호출될 땐 모두 '3'의 값을 가집니다.`,
    },
  },
];
