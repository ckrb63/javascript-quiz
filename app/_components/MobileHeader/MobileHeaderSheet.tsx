"use client";

import { quizIndexAtom } from "@/app/atom";
import { Accordion } from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useSetAtom } from "jotai";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import QuizSelector from "./QuizSelector";
import LanguageSelector from "./LanguageSelector";

export default function MobileHeaderSheet() {
  const [open, setOpen] = useState(false);
  const setQuizIndex = useSetAtom(quizIndexAtom);

  const selectQuestion = (index: number) => {
    setQuizIndex(index);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="ml-4 mt-4">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="left">
        <Accordion type="single" collapsible>
          <QuizSelector onSelect={selectQuestion} />
          <LanguageSelector />
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}
