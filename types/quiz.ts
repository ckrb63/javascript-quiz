export type InternationalString = {
  en: string;
  kr: string;
};

export type QuizOption = {
  number: number;
  text: InternationalString;
};

export type QuizType = "Order" | "Select" | "MultiSelect";

export type QuizAnswerType = number | number[];

export type Quiz<T> = {
  id: string;
  category: QuizCategories;
  type: QuizType;
  question: InternationalString;
  description?: InternationalString;
  code?: string;
  options: QuizOption[];
  answer: T;
  explanation: InternationalString;
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
