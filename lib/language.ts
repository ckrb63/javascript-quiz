import { InternationalString } from "@/types/quiz";

type languageMapType = {
  shortName: keyof InternationalString;
  fullName: string;
  flag: string;
};

export const languageMap: languageMapType[] = [
  { shortName: "kr", fullName: "한국어", flag: "🇰🇷" },
  { shortName: "en", fullName: "English", flag: "🇬🇧" },
];
