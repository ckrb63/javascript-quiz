export type QuizOption = {
  number: number;
  text: string;
};

export type QuizAnswerType = number | number[];

export type Quiz<T> = {
  id: string;
  category: string;
  question: string;
  description?: string;
  code: string;
  options: QuizOption[];
  answer: T;
  explanation: string;
};
