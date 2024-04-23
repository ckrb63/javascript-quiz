import SubmitButton from "./SubmitButton";
import NextButton from "./NextButton";

export default function QuizController() {
  return (
    <div className="flex flex-col justify-center">
      <SubmitButton />
      <NextButton />
    </div>
  );
}
