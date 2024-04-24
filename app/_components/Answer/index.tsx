"use client";

import { Card } from "../../../components/ui/card";
import { useAtom, useAtomValue } from "jotai";
import { isSubmittedAtom, selectedAnswerAtom } from "../../atom";
import AnswerBadge from "./AnswerBadge";
import OrderBadge from "./OrderBadge";
import AnswerText from "./AnswerText";
import { useQuiz } from "@/hooks/useQuiz";
import { useMemo } from "react";

export default function Answer() {
  const [selectedAnswer, setSelectedAnswer] = useAtom(selectedAnswerAtom);
  const isSubmitted = useAtomValue(isSubmittedAtom);
  const { quiz, language } = useQuiz();

  const handleSingleSelect = (answerNumber: number) => {
    if (selectedAnswer[0] === answerNumber) setSelectedAnswer([]);
    else setSelectedAnswer([answerNumber]);
  };

  const handleMultiSelect = (answerNumber: number) => {
    const answerIndex = selectedAnswer.indexOf(answerNumber);
    let newSelectedAnswer = [];
    if (answerIndex >= 0) {
      newSelectedAnswer = selectedAnswer.filter(
        (_, index) => index !== answerIndex,
      );
    } else {
      newSelectedAnswer = [...selectedAnswer, answerNumber];
    }
    setSelectedAnswer(newSelectedAnswer);
  };

  const handleQuizOptionMap = useMemo(
    () => ({
      Select: handleSingleSelect,
      MultiSelect: handleMultiSelect,
      Order: handleMultiSelect,
    }),
    [],
  );

  const onClickOption = (answerNumber: number) => {
    if (!isSubmitted) handleQuizOptionMap[quiz.type](answerNumber);
  };

  return (
    <>
      {quiz.options.map((option, index) => {
        const isOptionSelected = selectedAnswer.includes(index + 1);
        const isAnswer = quiz.answer.includes(index + 1);
        return (
          <Card
            key={`${option.number} ${option.text}`}
            className={`relative m-4 ${!isSubmitted && "cursor-pointer"} ${isOptionSelected && "bg-slate-300"}`}
            onClick={() => onClickOption(index + 1)}
          >
            <AnswerBadge
              isSubmitted={isSubmitted}
              isAnswer={isAnswer}
              quizType={quiz.type}
            />
            <OrderBadge
              quizType={quiz.type}
              answer={quiz.answer.indexOf(index + 1)}
              order={selectedAnswer.indexOf(index + 1)}
              isSubmitted={isSubmitted}
            />
            <AnswerText option={option} index={index} language={language} />
          </Card>
        );
      })}
    </>
  );
}
