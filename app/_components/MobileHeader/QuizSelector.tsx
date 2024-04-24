"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useQuiz } from "@/hooks/useQuiz";

interface Props {
  onSelect: (index: number) => void;
}

export default function QuizSelector({ onSelect }: Props) {
  const { quizzes, quizIndex, language } = useQuiz();

  return (
    <AccordionItem value="item-2">
      <AccordionTrigger>Question</AccordionTrigger>
      <AccordionContent>
        {quizzes.map((quiz, index) => (
          <div
            key={quiz.id}
            onClick={() => onSelect(index)}
            className={`${index === quizIndex && "bg-accent text-accent-foreground"} row-span-3 block cursor-pointer select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}
          >
            {quiz.question[language]}
          </div>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
}
