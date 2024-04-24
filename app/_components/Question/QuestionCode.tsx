"use client";

import { CardContent } from "@/components/ui/card";
import { useQuiz } from "@/hooks/useQuiz";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function QuestionCode() {
  const { quiz } = useQuiz();

  return (
    quiz.code && (
      <CardContent>
        <SyntaxHighlighter
          style={docco}
          showLineNumbers
          wrapLines
          language="javascript"
        >
          {quiz.code}
        </SyntaxHighlighter>
      </CardContent>
    )
  );
}
