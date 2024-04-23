"use client";

import { Card } from "../../../components/ui/card";
import { atom, useAtom, useAtomValue } from "jotai";
import {
  isSubmittedAtom,
  languageAtom,
  quizIndexAtom,
  quizzesAtom,
} from "../../atom";
import AnswerBadge from "./AnswerBadge";
import OrderBadge from "./OrderBadge";
import AnswerText from "./AnswerText";

export const selectedAnswerAtom = atom<number[]>([]);

export default function Answer() {
  const [selectedAnswer, setSelectedAnswer] = useAtom(selectedAnswerAtom);
  const isSubmitted = useAtomValue(isSubmittedAtom);
  const quizIndex = useAtomValue(quizIndexAtom);
  const quizzes = useAtomValue(quizzesAtom);
  const language = useAtomValue(languageAtom);

  const quiz = quizzes[quizIndex];

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

  const handleQuizOptionMap = {
    Select: handleSingleSelect,
    MultiSelect: handleMultiSelect,
    Order: handleMultiSelect,
  };

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
