import QuizSelector from "./QuizSelector";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  return (
    <div className="hidden w-screen justify-between border border-b p-2 md:flex">
      <div className="flex items-center">
        <h2 className="mx-4 font-semibold">JS Quiz</h2>
        <QuizSelector />
      </div>
      <LanguageSelector />
    </div>
  );
}
