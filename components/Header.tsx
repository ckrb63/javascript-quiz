import { QuizCategories } from "@/types/quiz";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { ScrollArea } from "./ui/scroll-area";
import { atom, useAtom } from "jotai";
import { quizMap } from "@/data/quiz";
import { languageAtom, quizIndexAtom } from "@/app/page";
import { languageMap } from "@/lib/language";

export const quizCategoryAtom = atom<QuizCategories>("EventLoop");

export default function Header() {
  const [selectedCategory, setSelectedCategory] = useAtom(quizCategoryAtom);
  const [quizIndex, setQuizIndex] = useAtom(quizIndexAtom);
  const [language, setLanguage] = useAtom(languageAtom);

  const quiz = quizMap[selectedCategory][quizIndex];

  const onClickCategory = (category: QuizCategories) => {
    if (category !== selectedCategory) {
      setQuizIndex(0);
      setSelectedCategory(category);
    }
  };

  return (
    <div className="hidden w-screen justify-between border border-b p-2 md:flex">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>{selectedCategory}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[250px] lg:w-[350px]">
                <ScrollArea>
                  {Object.keys(quizMap).map((category) => (
                    <li
                      key={category}
                      className="row-span-3 cursor-pointer"
                      onClick={() =>
                        onClickCategory(category as QuizCategories)
                      }
                    >
                      <NavigationMenuLink asChild>
                        <div
                          className={`${category === selectedCategory && "bg-accent text-accent-foreground"} block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}
                        >
                          {category}
                        </div>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ScrollArea>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              {quiz.question[language]}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[250px] lg:w-[350px]">
                <ScrollArea className="max-h-[500px]">
                  {quizMap[selectedCategory].map((quiz, i) => (
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
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Language</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-40 gap-3 p-3">
                {languageMap.map((lang) => (
                  <li
                    onClick={() => setLanguage(lang.shortName)}
                    className={`${lang.shortName === language && "underline"} block cursor-pointer select-none space-y-1 rounded-md p-3 leading-none outline-none transition-colors hover:text-accent-foreground hover:underline`}
                  >
                    {lang.flag} {lang.fullName}
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
