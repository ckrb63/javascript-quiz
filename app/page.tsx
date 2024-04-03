"use client";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { quizList } from "@/data/quiz";
import { Quiz, QuizAnswerType } from "@/types/quiz";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);
  const quiz = quizList[0];
  return (
    <div>
      <Header quizList={quizList} />
      <div className="flex h-screen w-screen items-center justify-center bg-white">
        <Card className="m-4 w-1/3">
          <CardHeader>
            <CardTitle>{quiz.question}</CardTitle>
            <CardDescription>{quiz.description}</CardDescription>
          </CardHeader>
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
        </Card>
        <div className="w-1/3">
          {quiz.options.map((option, index) => (
            <Card className="m-2">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Checkbox id={`${option}${index}`} />
                  <label
                    className="cursor-pointer"
                    htmlFor={`${option}${index}`}
                  >
                    {option.text}
                  </label>
                </div>
              </CardHeader>
            </Card>
          ))}
          <div className="flex flex-col  justify-center">
            <Button className="m-2" onClick={() => setIsClicked(!isClicked)}>
              {isClicked ? "Hide Answer" : "Submit"}
            </Button>
            <Button className="m-2" variant="secondary">
              Next
            </Button>
          </div>
        </div>
        {isClicked && (
          <Card className="m-4 w-1/3">
            <CardHeader>
              <CardTitle>Explanation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{quiz.explanation}</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
