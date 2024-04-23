import { Quiz } from "@/types/quiz";

export const ModuleQuizList: Quiz[] = [
  {
    id: "1",
    tags: ["Module"],
    type: "Select",
    question: {
      en: "Q1. ES6 module import as one object",
      kr: "Q1. ES6 모듈 전체 import",
    },
    options: [
      {
        number: 1,
        text: {
          kr: `import * as myModule from "module"`,
          en: `import * as myModule from "module"`,
        },
      },
      {
        number: 2,
        text: {
          kr: `import myModule from "module"`,
          en: `import myModule from "module"`,
        },
      },
      {
        number: 3,
        text: {
          kr: `import { myModule } from "module"`,
          en: `import { myModule } from "module"`,
        },
      },
      {
        number: 4,
        text: {
          kr: `import myModule.* from "module"`,
          en: `import myModule.* from "module"`,
        },
      },
    ],
    description: {
      en: "What syntax should I use to import all exported features from an ES6 module into a single object?",
      kr: "ES6 모듈에서 모든 내보낸 기능을 하나의 객체로 가져오려면 어떤 구문을 사용해야 하나요?",
    },
    answer: [1],
    explanation: {
      en: `import * as myModule from "module"`,
      kr: `import * as myModule from "module"`,
    },
  },
];
