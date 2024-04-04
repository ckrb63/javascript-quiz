import { Quiz, QuizAnswerType, QuizCategories } from "@/types/quiz";
import { EventLoopQuizList } from "./quizzes/event-loop";
import { HoistingQuizList } from "./quizzes/hoisting";

type QuizMap = {
  [key in QuizCategories]: Quiz<QuizAnswerType>[];
};

export const quizMap: QuizMap = {
  EventLoop: EventLoopQuizList,
  Hoisting: HoistingQuizList,
  Module: [],
  Scope: [],
  Closure: [],
  Class: [],
  Prototype: [],
  Generators: [],
  Numbers: [],
};

export const quizMapPointer: {
  [key in QuizCategories]: QuizCategories | null;
} = {
  EventLoop: "Hoisting",
  Hoisting: "Module",
  Module: "Scope",
  Scope: "Closure",
  Closure: "Class",
  Class: "Prototype",
  Prototype: "Generators",
  Generators: "Numbers",
  Numbers: null,
};
