import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { quizMap } from "@/data/quiz";
import { QuizCategories } from "@/types/quiz";
import { useAtom } from "jotai";
import { languageAtom, quizIndexAtom } from "@/app/page";
import { quizCategoryAtom } from "./Header";
import { useState } from "react";
import { languageMap } from "@/lib/language";

export function MobileHeader() {
  const [open, setOpen] = useState(false);
  const [quizIndex, setQuizIndex] = useAtom(quizIndexAtom);
  const [selectedCategory, setSelectedCategory] = useAtom(quizCategoryAtom); // atom name..?
  const [language, setLanguage] = useAtom(languageAtom);
  const quizList = quizMap[selectedCategory];

  const onClickCategoryItem = (category: QuizCategories) => {
    if (category !== selectedCategory) {
      setQuizIndex(0);
      setSelectedCategory(category);
    }
  };

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
            <AccordionItem value="item-1">
              <AccordionTrigger>Category</AccordionTrigger>
              <AccordionContent>
                {Object.keys(quizMap).map((category) => (
                  <div
                    key={category}
                    onClick={() =>
                      onClickCategoryItem(category as QuizCategories)
                    }
                    className={`${category === selectedCategory && "bg-accent text-accent-foreground"} row-span-3 block cursor-pointer select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}
                  >
                    {category}
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Question</AccordionTrigger>
              <AccordionContent>
                {quizList.map((quiz, index) => (
                  <div
                    key={`${quiz.category} ${quiz.id}`}
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
