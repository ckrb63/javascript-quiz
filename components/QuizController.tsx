import { useAtom } from "jotai";
import { Button } from "./ui/button";
import { isSubmittedAtom, quizIndexAtom } from "@/app/page";
import { quizCategoryAtom } from "./Header";
import { quizMap, quizMapPointer } from "@/data/quiz";
import { QuizCategories } from "@/types/quiz";

export default function QuizController() {
  const [isClicked, setIsClicked] = useAtom(isSubmittedAtom);
  const [quizIndex, setQuizIndex] = useAtom(quizIndexAtom);
  const [selectedCategory, setSelectedCategory] = useAtom(quizCategoryAtom);

  const onClickNextButton = () => {
    const hasMoreQuizzes = quizIndex < quizMap[selectedCategory].length - 1;

    if (hasMoreQuizzes) {
      goToNextQuiz();
    } else {
      handleLastQuiz();
    }
  };

  const goToNextQuiz = () => {
    setQuizIndex(quizIndex + 1);
  };

  const handleLastQuiz = () => {
    const nextCategory = quizMapPointer[selectedCategory];
    if (nextCategory) {
      setSelectedCategory(quizMapPointer[selectedCategory] as QuizCategories);
    } else {
      alert("It is last Category, last Question!");
    }
  };

  return (
    <div className="flex flex-col  justify-center">
      <Button className="m-2" onClick={() => setIsClicked(!isClicked)}>
        {isClicked ? "Hide Answer" : "Submit"}
      </Button>
      <Button className="m-2" variant="secondary" onClick={onClickNextButton}>
        Next
      </Button>
    </div>
  );
}
