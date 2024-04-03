import { Quiz, QuizAnswerType } from "@/types/quiz";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { ScrollArea } from "./ui/scroll-area";

interface HeaderProps {
  quizList: Quiz<QuizAnswerType>[];
}

export default function Header({ quizList }: HeaderProps) {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[200px] lg:w-[300px]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      123
                    </div>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Quiz List</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid h-[500px] gap-3 p-6 md:w-[250px] lg:w-[350px]">
                <ScrollArea>
                  {quizList.map((quiz) => (
                    <List question={quiz.question} id={quiz.id} />
                  ))}
                </ScrollArea>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

interface ListProps {
  id: string;
  question: string;
}

function List({ id, question }: ListProps) {
  return (
    <li className="row-span-3" onClick={() => console.log(id)}>
      <NavigationMenuLink asChild>
        <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
          {question}
        </div>
      </NavigationMenuLink>
    </li>
  );
}
