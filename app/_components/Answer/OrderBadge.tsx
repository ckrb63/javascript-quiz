import { QuizType } from "@/types/quiz";
import { ArrowRightIcon } from "lucide-react";

interface Props {
  quizType: QuizType;
  order: number;
  answer: number;
  isSubmitted: boolean;
}

export default function OrderBadge({
  quizType,
  answer,
  order,
  isSubmitted,
}: Props) {
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
