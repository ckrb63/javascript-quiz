import { isSubmittedAtom, languageAtom } from "@/app/page";
import { useAtom } from "jotai";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Quiz } from "@/types/quiz";
import CodeStyleText from "./CodeStyleText";
import { ScrollArea } from "./ui/scroll-area";

interface ExplanationProps {
  quiz: Quiz;
}

export default function Explanation({ quiz }: ExplanationProps) {
  const [isClicked] = useAtom(isSubmittedAtom);
  const [language] = useAtom(languageAtom);

  return (
    isClicked && (
      <Card className="m-4 md:w-1/3">
        <CardHeader>
          <CardTitle>Explanation</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="md:max-h-[80vh]">
            <p className="whitespace-pre-wrap">
              <CodeStyleText text={quiz.explanation[language]} />
            </p>
          </ScrollArea>
        </CardContent>
      </Card>
    )
  );
}
