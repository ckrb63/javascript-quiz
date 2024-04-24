import { languageAtom, quizIndexAtom, quizzesAtom } from "@/app/atom";
import { useAtom } from "jotai";

export function useQuiz() {
  const [quizzes, setQuizzes] = useAtom(quizzesAtom);
  const [quizIndex, setQuizIndex] = useAtom(quizIndexAtom);
  const [language, setLanguage] = useAtom(languageAtom);

  const quiz = quizzes[quizIndex];

  return {
    quiz,
    quizzes,
    setQuizzes,
    quizIndex,
    setQuizIndex,
    language,
    setLanguage,
  };
}
