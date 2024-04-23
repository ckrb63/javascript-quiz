"use client";

import { isSubmittedAtom, quizIndexAtom, quizzesAtom } from "@/app/atom";
import { Button } from "@/components/ui/button";
import { useAtom, useAtomValue, useSetAtom } from "jotai";

export default function NextButton() {
  const quizzes = useAtomValue(quizzesAtom);
  const [quizIndex, setQuizIndex] = useAtom(quizIndexAtom);
  const setIsSubmitted = useSetAtom(isSubmittedAtom);

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
    <Button
      className="mx-4 my-1"
      variant="secondary"
      onClick={onClickNextButton}
    >
      Next
    </Button>
  );
}
