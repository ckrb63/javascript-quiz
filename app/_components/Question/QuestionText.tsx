"use client";

import { CardDescription, CardTitle } from "@/components/ui/card";
import { useQuiz } from "@/hooks/useQuiz";

export default function QuestionText() {
  const { quiz, language } = useQuiz();

  return (
    <>
      <CardTitle>{quiz.question[language]}</CardTitle>
      {quiz.description && (
        <CardDescription>{quiz.description[language]}</CardDescription>
      )}
    </>
  );
}
