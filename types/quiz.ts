export type InternationalString = {
  en: string;
  kr: string;
};

export type QuizOption = {
  number: number;
  text: InternationalString;
};

export type QuizType = "Order" | "Select" | "MultiSelect";

export type Quiz = {
  id: string;
  tags: QuizCategories[];
  type: QuizType;
  question: InternationalString;
  description?: InternationalString;
  code?: string;
  options: QuizOption[];
  answer: number[];
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

export const QuizCategoriesKeys: QuizCategories[] = [
  "EventLoop",
  "Hoisting",
  "Module",
  "Scope",
  "Closure",
  "Class",
  "Prototype",
  "Generators",
  "Numbers",
];
