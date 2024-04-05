import { ScrollArea } from "./ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Quiz } from "@/types/quiz";
import { languageAtom } from "@/app/page";
import { useAtom } from "jotai";

interface QuestionProps {
  quiz: Quiz;
}

export default function Question({ quiz }: QuestionProps) {
  const [language] = useAtom(languageAtom);

  return (
    <Card className="m-4 mt-16 md:mt-0 md:w-1/3">
      <CardHeader>
        <CardTitle>{quiz.question[language]}</CardTitle>
        {quiz.description && (
          <CardDescription>{quiz.description[language]}</CardDescription>
        )}
      </CardHeader>
      {quiz.code && (
        <CardContent>
          <ScrollArea>
            <SyntaxHighlighter
              style={docco}
              showLineNumbers
              language="javascript"
            >
              {quiz.code}
            </SyntaxHighlighter>
          </ScrollArea>
        </CardContent>
      )}
    </Card>
  );
}
