export type QuizOption = {
  number: number;
  text: string;
};

export type QuizAnswerType = number | number[];

export type Quiz<T> = {
  id: string;
  category: QuizCategories;
  question: string;
  description?: string;
  code?: string;
  options: QuizOption[];
  answer: T;
  explanation: string;
};

export type QuizCategories =
  | "EventLoop"
  | "Hoisting"
  | "Module"
  | "Scope"
  | "Closure"
  | "Class"
  | "Prototype"
  | "Generators"
  | "Numbers";
