import { QuizOption } from "@/types/quiz";

export const orderOptionsGenerator = (count: number): QuizOption[] => {
  return Array.from({ length: count }, (_, i) => ({
    number: i + 1,
    text: { en: "", kr: "" },
  }));
};
