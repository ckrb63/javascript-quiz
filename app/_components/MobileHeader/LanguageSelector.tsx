"use client";

import { languageAtom } from "@/app/atom";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { languageMap } from "@/lib/language";
import { useAtom } from "jotai";

export default function LanguageSelector() {
  const [language, setLanguage] = useAtom(languageAtom);

  return (
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
  );
}
