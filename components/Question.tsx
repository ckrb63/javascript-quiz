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
import { Quiz, QuizAnswerType } from "@/types/quiz";

interface QuestionProps {
  quiz: Quiz<QuizAnswerType>;
}

export default function Question({ quiz }: QuestionProps) {
  return (
    <Card className="m-4 w-1/3">
      <CardHeader>
        <CardTitle>{quiz.question}</CardTitle>
        <CardDescription>{quiz.description}</CardDescription>
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
