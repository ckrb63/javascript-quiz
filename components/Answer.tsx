import { Quiz, QuizAnswerType } from "@/types/quiz";
import { Card, CardHeader } from "./ui/card";
import { Checkbox } from "./ui/checkbox";

interface AnswerProps {
  quiz: Quiz<QuizAnswerType>;
}

export default function Answer({ quiz }: AnswerProps) {
  return (
    <>
      {quiz.options.map((option, index) => (
        <Card className="m-2">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Checkbox id={`${option}${index}`} />
              <label className="cursor-pointer" htmlFor={`${option}${index}`}>
                {option.text}
              </label>
            </div>
          </CardHeader>
        </Card>
      ))}
    </>
  );
}
