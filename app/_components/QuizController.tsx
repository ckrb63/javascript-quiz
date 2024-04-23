"use client";

import { useAtom } from "jotai";
import { Button } from "@/components/ui/button";
import { QuizCategories } from "@/types/quiz";
import { isSubmittedAtom, quizIndexAtom, quizzesAtom } from "../atom";

export default function QuizController() {
  const [isSubmitted, setIsSubmitted] = useAtom(isSubmittedAtom);
  const [quizzes] = useAtom(quizzesAtom);
  const [quizIndex, setQuizIndex] = useAtom(quizIndexAtom);

  const onClickNextButton = () => {
    const hasMoreQuizzes = quizIndex < quizzes.length - 1;
    setIsSubmitted(false);
    if (hasMoreQuizzes) {
      goToNextQuiz();
    } else {
      handleLastQuiz();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToNextQuiz = () => {
    setQuizIndex(quizIndex + 1);
  };

  const handleLastQuiz = () => {
    alert("It is last Question!");
  };

  return (
    <div className="flex flex-col justify-center">
      <Button
        className="mx-4 my-1"
        onClick={() => setIsSubmitted(!isSubmitted)}
      >
        {isSubmitted ? "Hide Answer" : "Submit"}
      </Button>
      <Button
        className="mx-4 my-1"
        variant="secondary"
        onClick={onClickNextButton}
      >
        Next
      </Button>
    </div>
  );
}
