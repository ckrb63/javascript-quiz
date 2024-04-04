import { Quiz, QuizAnswerType } from "@/types/quiz";
import { Card, CardHeader } from "./ui/card";
import { atom, useAtom } from "jotai";
import { languageAtom } from "@/app/page";

interface AnswerProps {
  quiz: Quiz<QuizAnswerType>;
}

export const selectedAnswerAtom = atom<number[]>([]);

export default function Answer({ quiz }: AnswerProps) {
  const [language] = useAtom(languageAtom);
  const [selectedAnswer, setSelectedAnswer] = useAtom(selectedAnswerAtom);

  const onClickOption = (answerNumber: number) => {
    if (quiz.type === "Select") {
      setSelectedAnswer([answerNumber]);
      return;
    }

    if (quiz.type === "MultiSelect" || "Order") {
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
    }
  };

  return (
    <>
      {quiz.options.map((option, index) => (
        <Card
          className={`m-2 cursor-pointer ${selectedAnswer.includes(index + 1) && "bg-slate-300"}`}
          onClick={() => onClickOption(index + 1)}
        >
          <CardHeader>
            <div className="flex items-center space-x-2">
              <label className="cursor-pointer" htmlFor={`${option}${index}`}>
                {option.number} {option.text[language]}
              </label>
            </div>
          </CardHeader>
        </Card>
      ))}
    </>
  );
}
