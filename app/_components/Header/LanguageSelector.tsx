"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useQuiz } from "@/hooks/useQuiz";
import { languageMap } from "@/lib/language";

export default function LanguageSelector() {
  const { language, setLanguage } = useQuiz();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Language</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-40 gap-3 p-3">
              {languageMap.map((lang) => (
                <li
                  key={lang.fullName}
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
  );
}
