"use client";

import { quizzes } from "@/data/quiz";
import { InternationalString } from "@/types/quiz";
import { atom, useAtom, useSetAtom } from "jotai";
import { atomWithStorage, loadable } from "jotai/utils";
import { selectedAnswerAtom } from "./_components/Answer";
import { Provider } from "jotai";
import { useEffect } from "react";

export const quizIndexAtom = atom(0);
export const quizzesAtom = atom(quizzes);
export const isSubmittedAtom = atom(false);
export const languageAtom = atomWithStorage<keyof InternationalString>(
  "language",
  "kr",
);
export const asyncLanguageAtom = atom(async (get) => get(languageAtom));
export const loadableAtom = loadable(asyncLanguageAtom);

export default function HomeAtomProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [quizIndex] = useAtom(quizIndexAtom);
  const [quizzes] = useAtom(quizzesAtom);
  const [language] = useAtom(loadableAtom);
  const setSelectedAnswer = useSetAtom(selectedAnswerAtom);
  const setIsSubmitted = useSetAtom(isSubmittedAtom);

  const quiz = quizzes[quizIndex];

  useEffect(() => {
    setSelectedAnswer([]);
    setIsSubmitted(false);
  }, [quiz]);

  if (!quiz) return;
  if (language.state === "loading") return;

  return <Provider>{children}</Provider>;
}
