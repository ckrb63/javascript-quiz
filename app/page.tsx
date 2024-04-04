"use client";

import Header, { quizCategoryAtom } from "@/components/Header";
import { quizMap } from "@/data/quiz";
import { atom, useAtom } from "jotai";
import Question from "@/components/Question";
import Answer from "@/components/Answer";
import QuizController from "@/components/QuizController";
import Explanation from "@/components/Explanation";

export const quizIndexAtom = atom(0);
export const isSubmitButtonClickedAtom = atom(false);

export default function Home() {
  const [selectedCategory] = useAtom(quizCategoryAtom);
  const [quizIndex] = useAtom(quizIndexAtom);

  const quiz = quizMap[selectedCategory][quizIndex];
  if (!quiz) return;

  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <div className="flex h-screen w-screen items-center justify-center bg-white pb-4">
        <Question quiz={quiz} />
        <div className="w-1/3">
          <Answer quiz={quiz} />
          <QuizController />
        </div>
        <Explanation quiz={quiz} />
      </div>
    </div>
  );
}
