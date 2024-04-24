"use client";

import { useAtomValue } from "jotai";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CodeStyleText from "../../../components/CodeStyleText";
import { ScrollArea } from "@/components/ui/scroll-area";
import { isSubmittedAtom } from "../../atom";
import { useQuiz } from "@/hooks/useQuiz";

export default function Explanation() {
  const { quiz, language } = useQuiz();
  const isSubmitted = useAtomValue(isSubmittedAtom);

  return (
    isSubmitted && (
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
