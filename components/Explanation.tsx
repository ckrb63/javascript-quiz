import { isSubmitButtonClickedAtom } from "@/app/page";
import { useAtom } from "jotai";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Quiz, QuizAnswerType } from "@/types/quiz";

interface ExplanationProps {
  quiz: Quiz<QuizAnswerType>;
}

export default function Explanation({ quiz }: ExplanationProps) {
  const [isClicked] = useAtom(isSubmitButtonClickedAtom);

  return (
    isClicked && (
      <Card className="m-4 w-1/3">
        <CardHeader>
          <CardTitle>Explanation</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{quiz.explanation}</p>
        </CardContent>
      </Card>
    )
  );
}
