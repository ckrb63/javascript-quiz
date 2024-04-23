"use client";

import { quizIndexAtom, quizzesAtom } from "@/app/atom";
import { CardContent } from "@/components/ui/card";
import { useAtomValue } from "jotai";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function QuestionCode() {
  const quizzes = useAtomValue(quizzesAtom);
  const quizIndex = useAtomValue(quizIndexAtom);
  const quiz = quizzes[quizIndex];

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
