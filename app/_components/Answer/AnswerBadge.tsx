import { QuizType } from "@/types/quiz";
import { CheckCircle2 } from "lucide-react";

interface Props {
  quizType: QuizType;
  isAnswer: boolean;
  isSubmitted: boolean;
}

export default function AnswerBadge({
  quizType,
  isAnswer,
  isSubmitted,
}: Props) {
  const shouldRender = isSubmitted && isAnswer && quizType === "Select";

  return (
    shouldRender && (
      <div className="absolute left-[-10px] top-[-10px]">
        <CheckCircle2 width={25} height={25} color="green" />
      </div>
    )
  );
}
