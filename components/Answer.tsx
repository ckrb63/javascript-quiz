import { Quiz, QuizType } from "@/types/quiz";
import { Card, CardHeader } from "./ui/card";
import { atom, useAtom } from "jotai";
import { isSubmittedAtom, languageAtom, quizIndexAtom } from "@/app/page";
import { CheckCircle2 } from "lucide-react";
import { useEffect } from "react";
import { quizCategoryAtom } from "./Header";
import { quizMap } from "@/data/quiz";

export const selectedAnswerAtom = atom<number[]>([]);

export default function Answer() {
  const [language] = useAtom(languageAtom);
  const [selectedAnswer, setSelectedAnswer] = useAtom(selectedAnswerAtom);
  const [quizIndex] = useAtom(quizIndexAtom);
  const [quizCategory] = useAtom(quizCategoryAtom);
  const [isSubmitted] = useAtom(isSubmittedAtom);

  const quiz = quizMap[quizCategory][quizIndex];

  useEffect(() => {
    setSelectedAnswer([]);
  }, [quizIndex, quizCategory]);

  const handleSingleSelect = (answerNumber: number) => {
    setSelectedAnswer([answerNumber]);
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
        const isRealAnswer = quiz.answer.includes(index + 1);
        return (
          <Card
            className={`relative m-2 ${!isSubmitted && "cursor-pointer"} ${isOptionSelected && "bg-slate-300"}`}
            onClick={() => onClickOption(index + 1)}
          >
            <CheckAnswerIcon
              isSubmitted={isSubmitted}
              isAnswer={isRealAnswer}
              type={quiz.type}
            />
            <OrderIcon
              quiz={quiz}
              answer={quiz.answer.indexOf(index + 1)}
              order={selectedAnswer.indexOf(index + 1)}
              isSubmitted={isSubmitted}
            />
            <CardHeader>
              <div className="flex items-center space-x-2">
                <label className="cursor-pointer" htmlFor={`${option}${index}`}>
                  {option.number} {option.text[language]}
                </label>
              </div>
            </CardHeader>
          </Card>
        );
      })}
    </>
  );
}

interface CheckAnswerIconProps {
  isSubmitted: boolean;
  isAnswer: boolean;
  type: QuizType;
}

function CheckAnswerIcon({
  isSubmitted,
  isAnswer,
  type,
}: CheckAnswerIconProps) {
  const isValid = isSubmitted && isAnswer && type === "Select";

  return (
    isValid && (
      <div className="absolute left-[-10px] top-[-10px]">
        <CheckCircle2 width={25} height={25} color="green" />
      </div>
    )
  );
}

interface OrderIconProps {
  quiz: Quiz;
  order: number;
  answer: number;
  isSubmitted: boolean;
}

function OrderIcon({ quiz, answer, order, isSubmitted }: OrderIconProps) {
  const isSubmittedAndCorrect = answer === order && isSubmitted;
  const isSubmittedAndWrong = answer !== order && isSubmitted;

  const orderIconColor = isSubmittedAndCorrect
    ? "border-green-700 text-green-700"
    : isSubmittedAndWrong
      ? "border-red-400 text-red-400"
      : "border-gray-400 text-gray-400";

  return (
    quiz.type === "Order" &&
    order >= 0 && (
      <div>
        <div
          className={`absolute left-[-10px] top-[-10px] flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 text-sm ${orderIconColor}`}
        >
          {order + 1}
        </div>
      </div>
    )
  );
}
