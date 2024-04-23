"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Quiz } from "@/types/quiz";
import { useAtom, useAtomValue } from "jotai";
import { languageAtom, quizIndexAtom, quizzesAtom } from "../atom";

export default function Question() {
  const quizzes = useAtomValue(quizzesAtom);
  const quizIndex = useAtomValue(quizIndexAtom);
  const quiz = quizzes[quizIndex];
  const [language] = useAtom(languageAtom);

  return (
    <Card className="m-4 scrollbar-thumb-slate-300 md:mt-0 md:max-h-[80vh] md:w-1/2 md:overflow-y-scroll md:scrollbar lg:w-1/3">
      <CardHeader>
        <CardTitle>{quiz.question[language]}</CardTitle>
        {quiz.description && (
          <CardDescription>{quiz.description[language]}</CardDescription>
        )}
      </CardHeader>
      {quiz.code && (
        <CardContent>
          {/* <ScrollArea> */}
          <SyntaxHighlighter
            style={docco}
            showLineNumbers
            wrapLines
            language="javascript"
          >
            {quiz.code}
          </SyntaxHighlighter>
          {/* </ScrollArea> */}
        </CardContent>
      )}
    </Card>
  );
}
