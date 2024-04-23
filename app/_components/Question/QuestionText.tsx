"use client";

import { languageAtom, quizIndexAtom, quizzesAtom } from "@/app/atom";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { useAtomValue } from "jotai";

export default function QuestionText() {
  const quizzes = useAtomValue(quizzesAtom);
  const quizIndex = useAtomValue(quizIndexAtom);
  const language = useAtomValue(languageAtom);
  const quiz = quizzes[quizIndex];

  return (
    <>
      <CardTitle>{quiz.question[language]}</CardTitle>
      {quiz.description && (
        <CardDescription>{quiz.description[language]}</CardDescription>
      )}
    </>
  );
}
