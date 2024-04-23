"use client";

import { useAtomValue } from "jotai";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CodeStyleText from "../../../components/CodeStyleText";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  isSubmittedAtom,
  languageAtom,
  quizIndexAtom,
  quizzesAtom,
} from "../../atom";

export default function Explanation() {
  const isClicked = useAtomValue(isSubmittedAtom);
  const language = useAtomValue(languageAtom);
  const quizzes = useAtomValue(quizzesAtom);
  const quizIndex = useAtomValue(quizIndexAtom);
  const quiz = quizzes[quizIndex];

  return (
    isClicked && (
      <Card className="m-4 md:w-1/3">
        <CardHeader>
          <CardTitle>Explanation</CardTitle>
        </CardHeader>
        <ScrollArea className="overflow-scroll md:max-h-[80vh]">
          <CardContent>
            <p className="whitespace-pre-wrap">
              <CodeStyleText text={quiz.explanation[language]} />
            </p>
          </CardContent>
        </ScrollArea>
      </Card>
    )
  );
}
