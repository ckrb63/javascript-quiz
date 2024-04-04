import { QuizOption, QuizType } from "@/types/quiz";

export const orderOptionsGenerator = (count: number): QuizOption[] => {
  return Array.from({ length: count }, (_, i) => ({
    number: i + 1,
    text: { en: "", kr: "" },
  }));
};

export const descriptionMap: { [key in QuizType]: { en: string; kr: string } } =
  {
    Select: {
      en: "Please select one correct answer from the choices and submit",
      kr: "선택지 중 정답 하나를 선택하여 제출하세요",
    },
    MultiSelect: {
      en: "Please select one or more correct answers from the choices and submit",
      kr: "선택지 중 정답 하나 혹은 여러 개를 선택하여 제출하세요",
    },
    Order: {
      en: "Predict the order of appearance, select accordingly in sequence, and submit",
      kr: "출력될 순서를 예측하여 순서대로 선택하고 제출하세요",
    },
  };
