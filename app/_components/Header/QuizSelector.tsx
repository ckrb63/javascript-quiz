"use client";

import { languageAtom, quizIndexAtom, quizzesAtom } from "@/app/atom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAtom, useAtomValue } from "jotai";

export default function QuizSelector() {
  const quizzes = useAtomValue(quizzesAtom);
  const [quizIndex, setQuizIndex] = useAtom(quizIndexAtom);
  const language = useAtomValue(languageAtom);

  const quiz = quizzes[quizIndex];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            {quiz.question[language]}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[250px] lg:w-[350px]">
              <ScrollArea className="max-h-[500px]">
                {quizzes.map((quiz, i) => (
                  <li
                    key={`${quiz.id} ${quiz.question}`}
                    className="row-span-3 cursor-pointer"
                    onClick={() => setQuizIndex(i)}
                  >
                    <NavigationMenuLink asChild>
                      <div
                        className={`${i === quizIndex && "bg-accent text-accent-foreground"} block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}
                      >
                        {quiz.question[language]}
                      </div>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ScrollArea>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
