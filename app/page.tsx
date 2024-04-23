import Header from "./_components/Header";
import Question from "./_components/Question";
import Answer from "@/app/_components/Answer";
import QuizController from "./_components/QuizController";
import Explanation from "./_components/Explanation";
import { MobileHeader } from "./_components/MobileHeader";
import ServerComponent from "../components/ServerComponent";
import HomeAtomProvider from "./atom";

export default function Home() {
  console.log("is server");
  return (
    <HomeAtomProvider>
      <div className="h-screen md:overflow-hidden">
        <ServerComponent />
        <MobileHeader />
        <Header />
        <div className="w-screen items-center justify-center bg-white pb-4 md:flex md:h-screen">
          <Question />
          <div className="md:w-1/2 lg:w-1/3">
            <Answer />
            <QuizController />
          </div>
          <Explanation />
        </div>
      </div>
    </HomeAtomProvider>
  );
}
