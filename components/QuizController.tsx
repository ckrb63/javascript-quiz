import { useAtom } from "jotai";
import { Button } from "./ui/button";
import { isSubmitButtonClickedAtom, quizIndexAtom } from "@/app/page";
import { quizCategoryAtom } from "./Header";
import { quizMap, quizMapPointer } from "@/data/quiz";
import { QuizCategories } from "@/types/quiz";

export default function QuizController() {
  const [isClicked, setIsClicked] = useAtom(isSubmitButtonClickedAtom);
  const [quizIndex, setQuizIndex] = useAtom(quizIndexAtom);
  const [selectedCategory, setSelectedCategory] = useAtom(quizCategoryAtom);

  const onClickNextButton = () => {
    if (quizIndex < quizMap[selectedCategory].length - 1) {
      setQuizIndex(quizIndex + 1);
    } else {
      if (quizMapPointer[selectedCategory]) {
        setSelectedCategory(quizMapPointer[selectedCategory] as QuizCategories);
      } else {
        alert("It is last Question!");
      }
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
