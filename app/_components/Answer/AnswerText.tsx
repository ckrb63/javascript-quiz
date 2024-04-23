import { CardHeader } from "@/components/ui/card";
import { InternationalString, QuizOption } from "@/types/quiz";
import BacktickStylingString from "../../../components/CodeStyleText";

interface Props {
  option: QuizOption;
  index: number;
  language: keyof InternationalString;
}

export default function AnswerText({ option, index, language }: Props) {
  return (
    <CardHeader>
      <div className="flex items-center space-x-2">
        <label className="flex cursor-pointer" htmlFor={`${option}${index}`}>
          <p className="mr-3">{option.number}</p>{" "}
          <p>
            <BacktickStylingString text={option.text[language]} />
          </p>
        </label>
      </div>
    </CardHeader>
  );
}
