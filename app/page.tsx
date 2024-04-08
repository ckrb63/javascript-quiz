"use client";

import Header, { quizCategoryAtom } from "@/components/Header";
import { quizMap } from "@/data/quiz";
import { atom, useAtom, useSetAtom } from "jotai";
import { atomWithStorage, loadable } from "jotai/utils";
import Question from "@/components/Question";
import Answer, { selectedAnswerAtom } from "@/components/Answer";
import QuizController from "@/components/QuizController";
import Explanation from "@/components/Explanation";
import { InternationalString } from "@/types/quiz";
import { useEffect } from "react";
import { MobileHeader } from "@/components/MobileHeader";

export const quizIndexAtom = atom(0);
export const isSubmittedAtom = atom(false);
export const languageAtom = atomWithStorage<keyof InternationalString>(
  "language",
  "kr",
);
export const asyncLanguageAtom = atom(async (get) => get(languageAtom));
export const loadableAtom = loadable(asyncLanguageAtom);

export default function Home() {
  const [selectedCategory] = useAtom(quizCategoryAtom);
  const [quizIndex] = useAtom(quizIndexAtom);
  const [language] = useAtom(loadableAtom);
  const setSelectedAnswer = useSetAtom(selectedAnswerAtom);
  const setIsSubmitted = useSetAtom(isSubmittedAtom);

  const quiz = quizMap[selectedCategory][quizIndex];

  useEffect(() => {
    setSelectedAnswer([]);
    setIsSubmitted(false);
  }, [quiz]);

  if (!quiz) return;
  if (language.state === "loading") return;

  return (
    <div className="h-screen md:overflow-hidden">
      <MobileHeader />
      <Header />
      <div className="w-screen items-center justify-center bg-white pb-4 md:flex md:h-screen">
        <Question quiz={quiz} />
        <div className="md:w-1/2 lg:w-1/3">
          <Answer />
          <QuizController />
        </div>
        <Explanation quiz={quiz} />
      </div>
    </div>
  );
}
