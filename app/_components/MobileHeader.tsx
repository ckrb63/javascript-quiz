"use client";

import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { QuizCategories, QuizCategoriesKeys } from "@/types/quiz";
import { useAtom } from "jotai";
import { useState } from "react";
import { languageMap } from "@/lib/language";
import { languageAtom, quizIndexAtom, quizzesAtom } from "../atom";

export function MobileHeader() {
  const [open, setOpen] = useState(false);
  const [quizIndex, setQuizIndex] = useAtom(quizIndexAtom);
  const [quizzes] = useAtom(quizzesAtom);
  const [language, setLanguage] = useAtom(languageAtom);

  const onClickQuestionItem = (index: number) => {
    setQuizIndex(index);
    setOpen(false);
  };

  return (
    <div className="flex md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="ml-4 mt-4">
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-2">
              <AccordionTrigger>Question</AccordionTrigger>
              <AccordionContent>
                {quizzes.map((quiz, index) => (
                  <div
                    key={quiz.id}
                    onClick={() => onClickQuestionItem(index)}
                    className={`${index === quizIndex && "bg-accent text-accent-foreground"} row-span-3 block cursor-pointer select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}
                  >
                    {quiz.question[language]}
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Language</AccordionTrigger>
              <AccordionContent>
                {languageMap.map((lang) => (
                  <div
                    key={lang.fullName}
                    onClick={() => setLanguage(lang.shortName)}
                    className={`${lang.shortName === language && "bg-accent text-accent-foreground"} row-span-3 block cursor-pointer select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}
                  >
                    {lang.flag} {lang.fullName}
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </SheetContent>
      </Sheet>
      <h2 className="ml-4 mt-4 font-semibold">JS Quiz</h2>
    </div>
  );
}
