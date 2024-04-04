import { isSubmittedAtom, languageAtom } from "@/app/page";
import { useAtom } from "jotai";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Quiz } from "@/types/quiz";

interface ExplanationProps {
  quiz: Quiz;
}

export default function Explanation({ quiz }: ExplanationProps) {
  const [isClicked] = useAtom(isSubmittedAtom);
  const [language] = useAtom(languageAtom);

  return (
    isClicked && (
      <Card className="m-4 w-1/3">
        <CardHeader>
          <CardTitle>Explanation</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{quiz.explanation[language]}</p>
        </CardContent>
      </Card>
    )
  );
}
