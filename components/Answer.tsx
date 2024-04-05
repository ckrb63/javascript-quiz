import { QuizType } from "@/types/quiz";
import { Card, CardHeader } from "./ui/card";
import { atom, useAtom } from "jotai";
import { isSubmittedAtom, languageAtom, quizIndexAtom } from "@/app/page";
import { ArrowRightIcon, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";
import { quizCategoryAtom } from "./Header";
import { quizMap } from "@/data/quiz";
import BacktickStylingString from "./CodeStyleText";

export const selectedAnswerAtom = atom<number[]>([]);

export default function Answer() {
  const [language] = useAtom(languageAtom);
  const [selectedAnswer, setSelectedAnswer] = useAtom(selectedAnswerAtom);
  const [quizIndex] = useAtom(quizIndexAtom);
  const [quizCategory] = useAtom(quizCategoryAtom);
  const [isSubmitted] = useAtom(isSubmittedAtom);

  const quiz = quizMap[quizCategory][quizIndex];

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
            <CardHeader>
              <div className="flex items-center space-x-2">
                <label
                  className="flex cursor-pointer"
                  htmlFor={`${option}${index}`}
                >
                  <p className="mr-3">{option.number}</p>{" "}
                  <p>
                    <BacktickStylingString text={option.text[language]} />
                  </p>
                </label>
              </div>
            </CardHeader>
          </Card>
        );
      })}
    </>
  );
}

interface AnswerBadgeProps {
  quizType: QuizType;
  isAnswer: boolean;
  isSubmitted: boolean;
}

function AnswerBadge({ quizType, isAnswer, isSubmitted }: AnswerBadgeProps) {
  const shouldRender = isSubmitted && isAnswer && quizType === "Select";

  return (
    shouldRender && (
      <div className="absolute left-[-10px] top-[-10px]">
        <CheckCircle2 width={25} height={25} color="green" />
      </div>
    )
  );
}

interface OrderBadgeProps {
  quizType: QuizType;
  order: number;
  answer: number;
  isSubmitted: boolean;
}

function OrderBadge({ quizType, answer, order, isSubmitted }: OrderBadgeProps) {
  const isCorrect = answer === order && isSubmitted;
  const isWrong = answer !== order && isSubmitted;
  const isOptionSelected = order >= 0;
  const shouldRender =
    quizType === "Order" && (isOptionSelected || isSubmitted);

  const getOrderBadgeColor = (isCorrect: boolean, isWrong: boolean) => {
    if (isCorrect) return "border-green-700 text-green-700";
    if (isWrong) return "border-red-400 text-red-400";
    return "border-gray-400 text-gray-400";
  };

  const badgeColor = getOrderBadgeColor(isCorrect, isWrong);

  return (
    shouldRender && (
      <div className="absolute left-[-10px] top-[-10px] flex items-center">
        <div
          className={`flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 text-sm ${badgeColor}`}
        >
          {!isOptionSelected ? "X" : order + 1}
        </div>
        {isWrong && <ArrowRightIcon color="rgb(248,113,113)" />}
        {isWrong && (
          <div className="flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 border-green-700 text-sm text-green-700">
            {answer + 1}
          </div>
        )}
      </div>
    )
  );
}
